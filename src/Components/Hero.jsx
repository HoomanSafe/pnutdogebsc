import React from "react";
import logo from "../assets/logo2.png";

const Hero = () => {
  return (
    <section className="pt-[100px] w-full flex justify-center items-center flex-col text-center">
      <div className="container flex flex-col justify-center items-center gap-6">
        <img src={logo} alt="" className="w-[35rem] logo-img" />
        <h1 className="text-6xl capitalize hero-header font-secondary">
          <p>welcome</p> <p>to</p> <p>half</p> <p>bitcoin</p>
        </h1>
        <p className="hero-para max-w-[600px]">
          Once upon a time, Bitcoin was soaring high, reaching new heights every
          day. It had just hit a new ATH of $69,000! All the degens were talking
          about it. But something happenedßß
        </p>

        <h2 className="font-secondary text-4xl hero-contract"></h2>
        <h2 className="px-6 ca-div py-4 border border-black rounded-full">
          0x00000000000000000000000000x....
        </h2>
      </div>
    </section>
  );
};

export default Hero;
