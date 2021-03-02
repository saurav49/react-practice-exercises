import React from "react";

const CardComponent = ({ image, title, desc, price, org_price, discount }) => {
  return (
    <div style={{ border: "1px solid #333", borderRadius: "1em" }}>
      <img
        src={image}
        alt="myntra-img"
        style={{ width: "100px", height: "100px" }}
      />
      <h2> {title} </h2>
      <div style={{ fontWeight: "900" }}> {desc} </div>
      <div>
        <strong> Rs.{price} </strong>{" "}
        <span style={{ textDecoration: "line-through" }}> Rs.{org_price} </span>
        <span style={{ color: "red" }}> {discount}% OFF </span>
      </div>
      <div style={{ fontStyle: "italic" }}> inclusive of all taxes </div>
    </div>
  );
};

export default CardComponent;
