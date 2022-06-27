import './ItemListContainer.css';
import ItemCount from './ItemCount/ItemCount';

const ItemListContainer = ({greeting}) => {

    const onAdd = () => {
        alert(`gracias por su compra!`)
    }

    return(
        <>
            <h1>{ greeting }</h1>
            <ItemCount stock={10} initial={0} onAdd={onAdd}/>
        </>
    )
}

export default ItemListContainer