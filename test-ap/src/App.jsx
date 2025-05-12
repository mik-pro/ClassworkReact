// import React from 'react'
 import "./App.css"

// export default function App() {
//   return (
//    <div>
//       <div className='flex justify-center gap-7 text-5 font-bold'>
//         <div className='border-2 p-3 rounded '><h2>All</h2></div>
//         <div  className='border-2 p-3 rounded '><h2>Category</h2></div>
//         <div  className='border-2 p-3 rounded '><h2>Collection</h2></div>
//         <div  className='border-2 p-3 rounded '><h2>Price</h2></div>
//       </div>
//     <div className='grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-10 p-8 gap-20' >
//       <div className='shadow-2xl active:scale-110 duration-200'>
//           <img className='w-70 rounded' src="https://static-cse.canva.com/blob/847132/paulskorupskas7KLaxLbSXAunsplash2.jpg" alt="" />
//            <div className='flex justify-start items-center gap-10 m-5'>
//               <div>
//                 <h2 className='font-bold'>Sun-glass</h2>
//                 <p className="text-sm  italic">Current bid</p>
//                 <p className='font-bold'>1.75</p>
//               </div>
//               <div className='text-aligin-center'>
//                 <button className='border hover:scale-110  hover:bg-blue-400 bg-black text-white p-1 rounded'>Place bid</button>
//               </div>
//             </div>
          
//       </div>
//       <div className='shadow-2xl active:scale-110 duration-200'>
//           <img className='w-70 h-50 rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5JL1CLfP-omPUde-67MS8LQTIWX45WQhskg&s" alt="" />
//           <div className='flex justify-start items-center gap-10 m-5'>
//               <div>
//                 <h2  className='font-bold'>Sun-glass</h2>
//                 <p className="text-sm  italic">Current bid</p>
//                 <p  className='font-bold'>1.75</p>
//               </div>
//               <div className='text-aligin-center'>
//                 <button className='border hover:scale-110  hover:bg-blue-400 bg-black text-white p-1 rounded'>Place bid</button>
//               </div>
//             </div>
//       </div>
//       <div className='shadow-2xl active:scale-110 duration-200'>
//           <img className='w-70 h-50 rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7z13G4cLSUfC7TjhURDLKEsUQge593kLpsQ&s" alt="" />
//           <div className='flex justify-start items-center gap-10 m-5'>
//               <div>
//                 <h2  className='font-bold'>Sun-glass</h2>
//                 <p className="text-sm  italic">Current bid</p>
//                 <p  className='font-bold'>1.75</p>
//               </div>
//               <div className='text-aligin-center'>
//                 <button className='border hover:scale-110  hover:bg-blue-400 bg-black text-white p-1 rounded'>Place bid</button>
//               </div>
//             </div>
//       </div>
//       <div className='shadow-2xl active:scale-110 duration-200'>
//           <img className='w-70 h-50 rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-EvCW7riExk5-3NeVYNEp7n3y3jehgn85g&s" alt="" />
//           <div className='flex justify-start items-center gap-10 m-5'>
//               <div>
//                 <h2  className='font-bold'>Sun-glass</h2>
//                 <p className="text-sm  italic">Current bid</p>
//                 <p  className='font-bold'>1.75</p>
//               </div>
//               <div className='text-aligin-center'>
//                 <button className='border hover:scale-110  hover:bg-blue-400 bg-black text-white p-1 rounded'>Place bid</button>
//               </div>
//             </div>
//       </div>
//       <div className='shadow-2xl active:scale-110 duration-200'>
//           <img className='w-70 h-50 rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe3kV9gs8ln7-5jqqjmUdjWmpzUvHbDKzj2w&s" alt="" />
//           <div className='flex justify-start items-center gap-10 m-5'>
//               <div>
//                 <h2  className='font-bold'>Sun-glass</h2>
//                 <p className="text-sm  italic">Current bid</p>
//                 <p  className='font-bold'>1.75</p>
//               </div>
//               <div className='text-aligin-center'>
//                 <button className='border hover:scale-110  hover:bg-blue-400 bg-black text-white p-1 rounded'>Place bid</button>
//               </div>
//             </div>
//       </div>
//       <div className='shadow-2xl active:scale-110 duration-200'>
//            <img className='w-70 h-50 rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRniab4vTy86-p3nV2475H9EM1LGZtCuq_kKg&s" alt="" />
//            <div className='flex justify-start items-center gap-10 m-5'>
//               <div>
//                 <h2  className='font-bold'>Sun-glass</h2>
//                 <p className="text-sm  italic">Current bid</p>
//                 <p  className='font-bold'>1.75</p>
//               </div>
//               <div className='text-aligin-center'>
//                 <button className='border hover:scale-110  hover:bg-blue-400 bg-black text-white p-1 rounded'>Place bid</button>
//               </div>
//             </div>
//       </div>
//       <div className='shadow-2xl active:scale-110 duration-200'>
//           <img className='w-70 h-50 rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_PU7ijwCD_FRRgrWYrNUBHRB_zfaWxDX8PA&s" alt="" />
//           <div className='flex justify-start items-center gap-10 m-5'>
//               <div>
//                 <h2  className='font-bold'>Sun-glass</h2>
//                 <p className="text-sm  italic">Current bid</p>
//                 <p  className='font-bold'>1.75</p>
//               </div>
//               <div className='text-aligin-center'>
//                 <button className='border hover:scale-110  hover:bg-blue-400 bg-black text-white p-1 rounded'>Place bid</button>
//               </div>
//             </div>
//       </div>
//       <div className='shadow-2xl active:scale-110 duration-200'>
//          <img className='w-70 h-50 rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaP2TogxWuewWd3ufjQP_cs9xAbs-TSzQl0A&s" alt="" />
//          <div className='flex justify-start items-center gap-10 m-5'>
//               <div>
//                 <h2  className='font-bold'>Sun-glass</h2>
//                 <p className="text-sm  italic">Current bid</p>
//                 <p  className='font-bold'>1.75</p>
//               </div>
//               <div className='text-aligin-center'>
//                 <button className='border hover:scale-110 bg-black hover:bg-blue-400 text-white p-1 rounded'>Place bid</button>
//               </div>
//             </div>
//       </div>
//      </div> 

//    </div>
//   )
// }


// // export default function App() {
// //   return (
// //     <div className='flex flex-col'>
// //       <header className='bg-blue-500 text-center p-4 text-white'>
// //         Header
// //       </header>
// //       <main className='min-h-dvh w-full sm:text-2xl md:text-3xl lg:text-4xl sm:bg-amber-50 md:bg-blue-800 lg:bg-emerald-500 hover:bg-blue-900 duration-200 hover:text-red-600 active:text-4xl active:scale-95 active:text-yellow-300 flex items-center justify-center bg-red-400 text-white text-3xl'>
// //         Main Content❤️
// //       </main>
// //       <footer className='flex items-center justify-center h-20 bg-emerald-600 text-2xl text-white'>
// //         Footer
// //       </footer>
// //     </div>
// //   )
// // }

// import React from 'react'
// import GemeniChat from './components/GemeniChat'

// export default function App() {
//   return (
//     <>
//       <GemeniChat/>
//     </>
//   )
// }
// import React, { useEffect, useState } from 'react'

// function Example() {
//   useEffect(()=>{
//     console.log("Example компонетты омырге келды");
//     let interval = setInterval(()=>{
//       console.log("Example компонетты озгерыстер ушырап жатыр");
//     },1000)
//     return()=>{
//       clearInterval(interval)
//       console.log("Example компонетты оз омырын циклдык токтаты");
      
//     }
//      },[])
//      return(
    
//       <h2>Example компоненты жумысын бастады</h2> 
   
//      )
    
// }


// export default function App() {
//   let [visible, setVisible]=useState(false)
//   let [count,setCount]=useState(0)
//   return (
//     <div>
//       <button onClick={()=>setVisible(!visible)}>
//         {visible ? "Exaple компонентын жою":"Exaple компонентын косу"}
//       </button>
//       {visible&&<Example/>}
//       <h1>count {count}</h1>
//       <button onClick={()=>setCount(count+1)}>++++++</button>
      
     
//     </div>
//   )
// }


// import React, { useState, useEffect } from 'react';

// function Example() {
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const rondomid = Math.floor(Math.random() * 100) + 1;
//     fetch(`https://dummyjson.com/products/${rondomid}`)
//       .then(res => res.json())
//       .then(data => setProduct(data));

   
//     return () => {};
   
//   }, []);

//   return (
//     <div>
//       <h2>Example компоненты жумысын бастады</h2>
//       {product && (
//         <div>
//           <p>аты: {product.title}</p>
//           <p>багасы: {product.price}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default function App() {
//   const [show, setShow] = useState(true);

//   return (
//     <div>
//       <button onClick={() => setShow(prev => !prev)}>
//         {show ? 'жасыру' : 'корсету'}
//       </button>
//       {show && <Example />}
//     </div>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import ProductPoller from './components/ProductPoller';

// export default function App() {
//   const [show, setShow] = useState(true);
//   let [x,setX]=useState(0)
//   let [m,setM]=useState(0)
//   useEffect(()=>{
//     console.log("x/m маны озгерген");
    
//   },[x,m])

//   return (
//     <div>
//       <button className="text-red-900" onClick={() => setShow(!show)}>
//         {show ? <p className="text-red-500">Polling тоқтату</p> : <p className="text-green-500">Polling жүргізу</p>}
//       </button>
//       {show && <ProductPoller />}
//         <h1>x{x}</h1>
//         <h1>m{m}</h1>
//         <button onClick={()=>setX(x+1)}>x</button>
//         <button onClick={()=>setM(m+1)}>m</button>
//     </div>
//   );
// }


// import React from "react";
// import Card from "./components/Card";
// import Button from "./components/Button";


// const products = [
//   { name: "Гиря 16 кг", description: "Классическая чугунная гиря", price: "2200₽" },
//   { name: "Гантели 10 кг", description: "Удобные неоприновые гантели", price: "1800₽" },
//   { name: "Коврик для йоги", description: "Противоскользящий, 6 мм", price: "950₽" },
// ];

// export default function App() {
//   return (
//     <div className="rounded-2xl shadow p-4 bg-white">
//     <h4 className="text-lg font-semibold">{item.name}</h4>
//     <p className="text-gray-600">{item.description}</p>
//     <p className="text-blue-600 font-bold mt-2">{item.price}</p>
//     <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded">Купить</button>
//   </div>
  
//   );
// }

import React from 'react'
import GemeniChat from "./components/GemeniChat"

export default function App() {
  return (
    <div>
      <GemeniChat/>
    </div>
  )
}
