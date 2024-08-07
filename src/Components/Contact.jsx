import React, { useRef, useState } from "react";
import Button from "./Button";

const Contact = () => {
  const submitRef = useRef();
  const handleButton = (e) => {
    e.preventDefault();
    submitRef.onSubmit();
  };
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [message,setMessage]=useState("")

  return (
    <div className="w-full h-[100vh] flex items-center">
      <div
        className="text-white w-full h-[50vh]  flex flex-col items-center"
        id="contact"
      >
        <div className="w-full text-3xl font-[Poppins] mb-4 flex justify-center">
          Contact Me
        </div>
        <form ref={submitRef} className="w-full flex flex-col items-center">
          <input
            type="text"
            placeholder="Your Name"
            className="w-[60%] px-3 py-3 mb-3 bg-[#282828] rounded-xl"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-[60%]  px-3 py-3 mb-3 bg-[#282828] rounded-xl"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <textarea
            name=""
            id=""
            placeholder="Your Message"
            rows="4"
            className="w-[60%] px-3 py-3 mb-3 bg-[#282828] rounded-xl"
            value={message}
            onChange={(e)=>{setMessage(e.target.value)}}
          ></textarea>
          <Button name="Submit" handleButton={handleButton} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
