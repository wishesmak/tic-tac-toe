import { createContext, useContext, useState } from "react";
import initialBoard from "../utils/initialBoard";

const GameContext = createContext();

export const useGame = () => {
  return useContext(GameContext);
};

export const GameContextProvider = ({children}) => {
  const [board, setBoard] = useState(initialBoard);

  const value = { board };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
