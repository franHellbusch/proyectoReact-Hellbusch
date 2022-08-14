import { useState } from 'react';
import "./UserContainer.css";
import { db } from '../../Firebase/firebase';
import { getDoc, collection, doc, getDocs, query, where } from 'firebase/firestore';
import UserProducts from './UserProducts';
import UserInfo from './UserInfo';
import { useAuthContext } from '../../context/AuthContext';

const UserContainer = () => {

    const { user } = useAuthContext();

    const [error, setError] = useState(false);
    const [products, setProducts] = useState();
    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState();
    const [productId, setProductId] = useState("error");
    const [productFinded, setProductFinded] = useState();

    const imgLoaded = () => {
        setError(true);
    }

    const handleChange = ({ target: { value } }) => {
        setProductId(value)
    }

    const buscarCompra = () => {
        setLoading(true);
        const productsCollection = collection(db, "ventas");
        getDoc(doc(productsCollection, productId))
            .then((res) => {
                const p = {
                    id: res.id,
                    ...res.data()
                }
                setProducts(p);
                if (p.items === undefined) {
                    setProductFinded(false)
                }
                if (p.items !== undefined) {
                    setProductFinded(true)
                }
            })
            .catch((err) => {
                console.error(err);
                setLoading("");
            })
            .finally(() =>
                setTimeout(() => {
                    setLoading(false)
                }, 2000)
            )
    }

    const misCompras = () => {
        setProductFinded()
        setLoading(true)
        const productsCollection = collection(db, "ventas");

        getDocs(query(productsCollection, where("UID", "==", `${user.uid}`)))
            .then((res) => {
                const list = res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setListProducts(list)
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() =>
                setTimeout(() => {
                    setLoading(false)
                }, 2000)
            )
    }

    return (
        <div className='user-container'>
            <div className='user-info'>
                <UserInfo error={error} imgLoaded={imgLoaded} user={user} />
                <h3>Buscar con ID de compra</h3>
                <div className='controles-busqueda'>
                    <div className='search-container'>
                        <input onChange={handleChange} type="text" name='id' className='search-input' placeholder='Ingresa el id de compra' required />
                        <label className='search-label' htmlFor="id">Id de compra</label>
                    </div>
                    <button className='search-button' onClick={buscarCompra}>buscar</button>
                </div>
                <button className='mis-compras-button' onClick={misCompras}>Ver todas mis compras</button>
            </div>
            <div className='buscador-compras'>
                {loading === true ?
                    <span className="loader-user"></span> :
                    loading === false && productFinded ?
                        <div className='compras-totales'>
                            {products.items.map((e) => <UserProducts key={e.id} product={e} />)}
                            <p><b>Total de compra:</b> {products.total}</p>
                        </div> :
                        productFinded === false ?
                            <h3 className='error-busqueda'>No se a encontrado el ID de compra</h3> :
                            listProducts.length > 0 ?
                                <>
                                    {listProducts.map((compra) =>
                                        <div key={compra.id} className='compras-totales'>
                                            {compra.items.map((e) => <UserProducts key={e.id} product={e} />)}
                                            <p><b>Total de compra:</b> {compra.total}</p>
                                        </div>)}
                                </> :
                                loading === false && listProducts.length === 0 ?
                                    <h3 className='error-busqueda'>no tienes compras registrada</h3> :
                                    <h3 className='mensaje-busqueda'>Busca tus compras realizadas</h3>}
            </div>
        </div>
    )
}

export default UserContainer