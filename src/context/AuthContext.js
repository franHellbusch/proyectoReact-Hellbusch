import { createContext, useContext } from "react"

const AuthContext = createContext();
const { Provider } = AuthContext

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
}

const AuthCustomProvider = ({ children }) => {

    const signUp = (email, password) => {
        console.log(email, password);
    }
    
    return (
        <Provider value={{ signUp }}>
            {children}
        </Provider>
    )
}

export default AuthCustomProvider