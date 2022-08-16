import React, { useState } from "react";
import { createContext } from "react";
export const Context = createContext;

export default function contextProvider({children}) {
    const [cart, setCart] =useState([]);

    function isInCart(id){
        let array= [...cart]
        const found= array.find(elem=>elem.id===id)
        if (found) return true
        return false 
    }

    const AddToCart = (item) => {        
        const array = cartList.findArray(i => i.id === item.id) 
        if (array > -1) {
            const cant = cart[array].cantidad
            cartList.splice(array, 1)
            setCart([...cart, {...item, cantidad: item.cantidad+cant}])
        }
        else {
            setCart([...cart, {...item, cantidad: item.cantidad}])
        }
    }
    const RemoveItem = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    const clearCart = () => {
        setCartList([])
    }


  return (
   <Context.Provider value={{cart, AddToCart, RemoveItem, clearCart, isInCart}}>
{
    children
}
   </Context.Provider>
  )
}
