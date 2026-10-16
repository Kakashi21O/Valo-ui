# VALORANT In-Game Lobby UI Replica

A clean, responsive, and pixel-accurate VALORANT in-game lobby user interface recreated using semantic HTML, pure CSS, and vanilla JavaScript.

## 🎯 Features

- **Top Navigation Bar**:
  - Distinctive `PLAY` lobby tab with Valorant emblem.
  - Subnav collection items (Battlepass, Agents, Career, Collection, Progression, Arsenal, Store) with hover and active glow states.
  - Right-aligned utility hub with messages, Kingdom Credits, Radianite Points, Valorant Points, and an animated settings gear.
- **Game Mode Selector**:
  - Horizontal sub-navbar featuring all game modes (Unrated, Competitive, Spike Rush, Deathmatch, Replication, Escalation, Custom Game) with diamond active indicator.
- **Center Lobby Stage**:
  - **Dailies & Missions Tracker**: Glowing diamond tier badge, progress meters, and counters.
  - **5 Symmetric Party Plates**: Chevron-cut player lobby cards with bevel framing, invite buttons, player status indicators, level badges, and signal strength bars.
- **Right-Side Social Panel**:
  - Party lobby quick access, alert notifications, and online/offline friend avatar cards with status dots.
- **Bottom Lobby Controls**:
  - Practice, Find Match (with matchmaking state toggles & toast system), and Leave Party buttons.
  - Bottom-left Party voice & push-to-talk indicator.

## 📁 Project Structure

```
Valo ui/
├── assets/
│   ├── icons/       # In-game HUD icons (currencies, nav tabs)
│   └── images/      # Valorant logo assets
├── css/
│   ├── background.css  # Animated atmospheric lobby background & mist
│   ├── buttons.css     # Bottom match actions & button styling
│   └── navbar.css      # Top nav, mode bar, party plates & social panel
├── js/
│   └── buttons.js      # Interactive states, tabs & matchmaking toasts
├── index.html          # Main lobby interface
└── README.md           # Documentation
```

## 🚀 Getting Started

No build tools or external dependencies required!

1. Clone the repository:
   ```bash
   git clone https://github.com/Kakashi21O/Valo-ui.git
   ```
2. Open `index.html` directly in your favorite modern browser:
   - Double click `index.html`, or
   - Use Live Server in VS Code.

## 🛠️ Built With

- **HTML5**
- **CSS3** (Flexbox, Grid, CSS Variables, Clip-path polygons)
- **Vanilla JavaScript** (ES6+)
