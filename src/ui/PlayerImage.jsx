const PlayerImage = ({ w, h, player, isColor }) => {
  return player === "x" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none" />
      <line
        x1="200"
        x2="56"
        y1="56"
        y2="200"
        fill="none"
        stroke={isColor ? "#37e6e0" : "rgb(107 114 128)"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="50"
      />
      <line
        x1="200"
        x2="56"
        y1="200"
        y2="56"
        fill="none"
        stroke={isColor ? "#37e6e0" : "rgb(107 114 128)"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="50"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox="0 0 24 24"
      fill={isColor ? "#fc971c" : "rgb(107 114 128)"}
    >
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 10c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.2 5 5z" />
    </svg>
  );
};

export default PlayerImage;
