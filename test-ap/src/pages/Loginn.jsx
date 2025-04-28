import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Loginn(setAuth) {
    let navigate = useNavigate()
    const handleClick=()=>{
        setAuth(true)
        navigate('/dashboard')
    }
  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}
