import { Link } from 'react-router-dom'
import './UserProducts.css'

const UserProducts = ({ product }) => {
    return (
        <div className="product-buyed">
            <div className='product-buyed-content'>
                <h3>{product.name}</h3>
                <div className='product-buyed-footer'>
                    <p>Cantidad: {product.quantity}</p>
                    <p>Total: {product.price}</p>
                    <Link className='product-button-info' to={`/product/${product.id}`}>Ver producto</Link>
                </div>
            </div>
            <img src={product.img} alt={product.name} />
        </div>
    )
}

export default UserProducts