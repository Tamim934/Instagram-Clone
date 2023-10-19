import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Switcher from "../components/Switcher";
import instagramsimplelogo from "../assets/instagramsimplelogo.svg";
import instagramtextlogo from "../assets/instagramtextlogo.svg";
import instagramsimplelogo2 from "../assets/instagramsimplelogodarkmode.svg";
import instagramtextlogo2 from "../assets/instagramtextlogodarkmode.svg";
import homeicontrue from "../assets/homeicontrue.svg";
import homeiconfalse from "../assets/homeiconfalse.svg";
import homeicontrue2 from "../assets/homeicontruedarkmode.svg";
import homeiconfalse2 from "../assets/homeiconfalsedarkmode.svg";

const Layout = () => {
  const { pathname } = useLocation();

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const active = localStorage.getItem("i18nextLng");

  return (
    <div>
      <div className="flex justify-between items-center h-[60px] px-[16px] md:hidden">
        <div>
          <img
            src={instagramtextlogo}
            alt=""
            className="dark:hidden w-[103px]"
          />
          <img
            src={instagramtextlogo2}
            alt=""
            className="hidden dark:block w-[103px]"
          />
        </div>
        <div>
          <input
            type="search"
            placeholder="Поиск"
            className="bg-[#EFEFEF] dark:bg-[#262626] text-[#737373] dark:text-[#A8A8A8] w-[268px] h-[36px] rounded-[8px] py-[3px] px-[16px]"
          />
        </div>
      </div>
      <hr className="md:hidden" />

      <div></div>
      <Outlet />
      <hr className="md:hidden" />
      <div className="flex  justify-evenly md:hidden">
        <div>
          <img src={homeicontrue} alt="" />
        </div>
        <div>
          <img src={homeicontrue} alt="" />
        </div>
        <div>
          <img src={homeicontrue} alt="" />
        </div>
        <div>
          <img src={homeicontrue} alt="" />
        </div>
        <div>
          <img src={homeicontrue} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Layout;
