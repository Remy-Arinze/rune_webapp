'use client'
import React, { useState } from 'react';
import { HorizontalScrollContainer } from '../components/horizontal_scroll';
import { IoTrophySharp } from 'react-icons/io5';
import { FaCrown } from 'react-icons/fa';

// Type definitions
type BetOption = {
  label: string;
  odds: string;
};

type BetType = {
  title: string;
  options: BetOption[];
};

type Wager = {
  id: number;
  player_one: string;
  player_two: string;
  time_remaining: string;
  game_type: string;
  bets: Record<string, BetType>;
};

type Tournament = {
  title: string;
};

type SelectedBets = {
  [matchId: number]: {
    [betType: string]: number;
  };
};

// Reusable BetOption component
const BetOption: React.FC<{
  odds: string;
  isSelected: boolean;
  onClick: () => void;
}> = ({ odds, isSelected, onClick }) => {
  return (
    <div 
      className={`rounded-md h-[40px] w-[40px] flex items-center justify-center text-[10px] 
        ${isSelected ? 'bg-[var(--primary)] text-white' : 'bg-[var(--background)] text-gray-400'}
        cursor-pointer transition-colors`}
      onClick={onClick}
    >
      <p>{odds}</p>
    </div>
  );
};

// Reusable BetTypeSection component
const BetTypeSection: React.FC<{
  title: string;
  options: BetOption[];
  selectedOption: number | undefined;
  onSelect: (index: number) => void;
}> = ({ title, options, selectedOption, onSelect }) => {
  return (
    <div className='mb-4 border border-[transparent] border-r-gray-500 pr-2 mr-2'>
      <p className='text-gray-400 text-[10px] mb-1'>{title}</p>
      <div className="flex space-x-3">
        {options.map((option, index) => (
          <BetOption
            key={index}
            odds={option.odds}
            isSelected={selectedOption === index}
            onClick={() => onSelect(index)}
          />
        ))}
      </div>
    </div>
  );
};

const Matches: React.FC = () => {
  const [selectedBets, setSelectedBets] = useState<SelectedBets>({});

  const topTournaments: Tournament[] = [
    { title: 'World Series Chess 2025' },
    { title: 'Grandmaster Blitz Championship' },
    { title: 'Rapid Chess Open' },
    { title: 'Bullet Chess Tournament' },
  ];

  const wagers: Wager[] = [
    {
      id: 1,
      player_one: "0x_Ra",
      player_two: "0x_Dann",
      time_remaining: "1:34:00",
      game_type: "Blitz",
      bets: {
        match_winner: {
          title: "1x2",
          options: [
            { label: "Player 1 Win", odds: "19/1" },
            { label: "Draw", odds: "5/1" },
            { label: "Player 2 Win", odds: "29/100" }
          ]
        },
        piece_loss: {
          title: "First Piece Lost",
          options: [
            { label: "Player 1 Queen", odds: "20/1" },
            { label: "Player 1 Knight", odds: "10/1" },
            { label: "Player 2 Queen", odds: "15/1" },
            { label: "Player 2 Bishop", odds: "8/1" }
          ]
        },
        checkmate_type: {
          title: "Checkmate Type",
          options: [
            { label: "Classic", odds: "3/1" },
            { label: "Fool's Mate", odds: "50/1" },
            { label: "Smothered", odds: "15/1" }
          ]
        },
        move_count: {
          title: "Total Moves",
          options: [
            { label: "Under 30", odds: "2/1" },
            { label: "30-50", odds: "3/1" },
            { label: "Over 50", odds: "5/1" }
          ]
        }
      }
    },
    {
      id: 2,
      player_one: "0x_Kasparov",
      player_two: "0x_Carlsen",
      time_remaining: "2:15:00",
      game_type: "Classical",
      bets: {
        match_winner: {
          title: "1x2",
          options: [
            { label: "Player 1 Win", odds: "5/2" },
            { label: "Draw", odds: "3/1" },
            { label: "Player 2 Win", odds: "4/7" }
          ]
        },
        piece_loss: {
          title: "First Piece Lost",
          options: [
            { label: "Player 1 Rook", odds: "7/1" },
            { label: "Player 1 Pawn", odds: "1/2" },
            { label: "Player 2 Queen", odds: "12/1" }
          ]
        }
      }
    }
  ];

  const handleBetSelection = (matchId: number, betType: string, optionIndex: number) => {
    setSelectedBets(prev => ({
      ...prev,
      [matchId]: {
        ...prev[matchId],
        [betType]: optionIndex
      }
    }));
  };

  return (
    <div className='pr-10'>
      <HorizontalScrollContainer>
        {topTournaments.map((tournament, index) => (
          <div 
            key={index} 
            className='flex-shrink-0 w-[40%] p-2 bg-[var(--dark)] rounded-md mr-10 flex flex-col items-center justify-center'
          >
            <div className='flex space-x-2 mb-5 items-center'>
              <IoTrophySharp />
              <p>{tournament.title}</p>
            </div>
          </div>
        ))}
      </HorizontalScrollContainer>
      
      <p className='mt-5 space-x-2 flex text-[12px] items-center'> 
        <span className='mr-3'><FaCrown color='var(--primary)'/></span> Top Matches
      </p>

      <div className='bg-[var(--dark)] h-[55dvh] overflow-y-scroll no-scrollbar mt-2 rounded-t-md'>
        {wagers.map((wager) => (
          <div key={wager.id} className='flex py-2 px-2 items-center border-[transparent] border border-b-gray-700'>
            <div className='w-[40%] border-[transparent] border border-r-gray-500 pr-2'>
              <p className='text-[10px] text-gray-400 flex items-center justify-between'>
                {wager.game_type} <span>{wager.time_remaining}</span>
              </p>
              <div className='flex items-center space-x-3'>
                <div className='flex items-center space-x-2 mt-2'>
                  <div className='h-10 w-10 rounded-lg bg-[var(--background)]'></div>
                  <p className='text-[12px]'>{wager.player_one}</p>
                </div>
                <p className='text-gray-500 text-[10px]'>vs</p>
                <div className='flex items-center space-x-2 mt-2'>
                  <div className='h-10 w-10 rounded-lg bg-[var(--background)]'></div>
                  <p className='text-[12px]'>{wager.player_two}</p>
                </div>
              </div>
            </div>
            
            
            <div className='w-[60%] overflow-x-scroll no-scrollbar flex h-full ml-4 pl-2'>
              {Object.entries(wager.bets).map(([betType, betData]) => (
                <BetTypeSection
                  key={betType}
                  title={betData.title}
                  options={betData.options}
                  selectedOption={selectedBets[wager.id]?.[betType]}
                  onSelect={(index) => handleBetSelection(wager.id, betType, index)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;