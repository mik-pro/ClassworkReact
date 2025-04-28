import React from 'react'
import Navbar from '../components/Navbar'
import {useNavigate } from 'react-router-dom'
export default function MyProjects() {
    const navigate = useNavigate()
    const Clickk =()=>{
        navigate('/About Me')
    }
  return (
    <div>
        Меным проек сайтым спорт туралы
       <button onClick={Clickk}>Go to About Me</button>
    </div>
  )
}
