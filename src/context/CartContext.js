import { createContext, useState } from "react"

export const cartContext = createContext()
const { Provider } = cartContext

const CartCustomProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    const addItem = (item, quantity) => {
        console.log(products.some((p) => p.id === item.id))
        console.log(isInCart(item.id))
        if (products.some((p) => p.id === item.id)) {
            const aux = [...products]
            const found = aux.find((p) => p.id === item.id);
            found.quantity += quantity;
            setProducts(aux);
        } else {
            const product = {...item, quantity}
            setProducts([...products, product]);
        }
        console.log(`Se sumaron ${quantity} productos en el carrito`);
    }

    const removeItem = (itemId) => {

    }

    const clear = () => {

    }

    const isInCart = (id) => {
        products.some((p) => p.id === id)
    }

    return (
        <Provider value={{ products, addItem, removeItem, clear, isInCart }}>
            {children}
        </Provider>
    )
}

export default CartCustomProvider