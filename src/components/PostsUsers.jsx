import React, { useEffect, useState } from 'react';
import { axiosRequest, getToken } from '../utilities/axiosRequest';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import { IconButton } from '@mui/material';
import CommentInput from './Addcomment';

const Post = ({ post }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const imageUrl = `http://65.108.148.136:8085/images/${post.images[0]}`; 

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeModal = () => {
    setIsDialogOpen(false);
  };

  return (
    <div 
      className="relative w-full h-full p-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >                                          
      <img src={imageUrl} alt="Post" className="w-96 h-96 max4:w-80 max4:h-80 max600:w-60 max600:h-60 max6:w-40 max6:h-40 object-cover"  />
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center gap-[30px] justify-center p-4"onClick={openDialog}>
          <p className="text-white flex items-center gap-[5px]"> 🤍{post.postLikeCount}</p>
          <p className="text-white flex items-center gap-[5px]">💬 {post.commentCount}</p>
        </div>
      )}
<div 
  className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10 ${isDialogOpen ? 'block' : 'hidden'}`}
  onClick={closeModal} 
>


<div 
  className='flex flex-row justify-between items-start bg-white w-9/12 h-5/6'
  onClick={(e) => e.stopPropagation()} // This line is added
>

          <img src={imageUrl} alt="Post" className="w-6/12 h-full object-cover" />
          <div className="w-6/12 overflow-y-auto">
            {/* Add user image and username here */}
            <div className="flex items-center space-x-2 p-4 border-b border-gray-300">
              <img src={post.userPhoto ? `http://65.108.148.136:8085/images/${post.userPhoto}` : '/src/assets/imagesuserprofile/gep-worldwide-computer-network-building-youth-nigeria-others-829f6a97f991a96566e6ac5910746622.png'} alt="" className="w-8 h-8 rounded-full" />
              <p className="font-bold">{post.userName}</p>
            </div>
            <div className="overflow-y-auto h-[520px] mt-[20px] ml-[20px]"> 
              {post.comments.map((comment, index) => (
                <div key={index} className="">
                  {post.userLikes.map((like, index) => (
                    <div key={index} className="flex pt-[15px]  justify-start gap-[15px]">
                      <img src={like.userPhoto ? `http://65.108.148.136:8085/images/${like.userPhoto}` : '/src/assets/imagesuserprofile/gep-worldwide-computer-network-building-youth-nigeria-others-829f6a97f991a96566e6ac5910746622.png'} alt="" className="w-8 h-8 rounded-full" />
                      <p className="font-bold">{like.userName}</p>
                      <p>{comment.comment}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="p-4">
              <div className='flex justify-between'>
                <div>
            <IconButton className="">
                        <svg
                          aria-label="Нравится"
                          class="x1lliihq x1n2onr6"
                          color="rgb(38, 38, 38)"
                          fill="rgb(38, 38, 38)"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <title>Нравится</title>
                          <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                        </svg>
                      </IconButton>
                      <IconButton>
                        <svg
                          aria-label="Комментировать"
                          class="x1lliihq x1n2onr6"
                          color="rgb(0, 0, 0)"
                          fill="rgb(0, 0, 0)"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <title>Комментировать</title>
                          <path
                            d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></path>
                        </svg>
                      </IconButton>
                      <IconButton>
                        <svg
                          aria-label="Поделиться публикацией"
                          class="x1lliihq x1n2onr6"
                          color="rgb(0, 0, 0)"
                          fill="rgb(0, 0,0)"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <title>Поделиться публикацией</title>
                          <line
                            fill="none"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                            x1="22"
                            x2="9.218"
                            y1="3"
                            y2="10.083"
                          ></line>
                          <polygon
                            fill="none"
                            points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></polygon>
                        </svg>
                      </IconButton>
</div>
                      <div>
                      <IconButton>
                        <svg
                          aria-label="Сохранить"
                          class="x1lliihq x1n2onr6"
                          color="rgb(0, 0, 0)"
                          fill="rgb(0, 0, 0)"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <title>Сохранить</title>
                          <polygon
                            fill="none"
                            points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></polygon>
                        </svg>
                      </IconButton>
                    </div></div>
              <p className='pl-[10px]'> {post.postLikeCount} likes</p>
              <p className='pl-[10px]'> {post.datePublished} </p>
               <div>
              <CommentInput/>
               </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};


const Posts = () => {
  const [posts, setPosts] = useState([]);
  const userId = getToken()?.sid;

  const getPosts = async () => {
    try {
      const { data } = await axiosRequest.get(`Post/get-posts?UserId=${userId}`);
      setPosts(data.data);
      console.log(data.data)
    } catch (error) {
      console.log(error);
    }
  };

  const getProfile = async () => {
    try {
      const { data } = await axiosRequest.get(
        `UserProfile/get-UserProfile-by-id?id=${userId}`
      );
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
    getProfile()
  }, []);









  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-3">
      {posts.map((post, index) => (
        <Post key={index} post={post}
         />
      ))}
    </div>
  );
};

export default Posts;


