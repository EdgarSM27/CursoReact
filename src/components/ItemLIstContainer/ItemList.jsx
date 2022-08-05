import React from "react";
import Item from "./Item";

const ItemList = (props) => {
  let mostrar = false;

  return (
    <div className="text-center justify-content-md-center row row-cols-4 h-25">
      {props.productos.map((item) => (
        <Item
          key={item.id}
          modelo={item.modelo}
          talla={item.talla}
          color={item.Color}
          imagen={item.imagen}
        />
      ))}
    </div>
  );
};

export default ItemList;
