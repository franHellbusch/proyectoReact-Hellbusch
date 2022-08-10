import { useState } from 'react'
import './Register.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useAuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const [error, setError] = useState()
    const { signUp } = useAuthContext();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = ({ target: { name, value } }) => {
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp(user.email, user.password);
            navigate("/");
        } catch (error) {
            if (error.code === "auth/invalid-email") {
                setError("El correo es invalido")
            }
            if (error.code === "auth/weak-password") {
                setError('La contaseña es demasiado corta (al menos 6 caracteres)')
            }
            if (error.code === "auth/email-already-in-use") {
                setError("Este correo ya esta en uso");
            }
        }
    }

    return (
        <>
            <div className="register-box">
                <h2>Registrarse</h2>
                {error && <p className='error-message'>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                        <input onChange={handleChange} type="email" name='email' required />
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input onChange={handleChange} type="password" name='password' required />
                        <label>Password</label>
                    </div>
                    <div className='buttons-position'>
                        <div className="submit-position">
                            <button className='submit-button' type='submit'>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Register
                            </button>
                            <Link to='/login' className='login-button'>Login<ArrowForwardIcon fontSize="small" /></Link>
                        </div>
                    </div>
                </form>
                <button className='google-register'>Google</button>
                <button className='github-register'>Github</button>
            </div>
        </>
    )
}

export default Register