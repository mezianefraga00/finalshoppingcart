import React, { useState } from "react";
import Cart from "./cart";
import Grid from "./grid";

const FruitsVeg = () => {
  const [cart, setCart] = useState([]);

  const handleAddQuantity = (item) => {
    const tempCart = [...cart];

    let index;
    tempCart.map((ca) => {
      if (ca.id === item.id) {
        index = tempCart.indexOf(ca);
      }
    });

    tempCart[index].addQuatity++;
    setCart(tempCart);
  };
  const handleSubQuantity = (item) => {
    const tempCart = [...cart];

    let index;
    tempCart.map((ca) => {
      if (ca.id === item.id) {
        index = cart.indexOf(ca);
      }
    });
    if (tempCart[index].addQuatity > 0) tempCart[index].addQuatity--;
    setCart(tempCart);
  };

  const addItemToCart = (item) => {
    if (cart.find((e) => e.id === item.id)) {
      const tempCart = [...cart];

      let index;
      tempCart.map((ca) => {
        if (ca.id === item.id) {
          index = tempCart.indexOf(ca);
        }
      });

      tempCart[index].addQuatity++;
      setCart(tempCart);
    } else {
      item.addQuatity = 1;
      setCart([...cart, item]);
    }
  };

  const getItem = (myid) => {
    fetch(`http://localhost:3000/vegetablesAndFruits/${myid}`)
      .then((response) => response.json())
      .then((item) => {
        addItemToCart(item);
      });
  };

  return (
    <div className="App">
      <Grid getItem={getItem} />
      <Cart onAdd={handleAddQuantity} onSub={handleSubQuantity} items={cart} />
    </div>
  );
};

export default FruitsVeg;
