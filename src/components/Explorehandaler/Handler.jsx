import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import { colors } from '@mui/material';

const Modal = ({ content, onClose }) => {
  const [comments, setComments] = useState(['Great post!',  'Love this.', 'Amazing!']); // Add your initial comments here

  // Generate random number of likes and comments
//   const likes = Math.floor(Math.random() * 100);

  const handleAddComment = (event) => {
    if (event.key === 'Enter') {
      setComments([...comments, event.target.value]);
      event.target.value = '';
    }
  };

  return (
    <div className="modal w-[100%] h-[100%]">
      <h1 className="close absolute text-[70px] ml-[1600px] mt-[40px] text-[white]" onClick={onClose}>×</h1>
      <div className="modal-content h-[80%] flex w-[80%]">
        <div className="left-div h-[100%] w-[45%]">
          {content}
        </div>
        <div className="right-div pl-[10px]  w-[45%]">
          <div className=' mt-[-90px]  absolute items-center ml-[40px] flex justify-start gap-[30px]'>
            <Link to={"/home/profile"}>
            <img src="/src/assets/imagesuserprofile/profileinstagram.jpeg" alt="Profile" className="  rounded-[50px] h-[80px]" />
            </Link>
                   <p className=' text-[24px]'>Cristiano-ronaldo</p>
                   <p className=' text-blue-500 font-[600] text-[20px]'>Fallow</p>        

          </div>
          <div style={{overflow: "auto"}} className=' mt-[10px] pl-[15px]  h-[30vh]'>
         
            <div className=' ml-[30px] items-center gap-[20px] flex'>
            <img src="https://th.bing.com/th/id/R.da2e546841da40cdcf60061743233500?rik=IeO7Sr%2fkUW54wQ&riu=http%3a%2f%2fwww.venmond.com%2fdemo%2fvendroid%2fimg%2favatar%2fbig.jpg&ehk=JihI5nQ0BOd0W%2bZVhtIWmqwac0NMyRMOV7%2bzryywg%2fg%3d&risl=&pid=ImgRaw&r=0" alt="Profile" className="  rounded-[50px] h-[60px]" />
            <h1 className=' font-[600] text-[20px]'>Zohra Nmanov</h1>
            {comments.map((comment, index) => (
              <p key={index}>{comment}</p>
              
            ))}
            </div>
            <div  className='flex mt-[10px] text-[14px] font-[500] text-gray-400 ml-[100px] gap-[30px]'>
             <p>1 d</p> <p>2 Likes</p> <p>Replies</p>
            </div>
            <div className=' ml-[30px] mt-[20px] items-center gap-[20px] flex'>
            <img src="https://th.bing.com/th/id/R.391ea3fddc2ba3e32fa4df2fd4be9c29?rik=PlSPimkDROzhjw&pid=ImgRaw&r=0" alt="Profile" className="  rounded-[50px] h-[60px]" />
            <h1 className=' font-[600] text-[20px]'>Shahnazar Nazarov</h1>
            {comments.map((comment, index) => (
              <p key={index}>{comment}</p>
              
            ))}
            </div>
            <div  className='flex text-[14px] font-[500] text-gray-400 ml-[100px] gap-[30px]'>
             <p>3 d</p> <p>4 Likes</p> <p>Replies</p>
            </div>
            <div className=' ml-[40px] mt-[40px] items-center gap-[20px] flex'>
            <img src="https://cdn2.stylecraze.com/wp-content/uploads/2019/04/Feathered-Tips.jpg" alt="Profile" className="  rounded-[50px] h-[60px]" />
            <h1 className=' font-[600] text-[20px]'>Jamila jamilov</h1>
            {comments.map((comment, index) => (
              <p key={index}>{comment}</p>
              
            ))}
            </div>
            <div  className='flex text-[14px] font-[500] text-gray-400 ml-[100px] gap-[30px]'>
             <p>4 d</p> <p>10 Likes</p> <p>2 Replies</p>
            </div>
            <div className=' ml-[40px] mt-[40px] items-center gap-[20px] flex'>
            <img src="https://th.bing.com/th/id/OIP.swC9UkZ2xU7Qg7rtE5jbxAAAAA?pid=ImgDet&rs=1" alt="Profile" className="  rounded-[50px] h-[60px]" />
            <h1 className=' font-[600] text-[20px]'>Eren Yeagerov</h1>
            {comments.map((comment, index) => (
              <p key={index}>{comment}</p>
              
            ))}
            
            </div>
            <div  className='flex text-[14px] font-[500] text-gray-400 ml-[100px] gap-[30px]'>
             <p>10 d</p> <p>20 Likes</p> <p>3 Replies</p>
            </div>
          </div>
          <div className=' flex   ml-[20px]'>
          <div className=' flex gap-[30px]'> 

          <svg   aria-label="Нравится" class="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="74" role="img" viewBox="0 0 24 24" width="34"><title>Нравится</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
          <svg aria-label="Комментировать" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="74" role="img" viewBox="0 0 24 24" width="34"><title>Комментировать</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
          <svg aria-label="Поделиться публикацией" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="74" role="img" viewBox="0 0 24 24" width="34"><title>Поделиться публикацией</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
          </div>
         <div className='  ml-[350px]'>
         <svg aria-label="Сохранить" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="74" role="img" viewBox="0 0 24 24" width="34"><title>Сохранить</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
         </div>
           </div>
         <div className=' flex ml-[30px] font-[600] text-[20px] '>
         <p>1200 Likes</p>
         </div>
         <div className=' flex ml-[30px] mt-[10px] text-[15px]'  > 
         <p className=' text-gray-500 '>4 DAYS AGO</p>
         </div>

          <div className=' mt-[20px]'>
          <TextField
           sx={{width: "90%",}}
          id="standard-basic"variant="standard" 
             placeholder="Add a comment..."
             InputProps={{
               endAdornment: (
                 <IconButton size="small">
                   <p className=' text-[blue]'>Post</p>
                 </IconButton>
               ),
             }}
          />
           
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
