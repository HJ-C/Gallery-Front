import React from 'react'
import axios from 'axios'
import Test1 from './test1'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

function Test() {

  return (
    <>
        <h4 className='post_text'>username:</h4>
        <div className='post_comments'>
            <Test1></Test1>
        </div>

        {/* Input */}
        <form>
            <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue="입력하세요"
                variant="filled"
                size="small"
                />
            <Button>
                send
            </Button>
        </form>
    </>
  )
}

export default Test

