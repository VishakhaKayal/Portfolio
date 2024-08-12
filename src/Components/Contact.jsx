import React, { useRef, useState, useEffect } from "react";
import Button from "./Button";
import emailjs from 'emailjs-com';
import Heading from "./Heading"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { assets } from "../assets/assets";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const submitRef = useRef();

  useEffect(() => {
    emailjs.init("H0u3msXRe-2-w21LF"); // added Public Key
    
  }, []);

  useGSAP(()=>{
    gsap.from(".firstSec img",{
      scale:0,
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:"#contact",scrub:1,
      }
    })
  })
  const handleButton = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_zggpenr', 'template_le5bhop', submitRef.current)
      .then((result) => {
        toast.success("Contact details send Successfully");
      }, (error) => {
        if (error.text == "The recipients address is corrupted")
          toast.error("please enter valid email")
        else {
          toast.error("something went wrong")
        }
      });
      setName("");
      setEmail("");
      setMessage("")
  };
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  return (
    <>
      <ToastContainer />
      <div className="m-auto w-[82%] h-[100vh] flex flex-col md:flex-row items-center contactSec" id="contact">
        <section  className="text-white w-[70%] md:w-[40%] h-[70vh]  flex flex-col items-center relative z-10 firstSec">
          <img src={assets.contactMe} alt="contact image" className="w-full h-[90%] md:w-[100%] md:h-[100%] pt-14 absolute top-0"/>
          <div className="bg-black opacity-[0.2] absolute top-32 z-40 w-full h-[75%] md:h-[60%]"></div>
        </section>
        <section
          className="text-white w-full md:w-[70%] h-[50vh]  flex flex-col items-center"
        
        >
          <div className="w-full mb-4 flex flex-col items-center justify-center">
            {/* <h3 className="text-5xl font-semibold md:font-normal mb-3 md:mb-0 md:text-3xl font-[Poppins]">Contact Me</h3>
             */}
             <Heading sectionName="Contact Me"/>
            <div className="flex gap-4 mt-4 mb-4 md:mb-0">
              <p><a href="https://github.com/Vishakha-Kayal" target='_blank'><img src={assets.gitHubIcon} alt=""  className="w-14 md:w-8 cursor-pointer"/></a></p>
              <p><a href="https://www.linkedin.com/in/vishakha-kayal-041722216/" target='_blank'><img src={assets.linkedInIcon} alt=""  className="w-14 md:w-8 cursor-pointer"/></a></p>
        
            </div>
          </div>
          <form ref={submitRef} className="w-full gap-3 md:gap-0 flex flex-col items-center">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-[89%] text-xl md:text-base md:w-[60%] px-4 py-7 md:px-3 md:py-3 mb-3 bg-[#282828] rounded-xl outline-none"
              value={name}
              onChange={(e) => { setName(e.target.value) }}
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-[89%] text-xl md:text-base md:w-[60%] px-4 py-7 md:px-3 md:py-3 mb-3 bg-[#282828] rounded-xl outline-none"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              autoComplete="on"
            />
            <textarea
              name="message"
              id=""
              placeholder="Your Message"
              rows="4"
              className="w-[89%] text-xl md:text-base md:w-[60%] px-4 py-7 md:px-3 md:py-3 mb-3 bg-[#282828] rounded-xl outline-none"
              value={message}
              onChange={(e) => { setMessage(e.target.value) }}
            ></textarea>
            <Button name="Submit" handleButton={handleButton} />
          </form>
        </section>
      </div>
    </>
  );
};

export default Contact;
