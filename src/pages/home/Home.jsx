import React, { useCallback, useEffect, useState } from "react";
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
import { axiosRequest, getToken } from "../../utilities/axiosRequest";

const Home = () => {
  const PostImagesApi = "http://65.108.148.136:8085/images";
  const userIdApi = "http://65.108.148.136:8085/userId";
  const [post, setPost] = useState([]);
  const [userId, userUserId] = useState([]);
  const PostId = getToken()?.pid;
  const Userid = getToken()?.uid;
  const getPost = async () => {
    try {
      const { data } = await axiosRequest.get(`Post/get-posts?id=${PostId}`);
      console.log(data.data);
      setPost(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPost();
  }, []);
  const getUserId = async () => {
    try {
      const { data } = await axiosRequest.get(`User/get-users?id=${Userid}`);
      console.log(data.data);
      userUserId(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserId();
  }, []);

  const [more, setMore] = useState(false);
  useCallback;
  return (
    <div className="flex   w-[100%]  justify-center lg:justify-between">
      <div className="pb-20 md:w-[85%] lg:w-[60%]  w-[90%] ">
        <div className="w-[95%] md:w-[75%]  lg:w-[70%]  mx-auto  pt-10 ">
          <Swiper
            // spaceBetween={30}
            breakpoints={{
              300: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              540: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              724: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 25,
              },
              1224: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
              2024: {
                slidesPerView: 9,
                spaceBetween: 35,
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
        {/* {post.map((e) => {
          return (
            <div key={e.postId}>
              {e.images.map((e) => {
                return <img src={`${PostImagesApi}/${e}`} alt="img" />;
              })}
            </div>
          );
        })} */}
        {post.map((e) => {
          return (
            <div
              key={e.userId}
              className="w-[80%] sm:w-[75%] md:w-[70%]  2xl:w-[45%] mx-auto mb-20 mt-5"
            >
              <div className="flex items-center mb-2 justify-between">
                {userId.map((el) => {
                  if (el.id == e.userId) {
                    return (
                      <Link key={el.id} to={"/profile"}>
                        <div
                          className="flex items-center gap-2 "
                          onTouchMoveCapture={() => setProfileModal()}
                        >
                          <img
                            className="w-[10%]"
                            src="38f1a729-7d1b-407d-9368-7f39997c43b5.jpeg"
                            // src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                            alt=""
                          />
                          <p>
                            <Link to={"/profile"}>
                              {`${e.userName} /${e}`}{" "}
                            </Link>
                            <span className="text-gray-400 ml-2">• 1 дн.</span>
                          </p>
                        </div>
                      </Link>
                    );
                  }
                })}

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
                      {e.images.map((e) => {
                        return (
                          <SwiperSlide>
                            <img
                              className="rounded"
                              src={`${PostImagesApi}/${e}`}
                              alt="img"
                            />
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <div className="flex justify-between items-center">
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
                    </div>
                  </div>
                  <div className="w-[98%] mx-auto">
                    <p className="font-semibold">
                      {e.postLikeCount} отметок "Нравится"
                    </p>
                    <p>
                      <span className="font-semibold mr-2">premierzal.tj</span>
                      Производство Турция🇹🇷 под заказ доставка 7-12 дней цена
                      345с размер S M L XL XXL предоплата 50% #azizshopсвитер
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-[50%] hidden lg:block  pt-14 mr-20">
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
