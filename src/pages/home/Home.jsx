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
  // const LikePostApi = "http://65.108.148.136:8085/Post/like-Post?id";

  const [post, setPost] = useState([]);
  const [postById, setPostById] = useState([]);
  const [postComments, setPostComments] = useState([]);
  const [idx, setIdx] = useState(null); // const [postFavorites, setPostFavorites] = useState([]);
  const [userId, userUserId] = useState([]);
  const [commentModal, setCommentModal] = useState(false);
  const PostId = getToken()?.pid;
  const Userid = getToken()?.uid;
  const getPost = async () => {
    try {
      const { data } = await axiosRequest.get(`Post/get-posts`);

      setPost(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteComment = async (id) => {
    console.log(id);
    try {
      const { data } = await axiosRequest.delete(
        `Post/delete_comment?commentId=${id}`
      );
      setPostById(data.data);
    } catch (error) {}
  };
  const getPostById = async (id) => {
    try {
      const { data } = await axiosRequest.get(`Post/get-post-by-id?id=${id}`);
      setPostById(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getPostComments = async () => {
    try {
      const { data } = await axiosRequest.get(`Post/get-post-comments`);
      setPostComments(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
    // getPostById();
  }, []);
  const PostLike = async (id) => {
    try {
      const { data } = await axiosRequest.post(`Post/like-Post?postId=${id}`);
      getPost(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const PostFavorites = async (id) => {
    try {
      const { data } = await axiosRequest.post(`Post/add-PostFavorite=${id}`);
      getPost(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const getUserId = async () => {
    try {
      const { data } = await axiosRequest.get(`User/get-users?id`);
      userUserId(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserId();
  }, []);

  const [more, setMore] = useState(false);
  return (
    <div className="flex  dark:text-white  w-[100%]  justify-center lg:justify-between">
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
          </Swiper>
        </div>

        {post.map((e) => {
          return (
            <div
              key={e.userId}
              className="w-[80%] border-b pb-5 mb-5 dark:bg-black sm:w-[75%] md:w-[70%]  2xl:w-[60%] mx-auto mt-5"
            >
              <div className="flex items-center mb-2 justify-between">
                {userId.map((el) => {
                  if (el.id == e.userId) {
                    return (
                      <Link key={el.id} className="w-[50%]" to={"/profile"}>
                        <div
                          className="flex items-center gap-2 "
                          onTouchMoveCapture={() => setProfileModal()}
                        >
                          {/* <img
                            className="w-[10%]"
                            src="38f1a729-7d1b-407d-9368-7f39997c43b5.jpeg"
                            // src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                            alt=""
                          /> */}
                          <img
                            src={`${import.meta.env.VITE_APP_FILES_URL}${
                              el.avatar
                            }`}
                            className="w-[18%] rounded-full"
                            alt=""
                          />
                          <p>
                            <Link
                              className="font-semibold"
                              to={"/home/profile"}
                            >{`${el.userName}`}</Link>
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
                      {e.images.map((ell) => {
                        return (
                          <SwiperSlide className="dark:bg-black">
                            <img
                              onDoubleClick={() => {
                                PostLike(e.postId);
                              }}
                              className="rounded dark:bg-black"
                              src={`${PostImagesApi}/${ell}`}
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
                      <IconButton
                        className=""
                        onClick={() => {
                          PostLike(e.postId); // Toggle the value
                        }}
                      >
                        {/* {console.log(e.postFavorite)} */}
                        {e.postLike ? (
                          <span className="x1ykxiw6 x1ahuga x4hg4is x3oybdh">
                            <svg
                              ariaLabel="Не нравится"
                              className="x1lliihq x1n2onr6 xxk16z8 "
                              fill="red"
                              height="24"
                              role="img"
                              viewBox="0 0 48 48"
                              width="24"
                            >
                              <title>Не нравится</title>
                              <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                            </svg>
                          </span>
                        ) : (
                          <svg
                            ariaLabel="Нравится"
                            className="x1lliihq x1n2onr6 xxk16z8 dark:text-white"
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
                        )}
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          getPostById(e.postId);
                          setCommentModal(true);
                          getPostComments();
                        }}
                      >
                        <svg
                          ariaLabel="Комментировать"
                          className="x1lliihq x1n2onr6 dark:text-white"
                          color="rgb(38, 38, 38)"
                          fill="rgb(38, 38, 38)"
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
                            strokeLinejoin="round"
                            strokeWidth="2"
                          ></path>
                        </svg>
                      </IconButton>
                      <IconButton>
                        <svg
                          ariaLabel="Поделиться публикацией"
                          className="x1lliihq x1n2onr6 dark:text-white"
                          color="rgb(38, 38, 38)"
                          fill="rgb(38, 38, 38)"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <title>Поделиться публикацией</title>
                          <line
                            fill="none"
                            stroke="currentColor"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            x1="22"
                            x2="9.218"
                            y1="3"
                            y2="10.083"
                          ></line>
                          <polygon
                            fill="none"
                            points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                            stroke="currentColor"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          ></polygon>
                        </svg>
                      </IconButton>
                    </div>
                    <div>
                      <IconButton
                        onClick={() => {
                          PostFavorites(e.postFavorite);
                        }}
                      >
                        {e.postFavorite ? (
                          <svg
                            ariaLabel="Сохранить"
                            className="x1lliihq x1n2onr6"
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
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            ></polygon>
                          </svg>
                        ) : (
                          <svg
                            ariaLabel="Удалить"
                            class="x1lliihq x1n2onr6 x5n08af"
                            fill="currentColor"
                            height="24"
                            role="img"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <title>Удалить</title>
                            <path d="M20 22a.999.999 0 0 1-.687-.273L12 14.815l-7.313 6.912A1 1 0 0 1 3 21V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Z"></path>
                          </svg>
                        )}
                      </IconButton>
                    </div>
                  </div>
                  <div className="w-[98%] mx-auto">
                    {userId.map((el) => {
                      if (el.id == e.userId) {
                        return (
                          <>
                            <p className="font-semibold ">
                              {e.postLikeCount < 0
                                ? e.postLikeCount * -1
                                : e.postLikeCount}
                              <span className="mx-[3px]"></span>
                              отметок "Нравится"
                            </p>
                            <p>
                              <span className="font-semibold  mr-2">{`${el.userName}`}</span>
                              {e.title}
                              <br />
                              {e.content}
                            </p>
                          </>
                        );
                      }
                    })}
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
          className="fixed  top-0 left-0 w-[100%] z-50 pt-10 h-[100vh] grid"
        >
          <div className="grid  modal-content rounded-2xl">
            <button className="hover:bg-gray-300 text-red-600 font-bold rounded-2xl p-5">
              Пожаловаться
            </button>
            <button
              onClick={() => {
                deleteComment(idx);
                setMore(false);
              }}
              className="hover:bg-gray-300 text-red-600 font-bold  p-5"
            >
              Delete
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
      {commentModal ? (
        <div
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
          className="fixed  top-0 left-0 w-[100%] z-10 h-[100vh] grid"
        >
          <span
            onClick={() => {
              setCommentModal(false);
            }}
            className="text-gray-200 cursor-pointer justify-self-end text-4xl mr-3"
          >
            &times;
          </span>
          <div className=" w-[1200px]  modal-content">
            <div className="grid h-[620px]  bg-black grid-cols-[1.3fr,1fr]">
              <div className="self-center ">
                <img
                  src={`${import.meta.env.VITE_APP_FILES_URL}${
                    postById.images
                  }`}
                  className=" self-center items-center w-auto"
                  alt=""
                />
              </div>

              <div className="py-3  px-3 bg-white">
                <div className="top flex justify-between items-center">
                  <span className=" ">
                    {userId.map((e) => {
                      if (postById.userId == e.id) {
                        return (
                          <div className="flex items-center gap-4 ">
                            <img
                              src={`${import.meta.env.VITE_APP_FILES_URL}${
                                e.avatar
                              }`}
                              className="w-[13%] rounded-full"
                              alt=""
                            />
                            <span className="text-md font-semibold">
                              {e.userName}
                            </span>
                          </div>
                        );
                      }
                    })}
                  </span>
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
                <div className="overflow-auto h-[450px]  grid gap-5 px-10 py-10">
                  {/* {post.map((e) => {
                    return (
                      <div className=" ">
                        <div className="">
                          {userId.map((el) => {
                            if (el.id == e.userId) {
                              return (
                                <div className="grid grid-cols-[3fr,1fr]">
                                  <Link
                                    key={el.id}
                                    className="w-[50%]"
                                    to={"/profile"}
                                  >
                                    <div
                                      className="flex items-center gap-2 "
                                      onTouchMoveCapture={() =>
                                        setProfileModal()
                                      }
                                    >
                                      <img
                                        src={`${
                                          import.meta.env.VITE_APP_FILES_URL
                                        }${el.avatar}`}
                                        className="w-[15%]  rounded-full"
                                        alt=""
                                      />
                                      <p>
                                        <Link
                                          className="font-semibold"
                                          to={"/home/profile"}
                                        >{`${el.userName}`}</Link>
                                        <span className="text-gray-400 ml-2">
                                          • 1 дн.
                                        </span>
                                      </p>
                                    </div>
                                  </Link>
                                  <div>
                                    {e.comments.map((e) => {
                                      if (e.comment.trim().length == 0) {
                                        return null;
                                      } else {
                                        return <div>{e.comment}</div>;
                                      }
                                    })}
                                  </div>
                                </div>
                              );
                            }
                          })}
                        </div>
                      </div>
                    );
                  })} */}
                  {postComments.map((e) => {
                    console.log(e);
                    return (
                      <>
                        <div className="flex flex-wrap items-center">
                          <div className="w-[45%]">
                            {userId.map((el) => {
                              if (e.userId == el.id) {
                                return (
                                  <div>
                                    <Link
                                      key={el.id}
                                      className="w-[10%]"
                                      to={"/profile"}
                                    >
                                      <div
                                        className="flex items-center gap-2 "
                                        onTouchMoveCapture={() =>
                                          setProfileModal()
                                        }
                                      >
                                        <img
                                          src={`${
                                            import.meta.env.VITE_APP_FILES_URL
                                          }${el.avatar}`}
                                          className="w-[14%] rounded-full"
                                          alt=""
                                        />
                                        <p>
                                          <Link
                                            className="font-semibold"
                                            to={"/home/profile"}
                                          >{`${el.userName}`}</Link>
                                          <span className="text-gray-400 ml-2">
                                            • 1 дн.
                                          </span>
                                        </p>
                                      </div>
                                    </Link>
                                  </div>
                                );
                              }
                              return;
                            })}
                          </div>
                          <div>{e.comment}</div>

                          <div
                            className=""
                            onClick={() => {
                              setMore(true), setIdx(e.postCommentId);
                            }}
                          >
                            <IconButton>
                              <MoreHorizIcon />
                            </IconButton>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <div>
                      <IconButton
                        className=""
                        onClick={() => {
                          PostLike(postById.postId); // Toggle the value
                        }}
                      >
                        {postById.postLike ? (
                          <span className="x1ykxiw6 x1ahuga x4hg4is x3oybdh">
                            <svg
                              aria-label="Не нравится"
                              className="x1lliihq x1n2onr6 xxk16z8 "
                              fill="red"
                              height="24"
                              role="img"
                              viewBox="0 0 48 48"
                              width="24"
                            >
                              <title>Не нравится</title>
                              <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                            </svg>
                          </span>
                        ) : (
                          <svg
                            aria-label="Нравится"
                            className="x1lliihq x1n2onr6 xxk16z8 dark:text-white"
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
                        )}
                      </IconButton>
                      <IconButton onClick={() => {}}>
                        <svg
                          aria-label="Комментировать"
                          className="x1lliihq x1n2onr6 dark:text-white"
                          color="rgb(38, 38, 38)"
                          fill="rgb(38, 38, 38)"
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
                          ariaLabel="Поделиться публикацией"
                          className="x1lliihq x1n2onr6 dark:text-white"
                          color="rgb(38, 38, 38)"
                          fill="rgb(38, 38, 38)"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <title>Поделиться публикацией</title>
                          <line
                            fill="none"
                            stroke="currentColor"
                            strokeLinejoin="round"
                            strokeWidth="2"
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
                      <IconButton
                        onClick={() => {
                          PostFavorites(e.postFavorite);
                        }}
                      >
                        {postById?.postFavorite ? (
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
                        ) : (
                          <svg
                            aria-label="Удалить"
                            class="x1lliihq x1n2onr6 x5n08af"
                            fill="currentColor"
                            height="24"
                            role="img"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <title>Удалить</title>
                            <path d="M20 22a.999.999 0 0 1-.687-.273L12 14.815l-7.313 6.912A1 1 0 0 1 3 21V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Z"></path>
                          </svg>
                        )}
                      </IconButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
