  import React, { useState } from 'react';
  const Modal = ({ content, onClose ,postObj,users}) => {
    const [comments, setComments] = useState(['Great post!',  'Love this.', 'Amazing!']);
    console.log(postObj,)
    const handleAddComment = (event) => {
      if (event.key === 'Enter') {
        setComments([...comments, event.target.value]);
        event.target.value = '';
      }
    };
    console.log(users,"asdas")

    // Define a fallback avatar URL
    const  fallbackAvatarURL = "https://th.bing.com/th/id/OIP.Gfp0lwE6h7139625a-r3aAHaHa?pid=ImgDet&rs=1";


    return (
      <div className="modal w-[100%] h-[100%]">
        <h1 className="close absolute text-[70px] ml-[1600px] mt-[40px] text-[white]" onClick={onClose}>×</h1>
        <div className="modal-content h-[80%] flex justify-between w-[80%]">
          <div className="left-div h-[100%] w-[55%]">
            <img className=' h-[100%] w-[100%]' src={import.meta.env.VITE_APP_FILES_URL+postObj.images[0]} alt="Clicked image" />
          </div>
            <div className=' pl-[30px] right  pt-[20px] w-[45%] h-[100%]  '>   
            {/* Replace the existing img tag with the new one */}
            <div className='flex items-center gap-[20px]'>
            <img className=' rounded-[50px] h-[60px]' src={postObj?.user?.avatar ? import.meta.env.VITE_APP_FILES_URL + postObj.user.avatar : fallbackAvatarURL} alt="User avatar" />
              <h1 className=' font-[600] text-[20px]'>{  postObj.user.userName}</h1>
                 <p className=' text-[20px] font-[700]'>.</p>
               <p className=' text-blue-600 text-[20px] font-[600]'> Fallow</p>
            </div>
            {
  postObj.comments.map((comment) => {
    // Find the user who made the comment
    const user = users.find(user => user.id === comment.userId);

    return ( 
      <div key={comment.id} className='  mt-[30px] pt-[10px] comment-section'>
      <div  className='flex h-[40px]  items-center gap-[20px]'>
        <img className='avatar rounded-[50px]   h-[50px] ' src={user?.avatar ? import.meta.env.VITE_APP_FILES_URL + user.avatar : fallbackAvatarURL} alt="User avatar" />
        <h2 className=' hover:text-gray-500  font-[600] text-[20px]'>{user?.userName}</h2>
        <p className=' text-[20px] font-[500]'>{comment.comment}</p>

      </div>
      </div>
    );
  })
}
        <div className=' mt-[80px]'>

        </div>
            </div>
        </div>
      </div>
    );
  };

  export default Modal;
