import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
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
    <div className="bg-gray-400">
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
