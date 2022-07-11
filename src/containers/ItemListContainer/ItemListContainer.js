import { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { categoryName } = useParams();

    const URL = categoryName ? `https://fakestoreapi.com/products/category/${categoryName}` : 'https://fakestoreapi.com/products';

    useEffect(() => {
        setLoading(true);
        setError(false);
        const getProducts = async () => {
            try{
                const res = await fetch(URL);
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
    }, [categoryName]);

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