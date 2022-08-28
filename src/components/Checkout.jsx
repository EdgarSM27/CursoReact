import React from 'react'
import {getFirestore} from 'firebase/firestore'
import contextProvider from './context'
import Check from './Check'


const Checkout = () => {
 
  const {ClearCart} = contextProvider() 

  const [idOrden, setIdOrden] = useState('')
  const [Nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')

  const orden = {}
  orden.cliente = { Nombre, correo, telefono }
  orden.productos = cart.map(Item => {
      const id = Item.id
      const precioProd = Item.price * Item.cantidad
      ClearCart();
      return {id, precioProd, price}
  })


  const dbQuery = getFirestore()
  dbQuery.collection('ordenes').add(orden)
  .then(resp => setIdOrden(resp.id))

  return (
    <div>
    <form 
    onSubmit={generarOrden}
    className="form-container">
        <div className="items-start">
            <div className="form-field">
                <label className="form-label" htmlFor="nombreBuyer">Nombre<span className="text-red-500">*</span></label>
                <input required
                    value={nombre}
                    onChange={(e)=>setNombre(e.target.value)}
                    className="form-input" 
                    type="text"
                    placeholder="Nombre completo"/>
            </div>
            <div className="form-field">
                <label className="form-label" htmlFor="email">Correo electronico<span className="text-red-500">*</span></label>
                <input required
                    value={correo}
                    onChange={(e)=>setCorreo(e.target.value)}
                    className={notValid ? 'form-input border-red-500' : 'form-input'} 
                    type="email"
                    placeholder="Email"
                    pattern="[^@\s]+@[^@\s]+\.[^@\s]+"/>
            </div>
            <div className="form-field">
                <label className="form-label" htmlFor="email">Teléfono<span className="text-red-500">*</span></label>
                <input required
                    value={telefono}
                    onChange={(e)=>setTelefono(e.target.value)}
                    className="form-input" 
                    type="tel" 
                    placeholder="Número de teléfono"/>
            </div>
        </div>
        <div className="form-btn-container">
            <button 
                type="submit"
                disabled={notValid}
                onClick={() => generarOrden()
                }
                className="btn-primary ml-2 disabled:opacity-25 ">Confirmar compra</button>
        </div>
    </form>
</div>
  )
}

export default Checkout