import React from "react";
import Image from "next/image";

import NFT from '../../public/assets/nft.png'

export interface TournamentCardProps {
	title: string;
	description: string;
	status: "live" | "upcoming" | "completed";
	imageSrc: string;
	participants: number;
	prizePool: string;
	className?: string;
}

export const TournamentCardComponent: React.FC<TournamentCardProps> = ({
	title,
	description,
	status,
	// imageSrc,
	participants,
	prizePool,
	className = "",
}) => {
	const statusColors = {
		live: "text-green-400",
		upcoming: "text-yellow-400",
		completed: "text-gray-400",
	};

	return (
		<div
			className={`bg-[var(--dark)] flex h-[150px] rounded-sm overflow-hidden min-w-[200px] ${className}`}
		>
			<div className="w-1/2 p-4 flex flex-col justify-between">
				<div>
					<h3 className="font-bold text-sm md:text-base">{title}</h3>
					<p className="text-[10px] text-gray-300 mt-2">{description}</p>
				</div>
				<div className="mt-4">
					<div className="flex justify-between text-xs">
						<span>Participants: {participants}</span>
						<span>Prize: {prizePool}</span>
					</div>
					<span className={`text-[12px] font-medium ${statusColors[status]}`}>
						{status.toUpperCase()}
					</span>
				</div>
			</div>
			<div className="w-1/2 relative">
				<Image
					src={NFT}
					alt={title}
					fill
					className="object-cover"
					sizes="(max-width: 768px) 100vw, 50vw"
					unoptimized={true} // Add this if you're having optimization issues
					onError={(e) => {
						(e.target as HTMLImageElement).src = "/fallback-tournament.jpg";
					}}
				/>
			</div>
		</div>
	);
};
