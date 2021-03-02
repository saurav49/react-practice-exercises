import React, { useState } from "react";
import {
  CardComponent,
  LikeList,
  Todo,
  AgeChecker,
  Cart,
  Counter,
  DarkMode,
  DesignerTool,
  MiniFigma,
  PasswordChange,
  PasswordChecker,
  Toast,
  TwitterCount
} from "../index";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#9fb8ad", color: "#fff", padding: "2em" }}>
      <h1> Home </h1>
      <h2 style={{ fontStyle: "italic" }}> This is Home Page </h2>
    </div>
  );
};

const About = () => {
  return (
    <div style={{ backgroundColor: "#383e56", color: "#fff", padding: "2em" }}>
      <h1> About </h1>
      <h2 style={{ fontStyle: "italic" }}> This is About Page </h2>
    </div>
  );
};

const btnStyle = {
  padding: "1em 1.5em",
  border: "none",
  textTransform: "uppercase",
  boxShadow: "0px 7px 1px -1px rgba(110,110,110, 1)",
  margin: "1em",
  borderRadius: "2em",
  fontWeight: "800",
  backgroundColor: "#333",
  color: "#fff",
  letterSpacing: "1.5px",
  cursor: "pointer",
  outline: "none"
};

const Profile = () => {
  return (
    <div style={{ backgroundColor: "#fb743e", color: "#fff", padding: "2em" }}>
      <h1> Profile </h1>
      <h2 style={{ fontStyle: "italic" }}> This is Profile Page </h2>
    </div>
  );
};

const SwitchTabs = () => {
  const [route1, setRoute1] = useState(<Todo />);
  const [route, setRoute] = useState(<Todo />);

  const handleChangeRoute = (route) => {
    setRoute(route);
  };

  return (
    <div
      style={{ border: "1px solid #333", padding: "2em", borderRadius: "1em" }}
    >
      <h1> Routes </h1>
      <button style={btnStyle} onClick={() => handleChangeRoute(<Todo />)}>
        Todo
      </button>
      <button style={btnStyle} onClick={() => handleChangeRoute(<LikeList />)}>
        LikeList
      </button>
      <button
        style={btnStyle}
        onClick={() => handleChangeRoute(<AgeChecker />)}
      >
        AgeChecker
      </button>
      <button style={btnStyle} onClick={() => handleChangeRoute(<Cart />)}>
        Cart
      </button>
      <button style={btnStyle} onClick={() => handleChangeRoute(<Counter />)}>
        Counter
      </button>
      <button style={btnStyle} onClick={() => handleChangeRoute(<DarkMode />)}>
        DarkMode
      </button>
      <button
        style={btnStyle}
        onClick={() => handleChangeRoute(<DesignerTool />)}
      >
        DesignerTool
      </button>
      <button style={btnStyle} onClick={() => handleChangeRoute(<MiniFigma />)}>
        MiniFigma
      </button>
      <button
        style={btnStyle}
        onClick={() => handleChangeRoute(<PasswordChange />)}
      >
        PasswordChange
      </button>
      <button
        style={btnStyle}
        onClick={() => handleChangeRoute(<PasswordChecker />)}
      >
        PasswordChecker
      </button>
      <button style={btnStyle} onClick={() => handleChangeRoute(<Toast />)}>
        Toast
      </button>
      <button
        style={btnStyle}
        onClick={() => handleChangeRoute(<TwitterCount />)}
      >
        TwitterCount
      </button>
      <button style={btnStyle} onClick={() => handleChangeRoute(<Home />)}>
        Home
      </button>
      <button style={btnStyle} onClick={() => handleChangeRoute(<Profile />)}>
        Profile
      </button>
      <button style={btnStyle} onClick={() => handleChangeRoute(<About />)}>
        About
      </button>
      {route}
    </div>
  );
};

export { SwitchTabs };
