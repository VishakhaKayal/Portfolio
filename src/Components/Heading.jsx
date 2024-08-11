import React from "react";

const Heading = ({ sectionName }) => {
  return (
    <div className="main">
      <h2 className="text-5xl font-bold mb-4">{sectionName}</h2>
    </div>
  );
};

export default Heading;
