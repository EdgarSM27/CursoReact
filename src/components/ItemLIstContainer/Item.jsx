import React from "react";
import ItemCount from "./ItemCount";

const Item = ({ modelo, talla, color }) => {
  return (
    <div className="col">
      <p> Modelo : {modelo} </p>
      <p> Talla : {talla} </p>
      <p> Color : {color} </p>
      <ItemCount stock= "5"/>
    </div>
  );
};

export default Item;
