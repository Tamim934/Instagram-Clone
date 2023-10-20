import React, { useState } from "react";
import Swiper from "../../components/SwiperSh";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { axiosRequest, saveToken } from "../../utilities/axiosRequest";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = useState("")
  const [userName, setUserName] = useState("")
  const navigate = useNavigate()
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const Login = async () => {
    console.log(1)
    const obj = {
      userName: userName,
      password: password
    }
    try {
      const { data } = await axiosRequest.post("Account/login", obj)
      saveToken(data.data)
      console.log(data)
      navigate('home')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="bg-[white] py-[30px] w-[100%]">
      <div className="bg-[white] flex justify-center gap-[20px] items-center ">
        <div className="xl:flex justify-center items-center xs:hidden 2xl:block w-[33%]">
          <img src="src/assets/home-phones.png" alt="" />
          <div className="w-[95%]">
            <Swiper />
          </div>
        </div>
        <div className="xs:w-[80%] sm:w-[60%] md:w-[40%] lg:w-[33%] xs:my-[30px] xl:w-[26%]">
          <div className="sm:border-[2px] xl:w-[100%] xs:px-[25px] sm:px-[50px]">
            <h1 className="text-[40px] text-center py-[20px] font-medium">
              𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶
            </h1>
            <form >

              <TextField
                onChange={(e) => setUserName(e.target.value)}
                sx={{ width: "100%" }}
                id="filled-basic"
                label="Телефон, имя пользователя или эл.адрес"
                variant="filled"
              />
              <div className="">
                <FormControl
                  sx={{ m: 1, width: "100%", color: "#0f0f0f" }}
                  variant="standard"
                >
                  <InputLabel htmlFor="standard-adornment-password">
                    Password
                  </InputLabel>
                  <Input
                    onChange={(e) => setPassword(e.target.value)}
                    id="standard-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
            </form>

            <button onClick={() => Login()} className="bg-[#4CB5F9] text-[white] px-[30px] py-[8px] rounded-[12px] text-[20px] w-[100%] m-auto my-[20px]">
              Войти
            </button>
            <div className="flex gap-[14px] items-center text-[#b6b6b6] justify-center">
              <h1 className="font-medium hidden 2xl:block">
                ----------------
              </h1>
              <h1 className="text-[20px] font-medium">ИЛИ</h1>
              <h1 className="font-medium hidden 2xl:block">
                ----------------
              </h1>
            </div>
            <div className="flex items-center justify-center gap-[20px] py-[20px]">
              <img
                className="w-[14%] "
                src="data:image/png;base64,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"
                alt=""
              />
              <h1 className="text-[blue] md:text-[20px] font-medium">
                Войти через Facebook
              </h1>
            </div>
            <h1 className="text-center pb-[20px]">Забыли пароль?</h1>
          </div>
          <div className="sm:border-[2px] my-[20px] px-[40px] py-[20px] text-center">
            <h1 className="xs:text-[10px] sm:text-[17px]">
              У вас ещё нет аккаунта?
              <span className="text-[blue]">Зарегистрироваться</span>
            </h1>
          </div>
          <h1 className="text-center py-[20px]">Установите приложение.</h1>
          <img className="m-auto" src="src/assets/swiper1Sh.jpg" alt="" />
        </div>
      </div>
      <div className="w-[87%] text-[#858585] text-[13px] m-auto flex justify-center gap-[25px] text-center flex-wrap mt-[40px]">
        <p>Meta</p>
        <p>Информация</p>
        <p>Блог</p>
        <p>Вакансии</p>
        <p>Помощь</p>
        <p>API</p>
        <p>Конфиденциальность</p>
        <p>Условия</p>
        <p>Места</p>
        <p>Instagram Lite</p>
        <p>Threads</p>
        <p>Загрузка контактов и лица, не являющиеся пользователями</p>
        <p>Meta Verified</p>
        <p>Русский</p>
        <p> © 2023 Instagram from</p>
      </div>
    </div>
  );
};

export default Login;
