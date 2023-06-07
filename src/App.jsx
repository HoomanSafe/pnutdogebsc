import React, { useEffect } from "react";
import Header from "./Components/Header";
import SplitType from "split-type";
import { gsap } from "gsap";
import Hero from "./Components/Hero";
import { TextPlugin } from "gsap/TextPlugin";

const App = () => {
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    const logo = new SplitType(".logo", { types: "chars" });
    const hero_header = new SplitType(".hero-header", { types: "chars" });
    const heroPara = new SplitType(".hero-para", { types: "lines" });
    const time = gsap
      .timeline()
      .from(logo.chars, {
        x: 30,
        y: 20,
        stagger: 0.2,
        opacity: 0,
        ease: "linear",
      })
      .from(hero_header.chars, {
        x: 30,
        y: 20,
        stagger: 0.2,
        opacity: 0,
        ease: "linear",
        transformOrigin: "center",
      })
      .from(heroPara.lines, {
        opacity: 0,
        stagger: 0.3,
        xPercent: 100,
        transformOrigin: "top",
      })
      .to(".hero-contract", {
        text: "contract",
        duration: 2,
      })
      .from(".ca-div", {
        opacity: 0,
      })
      .to(
        ".logo-img",
        {
          rotate: 180,
          repeat: 5,
          ease: "linear",
          yoyo: true,
        },
        1
      );
  });
  return (
    <div className="min-h-screen w-full bg-black font-primary text-white">
      <Header />
      <Hero />
    </div>
  );
};

export default App;
