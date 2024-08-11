import React from "react";
import { FaReact } from "react-icons/fa";
import { assets } from "../assets/assets.js";
import "../App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";

const Home = () => {
  useGSAP(() => {
    const t1 = gsap.timeline(); // Creating a timeline instance
    t1.from(".tagline", {
      y: -300,
      duration: 0.8,
      opacity: 0,
    });
    t1.from(".secondText", {
      width: "100%",
      duration: 2,
    });
    t1.from(".knowmoreBtn", {
     scale:0,
      duration: 0.8,
    });
    t1.from(".logo",{
      opacity:0,
      x:80,
    })
  });
  return (
    <>
      <div
        className="w-[100%] h-screen flex  items-center overflow-hidden"
        id="home"
        style={{
          backgroundImage: `url(${assets.wallpapert})`,
          objectFit: "cover",
        }}
      >
        <div className="text-white  w-full mt-[2rem] h-[calc(100vh-25vh)] flex gap-4 z-99 relative md:pl-24">
          <section className="introsection w-[100%] h-full  rounded-lg  gap-5  pl-8 relative flex flex-col">
            {/* <div className="flex">
              <h3 className="font-[Montserrat] text-[#4a4a48] text-2xl font-semibold tracking-[2.56px]">
                H
              </h3>
              <h3 className="font-[Montserrat] text-[#4a4a48] text-2xl font-semibold tracking-[2.56px]">
                i
              </h3>
              <h3 className="font-[Montserrat] text-[#4a4a48] text-2xl font-semibold tracking-[2.56px]">
                , I&nbsp;
              </h3>
              <h3 className="font-[Montserrat] text-[#4a4a48] text-2xl font-semibold tracking-[2.56px]">
                am&nbsp;
              </h3>
              <h3 className="font-[Montserrat] text-[#4a4a48] text-2xl font-semibold tracking-[2.56px]">
                V
              </h3>
              <h3 className="font-[Montserrat] text-[#4a4a48] text-2xl font-semibold tracking-[2.56px]">
                i
              </h3>
              <h3 className="font-[Montserrat] text-[#4a4a48] text-2xl font-semibold tracking-[2.56px]">
                s
              </h3>
              <h3 className="font-[Montserrat] text-[#4a4a48] text-2xl font-semibold tracking-[2.56px]">
                h
              </h3>
              <h3 className="font-[Montserrat] text-[#4a4a48] text-2xl font-semibold tracking-[2.56px]">
                a
              </h3>
              <h3 className="font-[Montserrat] text-[#4a4a48] text-2xl font-semibold tracking-[2.56px]">
                k
              </h3>
              <h3 className="font-[Montserrat] text-[#4a4a48] text-2xl font-semibold tracking-[2.56px]">
                h
              </h3>
              <h3 className="font-[Montserrat] text-[#4a4a48] text-2xl font-semibold tracking-[2.56px]">
                a
              </h3>
            </div> */}

            <div className="tagline relative w-full md:w-[60%] top-[20%]">
              <p className="font-[Montserrat] absolute text-5xl leading-[5rem] whitespace-nowrap font-bold tracking-[2.56px] text-[rgba(255,255,255,0.75)]">
                Hi my name is <span>Vishakha</span>
                <br />
                I am an aspiring MERN Stack
                <br />
                Developer
              </p>
              <p className="secondText font-[Montserrat] overflow-hidden w-[0%] whitespace-nowrap absolute text-black opacity-[0.9] text-5xl leading-[5rem] font-bold tracking-[2.56px]">
                Hi my name is <span>Vishakha</span>
                <br />
                I am an aspiring MERN Stack
                <br />
                Developer
              </p>
            </div>

            <div className="knowmoreBtn bottom-[40%] md:bottom-[20%] absolute bg-[rgba(255,255,255,0.75)] text-black rounded p-2 font-extrabold md:font-bold md:tracking-widest text-4xl md:text-lg">
              {" "}
              <Link to="about" smooth={true} duration={500}>
                Know More
              </Link>
            </div>
            <div className="logo absolute bottom-[0%] right-0 md:right-16">
              <img src={assets.mernPhoto} alt="mern stack logo" className="w-[29rem] md:w-[18rem] " />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
