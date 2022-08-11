import React from 'react'
import './UserInfo.css'

const UserInfo = ({ error, imgLoaded, user }) => {

    return (
        <>
            {error || !user.photoURL ?
                <img src="https://firebasestorage.googleapis.com/v0/b/tiendaonline-react-34a28.appspot.com/o/usuario.png?alt=media&token=a2019736-876f-4450-81b0-5956e169d760" alt="user" /> :
                <img src={user.photoURL} alt={user.displayName} onError={imgLoaded} />}
            {user.displayName ?
                <>
                    <h3 className='display-name'>{user.displayName}</h3>
                    <div className='user-data'>
                        <p><b>Email:</b><br /> {user.email}</p>
                        <p><b>User ID:</b><br /> {user.uid}</p>
                    </div>
                </> :
                <div className='user-data'>
                    <p><b>Email:</b><br /> {user.email}</p>
                    <p><b>User ID:</b><br /> {user.uid}</p>
                </div>}
        </>
    )
}

export default UserInfo