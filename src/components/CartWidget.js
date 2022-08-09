import { useState, useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '../context/CartContext';
import './CartWidget.css'

const CartWidget = () => {

    const [number, setNumber] = useState(1)

    const { products } = useCartContext();

    useEffect(() => {
      setNumber(products.length)
    }, [products])
    
    return(
        <div className='cart-widget-position'>
            <ShoppingCartIcon className='nav-icon' fontSize="large"/>
            {products.length !== 0 && 
            <span className='card-badge'>{number}</span>}
        </div>
    )
}

export default CartWidget