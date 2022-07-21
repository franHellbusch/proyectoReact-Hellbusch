import { createContext, useState } from "react"

export const cartContext = createContext()
const { Provider } = cartContext

const CartCustomProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    const addItem = (product, quantity) => {
        let item = { product, quantity };

        if (isInCart(product.id)) {
            item = products.find((e) => e.product.id === product.id);
            item.quantity += quantity;
            const aux = [...products]
            setProducts(aux);
        } else {
            setProducts([...products, item]);
        }
        console.log(products)
    }

    const removeItem = (itemId) => {
        let product = products.find((e) => e.product.id === itemId);
        let aux = [...products];
        let index = aux.indexOf(product);
        aux.splice(index, 1);
        setProducts(aux)
    }

    const clear = () => {
        setProducts([]);
    }

    const isInCart = (id) => {
        return products && products.some((i) => i.product.id === id);
    };

    const getQuantity = () => {
        return products.reduce((acum, e) => acum +  e.quantity, 0);
    };

    const getTotalPrice = () => {
        return products.reduce((acum, e) => acum + (e.quantity * e.product.price), 0);
    }

    return (
        <Provider value={{ products, addItem, removeItem, clear, isInCart, getQuantity, getTotalPrice }}>
            {children}
        </Provider>
    )
}

export default CartCustomProvider