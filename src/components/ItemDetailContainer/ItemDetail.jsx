import React from "react";
import ItemCount from "../ItemLIstContainer/ItemCount";

const ItemDetail = (producto) => {
  return (
    <div className="col-4  card p-4 m-4 h-50">
      <img className="img-fluid" src={producto.img} alt="" />
      <p>{producto.marca} </p>
      <p>{producto.modelo} </p>
      <p>Descripción del producto: {producto.descripcion} </p>
      <p>Talla: {producto.talla} </p>
      <p>Color: {producto.Color} </p>
      <p>stock: {producto.stock} </p>
      <p>Precio: {producto.precio} </p>

      <ItemCount stock={producto.stock} />
    </div>
  );
};

export default ItemDetail;
