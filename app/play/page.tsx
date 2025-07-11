"use client";
import { openModal } from '@/store/ui_slice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { FaUsers, FaGamepad, FaWifi, FaTrophy, FaRobot, FaUserFriends, FaFire } from 'react-icons/fa';
import { GiSwordsEmblem } from 'react-icons/gi';
import { IoMdStats } from 'react-icons/io';

export default function PlayScreen() {
  const dispatch = useDispatch();
  
  return (
    <div className="md:h-[80dvh] overflow-y-scroll no-scrollbar bg-[var(--background)] text-white font-sans bg-[url('/images/game-grid-pattern.svg')] bg-cover">
      <main className="p-6 flex flex-col md:ml-[5%]">
        {/* Stats Cards with Icons */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl">
          <StatCard 
            icon={<FaUsers className="text-blue-400" size={20} />} 
            title="Players" 
            value="85,277" 
            description="Active competitors" 
          />
          <StatCard 
            icon={<FaGamepad className="text-purple-400" size={20} />} 
            title="Games" 
            value="573,866" 
            description="Matches played" 
          />
          <StatCard 
            icon={<FaWifi className="text-green-400" size={20} />} 
            title="Online" 
            value="2,451" 
            description="Players connected" 
          />
          <StatCard 
            icon={<GiSwordsEmblem className="text-red-400" size={20} />} 
            title="Ongoing" 
            value="5" 
            description="Live tournaments" 
          />
        </section>

        {/* Hero Section */}
        {/* <div className="my-12 text-center max-w-2xl bg-gradient-to-r from-orange-500/10 to-purple-500/10 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
          <div className="flex justify-center mb-4">
            <FaTrophy className="text-orange-400" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-orange-400 mb-2">Create Tournament</h3>
          <p className="text-white/80 mb-4">Compete against the best and climb the leaderboards</p>
          <div className="flex items-center justify-center space-x-2 text-yellow-300">
            <FaFire />
            <span className="text-sm font-medium">Season 3 underway</span>
          </div>
        </div> */}

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 mt-10 w-full max-w-2xl">
        <GameButton 
          icon={<FaFire className="mr-2" />}
          label="Instant Play"
          description="Instant 1v1 battles, with random opponents"
          color="bg-gradient-to-r from-orange-500 to-orange-600"
          onClick={() => dispatch(openModal('create_game'))}
        />
        <GameButton 
          icon={<FaRobot className="mr-2" />}
          label="VS AI"
          description="Train against adaptive AI opponents"
          color="bg-gradient-to-r from-purple-500/90 to-purple-600/90"
        />
        <GameButton 
          icon={<FaUserFriends className="mr-2" />}
          label="Challenge"
          description="Duel friends with custom rules"
          color="bg-gradient-to-r from-blue-500/90 to-blue-600/90"
        />
        <GameButton 
          icon={<FaTrophy className="mr-2" />}
          label="Tournaments"
          description="Compete for glory and rewards"
          color="bg-gradient-to-r from-green-500/90 to-green-600/90"
        />
      </div>

        {/* Recent Activity */}
        <div className="mt-12 w-full max-w-2xl">
          <div className="flex items-center mb-4">
            <IoMdStats className="text-white/60 mr-2" />
            <h4 className="font-medium text-white/80">Recent Activity</h4>
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <p className="text-sm text-white/60">Player &quot;ShadowNinja&quot; just reached Diamond tier!</p>
            <p className="text-sm text-white/60 mt-2">Tournament &quot;Summer Showdown&quot; starts in 2 days</p>
          </div>
        </div>
      </main>
    </div>
  );
}

// Reusable Stat Card Component
const StatCard = ({ icon, title, value, description }: { icon: React.ReactNode, title: string, value: string, description: string }) => (
  <div className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors">
    <div className="flex items-center space-x-2 mb-2">
      {icon}
      <span className="text-sm font-medium text-white/60">{title}</span>
    </div>
    <h3 className="text-2xl font-bold mb-1">{value}</h3>
    <p className="text-xs text-white/40">{description}</p>
  </div>
);

// Reusable Game Button Component
const GameButton = ({ icon, label, description, color, onClick }: { 
  icon: React.ReactNode, 
  label: string, 
  description: string, 
  color: string,
  onClick?: () => void 
}) => (
  <button 
    onClick={onClick}
    className={`${color} hover:brightness-110 text-white font-medium py-4 px-4 rounded-xl transition-all flex flex-col items-center justify-center`}
  >
    <div className="flex items-center">
      {icon}
      <span>{label}</span>
    </div>
    <span className="text-xs font-normal mt-1 text-white/80">{description}</span>
  </button>
);