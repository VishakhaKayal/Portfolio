import React from "react";
import { FaReact } from "react-icons/fa";
import { assets } from "../assets/assets.js";
import "../App.css";
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Home = () => {
  useGSAP(() => {
    gsap.from(".introsection h2", {
      y:100,
    opacity:0,
    duration:1,
    stagger:0.3
    });
  });
  return (
  <>
  <div className="w-full h-screen flex items-center" id="home"> 
    <div
      style={{
        filter: "drop-shadow(20px 4px 40px rgba(0, 0, 0, 0.25))",
        backdropFilter: "blur(2.5px)",
      }}
      className="text-white bg-[#101010] w-full mt-[6rem] h-[calc(100vh-25vh)] flex gap-4 z-99 relative"
    >
     
      <section className="introsection w-[60%] h-full flex flex-col justify-center border-[1px] rounded-lg border-[#464545a7] gap-5 relative pl-8">
        <h2 className="font-[Poppins] text-[#626262] text-lg font-medium tracking-[2.56px]">
          Hi, I am Vishakha
        </h2>
        <h2 className="font-[Poppins] text-[#fffff] text-7xl font-medium tracking-[1.26px] whitespace-nowrap">
          FULLSTACK
        </h2>
        <h2 className="font-[Poppins] text-[#2b3531] text-7xl font-medium tracking-[2.56px]">
          WEB DEVELOPER
        </h2>
      </section>

      <section className="animationSection w-[40%] border-[1px] rounded-lg border-[#464545a7] relative">
      {/* <div className="bg-white w-full h-full absolute"></div> */}
        <h3 className="reactIcon">
          {" "}
          <FaReact
            style={{
              fontSize: "13rem",
              position: "absolute",
              top: "30%",
              left: "30%",
            }}
          />
        </h3>
        <h3 className="w-[4rem] h-[4rem] absolute top-[42%] left-10 animateIcons mongoicon">
          <img src={assets.mongo} alt="" className="" />
        </h3>
        <h3 className="w-[4rem] h-[4rem] absolute top-[47%] right-5 animateIcons nodeicon">
          <img src={assets.node} alt="" className="" />
        </h3>
        <h3 className="w-[4rem] h-[4rem] absolute top-[15%] left-[43%] animateIcons expressicon">
          <img src={assets.express} alt="" className="" />
        </h3>
        <h3 className="w-[4rem] h-[4rem] absolute bottom-[10%] left-[45%] animateIcons tailwindicon">
          <img src={assets.tailwind} alt="" className="" />
        </h3>
      </section>
    </div>

  </div>
  </>
  );
};

export default Home;
