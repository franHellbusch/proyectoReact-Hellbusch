import { useState } from 'react'
import './Login.css'
import { useAuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Login = () => {

  const [error, setError] = useState()
  const { login } = useAuthContext();
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
    setError('')
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error.code)
      if (error.code === "auth/invalid-email") {
        setError("El correo es invalido")
      }
      if (error.code === "auth/user-not-found") {
        setError("Usuario no encontrado")
      }
      if (error.code === "auth/wrong-password") {
        setError('La contraseña es incorrecta')
      }
    }
  }

  return (
    <div className='login-background'>
      <div className="login-box">
        <h2>Login</h2>
        {error && <p className='error-message'>{error}</p>}
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
            <div className="log-position">
              <button className='submit-button' type='submit'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Login
              </button>
              <Link to='/register' className='register-button'>Registrarse<ArrowForwardIcon fontSize="small" /></Link>
            </div>
            <a className='recuperar-contraseña' href="#">Olvidaste tu contraseña?</a>
          </div>
        </form>
        <button className='google-register'>Google</button>
        <button className='github-register'>Github</button>
      </div>
    </div>
  )
}

export default Login