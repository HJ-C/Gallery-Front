import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import Test1 from './test1'

function Test() {
    const [posts, setPosts] = useState([])
    const [searchTitle, setSearchTitle] = useState("")

    useEffect(()=>{
        const loadPosts = async ()=>{
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            setPosts(response.data)
        }
        loadPosts()
    },[])

  return (

    <div className='test'>
        <h2>Search Filter</h2>
        <input 
            type="text" 
            onChange={(e)=> setSearchTitle(e.target.value)}
            />
        {
            posts
                .filter( a => { 
                if(searchTitle === ""){
                    return a
                }else if(
                    a.username.toLowerCase().includes(searchTitle.toLowerCase()))
                return a
            })
                .map(item => <h5>{item.username}</h5>)
        }
    </div>
  )
}

export default Test

