import React from 'react'
import ItemCount from '../ItemLIstContainer/ItemCount'




const ItemDetail = (props) => {
  return (
    <div className='col-4  card p-4 m-4 h-50'>
        <img className='img-fluid' src={props.img} alt="" />
        <p>{props.marca} </p>
        <p>{props.producto} </p>
        <p>Descripción del producto: {props.descripcion} </p>
        <p>stock: {props.stock} </p>
        <p>Precio: {props.precio} </p>

        <ItemCount stock= {props.stock}/>
           </div>
  )
}

export default ItemDetail

