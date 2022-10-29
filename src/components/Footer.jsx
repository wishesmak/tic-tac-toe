import React from "react";
import { useGame } from "../contexts/GameContext";

const Footer = () => {
  const { winScore } = useGame();

  return (
    <div className="w-full flex justify-between">
      <div className="w-[100px] h-[60px] bg-[#37e6e0] rounded-lg flex justify-center items-center flex flex-col">
        <span className="text-sm text-gray-800">X (Player 1)</span>
        <span className="font-semibold text-gray-900">{winScore.playerX}</span>
      </div>
      <div className="w-[100px] h-[60px] bg-gray-400 rounded-lg flex justify-center items-center flex flex-col">
        <span className="text-sm text-gray-800">TIES</span>
        <span className="font-semibold text-gray-900">{winScore.ties}</span>
      </div>
      <div className="w-[100px] h-[60px] bg-[#fc971c] rounded-lg flex justify-center items-center flex flex-col">
        <span className="text-sm text-gray-800">O (Player 2)</span>
        <span className="font-semibold text-gray-900">{winScore.playerO}</span>
      </div>
    </div>
  );
};

export default Footer;
