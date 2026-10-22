import asyncio, json, sys
from playwright.async_api import async_playwright
import pathlib
ROOT=pathlib.Path(__file__).resolve().parent.parent
OUT=str(ROOT); SH=str(ROOT/'tests'/'shots'); pathlib.Path(SH).mkdir(exist_ok=True)
CHECK_JS = r"""
() => {
 const errs=[]; const T=window.__TEST__;
 DATA.days.forEach((D,d)=>{
   if(D.ortho.length<5) errs.push('few ortho '+d);
   [...D.ortho, ...(D.calc.probs||[])].forEach((q,i)=>{
     if(q.c && (typeof q.a!=='number'||!q.c[q.a])) errs.push(`bad a d${d} q${i}`);
     if(q.c && new Set(q.c).size!==q.c.length) errs.push(`dup choices d${d} q${i}`);
     if(q.t==='fill' && q.s.indexOf('___')<0) errs.push(`no blank d${d} q${i}`);
     if((q.t==='type'||q.t==='dictee') && !(q.a&&q.a.length)) errs.push(`no ans d${d} q${i}`);
     if(q.chk){ const v=eval(q.chk); const a=typeof q.a==='string'?parseFloat(q.a.replace(',','.')):q.a; if(Math.abs(v-a)>1e-9) errs.push(`chk d${d} q${i}: ${q.chk}=${v} vs ${q.a}`);}
     if(!q.e) errs.push(`no expl d${d} q${i}`);
   });
   (D.calc.gen||[]).forEach(g=>{ if(!T.GEN[g[0]]) errs.push('no gen '+g[0]); });
   D.lect.qs.forEach((q,i)=>{ if(!q.c[q.a]) errs.push(`lect a d${d} ${i}`); q.r.forEach(r=>{ if(!D.lect.s[r]) errs.push(`ref d${d} q${i} r${r}`); }); });
 });
 // generators fuzz
 for(const k in T.GEN){ for(let n=0;n<400;n++){ let q; const arg = k==='place'?[R(5,6)]:k==='words'?[R(4,6)]:k==='add'||k==='sub'||k==='mul2'?[R(2,4),R(2,3)]:k==='mul1'?[3]:k==='div1'?[R(2,3)]:k==='compare'?[R(4,6)]:k==='table'?[[2,3,4,5,6,7,8,9]]:k==='add3'?[3]:[];
   q=T.GEN[k](...arg); const s=JSON.stringify(q);
   if(/NaN|undefined|null/.test(s)) { errs.push('gen '+k+' '+s); break; }
   if(q.c && q.c.indexOf(q.a)<0) { errs.push('gen a not in c '+k+s); break;}
   if(q.c && new Set(q.c).size!==q.c.length){ errs.push('gen dup '+k+s); break;}
   if(q.t==='num' && !T.isRight(q, String(q.a))) { errs.push('gen self-check '+k+s); break;}
 }}
 function R(a,b){return a+Math.floor(Math.random()*(b-a+1));}
 const W=[[21,'vingt et un'],[71,'soixante et onze'],[80,'quatre-vingts'],[81,'quatre-vingt-un'],[99,'quatre-vingt-dix-neuf'],[200,'deux cents'],[201,'deux cent un'],[1000,'mille'],[80000,'quatre-vingt mille'],[200000,'deux cent mille'],[1000000,'un million'],[200000000,'deux cents millions'],[3080500,'trois millions quatre-vingt mille cinq cents'],[2000000000,'deux milliards']];
 W.forEach(([n,w])=>{ if(T.words(n)!==w) errs.push(`words ${n}: ${T.words(n)}`); });
 const tq={t:'type',pre:'un château → des',a:['châteaux']};
 if(!T.isRight(tq,'des châteaux')||!T.isRight(tq,' Châteaux ')||T.isRight(tq,'chateaux')) errs.push('type check');
 const jq={t:'type',pre:"j' (prendre) → j'",a:['ai pris']};
 if(!T.isRight(jq,"j'ai pris")||!T.isRight(jq,"ai pris")||!T.isRight(jq,"j’ai pris")) errs.push('j check');
 const nq={t:'num',a:'2,05'}; if(!T.isRight(nq,'2.05')||!T.isRight(nq,'2,05')||T.isRight(nq,'2,5')) errs.push('dec check');
 const bq={t:'num',a:2175000}; if(!T.isRight(bq,'2 175 000')) errs.push('space num');
 return errs;
}
"""
async def answer_current(page, correct=True):
    q = await page.evaluate("()=>{const r=__TEST__.run();const q=r.qs[r.i];return {t:q.t,a:q.a,c:q.c||null}}")
    if q['t'] in ('qcm','fill'):
        if correct: idx = q['c'].index(q['a'])
        else:
            dis = await page.evaluate("()=>[...document.querySelectorAll('.choice')].map(b=>b.disabled)")
            idx = [i for i,c in enumerate(q['c']) if c!=q['a'] and not dis[i]][0]
        await page.click(f'.choice[data-i="{idx}"]')
    else:
        a = q['a'] if q['t']=='num' else q['a'][0]
        val = str(a) if correct else (str(a)+'7' if q['t']=='num' else str(a)[:-1]+'z')
        await page.fill('#inp', val); await page.click('[data-act="check"]')
    return q

async def run(kid, fn):
    async with async_playwright() as p:
        b = await p.chromium.launch()
        errors=[]
        for vp,tag in [({'width':390,'height':844},'m'),({'width':1180,'height':900},'d')]:
            pg = await b.new_page(viewport=vp)
            pg.on('pageerror', lambda e: errors.append(str(e)))
            pg.on('console', lambda m: errors.append(m.text) if m.type=='error' and 'fonts' not in m.text else None)
            await pg.goto(f'file://{OUT}/{fn}')
            await pg.wait_for_timeout(600)
            if tag=='m':
                errs = await pg.evaluate(CHECK_JS); print(kid,'integrity:', errs or 'OK')
            await pg.screenshot(path=f'{SH}/{kid}_{tag}_map.png', full_page=False)
            await pg.click('.hero [data-act="day"]'); await pg.wait_for_timeout(400)
            await pg.screenshot(path=f'{SH}/{kid}_{tag}_intro.png', full_page=True)
            await pg.click('[data-act="start"]'); await pg.wait_for_timeout(400)
            # play day 1: first question wrong once (zone), then right; second wrong twice
            n = await pg.evaluate("()=>__TEST__.run().qs.length")
            shots_done=set(); dbl=False
            for i in range(n):
                q = await pg.evaluate("()=>{const r=__TEST__.run();const q=r.qs[r.i];return {t:q.t,dom:q.dom,lect:!!q.txt}}")
                key=(q['t'],q['lect'])
                if not dbl and q['t'] in ('type','num'):
                    dbl=True
                    await answer_current(pg, False); await pg.wait_for_timeout(200)
                    await answer_current(pg, False); await pg.wait_for_timeout(400)
                    await pg.screenshot(path=f'{SH}/{kid}_{tag}_reveal_{q["t"]}.png', full_page=True)
                    await pg.click('#next'); await pg.wait_for_timeout(150); continue
                if key not in shots_done:
                    await answer_current(pg, False); await pg.wait_for_timeout(450)
                    await pg.screenshot(path=f'{SH}/{kid}_{tag}_zone_{q["t"]}{"_lect" if q["lect"] else ""}.png', full_page=True)
                    shots_done.add(key)
                await answer_current(pg, True); await pg.wait_for_timeout(250)
                await pg.click('#next'); await pg.wait_for_timeout(150)
            await pg.wait_for_timeout(1800)
            await pg.screenshot(path=f'{SH}/{kid}_{tag}_end.png', full_page=True)
            if tag=='d': await pg.close(); continue
            # play remaining days all correct
            for d in range(1,10):
                await pg.click('[data-act="home"]'); await pg.wait_for_timeout(100)
                await pg.click(f'.hero [data-act="day"][data-d="{d}"]'); await pg.click('[data-act="start"]')
                n = await pg.evaluate("()=>__TEST__.run().qs.length")
                for i in range(n):
                    await answer_current(pg, True); await pg.click('#next')
                await pg.wait_for_timeout(200)
            await pg.wait_for_timeout(1500)
            await pg.screenshot(path=f'{SH}/{kid}_{tag}_final.png', full_page=True)
            await pg.click('[data-act="home"]'); await pg.wait_for_timeout(400)
            await pg.evaluate("window.scrollTo(0,0)")
            await pg.screenshot(path=f'{SH}/{kid}_{tag}_map_full.png', full_page=True)
            await pg.click('[data-act="coll"]'); await pg.wait_for_timeout(300)
            await pg.screenshot(path=f'{SH}/{kid}_{tag}_coll.png', full_page=True)
            await pg.click('[data-act="home"]'); await pg.click('[data-act="parents"]'); await pg.wait_for_timeout(300)
            await pg.screenshot(path=f'{SH}/{kid}_{tag}_parents.png', full_page=True)
            await pg.click('[data-act="home"]'); await pg.click('[data-act="rev"]'); await pg.click('[data-act="revgo"]'); await pg.wait_for_timeout(300)
            await pg.screenshot(path=f'{SH}/{kid}_{tag}_rev.png', full_page=True)
            await answer_current(pg, True); await pg.wait_for_timeout(300)
            await pg.screenshot(path=f'{SH}/{kid}_{tag}_rev_ok.png', full_page=True)
            await pg.click('[data-act="quit"]'); await pg.wait_for_timeout(200); await pg.click('[data-act="eclair"]'); await pg.click('[data-act="ecgo"]')
            for _ in range(5):
                a = await pg.evaluate("()=>{const t=document.getElementById('ecq').textContent; const m=t.match(/(\\d+) ([×÷]) (\\d+)/); return m[2]==='×'?(+m[1])*(+m[3]):(+m[1])/(+m[3]);}")
                await pg.keyboard.type(str(int(a))); await pg.keyboard.press('Enter'); await pg.wait_for_timeout(250)
            await pg.screenshot(path=f'{SH}/{kid}_{tag}_eclair.png')
            st = await pg.evaluate("()=>{const s=__TEST__.state();return {pts:s.points,days:Object.keys(s.days).length,missed:s.missed.length}}")
            print(kid,'state',st)
            # reload persistence
            await pg.reload(); await pg.wait_for_timeout(400)
            st2 = await pg.evaluate("()=>{const s=__TEST__.state();return {days:Object.keys(s.days).length}}")
            print(kid,'after reload',st2)
            await pg.close()
        print(kid,'page errors:', errors or 'none')
        await b.close()
FAIL=[]
_print=print
def print(*a):
    _print(*a)
    t=' '.join(map(str,a))
    if 'integrity:' in t and not t.endswith('OK'): FAIL.append(t)
    if 'page errors:' in t and 'none' not in t and 'ERR_' not in t: FAIL.append(t)
asyncio.run(run('elena','elena.html'))
asyncio.run(run('sarah','sarah.html'))
sys.exit(1 if FAIL else 0)
