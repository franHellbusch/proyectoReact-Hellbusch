import './ItemDetail.css'

const ItemDetail = ({ product }) => {
  return(
    <div className="detail-card">
      <img className='detail-card-img' src={product.image} alt={product.title} />
      <div className="detail-card-body">
        <h2 className="detail-card-title">{product.title}</h2>
        <p className="detail-card-desc">{product.description}</p>
        <p className="detail-card-price"><b>{product.price}</b> U$D</p>
        <button className="detail-card-button">Enviar a carrito</button>
        <p className="detail-card-rate"><b>Rate:</b> {product.rating.rate} <br/> <b>Comprados:</b> {product.rating.count}</p>
      </div>
    </div>
  )
}

export default ItemDetail