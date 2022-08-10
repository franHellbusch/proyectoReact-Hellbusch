import { createContext, useContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from "../Firebase/firebase";

const AuthContext = createContext();
const { Provider } = AuthContext

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
}

const AuthCustomProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

    const logOut = () => signOut(auth);

    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        setLoading(false)
      })

      return () => unSubscribe()
    }, [])
    

    return (
        <Provider value={{ signUp, login, user, logOut, loading }}>
            {children}
        </Provider>
    )
}

export default AuthCustomProvider