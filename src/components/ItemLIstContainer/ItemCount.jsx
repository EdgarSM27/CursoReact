import React, { useEffect, useState } from "react";

const ItemCount = (props) => {
  const [clickCount, SetClickCount] = useState(1);

  const Add = () => {
    if (clickCount < props.stock) {
      SetClickCount(clickCount + 1);
    }
  };

  const Remove = () => {
    if (clickCount > 1) {
      SetClickCount(clickCount - 1);
    }
  };
  const onAdd = (e) =>{

    let addTo
  };

  




  return (
    <>

      
      <div
        className="btn-group btn-group-sm"
        role="group"
        aria-label="Small button group"
      >
        <button
          onClick={Remove}
          type="button"
          className="btn btn-outline-dark"
        >
          -
        </button>
        <p className="p-4">{clickCount}</p>
        <button onClick={Add} type="button" className="btn btn-outline-dark">
          +
        </button>
      </div>
      <div className="m-4 w-auto">
      <button
          onClick={onAdd}
          type="button"
          className="btn btn-outline-dark"
        >
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
