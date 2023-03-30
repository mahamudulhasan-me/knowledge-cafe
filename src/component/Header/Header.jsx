import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between my-3 uppercase py-3 items-center border-b border-b-clr px-[15%]">
      <h1 className="text-3xl font-medium">Knowledge Cafe</h1>
      <img
        className="w-12 h-12 ring  rounded-full"
        src="https://www.electric.ai/wp-content/uploads/2021/11/Jessica.png"
        alt=""
      />
    </div>
  );
};

export default Header;
