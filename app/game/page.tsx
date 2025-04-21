"use client";

import { useEffect, useRef, useState } from "react";
import { Chess, Move, Square } from "chess.js"; // Install this: `npm i chess.js`
import { Chessboard } from "react-chessboard";
import { User } from "lucide-react";

export default function ChessGameScreen() {
  const [game, setGame] = useState(new Chess());
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const [possibleMoves, setPossibleMoves] = useState<string[]>([]);

  // Define timer state 
  const [whiteTime, setWhiteTime] = useState(180); // in seconds
  const [blackTime, setBlackTime] = useState(180); // in seconds

   const containerRef = useRef<HTMLDivElement>(null);

  const light = "#D7EBEF";
  const dark = "#74B2BF";
  const highlightColor = "var(--primary)";

  // Generate custom square styles
  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const ranks = [8, 7, 6, 5, 4, 3, 2, 1];
  const customSquareStyles: { [key: string]: { backgroundColor: string; borderRadius: string,border: string } } = {};

  // timer handler 
  useEffect(() => {
  const interval = setInterval(() => {
    const turn = game.turn(); // 'w' or 'b'

    if (turn === "w") {
      setWhiteTime((prev) => (prev > 0 ? prev - 1 : 0));
    } else {
      setBlackTime((prev) => (prev > 0 ? prev - 1 : 0));
    }
  }, 1000);

  return () => clearInterval(interval);
}, [game]);

// format time
const formatTime = (time: number) => {
  const min = Math.floor(time / 60).toString().padStart(2, "0");
  const sec = (time % 60).toString().padStart(2, "0");
  return `${min}:${sec}`;
};

  for (let r = 0; r < ranks.length; r++) {
    for (let f = 0; f < files.length; f++) {
      const square = files[f] + ranks[r];
      const isLight = (r + f) % 2 === 0;
      const isHighlighted = possibleMoves.includes(square);
      customSquareStyles[square] = {
         backgroundColor: isLight ? light : dark,
        border: isHighlighted ? `2px solid ${highlightColor}` : '', // highlighted border
        borderRadius: "0rem",
      };
    }
  }

  const onSquareClick = (square: string) => {
    if (selectedSquare && possibleMoves.includes(square)) {
      const move = { from: selectedSquare, to: square, promotion: "q" };
      const result = game.move(move);
      if (result) {
        setGame(new Chess(game.fen()));
        setSelectedSquare(null);
        setPossibleMoves([]);
      }
    } else {
        const moves = game.moves({ square: square as Square, verbose: true }) as Move[];
        if (moves.length > 0) {
        setSelectedSquare(square);
        setPossibleMoves(moves.map((m) => m.to));
      } else {
        setSelectedSquare(null);
        setPossibleMoves([]);
      }
    }
  };

   // Fullscreen toggle handler
    const handleDoubleClick = async () => {
    if (!document.fullscreenElement && containerRef.current) {
      await containerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div  ref={containerRef}
    onDoubleClick={handleDoubleClick} className="w-full h-screen bg-[var(--background)] flex flex-col text-[#D7EBEF]">
      <div className="flex flex-row w-full max-w-7xl">
        {/* Chess Board Center */}
        <div className="flex-1 flex flex-col items-center justify-center relative">
          {/* Top Timer */}
          <div className="flex mb-5 items-center justify-between w-[55%]">
  <div className="flex items-center gap-2">
    <div className="h-[40px] w-[40px] rounded-md bg-[var(--primary)] flex items-center justify-center">
      <User color="var(--background)" />
    </div>
    <p>0x_Ra</p>
  </div>
  <p
    className={`text-2xl font-bold ${
      game.turn() === "b" ? "text-[var(--primary)]" : "text-gray-400"
    }`}
  >
    {formatTime(blackTime)}
  </p>
</div>

          <div className="flex items-center justify-center">
            <Chessboard
              id="CustomBoard"
              boardWidth={450}
              position={game.fen()}
              customSquareStyles={customSquareStyles}
              onSquareClick={onSquareClick}
              customBoardStyle={{ borderRadius: "2rem", padding: "1rem" }}
            />
          </div>

          {/* Bottom Timer */}
          <div className="flex mt-10 items-center justify-between w-[55%]">
  <div className="flex items-center gap-2">
    <div className="h-[40px] w-[40px] rounded-md bg-[var(--primary)] flex items-center justify-center">
      <User color="var(--background)" />
    </div>
    <p>0x_Ra</p>
  </div>
  <p
    className={`text-2xl font-bold ${
      game.turn() === "w" ? "text-[var(--primary)]" : "text-gray-400"
    }`}
  >
    {formatTime(whiteTime)}
  </p>
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
            <button className="flex items-center gap-2">
              <span className="text-lg">🏠</span> Quit
            </button>
            <button
              className="flex items-center gap-2"
              onClick={() => {
                const newGame = new Chess();
                setGame(newGame);
                setSelectedSquare(null);
                setPossibleMoves([]);
              }}
            >
              <span className="text-lg">🔄</span> Restart
            </button>
            <button className="flex items-center gap-2">
              <span className="text-lg">▶️</span> Resume
            </button>
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
