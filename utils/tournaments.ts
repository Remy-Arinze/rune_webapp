import { TournamentCardProps } from "../app/components/TournamentCard";

export interface Tournament extends TournamentCardProps {
  id: string;
  description?: string;
  organizer?: string;
  startDate?: string;
  endDate?: string;
  prizePool?: string;
  entryRequirements?: string;
  players?: Player[];
  rounds?: Round[];
  totalWagers?: string;
  rewardTiers?: RewardTier[];
  maxParticipants?:number
}

interface Player {
  id: string;
  username: string;
  avatar: string;
  status: string;
}

interface Round {
  id: number;
  matches: Match[];
  status: 'completed' | 'ongoing' | 'upcoming';
}

interface Match {
  id: string;
  player1: string;
  player2: string;
  status: 'completed' | 'ongoing' | 'upcoming';
  winner?: string;
}

interface RewardTier {
  position: string;
  reward: string;
  extras?: string[];
}

export const generateTournaments = (count: number): Tournament[] => {
  const statuses: Array<"live" | "upcoming" | "completed"> = [
    "live",
    "upcoming",
    "completed",
  ];
  
  const tournamentTitles = [
    "Duel at Dawn",
    "Midnight Showdown",
    "Desert Storm",
    "Arctic Assault",
    "Jungle Warfare",
    "Urban Combat",
    "Mountain Siege",
    "Ocean Battle",
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: `t-${i + 1}`,
    title: tournamentTitles[i % tournamentTitles.length],
    description: "Join the ultimate chess tournament where strategy meets glory. Compete against the best players from around the world in this high-stakes battle of minds.",
    status: statuses[i % 3],
    imageSrc: `https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
    participants: 200 + Math.floor(Math.random() * 300),
    maxParticipants:32,
    organizer: "Rune Gaming",
    startDate: "2025-03-01T10:00:00Z",
    endDate: "2025-03-03T18:00:00Z",
    prizePool: "100,000 RUNE",
    entryRequirements: "Minimum rating 1800+",
    totalWagers: "250,000 RUNE",
    players: Array.from({ length: 16 }, (_, j) => ({
      id: `p-${j}`,
      username: `Player${j + 1}`,
      avatar: `https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=100`,
      status: j < 8 ? 'In Round 2' : 'Eliminated'
    })),
    rounds: [
      {
        id: 1,
        status: 'completed',
        matches: Array.from({ length: 4 }, (_, k) => ({
          id: `m-${k}`,
          player1: `Player${k * 2 + 1}`,
          player2: `Player${k * 2 + 2}`,
          status: 'completed',
          winner: `Player${k * 2 + 1}`
        }))
      },
      {
        id: 2,
        status: 'ongoing',
        matches: Array.from({ length: 2 }, (_, k) => ({
          id: `m-${k}`,
          player1: `Player${k * 2 + 1}`,
          player2: `Player${k * 2 + 3}`,
          status: 'ongoing'
        }))
      }
    ],
    rewardTiers: [
      {
        position: "1st",
        reward: "50,000 RUNE",
        extras: ["Exclusive NFT", "Champion Title"]
      },
      {
        position: "2nd",
        reward: "30,000 RUNE",
        extras: ["Rare NFT"]
      },
      {
        position: "3rd",
        reward: "20,000 RUNE",
        extras: ["Common NFT"]
      }
    ]
  }));
};