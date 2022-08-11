import { useState } from 'react'
import { useAuthContext } from '../../context/AuthContext'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom'
import './RecoverPassword.css'

const RecoverPassword = () => {

    const [emailToRecover, setEmailToRecover] = useState('')
    const [message, setMessage] = useState()
    const [error, setError] = useState()

    const { resetPassword } = useAuthContext()

    const handleChange = ({ target: { value } }) => {
        setEmailToRecover( value )
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage("")
        setError("")
        try {
            await resetPassword(emailToRecover)
            setMessage("Se a enviado un correo a su cuenta")
        } catch (error) {
            if (error.code === "auth/invalid-email") {
                setError("Correo invalido")
            }
            if (error.code === "auth/user-not-found") {
                setError("Usuario no encontrado")
            }
        }
    }

    return (
        <div className='login-background'>
            <div className="login-box">
                <Link to='/login' className='back-button'><ArrowBackIcon fontSize="small" />back</Link>
                <h2>Recuperar contraseña</h2>
                {message && <p className='error-message'>{message}</p>}
                {error && <p className='error-message'>{error}</p>}
                <form onSubmit={handleSubmit} className='recover-form'>
                    <div className="user-box">
                        <input onChange={handleChange} type="text" name='emailToRecover' required />
                        <label>Email</label>
                    </div>
                    <p className='recover-message'>Enviaremos un mail para que puedas cambiar tu contraseña, tiene que ser un Email real.</p>
                    <button className='submit-button' type='submit'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Enviar mail
                    </button>
                </form>
            </div>
        </div>
    )
}

export default RecoverPassword