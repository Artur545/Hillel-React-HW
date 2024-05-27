import React, { useEffect, useState } from "react";
import MenuList from "../MenuList/MenuList";

const PizzaList = () => {
  const [menu, setMenu] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPizzaList = async () => {
      try {
        const res = await fetch(
          "https://react-fast-pizza-api.onrender.com/api/menu"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await res.json();
        setMenu(data.data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    getPizzaList();
  }, []);

  return (
    <>
      <h1>Menu</h1>

      {error && <p>{error}</p>}

      {isLoading && <h2>Loading...</h2>}

      <MenuList menu={menu} />
    </>
  );
};
export default PizzaList;
