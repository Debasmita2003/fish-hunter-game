# 🎣 Fish Hunter

An interactive browser-based fishing game built with **React.js** where players control a fishing hook, catch different aquatic creatures, avoid sharks, and compete for the highest score in a vibrant underwater world.

---

## 🌊 Game Overview

Fish Hunter places players in a lively ocean ecosystem filled with animated marine creatures, floating bubbles, swaying seaweed, and immersive sound effects.

Each creature has its own speed, movement pattern, and point value, making every catch a strategic decision.

### Your Mission

- Catch valuable fish before time runs out.
- Collect the treasure to earn more points.
- Earn as many points as possible.
- Avoid sharks at all costs.
- Beat your personal high score.
- Master timing and positioning to become the ultimate fisher.

---

## 🎮 Controls

| Key | Action |
|------|---------|
| ⬅ Left Arrow | Move Hook Left |
| ➡ Right Arrow | Move Hook Right |
| ⬇ Down Arrow | Drop Hook |
| Enter | Drop Hook |
| Pause Button | Pause / Resume Game |

---

## ✨ Gameplay Highlights

- Keyboard-controlled fishing hook
- Real-time collision detection
- Animated fish-catching mechanic
- Permanent fish removal after capture
- High score persistence using Local Storage
- Countdown timer challenge
- Pause and resume functionality
- Shark collision game-over system
- Ambient ocean sound effects
- Responsive gameplay experience
- Treasure Chest Bonus Rewards
- Fish Carry Animation During Hook Retract
- Mobile Controls 

---

## 🐟 Marine Creatures

Each creature behaves differently and rewards different points.

| Creature | Movement Style | Points |
|-----------|--------------|---------|
| 🐠 Betta Fish | Wave Motion | +10 |
| 🐡 Clownfish | Horizontal Swim | +25 |
| 🐟 Goldfish | Zigzag Motion | +100 |
| 🌿 Seahorse | Vertical Drift | +50 |
| 🐙 Octopus | Random Wander | +75 |
| 🦈 Shark | Patrol Movement | Game Over |

---

## 🎣 Fishing Mechanics

The gameplay loop is simple but engaging:

1. Position the hook using the keyboard.
2. Drop the hook into the ocean.
3. Attempt to catch moving fish.
4. Successfully caught fish attach to the hook.
5. The hook retracts automatically.
6. Points are awarded once the fish reaches the surface.
7. The fish disappears permanently.
8. Repeat until the timer ends.

### Shark Warning

If the hook touches a shark:

- The game ends immediately.
- Final score is displayed.
- High score is updated if beaten.

---

## 🌊 Dynamic Underwater Environment

Fish Hunter includes a fully animated underwater ecosystem:

### Marine Life

- Multiple fish species
- Independent movement patterns
- Layered swimming depths
- Automatic direction switching

### Ocean Effects

- Floating bubbles generated randomly
- Swaying seaweed animations
- Layered underwater scenery
- Ocean floor environment

### Hook System

- Smooth horizontal movement
- Animated rope extension
- Animated rope retraction
- Catch-and-return mechanic

---

## 🔊 Sound Effects

The game includes immersive audio:

| Sound | Purpose |
|---------|----------|
| Ocean Ambient | Background underwater atmosphere |
| Hook Drop | Played when hook is dropped |
| Fish Catch | Played when fish is successfully caught |
| Game Over | Played when shark is caught or game ends |

---

## 🏆 Scoring System

| Action | Score |
|----------|---------|
| Catch Betta Fish | +10 |
| Catch Clownfish | +25 |
| Catch Goldfish | +100 |
| Catch Seahorse | +50 |
| Catch Octopus | +75 |
| Catch Turtle | +65 |
| Catch Stingray | +55 |
| Catch Treasure chest | +100 |
| Catch Shark | Game Over |

---

## ⏱ Game Features

- High Score Showing
- Score Tracking
- Countdown Timer
- Pause / Resume System
- Start Screen
- Game Over Screen
- Local Storage Persistence
- Animated Catch System
- Sound Effects Integration

---

Controls

### Mobile Controls

| Button | Action |
|----------|---------|
| ⬅️ | Move Left |
| 🎣 | Drop Hook |
| ➡️ | Move Right |

---

## 🛠 Built With

- React.js
- Vite
- JavaScript (ES6+)
- CSS3 Animations
- HTML5
- Local Storage API
- HTML Audio API

---

## 📂 Project Structure

```text
src/
│
├── assets/
│   ├── sounds/
│   │   ├── ocean_ambient.mp3
│   │   ├── drop.wav
│   │   ├── catch.wav
│   │   └── gameover.wav
│   │
│   ├── bettafish.png
│   ├── bubble.png
│   ├── clownfish.png
│   ├── goldfish.png
│   ├── hook.png
│   ├── octopus.png
│   ├── seahorse.png
|   ├── turtle.png
│   ├── seaweed.png
│   └── shark.png
│
├── components/
│   ├── Bubble.jsx
│   ├── ExitScreen.jsx
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

### Clone the Repository

```bash
git clone https://github.com/yourusername/fish-hunter.git
```

### Navigate into the Project

```bash
cd fish-hunter
```

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## 🌐 Live Demo

Play the game here:

**Coming Soon**

*(Replace with your Vercel deployment link after deployment.)*

---

## 🎯 Future Improvements

- Mobile touch controls
- Combo scoring system
- Special bonus fish
- Multiple difficulty levels
- Ocean theme variations
- Online leaderboard
- Achievement badges
- Particle splash effects
- Power-ups and upgrades
- Multiplayer fishing mode

---

## 📸 Screenshots

### Start Screen

_Add screenshot here_

### Gameplay

_Add screenshot here_

### Catch Animation

_Add screenshot here_

### Game Over Screen

![Project Screenshot](assets/Game_Over_Screen.png)

---

## 💡 Learning Objectives

This project was created to explore and practice:

- React State Management
- Component-Based Architecture
- Real-Time Game Logic
- Collision Detection
- Keyboard Controls
- Animation Systems
- Audio Integration
- Local Storage Persistence
- Responsive UI Design

---

## 👨‍💻 Author

### Debasmita

Frontend Developer passionate about building interactive web applications, games, and engaging user experiences using modern web technologies.

---

## ⭐ Support

If you enjoyed this project:

⭐ Star the repository

🍴 Fork the project

🚀 Share it with others

---

**Made with React, creativity, and a love for interactive web experiences.**