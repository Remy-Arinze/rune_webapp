"use client";
import React, { useEffect, useState } from "react";
import { Crown, Trophy, Sword, Coins, Sparkles } from "lucide-react";
import Image from "next/image";
import nft from '../../../public/assets/nft.png';

interface Winner {
  id: string;
  player: string;
  opponent?: string;
  amount: number;
  type: 'match' | 'tournament' | 'bet';
  timestamp: Date;
}

const RecentWinners = () => {
  const [winners, setWinners] = useState<Winner[]>([]);

  // Generate random winners
  useEffect(() => {
    const generateRandomWinner = (): Winner => {
      const types: ('match' | 'tournament' | 'bet')[] = ['match', 'tournament', 'bet'];
      const players = ['0x_Ra', 'CryptoKing', 'NFTQueen', 'DeFiDegen', 'Web3Warrior','majid', 'mason','jeremy','kay mama'];
      const amounts = [125, 250, 500, 750, 1000, 1500];
      
      return {
        id: Math.random().toString(36).substring(7),
        player: players[Math.floor(Math.random() * players.length)],
        opponent: Math.random() > 0.3 ? players[Math.floor(Math.random() * players.length)] : undefined,
        amount: amounts[Math.floor(Math.random() * amounts.length)],
        type: types[Math.floor(Math.random() * types.length)],
        timestamp: new Date(),
      };
    };

    // Initial data
    setWinners(Array.from({ length: 15 }, generateRandomWinner));

    // Simulate new winners every 8-15 seconds
    const interval = setInterval(() => {
      setWinners(prev => {
        const newWinner = generateRandomWinner();
        return [newWinner, ...prev.slice(0, 4)]; // Keep max 5 items
      });
    }, 8000 + Math.random() * 7000);

    return () => clearInterval(interval);
  }, []);

  const getIcon = (type: Winner['type']) => {
    switch (type) {
      case 'match': return <Sword size={14} className="text-orange-400" />;
      case 'tournament': return <Trophy size={14} className="text-yellow-400" />;
      case 'bet': return <Coins size={14} className="text-green-400" />;
    }
  };

  const getActionText = (winner: Winner) => {
    switch (winner.type) {
      case 'match': return `defeated ${winner.opponent}`;
      case 'tournament': return `won the Kings Game tournament`;
      case 'bet': return `won`;
    }
  };

  return (
    <div className="hidden sticky top-1 md:flex flex-col bg-[var(--dark)] rounded-lg w-[20%] min-w-[220px] h-[85dvh] overflow-scroll no-scrollbar p-4 space-y-4">
      <div className="flex items-center space-x-2">
        <Crown className="text-yellow-400" size={18} />
        <h3 className="font-bold text-sm">Recent Winners</h3>
        <Sparkles className="text-orange-400 ml-auto" size={16} />
      </div>

      <div className="space-y-3">
        {winners.map((winner) => (
          <div key={winner.id} className="animate-fade-in bg-[var(--darker)] py-2 rounded-lg">
            <div className="flex items-start space-x-2">
              <div className="relative">
                <Image 
                  src={nft} 
                  alt={winner.player} 
                  width={32} 
                  height={32} 
                  className="rounded-full border border-orange-400"
                />
                <div className="absolute -bottom-1 -right-1">
                  {getIcon(winner.type)}
                </div>
              </div>
              
              <div className="flex-1 flex justify-between">
                <div>
                  <p className="text-xs font-medium">{winner.player}</p>
                <p className="text-[10px] text-gray-400">
                   {getActionText(winner)}
                
                </p>

                </div>
                 
                <p className="text-[10px] text-green-400 font-bold mt-1">
                  +{winner.amount} RUNE
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentWinners;