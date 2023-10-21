import React, { useState } from "react";
import PreviewComponent from "../../components/Hover/Hover";
const Explore = () => {
  const [modal, setmodal] = useState(false)

  const [selectedImage, setSelectedImage] = useState({ src: "", alt: "" });

  const handleImageClick = (src, alt) => {
    setSelectedImage({ src, alt });
    setmodal(true);
  };


  return (
    <div>
      <div className=" mt-[30px] xs:justify-center flex gap-[10px]  flex-wrap  sm:w-[70%] sm:ml-[20%]   sm:items-start">
        <div className=" h-[30vh] xs:w-[40%] sm:w-[30%]" onClick={() => handleImageClick("https://th.bing.com/th/id/R.93d1528a95578fd09b9783d2fa744b36?rik=usFNunda%2f%2bdHIQ&pid=ImgRaw&r=0", "")}>
          <PreviewComponent>
            <img src="https://th.bing.com/th/id/R.93d1528a95578fd09b9783d2fa744b36?rik=usFNunda%2f%2bdHIQ&pid=ImgRaw&r=0" alt="" />
          </PreviewComponent>

          <PreviewComponent>
            <img className=" xs:h-[36vh] sm:h-[30vh] mt-[20px]" src="https://th.bing.com/th/id/R.dc88366f7814fbc48a4188f900327702?rik=PTVbnglqZOje9w&pid=ImgRaw&r=0" alt="" />
          </PreviewComponent>

        </div>
        <div className=" xs:w-[40%] sm:w-[30%] ] ">
          <PreviewComponent>
            <img className="" src="https://th.bing.com/th/id/OIP.Kkoynk29hxBvp4Df2BPifAHaE8?pid=ImgDet&rs=1" alt="" />
          </PreviewComponent>
          <PreviewComponent>
            <img className="mt-[20px]" src="https://th.bing.com/th/id/OIP.Kkoynk29hxBvp4Df2BPifAHaE8?pid=ImgDet&rs=1" alt="" />
          </PreviewComponent>
        </div>
        <div className=" xs:w-[80%]  sm:w-[35%]">
          <PreviewComponent>

            <video className=" sm:h-[64vh]" width="100%" height="100%" controls autoPlay muted loop preload="auto">
              <source src="src/assets/321011280_853427726405801_7678946478483476727_n.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </PreviewComponent>

        </div>



      </div>
      {modal ? (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[white] w-[60%]">
          <div className="w-1/2 float-left">
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
          <div className=" w-1/2 float-right">

          </div>
        </div>
      ) : null}


      <div className=" mt-[30px] xs:justify-center flex gap-[10px]  flex-wrap  sm:w-[70%] sm:ml-[20%]   sm:items-start">
        <div className=" xs:w-[80%]  sm:w-[35%]">
          <PreviewComponent>

            <video className=" sm:h-[64vh]" width="100%" height="100%" controls autoPlay muted loop preload="auto">
              <source src="src/assets/321011280_853427726405801_7678946478483476727_n.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </PreviewComponent>

        </div>

        <div className=" h-[30vh] xs:w-[40%] sm:w-[30%]" onClick={() => handleImageClick("https://th.bing.com/th/id/R.93d1528a95578fd09b9783d2fa744b36?rik=usFNunda%2f%2bdHIQ&pid=ImgRaw&r=0", "")}>
          <PreviewComponent>
            <img src="https://th.bing.com/th/id/R.93d1528a95578fd09b9783d2fa744b36?rik=usFNunda%2f%2bdHIQ&pid=ImgRaw&r=0" alt="" />
          </PreviewComponent>
          <PreviewComponent>
            <img className="xs:h-[36vh] sm:h-[30vh] mt-[20px]" src="https://th.bing.com/th/id/R.dc88366f7814fbc48a4188f900327702?rik=PTVbnglqZOje9w&pid=ImgRaw&r=0" alt="" />
          </PreviewComponent>
        </div>
        <div className=" xs:w-[40%] sm:w-[30%] ] ">
          <PreviewComponent>
            <img className="" src="https://th.bing.com/th/id/OIP.Kkoynk29hxBvp4Df2BPifAHaE8?pid=ImgDet&rs=1" alt="" />
          </PreviewComponent>
          <PreviewComponent>
            <img className="mt-[20px]" src="https://th.bing.com/th/id/OIP.Kkoynk29hxBvp4Df2BPifAHaE8?pid=ImgDet&rs=1" alt="" />
          </PreviewComponent>
        </div>




      </div>
      {modal ? (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[white] w-[60%]">
          <div className="w-1/2 float-left">
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
          <div className=" w-1/2 float-right">

          </div>
        </div>
      ) : null}


    </div>
  )
}

export default Explore