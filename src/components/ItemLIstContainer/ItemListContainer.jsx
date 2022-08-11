import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams} from 'react-router-dom'

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);
  const {idCategoria} = useParams();
  useEffect(() => {
    let productosHardcode = [
      {
        id: 1,
        modelo: "Playera Just Do It",
        talla: "XL",
        Color: "Gris",
        marca: "Nike",
        idCategoria: "deportivo",
        imagen: "/src/components/Imagenes/1.jpg",
      },
      {
        id: 2,
        modelo: "Playera Adidas",
        talla: "S",
        Color: "Azul",
        marca: "Adidas",
        idCategoria: "deportivo",
        imagen: "/src/components/Imagenes/2.jpg",
      },
      {
        id: 3,
        modelo: "Tenacity Performance Fleece Pant",
        talla: "XXL",
        Color: "OLIVE LEAF",
        marca: "New Balance",
        idCategoria: "deportivo",
        imagen: "/src/components/Imagenes/3.jpg",
      },
      {
        id: 4,
        modelo: "Gorra Red Bulls",
        talla: "G",
        Color: "Rojo",
        marca: "Nike",
        idCategoria: "deportivo",
        imagen: "./src/components/Imagenes/4.jpg",
      },
      {
        id: 5,
        modelo: "Playera con Monograma",
        talla: "G",
        Color: "Negro",
        marca: "True Religion",
        idCategoria: "casual",
        imagen: "/src/components/Imagenes/5.jpg",
      },
      {
        id: 6,
        modelo: "FEAR OF GOD",
        talla: "L",
        Color: "Café",
        marca: "ESSENTIALS",
        idCategoria: "casual",
        imagen: "/src/components/Imagenes/6.jpg",
      },
      {
        id: 7,
        modelo: "Playera True Religion x Chief Kee",
        talla: "S",
        Color: "Blanco",
        marca: "True Religion",
        idCategoria: "casual",
        imagen: "/src/components/Imagenes/7.jpg",
      },
    ];

    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(!idCategoria){
          resolve(productosHardcode);
        }else{
          resolve(productosHardcode.filter((producto)=> producto.idCategoria===idCategoria))
        }
        
      }, 2000);
    });

    promesa.then((resolve) => {
      setProductos(resolve);
    });
  }, [idCategoria,productos,setProductos]);

  return (
    <div className="bg-$gray-100 container ">
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
