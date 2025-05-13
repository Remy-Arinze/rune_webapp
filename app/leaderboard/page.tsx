import React from 'react';
import NFT from '../../public/assets/nft.png'
import Image from 'next/image';
import { CustomTabs } from '../components/tab_component';

// Define types for our data
type ChessPlayer = {
  id: number;
  name: string;
  level: 'Grandmaster' | 'International Master' | 'Candidate Master' | 'Expert';
  points: number;
  country: string;
  isOnline: boolean;
  image: string;
  flag: string;
};

type GroupedPlayers = {
  [key in ChessPlayer['level']]: ChessPlayer[];
};

const Leaderboard: React.FC = () => {
  // Sample chess players data with type annotation
  const chessPlayers: ChessPlayer[] = [
    {
      id: 1,
      name: 'Magnus Carlsen',
      level: 'Grandmaster',
      points: 2876,
      country: 'Norway',
      isOnline: true,
      image: 'https://images.chesscomfiles.com/uploads/v1/user/10500603.5a7c9131.200x200o.7c8a7d2b1f2c@2x.png',
      flag: 'https://cdn.countryflags.com/thumbs/norway/flag-400.png',
    },
    {
      id: 2,
      name: 'Fabiano Caruana',
      level: 'Grandmaster',
      points: 2820,
      country: 'USA',
      isOnline: true,
      image: 'https://images.chesscomfiles.com/uploads/v1/user/5001883.8a7a0a8a.200x200o.5a8a4c5b5a8a@2x.png',
      flag: 'https://cdn.countryflags.com/thumbs/united-states-of-america/flag-400.png',
    },
    {
      id: 3,
      name: 'Ding Liren',
      level: 'Grandmaster',
      points: 2812,
      country: 'China',
      isOnline: false,
      image: 'https://images.chesscomfiles.com/uploads/v1/user/15871481.5c6c0a4c.200x200o.7d4d5a5b5a8a@2x.png',
      flag: 'https://cdn.countryflags.com/thumbs/china/flag-400.png',
    },
    {
      id: 4,
      name: 'Ian Nepomniachtchi',
      level: 'Grandmaster',
      points: 2795,
      country: 'Russia',
      isOnline: true,
      image: 'https://images.chesscomfiles.com/uploads/v1/user/1410965.3e0d8c6e.200x200o.6d6d6d6d6d6d@2x.png',
      flag: 'https://cdn.countryflags.com/thumbs/russia/flag-400.png',
    },
    {
      id: 5,
      name: 'Alireza Firouzja',
      level: 'Grandmaster',
      points: 2785,
      country: 'France',
      isOnline: false,
      image: 'https://images.chesscomfiles.com/uploads/v1/user/10232072.4a8a4a8a.200x200o.5a8a4c5b5a8a@2x.png',
      flag: 'https://cdn.countryflags.com/thumbs/france/flag-400.png',
    },
    {
      id: 6,
      name: 'Hikaru Nakamura',
      level: 'International Master',
      points: 2650,
      country: 'USA',
      isOnline: true,
      image: 'https://images.chesscomfiles.com/uploads/v1/user/10232072.4a8a4a8a.200x200o.5a8a4c5b5a8a@2x.png',
      flag: 'https://cdn.countryflags.com/thumbs/united-states-of-america/flag-400.png',
    },
    {
      id: 7,
      name: 'Levy Rozman',
      level: 'International Master',
      points: 2450,
      country: 'USA',
      isOnline: true,
      image: 'https://images.chesscomfiles.com/uploads/v1/user/10232072.4a8a4a8a.200x200o.5a8a4c5b5a8a@2x.png',
      flag: 'https://cdn.countryflags.com/thumbs/united-states-of-america/flag-400.png',
    },
    {
      id: 8,
      name: 'Anna Cramling',
      level: 'International Master',
      points: 2400,
      country: 'Sweden',
      isOnline: false,
      image: 'https://images.chesscomfiles.com/uploads/v1/user/10232072.4a8a4a8a.200x200o.5a8a4c5b5a8a@2x.png',
      flag: 'https://cdn.countryflags.com/thumbs/sweden/flag-400.png',
    },
    {
      id: 9,
      name: 'John Doe',
      level: 'Candidate Master',
      points: 2200,
      country: 'Germany',
      isOnline: true,
      image: 'https://images.chesscomfiles.com/uploads/v1/user/10232072.4a8a4a8a.200x200o.5a8a4c5b5a8a@2x.png',
      flag: 'https://cdn.countryflags.com/thumbs/germany/flag-400.png',
    },
    {
      id: 10,
      name: 'Jane Smith',
      level: 'Candidate Master',
      points: 2150,
      country: 'UK',
      isOnline: false,
      image: 'https://images.chesscomfiles.com/uploads/v1/user/10232072.4a8a4a8a.200x200o.5a8a4c5b5a8a@2x.png',
      flag: 'https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png',
    },
    {
      id: 11,
      name: 'Alex Johnson',
      level: 'Expert',
      points: 2000,
      country: 'Canada',
      isOnline: true,
      image: 'https://images.chesscomfiles.com/uploads/v1/user/10232072.4a8a4a8a.200x200o.5a8a4c5b5a8a@2x.png',
      flag: 'https://cdn.countryflags.com/thumbs/canada/flag-400.png',
    },
    {
      id: 12,
      name: 'Maria Garcia',
      level: 'Expert',
      points: 1950,
      country: 'Spain',
      isOnline: true,
      image: 'https://images.chesscomfiles.com/uploads/v1/user/10232072.4a8a4a8a.200x200o.5a8a4c5b5a8a@2x.png',
      flag: 'https://cdn.countryflags.com/thumbs/spain/flag-400.png',
    },
  ];

  // Group players by level in hierarchy order
  const levelsHierarchy: ChessPlayer['level'][] = [
    'Grandmaster',
    'International Master',
    'Candidate Master',
    'Expert',
  ];

  const groupedPlayers = chessPlayers.reduce<GroupedPlayers>((acc, player) => {
    if (!acc[player.level]) {
      acc[player.level] = [];
    }
    acc[player.level].push(player);
    return acc;
  }, {} as GroupedPlayers);



  interface PlayerItemProps {
    player: ChessPlayer;
  }

  const PlayerItem: React.FC<PlayerItemProps> = ({ player }) => (
    <div className="flex w-[48%] bg-[var(--dark)] items-center p-2 rounded-2xl mb-2 hover:bg-gray-900 transition-colors">
      <div className="relative mr-4">
        <Image 
          src={NFT} 
          alt="" 
          className="w-12 h-12 rounded-xl object-cover"
        />
        <span 
          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${player.isOnline ? 'bg-green-500' : 'bg-red-500'}`}
        ></span>
      </div>
      <div className=" flex items-center justify-between flex-1">
        <h3 className="font-medium text-[13px] ">{player.name}  <span className="text-[12px] block text-gray-500">{player.points} pts</span>
</h3>
        
        <div className="">
          <Image 
            src={player.flag} 
            alt={player.country} 
            className="w-5 h-4 mr-2"
          />
          <span className="text-[10px] text-gray-500">online</span>
        </div>
      </div>
    </div>
  );

  interface LevelSectionProps {
    level: ChessPlayer['level'];
  }

  const LevelSection: React.FC<LevelSectionProps> = ({ level }) => (
    <div key={level} className="mb-10 rounded-lg overflow-hidden shadow-md">
      <div className={`flex justify-between items-center px-4`}>
        <h2 className="text-lg font-bold text-white">{level}</h2>
        <button className="text-white text-[10px] hover:text-gray-200">
          View more
        </button>
      </div>
      <div className=" flex flex-wrap space-x-2 mt-1">
        {groupedPlayers[level]?.slice(0, 4).map(player => (
          <PlayerItem key={player.id} player={player} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto overflow-y-scroll no-scrollbar h-[80dvh]">
      <CustomTabs hasBackgroundColor={false} tabs={[
        { value: 'world_ranking', label: 'World Ranking' },
        { value: 'chess.com', label: 'Chess.com' },

      ]}>

      <div className="space-y-6">
        {levelsHierarchy.map(level => (
          <LevelSection key={level} level={level} />
        ))}
      </div>

      <div>chess.com</div>
      </CustomTabs>
    </div>
  );
};

export default Leaderboard;