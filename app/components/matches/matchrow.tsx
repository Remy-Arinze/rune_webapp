import React from 'react';

import { Wager, SelectedBets } from './types';
import BetTypeSection from './bet_typesection';
import ChessPieceIcon from './chesspiece_icon';

const MatchRow: React.FC<{
  wager: Wager;
  selectedBets: SelectedBets;
  onSelectBet: (matchId: number, betType: string, optionIndex: number) => void;
}> = ({ wager, selectedBets, onSelectBet }) => (
  <div className="border-b border-gray-800 last:border-b-0">
    <div className="p-4 flex flex-col md:flex-row">
      <div className="md:w-1/3 mb-4 md:mb-0 md:pr-4 border-b md:border-b-0 md:border-r border-gray-800">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-gray-400 uppercase tracking-wider">{wager.game_type}</span>
          <span className="text-xs bg-gray-800 px-2 py-1 rounded">{wager.time_remaining}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-700 mr-2 flex items-center justify-center">
              <ChessPieceIcon piece="King" />
            </div>
            <span className="font-medium text-xs">{wager.player_one}</span>
          </div>
          <span className="text-gray-500 mx-2">vs</span>
          <div className="flex items-center">
            <span className="font-medium text-xs">{wager.player_two}</span>
            <div className="w-8 h-8 rounded-full bg-gray-700 ml-2 flex items-center justify-center">
              <ChessPieceIcon piece="King" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="md:w-2/3 overflow-x-auto no-scrollbar">
        <div className="flex">
          {Object.entries(wager.bets).map(([betType, betData]) => (
            <BetTypeSection
              key={betType}
              title={betData.title}
              options={betData.options}
              selectedOption={selectedBets[wager.id]?.[betType]?.optionIndex}
              onSelect={(index) => onSelectBet(wager.id, betType, index)}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default MatchRow;