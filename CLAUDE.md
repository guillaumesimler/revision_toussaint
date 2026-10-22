# Révisions Toussaint

Two offline-capable revision games for two primary-school children, served by GitHub Pages from the repo root.

## Layout
- `src/engine.js` - shared game engine (map, missions, error zones, revanches, défi éclair, grands-parents page). Kid-agnostic.
- `src/elena.js`, `src/sarah.js` - per-child config (`CFG`) and content (`DATA.days`, 10 days). Content changes go here.
- `src/template.html`, `src/theme_*.css` - page shell and per-child theme.
- `build.py` - writes `elena.html` and `sarah.html` at the root. The built files ARE committed (Pages serves them).
- `index.html` - "Qui joue ?" picker, hand-written.
- `tests/test_play.py` - Playwright: content integrity, then a full 10-day playthrough on mobile and desktop.

## Rules
- Never edit `elena.html` / `sarah.html` by hand: edit `src/`, run `python build.py`, commit both.
- Run `python tests/test_play.py` before every push. CI fails if built files and `src/` disagree.
- `main` is live for the children within a minute. Work on a branch and open a PR.
- Progress is saved in localStorage keyed by day index (`revision-<id>-v1`). Do not insert or reorder days in an existing pack; append, or bump the key and say progress resets.
- Every question needs an explanation (`e`); `fill`/`qcm` answers are indices into `c`; problems carry a `chk` expression the test evaluates.
- French content, no em dashes anywhere. Keep children's personal details out of the repo and issues beyond first names (the repo is public).
