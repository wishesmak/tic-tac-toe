import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="w-[100px] h-[60px] bg-[#37e6e0] rounded-lg flex justify-center items-center flex flex-col">
        <span className="text-sm text-gray-800">X (YOU)</span>
        <span className="font-semibold text-gray-900">0</span>
      </div>
      <div className="w-[100px] h-[60px] bg-gray-400 rounded-lg flex justify-center items-center flex flex-col">
        <span className="text-sm text-gray-800">TIES</span>
        <span className="font-semibold text-gray-900">0</span>
      </div>
      <div className="w-[100px] h-[60px] bg-[#fc971c] rounded-lg flex justify-center items-center flex flex-col">
        <span className="text-sm text-gray-800">O (CPU)</span>
        <span className="font-semibold text-gray-900">0</span>
      </div>
    </div>
  );
};

export default Footer;
