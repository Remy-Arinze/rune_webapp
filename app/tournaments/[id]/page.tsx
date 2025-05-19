'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Trophy, Users, Clock, Coins } from 'lucide-react';
import { generateTournaments } from '@/utils/tournaments';
import GameButton from '@/app/components/custom_button';

export default function TournamentDetail({ params }: { params: { id: string } }) {
  const tournaments = generateTournaments(8);
  const tournament = tournaments.find(t => t.id === params.id);

  if (!tournament) {
    return <div>Tournament not found</div>;
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-white">
      {/* Banner Section */}
      <div className="relative h-[300px] w-full">
        <Image
          src={tournament.imageSrc}
          alt={tournament.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent" />
        
        {/* Back Button */}
        <Link href="/tournaments" className="absolute top-4 left-4 z-10">
          <button className="flex items-center space-x-2 text-white bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-10">
        {/* Tournament Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">{tournament.title}</h1>
            <p className="text-gray-400">{tournament.description}</p>
          </div>
          <div className="flex space-x-4">
            <GameButton>
              <span className="text-[var(--background)]">Watch Live</span>
            </GameButton>
            <GameButton>
              <span className="text-[var(--background)]">Place Bet</span>
            </GameButton>
          </div>
        </div>

        {/* Tournament Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Tournament Details */}
            <div className="bg-[var(--dark)] rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Tournament Details</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="text-[var(--primary)]" />
                  <div>
                    <p className="text-sm text-gray-400">Organizer</p>
                    <p>{tournament.organizer}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-[var(--primary)]" />
                  <div>
                    <p className="text-sm text-gray-400">Date & Time</p>
                    <p>{new Date(tournament.startDate).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Trophy className="text-[var(--primary)]" />
                  <div>
                    <p className="text-sm text-gray-400">Prize Pool</p>
                    <p>{tournament.prizePool}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Coins className="text-[var(--primary)]" />
                  <div>
                    <p className="text-sm text-gray-400">Entry Requirements</p>
                    <p>{tournament.entryRequirements}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reward Tiers */}
            <div className="bg-[var(--dark)] rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Reward Tiers</h2>
              <div className="space-y-4">
                {tournament.rewardTiers.map((tier, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-[var(--background)] rounded-lg">
                    <div>
                      <p className="font-semibold text-[var(--primary)]">{tier.position}</p>
                      <p className="text-sm text-gray-400">{tier.reward}</p>
                    </div>
                    <div className="text-right">
                      {tier.extras?.map((extra, i) => (
                        <p key={i} className="text-sm text-gray-400">{extra}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Players Grid */}
            <div className="bg-[var(--dark)] rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Players</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {tournament.players.map((player) => (
                  <div key={player.id} className="flex items-center space-x-3 p-3 bg-[var(--background)] rounded-lg">
                    <Image
                      src={player.avatar}
                      alt={player.username}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium">{player.username}</p>
                      <p className="text-sm text-gray-400">{player.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tournament Brackets */}
            <div className="bg-[var(--dark)] rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Tournament Brackets</h2>
              {tournament.rounds.map((round) => (
                <div key={round.id} className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Round {round.id}</h3>
                  <div className="space-y-3">
                    {round.matches.map((match) => (
                      <div key={match.id} className="bg-[var(--background)] p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span>{match.player1}</span>
                          <span className="text-[var(--primary)]">VS</span>
                          <span>{match.player2}</span>
                        </div>
                        <div className="text-center mt-2">
                          <span className="text-sm text-gray-400">{match.status}</span>
                          {match.winner && (
                            <span className="text-sm text-[var(--primary)] ml-2">
                              Winner: {match.winner}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}