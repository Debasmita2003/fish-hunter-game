import { useEffect, useState } from "react";

export default function Fish({
  fish,
  onPositionUpdate,
}) {
  const [direction, setDirection] = useState(
    fish.startDirection || "right"
  );

  const [position, setPosition] = useState(
    fish.startDirection === "left"
      ? window.innerWidth + fish.width
      : -fish.width
  );

  const [y, setY] = useState(fish.laneY);

  useEffect(() => {
    const interval = setInterval(() => {
      const t = Date.now() / 1000;

      let currentY = fish.laneY;

      switch (fish.movement) {
        case "zigzag":
          currentY += Math.sin(t * 3) * 25;
          break;

        case "wave":
          currentY += Math.sin(t * 2) * 45;
          break;

        case "drift":
          currentY += Math.sin(t * 1.2) * 20;
          break;

        case "wander":
          currentY += Math.sin(t * 0.8) * 15;
          break;

        default:
          break;
      }

      setY(currentY);

      setPosition((prev) => {
        let next;

        if (direction === "right") {
          next = prev + fish.speed;

          if (
            next >
            window.innerWidth + fish.width
          ) {
            setDirection("left");

            return (
              window.innerWidth +
              fish.width
            );
          }
        } else {
          next = prev - fish.speed;

          if (next < -fish.width) {
            setDirection("right");

            return -fish.width;
          }
        }

        // Send live position to App.jsx
        if (onPositionUpdate) {
          onPositionUpdate(
            fish.id,
            next,
            currentY
          );
        }

        return next;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [
    direction,
    fish,
    onPositionUpdate,
  ]);

  return (
    <img
      src={fish.image}
      alt={fish.id}
      className="fish"
      style={{
        position: "absolute",
        width: fish.width,
        left: position,
        top: y,
        zIndex: fish.zIndex,

        transform:
          direction === "left"
            ? "scaleX(-1)"
            : "scaleX(1)",

        pointerEvents: "none",
        userSelect: "none",
      }}
    />
  );
}