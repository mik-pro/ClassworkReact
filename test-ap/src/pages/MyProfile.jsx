import React from 'react'
import Navbar from '../components/Navbar'
import {useNavigate } from 'react-router-dom'
export default function MyProfile() {
  const navigate = useNavigate()
  const Click = ()=>{
    navigate('/MyProjects')
  }
  return (
    <div>
      Hello my name is Miras i am 21 years old i stady Amjilt syber 
      <button  onClick={Click}>Go to My Projects</button>
    </div>
  )
}
