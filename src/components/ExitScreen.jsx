import seashore from "../assets/seashore.png";

export default function ExitScreen({
  score,
  onRestart,
}) {
  return (
    <div
      className="exit-screen"
      style={{
        backgroundImage: `url(${seashore})`,
      }}
    >
      

      <div className="exit-content">
        <h1 className="exit-title">
          Game Over
        </h1>

        <p className="exit-score">
          Final Score: {score}
        </p>

        <button
          className="restart-btn"
          onClick={onRestart}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}