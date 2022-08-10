import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {

    const { user, loading } = useAuthContext()

    if (loading) return <></>

    if (!user) return <Navigate to="/login" />

    return <>{children}</>
}

export default ProtectedRoute