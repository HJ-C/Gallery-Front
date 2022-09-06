import React from "react"
import { useEffect, useState } from "react"
import  axios  from 'axios';

function Test(){
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState([]);

  const onSubmit = e => {
    e.preventDefault();
    if (comment === '') {
      return;
    }
    setCommentArray(a => [comment, ...a]);
    setComment('');
  };

  const onChange = event => {
    setComment(event.target.value);
  }
    
    return(
    <div onSubmit={onSubmit}>
   <form>
     <input
     type="text"
     placeholder="댓글달기..."
     value={comment}
     onChange={onChange}
     />
     <button className="commetBtn">게시</button>
   </form>
   
   {commentArray.map((value, id) => (
            <li key={id}>
               <div>
               <span>User</span>
               {value}
               </div>
           </li>
         ))} 
    </div>
    )
}


export default Test