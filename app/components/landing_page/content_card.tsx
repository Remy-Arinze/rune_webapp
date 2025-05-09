import React from "react";
import Image from "next/image";

const NewsCard = () => {
	return (
		<div className="max-w-2xl mx-auto bg-[var(--dark)] rounded-lg shadow-md overflow-hidden">
			{/* Featured Image */}
			<div className="relative h-48 w-full">
				<Image
					src="https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
					alt="Chess tournament"
					className="w-full h-full object-cover"
				/>
				{/* Image Credit Badge */}
				<div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
					Photo: FIDE
				</div>
			</div>

			{/* Content */}
			<div className="p-6">
				{/* Title */}
				<h1 className="text-2xl font-bold text-white mb-2">
					Zhu Sole Leader At Pune Women&apos;s Grand Prix As Humpy Beats Divya
				</h1>

				{/* Author and Date */}
				<div className="flex items-center mb-4">
					<span className="text-sm font-semibold text-blue-600">
						PeterDoggers
					</span>
					<span className="mx-2 text-gray-400">|</span>
					<span className="text-sm text-white">2025</span>
				</div>

				{/* Article Excerpt */}
				<p className="text-white mb-4 text-[13px] leading-relaxed">
					Dayning her game with IM Salome Melia was enough for GM Zhu Jiner to
					become the sole leader at the 2025 Pune FIDE Women&apos;s Grand Prix
					with 2.5/3. That was because co-leader IM Divya Deshmukh lost her
					first game, with the black pieces to GM Humpy Koneru in a thrilling
					45-move encounter.
				</p>

				{/* Tags */}
				<div className="flex flex-wrap gap-2 mb-4">
					<span className="px-3 py-1 bg-gray-100 text-black text-xs font-medium rounded-full">
						Chess
					</span>
					<span className="px-3 py-1 bg-gray-100 text-black text-xs font-medium rounded-full">
						Women&apos;s Grand Prix
					</span>
					<span className="px-3 py-1 bg-gray-100 text-black text-xs font-medium rounded-full">
						Pune 2025
					</span>
				</div>

				{/* Author Profile */}
				<div className="flex items-center">
					<Image
						src="https://randomuser.me/api/portraits/men/32.jpg"
						alt="PeterDoggers"
						className="w-10 h-10 rounded-full mr-3"
					/>
					<div>
						<p className="text-sm font-medium text-white">
							Written by PeterDoggers
						</p>
						<p className="text-xs text-white">Chess Journalist</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;
