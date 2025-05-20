import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Wager, SelectedBets } from './types';
import GameButton from '../custom_button';

const SelectedBetsPanel: React.FC<{
  selectedBets: SelectedBets;
  wagers: Wager[];
  onRemoveBet: (matchId: number, betType: string) => void;
  onClearAll: () => void;
}> = ({ selectedBets, wagers, onRemoveBet, onClearAll }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [betAmount, setBetAmount] = useState('');

  const selectedCount = Object.values(selectedBets).reduce(
    (acc, curr) => acc + Object.keys(curr).length, 0
  );

  if (selectedCount === 0) return null;

  const totalOdds = Object.entries(selectedBets).reduce((acc, [, bets]) => {
    return Object.entries(bets).reduce((innerAcc, [, { odds }]) => {
      const [numerator, denominator] = odds.split('/').map(Number);
      return innerAcc * (numerator / denominator);
    }, acc);
  }, 1);

  const handlePlaceBet = () => {
    // Add your bet placement logic here
    console.log(`Placing bet of ${betAmount} RUNE at ${totalOdds.toFixed(2)}x odds`);
  };

  return (
    <div className={`fixed bottom-4 right-4 w-80 bg-[var(--dark)] rounded-xl border border-gray-700 shadow-2xl z-50 transition-all duration-300 ${isExpanded ? 'h-auto' : 'h-14 overflow-hidden'}`}>
      <div 
        className="p-2 border-b border-gray-700 flex justify-between items-center cursor-pointer bg-[var(--primary)]"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="font-semibold text-[14px] text-[var(--background)]">Selected Bets ({selectedCount})</h3>
        <div className="flex items-center">
          <span className="text-[12px] mr-2 text-[var(--background)]">Total: {totalOdds.toFixed(2)}x</span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onClearAll();
            }}
            className="text-white hover:text-gray-200"
          >
            <FaTimes size={14} color='black' />
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <>
          <div className="max-h-64 overflow-y-auto">
            {Object.entries(selectedBets).map(([matchId, bets]) => {
              const wager = wagers.find(w => w.id === Number(matchId));
              if (!wager) return null;

              return Object.entries(bets).map(([betType, { optionIndex, odds }]) => {
                const bet = wager.bets[betType];
                const selectedOption = bet.options[optionIndex];
                
                return (
                  <div key={`${matchId}-${betType}`} className="p-3 border-b border-gray-700 hover:bg-gray-800/50">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium">{wager.player_one} vs {wager.player_two}</p>
                        <p className="text-xs text-gray-400">{bet.title}: {selectedOption.label}</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm font-bold text-[var(--primary)] mr-2">{odds}</span>
                        <button 
                          onClick={() => onRemoveBet(Number(matchId), betType)}
                          className="text-gray-500 hover:text-white"
                        >
                          <FaTimes size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              });
            })}
          </div>

          <div className="p-4 bg-gray-900/50 rounded-b-xl">
            <div className="mb-3">
              <label className="block text-[10px] text-gray-400 mb-2">Amount (RUNE)</label>
              <input
                type="number"
                value={betAmount}
                onChange={(e) => setBetAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full placeholder:text-[10px] bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <GameButton 
              onClick={handlePlaceBet}
              className='w-full'
            >
              Place Bet
            </GameButton>
          </div>
        </>
      )}
    </div>
  );
};

export default SelectedBetsPanel;