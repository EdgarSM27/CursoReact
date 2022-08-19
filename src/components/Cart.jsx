import React from 'react'
import contextProvider from './context'


const Cart = () => {

    const {cart, clearCart, RemoveItems} = contextProvider();
  return (
    <div className="h-full">
    { !cart.length > 0 ?
        <>
            <p> El carrito está vacio</p>
        </>    
        :
        <div className="flex flex-col items-center h-full">
            <h3 className="title">Carrito</h3>
            
            {cart.map(prod => 
            <Link to={`/producto/${prod.id}`}>
                <div key={prod.id} className="cart-item-container">
                    <img src={prod.imagen} className="rounded h-32 mx-6" alt=""/>
                    <div className="mx-3">
                        <h4 className="text-lg my-3">{prod.modelo}</h4>
                        <div className="flex flex-col items-start mb-3">
                            <p>Cantidad: {prod.cantidad}</p>
                            <p>Precio: {prod.precio}€</p>
                            
                        </div>
                    </div>
                    <button className="btn-delete" key={prod.id} onClick={()=> eliminarItem(prod.id) }>
                    Eliminar Producto</button>
                </div>
            </Link>
              
            )}
                
            <div className="pt-8 flex">
                    <button className="btn-primary">Finalizar compra</button>
                <button onClick={ clearCart } className="btn-secondary ml-2">Limpiar Carrito</button>
            </div>

        </div>
    }
</div>
  )
}

export default Cart