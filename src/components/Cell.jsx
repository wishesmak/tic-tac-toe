import React from "react";
import { useGame } from "../contexts/GameContext";
import PlayerImage from "../ui/PlayerImage";

const Cell = ({ cell }) => {
  const { onCellClick } = useGame();

  return (
    <div
      onClick={() => onCellClick(cell)}
      className="h-[100px] w-[100px] bg-gray-700 shadow-bottom rounded-lg flex justify-center items-center cursor-pointer transition hover:bg-gray-600"
    >
      {cell.player && (
        <PlayerImage player={cell.player} w="50" h="50" isColor={true} />
      )}
    </div>
  );
};

export default Cell;
