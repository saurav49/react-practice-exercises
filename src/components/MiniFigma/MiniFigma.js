import React, { useState } from "react";
import styles from "./MiniFigma.module.css";

const MiniFigma = ({}) => {
  const [heading, setHeading] = useState("This is heading");
  const [bodyText, setBodyText] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const [headingFont, setHeadingFont] = useState("Roboto");
  const [bodyFont, setBodyFont] = useState("merriweather");
  const [textBgColor, setTextBgColor] = useState("#333");
  const [headingColor, setHeadingColor] = useState("#fff");
  const [textColor, setTextColor] = useState("#fff");

  const handleHeading = (e) => {
    setHeading(e.target.value);
  };

  const handleBodyText = (e) => {
    setBodyText(e.target.value);
  };

  const handleFontSize = (type) => {
    type === "plus" ? setFontSize(fontSize + 4) : setFontSize(fontSize - 4);
  };

  const handleHeadingFont = (e) => {
    setHeadingFont(e.target.value);
  };

  const handleBodyFont = (e) => {
    setBodyFont(e.target.value);
  };

  const handleBgColor = (e) => {
    setTextBgColor(e.target.value);
  };

  const handleHeadingColor = (e) => {
    setHeadingColor(e.target.value);
  };

  const handleTextColor = (e) => {
    setTextColor(e.target.value);
  };

  const handlePresets = ({
    backgroundColor: bgColor,
    color,
    textColor: tColor
  }) => {
    setTextBgColor(bgColor);
    setHeadingColor(color);
    setTextColor(tColor);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "1em"
      }}
    >
      <h1> MiniFigma </h1>
      <h2 style={{ margin: "1em 0em" }}>
        Type any text in the area below and experiment with CSS styles!
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: textBgColor,
          color: headingColor,
          width: "90%",
          maxWidth: "1100px",
          padding: "1em 2em",
          height: "50%",
          borderRadius: "0.5em",
          margin: "1.5em 0em"
        }}
      >
        <input
          style={{
            fontWeight: "900",
            fontSize: "32px",
            border: "none",
            padding: "0.3em",
            margin: "10px 0",
            backgroundColor: textBgColor,
            color: headingColor,
            fontFamily: headingFont,
            textAlign: "center"
          }}
          type="text"
          value={heading}
          onChange={handleHeading}
        />
        <input
          style={{
            fontSize: `${fontSize}px`,
            border: "none",
            padding: "1em",
            backgroundColor: textBgColor,
            color: textColor,
            fontFamily: bodyFont
          }}
          type="text"
          value={bodyText}
          onChange={handleBodyText}
        />
      </div>

      <div style={{ display: "flex", padding: "1em" }}>
        {/* font size */}
        <div style={{ margin: "0em 1.5em" }}>
          <h4> Font Size </h4>
          <button
            style={{ padding: "0.3em" }}
            onClick={() => handleFontSize("plus")}
          >
            {" "}
            +{" "}
          </button>
          <span style={{ padding: "0.5em", fontWeight: "900" }}>
            {fontSize} px
          </span>
          <button
            style={{ padding: "0.3em" }}
            onClick={() => handleFontSize("minus")}
          >
            {" "}
            -{" "}
          </button>
        </div>
        {/* heading font */}
        <div style={{ margin: "0em 1.5em" }}>
          <h4> Heading Font </h4>
          <select value={headingFont} onChange={handleHeadingFont}>
            <option default value="Roboto">
              Roboto
            </option>
            <option value="Lato">Lato</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Raleway">Raleway</option>
          </select>
        </div>
        {/* body font */}
        <div style={{ margin: "0em 1.5em" }}>
          <h4> Body Font </h4>
          <select value={bodyFont} onChange={handleBodyFont}>
            <option value="poppins"> Poppins </option>
            <option value="source sans pro"> Source sans pro </option>
            <option value="merriweather"> Merriweather </option>
            <option value="Open sans"> Open sans </option>
          </select>
        </div>

        <div
          style={{
            margin: "0em 1.5em",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <h4> Select your Colors </h4>
          <div style={{ padding: "1em 0em" }}>
            <span style={{ fontWeight: "900" }}>Background</span>
            :
            <input
              type="color"
              id="favcolor"
              name="favcolor"
              value={textBgColor}
              onChange={handleBgColor}
            />
          </div>
          <div style={{ padding: "1em 0em" }}>
            <span style={{ fontWeight: "900" }}>Heading</span> :
            <input
              type="color"
              id="favcolor"
              name="favcolor"
              value={headingColor}
              onChange={handleHeadingColor}
            />
          </div>

          <div style={{ padding: "1em 0em" }}>
            <span style={{ fontWeight: "900" }}>Text Color</span> :
            <input
              type="color"
              id="favcolor"
              name="favcolor"
              value={textColor}
              onChange={handleTextColor}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          width: "85%",
          backgroundColor: "#323232",
          height: "3px",
          borderRadius: "0.5em",
          margin: "1em 0em"
        }}
      ></div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2> Here are some Presets : </h2>
        <div style={{ display: "flex", margin: "1em 0em" }}>
          <div
            style={{
              backgroundColor: "#f4d160",
              color: "#8ac4d0",
              padding: "2em",
              borderRadius: "0.5em",
              fontWeight: "600",
              letterSpacing: "1px",
              cursor: "pointer",
              marginRight: "1em"
            }}
            onClick={() =>
              handlePresets({
                backgroundColor: "#f4d160",
                color: "#8ac4d0",
                textColor: "#fff"
              })
            }
          >
            Lora & Merriweather <br />
            <span style={{ fontWeight: "500", color: "#fff" }}>
              Click here to apply this to your preview
            </span>
          </div>
          <div
            style={{
              backgroundColor: "#4a47a3",
              color: "#709fb0",
              padding: "2em",
              borderRadius: "0.5em",
              letterSpacing: "1px",
              fontWeight: "600",
              cursor: "pointer",
              marginRight: "1em"
            }}
            onClick={() =>
              handlePresets({
                backgroundColor: "#4a47a3",
                color: "#709fb0",
                textColor: "#a7c5eb"
              })
            }
          >
            Proza Libre & Open Sans <br />
            <span style={{ fontWeight: "500", color: "#a7c5eb" }}>
              Click here to apply this to your preview
            </span>
          </div>
          <div
            style={{
              backgroundColor: "#f6f6f8",
              color: "#c60021",
              padding: "2em",
              borderRadius: "0.5em",
              letterSpacing: "1px",
              fontWeight: "600",
              cursor: "pointer"
            }}
            onClick={() =>
              handlePresets({
                backgroundColor: "#f6f6f8",
                color: "#c60021",
                textColor: "#a7c5eb"
              })
            }
          >
            Libre Baskerville & Source Sans Pro <br />
            <span style={{ fontWeight: "500", color: "#a7c5eb" }}>
              Click here to apply this to your preview
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "85%",
          backgroundColor: "#323232",
          height: "3px",
          borderRadius: "0.5em",
          margin: "1.5em 0em"
        }}
      ></div>
    </div>
  );
};

export { MiniFigma };
