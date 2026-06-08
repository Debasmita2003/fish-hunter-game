# 🎣 Fish Hunter

An interactive browser-based fishing game built with **React.js** where players control a fishing hook, catch different aquatic creatures, avoid sharks, and compete for the highest score.

## 🌊 Game Overview

Fish Hunter places players in a vibrant underwater world filled with animated marine life. Each creature has unique movement patterns, speeds, and point values, making every catch a strategic decision.

The objective is simple:
- Catch the fishes within the given time limit.
- Catch valuable fish to earn points.
- Avoid sharks at all costs.
- Beat your personal high score before the timer runs out.

---

## 🎮 Features

### 🐟 Animated Marine Ecosystem

Each creature behaves differently:

| Creature | Movement Style | Points |
|-----------|--------------|---------|
| Betta Fish | Wave Motion | +10 |
| Clownfish | Horizontal Swim | +25 |
| Goldfish | Zigzag Motion | +100 |
| Seahorse | Vertical Drift | +50 |
| Octopus | Random Wander | +75 |
| Shark | Patrol Movement | Game Over |

---

### 🎣 Fishing Mechanics

- Move the hook horizontally.
- Drop the hook into the water.
- Catch fish by making contact.
- Successfully caught fish disappear permanently.
- Hitting a shark ends the game instantly.

---

### 🌊 Dynamic Environment

- Animated underwater background
- Floating bubbles with random sizes
- Swaying seaweed
- Multiple underwater depth layers
- Smooth fish movement and direction switching

---

### 🏆 Scoring System

| Action | Score |
|----------|---------|
| Catch Betta Fish | +10 |
| Catch Clownfish | +25 |
| Catch Goldfish | +100 |
| Catch Seahorse | +50 |
| Catch Octopus | +75 |
| Catch Shark | Game Over |

---

### ⏱ Game Features

- High Score Tracking
- Countdown Timer
- Pause Functionality
- Start Screen
- Responsive Design

---

## 🛠 Built With

- React.js
- JavaScript (ES6+)
- CSS3
- HTML5

---

## 📂 Project Structure

```text
src/
│
├── assets/
│   ├── bettafish.png
│   ├── bubble.png
│   ├── clownfish.png
│   ├── goldfish.png
│   ├── hero.png
│   ├── hook.png
│   ├── little_fisher.png
│   ├── octopus.png
│   ├── seahorse.png
│   ├── seaweed.png
│   └── shark.png
│
├── components/
│   ├── Bubble.jsx
│   ├── Fish.jsx
│   ├── Hook.jsx
│   ├── HUD.jsx
│   ├── Seaweed.jsx
│   └── StartScreen.jsx
│
├── data/
│   └── fishConfig.js
│
├── App.jsx
└── App.css
```

---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/fish-hunter.git
```

Navigate to the project folder:

```bash
cd fish-hunter
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## 🎯 Future Improvements

- Sound effects
- Combo scoring system
- Achievement badges
- Mobile touch controls
- Difficulty levels
- Leaderboard system
- Particle splash effects
- Multiple fishing hooks

---

## 📸 Screenshots

Add gameplay screenshots here after completing the project.

---

## 💡 Inspiration

Fish Hunter was created as a fun React project to explore:

- Game development concepts
- Animation systems
- Collision detection
- State management
- Interactive UI design

---

## 👨‍💻 Author

**Debasmita**

Built with React and a passion for creating interactive web experiences.

---

⭐ If you enjoyed this project, consider giving it a star!
