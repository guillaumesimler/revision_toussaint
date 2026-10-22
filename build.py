"""Build the four games at the repo root from the files in src/."""
import pathlib

ROOT = pathlib.Path(__file__).parent
SRC = ROOT / 'src'
FAIRY = 'https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;700&display=swap'
# (content file in src/, output page, page title, fonts)
GAMES = [
    ('elena', 'elena.html', 'Elena · Le Royaume des Fées (CM1)', FAIRY),
    ('sarah', 'sarah.html', 'Sarah · Le Manoir des Ombres (CM2)',
     'https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Crimson+Pro:wght@400;600;700&display=swap'),
    ('elena2', 'elena-harmonie.html', "Elena · L'Harmonie des Fées et des Sirènes (CM1)", FAIRY),
    ('sarah2', 'sarah-meute.html', 'Sarah · Le Territoire de la Meute (CM2)',
     'https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Spectral:wght@400;600;700&display=swap'),
]

tpl = (SRC / 'template.html').read_text(encoding='utf-8')
engine = (SRC / 'engine.js').read_text(encoding='utf-8')
for src, out, title, fonts in GAMES:
    html = (tpl.replace('__TITLE__', title).replace('__FONTS__', fonts)
               .replace('__THEME__', (SRC / f'theme_{src}.css').read_text(encoding='utf-8'))
               .replace('__DATA__', (SRC / f'{src}.js').read_text(encoding='utf-8'))
               .replace('__ENGINE__', engine))
    assert '—' not in html, f'em dash found in {src}'
    (ROOT / out).write_text(html, encoding='utf-8')
    print(out, len(html), 'bytes')
