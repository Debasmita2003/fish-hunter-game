export default function HUD({
  score,
  highScore,
  time,
}) {
  return (
    <div className="hud">
      <div className="score">
        Score: {score}
      </div>

      <div className="time">
        Time: {time}
      </div>

      <div className="highscore">
        High Score: {highScore}
      </div>

      <button className="pause-btn">
        ⏸
      </button>
    </div>
  );
}