import { useState } from 'react'
import { addDoc ,collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../Firebase/firebase'
import CartProducts from './CartProducts/CartProducts'
import CartForm from './CartForm/CartForm.js'
import CartBuyed from './CartBuyed/CartBuyed.js'
import './CartContainer.css'
import { useCartContext } from '../../context/CartContext'
import { useAuthContext } from '../../context/AuthContext'

const CartContainer = () => {

  const {user} = useAuthContext()

  const { products, getTotalPrice } =  useCartContext();
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

  const i = products.map((e) => {
    const img = e.product.image;
    const id = e.product.id;
    const name = e.product.title;
    const price = e.product.price * e.quantity;
    const quantity = e.quantity

    return { img, id, name, price, quantity }
  })

  const finalizarCompra = (buyer) => {
    console.log(buyer)
    setFinish(true)
    setComplete(true)
    const ventasCollection = collection(db, 'ventas');
    addDoc(ventasCollection, {
      buyer: buyer,
      UID: user.uid,
      items: i,
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