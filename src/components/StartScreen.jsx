import bgImage from "../assets/little_fisher.png";

export default function StartScreen({
  onStart,
  highScore,
}) {
  return (
    <div
      className="start-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="content">
        <h1 className="game-title">
          Fish Hunter
        </h1>

        <p className="start-description">
          Catch fish, avoid sharks and beat your high score.
        </p>

        <div className="score-card">
          High Score: {highScore}
        </div>

        <button
          className="start-btn"
          onClick={onStart}
        >
          Start Fishing
        </button>
      </div>
    </div>
  );
}