import React from 'react'
import { Children } from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({isAuth,Children}) {
  return isAuth? Children : <Navigate to={'/'}/>
}
