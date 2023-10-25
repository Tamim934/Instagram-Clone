
import React, { useEffect, useState } from 'react'

import OceanWave from '../../assets/ReelsImg/userIcon.png'
import userIcon from '../../assets/ReelsImg/userIcon.png'
import userIconMain from '../../assets/ReelsImg/usericon.webp'
import { axiosRequest } from '../../utilities/axiosRequest'

const Reels = () => {

  const [commentModal, setCommentModal] = useState([])
  // getReel 
  const [reel, setReel] = useState([])
  const [sendModal, setSendModal] = useState(false)
  const [settingsModal, setSettingsModal] = useState(false)
  const [like, setLike] = useState(false)

  // getComment 
  const [commentory, setCommentory] = useState([])

  //getUsers
  const [users, setUsers] = useState([])

  // getReel 
  const getReels = async () => {
    try {
      const { data } = await axiosRequest.get("Post/get-posts")
      // console.log(data);
      setReel(data.data)
    } catch (error) {
      console.error(error);
    }
  }

  // like 
  const likePost = async (id) => {
    try {
      const { data } = await axiosRequest.post(`Post/like-Post?postId=${id}`)
      getReels(data.data)
      setLike(true)
    } catch (error) {
    }
  }

  // comment 
  const getPostById = async (id) => {
    try {
      const { data } = await axiosRequest.get(`Post/get-post-by-id?id=${id}`)
      setCommentory(data.errors)
      console.log(data.errors)
      // console.log(data.data);
    } catch (error) {

    }
  }

  //getUser
  const getUser = async (id) => {
    try {
      const { data } = await axiosRequest.get("/User/get-users")
      // console.log(data.data);
      setUsers(data.data)
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    getReels()
    getPostById()
    getUser()
  }, [])

  return (
    <>
      <div className='text-[#fff] w-[33%] mx-auto pt-[35px] '>


        {

          reel.map((e) => {
            return (
              <div className="w-full h-[87vh]  rounded-[20px] flex items-end gap-[0px] mb-[40px] bg-[]">
                <div className="w-[85%] md:rounded-[6px] overflow-hidden bg-black h-[100%] flex items-center" style={{ boxShadow: "0 0 40px 0 #535252" }}>
                  <img onDoubleClick={() => likePost(e.postId)} className='mx-auto' src={`${import.meta.env.VITE_APP_FILES_URL}${e.images[0]}`} alt="" />
                </div>
                <div className="w-[15%] flex flex-col items-center text-center">
                  <div onClick={() => likePost(e.postId)} className="mb-[15px]">
                    {

                      e.postLike ?
                        // (e.postLikeCount-(1))*(-1)
                        e.postLikeCount < 0 ? e.postLikeCount*(-1)+1: e.postLikeCount+1
                        &&
                        <svg aria-label="Нравится" className='cursor-pointer' class="x1lliihq x1n2onr6" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Нравится</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                        :
                        <svg aria-label="Не нравится" className='cursor-pointer' class="x1lliihq x1n2onr6" color="rgb(255, 48, 64)" fill="rgb(255, 48, 64)" height="24" role="img" viewBox="0 0 48 48" width="24"><title>Не нравится</title><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                    }
                    <p className='text-[12px]'>{e.postLikeCount}</p>
                  </div>
                  <div onClick={() => setCommentModal(true)} className="mb-[15px]">
                    <svg aria-label="Комментировать" class="x1lliihq x1n2onr6" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Комментировать</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                    <p className='text-[12px]'>191</p>
                  </div>
                  <div onClick={() => setSendModal(true)} className="mb-[15px]">
                    <svg aria-label="Отправить в сообщении" class="x1lliihq x1n2onr6" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Отправить в сообщении</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                  </div>
                  <div className="mb-[25px]">
                    <svg aria-label="Сохранить" class="x1lliihq x1n2onr6" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Сохранить</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                    {/* <svg aria-label="Удалить" class="x1lliihq x1n2onr6" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Удалить</title><path d="M20 22a.999.999 0 0 1-.687-.273L12 14.815l-7.313 6.912A1 1 0 0 1 3 21V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Z"></path></svg> */}
                  </div>
                  <div onClick={() => setSettingsModal(true)} className="mb-[25px]">
                    <svg aria-label="Ещё" class="x1lliihq x1n2onr6" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Ещё</title><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                  </div>
                  <div className="overflow-hidden w-[50%]">
                    <img src={userIcon} alt="" style={{ width: '30px', height: '30px', borderRadius: '3px' }} />
                  </div>
                </div>

              </div>
            )
          })


        }




        {
          commentModal?
            <div className="bg-[#201f1f] fixed top-[80px] right-[80px] w-[22%] rounded-[7px]">
              <div className="flex items-center gap-[50px] py-[24px] px-[24px]">
                <svg onClick={() => setCommentModal(false)} aria-label="Закрыть" class="x1lliihq x1n2onr6" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="16" role="img" viewBox="0 0 24 24" width="16"><title>Закрыть</title><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="21" y2="3"></line></svg>
                <p className='font-[600]'>Коментарии</p>
              </div>
              <div className="h-[230px] p-[12px] overflow-scroll">
                {
                  commentory.map((e) => {
                    return (
                      <div className="">
                        {
                          users.map((e) => {
                            return (
                              e.avatar == null || e.avatar == ""?
                              <img className='w-[40px] h-[40px] rounded-[50%]' src={userIconMain} alt="!profile" />:
                              <img className='w-[40px] h-[40px] rounded-[50%]' src={`${import.meta.env.VITE_APP_FILES_URL}${e.avatar}`} alt="p" />             
                            )
                          })
                        }
                        <div className="">

                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div className="w-[86%] mx-auto py-[15px]">
                <input type="text" className='w-full h-[35px] pl-[20px] rounded-[20px] bg-[#000] border-[1px] border-[#fff]' />
              </div>
            </div> : null
        }
        {
          sendModal ?
            <div className="bg-[#201f1f] fixed top-[80px] right-[80px] w-[22%] rounded-[7px]">
              <div className="flex items-center gap-[50px] py-[24px] px-[24px]">
                <svg onClick={() => setSendModal(false)} aria-label="Закрыть" class="x1lliihq x1n2onr6" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="16" role="img" viewBox="0 0 24 24" width="16"><title>Закрыть</title><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="21" y2="3"></line></svg>
                <p className='font-[600]'>Поделиться</p>
              </div>
              <div className="h-[230px] overflow-auto">

              </div>
              <div className="w-[86%] mx-auto py-[15px]">
                {/* <input type="text" className='w-full h-[35px] pl-[20px]  border-[1px] border-[#fff]'/> */}
                <button className='w-full h-[35px] rounded-[7px] bg-[#3b88b8] text-[#fff]'>Отправить</button>
              </div>
            </div> : null
        }
        {
          settingsModal ?
            <div className="bg-[#201f1f] fixed top-[220px] right-[140px] w-[19%] rounded-[7px] p-[.4%]">
              <div className='transition-all duration-[.3s] hover:bg-[#313030] rounded-[10px] cursor-pointer mx-auto h-[46px] pl-[20px] font-[600] flex items-center justify-between text-[#ae3b3b]'>Пожаловаться <span onClick={() => setSettingsModal(false)} className='text-[#888] pr-[20px]'>X</span></div>
              <div className='transition-all duration-[.3s] hover:bg-[#313030] rounded-[10px] cursor-pointer mx-auto h-[46px] pl-[20px] font-[600] flex items-center text-[#5a74da]'>Подписаться</div>
              <div className='transition-all duration-[.3s] hover:bg-[#313030] rounded-[10px] cursor-pointer mx-auto h-[46px] pl-[20px] font-[600] flex items-center'>Перейти к публикации</div>
              <div className='transition-all duration-[.3s] hover:bg-[#313030] rounded-[10px] cursor-pointer mx-auto h-[46px] pl-[20px] font-[600] flex items-center'>Поделиться...</div>
              <div className='transition-all duration-[.3s] hover:bg-[#313030] rounded-[10px] cursor-pointer mx-auto h-[46px] pl-[20px] font-[600] flex items-center'>Копировать ссылку</div>
              <div className='transition-all duration-[.3s] hover:bg-[#313030] rounded-[10px] cursor-pointer mx-auto h-[46px] pl-[20px] font-[600] flex items-center'>Вставить на сайт</div>
              <div className='transition-all duration-[.3s] hover:bg-[#313030] rounded-[10px] cursor-pointer mx-auto h-[46px] pl-[20px] font-[600] flex items-center'>Об аккаунте</div>
            </div> : null
        }
      </div>
    </>
  )


}

export default Reels