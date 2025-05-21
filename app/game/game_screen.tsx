"use client";

import { useEffect, useRef, useState } from "react";
import { Chess, Move, Square } from "chess.js";
import { RxSpeakerLoud, RxSpeakerOff } from "react-icons/rx";
import { Chessboard } from "react-chessboard";
import { User, Mic, MicOff, MessageSquare, MessageSquareOff, Eye, EyeOff, X, Maximize, Minimize } from "lucide-react";

export default function ChessGameScreen() {
  const [game, setGame] = useState(new Chess());
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const [possibleMoves, setPossibleMoves] = useState<string[]>([]);
  const [whiteTime, setWhiteTime] = useState(180);
  const [blackTime, setBlackTime] = useState(180);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [chatEnabled, setChatEnabled] = useState(true);
  const [micEnabled, setMicEnabled] = useState(true);
  const [opponentMicEnabled, setOpponentMicEnabled] = useState(true);
  const [chatMessages, setChatMessages] = useState<{user: string; message: string}[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [capturedPieces, setCapturedPieces] = useState({
    white: [] as string[],
    black: [] as string[],
  });
  
  const [isStreamer] = useState(false); // Toggle this for streamer view
  const [activeTab, setActiveTab] = useState("chat"); // 'chat' or 'wager'
  
  const containerRef = useRef<HTMLDivElement>(null);
  const chessContainerRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  

  const highlightColor = "var(--primary)";

  // Timer handler
  useEffect(() => {
    const interval = setInterval(() => {
      const turn = game.turn();
      if (turn === "w") {
        setWhiteTime((prev) => (prev > 0 ? prev - 1 : 0));
      } else {
        setBlackTime((prev) => (prev > 0 ? prev - 1 : 0));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [game]);

  // Fullscreen change handler
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Auto-scroll chat
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const formatTime = (time: number) => {
    const min = Math.floor(time / 60).toString().padStart(2, "0");
    const sec = (time % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  };

  // Generate custom square styles
  const customSquareStyles: { [key: string]: { border: string } } = {};
  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

  for (let r = 0; r < ranks.length; r++) {
    for (let f = 0; f < files.length; f++) {
      const square = files[f] + ranks[r];
      const isHighlighted = possibleMoves.includes(square);
      customSquareStyles[square] = {
        border: isHighlighted ? `2px solid ${highlightColor}` : '',
      };
    }
  }

  const onSquareClick = (square: string) => {
    if (selectedSquare && possibleMoves.includes(square)) {
      const move = { from: selectedSquare, to: square, promotion: "q" };
      const result = game.move(move);
      if (result) {
        // Check if a piece was captured
        if (result.captured) {
          const pieceSymbol = getPieceSymbol(result.captured, result.color);
          if (result.color === 'w') {
            setCapturedPieces(prev => ({
              ...prev,
              black: [...prev.black, pieceSymbol]
            }));
          } else {
            setCapturedPieces(prev => ({
              ...prev,
              white: [...prev.white, pieceSymbol]
            }));
          }
        }
        
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

  const getPieceSymbol = (pieceType: string, color: string) => {
    const symbols: Record<string, string> = {
      p: color === 'w' ? '♙' : '♟',
      n: color === 'w' ? '♘' : '♞',
      b: color === 'w' ? '♗' : '♝',
      r: color === 'w' ? '♖' : '♜',
      q: color === 'w' ? '♕' : '♛',
    };
    return symbols[pieceType] || '';
  };

  const handleDoubleClick = async () => {
    if (isStreamer) return; // Disable fullscreen for streamer
    
    if (!document.fullscreenElement && containerRef.current) {
      await containerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages([...chatMessages, { user: "You", message: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div 
      ref={containerRef}
      onDoubleClick={handleDoubleClick} 
      className="w-full h-[80dvh] overflow-scroll no-scrollbar bg-[var(--background)] flex flex-col text-[#D7EBEF] md:px-10"
    >
      <div className="flex flex-row w-full h-full">
        {/* Left Sidebar - Chat */}
        {!isFullscreen && (
          <div className="w-1/4 no-scrollbar flex bg-[var(--dark)] rounded-lg pt-5 flex-col p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm font-semibold">Live Chat</h2>
              {!isStreamer && (
                <button 
                  onClick={() => setChatEnabled(!chatEnabled)}
                  className="p-2 rounded-full hover:bg-gray-700"
                >
                  {chatEnabled ? <MessageSquareOff size={20} /> : <MessageSquare size={20} />}
                </button>
              )}
            </div>
            
            {chatEnabled ? (
              <>
                <div 
                  ref={chatRef}
                  className="flex-1 overflow-y-auto mb-4 space-y-3"
                >
                  {chatMessages.length > 0 ? (
                    chatMessages.map((msg, idx) => (
                      <div key={idx} className="text-sm">
                        <span className="font-bold text-[var(--primary)]">{msg.user}: </span>
                        <span>{msg.message}</span>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500 text-center mt-10">No messages yet</div>
                  )}
                </div>
                
                <div className="flex items-center">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 bg-gray-700 rounded-l-lg px-3 py-2 text-sm focus:outline-none"
                  />
                  <button
                    onClick={sendMessage}
                    className="bg-[var(--primary)] text-white px-3 py-2 rounded-r-lg text-sm"
                  >
                    Send
                  </button>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-gray-500">Chat is disabled</p>
              </div>
            )}
          </div>
        )}

        {/* Main Chess Board */}
        <div className={`flex-1 flex flex-col items-center relative ${isFullscreen ? 'p-0' : 'px-20'}`}>
          {/* Top Player Info */}
          <div className="flex mb-4 items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md bg-[var(--primary)] flex items-center justify-center">
                <User color="var(--background)" />
              </div>
              <div>
                <p className="font-medium text-[12px]">0x_Opponent</p>
                <div className="flex gap-1">
                  {capturedPieces.white.map((piece, idx) => (
                    <span key={idx} className="text-lg">{piece}</span>
                  ))}
                </div>
              </div>
            </div>
            <p className={`text-lg font-bold ${game.turn() === "b" ? "text-[var(--primary)]" : "text-gray-400"}`}>
              {formatTime(blackTime)}
            </p>
          </div>

          {/* Chess Board */}
          <div ref={chessContainerRef} className="flex items-center justify-center">
            <Chessboard
              id="CustomBoard"
              boardWidth={isFullscreen ? Math.min(window.innerHeight * 0.8, window.innerWidth * 0.8) : window.innerWidth * 0.25}
              position={game.fen()}
              arePiecesDraggable={false}
              customSquareStyles={customSquareStyles}
              onSquareClick={onSquareClick}
              customBoardStyle={{ 
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)"
              }}
            />
          </div>

          {/* Bottom Player Info */}
          <div className="flex mt-4 items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <div className="h-8 w-10 rounded-md bg-[var(--primary)] flex items-center justify-center">
                <User color="var(--background)"  />
              </div>
              <div>
                <p className="font-medium text-[12px]">0x_You</p>
                <div className="flex gap-1">
                  {capturedPieces.black.map((piece, idx) => (
                    <span key={idx} className="text-lg">{piece}</span>
                  ))}
                </div>
              </div>
            </div>
            <p className={`text-md font-bold ${game.turn() === "w" ? "text-[var(--primary)]" : "text-gray-400"}`}>
              {formatTime(whiteTime)}
            </p>
          </div>

          {/* Fullscreen Controls (only visible in fullscreen) */}
          {isFullscreen && !isStreamer && (
            <div className="absolute bottom-4 right-4 flex gap-2 bg-[var(--dark)] p-2 rounded-lg">
              <button 
                onClick={() => setMicEnabled(!micEnabled)}
                className="p-2 rounded-full hover:bg-gray-700"
                title={micEnabled ? "Mute Mic" : "Unmute Mic"}
              >
                {micEnabled ? <Mic size={20} /> : <MicOff size={20} />}
              </button>
              <button 
                onClick={() => setOpponentMicEnabled(!opponentMicEnabled)}
                className="p-2 rounded-full hover:bg-gray-700"
                title={opponentMicEnabled ? "Mute Opponent" : "Unmute Opponent"}
              >
                {opponentMicEnabled ? <RxSpeakerLoud size={20} /> : <RxSpeakerOff size={20} />}
              </button>
              <button 
                onClick={() => setChatEnabled(!chatEnabled)}
                className="p-2 rounded-full hover:bg-gray-700"
                title={chatEnabled ? "Hide Chat" : "Show Chat"}
              >
                {chatEnabled ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
              <button 
                onClick={() => document.exitFullscreen()}
                className="p-2 rounded-full hover:bg-gray-700"
                title="Exit Fullscreen"
              >
                <Minimize size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Right Sidebar - Game Options/Wager */}
        {!isFullscreen && (
          <div className="w-1/4 flex flex-col p-4 overflow-scroll no-scrollbar">
            <div className="flex border-b border-gray-700 mb-4">
              <button 
                className={`flex-1 text-sm py-2 ${activeTab === "chat" ? "border-b-2 border-[var(--dark)]" : ""}`}
                onClick={() => setActiveTab("chat")}
              >
                Game
              </button>
              {isStreamer && (
                <button 
                  className={`flex-1 py-2 ext-sm ${activeTab === "wager" ? "border-b-2 border-[var(--dark)]" : ""}`}
                  onClick={() => setActiveTab("wager")}
                >
                  Wager
                </button>
              )}
            </div>

            {activeTab === "chat" ? (
              <>
                <div className="flex flex-col gap-2 text-xs items-start mb-6">
                  <button className="flex items-center gap-2 text-red-400">
                    <X size={18} /> Quit Game
                  </button>
                  <button
                    className="flex items-center gap-2"
                    onClick={() => {
                      const newGame = new Chess();
                      setGame(newGame);
                      setWhiteTime(180);
                      setBlackTime(180);
                      setSelectedSquare(null);
                      setPossibleMoves([]);
                      setCapturedPieces({ white: [], black: [] });
                    }}
                  >
                    <span className="text-lg">🔄</span> Restart Game
                  </button>
                  {!isStreamer && (
                    <button onClick={()=>handleDoubleClick()} className="flex hover:cursor-pointer items-center gap-2">
                      <Maximize size={18} /> Fullscreen
                    </button>
                  )}
                </div>

                <div className="mt-10">
                  <h3 className="font-bold mb-2 text-xs">Captured Pieces</h3>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-gray-400 mb-1 text-[12px]">You captured:</p>
                      <div className="flex gap-1">
                        {capturedPieces.black.map((piece, idx) => (
                          <span key={idx} className="text-xl">{piece}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1 text-[12px]">Opponent captured:</p>
                      <div className="flex gap-1">
                        {capturedPieces.white.map((piece, idx) => (
                          <span key={idx} className="text-xl">{piece}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {!isStreamer && (
                  <div className="space-y-3 mt-10">
                    <div className="flex items-center justify-between">
                      <span className="text-xs">Your Mic:</span>
                      <button 
                        onClick={() => setMicEnabled(!micEnabled)}
                        className={`px-3 py-1 rounded-full text-xs`}
                      >
                        {micEnabled ? <Mic size={20} /> : <MicOff size={20} />}
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs">Opponent Mic:</span>
                      <button 
                        onClick={() => setOpponentMicEnabled(!opponentMicEnabled)}
                        className={`px-3 py-1 rounded-full text-xs`}
                      >
                    {opponentMicEnabled ? <RxSpeakerLoud size={20} /> : <RxSpeakerOff size={20} />}
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs">Chat:</span>
                      <button 
                        onClick={() => setChatEnabled(!chatEnabled)}
                        className={`px-3 py-1 rounded-full text-xs`}
                      >
                    {chatEnabled ? <Eye size={20} /> : <EyeOff size={20} />}
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="space-y-4">
                <h3 className="font-bold">Place Wagers</h3>
                <div className="bg-gray-800 p-3 rounded-lg">
                  <p className="text-sm font-medium mb-2">Match Winner</p>
                  <div className="flex justify-between gap-2">
                    <button className="flex-1 bg-blue-500/20 text-blue-400 py-2 rounded-lg text-sm">
                      Player 1 (1.5x)
                    </button>
                    <button className="flex-1 bg-purple-500/20 text-purple-400 py-2 rounded-lg text-sm">
                      Draw (3.0x)
                    </button>
                    <button className="flex-1 bg-red-500/20 text-red-400 py-2 rounded-lg text-sm">
                      Player 2 (2.0x)
                    </button>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-3 rounded-lg">
                  <p className="text-sm font-medium mb-2">First Piece Lost</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-gray-700/50 py-2 rounded-lg text-sm">♙ (5.0x)</button>
                    <button className="bg-gray-700/50 py-2 rounded-lg text-sm">♘ (8.0x)</button>
                    <button className="bg-gray-700/50 py-2 rounded-lg text-sm">♟ (4.0x)</button>
                    <button className="bg-gray-700/50 py-2 rounded-lg text-sm">♞ (7.0x)</button>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-3 rounded-lg">
                  <p className="text-sm font-medium mb-2">Total Moves</p>
                  <div className="flex justify-between gap-2">
                    <button className="flex-1 bg-gray-700/50 py-2 rounded-lg text-sm">Under 30 (2.0x)</button>
                    <button className="flex-1 bg-gray-700/50 py-2 rounded-lg text-sm">Over 50 (3.0x)</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}