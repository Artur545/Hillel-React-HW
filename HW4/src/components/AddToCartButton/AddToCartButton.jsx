import React, { useState } from "react";

const AddToCartButton = () => {
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    setCount(1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleClearCount = () => {
    setCount(count - count);
  };

  return (
    <div>
      {count === 0 ? (
        <button onClick={handleAddToCart}>Add to cart</button>
      ) : (
        <div className="addToCartBtn">
          <div className="counter">
            <button onClick={handleDecrement}>
              <b>–</b>
            </button>
            <b className="nmbr">{count}</b>
            <button onClick={handleIncrement}>
              <b>+</b>
            </button>
          </div>
          <button onClick={handleClearCount}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
