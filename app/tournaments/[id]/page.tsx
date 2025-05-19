"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Hero */}
      <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-md">
        <img
          src={tournament.image}
          alt={tournament.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-end p-6">
          <div className="text-white w-full">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">{tournament.title}</h1>
              {/* <Badge className="bg-green-500">{tournament.status}</Badge> */}
            </div>
            <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
              Join Tournament
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="mt-10">
        <TabsList className="flex gap-2 bg-muted p-1 rounded-lg">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="players">Players</TabsTrigger>
          <TabsTrigger value="pairings">Pairings</TabsTrigger>
          <TabsTrigger value="prize">Prizes</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-sm text-gray-700">{tournament.description}</p>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-gray-800">Prize Pool</h3>
              <p>{tournament.prizePool}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Start Time</h3>
              <p>{tournament.startDate} — {tournament.time}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Game Mode</h3>
              <p>{tournament.gameMode}</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium mb-2">Rules</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              {tournament.rules.map((rule, idx) => (
                <li key={idx}>{rule}</li>
              ))}
            </ul>
          </div>
        </TabsContent>

        {/* Players Tab */}
        <TabsContent value="players" className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Players Joined</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {tournament.players.map((player, idx) => (
              <li
                key={idx}
                className="bg-gray-100 rounded-xl px-4 py-2 text-center text-gray-800 font-medium"
              >
                {player}
              </li>
            ))}
          </ul>
        </TabsContent>

        {/* Pairings Tab */}
        <TabsContent value="pairings" className="mt-6">
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
        </TabsContent>

        {/* Prize Tab */}
        <TabsContent value="prize" className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Prize Breakdown</h2>
          <ul className="space-y-3">
            {tournament.prizes.map((prize, idx) => (
              <li
                key={idx}
                className="flex justify-between bg-yellow-50 border border-yellow-300 rounded-md p-3"
              >
                <span className="font-medium text-gray-800">
                  {prize.position === 1
                    ? "🥇 1st Place"
                    : prize.position === 2
                    ? "🥈 2nd Place"
                    : "🥉 3rd Place"}
                </span>
                <span className="text-gray-700 font-semibold">{prize.reward}</span>
              </li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  );
}
