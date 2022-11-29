import Popup from "./Popup";
import PlayerImage from "../ui/PlayerImage";
import { useGame } from "../contexts/GameContext";

const WinPopup = ({ winner }) => {
  const { nextRound } = useGame();

  return (
    <Popup>
      <div className="text-center flex flex-col h-[150px] justify-center gap-3">
        <div className="flex mx-auto items-center gap-3">
          <PlayerImage isColor={true} player={winner} w="40" h="40" />
          <p className={`text-gray-900 font-bold text-3xl `}>TAKES THE ROUND</p>
        </div>
        <div>
          <button
            onClick={nextRound}
            className={`bg-[${
              winner === "x" ? "#37e6e0" : "#fc971c"
            }] px-4 py-2 rounded-lg font-semibold text-gray-800`}
          >
            NEXT ROUND
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default WinPopup;
