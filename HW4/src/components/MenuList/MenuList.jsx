import React from "react";
import MenuItem from "../MenuItem/MenuItem";

const MenuList = ({ menu }) => {
  return menu.map((prop) => (
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
