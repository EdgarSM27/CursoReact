import React from "react";
import Item from "./Item";

const ItemList = (props) => {



  return <div>{
    props.productos.map((item) => (
    <Item
      key={item.id}
      modelo={item.modelo}
      talla={item.talla}
      color={item.Color}
    />
  ))}</div>;
};

export default ItemList;
