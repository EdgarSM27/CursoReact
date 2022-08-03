import React from "react";
import Item from "./Item";

const ItemList = (props) => {

let mostrar=false


  function MostrarProducto() {
    return new Promise((resolve) => {
      setTimeout(() => {
        mostrar=true
      }, 2000);
    });
  }


  return <div className="row text-center">
    {
    props.productos.map((item) => (
      <Item
        key={item.id}
        modelo={item.modelo}
        talla={item.talla}
        color={item.Color}
      />
    ))
    }
  
  </div>;
};

export default ItemList;
