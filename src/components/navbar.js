import imagenlogo from '../assets/imagenlogo.jpg';
import CartWidget from './CartWidget'
import './navbar.css';
import { Link, NavLink } from 'react-router-dom'
import LinksContainer from './LinksContainer.js'
import { useAuthContext } from '../context/AuthContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = () => {

    const { user, logOut } = useAuthContext()

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
                    <button onClick={handleLogout} className='nav-buttons'>LogOut</button>
                    {user.photoURL ?
                    <Link to='/user'><img className='user-img' src={user.photoURL} alt={user.displayName} /></Link>:
                    <Link to='/user'><AccountCircleIcon className='user-icon' fontSize="large"/></Link>}
                </nav>
                <NavLink to='/cart'><CartWidget /></NavLink>
            </div>
        </header>
    )
}

export default NavBar