import React from 'react';

const TournamentOverview = () => {
  const players = [
    { name: 'Player1', rating: 2150 },
    { name: 'Player2', rating: 2125 },
    { name: 'Player3', rating: 2100 },
    { name: 'Player4', rating: 2080 },
    { name: 'Player5', rating: 2050 },
    { name: 'Player6', rating: 2020 },
  ];

  const avgRating = players.reduce((sum, player) => sum + player.rating, 0) / players.length;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[var(--background)] rounded-lg shadow-md text-gray-300">
      {/* Tournament Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-300">
          King of the Hill - Blitz
        </h1>
        <div className="flex items-center mt-2">
          <span className="text-md font-semibold text-gray-300">Entry Rating: 2200</span>
        </div>
      </div>

      {/* Tournament Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Left Column */}
        <div className="bg-[var(--dark)] p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-3 text-gray-500 border-b pb-2">Tournament Details</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-500">Start Date:</span>
              <span className="font-medium">Nov 30, 2023</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Time Control:</span>
              <span className="font-medium">1 day</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">No Vacation</span>
              <span className="font-medium">Yes</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Games Rated:</span>
              <span className="font-medium">Yes</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Rating Range:</span>
              <span className="font-medium">2001 - 2200</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Max Group Size:</span>
              <span className="font-medium">6</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-[var(--dark)] p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-3 text-gray-700 border-b pb-2">Tournament Rules</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-500"># Advance:</span>
              <span className="font-medium">1</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Simultaneous Games:</span>
              <span className="font-medium">10</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Tie Breaks:</span>
              <span className="font-medium">No</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Max Avg. Time/Move:</span>
              <span className="font-medium">12 hours</span>
            </div>
          </div>
        </div>
      </div>

      {/* Notice Box */}
      <div className="bg-[var(--dark)] border-l-4 border-yellow-400 p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-[var(--primary)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-[10px] text-[var(--primary)]">
              This is a &quot;No Vacation &quot; tournament! The requirement for Quick Knockouts tournament is that your average time per move is below 12 hours. You have 1 day move! For any questions, please <a href="#" className="text-yellow-700 underline">click here</a>.
            </p>
          </div>
        </div>
      </div>

      {/* Players and Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-[var(--dark)] p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-3 text-gray-400 border-b pb-2">Players</h2>
          <div className="space-y-2">
            {players.map((player, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-gray-500">{player.name}</span>
                <span className="font-medium">{player.rating}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[var(--dark)] p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-3 text-gray-400 border-b pb-2">Statistics</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-500">Avg Rating:</span>
              <span className="font-medium">{avgRating.toFixed(0)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Points Available:</span>
              <span className="font-medium">Complete</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Round:</span>
              <span className="font-medium">1</span>
            </div>
          </div>
        </div>

        <div className="bg-[var(--dark)] p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-3 text-gray-400 border-b pb-2">Games</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-500">Completed Games:</span>
              <span className="font-medium">5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Remaining Games:</span>
              <span className="font-medium">0 (current r)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Max Timeout %:</span>
              <span className="font-medium">-</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-sm text-gray-500 italic">
        This is the December 2023 Chess960 Chess.com Quick Knockouts Tournament.
      </div>
    </div>
  );
};

export default TournamentOverview;