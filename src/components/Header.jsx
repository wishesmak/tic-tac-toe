import React from "react";
import PlayerImage from "../ui/PlayerImage";
import { VscDebugRestart } from "react-icons/vsc";
import { useGame } from "../contexts/GameContext";

const Header = () => {
  const { whoMove, restart } = useGame();

  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex gap-1">
        <PlayerImage w="25" h="25" player="x" isColor={whoMove === "x"} />
        <PlayerImage w="25" h="25" player="y" isColor={whoMove === "o"} />
      </div>
      <div
        onClick={restart}
        className="bg-gray-400 w-8 h-8 rounded-lg text-gray-800 shadow-bottom-gray flex justify-center items-center cursor-pointer transition hover:bg-gray-500"
      >
        <VscDebugRestart className="reverseX " />
      </div>
    </div>
  );
};

export default Header;
