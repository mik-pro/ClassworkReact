import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function login() {
  return (
    <div>
        <Navbar/>
      <Link to={'/Register'}></Link>
    </div>
  )
}
