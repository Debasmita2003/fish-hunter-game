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
import Treasure from "./components/Treasure";
function App() {
  // =====================
  // STATES
  // =====================
const [treasure, setTreasure] = useState({
  x: Math.random() * (window.innerWidth - 150),
  y: window.innerHeight - 220,
});

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
  const [caughtFishData, setCaughtFishData] =
  useState(null);
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
  setCaughtFishData(fish);

setIsDropping(false);
setIsRising(true);
};
// treasure logic
useEffect(() => {
  if (!started) return;

  const interval = setInterval(() => {
    if (treasure) return;

    setTreasure({
      x:
        Math.random() *
        (window.innerWidth - 200),
      y:
        window.innerHeight - 220,
    });
  }, 25000);

  return () =>
    clearInterval(interval);
}, [started, treasure]);
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
// TREASURE COLLISION
  if (treasure) {
    const collision =
      hookX < treasure.x + 120 &&
      hookX + hookWidth > treasure.x &&
      hookY < treasure.y + 120 &&
      hookY + hookHeightSize > treasure.y;

    if (collision) {
      const reward =
        Math.random() < 0.1
          ? 500
          : Math.random() < 0.4
          ? 250
          : 100;

      setScore((prev) => prev + reward);

      setTreasure(null);

      console.log("Treasure collected!");
    }
  }
  // FISH COLLISION
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
          if (prev <= 80) {
  setIsRising(false);

  setHookHeight(80);

  if (caughtFishData) {
    setScore(
      (prevScore) =>
        prevScore +
        caughtFishData.points
    );

    setCaughtFish((prevFish) => [
      ...prevFish,
      caughtFishData.id,
    ]);

    setCaughtFishData(null);
  }

  return 80;
}
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
      {treasure && (
  <Treasure
    x={treasure.x}
    y={treasure.y}
  />
)}
      {caughtFishData && (
  <img
    src={caughtFishData.image}
    alt="caught fish"
    className="caught-fish"
    style={{
      left: hookX - 20,
      top: hookY + 50,
      width:
        caughtFishData.width *
        0.8,
    }}
  />
)}

      {fishConfig
  .filter(
  (fish) =>
    !caughtFish.includes(
      fish.id
    ) &&
    fish.id !==
      caughtFishData?.id
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