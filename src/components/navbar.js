import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import imagenlogo from '../assets/imagenlogo.jpg';
import './navbar.css';

const NavBar = () => {
    return (
        <header>
            <div className='pagename'>
                <img className='img-logo' src={imagenlogo} alt="imagenLogo" />
                <a className='pagetitle' href="#">TiendaOnline</a>
            </div>
            <nav className='header-nav'>
                <a className='nav-links' href="#">Inicio</a>
                <a className='nav-links' href="#">Productos</a>
                <a className='nav-links' href="#">Contacto</a>
                <button className='nav-buttons'>Login</button>
                <button className='nav-buttons'>Sing Up</button>
                <ShoppingCartIcon className='nav-icon' fontSize="large"/>
            </nav>
        </header>
    )
}

export default NavBar