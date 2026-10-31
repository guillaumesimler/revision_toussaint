# Révisions Toussaint

Revision games for primary school: three per child, each built for ten days of holiday revision at the grandparents'. The games of a child are independent and can be played in parallel.

**Play:** https://guillaumesimler.github.io/revision_toussaint/

| Page | Child | World | Companion | Subjects |
|---|---|---|---|---|
| `elena.html` | Elena, CM1 | Le Royaume des Fées (pink) | Pétale, a fairy | French spelling, maths, reading |
| `sarah.html` | Sarah, CM2 | Le Manoir des Ombres (black, burgundy) | Nyx, a dry-witted bat | French spelling, maths, reading |
| `elena-harmonie.html` | Elena, CM1 | L'Harmonie des Fées et des Sirènes (purple) | Maëlle, the mermaid from the first game | history (Middle Ages, French Revolution), French geography, German reading and writing (Klasse 2), German geography, timed tables |
| `sarah-meute.html` | Sarah, CM2 | Le Territoire de la Meute (dark forest green) | Vesper, a she-wolf | history (Middle Ages, First World War), French geography, German reading and writing (Klasse 3), German geography, timed tables |
| `elena-livre.html` | Elena, CM1 | Le Livre de l'Harmonie (teal, parchment) | Écho, a sprite who says everything twice | sentence dictation (listen twice, pick the one correct sentence), CM1 grammar |
| `sarah-vampire.html` | Sarah, CM2 | Über das stürmische Meer kamen die Vampire (storm blue, burgundy) | Wolka, Vesper's German-speaking cousin | entirely in German: reading, German history from the Vikings to 1990 with an optional French version, geography of the German coast |

The first two follow the first school period (September-October) of the official programme. The second games continue the stories of the first ones: Maëlle, Pétale, Lila and the Couronne des Étoiles come back for Elena; for Sarah, the forest behind the manor holds the medieval tower whose cellar is the manor's crypt, and letters from 1914-1918 written to Agathe, the cellist of the portrait. German is set two school years below their French level, since they are bilingual but schooled in France. The third games continue again: the song of the concert must be written down for Elena; for Sarah, the Médaillon des Ombres turns out to hold the vampires' shadows, and Agathe's cello frees them. Each game links to the other games of the same child and shows their progress.

## How a game works

- **10 missions on a map**, one per day, unlocked in order. A mission takes 15 to 20 minutes: 6 spelling questions, 5 maths questions, then a short original text with its questions.
- **First wrong answer: the game shows where the mistake is**, without giving the answer. Wrong letters are highlighted, the wrong digit is named ("l'erreur est dans le chiffre des dizaines"), the relevant sentence of the text lights up, or a substitution tip appears ("remplace par *avait*").
- **Second wrong answer: the game shows the answer** with the rule, and files the question under **Revanches** to replay later. A revanche won on the first try leaves the list.
- **Rewards:** stars (1 to 3 per mission), points, bonus for streaks, one collectible per mission, ranks.
- **Défi Éclair:** 60 seconds of times tables (and divisions for CM2), with a record to beat.
- **Coin des grands-parents:** results per day and subject, the full list of mistakes with correct answers, and the 10-day programme. The most useful screen for talking through mistakes with the children.
- Maths questions are partly randomised, so replaying a mission gives new numbers.
- **Timed tables** (second games): 10 random multiplications from the 1 to 9 tables per mission, answered on an on-screen keypad. The time per answer starts at 15 seconds on day 1 and drops by one second a day, to 6 seconds on day 10. Running out of time counts as a mistake, with the same two-chance rule.
- **Sentence dictation** (`elena-livre.html`): the sentence is read twice with a pause, and the child picks the correctly written one out of four that sound the same. A first wrong pick marks the wrong word in that sentence. iPhones may only speak after a tap, so a listen button is always there.
- **French version** (`sarah-vampire.html`): a button in the history section shows the French translation of the text, questions, answers and explanations next to the German. It costs nothing and is not recorded.
- **German questions** use German buttons and feedback, a keyboard row for ä ö ü ß, German speech for dictations, and check capital letters (the game says when capitalisation is the only mistake).

## Playing on a phone or tablet

1. Open the link above in **Safari** (iPhone/iPad) or **Chrome** (Android). Not from a mail or file preview.
2. Tap the child's name.
3. Add the page to the home screen: Share → *Sur l'écran d'accueil* on iPhone, menu ⋮ → *Ajouter à l'écran d'accueil* on Android.

Progress is saved **in that browser, on that device**. It survives closing the tab and coming back the next day. It does not follow the child to another device, and private browsing or clearing site data erases it.

## Making changes

`main` is what the children see, within about a minute of a merge. Changes go through a branch and a pull request.

**With Claude (recommended).** Open [claude.ai/code](https://claude.ai/code) or the Code tab of the Claude mobile app, select this repository, describe one change, review the diff, create the PR, merge. Claude reads [`CLAUDE.md`](CLAUDE.md) at the start of every session, so repo rules belong there.

**By hand.**

```bash
# edit files in src/, then:
python build.py              # regenerates the six game pages
pip install playwright==1.56.0 && python -m playwright install chromium   # once
python tests/test_play.py    # content checks + full playthrough of all six games, about 6 minutes
mkdir -p /tmp/live && git show origin/main:elena.html > /tmp/live/elena.html && git show origin/main:sarah.html > /tmp/live/sarah.html
python tests/test_progress.py /tmp/live   # progress saved by the live version survives this build
```

Commit both `src/` and the regenerated HTML. GitHub Actions runs both tests on every push and pull request, and fails if the HTML at the root does not match `src/`.

## Repository layout

```
index.html            "Qui joue ?" start page with each game's progress (hand-written)
elena.html, sarah.html, elena-harmonie.html, sarah-meute.html, elena-livre.html, sarah-vampire.html
                      built games (do not edit, generated)
build.py              assembles the six games from src/
src/
  engine.js           shared game engine: map, missions, error zones, revanches, timer, Défi Éclair, grandparents' page
  elena.js, sarah.js  first games: settings (CFG) and 10 days of content (DATA)
  elena2.js, sarah2.js  second games: settings and content
  elena3.js, sarah3.js  third games: settings and content
  template.html       page shell and shared styles
  theme_*.css         colours and fonts of each game
tests/test_play.py    Playwright: checks every question, then plays all 10 days of each game on mobile and desktop
tests/test_progress.py  plays the live version, opens the new build, checks the children's progress is intact
.github/workflows/    CI running the test
CLAUDE.md             rules for Claude sessions working on this repo
```

Each game is a single self-contained HTML file: no server, no account, no data leaves the device. Only the fonts load from Google Fonts; without a connection the game falls back to system fonts and still works.

## Content format

Content lives in `src/*.js`. Each file defines `CFG` (name, theme, companion lines, ranks, map decoration, sections, optional timer and link to the sibling game) and `DATA.days`, a list of 10 days. The first games use a fixed layout:

```js
{
  place: 'Jardin des Pétales', icon: '🌸',
  reward: { icon: '🌹', name: 'La Rose enchantée' },
  focus: 'a / à, et / est · nombres jusqu\'à 99 999',   // shown to grandparents
  intro: 'Les fleurs du jardin se sont endormies...',
  ortho: [ /* questions */ ],
  calc:  { gen: [ /* generated questions */ ], probs: [ /* fixed problems */ ] },
  lect:  { title: '...', s: [ /* sentences */ ], qs: [ /* questions */ ] }
}
```

The second games use `parts`, a list of sections in the order they are played. Each part has a `dom` (a key of `CFG.sections`), and any of `lect` (a text and its questions, played first), `qs` (questions) and `gen` (generated questions). `lang: 'de'` switches the part to German; `timed: true` adds the countdown from `CFG.timer` and the keypad:

```js
parts: [
  { dom: 'hist', lect: { title: '...', s: [...], qs: [...] }, qs: [...] },
  { dom: 'geo', qs: [...] },
  { dom: 'deu', lang: 'de', lect: {...}, qs: [...] },
  { dom: 'erd', lang: 'de', qs: [...] },
  { dom: 'tab', timed: true, gen: [['tabT'], ...] }
]
```

Question types:

| Type | Use | Fields |
|---|---|---|
| `fill` | pick the word for the blank | `s` sentence with `___`, `c` choices, `a` index of the right choice |
| `qcm` | multiple choice | `q` question, `c` choices, `a` index |
| `type` | typed answer (conjugation, plural...) | `q`, `pre` / `post` text around the box, `a` list of accepted answers |
| `dictee` | dictation read aloud by the device | `say` text spoken, `a` list of accepted answers |
| `dchoix` | sentence read twice, pick the right spelling | `say` text spoken, `c` four sentences that sound the same, `a` index of the right one (the same text as `say`) |
| `num` | numeric answer | `q`, `a` number (or `'2,05'` for decimals), optional `unit`, `chk` expression the test re-computes |

Every question also takes `e`, the explanation shown after answering (required), and `z`, the hint shown after a first mistake. `cs: true` makes a typed answer case-sensitive (German nouns). Reading questions carry `r`, the indices of the sentences that hold the answer; that is what gets highlighted. A question can carry `fr` (`q`, `c` in the same order as the German choices, `e`, `z`) and a text `fr` (`title`, `s`, one French sentence per German sentence) for the French button.

Generated maths questions are listed by name in `calc.gen`, with arguments, for example `['add', 4, 3]` (a 4-digit plus a 3-digit number) or `['table', [6, 7]]`. Available generators: `place`, `placeM`, `words`, `wordsM`, `compare`, `compareM`, `add`, `add3`, `sub`, `table`, `x10`, `double`, `half`, `mul1`, `mul2`, `div1`, `divTable`, `multiple`, `fracOf`, `fracCompare`, `decCompare`, `decAdd`, `conv`, `mental`, `tabT` (one random product from the 1 to 9 tables). Their definitions are in `src/engine.js` under `GEN`.

## Things that break silently

- **Saved progress is keyed by game and day position** (`revision-<CFG.id>-v1` in the browser's storage: `elena`, `sarah`, `elena2`, `sarah2`, `elena3`, `sarah3`). All pages of the site share that storage, so every game needs its own `CFG.id`. Inserting or reordering days moves the children's stars onto the wrong missions. Append new days, or start a new game under a new id. Never rename a page that is live: the children's home-screen icons point to it.
- **Answer keys are indices.** In `fill` and `qcm`, `a: 0` means the first choice as written in the file; choices are shuffled on screen. Reordering `c` without updating `a` makes a wrong answer "correct". The test catches impossible indices and wrong `chk` values, not a plausible but wrong pick, so content changes still need a human read.
- **The repository is public.** Keep anything about the children beyond their first names out of files, issues and pull request comments.
