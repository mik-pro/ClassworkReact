import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <nav>
      
        <Link to={'/MyProfile'}>My Profile</Link>
        <Link to={'/MyProjects '}>My Projects</Link>
        <Link to={'/AboutMe'}>About Me</Link>
    </nav>
  )
}
