import React, { useState } from "react";
let age;

const AgeChecker = () => {
  // const [age, setAge] = useState();
  const [error, setError] = useState("");

  // const handleAgeChange = (e) => {
  //   setAge(e.target.value)
  //   console.log(`age : ${age}`);
  // };
  // const onBtnClick = (e) => {
  //   e.preventDefault();
  //   age < 18 ? setError("Invalid Age!") : setError("Valid Age");
  // };

  return (
    <div
      style={{ border: "1px solid #333", padding: "3em", borderRadius: "1em" }}
    >
      <h1> Age Checker </h1>
      <input
        type="number"
        placeholder="Enter Your Age"
        value={age}
        onChange={(e) => {
          e.target.value < 18
            ? setError("Invalid Age!")
            : setError("Valid Age!");
        }}
      />
      {/* <button onClick={(e) => onBtnClick(e)}>Submit</button> */}
      <div> {error} </div>
    </div>
  );
};

export { AgeChecker };
