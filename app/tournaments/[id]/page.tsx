"use client";

import GameButton from "@/app/components/custom_button";
import { CustomTabs } from "@/app/components/tab_component";
import TournamentOverview from "@/app/components/tournaments/tournament_overview";
// import { Badge } from "@/components/ui/badge";
import {  Coins } from "lucide-react";
import { BsAward, BsCalendarEvent, BsPersonCircle, BsRecord2Fill } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";

export default function TournamentDetailsPage() {
  const tournament = {
    title: "King of the Hill - Blitz",
    image: `https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
    status: "Ongoing",
    description: "Join the most intense blitz tournament this weekend. Play fast, win big.",
    prizePool: "₦50,000",
    startDate: "May 25, 2025",
    time: "5:00 PM WAT",
    gameMode: "1v1 Blitz",
    rules: [
      "Each match is 3 minutes.",
      "No rematches.",
      "Top 3 split the prize pool.",
    ],
    players: [
      "PlayerOne",
      "BlitzMaster",
      "CheckmateQueen",
      "DarkKnight42",
      "GambitGod",
    ],
    pairings: [
      { round: 1, p1: "PlayerOne", p2: "BlitzMaster" },
      { round: 1, p1: "CheckmateQueen", p2: "DarkKnight42" },
    ],
    prizes: [
      { position: 1, reward: "₦25,000" },
      { position: 2, reward: "₦15,000" },
      { position: 3, reward: "₦10,000" },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto pr-10 overflow-y-scroll no-scrollbar h-[80dvh]">
      {/* Hero */}
      <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-md">
        <img
          src={tournament.image}
          alt={tournament.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-end p-6">
          <div className="text-white w-full">
            <div className="flex items-center mb-4 space-x-10">
              <span className="rounded-lg bg-green-400 text-[10px] px-2 py-1 flex items-center" > <BsRecord2Fill color="green"/> Live</span>
              <p className="text-[12px] text-gray-400">Round 3 of 5</p>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">{tournament.title}</h1>
              {/* <Badge className="bg-green-500">{tournament.status}</Badge> */}
            </div>
            <p className="mb-3">
              Monthly premier tournament for top ranked players
            </p>
          <div className="flex items-center space-x-3">
              <GameButton className="mt-2 text-[13px]">
              Join Tournament
            </GameButton>
              <GameButton className="mt-2 text-[13px] flex items-center space-x-2">
             <FaCoins className="inline text-black"/> <span>Place Bets</span>
            </GameButton>
          </div>
            <div className="flex mt-5 items-center justify-between">
              <div className="flex item-center space-x-3 text-[12px]"> 
              <BsCalendarEvent /> <p>May 20,2025</p> <p>May 30, 2025</p>

              </div>
              <div className='flex items-center space-x-2 text-[12px]'>
                <BsPersonCircle/>
                <p>22/32 Players</p>
              </div>
              <div className="flex items-center space-x-2 text-[15px]">

              <Coins/>
                <p className="flex">Entry: 500 RUNE</p>
              </div>
              <div className='flex font-bold items-center text-[var(--primary)] space-x-1 text-[15px]'>
                <BsAward />
                <p>Prize: 10,000 RUNE</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <CustomTabs
      hasBackgroundColor={false}
       tabs={[

        {label:"Overview",value:"overview"},
        {label:"Players",value:"players"},
        {label:"Pairings",value:"pairings"},
        {label:"Prize",value:"prize"},
      ]} >
        

        {/* Overview Tab */}
       <TournamentOverview/>

        {/* Players Tab */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Players Joined</h2>
          <ul className="grid grid-cols-1 gap-3">
            {tournament.players.map((player, idx) => (
              <li
                key={idx}
                className="bg-[var(--dark)] rounded-xl px-4 py-2 text-gray-300 font-medium"
              >
                {player}
              </li>
            ))}
          </ul>
        </div>

        {/* Pairings Tab */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Round Pairings</h2>
          <ul className="space-y-4">
            {tournament.pairings.map((pair, idx) => (
              <li key={idx} className="bg-gray-50 border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <p className="text-gray-700 font-semibold">Round {pair.round}</p>
                  <p className="text-gray-600">{pair.p1} vs {pair.p2}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Prize Tab */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Prize Breakdown</h2>
          <ul className="space-y-3">
            {tournament.prizes.map((prize, idx) => (
              <li
                key={idx}
                className="flex justify-between bg-[var(--dark)] rounded-md p-3"
              >
                <span className="font-medium text-gray-400">
                  {prize.position === 1
                    ? "🥇 1st Place"
                    : prize.position === 2
                    ? "🥈 2nd Place"
                    : "🥉 3rd Place"}
                </span>
                <span className="text-[var(--primary)] font-semibold">{prize.reward}</span>
              </li>
            ))}
          </ul>
        </div>
      </CustomTabs>
    </div>
  );
}
