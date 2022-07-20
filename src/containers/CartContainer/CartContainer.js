import { useContext } from 'react'
import CartItem from './CartItem/cartItem'
import { cartContext } from '../../context/CartContext'
import './CartContainer.css'

const CartContainer = () => {

  const { products, removeItem, clear, getQuantity, getTotalPrice} = useContext(cartContext);

  const cantidad = getQuantity();

  return (
    <div className='cart-container'>
      {products.length === 0 ?
      <h1>No hay productos</h1> : 
      <>
        <div className='cart-item-container'>
         {products.map((e) => <CartItem key={e.product.id} product={e.product} quantity={e.quantity} removeItem={removeItem}/>)}
        </div>
        <button onClick={clear}>borrar</button>
        <p>cantidad: {cantidad}</p>
      </>}
    </div>
  )
}

export default CartContainer