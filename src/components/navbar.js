import imagenlogo from '../assets/imagenlogo.jpg';
import CartWidget from './CartWidget'
import './navbar.css';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import LinksContainer from './LinksContainer.js'
import { useAuthContext } from '../context/AuthContext';

const NavBar = () => {

    const { user, logOut } = useAuthContext()
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logOut()
    }

    return (
        <header>
            <div className='pagename'>
                <Link to="/"><img className='img-logo' src={imagenlogo} alt="imagenLogo" /></Link>
                <Link to="/" className='pagetitle'>TiendaOnline</Link>
            </div>
            <div className='contenido_header-nav'>
                <nav className='header-nav'>
                    <LinksContainer />
                    <button className='nav-buttons'>Login</button>
                    <button onClick={handleLogout} className='nav-buttons'>LogOut</button>
                </nav>
                <NavLink to='/cart'><CartWidget /></NavLink>
            </div>
        </header>
    )
}

export default NavBar