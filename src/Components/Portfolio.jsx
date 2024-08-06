import React from "react";
import { assets, myWorks } from "../assets/assets.js";

const Portfolio = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center">
        <div
          className="text-white bg-[#101010] w-full h-[calc(100vh-35vh)] flex flex-col gap-4 z-99 relative"
          id="about"
        >
          <h2 className="text-5xl font-bold ">My Works</h2>
          <div className=" flex justify-center gap-8  w-full h-full overflow-hidden">
           
          {myWorks.slice(0, 3).map((work, i) => {
              console.log(work.image);
              return ( // Add return statement here
               <>
                <div className="w-[30%] h-full rounded-xl overflow-hidden relative" key={i}>
                    <img src={work.image} alt="" className="w-full h-full" />
                    {/* <div className="w-full h-full absolute top-0 bg-[#0000006c]"></div> */}
                </div>
               </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
