import { useAuthContext } from '../../context/AuthContext'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserContainer = () => {

    const { user } = useAuthContext();

    return (
        <div className='user-info'>
            {user.photoURL ?
            <img src={user.photoURL} alt={user.displayName}/>:
            <AccountCircleIcon />}
            {<h3>Hola! {user.displayName}</h3> || <h3>{user.email}</h3>}
        </div>
    )
}

export default UserContainer