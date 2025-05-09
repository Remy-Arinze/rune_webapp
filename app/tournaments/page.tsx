import React from "react";
import {
	FaGamepad,
	FaCalendarAlt,
	FaHistory,
	FaTrophy,
	FaUsers,
} from "react-icons/fa";

const TournamentsPage = () => {
	// Tournament data
	const pastTournaments = [
		{ month: "AUGUST", points: "1,000.00 pts", type: "Joint Tournament" },
		{ month: "HISTORY", time: "10:24 Socks" },
		{ month: "Fertime", time: "20:12 GAMES R&S" },
	];

	const upcomingTournaments = [
		{
			title: "Winter 2025 Tournament",
			description:
				"Compete with your friends in this winter season themed championship.",
			points: "10:00 pts",
			type: "Joint Tournament",
		},
		{
			title: "Fortnite Epic Challenge",
			description:
				"The incredible challenge awaits you in this random panzyroth.",
			points: "10:00 pts",
			type: "Joint Tournament",
		},
		{
			title: "Guns 9 Görng Championship",
			description:
				"Pevper ever joins on old trying Random test example message.",
			points: "10:00 pts",
			type: "Joint Tournament",
		},
	];

	return (
		<div className="text-white">
			{/* Header Section */}
			<div className="mb-8">
				<h1 className="text-4xl font-bold mb-2">FORTNITE</h1>
				<h2 className="text-2xl font-semibold mb-6">
					COMPETE IN FORTNITE BATTLE ROYALE
				</h2>
				<p className="text-gray-300 mb-6">
					Compete in epic tournaments on Elite Camera Arena.
				</p>

				{/* Stats */}
				<div className="flex space-x-8 mb-8">
					<div className="bg-gray-800 p-4 rounded-lg w-40">
						<div className="text-3xl font-bold">3200</div>
						<div className="text-gray-400">Players</div>
					</div>
					<div className="bg-gray-800 p-4 rounded-lg w-40">
						<div className="text-3xl font-bold">235</div>
						<div className="text-gray-400">Matches played</div>
					</div>
					<div className="bg-gray-800 p-4 rounded-lg w-40">
						<div className="text-3xl font-bold">12</div>
						<div className="text-gray-400">Tournaments held</div>
					</div>
				</div>
			</div>

			<div className="border-t border-gray-700 pt-6">
				<h3 className="text-xl font-bold mb-6 flex items-center">
					<FaTrophy className="mr-2" /> HEATING TOURNAMENTS
				</h3>
				<p className="text-gray-300 mb-6">
					Participate in contests and win prices.
				</p>

				{/* Past Tournaments */}
				<div className="mb-12">
					<h4 className="text-lg font-semibold mb-4 flex items-center">
						<FaHistory className="mr-2" /> PAST TOURNAMENTS
					</h4>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						{pastTournaments.map((tournament, index) => (
							<div key={index} className="bg-gray-800 p-4 rounded-lg">
								<div className="font-bold text-blue-400">
									{tournament.month}
								</div>
								<div className="text-xl my-2">
									{tournament.points || tournament.time}
								</div>
								<div className="text-gray-400">
									{tournament.type || "Completed"}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Upcoming Tournaments */}
				<div>
					<h4 className="text-lg font-semibold mb-4 flex items-center">
						<FaCalendarAlt className="mr-2" /> UPCOMING
					</h4>
					<p className="text-gray-300 mb-6">
						Discover the upcoming competitions.
					</p>

					<div className="space-y-6">
						{upcomingTournaments.map((tournament, index) => (
							<div key={index} className="bg-gray-800 p-6 rounded-lg">
								<div className="flex justify-between items-start">
									<div>
										<h5 className="text-xl font-bold mb-2">
											{tournament.title}
										</h5>
										<p className="text-gray-300 mb-4">
											{tournament.description}
										</p>
									</div>
									<div className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm">
										Register
									</div>
								</div>
								<div className="flex justify-between mt-4">
									<div>
										<div className="text-blue-400">{tournament.points}</div>
										<div className="text-gray-400">{tournament.type}</div>
									</div>
									<div className="flex space-x-2">
										<div className="bg-gray-700 p-2 rounded-full">
											<FaGamepad />
										</div>
										<div className="bg-gray-700 p-2 rounded-full">
											<FaUsers />
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TournamentsPage;
