
import { useState } from 'react';

function Test1({feedComments,setFeedComments}){
    let[comment, setComment] = useState('')
    let [isValid, setIsValid] = useState(false)

    let post = e => {
        const copyFeedComments = [...feedComments]
        copyFeedComments.push(comment)
        setFeedComments(copyFeedComments)
        setComment('')
    }


    return (
        <>
        <input 
            type="text"
            onChange={e => {
                setComment(e.target.value)
            }}
            onKeyUp={e=>{
                e.target.value.length>0
                    ? setIsValid(true)
                    : setIsValid(false)
            }}
            value={comment}
            />
        <button
            onClick={post}
            disabled={isValid ? false : true}
            >게시</button>
        </>
    )
}

export default Test1