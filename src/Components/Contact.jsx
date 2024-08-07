import React, { useRef, useState,useEffect } from "react";
import Button from "./Button";
import emailjs from 'emailjs-com';

const Contact = () => {
  const submitRef = useRef();

  useEffect(() => {
    emailjs.init("H0u3msXRe-2-w21LF"); // Replace with your actual Public Key
  }, []);


  const handleButton = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_zggpenr', 'template_le5bhop', submitRef.current)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

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
            name="user_name"
            placeholder="Your Name"
            className="w-[60%] px-3 py-3 mb-3 bg-[#282828] rounded-xl"
            value={name}
            onChange={(e) => { setName(e.target.value) }}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-[60%]  px-3 py-3 mb-3 bg-[#282828] rounded-xl"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <textarea
            name="message"
            id=""
            placeholder="Your Message"
            rows="4"
            className="w-[60%] px-3 py-3 mb-3 bg-[#282828] rounded-xl"
            value={message}
            onChange={(e) => { setMessage(e.target.value) }}
          ></textarea>
          <Button name="Submit" handleButton={handleButton} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
