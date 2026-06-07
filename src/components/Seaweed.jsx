import seaweedImg from "../assets/seaweed.png";

export default function Seaweed({
  left,
  width,
  zIndex,
}) {
  return (
    <img
      src={seaweedImg}
      alt="seaweed"
      className="seaweed"
      style={{
        left,
        width,
        zIndex,
      }}
    />
  );
}