// types/streamTypes.ts
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
  
  export interface ChessBoardProps {
    game: any; // Using any here because chess.js types are complex
  }