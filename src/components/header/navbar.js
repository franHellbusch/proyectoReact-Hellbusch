import imagenlogo from '../../assets/imagenlogo.jpg';
import CartWidget from './CartWidget'
import './navbar.css';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <div className='pagename'>
                <Link to="/"><img className='img-logo' src={imagenlogo} alt="imagenLogo" /></Link>
                <Link to="/" className='pagetitle'>TiendaOnline</Link>
            </div>
            <div className='contenido_header-nav'>
                <nav className='header-nav'>
                    <Link to="/" className='nav-links'>Inicio</Link>
                    <a className='nav-links' href="#">Productos</a>
                    <a className='nav-links' href="#">Contacto</a>
                    <button className='nav-buttons'>Login</button>
                    <button className='nav-buttons'>Sing Up</button>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar