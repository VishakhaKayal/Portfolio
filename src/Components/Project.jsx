import React from "react";

const Project = ({ project }) => {
  return (
    <div className="w-full md:w-[30%] flex flex-col py-4" style={{ boxShadow: "0 4px 4px 5px rgba(93, 60, 24,0.55)" }}>
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
              <p className=" text-white md:text-xl text-5xl md:font-semibold font-[Montserrat] tracking-tighter">
                Demo
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-external-link"
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
        <h2 className="text-4xl md:text-2xl">{project.name}</h2>
        <p className="text-[1.6rem] md:text-[0.9rem] text-justify mt-5 md:mt-3 font-[Gellix] tracking-wider trac">{project.description}</p>
      </div>
    </div>
  );
};

export default Project;
