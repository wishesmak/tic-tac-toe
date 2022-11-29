import { useGame } from "../contexts/GameContext";
import Cell from "./Cell";

const Board = () => {
  const { board } = useGame();

  return (
    <div className="flex flex-wrap gap-[15px] w-[330px] h-[330px]">
      {board.map((cell) => (
        <Cell key={cell.id} cell={cell} />
      ))}
    </div>
  );
};

export default Board;
