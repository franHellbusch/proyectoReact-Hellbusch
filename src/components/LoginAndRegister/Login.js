import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Login = () => {
  return (
    <>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name='email' required />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name='password' required />
            <label>Password</label>
          </div>
          <div className='buttons-position'>
            <div className="log-position">
              <Link to='/register' className='login-button'><ArrowBackIcon fontSize="small" />Register</Link>
              <button className='submit-button' type='submit'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                LOGIN
              </button>
            </div>
            <a className='recuperar-contraseña' href="#">Olvidaste tu contraseña?</a>
          </div>
        </form>
        <button className='google-register'>Google</button>
        <button className='github-register'>Github</button>
      </div>
    </>
  )
}

export default Login