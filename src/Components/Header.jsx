import React from "react";
import { ImTelegram } from "react-icons/im";
import { LuTwitter } from "react-icons/lu";
import { AiOutlineBarChart } from "react-icons/ai";

const Header = () => {
  return (
    <header className="py-3 w-full absolute top-0 bg-hite">
      <nav className="container flex justify-between items-center">
        <a
          href=""
          className="font-secondary logo text-4xl tracking-wider capitalize"
        >
          half btc
        </a>
        <div className="flex gap-3  items-center">
          <a
            href="https://t.me/HalfBitcoinERC"
            target="_blank"
            className="text-3xl hero-icon1"
          >
            <ImTelegram />
          </a>
          <a
            href="https://twitter.com/HalfBitcoinETH"
            target="_blank"
            className="text-3xl"
          >
            <LuTwitter />
          </a>
          <a href="" className="text-3xl">
            <AiOutlineBarChart />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
