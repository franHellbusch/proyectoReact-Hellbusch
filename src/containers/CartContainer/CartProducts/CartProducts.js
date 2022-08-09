import CartItem from './CartItem/cartItem'
import { useCartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom'
import './CartProducts.css'

const CartProducts = ({completeForm, products}) => {

  const { removeItem, clear, getQuantity, getTotalPrice } = useCartContext()

  return (
    <>
        {products.length === 0 ? 
        <div className='add-position'>
            <h2>No hay productos seleccionados...</h2>
            <Link to={"/"}><button className='button-products'>Ver productos</button></Link>
        </div> : 
        <>
        <div className='cart-item-container'>
         {products.map((e) => <CartItem key={e.product.id} product={e.product} quantity={e.quantity} removeItem={removeItem}/>)}
        </div>
        <div className='cart-info'>
          <p className='cart-info-quantity'><b>cantidad:</b> {getQuantity()}</p>
          <button className='cart-info-button' onClick={clear}>borrar</button>
          <p className='cart-info-total'>Total: $<b>{getTotalPrice().toFixed(1)}</b></p>
        </div>
        <button className='finalizar-compra' onClick={completeForm}>Finalizar compra</button>
      </>}
    </>
  )
}

export default CartProducts