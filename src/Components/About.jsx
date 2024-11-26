import React from "react";
import Image from "../assets/logo1.png";

const About = () => {
  return (
    <section className="py-[50px] text-black bg-white">
      <div className="container grid gap-10 lg:grid-cols-2 items-center justify-center">
        <img src={Image} alt="" />
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl text-black capitalize  font-secondary">
            about
          </h1>
          <p className=" max-w-[600px]">
            the perfect fusion of PNUT and DOGE, a revolutionary meme token ready to dominate the Binance Smart Chain. Backed by the vibrant spirit of memes and bold innovation, this project stands 
            out as a tribute to creativity, humor, and community strength.
          </p>
          <p className=" max-w-[600px]">
            bold determination and a flair for the extraordinary, PDOGE represents ambition, innovation, and the unstoppable 
            spirit of decentralized finance.
          </p>
          <p className=" max-w-[600px]">
            captures the spirit of fun, creativity,
            and the unstoppable power of community-driven innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
