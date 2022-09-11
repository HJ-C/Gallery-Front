import React from "react"
import { useEffect, useState } from "react"
import  axios  from 'axios';
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Test(){

  
    return(
      <>
        <Navigate to='/login'>이동</Navigate>
      </>
    )
}


export default Test