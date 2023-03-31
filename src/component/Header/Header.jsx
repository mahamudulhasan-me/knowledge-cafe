import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between my-3 uppercase py-3 items-center border-b border-b-clr md:px-[15%] px-[5%]">
      <h1 className="md:text-3xl text-xl font-medium">Knowledge Cafe</h1>
      <img
        className="w-12 h-12 ring  rounded-full"
        src="https://www.electric.ai/wp-content/uploads/2021/11/Jessica.png"
        alt=""
      />
    </div>
  );
};

export default Header;
