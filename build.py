"""Build elena.html and sarah.html at the repo root from the files in src/."""
import pathlib

ROOT = pathlib.Path(__file__).parent
SRC = ROOT / 'src'
KIDS = [
    ('elena', 'Elena · Le Royaume des Fées (CM1)',
     'https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;700&display=swap'),
    ('sarah', 'Sarah · Le Manoir des Ombres (CM2)',
     'https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Crimson+Pro:wght@400;600;700&display=swap'),
]

tpl = (SRC / 'template.html').read_text(encoding='utf-8')
engine = (SRC / 'engine.js').read_text(encoding='utf-8')
for kid, title, fonts in KIDS:
    html = (tpl.replace('__TITLE__', title).replace('__FONTS__', fonts)
               .replace('__THEME__', (SRC / f'theme_{kid}.css').read_text(encoding='utf-8'))
               .replace('__DATA__', (SRC / f'{kid}.js').read_text(encoding='utf-8'))
               .replace('__ENGINE__', engine))
    assert '—' not in html, f'em dash found in {kid}'
    (ROOT / f'{kid}.html').write_text(html, encoding='utf-8')
    print(f'{kid}.html', len(html), 'bytes')
