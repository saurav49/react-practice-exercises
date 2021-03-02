import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCounter = (count, type) => {
    type === "plus"
      ? setCount((count) => count + 1)
      : count <= 0
      ? setCount((count) => count)
      : setCount((count) => count - 1);
  };

  return (
    <div
      style={{ border: "1px solid #333", padding: "3em", borderRadius: "1em" }}
    >
      <h1> Counter </h1>
      <h2> {count} </h2>
      <button onClick={() => handleCounter(count, "plus")}> + </button>
      <button onClick={() => handleCounter(count, "minus")}> - </button>
    </div>
  );
};

export { Counter };
