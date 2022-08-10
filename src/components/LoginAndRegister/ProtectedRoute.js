import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {

    const {user, loading} = useAuthContext()

    if (loading) return <h1>loading...</h1>

    if (!user) return <Navigate to="/login" />

    return <>{children}</>
}

export default ProtectedRoute