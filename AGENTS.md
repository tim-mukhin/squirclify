# AGENTS.md

## Project overview
- **Name:** `squirclify`
- **Type:** tiny frontend library (plain JS + React wrapper)
- **Goal:** create smooth "squircle" corners (Figma-like 100% smoothing) for HTML blocks based on element `border-radius`.

## Tech stack
- JavaScript (ES modules)
- React function component wrapper (`Squircle`)
- SVG `clipPath` masks injected into DOM
- No build/test scripts in root `package.json`

## Public API
- `squirclify(el)` from `src/squirclify.js`
  - Accepts DOM element
  - Reads `border-radius`, `clientWidth`, `clientHeight`
  - Applies `clip-path: url(#maskId)` and `-webkit-clip-path`
- `<Squircle />` from `src/Squircle.js`
  - React wrapper around `squirclify`
  - Calls `squirclify` once in `useEffect`

## Repository structure
- `src/index.js` - exports public API
- `src/squirclify.js` - mask generation and DOM clip-path logic
- `src/Squircle.js` - React wrapper component
- `example/` - usage demo code
- `images/` - README assets
- `README.md` - main docs and restrictions

## Important behavior and limitations
- Supports only imitation of **100% corner smoothing**.
- Does not auto-recalculate on viewport resize by default.
- Safari macOS has clip-mask bug with paddings/margins; recommended workaround is inner wrapper div.
- Known issue in README: resulting squircle radius may become larger than border radius.

## Working conventions for future edits
- Keep library dependency-free in core logic.
- Preserve compatibility with both vanilla JS and React usage.
- If changing mask math, verify visually on square and non-square elements.
- Keep README usage examples in sync with exported API.

## Quick usage reminder
```js
import { squirclify, Squircle } from "squirclify";

// Vanilla JS
squirclify(document.getElementById("squircle"));

// React
<Squircle className="squircle">Content</Squircle>;
```
