import AddToCartButton from "../AddToCartButton/AddToCartButton";

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
