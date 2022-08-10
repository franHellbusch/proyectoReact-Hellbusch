import { createContext, useContext } from "react"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../Firebase/firebase";

const AuthContext = createContext();
const { Provider } = AuthContext

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
}

const AuthCustomProvider = ({ children }) => {

    const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    return (
        <Provider value={{ signUp }}>
            {children}
        </Provider>
    )
}

export default AuthCustomProvider