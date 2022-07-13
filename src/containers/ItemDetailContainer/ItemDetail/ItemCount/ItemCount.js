import React, {useState} from 'react'
import './ItemCount.css'


const ItemCount = ({ stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)

    const sumar = () => {
        count < stock && setCount(count + 1)
    }

    const restar = () => {
        count > initial && setCount(count - 1)
    }

    return (
        <div className='item-count-position'>
            <div className='count-controls'>
                <button className='controls' onClick={restar}>-</button>
                <p className='count'>{count}</p>
                <button className='controls' onClick={sumar}>+</button>
            </div>
            <p>Stock: <b>{stock}</b></p>
            <button className="detail-card-button" onClick={() => onAdd(count)}>Enviar a carrito</button>
        </div>
    )
}

export default ItemCount