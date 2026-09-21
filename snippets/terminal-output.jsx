export const TerminalOutput = ({ lines }) => (
  <div
    style={{
      background: "#171717",
      borderRadius: "5px",
      color: "white",
      fontFamily:
        "SFMono-Regular, Monaco, Menlo, Consolas, monospace",
      fontSize: "13px",
      lineHeight: "20px",
      padding: "14px 18px",
      whiteSpace: "pre-wrap",
      overflowX: "auto",
    }}
  >
    {lines.map((line, i) => (
      <div key={i}>
        {typeof line === "string"
          ? line || " "
          : line.map((seg, j) => (
              <span
                key={j}
                style={{
                  color: seg.color || undefined,
                  fontWeight: seg.bold ? 600 : undefined,
                }}
              >
                {seg.text}
              </span>
            ))}
      </div>
    ))}
  </div>
);
