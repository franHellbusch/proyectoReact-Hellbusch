import Item from './Item.js'
import './ItemList.css'

const ItemList = ({ products }) => {
    return(
        <div className='item-list'>
            {products.map(product =>
            <Item key={product.id} product={product}/>)}
        </div>
    )
}

export default ItemList