import React from "react";
import { Board, Footer, Header, WinPopup } from "./components";
import { useGame } from "./contexts/GameContext";

function App() {
  const { winner } = useGame();

  return (
    <div className="w-[330px] mx-auto h-screen flex items-center justify-center flex-col gap-3">
      <Header />
      <Board />
      <Footer />
      {winner && <WinPopup winner={winner} />}
    </div>
  );
}

export default App;
