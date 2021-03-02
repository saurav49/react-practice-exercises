import React, { useState } from "react";

const Books = [
  {
    name: "Book1",
    price: "Rs 1000"
  },
  {
    name: "Book2",
    price: "Rs 1500"
  },
  {
    name: "Book3",
    price: "Rs 2000"
  }
];

const Cart = () => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (b) => {
    setCart([...cart, b]);
  };

  const addLastAddedEle = () => {
    if (cart.length > 0) {
      setCart([...cart, cart[0]]);
    }
  };
  return (
    <div
      style={{ border: "1px solid #333", padding: "3em", borderRadius: "1em" }}
    >
      <h1> Books </h1>
      <h2 onClick={() => addLastAddedEle()}> Card : {cart.length} </h2>
      <div>
        {Books.map((b, idx) => {
          return (
            <div
              key={idx}
              style={{
                border: "1px solid #333",
                padding: "1em",
                borderRadius: "1em",
                margin: "1.5rem",
                backgroundColor: "#ddd"
              }}
            >
              <h2> {b.name} </h2>
              <h4> {b.price} </h4>
              <button onClick={() => addItemToCart(b)}> Add To Cart </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Cart };
