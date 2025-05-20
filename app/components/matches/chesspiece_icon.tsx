import { FaChess, FaChessKing } from 'react-icons/fa';
import { GiChessPawn, GiChessRook, GiChessBishop, GiChessKnight, GiChessQueen } from 'react-icons/gi';

const ChessPieceIcon = ({ piece }: { piece: string }) => {
  const icons: Record<string, React.ReactNode> = {
    'Queen': <GiChessQueen className="text-purple-400" />,
    'Rook': <GiChessRook className="text-blue-400" />,
    'Bishop': <GiChessBishop className="text-green-400" />,
    'Knight': <GiChessKnight className="text-yellow-400" />,
    'Pawn': <GiChessPawn className="text-gray-400" />,
    'King': <FaChessKing className="text-red-400" />,
    'Default': <FaChess className="text-gray-300" />
  };

  return icons[piece] || icons['Default'];
};

export default ChessPieceIcon;