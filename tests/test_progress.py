"""Check that a new build keeps the progress saved by the version that is live today.

Usage: python tests/test_progress.py OLD_DIR
OLD_DIR holds elena.html and sarah.html as they are on main (e.g. `git show origin/main:sarah.html > old/sarah.html`).
Both versions are served from the same origin, as on GitHub Pages, so they share the browser's storage.
"""
import asyncio
import functools
import http.server
import pathlib
import shutil
import sys
import tempfile
import threading

from playwright.async_api import async_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
OLD = pathlib.Path(sys.argv[1]).resolve()
FAIL = []


def check(cond, msg):
    print('ok  ' if cond else 'FAIL', msg)
    if not cond:
        FAIL.append(msg)


async def play_answers(pg, count):
    for _ in range(count):
        q = await pg.evaluate("()=>{const r=__TEST__.run();const q=r.qs[r.i];return {t:q.t,a:q.a,c:q.c||null,pad:!!q.pad}}")
        if q['t'] in ('qcm', 'fill', 'dchoix'):
            await pg.click(f'.choice[data-i="{q["c"].index(q["a"])}"]')
        elif q['pad']:
            await pg.keyboard.type(str(q['a'])); await pg.keyboard.press('Enter')
        else:
            await pg.fill('#inp', str(q['a'] if q['t'] == 'num' else q['a'][0])); await pg.click('[data-act="check"]')
        await pg.click('#next')


async def main():
    site = pathlib.Path(tempfile.mkdtemp())
    (site / 'old').mkdir(); (site / 'new').mkdir()
    for f in ('elena.html', 'sarah.html'):
        shutil.copy(OLD / f, site / 'old' / f)
    for f in ('elena.html', 'sarah.html', 'elena-harmonie.html', 'sarah-meute.html', 'elena-livre.html', 'sarah-vampire.html', 'index.html'):
        shutil.copy(ROOT / f, site / 'new' / f)
    class Quiet(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a):
            pass
    handler = functools.partial(Quiet, directory=str(site))
    httpd = http.server.ThreadingHTTPServer(('127.0.0.1', 0), handler)
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    base = f'http://127.0.0.1:{httpd.server_address[1]}'

    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={'width': 390, 'height': 844})
        pg = await ctx.new_page()
        errors = []
        pg.on('pageerror', lambda e: errors.append(str(e)))
        for kid, new_game, third in (('elena', 'elena-harmonie', 'elena-livre'), ('sarah', 'sarah-meute', 'sarah-vampire')):
            key = f'revision-{kid}-v1'
            # 1. Today's live version: finish day 1, stop in the middle of day 2.
            await pg.goto(f'{base}/old/{kid}.html'); await pg.wait_for_timeout(300)
            await pg.click('.hero [data-act="day"]'); await pg.click('[data-act="start"]')
            n = await pg.evaluate('()=>__TEST__.run().qs.length')
            await play_answers(pg, n); await pg.wait_for_timeout(300)
            await pg.click('[data-act="home"]'); await pg.click('.hero [data-act="day"]'); await pg.click('[data-act="start"]')
            await play_answers(pg, 3)
            before = await pg.evaluate(f'()=>localStorage.getItem("{key}")')

            # 2. The new build of the same game reads that progress unchanged.
            await pg.goto(f'{base}/new/{kid}.html'); await pg.wait_for_timeout(400)
            after = await pg.evaluate(f'()=>localStorage.getItem("{key}")')
            check(before == after, f'{kid}: opening the new version does not rewrite the saved progress')
            cta = await pg.inner_text('.hero button.primary')
            check('Reprendre la mission 2' in cta, f'{kid}: new version offers to resume mission 2 ({cta!r})')
            stars = await pg.inner_text('.stat')
            check(stars.strip() != '★ 0/30', f'{kid}: stars from day 1 still shown ({stars.strip()})')
            await pg.screenshot(path=f'{ROOT}/tests/shots/progress_{kid}_after_update.png')
            await pg.click('.hero button.primary'); await pg.click('[data-act="start"]')
            left = await pg.evaluate('()=>{const r=__TEST__.run();return r.qs.length-r.i}')
            check(left > 0, f'{kid}: mission 2 resumes where it stopped ({left} questions left)')
            await play_answers(pg, left); await pg.wait_for_timeout(300)
            done = await pg.evaluate('()=>Object.keys(__TEST__.state().days).length')
            check(done == 2, f'{kid}: mission 2 completes in the new version ({done} days done)')

            # 3. Each newer game saves under its own key and leaves the old save alone.
            snap = await pg.evaluate(f'()=>localStorage.getItem("{key}")')
            for game, n_game in ((new_game, 2), (third, 3)):
                await pg.goto(f'{base}/new/{game}.html'); await pg.wait_for_timeout(400)
                await pg.click('.hero [data-act="day"]'); await pg.click('[data-act="start"]')
                n = await pg.evaluate('()=>__TEST__.run().qs.length')
                await play_answers(pg, n); await pg.wait_for_timeout(300)
                check(await pg.evaluate(f'()=>localStorage.getItem("{key}")') == snap, f'{kid}: playing {game} leaves the old save untouched')
                new_key = f'revision-{kid}{n_game}-v1'
                check(await pg.evaluate(f'()=>!!localStorage.getItem("{new_key}")'), f'{kid}: {game} saves under {new_key}')

            # 4. Each game links to the other and shows its progress.
            await pg.goto(f'{base}/new/{kid}.html'); await pg.wait_for_timeout(300)
            links = await pg.locator('a.sibling').all_inner_texts()
            check(len(links) == 2 and all('1/10' in t for t in links), f'{kid}: links to the two other games show their progress ({links!r})')
        await pg.goto(f'{base}/new/index.html'); await pg.wait_for_timeout(300)
        await pg.screenshot(path=f'{ROOT}/tests/shots/progress_index.png', full_page=True)
        idx = await pg.inner_text('body')
        check(idx.count('missions') == 6, 'start page shows progress for all six games')
        check(not errors, f'no page errors {errors}')
        await b.close()
    httpd.shutdown()


asyncio.run(main())
print('FAILED' if FAIL else 'ALL OK')
sys.exit(1 if FAIL else 0)
