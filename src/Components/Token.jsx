import React from "react";
import {
  ArrowSwapHorizontal,
  EmptyWalletRemove,
  Ethereum,
  Moon,
} from "iconsax-react";

const Tokenomics = () => {
  return (
    <section className="py-[50px] w-full bg-black flex justify-center items-center toke">
      <div className="container flex justify-center w-full items-center gap-5 flex-col">
        <h1 className="title font-secondary text-center text-5xl uppercase text-white font-Baller">
          Tokenomics
        </h1>
        <div className="grid md:grid-cols-2 justify-center md:justify-between items-center gap-10 w-full">
          <div className="p-6 capitalize text-2xl w-full  text-white mx-auto text-center flex justify-center items-center">
            <h1>Name: half bitcoin</h1>
          </div>
          <div className="p-6 text-2xl w-full  text-white mx-auto text-center flex justify-center items-center">
            <h1>Supply: 100000000</h1>
          </div>
          <div className="p-6 text-2xl w-full  text-white mx-auto text-center flex justify-center items-center">
            <h1>0% Tax</h1>
          </div>
          <div className="p-6 text-2xl w-full  text-white mx-auto text-center flex justify-center items-center">
            <h1>2% max wallet</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
