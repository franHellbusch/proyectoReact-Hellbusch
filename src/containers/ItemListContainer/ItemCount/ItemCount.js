import React, {useState} from 'react'
import './ItemCount.css'


const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial)

    const sumar = () => {
        count < stock && setCount(count + 1)
        count >= stock && alert("No hay mas stock")
    }

    const restar = () => {
        count > initial && setCount(count - 1)
    }

    return (
        <div className='item-count-position'>
            <h2 className='producto-title'>Samsung S10</h2>
            <div className='count-controls'>
                <button className='controls' onClick={restar}>-</button>
                <p className='count'>{count}</p>
                <button className='controls' onClick={sumar}>+</button>
            </div>
            <button className='buttom-comprar' onClick={onAdd}>Comprar</button>
        </div>
    )
}

export default ItemCount