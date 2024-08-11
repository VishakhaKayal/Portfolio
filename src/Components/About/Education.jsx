import React from "react";

const Education = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl md:text-xl font-semibold md:font-normal mt-3">Maheshwari Girls Public School</h2>
          <h3 className="text-2xl md:text-sm">VidhydharNagar , Jaipur</h3>
          <p className="text-lg md:text-sm mt-2 text-[#fec664]">
            Completed in <span className="text-[#fec664]">2021</span>
          </p>
          <p className="text-lg md:text-sm">Intermediary - 88 %</p>
          <p className="text-lg md:text-sm">Secondary - 95.8 %</p>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl md:text-xl font-semibold md:font-normal mt-3">Poddar International College</h2>
          <h3 className="text-2xl md:text-sm">Mansarovar , Jaipur</h3>
          <p className="text-[#fec664] text-lg md:text-sm mt-2">2022-2024</p>
          <p className="text-lg md:text-sm">BCA</p>
          <p className="text-lg md:text-sm">9 CGPA</p>
        </div>
      </div>
    </>
  );
};

export default Education;
