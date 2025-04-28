import React, { useState } from 'react'
import { redirect } from 'react-router-dom'

export default function Register() {
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[error,setError]=useState()
    const[name,setName]=useState()
    const[podverdit,setPodver]=useState()

    let nameRegex=/^[A-Za-zА-Яа-яЁёҰұҮүҚқҒғӨөҺһІіӘә\s'-]+$/
    let passwordRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    const handleSubmit=(e)=>{
        e .preventDefault()
        // console.log("Email:",email);
        // console.log("Password:",password);
        if (password!==podverdit) {
            setError("парол тен емес")
            return
        }
        if (!passwordRegex.test(password)) {
            setError("password дурыс емес")
            return
        }
        if (!nameRegex.test(name)) {
            setError("Атыныз мындетты турде арыптермен туруы керек")
            return
        }
        if (!email.includes("@")) {
            setError("Email-ды дурыс енгызыныз")
            return
        }
        if (password.length < 8) {
            setError("Купия соз 8 тамбадан улкен болуы керек")
            return
        }
        setError('')
        alert("форма сатты жберылды")
    }
  return (
    <div style={{
         margin:"200px",
        marginLeft:"600px",
    }}>
      <h1>Тыркелу формасы</h1>
      <form onSubmit={handleSubmit}>
      <div style={{
        marginTop:"10px"
      }}>
            <label htmlFor="email">Name</label>
            <input type="text"
            name='name'
            placeholder='Enter name'
            onChange={(e)=>setName(e.target.value)}
            required
            />
         </div>
         <div style={{
        marginTop:"10px"
      }}>
            <label htmlFor="email">Email</label>
            <input type="text"
            name='email'
            placeholder='example@gmail.com'
            onChange={(e)=>setEmail(e.target.value)}
            required
            />
         </div>
         <div style={{
        marginTop:"10px"
      }}>
            <label htmlFor="qupiya">Password</label>
            <input type="password"
            name='qupiya'
            placeholder='********'
            onChange={(e)=>setPassword(e.target.value)}
            required
            />
         </div>
         <div style={{
        marginTop:"10px"
      }}>
            <label htmlFor="podverdit">Подвердить</label>
            <input type="password"
            name='podverdit'
            placeholder='********'
            onChange={(e)=>setPodver(e.target.value)}
            required
            />
         </div>
         <button style={{
        marginTop:"10px"
      }} type='submit'>Submit</button>
         {error&&<p style={{color:"red"}}>{error}</p>}
      </form>
    </div>
  )
}
