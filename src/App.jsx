import { useEffect, useState } from "react";
import "./App.css";

import { fishConfig } from "./data/fishConfig";

import Fish from "./components/Fish";
import Bubble from "./components/Bubble";
import Seaweed from "./components/Seaweed";
import HUD from "./components/HUD";
import StartScreen from "./components/StartScreen";

function App() {
  const [started, setStarted] = useState(false);

  const [score] = useState(0);

  const [time] = useState(120);

  const [bubbles, setBubbles] = useState([]);

  const highScore =
    Number(localStorage.getItem("highScore")) || 0;

  // Bubble generator
  useEffect(() => {
    if (!started) return;

    const interval = setInterval(() => {
      const bubble = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: window.innerHeight,
        size: 10 + Math.random() * 30,
      };

      setBubbles((prev) => [...prev, bubble]);

      setTimeout(() => {
        setBubbles((prev) =>
          prev.filter((b) => b.id !== bubble.id)
        );
      }, 6000);
    }, 700);

    return () => clearInterval(interval);
  }, [started]);

  if (!started) {
    return (
      <StartScreen
        onStart={() => setStarted(true)}
        highScore={highScore}
      />
    );
  }

  return (
    <div className="ocean">
      <HUD
        score={score}
        highScore={highScore}
        time={time}
      />

      {/* Fishes */}
      {fishConfig.map((fish) => (
        <Fish
          key={fish.id}
          fish={{
            ...fish,
            direction:
              Math.random() > 0.5
                ? "left"
                : "right",
          }}
        />
      ))}

      {/* Bubbles */}
      {bubbles.map((bubble) => (
        <Bubble
          key={bubble.id}
          x={bubble.x}
          y={bubble.y}
          size={bubble.size}
        />
      ))}

      {/* Seaweed 1 */}
      <Seaweed
        left="20%"
        width="220px"
        zIndex={6}
      />

      {/* Seaweed 2 */}
      <Seaweed
        left="50%"
        width="200px"
        zIndex={6}
      />

      {/* Seaweed 3 */}
      <Seaweed
        left="71%"
        width="120px"
        zIndex={5}
      />

      {/* Ocean Floor */}
      <div className="ocean-floor" />
    </div>
  );
}

export default App;