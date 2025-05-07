"use client";
import React from "react";

import "swiper/css";
import "swiper/css/pagination";
import Carousel from "./components/landing_page/landing_page_swiper";
import { HeaderComponent } from "./components/Header";
import { HorizontalScrollContainer } from "./components/horizontal_scroll";
import { TournamentCardComponent } from "./components/TournamentCard";

import { generateTournaments } from "@/utils/tournaments";

const LandingPage = () => {
	const tournaments = generateTournaments(6); // Generate 6 tournaments

	return (
		<div className="min-h-screen bg-[var(--background)] p-6 font-sans">
			{/* Time Display
			<div className="text-center mb-8">
				<h1 className="text-4xl font-bold mb-2">12:21</h1>
			</div> */}

			<Carousel />

			{/* Main Content Grid */}
			<div className="flex items-start justify-between">
				<div className="w-[65%]">
					<HeaderComponent title={"Top Tournaments"} />
					<HorizontalScrollContainer className="mt-3">
						{tournaments.map((tournament, index) => (
							<TournamentCardComponent
								key={`tournament-${index}`}
								{...tournament}
								className="flex-shrink-0" // Prevent cards from shrinking
							/>
						))}
					</HorizontalScrollContainer>
				</div>
				<div className="bg-[var(--dark)] rounded-lg w-[20%] h-[130px]"></div>
			</div>
		</div>
	);
};

export default LandingPage;
