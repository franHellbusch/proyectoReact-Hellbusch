import './ItemDetail.css'
import ItemCount from './ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../../context/CartContext'

const ItemDetail = ({ product }) => {

  const { addItem } = useContext(cartContext);

  const [compra, setCompra] = useState(false);

  const onAdd = (quantity) => {
    addItem(product, quantity)
    setCompra(true);
    console.log(`se han enviado ${quantity} productos`);
  }

  return(
    <div className="detail-card">
      <img className='detail-card-img' src={product.image} alt={product.title} />
      <div className="detail-card-body">
        <h2 className="detail-card-title">{product.title}</h2>
        <p className="detail-card-desc">{product.description}</p>
        <p className="detail-card-price"><b>{product.price}</b> U$D</p>
        {compra ? 
        <Link to="/cart"><button className='button-finalizar-compra'>Finalizar Compra</button></Link> :
        <ItemCount product={product} stock={10} initial={1} onAdd={onAdd}/>}
        <p className="detail-card-rate"><b>Rate:</b> {product.rating.rate} <br/> <b>Comprados:</b> {product.rating.count}</p>
      </div>
    </div>
  )
}

export default ItemDetail