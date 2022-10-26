import React from "react";
import { Board, Footer, Header } from "./components";

function App() {
  return (
    <div className="w-[330px] mx-auto h-screen flex items-center justify-center flex-col gap-3">
      <Header />
      <Board />
      <Footer />
    </div>
  );
}

export default App;
