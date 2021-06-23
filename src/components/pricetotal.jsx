import React from "react";

const PriceTotal = (props) => {
  let priceelement = props.totalprice;
  let numberElement = props.number;

  return <h1>{(priceelement * numberElement).toFixed(2)}</h1>;
};

export default PriceTotal;
