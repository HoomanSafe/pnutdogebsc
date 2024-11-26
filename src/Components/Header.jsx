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
          Pnut Doge
        </a>
        <div className="flex gap-3  items-center">
          <a
            href="https://t.me/PNutDoGeBsc"
            target="_blank"
            className="text-3xl hero-icon1"
          >
            <ImTelegram />
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            className="text-3xl"
          >
            <LuTwitter />
          </a>
          <a href="https://www.dextools.io/app/en/bnb/pair-explorer/0x2c1be00da03dee8ffed345270de58e60d997e6e6?t=1732628450286" className="text-3xl">
            <AiOutlineBarChart />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
