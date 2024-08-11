import React, { useState } from "react";
import { assets } from "../../assets/assets";
import Education from "./Education";
import Skills from "./Skills";
import { useGSAP } from "@gsap/react";
import Heading from "../Heading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [section, setSection] = useState("Skills");

  useGSAP(() => {
    gsap.to(".aboutmeContent", {
      opacity: 1,
      x: 0,
      duration: 3.4,
      scrollTrigger: {
        trigger: "#about",
        scrub: 1,
      },
    });
    gsap.from("aside img", {
      opacity: 0,
      duration: 0.4,
      scale: 0,
      scrollTrigger: {
        trigger: "#about",
        scrub: 1,
      },
    });
  });

  const onHandleEducation = () => {
    setSection("Education");
  };
  const onHandleSkills = () => {
    setSection("Skills");
  };
  return (
    <div className="m-auto w-[82%]   h-screen flex items-center" id="about">
      <div className="text-white  w-full min-h-[calc(100vh-35vh)] md:h-[calc(100vh-35vh)] flex md:flex-row flex-col gap-4 z-99 relative">
        <aside className="w-full md:w-[35%] h-full rounded-lg overflow-hidden">
          <img
            src={assets.girl}
            alt="My Name Is Vishakha Kayal"
            className="w-[60%] md:w-full h-full m-auto md:m-0"
          />
        </aside>
        <aside className="w-full md:w-[65%] h-full pl-11 pt-3">
          {/* <h2 className="text-6xl md:text-5xl font-bold ">About Me</h2> */}
          <Heading sectionName="About" />
          <p className="aboutmeContent text-lg md:text-sm text-[#ffffff7d] mt-4 font-[Inter] tracking-wider opacity-0 -translate-x-14">
            I’m a dedicated MERN Stack developer with a strong passion for
            crafting dynamic and innovative web applications. My journey into
            web development started with a fascination for frontend
            technologies, where I honed my skills by creating captivating,
            user-friendly interfaces.Driven by a love for learning I’ve expanded
            my expertise to encompass both frontend and backend development
            within the MERN stack . Currently , Seeking an entry level position
            in an organisation where my skills can be put to best use for my
            growth and for the growth of the company.
          </p>
          <div className="flex flex-col mt-4">
            <div className="flex  gap-5 font-[Poppins] tracking-wider font-semibold text-3xl md:text-lg">
              <h4
                className={`${
                  section === "Skills" ? "border-b-[#1E2824]" : ""
                } pb-1 border-[3px] border-[#000000] cursor-pointer`}
                onClick={onHandleSkills}
              >
                Skills
              </h4>
              <h4
                className={`${
                  section === "Education" ? "border-b-[#1E2824]" : ""
                } pb-1 border-[3px] border-[#000000] cursor-pointer`}
                onClick={onHandleEducation}
              >
                Education
              </h4>
            </div>
            {section === "Education" ? <Education /> : <Skills />}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default About;
