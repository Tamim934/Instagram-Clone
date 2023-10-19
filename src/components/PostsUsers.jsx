import React, { useState } from 'react';

const Post = ({ username, image, caption, likes, comments }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full h-full p-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >                                          
      <img  src={image} alt="Post" className=" w-96  h-96 max4:w-80 max4:h-80 max600:w-60 max600:h-60 max6:w-40 max6:h-40  object-cover" />
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center gap-[30px] justify-center p-4">
          <p className="text-white flex items-center gap-[5px]"> 🤍{likes}</p>
          <p className="text-white  flex items-center gap-[5px]">💬 {comments}</p>
        </div>
      )}
    </div>
  );
};
  


const Posts = () => {
  const posts = [
    { username: 'user1', image: '/src/assets/imagesuserprofile/OIP (1).jpeg', caption: 'Caption 1', likes: 100, comments: 20 },
    { username: 'user2', image: '/src/assets/imagesuserprofile/uwp3981822 (1).jpeg', caption: 'Caption 2', likes: 200, comments: 40 },
    { username: 'user1', image: '/src/assets/imagesuserprofile/wp4717570-ronaldo-hd-4k-mobile-wallpapers (1).jpg', caption: 'Caption 1', likes: 100, comments: 20 },
    { username: 'user2', image: '/src/assets/imagesuserprofile/uwp3981824 (2).jpeg', caption: 'Caption 2', likes: 200, comments: 40 },
  
    // more posts...
  ];

  return (
<div className="grid  gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-3">
     {posts.map((post, index) => (
       <Post 
         key={index}
         username={post.username}
         image={post.image}
         caption={post.caption}
         likes={post.likes}
         comments={post.comments}
       />
     ))}
   </div>
  );
};

export default Posts;

