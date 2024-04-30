import React from "react";
import MenuItem from "../MenuItem/MenuItem";

const MenuList = ({ pizza }) => {
  return pizza.map((prop) => (
    <MenuItem
      key={prop.id}
      name={prop.name}
      unitPrice={prop.unitPrice}
      imageUrl={prop.imageUrl}
      ingredients={prop.ingredients}
      soldOut={prop.soldOut}
    />
  ));
};

export default MenuList;
