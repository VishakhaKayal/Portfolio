import React, { useState } from "react";
import { assets, myWorks } from "../assets/assets.js";
import Project from "./Project.jsx";
import Button from "./Button.jsx";
import Heading from "./Heading.jsx";

const Portfolio = () => {
  const [seeMore, setSeeMore] = useState(false);
  const handleButton = () => {
    console.log("clicked");
    setSeeMore(true)
  };
  return (
    <>
      <div className="m-auto w-[82%] min-h-screen flex items-center" id="portfolio">
        <div
          className="text-white py-5 w-full h-[80%] flex flex-col gap-4 z-99 relative"
        
        >
          <Heading sectionName="My Works"/>
          <div className="grid grid-cols-1  md:flex md:flex-wrap justify-center gap-11 md:w-full h-full overflow-hidden py-6">
            {myWorks.slice(0, 3).map((work, i) => {
              return (
                <Project project={work} key={work.id} i={i}/>
              );
            })}
            {
                seeMore && myWorks.slice(3, 9).map((work) => {
                    return (  
                      <Project project={work} key={work.id}/>
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
