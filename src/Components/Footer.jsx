import React from "react";
import Telegram from "../assets/telegram.png";
import twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="py-[50px] w-full flex justify-center items-center">
      <div className="flex items-center justify-center gap-4">
        <a href="" target="_blank">
          <img src={Telegram} className="w-[3rem]" alt="" />
        </a>
        <a href="" target="_blank">
          <img src={twitter} className="w-[3rem]" alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
