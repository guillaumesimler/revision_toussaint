"""Content integrity checks and a full playthrough of every game, on mobile and desktop.

Run: python tests/test_play.py   (needs: pip install playwright && python -m playwright install chromium)
"""
import asyncio
import pathlib
import sys

from playwright.async_api import async_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
SHOTS = ROOT / 'tests' / 'shots'
SHOTS.mkdir(exist_ok=True)
GAMES = ['elena.html', 'sarah.html', 'elena-harmonie.html', 'sarah-meute.html']
FAIL = []

CHECK_JS = r"""
() => {
  const errs = [], T = window.__TEST__;
  const R = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const groups = D => D.parts
    ? D.parts.map(P => ({ dom: P.dom, qs: P.qs || [], gen: P.gen || [], lect: P.lect, lang: P.lang }))
    : [{ dom: 'ortho', qs: D.ortho, gen: [] }, { dom: 'calc', qs: D.calc.probs || [], gen: D.calc.gen || [] }, { dom: 'lect', qs: [], gen: [], lect: D.lect }];
  if (DATA.days.length !== 10) errs.push('expected 10 days, got ' + DATA.days.length);
  DATA.days.forEach((D, d) => {
    ['place', 'icon', 'focus', 'intro'].forEach(k => { if (!D[k]) errs.push(`d${d} missing ${k}`); });
    if (!D.reward || !D.reward.icon || !D.reward.name) errs.push(`d${d} missing reward`);
    groups(D).forEach(G => {
      const where = `d${d} ${G.dom}`;
      if (T.sections.indexOf(G.dom) < 0) errs.push(`${where}: section not in CFG.sections`);
      if (!CFG.sec[G.dom] || !CFG.icons[G.dom]) errs.push(`${where}: no name or icon`);
      G.qs.forEach((q, i) => {
        const w = `${where} q${i}`;
        if (!q.e) errs.push(`${w}: no explanation`);
        if (q.c && (typeof q.a !== 'number' || !q.c[q.a])) errs.push(`${w}: bad answer index`);
        if (q.c && new Set(q.c).size !== q.c.length) errs.push(`${w}: duplicate choices`);
        if (q.t === 'fill' && q.s.indexOf('___') < 0) errs.push(`${w}: no blank`);
        if ((q.t === 'type' || q.t === 'dictee') && !(q.a && q.a.length)) errs.push(`${w}: no accepted answer`);
        if (q.t === 'type' || q.t === 'dictee') {
          const p = T.prep(q, G.dom, 'x'); if (G.lang) p.lang = G.lang;
          q.a.forEach(a => { if (!T.isRight(p, a)) errs.push(`${w}: own answer "${a}" rejected`); });
        }
        if (q.chk) { const v = eval(q.chk), a = typeof q.a === 'string' ? parseFloat(q.a.replace(',', '.')) : q.a; if (Math.abs(v - a) > 1e-9) errs.push(`${w}: ${q.chk}=${v} vs ${q.a}`); }
      });
      G.gen.forEach(g => { if (!T.GEN[g[0]]) errs.push(`${where}: unknown generator ${g[0]}`); });
      if (G.lect) {
        if (!G.lect.title || !G.lect.s.length) errs.push(`${where}: empty text`);
        G.lect.qs.forEach((q, i) => {
          if (!q.c[q.a]) errs.push(`${where} text q${i}: bad answer index`);
          if (new Set(q.c).size !== q.c.length) errs.push(`${where} text q${i}: duplicate choices`);
          if (!q.e) errs.push(`${where} text q${i}: no explanation`);
          (q.r || []).forEach(r => { if (!G.lect.s[r]) errs.push(`${where} text q${i}: sentence ${r} missing`); });
          if (!q.r || !q.r.length) errs.push(`${where} text q${i}: no sentence reference`);
        });
      }
    });
  });
  if (CFG.timer) { const t = DATA.days.map((_, d) => T.timeLimit(d)).join(','); if (t !== '15,14,13,12,11,10,9,8,7,6') errs.push('timer ' + t); }
  for (const k in T.GEN) {
    for (let n = 0; n < 300; n++) {
      const arg = k === 'place' ? [R(5, 6)] : k === 'words' ? [R(4, 6)] : (k === 'add' || k === 'sub' || k === 'mul2') ? [R(2, 4), R(2, 3)] : k === 'mul1' ? [3] : k === 'div1' ? [R(2, 3)] : k === 'compare' ? [R(4, 6)] : k === 'table' ? [[2, 3, 4, 5, 6, 7, 8, 9]] : k === 'add3' ? [3] : [];
      const q = T.GEN[k](...arg), s = JSON.stringify(q);
      if (/NaN|undefined|null/.test(s)) { errs.push('gen ' + k + ' ' + s); break; }
      if (q.c && q.c.indexOf(q.a) < 0) { errs.push('gen answer not in choices ' + k); break; }
      if (q.c && new Set(q.c).size !== q.c.length) { errs.push('gen duplicate choices ' + k); break; }
      if (q.t === 'num' && !T.isRight(q, String(q.a))) { errs.push('gen self-check ' + k); break; }
    }
  }
  const W = [[21, 'vingt et un'], [71, 'soixante et onze'], [80, 'quatre-vingts'], [81, 'quatre-vingt-un'], [200, 'deux cents'], [201, 'deux cent un'], [80000, 'quatre-vingt mille'], [200000000, 'deux cents millions'], [3080500, 'trois millions quatre-vingt mille cinq cents']];
  W.forEach(([n, w]) => { if (T.words(n) !== w) errs.push(`words ${n}: ${T.words(n)}`); });
  const tq = { t: 'type', pre: 'un château → des', a: ['châteaux'] };
  if (!T.isRight(tq, 'des châteaux') || !T.isRight(tq, ' Châteaux ') || T.isRight(tq, 'chateaux')) errs.push('type check');
  const cq = { t: 'type', cs: true, pre: 'das Blatt → die', a: ['Blätter'] };
  if (!T.isRight(cq, 'Blätter') || !T.isRight(cq, 'die Blätter') || T.isRight(cq, 'blätter')) errs.push('case-sensitive check');
  if (!T.isRight({ t: 'num', a: '2,05' }, '2.05') || T.isRight({ t: 'num', a: '2,05' }, '2,5')) errs.push('decimal check');
  return errs;
}
"""

STATE = "()=>{const r=__TEST__.run();const q=r.qs[r.i];return {t:q.t,a:q.a,c:q.c||null,pad:!!q.pad,cs:!!q.cs,lect:!!q.txt,dom:q.dom}}"


async def answer(page, correct=True, case_only=False):
    q = await page.evaluate(STATE)
    if q['t'] in ('qcm', 'fill'):
        if correct:
            idx = q['c'].index(q['a'])
        else:
            dis = await page.evaluate("()=>[...document.querySelectorAll('.choice')].map(b=>b.disabled)")
            idx = [i for i, c in enumerate(q['c']) if c != q['a'] and not dis[i]][0]
        await page.click(f'.choice[data-i="{idx}"]')
    elif q['pad']:
        await page.keyboard.type(str(q['a']) if correct else str(q['a']) + '7')
        await page.keyboard.press('Enter')
    else:
        a = str(q['a'] if q['t'] == 'num' else q['a'][0])
        val = a if correct else (a.lower() if case_only else (a + '7' if q['t'] == 'num' else a[:-1] + 'z'))
        await page.fill('#inp', val)
        await page.click('[data-act="check"]')
    return q


def check(cond, msg):
    if not cond:
        FAIL.append(msg)
        print('FAIL', msg)


async def run(browser, fn, vp, tag):
    kid = fn.replace('.html', '')
    errors = []
    pg = await browser.new_page(viewport=vp)
    pg.on('pageerror', lambda e: errors.append(str(e)))
    await pg.goto(f'file://{ROOT}/{fn}')
    await pg.wait_for_timeout(400)
    if tag == 'm':
        errs = await pg.evaluate(CHECK_JS)
        print(kid, 'integrity:', errs or 'OK')
        check(not errs, f'{kid} integrity: {errs}')
    await pg.screenshot(path=f'{SHOTS}/{kid}_{tag}_map.png')
    await pg.click('.hero [data-act="day"]')
    await pg.wait_for_timeout(300)
    await pg.screenshot(path=f'{SHOTS}/{kid}_{tag}_intro.png', full_page=True)
    await pg.click('[data-act="start"]')
    await pg.wait_for_timeout(300)

    # Day 1: exercise every kind of mistake once, then answer correctly
    n = await pg.evaluate('()=>__TEST__.run().qs.length')
    seen, did_reveal, did_timer, did_case = set(), False, False, False
    for i in range(n):
        q = await pg.evaluate(STATE)
        key = (q['t'], q['lect'], q['pad'])
        if q['pad'] and not did_timer:
            did_timer = True
            await pg.evaluate('__TEST__.expireTimer()'); await pg.wait_for_timeout(350)
            txt = await pg.inner_text('#fb')
            check('Temps écoulé' in txt, f'{kid} timeout message missing: {txt!r}')
            await pg.screenshot(path=f'{SHOTS}/{kid}_{tag}_timeout1.png', full_page=True)
            await pg.evaluate('__TEST__.expireTimer()'); await pg.wait_for_timeout(350)
            check(await pg.locator('#next').count() == 1, f'{kid} second timeout did not reveal the answer')
            await pg.screenshot(path=f'{SHOTS}/{kid}_{tag}_timeout2.png', full_page=True)
            await pg.click('#next'); await pg.wait_for_timeout(120)
            continue
        if q['cs'] and not did_case and q['t'] in ('type', 'dictee'):
            did_case = True
            await answer(pg, False, case_only=True); await pg.wait_for_timeout(300)
            txt = await pg.inner_text('#fb')
            check('Groß' in txt or 'majuscules' in txt, f'{kid} case-only hint missing: {txt!r}')
            await pg.screenshot(path=f'{SHOTS}/{kid}_{tag}_case.png', full_page=True)
            await answer(pg, True); await pg.wait_for_timeout(200)
            await pg.click('#next'); await pg.wait_for_timeout(120)
            continue
        if not did_reveal and q['t'] in ('type', 'num') and not q['pad']:
            did_reveal = True
            await answer(pg, False); await pg.wait_for_timeout(200)
            await answer(pg, False); await pg.wait_for_timeout(300)
            await pg.screenshot(path=f'{SHOTS}/{kid}_{tag}_reveal.png', full_page=True)
            await pg.click('#next'); await pg.wait_for_timeout(120)
            continue
        if key not in seen:
            seen.add(key)
            await answer(pg, False); await pg.wait_for_timeout(350)
            await pg.screenshot(path=f'{SHOTS}/{kid}_{tag}_zone_{q["dom"]}_{q["t"]}{"_text" if q["lect"] else ""}.png', full_page=True)
        await answer(pg, True); await pg.wait_for_timeout(150)
        await pg.click('#next'); await pg.wait_for_timeout(100)
    await pg.wait_for_timeout(1600)
    await pg.screenshot(path=f'{SHOTS}/{kid}_{tag}_end.png', full_page=True)

    if tag == 'm':
        for d in range(1, 10):
            await pg.click('[data-act="home"]'); await pg.wait_for_timeout(80)
            await pg.click(f'.hero [data-act="day"][data-d="{d}"]'); await pg.click('[data-act="start"]')
            n = await pg.evaluate('()=>__TEST__.run().qs.length')
            for i in range(n):
                await answer(pg, True); await pg.click('#next')
            await pg.wait_for_timeout(150)
        await pg.wait_for_timeout(1400)
        await pg.screenshot(path=f'{SHOTS}/{kid}_{tag}_final.png', full_page=True)
        await pg.click('[data-act="home"]'); await pg.wait_for_timeout(300)
        await pg.evaluate('window.scrollTo(0,0)')
        await pg.screenshot(path=f'{SHOTS}/{kid}_{tag}_map_full.png', full_page=True)
        for screen in ('coll', 'parents'):
            await pg.click(f'[data-act="{screen}"]'); await pg.wait_for_timeout(250)
            await pg.screenshot(path=f'{SHOTS}/{kid}_{tag}_{screen}.png', full_page=True)
            await pg.click('[data-act="home"]')
        await pg.click('[data-act="rev"]'); await pg.click('[data-act="revgo"]'); await pg.wait_for_timeout(250)
        await pg.screenshot(path=f'{SHOTS}/{kid}_{tag}_rev.png', full_page=True)
        await answer(pg, True); await pg.wait_for_timeout(200)
        await pg.click('[data-act="quit"]'); await pg.wait_for_timeout(150)
        await pg.click('[data-act="eclair"]'); await pg.click('[data-act="ecgo"]')
        for _ in range(4):
            a = await pg.evaluate("()=>{const m=document.getElementById('ecq').textContent.match(/(\\d+) ([×÷]) (\\d+)/);return m[2]==='×'?m[1]*m[3]:m[1]/m[3];}")
            await pg.keyboard.type(str(int(a))); await pg.keyboard.press('Enter'); await pg.wait_for_timeout(220)
        st = await pg.evaluate('()=>{const s=__TEST__.state();return {days:Object.keys(s.days).length,missed:s.missed.length,pts:s.points}}')
        print(kid, 'state', st)
        check(st['days'] == 10, f'{kid} expected 10 days done, got {st}')
        await pg.reload(); await pg.wait_for_timeout(300)
        st2 = await pg.evaluate('()=>Object.keys(__TEST__.state().days).length')
        check(st2 == 10, f'{kid} progress lost on reload')
    await pg.close()
    real = [e for e in errors if 'ERR_' not in e]
    print(kid, tag, 'page errors:', real or 'none')
    check(not real, f'{kid} {tag} page errors: {real}')


async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        for fn in GAMES:
            for vp, tag in [({'width': 390, 'height': 844}, 'm'), ({'width': 1180, 'height': 900}, 'd')]:
                await run(b, fn, vp, tag)
        await b.close()


asyncio.run(main())
print('FAILED:' if FAIL else 'ALL OK', *FAIL, sep='\n')
sys.exit(1 if FAIL else 0)
