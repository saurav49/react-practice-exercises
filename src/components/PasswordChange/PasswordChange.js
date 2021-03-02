import React, { useState } from "react";

let pass;

const PasswordChange = () => {
  const [btnState, setBtnState] = useState(true);
  const [passState, setpassState] = useState("password");

  const showPass = (e) => {
    e.preventDefault();
    console.log(pass);
  };
  return (
    <div
      style={{ border: "1px solid #333", padding: "3em", borderRadius: "1em" }}
    >
      <h1> Password Change </h1>
      <input
        type={passState}
        placeholder="Enter Password"
        onChange={(e) => {
          pass = e.target.value;
        }}
      />
      <button
        onClick={() => {
          passState === "password"
            ? setpassState("text")
            : setpassState("password");
        }}
      >
        {passState === "password" ? "Show Password" : "Hide password"}
      </button>
      <input
        type="password"
        placeholder="Re-Enter Password"
        onChange={(e) => {
          pass === e.target.value ? setBtnState(false) : setBtnState(true);
        }}
      />
      <button disabled={btnState} onClick={showPass}>
        Submit
      </button>
    </div>
  );
};

export { PasswordChange };
