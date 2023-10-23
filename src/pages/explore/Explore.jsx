import React, { useState } from "react";
import PreviewComponent from "../../components/Hover/Hover";
import Modal from "../../components/Explorehandaler/Handler";
const Explore = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleClick = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };


  return (
    <div className=" w-[80%] ml-[10%]">
         <div class="container">
  <div class="area1" onClick={() => handleClick(<img className=" h-[100%]" src="https://th.bing.com/th/id/R.bdc53f193c4876a40019126cbe555bb9?rik=lgFR%2fnWZhwhchQ&pid=ImgRaw&r=0" alt="" />)}>
    <img src="https://th.bing.com/th/id/R.bdc53f193c4876a40019126cbe555bb9?rik=lgFR%2fnWZhwhchQ&pid=ImgRaw&r=0" alt="" />
  </div>
  <div class="area2" onClick={() => handleClick(<img className=" h-[100%]" src="https://th.bing.com/th/id/OIP.anp0XQz24UeOEE5qf-5swQHaEo?pid=ImgDet&rs=1" alt="" />)}>
    <img src="https://th.bing.com/th/id/OIP.anp0XQz24UeOEE5qf-5swQHaEo?pid=ImgDet&rs=1" alt="" />
  </div>
  <div class="area-4" onClick={() => handleClick( <video className=" h-[80vh]"  width="100%" height="100%" controls autoPlay muted loop preload="auto">
  <source src="../src/assets/321011280_853427726405801_7678946478483476727_n.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video> )}>
  <PreviewComponent>

<video className=" h-[80vh]"  width="100%" height="100%" controls autoPlay muted loop preload="auto">
  <source src="../src/assets/321011280_853427726405801_7678946478483476727_n.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
</PreviewComponent>

  </div>
  <div class="area5" onClick={() => handleClick(<img className=" h-[100%]" src="https://th.bing.com/th/id/OIP.OB8fZBMtLZD6VMfENy0PJAHaE8?pid=ImgDet&rs=1" alt="" />)}>
    <img src="https://th.bing.com/th/id/OIP.OB8fZBMtLZD6VMfENy0PJAHaE8?pid=ImgDet&rs=1" alt="" />
  </div>
  <div class="area-6" onClick={() => handleClick(<img className=" h-[100%]" src="https://th.bing.com/th/id/R.5e077170933c851bc18b701826af53bc?rik=bQYR%2bCGHrFxigQ&riu=http%3a%2f%2fi.mdel.net%2fnewfaces%2fi%2f2016%2f02%2fmotw_02181610-600x600.jpg&ehk=9v2k6QCuE%2fKxCubxzji5Y%2fz06g0dt57%2bvMuqyy6aJgE%3d&risl=&pid=ImgRaw&r=0" alt="" />)}>
    <img src="https://th.bing.com/th/id/R.5e077170933c851bc18b701826af53bc?rik=bQYR%2bCGHrFxigQ&riu=http%3a%2f%2fi.mdel.net%2fnewfaces%2fi%2f2016%2f02%2fmotw_02181610-600x600.jpg&ehk=9v2k6QCuE%2fKxCubxzji5Y%2fz06g0dt57%2bvMuqyy6aJgE%3d&risl=&pid=ImgRaw&r=0" alt="" />
  </div>
  <div class="area-8" onClick={() => handleClick(<img className=" h-[100%]" src="https://th.bing.com/th/id/OIP._yC174sEBWELImhmt0sS8gHaE2?pid=ImgDet&rs=1" alt="" />)}>
    <img src="https://th.bing.com/th/id/OIP._yC174sEBWELImhmt0sS8gHaE2?pid=ImgDet&rs=1" alt="" />
  </div>
  <div class="area-11" onClick={() => handleClick(<img className=" h-[100%]" src="https://th.bing.com/th/id/OIP.IwPTUINIel4wPAwQM8devgHaE7?pid=ImgDet&rs=1" alt="" />)}>
    <img src="https://th.bing.com/th/id/OIP.IwPTUINIel4wPAwQM8devgHaE7?pid=ImgDet&rs=1" alt="" />
  </div>
  <div class="area-7" onClick={() => handleClick(  <video className=" h-[80vh]  "  width="100%" height="100%" controls autoPlay muted loop preload="auto">
  <source src="../src/assets/319618509_1006980723918556_4270605473213176322_n.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>)}>
  <video className=" h-[80vh]  "  width="100%" height="100%" controls autoPlay muted loop preload="auto">
  <source src="../src/assets/319618509_1006980723918556_4270605473213176322_n.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
  </div>
  <div class="area-9"  onClick={() => handleClick(<img className=" h-[100%]" src="https://thumbs.dreamstime.com/z/smiling-friends-making-selfie-outdoors-friendship-leisure-summer-technology-people-concept-71564548.jpg" alt="" />)}>
    <img src="https://thumbs.dreamstime.com/z/smiling-friends-making-selfie-outdoors-friendship-leisure-summer-technology-people-concept-71564548.jpg" alt="" />
  </div>
  <div class="area-10"  onClick={() => handleClick(<img className=" h-[100%]" src="https://images4.alphacoders.com/595/thumb-1920-595482.jpg" alt="" />)}>
    <img src="https://images4.alphacoders.com/595/thumb-1920-595482.jpg" alt="" />
  </div>
</div>
{showModal &&   <Modal  content={modalContent} onClose={handleClose} />}

    </div>
  )
}

export default Explore