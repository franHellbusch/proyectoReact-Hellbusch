import { useState } from 'react';
import CartWidget from './CartWidget'
import './navbar.css';
import { Link, NavLink } from 'react-router-dom'
import LinksContainer from './LinksContainer.js'
import { useAuthContext } from '../context/AuthContext';

const NavBar = () => {

    const { user, logOut } = useAuthContext()

    const [error, setError] = useState(false);

    const imgLoaded = () => {
        setError(true);
    }

    const handleLogout = async () => {
        await logOut()
    }

    return (
        <header>
            <div className='pagename'>
                <Link to="/"><img className='img-logo' src="https://firebasestorage.googleapis.com/v0/b/tiendaonline-react-34a28.appspot.com/o/imagenlogo.jpg?alt=media&token=f2c4de06-bd25-40df-9286-b49148223164" alt="imagenLogo" /></Link>
                <Link to="/" className='pagetitle'>TiendaOnline</Link>
            </div>
            <div className='contenido_header-nav'>
                <nav className='header-nav'>
                    <LinksContainer />
                    <button onClick={handleLogout} className='nav-buttons'>LogOut</button>
                    {error || !user.photoURL ?
                    <Link to='/user'><img className='user-img' src="https://firebasestorage.googleapis.com/v0/b/tiendaonline-react-34a28.appspot.com/o/usuario.png?alt=media&token=a2019736-876f-4450-81b0-5956e169d760" alt="user" /></Link> :
                    <Link to='/user'><img className='user-img' src={user.photoURL} alt={user.displayName} onError={imgLoaded} /></Link>}
                </nav>
                <NavLink to='/cart'><CartWidget /></NavLink>
            </div>
        </header>
    )
}

export default NavBar