import './cartItem.css'
import ClearIcon from '@mui/icons-material/Clear';

const cartItem = ({ product, quantity, removeItem}) => {
  return (
    <div className='cart_item'>
        <div className='cart_item-header'>
          <h1 className='title'>{product.title}</h1>
          <p className='remove-product'>Borrar producto<ClearIcon fontSize="large" className='button-remove' onClick={() => removeItem(product.id)}/></p>
        </div>
        <div className='cart_item-body'>
          <img className='img' src={product.image} alt={product.title} />
          <p className='description'>{product.description}</p>
        </div>
        <div className='cart_item-footer'>
          <p className='price'>Precio: <b>${product.price}</b></p>
          <p className='quantity'>Cantidad: {quantity}</p>
        </div>
    </div>
  )
}

export default cartItem