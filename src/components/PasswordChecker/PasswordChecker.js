import React, { useState } from "react";

let pass, confirmPass;

const PasswordChecker = () => {
  const [error, setError] = useState("");

  const checkPass = (e) => {
    let str = e.target.value;

    if (
      str.match(/[a-z]/g) &&
      str.match(/[A-Z]/g) &&
      str.match(/[0-9]/g) &&
      str.match(/[^a-zA-Z\d]/g) &&
      str.length >= 8
    ) {
      pass === str
        ? setError("Valid Password")
        : setError("Password Not Equal");
    } else {
      setError("Password Not Valid");
    }
  };
  return (
    <div
      style={{ border: "1px solid #333", padding: "3em", borderRadius: "1em" }}
    >
      <form>
        <label>
          Password :
          <input
            type="password"
            placeholder="Enter Password"
            value={pass}
            onChange={(e) => {
              pass = e.target.value;
            }}
          />
        </label>
        <label>
          Confirm Password :
          <input
            type="password"
            placeholder="Re-Enter Password"
            value={confirmPass}
            onChange={(e) => checkPass(e)}
          />
          <div style={{ fontStyle: "Italic", fontWeight: "bold" }}>{error}</div>
        </label>
      </form>
    </div>
  );
};

export { PasswordChecker };
