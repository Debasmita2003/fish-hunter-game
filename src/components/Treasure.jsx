import treasureImg from "../assets/treasure.png";

export default function Treasure({
  x,
  y,
}) {
  return (
    <img
      src={treasureImg}
      alt="treasure"
      className="treasure"
      style={{
        left: x,
        top: y,
      }}
    />
  );
}