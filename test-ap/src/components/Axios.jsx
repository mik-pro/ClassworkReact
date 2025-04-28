// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// export default function Axios() {
//     const [bodyText,setBadyText]=useState()
//     const [titleText,setTitleText]=useState()
//     const [message,setMassage]=useState()
//     contt [data,setData]=useState()
//     async function fetchData() {
//         try{
//             let response = await axios.post('https://jsonplaceholder.typicode.com/posts',
//                 {
//                      title:titleText,
//                      userId:1,
//                      body:bodyText,
        
//                 }
//             )
//             console.log(response.data);
            
//         }catch(err){
//             if (err.status === 404) {
//                 console.log("хороши ");
                
//             }
//         }
//     }
//     const handleSubmit =(e)=>{
//         e.preventDefault()
//         fetchData()

//     }
//   return (
//     <form>
//       <label htmlFor="">body text</label>
//       <input type="text" placeholder='Enter body text' onChange={(e)=>setBadyText(e.target.value)} />
//       <label htmlFor="">title text</label>
//       <input type="text" placeholder='Enter title text' onChange={(e)=>setTitleText(e.target.value)} />
//       <button type='submit'>Send</button>
//       {}
//     </form>
//     {data && 
//         <div>
//        <p>{data.id}</p>
//        <h1>{data.title}</h1> 
//        <p>{data.bady}</p>
//         </div>
//     }
//   ) 
// }
