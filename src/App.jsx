import { useEffect, useState } from "react";
import "./App.css";

import { fishConfig } from "./data/fishConfig";

import Fish from "./components/Fish";
import Bubble from "./components/Bubble";
import Seaweed from "./components/Seaweed";
import HUD from "./components/HUD";
import Hook from "./components/Hook";
import StartScreen from "./components/StartScreen";
import ExitScreen from "./components/ExitScreen";

function App() {
  // =====================
  // STATES
  // =====================

  const [fishPositions, setFishPositions] = useState({});

const updateFishPosition = (
  fishId,
  x,
  y
) => {
  setFishPositions((prev) => ({
    ...prev,
    [fishId]: {
      x,
      y,
    },
  }));
};
  
  const [paused, setPaused] =
  useState(false);
  
  const [started, setStarted] = useState(false);

  const [score, setScore] = useState(0);

  const [time, setTime] = useState(120);

  const [bubbles, setBubbles] = useState([]);

  const [gameOver, setGameOver] = useState(false);

  const [caughtFish, setCaughtFish] = useState([]);

  const [hookX, setHookX] = useState(
    window.innerWidth / 2
  );

  const [hookY, setHookY] = useState(80);

  const [hookHeight, setHookHeight] =
    useState(80);

  const [isDropping, setIsDropping] =
    useState(false);

  const [isRising, setIsRising] =
    useState(false);

  const highScore =
    Number(localStorage.getItem("highScore")) ||
    0;

  // =====================
  // CATCH LOGIC
  // =====================

  const handleCatch = (fish) => {
  // Already caught
  if (
    caughtFish.includes(fish.id)
  ) {
    return;
  }

  // Shark = Game Over
  if (fish.id === "shark") {
    setGameOver(true);
    return;
  }

  // Add points
  setScore((prev) =>
    prev + fish.points
  );

  // Remove fish permanently
  setCaughtFish((prev) => [
    ...prev,
    fish.id,
  ]);

  // Bring hook back up
  setIsDropping(false);
  setIsRising(true);
};

  // =====================
  // TIMER
  // =====================

  useEffect(() => {
    if (!started || gameOver || paused) return;

    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          setGameOver(true);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [started, gameOver, paused]);

  // =====================
  // HIGH SCORE
  // =====================

  useEffect(() => {
    const current =
      Number(
        localStorage.getItem("highScore")
      ) || 0;

    if (score > current) {
      localStorage.setItem(
        "highScore",
        score
      );
    }
  }, [score]);

  useEffect(() => {
  console.log(fishPositions);
}, [fishPositions]);

  // =====================
  // KEYBOARD CONTROLS
  // =====================

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (paused) return;
      if (isDropping || isRising) return;

      if (e.key === "ArrowLeft") {
        setHookX((prev) =>
          Math.max(20, prev - 40)
        );
      }

      if (e.key === "ArrowRight") {
        setHookX((prev) =>
          Math.min(
            window.innerWidth - 80,
            prev + 40
          )
        );
      }

      if (
        e.key === "ArrowDown" ||
        e.key === "Enter"
      ) {
        if (!paused) {
          setIsDropping(true);
        }
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [isDropping, isRising]);

  // =====================
  // HOOK DROP
  // =====================

  useEffect(() => {
    if (!isDropping) return;

    const interval = setInterval(() => {
      setHookY((prev) => {
        if (prev > 850) {
          setIsDropping(false);
          setIsRising(true);
          return prev;
        }

        return prev + 12;
      });

      setHookHeight((prev) => prev + 12);
    }, 16);

    return () => clearInterval(interval);
  }, [isDropping]);

  useEffect(() => {
  if (!isDropping) return;

  const hookWidth = 80;
  const hookHeightSize = 80;

  Object.entries(fishPositions).forEach(
    ([fishId, fishPos]) => {
      const fish = fishConfig.find(
        (f) => f.id === fishId
      );

      if (!fish) return;

      const collision =
        hookX <
          fishPos.x + fish.width &&
        hookX + hookWidth >
          fishPos.x &&
        hookY <
          fishPos.y + fish.width &&
        hookY + hookHeightSize >
          fishPos.y;

      if (collision) {
        handleCatch(fish);
      }
    }
  );
}, [
  hookX,
  hookY,
  fishPositions,
  isDropping,
]);

  // =====================
  // HOOK RISE
  // =====================

  useEffect(() => {
    if (!isRising) return;

    const interval = setInterval(() => {
      setHookY((prev) => {
        if (prev <= 80) {
          setIsRising(false);
          setHookHeight(80);
          return 80;
        }

        return prev - 12;
      });

      setHookHeight((prev) =>
        Math.max(80, prev - 12)
      );
    }, 16);

    return () => clearInterval(interval);
  }, [isRising]);

  useEffect(() => {
  if (!isDropping) return;

  const hookWidth = 80;
  const hookHeightSize = 80;

  Object.entries(fishPositions).forEach(
    ([fishId, fishPos]) => {
      const fish = fishConfig.find(
        (f) => f.id === fishId
      );

      if (!fish) return;

      const collision =
        hookX <
          fishPos.x + fish.width &&
        hookX + hookWidth >
          fishPos.x &&
        hookY <
          fishPos.y + fish.width &&
        hookY + hookHeightSize >
          fishPos.y;

      if (collision) {
        handleCatch(fish);
      }
    }
  );
}, [
  hookX,
  hookY,
  fishPositions,
  isDropping,
]);

  // =====================
  // BUBBLES
  // =====================

  useEffect(() => {
    if (
  !started ||
  paused
)
  return;

    const interval = setInterval(() => {
      const bubble = {
        id: Date.now(),
        x:
          Math.random() *
          window.innerWidth,
        y: window.innerHeight,
        size:
          10 + Math.random() * 30,
      };

      setBubbles((prev) => [
        ...prev,
        bubble,
      ]);

      setTimeout(() => {
        setBubbles((prev) =>
          prev.filter(
            (b) => b.id !== bubble.id
          )
        );
      }, 6000);
    }, 700);

    return () => clearInterval(interval);
  }, [started]);

  // =====================
  // START SCREEN
  // =====================

  if (!started) {
    return (
      <StartScreen
        onStart={() => setStarted(true)}
        highScore={highScore}
      />
    );
  }

  // =====================
  // GAME OVER
  // =====================

  if (gameOver) {
  return (
    <ExitScreen
      score={score}
      onRestart={() =>
        window.location.reload()
      }
    />
  );
}

  // =====================
  // MAIN RETURN
  // =====================

  return (
    <div className="ocean">
      <HUD
        score={score}
        highScore={highScore}
        time={time}
        paused={paused}
        setPaused={setPaused}
      />

      <Hook
        hookX={hookX}
        hookY={hookY}
        hookHeight={hookHeight}
      />

      {fishConfig
  .filter(
    (fish) =>
      !caughtFish.includes(fish.id)
  )
  .map((fish) => (
    <Fish
  key={fish.id}
  fish={fish}
  paused={paused}
  onPositionUpdate={
    updateFishPosition
  }
/>
  ))}

      {bubbles.map((bubble) => (
        <Bubble
          key={bubble.id}
          x={bubble.x}
          y={bubble.y}
          size={bubble.size}
        />
      ))}

      <Seaweed
        left="0%"
        width="220px"
        zIndex={6}
      />

      <Seaweed
        left="80%"
        width="220px"
        zIndex={5}
      />

      <Seaweed
        left="65%"
        width="120px"
        zIndex={4}
      />
      
      <div className="ocean-floor" />
    </div>
  );
}

export default App;