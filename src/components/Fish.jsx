import { useEffect, useState } from "react";

export default function Fish({ fish }) {
  const [position, setPosition] = useState(
    fish.direction === "right"
      ? -fish.width
      : window.innerWidth + fish.width
  );

  const [direction, setDirection] = useState(
    fish.direction
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (direction === "right") {
          const next = prev + fish.speed;

          if (next > window.innerWidth + fish.width) {
            setDirection("left");
            return window.innerWidth + fish.width;
          }

          return next;
        }

        const next = prev - fish.speed;

        if (next < -fish.width) {
          setDirection("right");
          return -fish.width;
        }

        return next;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [direction, fish]);

  let y = fish.laneY;

  const t = Date.now() / 1000;

  switch (fish.movement) {
    case "zigzag":
      y += Math.sin(t * 3) * 25;
      break;

    case "wave":
      y += Math.sin(t * 2) * 45;
      break;

    case "drift":
      y += Math.sin(t) * 15;
      break;

    default:
      break;
  }

  return (
    <img
      src={fish.image}
      alt={fish.id}
      className="fish"
      style={{
        width: fish.width,
        left: position,
        top: y,
        zIndex: fish.zIndex,
        transform:
          direction === "left"
            ? "scaleX(-1)"
            : "scaleX(1)",
      }}
    />
  );
}