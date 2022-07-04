import { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            try{
                const res = await fetch('https://fakestoreapi.com/products?limit=6');
                const data = await res.json();
                setProducts(data)
            }
            catch(err){
                setError(true);
                console.error(err);
            }
            finally{
                setLoading(false);
            }
        }
        setTimeout(() => {
            getProducts()
        }, 2500);
    }, []);

    return(
        <div className='item-list-container'>
            {loading ? <div className='spinner-position'>
                    <div className='spinner-wrapper'>
                        <div className='spinner'>
                            <div className='spinner spinner-inner'></div>
                        </div>
                    </div>
                </div> : 
            error ? <p>error</p> : 
            <ItemList products={products}/>}
        </div>
    )
}

export default ItemListContainer