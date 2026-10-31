# Révisions Toussaint

Six offline-capable revision games (three per child) for two primary-school children, served by GitHub Pages from the repo root. Each later game of a child continues the story of the earlier ones and links to them, without depending on them.

## Layout
- `src/engine.js` - shared game engine (map, missions, error zones, revanches, défi éclair, grands-parents page). Kid-agnostic.
- `src/elena.js`, `src/sarah.js` - first games: config (`CFG`) and content (`DATA.days`, 10 days, fixed ortho/calc/lect layout).
- `src/elena2.js`, `src/sarah2.js` - second games: same, with `parts` (history, French geography, German, German geography, timed tables). See README for the format.
- `src/elena3.js` - third game, French: `dchoix` sentence dictation and grammar. `src/sarah3.js` - third game, entirely in German (`CFG.ui: 'de'`): reading, history with an optional French version (`fr`), geography. Neither has tables nor Défi Éclair (`CFG.noEclair`).
- `src/template.html`, `src/theme_*.css` - page shell and per-child theme.
- `build.py` - writes `elena.html`, `sarah.html`, `elena-harmonie.html`, `sarah-meute.html`, `elena-livre.html`, `sarah-vampire.html` at the root. The built files ARE committed (Pages serves them).
- `index.html` - "Qui joue ?" picker, hand-written.
- `tests/test_play.py` - Playwright: content integrity, then a full 10-day playthrough of each game on mobile and desktop.
- `tests/test_progress.py OLD_DIR` - plays the live builds from `main`, opens the new ones on the same origin, checks saved progress survives.

## Rules
- Never edit the built game pages by hand: edit `src/`, run `python build.py`, commit both.
- Run `python tests/test_play.py` before every push, and `tests/test_progress.py` when the engine changes. CI runs both and fails if built files and `src/` disagree.
- `main` is live for the children within a minute. Work on a branch and open a PR.
- Progress is saved in localStorage keyed by `revision-<CFG.id>-v1` and day index; all pages share the origin. Never reuse an id, never rename a live page (home-screen icons), never insert or reorder days in a live game. Engine changes must keep old saved state readable (defaults for new fields).
- In a `dchoix` question all four sentences must sound exactly like `say`, and only one may be correct: a wrong sentence that is valid French ("ces" for "ses" with no clue) is a bug.
- Every question needs an explanation (`e`); `fill`/`qcm` answers are indices into `c`; problems carry a `chk` expression the test evaluates.
- French content, German in `lang: 'de'` parts (German level two school years below the French class), no em dashes anywhere. Keep children's personal details out of the repo and issues beyond first names (the repo is public).
