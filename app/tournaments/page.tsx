import React from "react";
import {

	FaTrophy,
	FaClock,
	FaGamepad,
} from "react-icons/fa";
import Image from 'next/image'
import { HorizontalScrollContainer } from "../components/horizontal_scroll";
import Knight from '../../public/assets/khight.jpg'
import { RiFireFill } from "react-icons/ri";

import NFT from '../../public/assets/nft.png'
import TournamentCard from "../components/tournaments.tsx/tournament_card";


const TournamentsPage = () => {
	// Tournament data
	const pastTournaments = [
		{image:NFT, title:"Winter Chess Games Austria", subtitle:"compete for a chance to win the ultimate in the austrian open", date: "Sat 11 Jan",stake: "1,000.00 RUNE", Slots:'32'},
		{image:NFT, title:"Winter Chess Games Austria", subtitle:"compete for a chance to win the ultimate in the austrian open", date: "Sat 11 Jan",stake:"10,0000 RUNE"  , Slots:'32'},
		{image:NFT, title:"Winter Chess Games Austria", subtitle:"compete for a chance to win the ultimate in the austrian open", date: "Sat 11 Jan",stake:"10,0000 RUNE"  , Slots:'32'},
		{image:NFT, title:"Winter Chess Games Austria", subtitle:"compete for a chance to win the ultimate in the austrian open", date: "Sat 11 Jan",stake:"10,0000 RUNE"  , Slots:'32'},
		{image:NFT, title:"Winter Chess Games Austria", subtitle:"compete for a chance to win the ultimate in the austrian open", date: "Sat 11 Jan",stake:"10,0000 RUNE"  , Slots:'32'},
		{image:NFT, title:"Winter Chess Games Austria", subtitle:"compete for a chance to win the ultimate in the austrian open", date: "Sat 11 Jan",stake:"10,0000 RUNE"  , Slots:'32'},
		{image:NFT, title:"Winter Chess Games Austria", subtitle:"compete for a chance to win the ultimate in the austrian open", date: "Sat 11 Jan",stake:"10,0000 RUNE"  , Slots:'32'},
	];

	// const upcomingTournaments = [
	// 	{
	// 		title: "Winter 2025 Tournament",
	// 		description:
	// 			"Compete with your friends in this winter season themed championship.",
	// 		points: "10:00 pts",
	// 		type: "Joint Tournament",
	// 	},
	// 	{
	// 		title: "Fortnite Epic Challenge",
	// 		description:
	// 			"The incredible challenge awaits you in this random panzyroth.",
	// 		points: "10:00 pts",
	// 		type: "Joint Tournament",
	// 	},
	// 	{
	// 		title: "Guns 9 Görng Championship",
	// 		description:
	// 			"Pevper ever joins on old trying Random test example message.",
	// 		points: "10:00 pts",
	// 		type: "Joint Tournament",
	// 	},
	// ];

	return (
		<div className="text-white pr-5 mt-5">
			{/* Header Section */}
			<div className="mb-8 flex justify-center space-x-2 ">
			<div className="w-[15%] rounded-lg">
				<Image src={Knight} alt="" className=""/>
			</div>
			<div className="w-full">
				<h1 className="text-2xl font-bold ">RUNE</h1>
				<h2 className="text-xl font-semibold">
					MAKE YOUR MOVE IN THE BIGGEST STAGES
				</h2>
				<p className="text-gray-400 text-[12px] mb-6">
					Compete In Epic Tournaments On Rune And Win.
				</p>
				{/* Stats */}
				<div className="flex space-x-5 mb-8 bg-[var(--dark)] w-full">
				<div className="bg-[var(--dark)] p-2 flex space-x-2 items-start rounded-lg ">
					<FaGamepad className="text-orange-400 text-lg" />
						<div>
						<p className="text-[14px] font-bold">3200+</p>
						<p className="text-gray-400 text-[12px]">Players</p>
						</div>
					</div>
					<div className="bg-[var(--dark)] p-2 flex space-x-2 items-tart rounded-lg ">
					<RiFireFill className="text-orange-400 text-lg" />
						<div>
						<p className="text-[14px] font-bold">100+</p>
						<p className="text-gray-400 text-[12px]">Tournaments held</p>
						</div>
					</div>
				</div>
				</div>

				
			</div>

			<div className=" mt-20">
			<div className="flex items-start justify-between ">
			<div>
			<h3 className="text-[14px] mb-1 flex items-center">
					<FaTrophy className="mr-2" /> FEATURED TOURNAMENTS
				</h3>
				<p className="text-gray-500 text-[10px] mb-5">
					Participate in contests and win wagers.
				</p>
			</div>
			<p className="text-[11px] text-gray-400">view all</p>
			</div>

				{/* Past Tournaments */}
				<div className="mb-12">
					<HorizontalScrollContainer>
						{pastTournaments.map((tournament, index) => (
							<TournamentCard key={index} image={tournament.image} title={tournament.title} subtitle={tournament.subtitle} stake={tournament.stake} slot={tournament.Slots} date={tournament.date} index={index} />
						))}
					</HorizontalScrollContainer>
				</div>

			</div>
			<div className=" mt-10">
			<div className="flex items-start justify-between ">
			<div>
			<h3 className="text-[14px] mb-1 flex items-center">
					<FaClock className="mr-2" /> UPCOMING TOURNAMENTS
				</h3>
				<p className="text-gray-500 text-[10px] mb-5">
					Play and wager in upcoming constests and win.
				</p>
			</div>
			<p className="text-[11px] text-gray-400">view all</p>
			</div>

				{/* Past Tournaments */}
				<div className="mb-12">
					<HorizontalScrollContainer>
					{pastTournaments.map((tournament, index) => (
							<TournamentCard key={index} image={tournament.image} title={tournament.title} subtitle={tournament.subtitle} stake={tournament.stake} slot={tournament.Slots} date={tournament.date} index={index} />
						))}
					</HorizontalScrollContainer>
				</div>

			</div>
			<div className=" mt-10">
			<div className="flex items-start justify-between ">
			<div>
			<h3 className="text-[14px] mb-1 flex items-center">
					<FaClock className="mr-2" /> RECENTLY FINISHED
				</h3>
			
			</div>
			<p className="text-[11px] text-gray-400">view all</p>
			</div>

				{/* Past Tournaments */}
				<div className="mb-12">
					<HorizontalScrollContainer>
					{pastTournaments.map((tournament, index) => (
							<TournamentCard key={index} image={tournament.image} title={tournament.title} subtitle={tournament.subtitle} stake={tournament.stake} slot={tournament.Slots} date={tournament.date} index={index} />
						))}
					</HorizontalScrollContainer>
				</div>

			</div>
		</div>
	);
};

export default TournamentsPage;
