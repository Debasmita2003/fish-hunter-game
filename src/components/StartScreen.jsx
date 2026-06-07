import heroImg from "../assets/hero.png";

export default function StartScreen({
  onStart,
  highScore,
}) {
  return (
    <div className="start-screen">
      <h1 className="start-title">
        🎣 Fish Hunter
      </h1>

      <img
        src={heroImg}
        alt="hero"
        className="hero-image"
      />

      <p className="start-description">
        Catch fish, avoid sharks and
        beat your high score.
      </p>

      <h2>
        High Score: {highScore}
      </h2>

      <button
        className="start-btn"
        onClick={onStart}
      >
        Start Fishing
      </button>
    </div>
  );
}