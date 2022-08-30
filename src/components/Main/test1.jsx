import React from 'react'
import axios from 'axios'

function Test1({users,i}) {
  return (
    <>
    <div>
        <div>{users[i].name}</div>
    </div>
    </>
  )
}

export default Test1

