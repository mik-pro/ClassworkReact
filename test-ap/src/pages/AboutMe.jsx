import React from 'react'
import Navbar from '../components/Navbar'
import {useNavigate } from 'react-router-dom'
export default function AboutMe() {
    const navigate = useNavigate()
    const ClickMe =()=>{
        navigate('/My profile')
    }
  return (
    <div>
      
      Hello me name is Miras Ismail i am from city in Almaty 
      <button onClick={ClickMe}>Go to My Profile</button>
    </div>
  )
}
