import React, { useState } from "react";
import emptyHeart from "./247204021554126447.svg";
import fullHeart from "./9179068241557740359.svg";
import { ToggleThemeBtn } from "../DarkMode/DarkMode";

// cart button
const CartButton = ({ cartItems, index, handleAddToCart }) => {
  const handleCheckout = () => {
    const reducer = (prevSum, currentVal) => prevSum + currentVal;
    alert(
      `Total Amount Billed Rs ${cartItems
        .map((i) => i.price * i.cartVal)
        .reduce(reducer)}`
    );
  };

  return (
    <>
      <div>
        <button
          style={{
            padding: "0.7em",
            margin: "0.6em",
            borderRadius: "0.5em",
            border: "none",
            boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.3)"
          }}
          onClick={() => handleAddToCart(index, "-")}
        >
          -
        </button>
        {cartItems[index].cartVal}
        <button
          style={{
            padding: "0.7em",
            margin: "0.6em",
            borderRadius: "0.5em",
            border: "none",
            boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.3)"
          }}
          onClick={() => handleAddToCart(index, "+")}
        >
          +
        </button>
      </div>
      <button
        style={{
          margin: "1.2em",
          padding: "0.7em",
          border: "none",
          borderRadius: "1em",
          textTransform: "uppercase",
          boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.3)"
        }}
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </>
  );
};

// cart section
const CartSection = ({ cartItems, setCartItems }) => {
  const handleAddToCart = (index, type) => {
    if (type === "none" || type === "+") {
      cartItems[index].cartVal = cartItems[index].cartVal + 1;
      setCartItems([...cartItems]);
    } else if (type === "-") {
      cartItems[index].cartVal = cartItems[index].cartVal - 1;
      setCartItems([...cartItems]);
    }
  };

  const handleTotalPrice = () => {
    const reducer = (prevSum, currentVal) => prevSum + currentVal;
    return cartItems.map((i) => i.price * i.cartVal).reduce(reducer);
  };

  return (
    <div
      style={{
        border: "1px solid #eee",
        margin: "1em",
        borderRadius: "1em",
        padding: "1em",
        boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.5)"
      }}
    >
      <h1> Cart </h1>
      <h3> Total Price : Rs {handleTotalPrice()} </h3>
      {cartItems.map((t, index) => {
        return (
          <div
            style={{ margin: "0.6em", padding: "0.5em", display: "flex" }}
            key={index}
          >
            {cartItems[index].cartVal > 0 ? (
              <>
                <div style={{ padding: "0 2em" }}>
                  <h3> {t.name} </h3>
                  <h4> price : {t.price * t.cartVal} </h4>
                </div>
                <CartButton
                  cartItems={cartItems}
                  index={index}
                  handleAddToCart={handleAddToCart}
                  setCartItems={setCartItems}
                />
              </>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

// wishlist section
const WishList = ({ cartItems, handleAddToCart }) => {
  return (
    <div
      style={{
        border: "1px solid #eee",
        margin: "1em",
        padding: "1em",
        borderRadius: "1em",
        boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.5)"
      }}
    >
      <h2> WishList </h2>
      {cartItems.map((item, index) => {
        return (
          <div style={{ margin: "0.6em", padding: "0.5em" }} key={index}>
            {item.isFav ? (
              <>
                <h3> {item.name} </h3>
                <h4 style={{ fontStyle: "italic" }}>
                  {item.cartVal === 0
                    ? `Price : Rs ${item.price}`
                    : `Price : Rs ${item.price * item.cartVal}`}
                </h4>
                {item.cartVal === 0 ? (
                  <button
                    style={{
                      padding: "0.7em",
                      margin: "0.6em",
                      borderRadius: "0.5em",
                      border: "none",
                      boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.3)"
                    }}
                    onClick={() => handleAddToCart(index, "none")}
                  >
                    Add To Cart
                  </button>
                ) : (
                  <CartButton
                    cartItems={cartItems}
                    index={index}
                    handleAddToCart={handleAddToCart}
                  />
                )}
              </>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

const LikeList = () => {
  const [bgColor, setBgColor] = useState("#fff");

  const updateColor = (e) => {
    return bgColor === "#fff" ? "#333" : "#fff";
  };

  const [cartItems, setCartItems] = useState([
    {
      name: "book1",
      price: 1200,
      cartVal: 0,
      isFav: false
    },
    {
      name: "book2",
      price: 2000,
      cartVal: 0,
      isFav: false
    },
    {
      name: "book3",
      price: 3500,
      cartVal: 0,
      isFav: false
    }
  ]);

  const addToLike = (index) => {
    cartItems[index].isFav = !cartItems[index].isFav;
    setCartItems([...cartItems]);
  };

  const handleAddToCart = (index, type) => {
    if (type === "none" || type === "+") {
      cartItems[index].cartVal = cartItems[index].cartVal + 1;
      setCartItems([...cartItems]);
    } else if (type === "-") {
      cartItems[index].cartVal = cartItems[index].cartVal - 1;
      setCartItems([...cartItems]);
    }
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: updateColor(),
        padding: "1.5em"
      }}
    >
      <ToggleThemeBtn bgColor={bgColor} setBgColor={setBgColor} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <div>
          <h1> Just Read </h1>
          {cartItems.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  border: "1px solid #ddd",
                  margin: "1em",
                  borderRadius: "1em",
                  padding: "2em",
                  boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.5)"
                }}
              >
                <h3> {item.name} </h3>
                {item.isFav ? (
                  <img
                    style={{ width: "25px", height: "25px" }}
                    onClick={() => addToLike(index)}
                    src={fullHeart}
                    alt="likeIcon"
                  />
                ) : (
                  <img
                    style={{ width: "25px", height: "25px" }}
                    onClick={() => addToLike(index)}
                    src={emptyHeart}
                    alt="likeIcon"
                  />
                )}
                <h4 style={{ fontStyle: "italic" }}>
                  {item.cartVal === 0 ? (
                    <> Price : Rs {item.price} </>
                  ) : (
                    <> Price : Rs {item.price * item.cartVal} </>
                  )}
                </h4>

                {cartItems[index].cartVal === 0 ? (
                  <button
                    style={{
                      padding: "0.7em",
                      margin: "0.6em",
                      borderRadius: "0.5em",
                      border: "none",
                      boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.3)"
                    }}
                    onClick={() => handleAddToCart(index, "none")}
                  >
                    Add To Cart
                  </button>
                ) : (
                  <>
                    <CartButton
                      cartItems={cartItems}
                      index={index}
                      setCartItems={setCartItems}
                      handleAddToCart={handleAddToCart}
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Cart section */}
        <CartSection cartItems={cartItems} setCartItems={setCartItems} />
      </div>

      {/* WishList section */}
      <WishList cartItems={cartItems} handleAddToCart={handleAddToCart} />
    </div>
  );
};

export { LikeList };
