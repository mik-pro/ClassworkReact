import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
        <Navbar/>
        THIS IS HOME PAGE
      <Link to={'/about'}>Go to About</Link>
    </div>
  )
}
