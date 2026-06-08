import hookImg from "../assets/hook.png";
export default function Hook({
  hookX,
  hookY,
  hookHeight,
}) {
  return (
    <>
      {/* Rope */}
      <div
        className="rope"
        style={{
          left: hookX + 54,
          height: hookHeight,
        }}
      />

      {/* Hook */}
      <img
        src={hookImg}
        alt="hook"
        className="hook"
        style={{
          left: hookX,
          top: hookY,
        }}
      />
    </>
  );
}