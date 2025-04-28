import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <nav>
      {/* <Link to={'/'}>Home</Link>
      <Link to={'/Register'}>About</Link>
      <Link>Contact</Link> */}
      <Link to={'/'}>Home</Link>
      <Link to={'/post'}>Post</Link>
      {/* <Link to={'/Myprofile'}>My profile</Link>
      <Link to={'/Myprojects'}>My projects</Link>
      <Link to={'/AboutMe'}>About Me</Link> */}
    </nav>
  )
}
