# Révisions Toussaint

Two revision games for primary school, one per child, built for ten days of holiday revision at the grandparents'.

**Play:** https://guillaumesimler.github.io/revision_toussaint/

| | Elena | Sarah |
|---|---|---|
| Level | CM1 | CM2 |
| World | Le Royaume des Fées | Le Manoir des Ombres |
| Companion | Pétale, a fairy | Nyx, a dry-witted bat |
| Look | pink and lavender, sparkles | black and burgundy, gothic |

Each game covers the first school period (September-October) of the official programme: spelling and grammar, arithmetic, and reading comprehension.

## How a game works

- **10 missions on a map**, one per day, unlocked in order. A mission takes 15 to 20 minutes: 6 spelling questions, 5 maths questions, then a short original text with its questions.
- **First wrong answer: the game shows where the mistake is**, without giving the answer. Wrong letters are highlighted, the wrong digit is named ("l'erreur est dans le chiffre des dizaines"), the relevant sentence of the text lights up, or a substitution tip appears ("remplace par *avait*").
- **Second wrong answer: the game shows the answer** with the rule, and files the question under **Revanches** to replay later. A revanche won on the first try leaves the list.
- **Rewards:** stars (1 to 3 per mission), points, bonus for streaks, one collectible per mission, ranks.
- **Défi Éclair:** 60 seconds of times tables (and divisions for CM2), with a record to beat.
- **Coin des grands-parents:** results per day and subject, the full list of mistakes with correct answers, and the 10-day programme. The most useful screen for talking through mistakes with the children.
- Maths questions are partly randomised, so replaying a mission gives new numbers.

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
python build.py              # regenerates elena.html and sarah.html
pip install playwright==1.56.0 && python -m playwright install chromium   # once
python tests/test_play.py    # content checks + full playthrough, about 2 minutes
```

Commit both `src/` and the regenerated HTML. GitHub Actions runs the same test on every push and pull request, and fails if the HTML at the root does not match `src/`.

## Repository layout

```
index.html            "Qui joue ?" start page (hand-written)
elena.html            built game for Elena  (do not edit, generated)
sarah.html            built game for Sarah  (do not edit, generated)
build.py              assembles the two games from src/
src/
  engine.js           shared game engine: map, missions, error zones, revanches, Défi Éclair, grandparents' page
  elena.js            Elena's settings (CFG) and 10 days of content (DATA)
  sarah.js            Sarah's settings (CFG) and 10 days of content (DATA)
  template.html       page shell and shared styles
  theme_elena.css     Elena's colours and fonts
  theme_sarah.css     Sarah's colours and fonts
tests/test_play.py    Playwright: checks every question, then plays all 10 days on mobile and desktop
.github/workflows/    CI running the test
CLAUDE.md             rules for Claude sessions working on this repo
```

Each game is a single self-contained HTML file: no server, no account, no data leaves the device. Only the fonts load from Google Fonts; without a connection the game falls back to system fonts and still works.

## Content format

Content lives in `src/elena.js` and `src/sarah.js`. Each file defines `CFG` (name, theme, companion lines, ranks, map decoration) and `DATA.days`, a list of 10 days:

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

Question types:

| Type | Use | Fields |
|---|---|---|
| `fill` | pick the word for the blank | `s` sentence with `___`, `c` choices, `a` index of the right choice |
| `qcm` | multiple choice | `q` question, `c` choices, `a` index |
| `type` | typed answer (conjugation, plural...) | `q`, `pre` / `post` text around the box, `a` list of accepted answers |
| `dictee` | dictation read aloud by the device | `say` text spoken, `a` list of accepted answers |
| `num` | numeric answer | `q`, `a` number (or `'2,05'` for decimals), optional `unit`, `chk` expression the test re-computes |

Every question also takes `e`, the explanation shown after answering (required), and `z`, the hint shown after a first mistake. Reading questions carry `r`, the indices of the sentences that hold the answer; that is what gets highlighted.

Generated maths questions are listed by name in `calc.gen`, with arguments, for example `['add', 4, 3]` (a 4-digit plus a 3-digit number) or `['table', [6, 7]]`. Available generators: `place`, `placeM`, `words`, `wordsM`, `compare`, `compareM`, `add`, `add3`, `sub`, `table`, `x10`, `double`, `half`, `mul1`, `mul2`, `div1`, `divTable`, `multiple`, `fracOf`, `fracCompare`, `decCompare`, `decAdd`, `conv`, `mental`. Their definitions are in `src/engine.js` under `GEN`.

## Things that break silently

- **Saved progress is keyed by day position** (`revision-elena-v1`, `revision-sarah-v1` in the browser's storage). Inserting or reordering days moves the children's stars onto the wrong missions. Append new days, or start a new pack under a new key and accept that progress resets.
- **Answer keys are indices.** In `fill` and `qcm`, `a: 0` means the first choice as written in the file; choices are shuffled on screen. Reordering `c` without updating `a` makes a wrong answer "correct". The test catches impossible indices and wrong `chk` values, not a plausible but wrong pick, so content changes still need a human read.
- **The repository is public.** Keep anything about the children beyond their first names out of files, issues and pull request comments.
