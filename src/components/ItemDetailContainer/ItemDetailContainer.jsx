import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import ItemCount from "../ItemLIstContainer/ItemCount";
import { useParams} from 'react-router-dom'
import {getFirestore} from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const {id}=useParams()

  useEffect(()=>{
    const dbQuery = getFirestore();
    

   if(id){
    dbQuery.collection('productos').doc(id).get()
    .then(resp=>setProductos({id: resp.id, ...resp.data() }))
   }
    },[id])
  {
    if (cart=false){
      <ItemCount stock="5" onAdd={this.onAdd} />
    }
    else{
      <a href="/cart">
      <button
          type="button"
          className="btn btn-outline-dark"
        >
          Agregar al carrito
        </button></a>
  
    }
  }
  
  const onAdd = (e) =>{

   cart(true);
  };

  return (
    <div className="container text-center row h-50">
          <div className="bg-$gray-100 container ">
      <ItemDetail producto={productos}  />
     {
      cart(false)
      }
    </div>
    </div>
  );
};

export default ItemDetailContainer;
