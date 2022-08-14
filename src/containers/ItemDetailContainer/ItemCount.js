import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import './ItemCount.css'
import Swal from 'sweetalert2'

const ItemCount = ({ product, stock, initial, onAdd }) => {

    const { products } = useCartContext()

    const [count, setCount] = useState(initial)

    const sumar = () => {
        count < stock && setCount(count + 1)
    }

    const restar = () => {
        count > initial && setCount(count - 1)
    }

    const addToProduct = (id, q) => {
        let findItem = products.some((e) => e.product.id === id);

        if (findItem) {
            let item = products.find((e) => e.product.id === id);
            let quantity = item.quantity + q;
            if (quantity > item.product.stock) {
                Swal.fire({
                    title: 'Sin stock',
                    text: 'Los productos del carrito superan el stock',
                    icon: 'error',
                })
            } else {
                Swal.fire({
                    title: 'Se envio al carrito',
                    text: 'Su producto fue enviado con exito al carrito, puede finalizar su compra desde alli!',
                    icon: 'success',
                })
                onAdd(count);
            }
        } else {
            Swal.fire({
                title: 'Se envio al carrito',
                text: 'Su producto fue enviado con exito al carrito, puede finalizar su compra desde alli!',
                icon: 'success',
            })
            onAdd(count);
        }
    }


return (
    <div className='item-count-position'>
        <div className='count-controls'>
            <button className='controls' onClick={restar}>-</button>
            <p className='count'>{count}</p>
            <button className='controls' onClick={sumar}>+</button>
        </div>
        <p>Stock: <b>{stock}</b></p>
        <button className="detail-card-button" onClick={() => addToProduct(product.id, count)}>Enviar a carrito</button>
    </div>
)
}

export default ItemCount