import React from 'react'
import { Box, IconButton, Modal } from '@mui/material';
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";




const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  pb: 3,
};






const Messages = () => {


   const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
     setOpen(true);
   };

   const handleClose = () => {
     setOpen(false);
   };

  const [open2, setOpen2] = React.useState(false);

  

  const handleOpen2 = () => { 
    setOpen2(true);
  }

  const handleClose2 = () => {
    setOpen2(false);
  };
  



  return (
    <div className="flex justify-end">
      <div className="w-[100%] flex justify-center">
        <div className="lg:w-[36%] border-[1px]">
          <div className="sticky z-[1] ">
            <div className="flex items-center justify-between lg:px-[30px] py-[17px] pt-[32px]">
              <h1 className="text-[24px] font-bold hidden xl:block">
                muhammadsurur__
              </h1>
              <div className="flex justify-center m-auto">
                <div className="m-auto">
                  <button onClick={handleOpen2}>
                    <IconButton>
                      <svg
                        aria-label="Новое сообщение"
                        class="x1lliihq x1n2onr6"
                        color="rgb(0, 0, 0)"
                        fill="rgb(0, 0, 0)"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <title>Новое сообщение</title>
                        <path
                          d="M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></path>
                        <path
                          d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></path>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="16.848"
                          x2="20.076"
                          y1="3.924"
                          y2="7.153"
                        ></line>
                      </svg>
                    </IconButton>
                  </button>
                  <Modal
                    open={open2}
                    onClose={handleClose2}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                    sx={{ marginLeft: "auto" }}
                  >
                    <Box
                      sx={{
                        ...style,
                        width: "60%",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      <div className="flex items-center py-[25px] justify-between px-[80px]">
                        <h1 className="text-[24px] font-medium items-center">
                          Новое сообщение
                        </h1>
                        <div
                          className="flex justify-end"
                          onClick={() => handleClose2()}
                        >
                          <svg
                            aria-label="Закрыть"
                            class="x1lliihq x1n2onr6"
                            color="rgb(0, 0, 0)"
                            fill="rgb(0, 0, 0)"
                            height="18"
                            role="img"
                            viewBox="0 0 24 24"
                            width="18"
                          >
                            <title>Закрыть</title>
                            <polyline
                              fill="none"
                              points="20.643 3.357 12 12 3.353 20.647"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="3"
                            ></polyline>
                            <line
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="3"
                              x1="20.649"
                              x2="3.354"
                              y1="20.649"
                              y2="3.354"
                            ></line>
                          </svg>
                        </div>
                      </div>
                      <div className="flex gap-[16px] border-y-[1px] w-[100%] px-[20px] py-[5px]">
                        <h1 className="text-[20px] font-medium">Кому:</h1>
                        <input
                          className="w-[60%] lg:w-[95%] outline-none text-[20px] font-medium"
                          type="search"
                          placeholder="Поиск...."
                        />
                      </div>
                      <div className="px-[30px] py-[40px]">
                        <h1>Аккаунты не найдены.</h1>
                      </div>
                      <div className=" w-[94%] m-auto">
                        <button className="bg-[#A7D1EC] text-[white] w-[100%] py-[10px] rounded-[10px] m-auto">
                          Чат
                        </button>
                      </div>
                    </Box>
                  </Modal>
                </div>
              </div>
            </div>
            <div className="md:flex justify-between md:px-[30px] hidden md:block">
              <h1 className="text-[18px] font-bold">Сообщения</h1>
              <h1 className="text-[#969696] font-medium">Запросы</h1>
            </div>
          </div>
          <div className="mt-[10px] h-[85vh]" style={{ overflow: "auto" }}>
            <div className="flex gap-[10px] py-[10px] hover:bg-[#e2e2e2] items-center px-[10px] lg:px-[30px]">
              <img
                className="w-[80px] rounded-[50%]"
                src="https://scontent.cdninstagram.com/v/t51.2885-19/387247467_1024024805300116_8441586804864033304_n.jpg?stp=dst-jpg_s100x100&amp;_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=c4dd86&amp;_nc_ohc=kIQ1hws3QLQAX8DO6Mo&amp;_nc_ad=z-m&amp;_nc_cid=0&amp;_nc_ht=scontent.cdninstagram.com&amp;oh=00_AfC1YHW82jycw3AOYCkj1698XL3EzLv07nkRgfKc6A7RVA&amp;oe=6536223D"
                alt=""
              />
              <div className="hidden md:block">
                <h1 className="text-[19px] font-nornal">Mirzozoda Mirzoali</h1>
                <p className="text-[#909090]">Вы: parto instagramta:18 ч.</p>
              </div>
            </div>
            <div className="flex gap-[10px] py-[10px] hover:bg-[#e2e2e2] items-center px-[10px] lg:px-[30px]">
              <img
                className="w-[80px] "
                src="src/pages/Messageicons/icon-256x256.png"
                alt=""
              />
              <div className="hidden md:block">
                <h1 className=" xl:text-[19px] font-nornal">
                  muhammadsurur
                </h1>
                <p className="text-[#909090]">Вы: parto instagramta:18 ч.</p>
              </div>
            </div>
            <div className="flex gap-[10px] py-[10px] hover:bg-[#e2e2e2] items-center px-[10px] lg:px-[30px]">
              <img
                className="w-[80px] "
                src="src/pages/Messageicons/icon-256x256.png"
                alt=""
              />
              <div className="hidden md:block">
                <h1 className="text-[19px] font-nornal">Samaridin Zuhurov</h1>
                <p className="text-[#909090]">Вы: parto instagramta:18 ч.</p>
              </div>
            </div>
            <div className="flex gap-[10px] py-[10px] hover:bg-[#e2e2e2] items-center px-[10px] lg:px-[30px]">
              <img
                className="w-[80px] "
                src="src/pages/Messageicons/icon-256x256.png"
                alt=""
              />
              <div className="hidden md:block">
                <h1 className="text-[19px] font-nornal">Ahmad Tamim</h1>
                <p className="text-[#909090]">Вы: parto instagramta:18 ч.</p>
              </div>
            </div>
            <div className="flex gap-[10px] py-[10px] hover:bg-[#e2e2e2] items-center px-[10px] lg:px-[30px]">
              <img
                className="w-[80px] "
                src="src/pages/Messageicons/icon-256x256.png"
                alt=""
              />
              <div className="hidden md:block">
                <h1 className="text-[19px] font-nornal">AUK8</h1>
                <p className="text-[#909090]">Вы: parto instagramta:18 ч.</p>
              </div>
            </div>
            <div className="flex gap-[10px] py-[10px] hover:bg-[#e2e2e2] items-center px-[10px] lg:px-[30px]">
              <img
                className="w-[80px] "
                src="src/pages/Messageicons/icon-256x256.png"
                alt=""
              />
              <div className="hidden md:block">
                <h1 className="text-[19px] font-nornal">Mirzozoda Mirzoali</h1>
                <p className="text-[#909090]">Вы: parto instagramta:18 ч.</p>
              </div>
            </div>
            <div className="flex gap-[10px] py-[10px] hover:bg-[#e2e2e2] items-center px-[10px] lg:px-[30px]">
              <img
                className="w-[80px] "
                src="src/pages/Messageicons/icon-256x256.png"
                alt=""
              />
              <div className="hidden md:block">
                <h1 className="text-[19px] font-nornal">Mirzozoda Mirzoali</h1>
                <p className="text-[#909090]">Вы: parto instagramta:18 ч.</p>
              </div>
            </div>
            <div className="flex gap-[10px] py-[10px] hover:bg-[#e2e2e2] items-center px-[10px] lg:px-[30px]">
              <img
                className="w-[80px] "
                src="src/pages/Messageicons/icon-256x256.png"
                alt=""
              />
              <div className="hidden md:block">
                <h1 className="text-[19px] font-nornal">Alisher Murodov</h1>
                <p className="text-[#909090]">Вы: parto instagramta:18 ч.</p>
              </div>
            </div>
            <div className="flex gap-[10px] py-[10px] hover:bg-[#e2e2e2] items-center px-[10px] lg:px-[30px]">
              <img
                className="w-[80px] "
                src="src/pages/Messageicons/icon-256x256.png"
                alt=""
              />
              <div className="hidden md:block">
                <h1 className="text-[19px] font-nornal">Mirzozoda Mirzoali</h1>
                <p className="text-[#909090]">Вы: parto instagramta:18 ч.</p>
              </div>
            </div>
            <div className="flex gap-[10px] py-[10px] hover:bg-[#e2e2e2] items-center px-[10px] lg:px-[30px]">
              <img
                className="w-[80px] "
                src="src/pages/Messageicons/icon-256x256.png"
                alt=""
              />
              <div className="hidden md:block">
                <h1 className="text-[19px] font-nornal">Shahrom habula</h1>
                <p className="text-[#909090]">Вы: parto instagramta:18 ч.</p>
              </div>
            </div>
            <div className="flex gap-[10px] py-[10px] hover:bg-[#e2e2e2] items-center px-[10px] lg:px-[30px]">
              <img
                className="w-[80px] "
                src="src/pages/Messageicons/icon-256x256.png"
                alt=""
              />
              <div className="hidden md:block">
                <h1 className="text-[19px] font-nornal">nek_xxl</h1>
                <p className="text-[#909090]">Вы: parto instagramta:18 ч.</p>
              </div>
            </div>
            <div className="flex gap-[10px] py-[10px] hover:bg-[#e2e2e2]  items-center px-[10px] lg:px-[30px]">
              <img
                className="w-[80px] "
                src="src/pages/Messageicons/icon-256x256.png"
                alt=""
              />
              <div className="hidden md:block">
                <h1 className="text-[19px] font-nornal">Mirzozoda Mirzoali</h1>
                <p className="text-[#909090]">Вы: parto instagramta:18 ч.</p>
              </div>
            </div>
            <div className="flex gap-[10px] py-[10px] hover:bg-[#e2e2e2]  items-center px-[10px] lg:px-[30px]">
              <img
                className="w-[80px] "
                src="src/pages/Messageicons/icon-256x256.png"
                alt=""
              />
              <div className="hidden md:block">
                <h1 className="text-[19px] font-nornal">Baron.tjk</h1>
                <p className="text-[#909090]">Вы: parto instagramta:18 ч.</p>
              </div>
            </div>
            <div className="flex gap-[10px] py-[10px] hover:bg-[#e2e2e2]  items-center px-[10px] lg:px-[30px]">
              <img
                className="w-[80px] "
                src="src/pages/Messageicons/icon-256x256.png"
                alt=""
              />
              <div className="hidden md:block">
                <h1 className="text-[19px] font-nornal">Mirzozoda Mirzoali</h1>
                <p className="text-[#909090]">Вы: parto instagramta:18 ч.</p>
              </div>
            </div>
            <div className="flex gap-[10px] py-[10px] hover:bg-[#e2e2e2]  items-center px-[10px] lg:px-[30px]">
              <img
                className="w-[80px] "
                src="src/pages/Messageicons/icon-256x256.png"
                alt=""
              />
              <div className="hidden md:block">
                <h1 className="text-[19px] font-nornal">Sahiuolh Muhammadi</h1>
                <p className="text-[#909090]">Вы: parto instagramta:18 ч.</p>
              </div>
            </div>
            <div className="flex gap-[10px] py-[10px] hover:bg-[#e2e2e2]  items-center px-[10px] lg:px-[30px]">
              <img
                className="w-[80px] rounded-[50%]"
                src="src/pages/Messageicons/icon-256x256.png"
                alt=""
              />
              <div className="hidden md:block">
                <h1 className="text-[19px] font-nornal">Golib_show</h1>
                <p className="text-[#909090]">Вы: parto instagramta:18 ч.</p>
              </div>
            </div>
            <div className="flex gap-[10px] py-[10px] hover:bg-[#e2e2e2]  items-center px-[10px] lg:px-[30px]">
              <img
                className="w-[80px] "
                src="src/pages/Messageicons/icon-256x256.png"
                alt=""
              />
              <div className="hidden md:block">
                <h1 className="text-[19px] font-nornal">Shavkat_06</h1>
                <p className="text-[#909090]">Вы: parto instagramta:18 ч.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] md:w-[70%] lg:w-[69%] ">
          <div className="flex items-center border-[1px] justify-between px-[20px] sticky z-[1] ">
            <div className=" py-[20px] flex items-center gap-[15px] text-[20px] font-semibold">
              <img
                className="w-[60px] rounded-[50%]"
                src="https://scontent.cdninstagram.com/v/t51.2885-19/387247467_1024024805300116_8441586804864033304_n.jpg?stp=dst-jpg_s100x100&amp;_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=c4dd86&amp;_nc_ohc=kIQ1hws3QLQAX8DO6Mo&amp;_nc_ad=z-m&amp;_nc_cid=0&amp;_nc_ht=scontent.cdninstagram.com&amp;oh=00_AfC1YHW82jycw3AOYCkj1698XL3EzLv07nkRgfKc6A7RVA&amp;oe=6536223D"
                alt=""
              />
              <h1 className="lg:flex gap-[10px] hidden lg:block">
                Mirzozoda <span className="hidden lg:block"> Mirzoali</span>
              </h1>
            </div>
            <div className="flex items-center lg:gap-[20px]">
              <IconButton>
                <svg
                  aria-label="Голосовой вызов"
                  class="x1lliihq x1n2onr6"
                  color="rgb(0, 0, 0)"
                  fill="rgb(0, 0, 0)"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>Голосовой вызов</title>
                  <path d="M18.227 22.912c-4.913 0-9.286-3.627-11.486-5.828C4.486 14.83.731 10.291.921 5.231a3.289 3.289 0 0 1 .908-2.138 17.116 17.116 0 0 1 1.865-1.71 2.307 2.307 0 0 1 3.004.174 13.283 13.283 0 0 1 3.658 5.325 2.551 2.551 0 0 1-.19 1.941l-.455.853a.463.463 0 0 0-.024.387 7.57 7.57 0 0 0 4.077 4.075.455.455 0 0 0 .386-.024l.853-.455a2.548 2.548 0 0 1 1.94-.19 13.278 13.278 0 0 1 5.326 3.658 2.309 2.309 0 0 1 .174 3.003 17.319 17.319 0 0 1-1.71 1.866 3.29 3.29 0 0 1-2.138.91 10.27 10.27 0 0 1-.368.006Zm-13.144-20a.27.27 0 0 0-.167.054A15.121 15.121 0 0 0 3.28 4.47a1.289 1.289 0 0 0-.36.836c-.161 4.301 3.21 8.34 5.235 10.364s6.06 5.403 10.366 5.236a1.284 1.284 0 0 0 .835-.36 15.217 15.217 0 0 0 1.504-1.637.324.324 0 0 0-.047-.41 11.62 11.62 0 0 0-4.457-3.119.545.545 0 0 0-.411.044l-.854.455a2.452 2.452 0 0 1-2.071.116 9.571 9.571 0 0 1-5.189-5.188 2.457 2.457 0 0 1 .115-2.071l.456-.855a.544.544 0 0 0 .043-.41 11.629 11.629 0 0 0-3.118-4.458.36.36 0 0 0-.244-.1Z"></path>
                </svg>
              </IconButton>
              <IconButton>
                <svg
                  aria-label="Видеовызов"
                  class="x1lliihq x1n2onr6"
                  color="rgb(0, 0, 0)"
                  fill="rgb(0, 0, 0)"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>Видеовызов</title>
                  <rect
                    fill="none"
                    height="18"
                    rx="3"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    width="16.999"
                    x="1"
                    y="3"
                  ></rect>
                  <path
                    d="m17.999 9.146 2.495-2.256A1.5 1.5 0 0 1 23 8.003v7.994a1.5 1.5 0 0 1-2.506 1.113L18 14.854"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                </svg>
              </IconButton>
              <IconButton>
                <svg
                  aria-label="Информация о переписке"
                  class="x1lliihq x1n2onr6"
                  color="rgb(0, 0, 0)"
                  fill="rgb(0, 0, 0)"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>Информация о переписке</title>
                  <circle
                    cx="12.001"
                    cy="12.005"
                    fill="none"
                    r="10.5"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></circle>
                  <circle cx="11.819" cy="7.709" r="1.25"></circle>
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="10.569"
                    x2="13.432"
                    y1="16.777"
                    y2="16.777"
                  ></line>
                  <polyline
                    fill="none"
                    points="10.569 11.05 12 11.05 12 16.777"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></polyline>
                </svg>
              </IconButton>
            </div>
          </div>
          <div className=" h-[85vh]" style={{ overflow: "auto" }}>
            <div className="text-center py-[50px]">
              <img
                className="m-auto rounded-[50%] py-[20px]"
                src="https://scontent.cdninstagram.com/v/t51.2885-19/387247467_1024024805300116_8441586804864033304_n.jpg?stp=dst-jpg_s100x100&_nc_cat=108&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=kIQ1hws3QLQAX8DO6Mo&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfC1YHW82jycw3AOYCkj1698XL3EzLv07nkRgfKc6A7RVA&oe=6536223D"
                alt=""
              />
              <h1 className="text-[25px] font-medium">Mirzozoda Mirzoali</h1>
              <p className="text-[#696969]">mirzozoda_.i8 · Instagram</p>
              <div>
                <button
                  className="px-[30px] py-[5px] rounded-[8px] bg-[#dedede] my-[14px] font-medium hover:bg-[#c5c5c5]"
                  onClick={handleClickOpen}
                >
                  Смотруть профиль
                </button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogContent>
                    <img
                      className="m-auto rounded-[50%] py-[20px]"
                      src="https://scontent.cdninstagram.com/v/t51.2885-19/387247467_1024024805300116_8441586804864033304_n.jpg?stp=dst-jpg_s100x100&_nc_cat=108&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=kIQ1hws3QLQAX8DO6Mo&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfC1YHW82jycw3AOYCkj1698XL3EzLv07nkRgfKc6A7RVA&oe=6536223D"
                      alt=""
                    />
                    <h1 className="text-[25px] text-center font-medium">
                      Mirzozoda Mirzoali
                    </h1>
                    <p className="text-[#696969] text-center">
                      mirzozoda_.i8 · Instagram
                    </p>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="flex gap-[20px] items-center justify-between w-[95%] m-auto border-[2px] px-[25px] py-[10px] rounded-[20px]">
                <div className="flex items-center gap-[20px] w-[90%]">
                  <IconButton>
                    <svg
                      aria-label="Выбрать смайлик"
                      class="x1lliihq x1n2onr6"
                      color="rgb(0, 0, 0)"
                      fill="rgb(0, 0, 0)"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <title>Выбрать смайлик</title>
                      <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
                    </svg>
                  </IconButton>
                  <input
                    className="text-[20px] outline-none w-[100%]"
                    type="text"
                    placeholder="Напишите сообщение....."
                  />
                </div>
                <div className="flex gap-[20px]">
                  <IconButton>
                    <svg
                      aria-label="Голосовой клип"
                      class="x1lliihq x1n2onr6"
                      color="rgb(0, 0, 0)"
                      fill="rgb(0, 0, 0)"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <title>Голосовой клип</title>
                      <path
                        d="M19.5 10.671v.897a7.5 7.5 0 0 1-15 0v-.897"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                      <line
                        fill="none"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                        x1="12"
                        x2="12"
                        y1="19.068"
                        y2="22"
                      ></line>
                      <line
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        x1="8.706"
                        x2="15.104"
                        y1="22"
                        y2="22"
                      ></line>
                      <path
                        d="M12 15.745a4 4 0 0 1-4-4V6a4 4 0 0 1 8 0v5.745a4 4 0 0 1-4 4Z"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                    </svg>
                  </IconButton>
                  <IconButton>
                    <svg
                      aria-label="Добавить фото или видео"
                      class="x1lliihq x1n2onr6"
                      color="rgb(0, 0, 0)"
                      fill="rgb(0, 0, 0)"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <title>Добавить фото или видео</title>
                      <path
                        d="M6.549 5.013A1.557 1.557 0 1 0 8.106 6.57a1.557 1.557 0 0 0-1.557-1.557Z"
                        fill-rule="evenodd"
                      ></path>
                      <path
                        d="m2 18.605 3.901-3.9a.908.908 0 0 1 1.284 0l2.807 2.806a.908.908 0 0 0 1.283 0l5.534-5.534a.908.908 0 0 1 1.283 0l3.905 3.905"
                        fill="none"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                      <path
                        d="M18.44 2.004A3.56 3.56 0 0 1 22 5.564h0v12.873a3.56 3.56 0 0 1-3.56 3.56H5.568a3.56 3.56 0 0 1-3.56-3.56V5.563a3.56 3.56 0 0 1 3.56-3.56Z"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                    </svg>
                  </IconButton>
                  <IconButton>
                    <svg
                      aria-label="Нравится"
                      class="x1lliihq x1n2onr6"
                      color="rgb(0, 0, 0)"
                      fill="rgb(0, 0, 0)"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <title>Нравится</title>
                      <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                    </svg>
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages