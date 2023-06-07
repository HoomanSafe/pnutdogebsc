import React from "react";
import Image from "../assets/img3.png";

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
            Once upon a time, Bitcoin was soaring high, reaching new heights
            every day. It had just hit a new ATH of $69,000! All the degens were
            talking about it. But something happened…
          </p>
          <p className=" max-w-[600px]">
            The moon got dark, and people started to panic. Degens all around
            the world started selling full bags of Bitcoin causing the price to
            drop to a new All-Time-Low. However, some people saw an opportunity
            in the chaos. They decided to split Bitcoin in half, birthing a new
            cryptocurrency - Half Bitcoin.
          </p>
          <p className=" max-w-[600px]">
            Half Bitcoin quickly gained popularity, as people saw it as a safer
            investment. It became the new standard and Bitcoin was left behind.
            And so, the tale of Bitcoin's rise and fall ended with the birth of
            Half Bitcoin, a new cryptocurrency that changed the game forever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
