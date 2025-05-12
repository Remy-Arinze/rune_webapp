// types/streamTypes.ts
import { Chess } from 'chess.js';

export interface Message {
  id: number;
  user: string;
  text: string;
  timestamp: string;
}

export interface Reaction {
  id: number;
  type: string;
  x: number;
  y: number;
}

export interface StreamInfoProps {
  title: string;
  streamer: string;
  isPlaying: boolean;
  onTogglePlayPause: () => void;
}

export interface ChatProps {
  messages: Message[];
}

export interface ReactionsProps {
  reactions: Reaction[];
  setReactions: React.Dispatch<React.SetStateAction<Reaction[]>>;
}

// Type for the chess game instance
export type ChessGame = Chess;
// or alternatively:
// export type ChessGame = Chess;

export interface ChessBoardProps {
  game: ChessGame;
}