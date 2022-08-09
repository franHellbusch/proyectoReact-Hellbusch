import { useState } from 'react'
import './Register.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useAuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Register = () => {

    const { signUp } = useAuthContext();

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

    const handleSubmit = (e) => {
        e.preventDefault()
        signUp(user.email, user.password)
    }

    return (
        <div className="register-box">
            <h2>Registrarse</h2>
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input onChange={handleChange} type="text" name='email' required />
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
                            Submit
                        </button>
                        <Link to='/login' className='login-button'>Login<ArrowForwardIcon fontSize="small" /></Link>
                    </div>
                </div>
            </form>
            <button className='google-register'>Google</button>
            <button className='github-register'>Github</button>
        </div>
    )
}

export default Register