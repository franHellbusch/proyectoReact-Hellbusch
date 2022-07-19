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

    }

    const clear = () => {

    }

    const isInCart = (id) => {
        return products && products.some((i) => i.product.id === id);
    };

    return (
        <Provider value={{ products, addItem, removeItem, clear, isInCart }}>
            {children}
        </Provider>
    )
}

export default CartCustomProvider