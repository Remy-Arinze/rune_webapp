"use client"
import { useState, useEffect, useRef } from 'react';
import { Chess } from 'chess.js';
import { Message, Reaction } from '../account/types/stream_types';
import Chat from '../components/stream/chat';
import ChessBoard from '../components/stream/chessboard';
import Reactions from '../components/stream/reactions';
import StreamInfo from '../components/stream/streaminfo';
import GameButton from '../components/custom_button';


const Stream = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageInput, setMessageInput] = useState<string>('');
  const [reactions, setReactions] = useState<Reaction[]>([]);
  const [viewers, setViewers] = useState<number>(1243);
  const [streamTitle] = useState<string>('GM Magnus vs GM Hikaru - World Championship Match');
  const [streamer] = useState<string>('ChessNetwork');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Sample PGN for demo
  const samplePGN = `
    [Event "World Championship"]
    [Site "?"]
    [Date "2023.05.15"]
    [Round "12"]
    [White "Carlsen, Magnus"]
    [Black "Nakamura, Hikaru"]
    [Result "*"]
    
    1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O
  `;

  const gameRef = useRef<Chess>(game);
  const moveIndexRef = useRef<number>(0);
  const movesRef = useRef<string[]>([]);

  // Initialize game from PGN
  useEffect(() => {
    const chess = new Chess();
    chess.loadPgn(samplePGN);
    gameRef.current = chess;
    setGame(chess);
    movesRef.current = chess.history();
    moveIndexRef.current = 0;
  }, [samplePGN]);

  // Simulate live moves
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      if (moveIndexRef.current < movesRef.current.length) {
        const move = movesRef.current[moveIndexRef.current];
        const newGame = new Chess(gameRef.current.fen());
        newGame.move(move);
        gameRef.current = newGame;
        setGame(newGame);
        moveIndexRef.current += 1;
      } else {
        // Reset game when all moves are played
        const chess = new Chess();
        chess.loadPgn(samplePGN);
        gameRef.current = chess;
        setGame(chess);
        movesRef.current = chess.history();
        moveIndexRef.current = 0;
      }
    }, 3000); // Move every 3 seconds

    return () => clearInterval(interval);
  }, [isPlaying,samplePGN]);

  // Simulate random chat messages
  useEffect(() => {
    const chatMessages = [
      "Nice move!",
      "Why not take the pawn?",
      "Magnus is dominating!",
      "Hikaru's time trouble again",
      "Queen sac incoming?",
      "I saw this in a game last week",
      "Brilliant!",
      "What's the eval?",
      "Stockfish says +1.2",
      "This is a known line",
    ];

    const interval = setInterval(() => {
      const randomMessage = chatMessages[Math.floor(Math.random() * chatMessages.length)];
      const randomUser = `User${Math.floor(Math.random() * 1000)}`;
      
      setMessages(prev => [
        ...prev.slice(-50), // Keep only last 50 messages
        {
          id: Date.now(),
          user: randomUser,
          text: randomMessage,
          timestamp: new Date().toLocaleTimeString(),
        }
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Simulate viewer count changes
  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => {
        const change = Math.floor(Math.random() * 10) - 3; // -3 to +6
        return Math.max(1000, prev + change);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    setMessages(prev => [
      ...prev.slice(-50),
      {
        id: Date.now(),
        user: 'You',
        text: messageInput,
        timestamp: new Date().toLocaleTimeString(),
      }
    ]);

    setMessageInput('');
  };

  const addReaction = (reaction: string) => {
    setReactions(prev => [
      ...prev,
      {
        id: Date.now(),
        type: reaction,
        x: Math.random() * 80 + 10, // Random position (10-90%)
        y: Math.random() * 80 + 10,
      }
    ]);
  };

  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <div className="flex flex-col text-white">
      <div className="flex overflow-hidden">
        {/* Main Stream Content */}
        <div className=" flex flex-col relative overflow-hidden w-[50%]">
          <StreamInfo 
            title={streamTitle} 
            streamer={streamer} 
            isPlaying={isPlaying}
            onTogglePlayPause={togglePlayPause}
          />

          <div className="flex-1 flex items-center justify-center p-4 relative">
            <ChessBoard game={game} />
            
            {/* Reactions overlay */}
            <Reactions reactions={reactions} setReactions={setReactions} />
          </div>

          {/* Reactions buttons */}
          <div className="absolute bottom-1 left-4 flex space-x-2 z-10">
            {['❤️', '🔥', '😮', '👏', '♟️'].map((reaction) => (
              <button
                key={reaction}
                onClick={() => addReaction(reaction)}
                className="text-2xl bg-gray-800 bg-opacity-70 rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform"
              >
                {reaction}
              </button>
            ))}
          </div>
        </div>
         {/* Chat Section */}
         <div className="w-80 h-[80dvh] flex flex-col">
          <div className="p-4">
            <h2 className="text-[13px] font-bold">Live Chat</h2>
            <p className="text-[10px] text-gray-400">{viewers.toLocaleString()} viewers</p>
          </div>
          <Chat messages={messages} />
          <form onSubmit={handleSendMessage} className="p-4">
            <div className="flex">
              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Send a message"
                className="flex-1 bg-gray-800 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
                <GameButton className='ml-5 py-1'>
                    <p>Send</p>
                </GameButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Stream;