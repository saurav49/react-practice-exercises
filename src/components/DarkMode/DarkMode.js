import React, { useState } from "react";
import sun from "./17989915901553239397.svg";
import moon from "./1008578731543238906.svg";

const ToggleThemeBtn = ({ bgColor, setBgColor }) => {
  let btnBg;

  const handleBgColor = () => {
    bgColor === "#fff" ? setBgColor("#333") : setBgColor("#fff");
  };

  const updateBtnBgColor = () => {
    return bgColor === "#fff" ? (btnBg = "#333") : (btnBg = "#fff");
  };

  return (
    <>
      <button
        style={{
          outline: "none",
          backgroundColor: updateBtnBgColor(),
          padding: "0.5em 1.3em",
          borderRadius: "10px",
          border: "none",
          color: bgColor,
          textTransform: "uppercase",
          boxShadow: "0px 2px 3px rgba(125, 125, 100, 0.5)",
          margin: "1rem"
        }}
        onClick={handleBgColor}
      >
        Toggle Theme
      </button>
    </>
  );
};

const DarkMode = () => {
  const [bgColor, setBgColor] = useState("#fff");

  const updateColor = (e) => {
    return bgColor === "#fff" ? "#333" : "#fff";
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: updateColor(),
        padding: "1.5em"
      }}
    >
      <h1> Watch me change my theme </h1>
      <ToggleThemeBtn bgColor={bgColor} setBgColor={setBgColor} />
    </div>
  );
};

export { ToggleThemeBtn, DarkMode };
