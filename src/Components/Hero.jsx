import React from "react";
import logo from "../assets/logo11.png";

const Hero = () => {
  return (
    <section className="pt-[100px] w-full flex justify-center items-center flex-col text-center">
      <div className="container flex flex-col justify-center items-center gap-6">
        <img src={logo} alt="" className="w-[35rem] logo-img" />
        <h1 className="text-6xl capitalize hero-header font-secondary">
          <p>welcome</p> <p>to</p> <p>PNUT</p> <p>DOGE</p>
        </h1>
        <p className="hero-para max-w-[600px]">
          With Trump's support, PDOGE symbolizes the fearless pursuit of success and freedom in the world of decentralized finance. Whether you're a PNUT lover,
          a DOGE fan, or just someone who believes in breaking the mold, PDOGE welcomes you to join this groundbreaking journey.
        </p>

        <h2 className="font-secondary text-4xl hero-contract"></h2>
        <h2 className="px-6 ca-div py-4 border border-black rounded-full">
          0xFcb0e64435fEe443e6889eE075dADB102C1B61f1....
        </h2>
      </div>
    </section>
  );
};

export default Hero;
