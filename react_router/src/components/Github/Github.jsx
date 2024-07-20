import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const data = useLoaderData()
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/KunjAntala')
     .then(response => response.json())
     .then(data => {
        console.log('kfgegie',data);
        setData(data)
     })
    }, [])
    
  return (
    <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
    Github Followers: {data.followers} 
    
    </div>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex justify-center'>
        <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    </>
  )
}

export default Github

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/KunjAntala')
//     return response.json()
// }