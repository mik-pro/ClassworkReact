import React, { useEffect, useState } from 'react'

export default function useFeach(url) {
    let [date, setDate]= useState([])
    const [isLoading, setIsLoading]= useState(true)
    useEffect(()=>{
        fetch(url)
        .then(response =>response.json())
        .then(aqparat =>
        {
            setDate(aqparat)
            setIsLoading(false)
        }
        )
        .catch(err)
        {
            
        }
    })
  return (
    <div>
      
    </div>
  )
}
