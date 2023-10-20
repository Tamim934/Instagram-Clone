import { TextField } from '@mui/material'
import React from 'react'
import "./App.css";
export const Regestrition = () => {
  return (
    <>
<div>
 <div id="border" className=" sm:w-[30%] sm:ml-[35%] pb-[30px] mt-[30px]">
<div className=" flex  pt-[10px] justify-center" > 
<img className=" h-[110px]   " src="https://th.bing.com/th/id/OIP.OW6qyzpbzGUanvm7aRG9KQHaEK?pid=ImgDet&rs=1" alt="" />
</div>
<div className=" pl-[10px] pr-[10px]">
<p className=" text-center xs:text-center sm:text-[20px] sm:w-[350px] sm:ml-[30px] text-gray-500 font-[500] ">Sign up to see photos and videos from your friends.</p>
  <button  className=" hover:bg-blue-600 bg-blue-500 w-[80%] ml-[10%] mt-[20px] h-[40px] text-white text-[17px] font-[500] rounded-[10px]"> log in with facebook</button>

</div>

<div className=" pt-[30px] flex justify-between pl-[10%] pr-[10%]  ">
<div className="w-[35%]">
  <hr/> 
    
</div>
    <span className="  text-gray-500 font-[500] mt-[-13px]"  >OR</span>
   <div className=" w-[35%]   ">
    <hr />
   </div>

</div>
  
  <div className="pl-[10%] flex justify-center  xs:flex-wrap  pr-[10%] ">
  <TextField  sx={{width: 330, marginTop: 2}} id="filled-basic" label="Mobile Number or Email" variant="filled" />
  <TextField  sx={{width: 330, marginTop: 2}} id="filled-basic" label="Full Name" variant="filled" />
  <TextField  sx={{width: 330, marginTop: 2}} id="filled-basic" label="Username" variant="filled" />
  <TextField
  sx={{width: 330, marginTop: 2}}
    id="outlined-password-input"
    label="Password"
    type="password"
    autoComplete="current-password"
  />
 
  </div>
       
       <div className="  flex justify-center mt-[10px] pr-[6%]">
        <p className="  ml-[30px] text-gray-500 text-[13px] text-center">People who use our service may have uploaded your contact information to Instagram.  <span className=" font-[500] text-blue-900">Learn More</span> </p>

      
     
       </div>
       <div className=" pl-[4%]  pr-[6%] flex justify-center">
       <p className=" w-[300px] text-gray-500 text-[13px] text-center mt-[20px]">By signing up, you agree to our Terms ,  <span className=" font-[500] text-blue-900">Privacy Policy and Cookies Policy . </span> </p>

       </div>
       <button  className= "  bg-blue-500 w-[80%] ml-[10%] mt-[20px] h-[40px] text-white text-[17px] font-[500] rounded-[10px]">Sign up</button>
 </div>

 <div id="border" className=" flex justify-center gap-[5px] pt-[20px] pb-[20px]  w-[30%] ml-[35%] mt-[20px]">
    <p className="">Have an account? </p> <span className=" text-blue-500 font-[400]">Log in</span>
 </div>
 <div className=" mt-[20px] flex  justify-center">

      <p>Get the app.</p> 

 </div>
 <div className="   justify-center  mt-[20px] gap-[15px] flex">
  <img className=" h-[50px]"  src="src/assets/R.png" alt="" />
  <img className=" h-[50px]"  src="https://th.bing.com/th/id/OIP.IfEVLr_Ob9nwd_wUlbzO7gHaCr?pid=ImgDet&rs=1" alt="" />
 </div>
 <div className=" text-gray-500 gap-[20px] text-[13px] mt-[60px] xs:flex-wrap flex justify-center">
  <p>Meta</p>
  <p> Meta Verified</p>
  <p>About</p>
  <p>Blog</p>
  <p>Jobs</p>
  <p>Help</p>
  <p>API</p>
  <p>Privacy</p>
  <p>Terms</p>
  <p>

Locations</p>
  <p>Instagram Lite</p>
  <p>
Threads</p>
  <p>Contact Uploading & Non-Users</p>
 </div>
 <div className=" pb-[20px] text-gray-500 gap-[20px] mt-[10px] text-[13px]  flex justify-center">
  <select name="" id="">
      <option value="">English</option>
      <option value="">Russian</option>
  </select>
  <p>

© 2023 Instagram from Meta</p>
 </div>
</div>

</>
  )
}

export default Regestrition