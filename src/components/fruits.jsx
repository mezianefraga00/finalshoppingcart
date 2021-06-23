import React, { useState, useEffect } from "react";
import ListItem from "./listItem";

const Fruits = (props) => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    let fruits = [];
    fetch("http://localhost:3000/vegetablesAndFruits")
      .then((response) => response.json())
      .then((listfruits) => {
        fruits = listfruits.filter((li) => li.type.id === 2);
        setFruits(fruits);
      });
  }, []);

  return <ListItem data={fruits} getItem={props.getItem} />;
};
export default Fruits;
