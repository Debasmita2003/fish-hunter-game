export default function HUD({
  score,
  highScore,
  time,
  paused,
  setPaused,
}) {
  return (
    <div className="hud">
      <div className="hud-left">
        <div className="hud-box">
          Score: {score}
        </div>

        <div className="hud-box">
          Time: {time}
        </div>
      </div>

      <div className="hud-right">
        <div className="hud-box">
          High Score: {highScore}
        </div>

        <button
  className="hud-box pause-btn"
  onClick={() =>
    setPaused((prev) => !prev)
  }
>
  {paused
    ? "▶ "
    : "⏸ "}
</button>
      </div>
    </div>
  );
}