import React, { useEffect, useState } from 'react';
import { axiosRequest, getToken } from '../utilities/axiosRequest';

const Post = ({ post }) => {
  const [isHovered, setIsHovered] = useState(false);
  const imageUrl = `http://65.108.148.136:8085/images/${post.images[0]}`; 

  return (
    <div 
      className="relative w-full h-full p-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >                                          
      <img src={imageUrl} alt="Post" className="w-96 h-96 max4:w-80 max4:h-80 max600:w-60 max600:h-60 max6:w-40 max6:h-40 object-cover" />
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center gap-[30px] justify-center p-4">
          <p className="text-white flex items-center gap-[5px]"> 🤍{post.postLikeCount}</p>
          <p className="text-white flex items-center gap-[5px]">💬 {post.commentCount}</p>
        </div>
      )}
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

  useEffect(() => {
    getPosts();
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


