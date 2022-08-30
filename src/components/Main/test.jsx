import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import Test1 from './test1'

function Test() {
    const [ users, setUsers] = useState([])
    const [a, setA] = useState("")

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res=>{
                setUsers([...res.data])
                console.log(res.data)
            })
    },[])

    const filterNames = e =>{
        const search = e.target.value.toLowerCase()
        const filteredNames = users.filter(names=> names.username.toLowerCase().includes(search))
        setA(filteredNames)
    }
  return (
    <>
    <div>
        <input type='text' onChange={(e)=>{filterNames(e)}}></input>
        <button>Search</button>
        {
            a.map((a,i)=>{
                return <li key={a.id}>{a.username}</li>
            })
        }
    </div>
    </>
  )
}

export default Test

