import React from "react";
import Stories from "./components/stories";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Posts from "./components/Posts";
import LikeComment from "./components/LikeComment";
const Home = () => {
  return (
    <div className="pb-20 w-[90%] mx-auto">
      <div className="w-[90%] md:w-[75%]  lg:w-[65%] 2xl:w-[50%] mx-auto mt-8 ">
        <Swiper
          // spaceBetween={30}
          breakpoints={{
            300: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 70,
            },
            2024: {
              slidesPerView: 8,
              spaceBetween: 10,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Stories />
          </SwiperSlide>
          <SwiperSlide>
            <Stories />
          </SwiperSlide>
          <SwiperSlide>
            <Stories />
          </SwiperSlide>
          <SwiperSlide>
            <Stories />
          </SwiperSlide>
          <SwiperSlide>
            <Stories />
          </SwiperSlide>
          <SwiperSlide>
            <Stories />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Stories />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Stories />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Stories />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Stories />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Stories />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Stories />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Stories />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-[70%] sm:w-[60%] md:w-[55%] lg:w-[40%] 2xl:w-[35%] mx-auto mb-20 mt-5">
        <div className="flex items-center mb-5 justify-between">
          <div className="flex items-center gap-2">
            <img
              className="w-[10%]"
              src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
              alt=""
            />
            <p>
              premierzal.tj <span className="text-gray-400">• 1 дн.</span>
            </p>
          </div>
          <MoreHorizIcon />
        </div>
        <div>
          <div className="h-[400px] sm:h-[500px] md:h-[650px] 2xl:h-[700px]">
            <Swiper
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  className="rounded-xl mt-3"
                  src="https://i.pinimg.com/564x/2a/83/69/2a8369e773ca23497e5b3055882f684f.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="rounded-xl mt-3"
                  src="https://i.pinimg.com/564x/96/a9/f9/96a9f98dab31a3200f0d94f94a5e70c9.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="rounded-xl mt-3"
                  src="https://i.pinimg.com/564x/3d/e5/82/3de582172f942f83c3a7c7c1af8bdbea.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="rounded-xl mt-3"
                  src="https://i.pinimg.com/564x/39/28/0f/39280ffc58854ba66e8047f3a881c2aa.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="rounded-xl mt-3"
                  src="https://i.pinimg.com/564x/6d/4b/2f/6d4b2f2fea3f5a94acf033c3aca0ece1.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="rounded-xl mt-3"
                  src="https://i.pinimg.com/564x/47/12/5f/47125faf05b3cde96ac044e6abd1d3e9.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="rounded-xl mt-3"
                  src="https://i.pinimg.com/564x/47/12/5f/47125faf05b3cde96ac044e6abd1d3e9.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="rounded-xl mt-3"
                  src="https://i.pinimg.com/736x/d4/6c/0f/d46c0fda5dfd86c0bc2223282a88fab6.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="rounded-xl mt-3"
                  src="https://i.pinimg.com/564x/2a/83/69/2a8369e773ca23497e5b3055882f684f.jpg"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>{" "}
        </div>
        <div>
          <LikeComment />
        </div>
      </div>
      <div className="w-[70%] sm:w-[60%] md:w-[55%] lg:w-[40%] 2xl:w-[35%] mx-auto mb-20 mt-5">
        <div className="flex items-center mb-5 justify-between">
          <div className="flex items-center gap-2">
            <img
              className="w-[10%]"
              src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
              alt=""
            />
            <p>
              premierzal.tj <span className="text-gray-400">• 1 дн.</span>
            </p>
          </div>
          <MoreHorizIcon />
        </div>
        <div>
          <div className="h-[400px] sm:h-[500px] md:h-[650px] 2xl:h-[700px]">
            <Swiper
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  className="rounded-xl mt-3"
                  src="https://i.pinimg.com/564x/2a/83/69/2a8369e773ca23497e5b3055882f684f.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="rounded-xl mt-3"
                  src="https://i.pinimg.com/564x/96/a9/f9/96a9f98dab31a3200f0d94f94a5e70c9.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="rounded-xl mt-3"
                  src="https://i.pinimg.com/564x/3d/e5/82/3de582172f942f83c3a7c7c1af8bdbea.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="rounded-xl mt-3"
                  src="https://i.pinimg.com/564x/39/28/0f/39280ffc58854ba66e8047f3a881c2aa.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="rounded-xl mt-3"
                  src="https://i.pinimg.com/564x/6d/4b/2f/6d4b2f2fea3f5a94acf033c3aca0ece1.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="rounded-xl mt-3"
                  src="https://i.pinimg.com/564x/47/12/5f/47125faf05b3cde96ac044e6abd1d3e9.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="rounded-xl mt-3"
                  src="https://i.pinimg.com/564x/47/12/5f/47125faf05b3cde96ac044e6abd1d3e9.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="rounded-xl mt-3"
                  src="https://i.pinimg.com/736x/d4/6c/0f/d46c0fda5dfd86c0bc2223282a88fab6.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="rounded-xl mt-3"
                  src="https://i.pinimg.com/564x/2a/83/69/2a8369e773ca23497e5b3055882f684f.jpg"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>{" "}
        </div>
        <div>
          <LikeComment />
        </div>
      </div>
      <div className="w-[70%] sm:w-[60%] md:w-[55%] lg:w-[40%] 2xl:w-[35%] mx-auto mb-20 mt-5">
        <div className="flex items-center mb-5 justify-between">
          <div className="flex items-center gap-2">
            <img
              className="w-[10%]"
              src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
              alt=""
            />
            <p>
              premierzal.tj <span className="text-gray-400">• 1 дн.</span>
            </p>
          </div>
          <MoreHorizIcon />
        </div>
        <div>
          <div className="h-[400px] sm:h-[500px] md:h-[650px] 2xl:h-[700px]">
            <Swiper
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  className="rounded-xl mt-3"
                  src="https://i.pinimg.com/564x/2a/83/69/2a8369e773ca23497e5b3055882f684f.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="rounded-xl mt-3"
                  src="https://i.pinimg.com/564x/96/a9/f9/96a9f98dab31a3200f0d94f94a5e70c9.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="rounded-xl mt-3"
                  src="https://i.pinimg.com/564x/3d/e5/82/3de582172f942f83c3a7c7c1af8bdbea.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="rounded-xl mt-3"
                  src="https://i.pinimg.com/564x/39/28/0f/39280ffc58854ba66e8047f3a881c2aa.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="rounded-xl mt-3"
                  src="https://i.pinimg.com/564x/6d/4b/2f/6d4b2f2fea3f5a94acf033c3aca0ece1.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="rounded-xl mt-3"
                  src="https://i.pinimg.com/564x/47/12/5f/47125faf05b3cde96ac044e6abd1d3e9.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="rounded-xl mt-3"
                  src="https://i.pinimg.com/564x/47/12/5f/47125faf05b3cde96ac044e6abd1d3e9.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="rounded-xl mt-3"
                  src="https://i.pinimg.com/736x/d4/6c/0f/d46c0fda5dfd86c0bc2223282a88fab6.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="rounded-xl mt-3"
                  src="https://i.pinimg.com/564x/2a/83/69/2a8369e773ca23497e5b3055882f684f.jpg"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>{" "}
        </div>
        <div>
          <LikeComment />
        </div>
      </div>
    </div>
  );
};

export default Home;
