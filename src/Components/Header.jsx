import React from "react";
import "../App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  useGSAP(() => {
    gsap.from(".nav h4", {
      y: -100,
      duration: 0.5,
      opacity: 0,
      stagger: 0.3,
    });
  });
  return (
    <div className=" nav fixed flex justify-end gap-8 top-2 right-[9%] width-full z-10">
      <h4 className="relative rounded-[50px]  border-[1px] border-[rgba(255,255,255,0.75)] pt-[1.3vh] pb-[1.3vh] pl-[1.3vw] pr-[1.3vw] cursor-pointer overflow-hidden">
        <a
          href="#home"
          className="font-medium text text-white relative z-[9] no-underline"
        >
          Home
        </a>
      </h4>
      <h4 className="relative rounded-[50px]  border-[1px] border-[rgba(255,255,255,0.75)] pt-[1.3vh] pb-[1.3vh] pl-[1.3vw] pr-[1.3vw] cursor-pointer overflow-hidden">
        <a
          href="#about"
          className="font-medium text text-white relative z-[9] no-underline"
        >
          About
        </a>
      </h4>
      <h4 className="relative rounded-[50px]  border-[1px] border-[rgba(255,255,255,0.75)] pt-[1.3vh] pb-[1.3vh] pl-[1.3vw] pr-[1.3vw] cursor-pointer overflow-hidden">
        <a
          href="#portfolio"
          className="font-medium text text-white relative z-[9] no-underline"
        >
          MyWorks
        </a>
      </h4>
      <h4 className="relative rounded-[50px]  border-[1px] border-[rgba(255,255,255,0.75)] pt-[1.3vh] pb-[1.3vh] pl-[1.3vw] pr-[1.3vw] cursor-pointer overflow-hidden">
        <a
          href="#contact"
          className="font-medium text text-white relative z-[9] no-underline"
        >
          Contact
        </a>
      </h4>
    </div>
  );
};

export default Header;
