import React, { useState } from "react";

let error = "#e40017";
let success = "#00af91";
let warning = "#ffcc29";

const ToastComponent = ({ name, type }) => {
  const [isToast, setIsToast] = useState("block");

  const showToastHandler = () => {
    isToast === "block" ? setIsToast("none") : setIsToast("block");
  };

  return (
    <div>
      <span style={{ fontWeight: "900" }}> {name} Component </span>
      <button onClick={showToastHandler}>
        {isToast === "block" ? "Hide" : "Show"}
      </button>

      <div
        style={{
          display: isToast,
          backgroundColor: type,
          padding: "1em",
          borderRadius: "1em",
          color: "#fff",
          boxShadow: "0px 2px 3px rgba(0,0,0,0.5)"
        }}
      >
        <h2> Heads up!, Toast will stack automatically </h2>
      </div>
    </div>
  );
};
const Toast = () => {
  return (
    <div
      style={{ border: "1px solid #333", padding: "3em", borderRadius: "1em" }}
    >
      <ToastComponent name="Error" type={error} />
      <ToastComponent name="Success" type={success} />
      <ToastComponent name="Warning" type={warning} />
    </div>
  );
};

export { Toast };
