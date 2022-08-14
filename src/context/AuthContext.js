import { createContext, useContext, useEffect, useState } from "react"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    GithubAuthProvider,
    sendPasswordResetEmail
} from 'firebase/auth'
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

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    const loginWithGitHub = () => {
        const gitHubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, gitHubProvider);
    }

    const resetPassword = (email) => sendPasswordResetEmail(auth, email)

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => unSubscribe()
    }, [])

    return (
        <Provider value={{ signUp, login, user, logOut, loading, loginWithGoogle, loginWithGitHub, resetPassword }}>
            {children}
        </Provider>
    )
}

export default AuthCustomProvider