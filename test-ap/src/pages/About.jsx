import React from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function About() {
    const navigate = useNavigate()
    const handleClick =()=>{
        let a=5
        let b =3
        let res = a+b
        alert(res)
        navigate('/')
    }
  return (
    <div>

        <Navbar/>
      THIS IS ABOUT PAGE
    <button onClick={handleClick}>Go to Home</button>
    </div>
  )
}
