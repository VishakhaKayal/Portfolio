import React from "react";
import { assets } from "../assets/assets";
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
    useGSAP(() => {
        const t1 = gsap.timeline(); // Creating a timeline instance
        t1.from(".skillsDiv h3", {
            opacity:0,
        duration:2,
        stagger:0.3
        
        })
        .from(".skillsDiv p", {
            y:100,
            opacity:0,
            duration:1,
            stagger:0.3
        }, "-=1");
      });
  return (
    <div className="w-full h-screen flex items-center">
      <div
        className="text-white bg-[#101010] w-full h-[calc(100vh-35vh)] flex md:flex-row flex-col gap-4 z-99 relative"
        id="about"
      >
        <aside className="w-full md:w-[35%] h-full rounded-lg overflow-hidden">
          <img
            src={assets.girl}
            alt="My Name Is Vishakha Kayal"
            className="w-full h-full"
          />
        </aside>
        <aside className="w-full md:w-[65%] h-full pl-11 pt-3">
          <h2 className="text-5xl font-bold ">About Me</h2>
          <p className="text-sm text-[#ffffffa8] mt-4 font-[Inter] tracking-wider">
            I am a passionate web developer with a strong foundation in
            JavaScript and modern frameworks. My journey in the tech world began
            at Poddar International College, where I earned my Bachelor of
            Computer Applications degree. My academic journey provided me with
            the technical knowledge and problem-solving skills essential for
            crafting dynamic and responsive web applications.
          </p>
          <div className="flex flex-col mt-4">
            <div className="flex  gap-5 font-[Poppins] tracking-wider font-semibold text-lg">
              <h4 className="border-[3px] border-[#101010] pb-1 border-b-[#1E2824] ">
                Skills
              </h4>
              <h4 className="pb-1 border-[3px] border-[#101010]">Experience</h4>
              <h4 className="pb-1 border-[3px] border-[#101010]">Education</h4>
            </div>
            <div className="skillsDiv flex gap-3 mt-5">
              <div className="basis-[33.33%] bg-[#766B65] rounded flex flex-col pl-5 py-5 cursor-pointer shadow-lg">
                <h3 className="text-xl font-semibold mb-2 font-[Poppins]">Frontend</h3>
                <p className="text-[#ffffffb0]">HTML</p>
                <p className="text-[#ffffffb0]">CSS</p>
                <p className="text-[#ffffffb0]">Js</p>
                <p className="text-[#ffffffb0]">Tailwind Css</p>
                <p className="text-[#ffffffb0]">ReactJs</p>
              </div>
              <div className="basis-[33.33%] bg-[#5D3C18] rounded flex flex-col pl-5 py-5 cursor-pointer shadow-lg">
                <h3 className="text-xl font-semibold mb-2 font-[Poppins]">Backend</h3>
                <p className="text-[#ffffffb0]">NodeJs</p>
                <p className="text-[#ffffffb0]">ExpressJs</p>
                <p className="text-[#ffffffb0]">MongoDb</p>
                <p className="text-[#ffffffb0]">MySql</p>
              </div>
              <div className="basis-[33.33%] bg-[#1E2824] rounded flex flex-col pl-5 py-5 cursor-pointer shadow-lg">
                <h3 className="text-xl font-semibold mb-2 font-[Poppins]">Other Skills</h3>
                <p className="text-[#ffffffb0]">Dreamweaver</p>
                <p className="text-[#ffffffb0]">Figma</p>
                <p className="text-[#ffffffb0]">AWS (Basic)</p>
                <p className="text-[#ffffffb0]">Tally</p>
              </div>
              
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default About;
