import React from "react";
import ItemCount from "./ItemCount";

const Item = ({ modelo, talla, color, imagen, marca }) => {
  return (
    <div className="w-auto col-2  card p-4 m-4">
      <img src={imagen} className="img-fluid" alt="" />
      <a className="nav-link" href="/producto/">
        {marca}
      </a>
      <p> {modelo} </p>
      <p> Talla : {talla} </p>
      <p> Color : {color} </p>
      <ItemCount stock="5" />
    </div>
  );
};

export default Item;
