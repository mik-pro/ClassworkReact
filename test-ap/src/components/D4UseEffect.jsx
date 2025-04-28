// import React, { useEffect, useState } from 'react'

// export default function D4UseEffect() {
//     const [san,setSan] = useState(()=>{
//       let savedSan = localStorage.getItem('san')
//       return savedSan ==null ? 0:parseInt(savedSan)
//     })
//     const [text,setText]=useState('Miras')
//     // console.log("компонент кайта жуктелды");
//     useEffect(()=>{
//         console.log("useEffect орындалды! LocalStorage-ге сакталды");
//         localStorage.setItem('san', san)
//     },[san])
//     // useEffect(()=>{
//     //   console.log("text орындалганда жумыс жасады");
      
//     // },[text])
//   return (
//     <div style={{
//       backgroundColor:"black",
//       color: "white"
//   }}>
//       <div>{san}</div>
//       {/* <div>{text}</div> */}
//       <button onClick={()=>setSan(san+1)}>press</button>
//       {/* <button onClick={()=>setText("Ismail")}>Shange</button> */}
//     </div>
//   )
// }
