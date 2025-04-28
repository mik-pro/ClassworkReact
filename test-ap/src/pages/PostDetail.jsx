import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function PostDetail() {
    let {id}= useParams()
    let [post,setPosts]=useState()

    async function fetchData() {
        try{
            let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            if (!response.ok) {
                throw new Error("кате");
                
            }
            let date = await response.json()
            setPosts(date)
        }catch(err){
            console.log(err);

        }
    }
    useEffect(()=>{
        fetchData()
    },[id])
    if (post) {
        return (
            <div>
                <Link to={'/post'}>back</Link>
                <h2>Пост акпараты</h2>
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            </div>
          )
        }
        
    }
 