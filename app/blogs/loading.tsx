export default function Loading() {
  return (
    <div>
      {Array(5)
        .fill(0)
        .map((card, index) => (
          <div
            key={index}
            style={{
              height: "400px",
              width: "100%",
              backgroundColor: "var(--shimmerColor)",
              marginBottom: "20px",
            }}
          ></div>
        ))}
    </div>
  );
}
