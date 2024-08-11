import React from "react";
import TechStack from "./TechStack";
const Project = ({ project }) => {
  return (
    <div
      className="w-full md:w-[30%] flex flex-col justify-between py-14 md:py-4 transition all .5s ease 0s hover:scale-[0.99] cursor-pointer"
      style={{ boxShadow: "0 4px 4px 5px rgba(93, 60, 24,0.55)" }}
    >
      <div className="w-full h-full">
        <div className="w-[85%] mx-auto h-[30vh] md:h-[31vh] rounded-xl overflow-hidden relative">
          <a href={project.hostlink} target="_blank">
            <div className="absolute top-0 w-full h-full">
              <img src={project.image} alt="" className="w-full h-full" />
            </div>{" "}
          </a>
          <a href={project.hostlink} target="_blank">
            <div className="projectDiv w-full h-full absolute top-0 bg-[#000000a0] flex flex-col justify-center items-center">
              {/* <h3 className="capitalize  text-xl font-semibold">
            {project.category}
          </h3> */}
              <div className="flex items-center gap-4 bg-[#5d3c18b9] px-1 py-1 rounded ">
                <p className=" text-white md:text-xl text-3xl md:font-semibold font-[Montserrat] tracking-tighter">
                  Demo
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </div>
            </div>
          </a>
        </div>
        <div className="w-[85%] mx-auto flex flex-col items-center mt-5">
          <h2 className="text-4xl md:text-2xl opacity-[0.8]">{project.name}</h2>
          <h6 className="text-3xl md:text-base font-extrabold capitalize text-[#5d3c18] mt-3">{project.category}</h6>
          <p className="text-[1.5rem] md:text-[0.8rem] text-justify mt-5 md:mt-3 font-[Poppins] opacity-[0.5] tracking-wider">
            {project.description}
          </p>
        </div>
      </div>
      <div className="w-[85%] mx-auto flex gap-3 mt-5 flex-wrap">
        {project.techStack.map((technology) => (
          <TechStack name={technology} key={technology}/>
        ))}
      </div>
    </div>
  );
};

export default Project;
