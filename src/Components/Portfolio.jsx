import React, { useState } from "react";
import { assets, myWorks } from "../assets/assets.js";

import Button from "./Button.jsx";

const Portfolio = () => {
  const [seeMore, setSeeMore] = useState(false);
  const handleButton = () => {
    console.log("clicked");
    setSeeMore(true)
  };
  return (
    <>
      <div className="w-full min-h-screen flex items-center">
        <div
          className="text-white py-5 bg-[#101010] w-full h-[80%] flex flex-col gap-4 z-99 relative"
          id="portfolio"
        >
          <h2 className="text-5xl font-bold mb-4">My Works</h2>
          <div className="flex flex-wrap justify-center gap-11 w-full h-full overflow-hidden">
            {myWorks.slice(0, 3).map((work, i) => {
              return (
                <div
                  className="w-[30%] h-[40vh] rounded-xl overflow-hidden relative"
                  key={i}
                >
                  <img src={work.image} alt="" className="w-full h-full" />
                  <a href={work.hostlink} target="_blank">
                    <div className="w-full h-full absolute top-0 bg-[#0000001d]"></div>
                  </a>
                </div>
              );
            })}
            {
                seeMore && myWorks.slice(3, 9).map((work, i) => {
                    return (  
                      <div
                        className="w-[30%] h-[40vh] rounded-xl overflow-hidden relative"
                        key={i}
                      >
                        <img src={work.image} alt="" className="w-full h-full" />
                        <a href={work.hostlink} target="_blank">
                          <div className="w-full h-full absolute top-0 bg-[#0000001d]"></div>
                        </a>
                      </div>
                    );
                  })
            }
          </div>
          <Button name="See More" handleButton={handleButton}></Button>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
