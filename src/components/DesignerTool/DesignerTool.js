import React, { useState } from "react";

const DesignerTool = () => {
  const [fSize, setFSize] = useState(16);

  return (
    <div
      style={{ border: "1px solid #333", padding: "3em", borderRadius: "1em" }}
    >
      <h1> Designer Tool </h1>
      <h2 style={{ fontSize: `${fSize}px`, color: "red" }}>
        Control my font-size with buttons below, Current Size : {fSize}
      </h2>

      <button onClick={() => setFSize(fSize + 8)}> + </button>
      <button onClick={() => setFSize(fSize - 8)}> - </button>
    </div>
  );
};

export { DesignerTool };
