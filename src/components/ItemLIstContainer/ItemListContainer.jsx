import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams} from 'react-router-dom'
import {getFirestore} from 'firebase/firestore'

const ItemListContainer = (props) => {
  const [productos, setProductos] =useState([])
  const {idCategoria} = useParams()

  useEffect(()=>{
    const db = getFirestore();
    
    const refcollectionProductos = collection(db, 'productos');

   const dbQuery = idCategoria ? db.collection('productos').where('categoria', '==', idCategoria) : db.collection('productos')

    dbQuery.get()
    .then(data => setProductos (data.docs.map(productos=>({id: productos.id, ...productos.data() }))))

    },[idCategoria])
  
  return (
    <div className="bg-$gray-100 container ">
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
