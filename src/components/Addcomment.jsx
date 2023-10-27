import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import axios from 'axios';
import { axiosRequest, getToken } from '../utilities/axiosRequest';

const CommentInput = ({ postId }) => {
  console.log(postId)
  const [comment, setComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
 const userId = getToken()?.sid;
  const handleCommentSubmit = async () => {
  
   
    try {
      const {data} = await axiosRequest.post(`Post/add_comment`, {
       
        "comment":comment,
        "postId":postId
    
      });
      
console.log(data)

     
    } catch (error) {
      console.error(error);
    }

    setComment('');
  };

  return (
    <div className="flex items-center space-x-2 p-2">
      <IconButton>
        <InsertEmoticonIcon />
      </IconButton>
      <TextField 
        fullWidth 
        value={comment} 
        onChange={handleCommentChange} 
        placeholder="Add a comment..." 
        InputProps={{ style: { fontSize: 12 } }} 
      />
      <IconButton onClick={handleCommentSubmit}>
        <SendIcon />
      </IconButton>
    </div>
  );
};

export default CommentInput;
