import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail.js'
import './ItemDetailContainer.css'
import { db } from "../../Firebase/firebase";
import { getDoc, collection, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true)

    const { productId } = useParams();
    
    useEffect(() => {
        const productsCollection = collection(db, "products");
        getDoc(doc(productsCollection, productId))
        .then((res) => {
            const product = {
                id: res.id,
                ...res.data()
            }
            setProduct(product)
        })
        .catch((err) => console.error(err))
        .finally(() => 
            setTimeout(() => {
                setLoading(false)
            }, 1500)
        )
    }, [productId])
    
    return (
        <>
            {loading ? <div className='loader-position'><div className='loader'></div></div> :
            <ItemDetail key={product.id} product={product}/>}
        </>
    )
}

export default ItemDetailContainer