# Trading Academy

A comprehensive day trading education desktop app with interactive lessons, progress tracking, and market simulation minigames.

## Features

- **4 Learning Levels**: Beginner, Intermediate, Advanced, Expert
- **36+ In-Depth Lessons**: From fundamentals to advanced trading strategies
- **Progress Tracking**: LocalStorage-based progress persistence
- **Market Simulator**: 3 minigames (Prediction, Pattern Recognition, Risk Management)
- **Minimalist Design**: Clean animations, transitions, and glass morphism effects

## File Structure

```
trading-academy/
├── index.html              # Main SPA entry point
├── css/
│   └── styles.css         # Complete styling (2600+ lines)
├── js/
│   ├── app.js             # Main application controller
│   ├── content.js         # All 36 lessons and quiz content
│   ├── progress.js        # Progress tracking system
│   └── simulator.js       # Market simulator engine
├── launch.bat             # Windows launcher script
├── README.md              # This file
└── .gitignore            # Git ignore rules
```

## What to Upload to GitHub

**Include these files:**
- `index.html`
- `css/styles.css`
- `js/app.js`
- `js/content.js`
- `js/progress.js`
- `js/simulator.js`
- `launch.bat`
- `README.md`

**Do NOT include:**
- `test.txt` or any test files
- `.claude/` folder
- Node modules or build artifacts
- `.DS_Store` or system files

## Running Locally

1. Make sure Python is installed
2. Run `launch.bat` (Windows)
3. Opens at `http://localhost:8000`

## Technology Stack

- Vanilla JavaScript (no frameworks)
- HTML5 Semantic Structure
- CSS3 (Animations, Glass Morphism, Dark Theme)
- Canvas API (Candlestick Charts)
- LocalStorage (Progress Persistence)
