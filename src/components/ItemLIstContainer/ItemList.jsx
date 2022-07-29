import React from "react";
import Item from "./Item";

const ItemList = () => {
  const productos = [
    {
      id: 1,
      modelo: "Playera Just Do It",
      talla: "XL",
      Color: "Gris",
    },
    {
      id: 2,
      modelo: "Playera Adidas",
      talla: "S",
      Color: "Verde",
    },
    {
      id: 3,
      modelo: "Pans militares",
      talla: "XXL",
      Color: "Cafe",
    },
    {
      id: 4,
      modelo: "Gorra Red Bulls",
      talla: "G",
      Color: "Rojo",
    },
  ];
  
  return (
    <div>
{
          productos.map((item) => (
            <Item
              key={item.id}
              modelo={item.modelo}
              talla={item.talla}
              color={item.Color}
            />
          ))
}
    </div>
  );
};

export default ItemList;
