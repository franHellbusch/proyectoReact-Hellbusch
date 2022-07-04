import './Item.css'

const Item = ({ product }) => {
    return(
        <div key={product.id} className='card'>
            <img className='card-img' src={product.image} alt={product.title} />
            <div className='card-body'>
                <h2 className='card-title'>{product.title}</h2>
                <p className='card-desc'>{product.description}</p>
                <p className='card-price'>{product.price}U$D</p>
                <button className='card-button'>Ver detalles</button>
            </div>
        </div>
    )
}

export default Item