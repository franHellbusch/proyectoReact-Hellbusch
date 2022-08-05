import { useState, useContext } from 'react'
import { addDoc ,collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../Firebase/firebase'
import CartProducts from './CartProducts/CartProducts'
import CartForm from './CartForm/CartForm.js'
import CartBuyed from './CartBuyed/CartBuyed.js'
import './CartContainer.css'
import { cartContext } from '../../context/CartContext'

const CartContainer = () => {

  const { products, getTotalPrice} = useContext(cartContext);
  const [venta, setVenta] = useState("")
  const [finish, setFinish] = useState(false);
  const [complete, setComplete] = useState(false)

  const completeForm = () => {
    setFinish(true)
  }

  const datosPersonales = {
    Name: "fran",
    phone: 150000000,
    email: "......@gmail.com"
  }

  const finalizarCompra = (buyer) => {
    console.log(buyer)
    setFinish(true)
    setComplete(true)
    const ventasCollection = collection(db, 'ventas');
    addDoc(ventasCollection, {
      buyer: buyer,
      items: products,
      date: serverTimestamp(),
      total: getTotalPrice().toFixed(1)
    })
    .then((result) => setVenta(result.id))
  }

  return (
    <div className='cart-container'>
      { finish && complete ?
        <CartBuyed idVenta={venta} />
        : finish && !complete ?
        <CartForm finalizarCompra={finalizarCompra}/>
        : <CartProducts products={products} completeForm={completeForm}/>}
    </div>
  )
}

export default CartContainer