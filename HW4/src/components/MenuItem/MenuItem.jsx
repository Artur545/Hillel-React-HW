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

const MenuItem = ({ id, name, unitPrice, imageUrl, ingredients, soldOut }) => {
  const handleClickButton = () => {
    console.log(`Піццу ${name} додано до кошика`);
  };
  return (
    <li className="pizza" key={id}>
      <img src={imageUrl} alt={name} className="pizza__image" />
      <div className="pizza__info">
        <p className="pizza__name">{name}</p>
        <p className="pizza__ingredients">{ingredients.join(", ")}</p>
        <div className="pizza__actions">
          {!soldOut ? (
            <>
              <p className="pizza__price">€{unitPrice}</p>
              <AddToCartButton onClick={handleClickButton} />
            </>
          ) : (
            <p className="pizza__price">
              <b>Sold out</b>
            </p>
          )}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
