import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import { ChessBoardProps } from '@/app/account/types/stream_types';

const ChessBoard = ({ game }: ChessBoardProps) => {
  return (
    <div className="w-full max-w-2xl">
      <Chessboard 
        position={game.fen()} 
        boardWidth={300}
        customBoardStyle={{
          borderRadius: '4px',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)'
        }}
        customDarkSquareStyle={{ backgroundColor: '#779556' }}
        customLightSquareStyle={{ backgroundColor: '#ebecd0' }}
      />
      <div className="mt-4 text-center text-gray-300">
        {/* <p>Current FEN: <span className="font-mono text-sm">{game.fen()}</span></p> */}
      </div>
    </div>
  );
};

export default ChessBoard;