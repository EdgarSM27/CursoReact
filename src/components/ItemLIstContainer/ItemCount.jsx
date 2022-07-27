import React, { useState } from "react";

const ItemCount = (props) => {
  const [clickCount, SetClickCount] = useState(1);
 
  const onAdd = () => {
    if (clickCount < props.stock) 
    {
        SetClickCount(clickCount + 1);
    }
  };

  const onRemove =() => {
    if (clickCount >1){
        SetClickCount(clickCount - 1)
    }
  }

  return (
<>

   <h3>{clickCount}</h3>
    <div
      class="btn-group btn-group-sm"
      role="group"
      aria-label="Small button group"
    >
      <button onClick={onRemove} type="button" class="btn btn-outline-dark">-</button>
      <button onClick={onAdd} type="button" class="btn btn-outline-dark">+</button>
    </div>
    </>
  );
};

export default ItemCount;
