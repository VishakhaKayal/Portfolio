import React from "react";

const Heading = ({ sectionName }) => {
  return (
    <div class="main">
      <h2 className="text-5xl font-bold mb-4">{sectionName}</h2>
    </div>
  );
};

export default Heading;
