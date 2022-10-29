import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import initialBoard from "../utils/initialBoard";
import winCombinations from "../utils/winCombinations";

const GameContext = createContext();

export const useGame = () => {
  return useContext(GameContext);
};

export const GameContextProvider = ({ children }) => {
  const [board, setBoard] = useState(initialBoard);
  const [whoMove, setWhoMove] = useState("x");
  const [winScore, setWinScore] = useState({ playerX: 0, ties: 0, playerO: 0 });
  const [winner, setWinner] = useState(null);
  const [roundScore, setRoundScore] = useState({ playerX: [], playerO: [] });

  const onCellClick = (clickedCell) => {
    if (!clickedCell.player) {
      setBoard((prevBoard) =>
        prevBoard.map((cell) =>
          cell.id === clickedCell.id ? { ...cell, player: whoMove } : cell
        )
      );

      setRoundScore(
        whoMove === "x"
          ? { ...roundScore, playerX: [...roundScore.playerX, clickedCell.id] }
          : { ...roundScore, playerO: [...roundScore.playerO, clickedCell.id] }
      );

      setWhoMove(whoMove === "x" ? "o" : "x");
    }
  };

  const restart = () => {
    setBoard(initialBoard);
    setWhoMove("x");
    setWinScore({ playerX: 0, ties: 0, playerO: 0 });
    setWinner(null);
    setRoundScore({ playerX: [], playerO: [] });
  };

  const nextRound = () => {
    setBoard(initialBoard);
    setWhoMove("x");
    setWinner(null);
    setRoundScore({ playerX: [], playerO: [] });
  };

  useEffect(() => {
    for (let i = 0; i < winCombinations.length; i++) {
      if (
        roundScore.playerX.includes(winCombinations[i][0]) &&
        roundScore.playerX.includes(winCombinations[i][1]) &&
        roundScore.playerX.includes(winCombinations[i][2])
      ) {
        setWinner("x");
        setWinScore({ ...winScore, playerX: winScore.playerX + 1 });
      } else if (
        roundScore.playerO.includes(winCombinations[i][0]) &&
        roundScore.playerO.includes(winCombinations[i][1]) &&
        roundScore.playerO.includes(winCombinations[i][2])
      ) {
        setWinner("o");
        setWinScore({ ...winScore, playerO: winScore.playerO + 1 });
      } else if (board.every((cell) => cell.player)) {
        setWinner("ties");
        setWinScore({ ...winScore, ties: winScore.ties + 1 });
      }
    }
  }, [whoMove]);

  const value = {
    board,
    whoMove,
    winScore,
    winner,
    restart,
    onCellClick,
    nextRound,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
