import React, { useState, useEffect } from "react";
import ListItem from "./listItem";

const Vegetables = (props) => {
  const [vegetables, setVegetables] = useState([]);

  useEffect(() => {
    let vegatables = [];
    fetch("http://localhost:3000/vegetablesAndFruits")
      .then((response) => response.json())
      .then((listVegatables) => {
        vegatables = listVegatables.filter((li) => li.type.id === 1);
        setVegetables(vegatables);
      });
  }, []);

  return <ListItem data={vegetables} getItem={props.getItem} />;
};

export default Vegetables;
