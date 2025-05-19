import { TournamentCardProps } from "../app/components/TournamentCard";

export const generateTournaments = (count: number): TournamentCardProps[] => {
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
    title: tournamentTitles[i % tournamentTitles.length],
    status: statuses[i % 3],
    imageSrc: `https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
    participants: 200 + Math.floor(Math.random() * 300),
  }));
};