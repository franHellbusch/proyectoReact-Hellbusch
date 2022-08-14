import { useState } from 'react'
import { addDoc ,collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../Firebase/firebase'
import CartProducts from './CartProducts/CartProducts'
import CartForm from './CartForm.js'
import CartBuyed from './CartBuyed.js'
import './CartContainer.css'
import { useCartContext } from '../../context/CartContext'
import { useAuthContext } from '../../context/AuthContext'

const CartContainer = () => {

  const {user} = useAuthContext()

  const { products, total } =  useCartContext();
  const [venta, setVenta] = useState("")
  const [finish, setFinish] = useState(false);
  const [complete, setComplete] = useState(false)

  const items = products.map((e) => {
    const img = e.product.image;
    const id = e.product.id;
    const name = e.product.title;
    const price = e.product.price * e.quantity;
    const quantity = e.quantity

    return { img, id, name, price, quantity }
  });

  const completeForm = () => {
    setFinish(true)
  }

  const finalizarCompra = (buyer) => {
    console.log(buyer)
    setFinish(true)
    setComplete(true)
    const ventasCollection = collection(db, 'ventas');
    addDoc(ventasCollection, {
      buyer: buyer,
      UID: user.uid,
      items: items,
      date: serverTimestamp(),
      total: total
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