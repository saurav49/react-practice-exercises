import React, { useState } from "react";

const TwitterCount = () => {
  const [charCount, setCharCount] = useState("");
  let charStyle;

  if (charCount.length < 30) {
    charStyle = "green";
  } else if (charCount.length >= 30 && charCount.length < 50) {
    charStyle = "yellow";
  } else {
    charStyle = "red";
  }

  return (
    <div
      style={{ border: "1px solid #333", padding: "3em", borderRadius: "1em" }}
    >
      <h1> Twitter Charachter Count </h1>
      <textarea
        style={{ width: "300px", height: "100px" }}
        value={charCount}
        onChange={(e) => {
          setCharCount(e.target.value);
        }}
      />
      <h2>
        <span style={{ color: charStyle }}>{charCount.length}</span>/50
      </h2>
      <h3> {charCount.length > 50 ? "Limit Exceed" : ""} </h3>
    </div>
  );
};

export { TwitterCount };
