export default function Bubble({
  x,
  y,
  size,
}) {
  return (
    <div
      className="bubble"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
      }}
    />
  );
}