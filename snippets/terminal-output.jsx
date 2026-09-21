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
    {lines.map((line, i) => {
      const segments = line === "" ? [{ text: " " }] : line;
      return (
        <div key={i}>
          {segments.map((seg, j) => {
            const style = {};
            if (seg.color) style.color = seg.color;
            if (seg.bold) style.fontWeight = 600;
            return (
              <span key={j} style={style}>
                {seg.text}
              </span>
            );
          })}
        </div>
      );
    })}
  </div>
);
