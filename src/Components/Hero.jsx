import React from "react";
import logo from "../assets/logo2.png";

const Hero = () => {
  return (
    <section className="py-[100px] w-full flex justify-center items-center flex-col text-center">
      <div className="container flex flex-col justify-center items-center gap-3">
        <img src={logo} alt="" className="w-[35rem] logo-img" />
        <h1 className="text-6xl capitalize hero-header font-secondary">
          welcome to half btc
        </h1>
        <p className="hero-para max-w-[600px]">
          Discover the future of digital assets with Half BTC, the revolutionary
          cryptocurrency project built on the Ethereum blockchain. Experience
          the perfect blend of Bitcoin's stability and Ethereum's cutting-edge
          features. Enjoy faster transactions, lower fees, and enhanced privacy,
          all within a decentralized ecosystem. Join us on this groundbreaking
          journey and unlock the true potential of Half BTC.
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
