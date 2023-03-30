import React from "react";

const Tag = (props) => {
  return (
    <div className="bg-[#2A3347] flex gap-1 border border-b-clr rounded-md p-1 ">
      <h6 className="text-sm">{props.icon}</h6>
      <p className="text-sm">{props.title}</p>
    </div>
  );
};

export default Tag;
