import React from "react";

const Project = ({ project }) => {
  return (
    <div className="w-[30%] h-[40vh] rounded-xl overflow-hidden relative">
      <a href={project.hostlink} target="_blank">
        <div className="absolute top-0 w-full h-full">
          <img src={project.image} alt="" className="w-full h-full" />
        </div>{" "}
      </a>
      <a href={project.hostlink} target="_blank">
        <div className="projectDiv w-full h-full absolute top-0 bg-[#000000a0] flex flex-col justify-center items-center">
          <h3 className="capitalize  text-xl font-semibold">
            {project.category}
          </h3>
          <p className=" text-white"> Click Me</p>
        </div>
      </a>
    </div>
  );
};

export default Project;
