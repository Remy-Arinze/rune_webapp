import { TournamentCardProps } from "../app/components/TournamentCard";

export const generateTournaments = (count: number): TournamentCardProps[] => {
	const statuses: Array<"live" | "upcoming" | "completed"> = [
		"live",
		"upcoming",
		"completed",
	];
	const tournamentTitles = [
		"The Big 32 Tournament",
		"Chess World Championship",
		"Rapid Fire Challenge",
		"Blitz Masters",
		"Grand Prix Series",
		"King's Gambit Open",
		"Queen's Cup",
		"Pawn Storm Championship",
	];

	return Array.from({ length: count }, (_, i) => ({
		title: tournamentTitles[i % tournamentTitles.length],
		description: [
			"A tournament to show the biggest chess players in the world",
			"Compete against the best in this prestigious event",
			"Fast-paced action with rapid time controls",
			"For blitz specialists only",
			"Series of tournaments with cumulative prizes",
			"Open tournament featuring the King's Gambit",
			"Women's championship event",
			"Aggressive playstyle tournament",
		][i % 8],
		status: statuses[i % 3],
		imageSrc: `/assets/tournament-${(i % 5) + 1}.jpg`, // Assuming you have tournament-1.jpg to tournament-5.jpg
		participants: 32 + i * 12,
		prizePool: `$${(1000 + i * 500).toLocaleString()}`,
		width: "100%",
	}));
};
