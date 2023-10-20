import React, { useState } from "react";
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
import FYP from "./components/FYP";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
const Home = () => {
  const [more, setMore] = useState(false);
  return (
    <div className="flex  w-[100%]  justify-center lg:justify-between">
      <div className="pb-20 md:w-[75%]  ">
        <div className="w-[95%] md:w-[75%]  lg:w-[70%] 2xl:w-[65%]  mx-auto  pt-10 ">
          <Swiper
            // spaceBetween={30}
            breakpoints={{
              300: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 7,
                spaceBetween: 20,
              },
              2024: {
                slidesPerView: 9,
                spaceBetween: 20,
              },
            }}
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
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-[80%] sm:w-[75%] md:w-[70%]  2xl:w-[55%] mx-auto mb-20 mt-5">
          <div className="flex items-center mb-2 justify-between">
            <Link to={"/profile"}>
              <div className="flex items-center gap-2">
                <img
                  className="w-[10%]"
                  src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                  alt=""
                />
                <p>
                  <Link to={"/profile"}> premierzal.tj</Link>
                  <span className="text-gray-400 ml-2">• 1 дн.</span>
                </p>
              </div>
            </Link>
            <div
              className=""
              onClick={() => {
                setMore(true);
              }}
            >
              <IconButton>
                <MoreHorizIcon />
              </IconButton>
            </div>
          </div>
          <div>
            <div className="h-[500px] rounded-xl sm:h-[500px] md:h-[650px] 2xl:h-[700px]">
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
        <div className="w-[80%] sm:w-[75%] md:w-[70%]  2xl:w-[55%] mx-auto mb-20 mt-5">
          <div className="flex items-center mb-2 justify-between">
            <Link to={"/profile"}>
              <div className="flex items-center gap-2">
                <img
                  className="w-[10%]"
                  src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                  alt=""
                />
                <p>
                  <Link to={"/profile"}> premierzal.tj</Link>
                  <span className="text-gray-400 ml-2">• 1 дн.</span>
                </p>
              </div>
            </Link>
            <div
              className=""
              onClick={() => {
                setMore(true);
              }}
            >
              <IconButton>
                <MoreHorizIcon />
              </IconButton>
            </div>
          </div>
          <div>
            <div className="h-[500px] rounded-xl sm:h-[500px] md:h-[650px] 2xl:h-[700px]">
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
        <div className="w-[80%] sm:w-[75%] md:w-[70%]  2xl:w-[55%] mx-auto mb-20 mt-5">
          <div className="flex items-center mb-2 justify-between">
            <Link to={"/profile"}>
              <div className="flex items-center gap-2">
                <img
                  className="w-[10%]"
                  src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                  alt=""
                />
                <p>
                  <Link to={"/profile"}> premierzal.tj</Link>
                  <span className="text-gray-400 ml-2">• 1 дн.</span>
                </p>
              </div>
            </Link>
            <div
              className=""
              onClick={() => {
                setMore(true);
              }}
            >
              <IconButton>
                <MoreHorizIcon />
              </IconButton>
            </div>
          </div>
          <div>
            <div className="h-[500px] rounded-xl sm:h-[500px] md:h-[650px] 2xl:h-[700px]">
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
        <div className="w-[80%] sm:w-[75%] md:w-[70%]  2xl:w-[55%] mx-auto mb-20 mt-5">
          <div className="flex items-center mb-2 justify-between">
            <Link to={"/profile"}>
              <div className="flex items-center gap-2">
                <img
                  className="w-[10%]"
                  src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                  alt=""
                />
                <p>
                  <Link to={"/profile"}> premierzal.tj</Link>
                  <span className="text-gray-400 ml-2">• 1 дн.</span>
                </p>
              </div>
            </Link>
            <div
              className=""
              onClick={() => {
                setMore(true);
              }}
            >
              <IconButton>
                <MoreHorizIcon />
              </IconButton>
            </div>
          </div>
          <div>
            <div className="h-[500px] rounded-xl sm:h-[500px] md:h-[650px] 2xl:h-[700px]">
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
      <div className="w-[600%] hidden lg:block pt-14 mr-20">
        <div className="w-[100%] grid gap-5">
          <FYP />
          <p className="flex gap-8 w-[90%] mx-auto">
            Рекомендации для вас <span className="">Все</span>{" "}
          </p>
          <FYP></FYP>
          <FYP />
          <FYP />
          <FYP />
        </div>
        <div className="text-xs text-gray-300 mt-10 leading-6 selection:first-letter:">
          <p>
            Информация Помощь Пресса API Вакансии Конфиденциальность Условия
            Места Язык Meta Verified © 2023 INSTAGRAM FROM META
          </p>
        </div>
      </div>
      {more ? (
        <div
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
          className="fixed  top-0 left-0 w-[100%] z-10 h-[100vh] grid"
        >
          <div className="grid  modal-content rounded-2xl">
            <button className="hover:bg-gray-300 text-red-600 font-bold rounded-2xl p-5">
              Пожаловаться
            </button>
            <button className="hover:bg-gray-300 text-red-500 font-semibold  p-5">
              Отменить подписку
            </button>
            <button className="hover:bg-gray-300  p-5">
              Добавить в избранное
            </button>
            <button className="hover:bg-gray-300  p-5">Поделиться…</button>
            <button className="hover:bg-gray-300  p-5">
              Копировать ссылку
            </button>
            <button className="hover:bg-gray-300  p-5">Об аккаунте</button>
            <button
              className="hover:bg-gray-300  p-5 rounded-2xl"
              onClick={() => {
                setMore(false);
              }}
            >
              Отмена
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
