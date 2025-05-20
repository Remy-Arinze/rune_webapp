import React from 'react';
import { IoTrophySharp } from 'react-icons/io5';
import { Tournament } from './types';

const MatchesTournamentCard: React.FC<Tournament> = ({ title, status, prizePool, participants, maxParticipants }) => {
  const statusColors = {
    live: 'bg-red-500',
    upcoming: 'bg-yellow-500',
    completed: 'bg-gray-500'
  };

  return (
    <div className="flex-shrink-0 w-[300px] bg-[var(--dark)] rounded-xl border border-gray-800 overflow-hidden mr-4">
      <div className="relative h-32 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex items-center">
          <span className={`w-2 h-2 rounded-full ${statusColors[status]} mr-2`}></span>
          <span className="text-xs uppercase tracking-wider">{status}</span>
        </div>
        <div className="absolute top-3 right-3 flex items-center bg-black/50 px-2 py-1 rounded-full">
          <IoTrophySharp className="text-yellow-400 mr-1" />
          <span className="text-xs font-bold">{prizePool}</span>
        </div>
        <div className="absolute bottom-4 left-0 right-0 px-4">
          <h3 className="text-lg font-bold text-center">{title}</h3>
          <div className="flex justify-center items-center mt-2 text-xs">
            <span className="flex items-center mr-4">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
              {participants}/{maxParticipants} players
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchesTournamentCard;