// import React, { useEffect, useState } from 'react'
// import Navbar from '../components/Navbar'
// import { Link } from 'react-router-dom';

// export default function Post() {
//     let [post,setPosts] = useState([])
//     async function fetchDate() {
        
    
//        try{
//         let response=await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
//         if (!response.ok) {
//             throw new Error("Сураныска кателыктер пайда болды");
            
//         }
//         let date = await response.json()
//         setPosts(date)
//        }catch(err){
//         console.log(err);
        
//        }
//     }
//     useEffect(()=>{
//         fetchDate()
//     },[])
//   return (
//     <div>
//       <Navbar/>
//       <h2>Барлык постар</h2>
// <ul>
//     {post.map((post)=>{
//         return <li key={post.id}>
//             <p>
//         {post.title}
//             </p>
//             <Link to={`/post/${post.id}`}>Толыграк</Link>
//         </li>
//     })}
// </ul>
//     </div>
//   )
// }
