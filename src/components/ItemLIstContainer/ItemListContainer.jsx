import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
  return (
    <div className="bg-gray-400">
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
