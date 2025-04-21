"use client";
import { Chessboard } from "react-chessboard";

export default function ChessGameScreen() {
  const light = "#D7EBEF";
  const dark = "#74B2BF";

  // Generate full board square styles programmatically
  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

  const customSquareStyles: { [key: string]: { backgroundColor: string; borderRadius: string } } = {};
  for (let r = 0; r < ranks.length; r++) {
    for (let f = 0; f < files.length; f++) {
      const square = files[f] + ranks[r];
      const isLight = (r + f) % 2 === 0;
      customSquareStyles[square] = {
        backgroundColor: isLight ? light : dark,
        borderRadius: "0rem", // optional rounded square edges
      };
    }
  }

  return (
    <div className="w-full h-screen bg-[var(--background)] flex flex-col text-[#D7EBEF]">
      <div className="flex flex-row w-full max-w-7xl">
        {/* Chess Board Center */}
        <div className="flex-1 flex flex-col items-center justify-center relative">
          {/* Top Timer */}
          <p className=" text-[#D7EBEF] text-2xl font-bold p-2 ">
            03:14
          </p>

<div className="flex items-center justify-center ">
            <Chessboard
            id="CustomBoard"
            boardWidth={450}
            customSquareStyles={customSquareStyles}
            customBoardStyle={{
              borderRadius: "2rem",
           
              padding: "1rem",
            }}
          />
</div>

          {/* Bottom Timer */}
          <div className="mt-10 bottom-0 right-0 text-[#D7EBEF] text-sm p-2">
            03:14
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-1/4 flex bg-[var(--dark)] flex-col items-center gap-4 text-[#D7EBEF] py-6 rounded-xl">
          <div className="flex flex-col gap-2 text-xl">
            <div className="flex gap-2">♙♙♙♙♙♙♙♙ ♘♘</div>
            <div className="flex gap-2">♖♖ ♕ ♗♗</div>
            <div className="flex gap-2">♟♟♟♟♟♟♟♟ ♞♞</div>
            <div className="flex gap-2">♜♜ ♛ ♝♝</div>
          </div>

          <div className="flex flex-col gap-4 items-start my-10 text-base">
            <button className="flex items-center gap-2"><span className="text-lg">🏠</span> Quit</button>
            <button className="flex items-center gap-2"><span className="text-lg">🔄</span> Restart</button>
            <button className="flex items-center gap-2"><span className="text-lg">▶️</span> Resume</button>
          </div>

          <div className="flex flex-col gap-2 text-xl">
            <div className="flex gap-2">♟♟♟♟♟♟♟♟ ♞♞</div>
            <div className="flex gap-2">♜♜ ♛ ♝♝</div>
          </div>
        </div>
      </div>
    </div>
  );
}
