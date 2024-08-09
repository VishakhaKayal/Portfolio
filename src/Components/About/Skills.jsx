import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Skills = () => {
  useGSAP(() => {
    const t1 = gsap.timeline(); // Creating a timeline instance
    t1.from(".skillsDiv div",{
        scale:0,
        opacity:0,
        duration:2
    })
    t1.from(".frontend h3", {
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    }).from(
      ".frontend p",
      {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
      },
      "-=1"
    );
    t1.from(".backend h3", {
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    }).from(
      ".backend p",
      {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
      },
      "-=1"
    );
    t1.from(".otherSkills h3", {
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    }).from(
      ".otherSkills p",
      {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
      },
      "-=1"
    );
  });
  return (
    <div className="skillsDiv flex gap-3 mt-5">
      <div style={{ boxShadow: "0 5px 10px #766B65" }} className="frontend basis-[33.33%] bg-[#766B65] rounded flex flex-col pl-5 py-10 md:py-5 cursor-pointer shadow-lg">
        <h3 className="text-xl font-semibold mb-2 font-[Poppins]">Frontend</h3>
        <p className="text-[#ffffffb0] text-xl md:text-sm md:tracking-tighter">
          HTML
        </p>
        <p className="text-[#ffffffb0] text-xl md:text-sm md:tracking-tighter">
          CSS
        </p>
        <p className="text-[#ffffffb0] text-xl md:text-sm md:tracking-tighter">
          Js
        </p>
        <p className="text-[#ffffffb0] text-xl md:text-sm md:tracking-tighter">
          Tailwind Css
        </p>
        <p className="text-[#ffffffb0] text-xl md:text-sm md:tracking-tighter">
          ReactJs
        </p>
      </div>
      <div style={{ boxShadow: "0 5px 10px #5D3C18" }} className="backend basis-[33.33%] bg-[#5D3C18] rounded flex flex-col pl-5 py-10 md:py-5 cursor-pointer shadow-lg">
        <h3 className="text-xl font-semibold mb-2 font-[Poppins]">Backend</h3>
        <p className="text-[#ffffffb0] text-xl md:text-sm md:tracking-tighter">
          NodeJs
        </p>
        <p className="text-[#ffffffb0] text-xl md:text-sm md:tracking-tighter">
          ExpressJs
        </p>
        <p className="text-[#ffffffb0] text-xl md:text-sm md:tracking-tighter">
          MongoDb
        </p>
        <p className="text-[#ffffffb0] text-xl md:text-sm md:tracking-tighter">
          MySql
        </p>
      </div>
      <div style={{ boxShadow: "0 5px 10px #1E2824" }} className="otherSkills basis-[33.33%] bg-[#1E2824] rounded flex flex-col pl-5 py-10 md:py-5 cursor-pointer shadow-lg">
        <h3 className="text-xl font-semibold mb-2 font-[Poppins]">
          Other Skills
        </h3>
        <p className="text-[#ffffffb0] text-xl md:text-sm md:tracking-tighter">
          Dreamweaver
        </p>
        <p className="text-[#ffffffb0] text-xl md:text-sm md:tracking-tighter">
          Figma
        </p>
        <p className="text-[#ffffffb0] text-xl md:text-sm md:tracking-tighter">
          AWS (Basic)
        </p>
        <p className="text-[#ffffffb0] text-xl md:text-sm md:tracking-tighter">
          Tally
        </p>
      </div>
    </div>
  );
};

export default Skills;
