import './Item.css'
import { Link } from "react-router-dom"

const Item = ({ product }) => {

    const productId = `/product/${product.id}`

    return(
        <div key={product.id} className='card'>
            <img className='card-img' src={product.image} alt={product.title} />
            <div className='container-card-body'>
                <div className='card-body'>
                    <h2 className='card-title'>{product.title}</h2>
                    <p className='card-price'>{product.price}U$D</p>
                    <Link key={product.id} to={productId}><button className='card-button'>Ver detalles</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Item