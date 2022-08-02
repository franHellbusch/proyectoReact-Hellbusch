import { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../Firebase/firebase'
import { getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { categoryName } = useParams();

    useEffect(() => {
        setLoading(true);
        setError(false);

        const productsCollection = collection(db, "products");
        const q = categoryName ? query(productsCollection, where("category", "==", `${categoryName}`)) : productsCollection

        getDocs(q)
        .then((res) => {
            const listProducts = res.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            setProducts(listProducts)
        })
        .catch((err) => {
            setError(true);
            console.error(err);
        })
        .finally(() =>
            setTimeout(() => {
                setLoading(false)
            }, 1500) 
        )
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