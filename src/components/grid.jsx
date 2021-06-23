import React from "react";
import Fruits from "./fruits";
import Vegetables from "./vegetables";
const Grid = ({ getItem }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Fruits getItem={getItem} />
        </div>
        <div className="h-75 d-inline-block">
          <Vegetables getItem={getItem} />
        </div>
      </div>
    </div>
  );
};

export default Grid;
