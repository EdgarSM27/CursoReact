import React from "react";

const Item = ({ modelo, talla, color }) => {
  return (
    <div>
      <p> Modelo : {modelo} </p>
      <p> Talla : {talla} </p>
      <p> Color : {color} </p>
    </div>
  );
};

export default Item;
