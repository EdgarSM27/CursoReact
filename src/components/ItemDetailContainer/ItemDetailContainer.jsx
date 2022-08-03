import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';




const ItemDetailContainer = () => {
    const [getItem,setGetItem]= useState({});
    useEffect(()=>{
        fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
        .then((response)=> response.json())
        .then((res)=>{
            setGetItem(res);
        },[])

  
    })
  return (
    <div className='container text-center row h-50'>
          <ItemDetail marca={getItem[0].brand} producto={getItem[0].name} stock="5" precio={getItem[0].price} descripcion={getItem[0].description} img={getItem[0].image_link} />
         
         
             </div>
  )
}

export default ItemDetailContainer