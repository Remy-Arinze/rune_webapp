"use client";
import {
	RiHome5Line,
	RiFireFill,
} from "react-icons/ri";
import {
	FaTrophy,
	FaGamepad,
} from "react-icons/fa";
import { IoMdStats } from "react-icons/io";
import { BsPeople } from "react-icons/bs";
import DashboardNavbar from "./dashboard_sidebar";
import { useEffect, useState } from "react";

export default function Sidebar() {
	const [isExpanded, setIsExpanded] = useState(true);
	
	useEffect(() => {
		let timeout: NodeJS.Timeout;
		
		// Start expanded
		setIsExpanded(true);
		
		// Set up timer to collapse after 10 seconds of inactivity
		const startCollapseTimer = () => {
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				setIsExpanded(false);
			}, 10000);
		};
		
		// Start initial timer
		startCollapseTimer();
		
		// Reset timer on any user movement
		const handleActivity = () => {
			startCollapseTimer();
		};
		
		window.addEventListener('mousemove', handleActivity);
		window.addEventListener('keydown', handleActivity);
		
		return () => {
			clearTimeout(timeout);
			window.removeEventListener('mousemove', handleActivity);
			window.removeEventListener('keydown', handleActivity);
		};
	}, []);

	return (
		<div className="flex ml-5">
			{/* Icon Sidebar (Leading) */}
			<div 
				className={`hidden md:flex flex-col mr-4 items-center bg-[#1e2025] py-5 rounded-lg transition-all duration-300 ease-in-out ${
					isExpanded ? 'w-64' : 'w-16'
				}`}
				onMouseEnter={() => setIsExpanded(true)}
				onMouseLeave={() => setIsExpanded(false)}
			>
				<div className="mb-8 p-2 rounded-lg bg-[#2a2e35] w-full flex items-center justify-center">
					<RiFireFill className="text-orange-400 text-xl" />
					{isExpanded && <span className="ml-2 text-white">Dashboard</span>}
				</div>
				<div className="flex flex-col space-y-3 w-full px-2">
					<div className="flex items-center space-x-2 p-2">
						<div className="h-[30px] w-[30px] bg-yellow-500 rounded-md flex-shrink-0"></div>
						{isExpanded && <span className="text-white text-sm">Yellow Game</span>}
					</div>
					<div className="flex items-center space-x-2 p-2">
						<div className="h-[30px] w-[30px] bg-red-500 rounded-md flex-shrink-0"></div>
						{isExpanded && <span className="text-white text-sm">Red Game</span>}
					</div>
					<div className="flex items-center space-x-2 p-2">
						<div className="h-[30px] w-[30px] bg-blue-500 rounded-md flex-shrink-0"></div>
						{isExpanded && <span className="text-white text-sm">Blue Game</span>}
					</div>
					<div className="flex items-center space-x-2 p-2">
						<div className="h-[30px] w-[30px] bg-pink-500 rounded-md flex-shrink-0"></div>
						{isExpanded && <span className="text-white text-sm">Pink Game</span>}
					</div>
				</div>
				<div className="flex flex-col items-center space-y-6 mt-auto w-full px-2">
					<button className="p-2 rounded-lg hover:cursor-pointer hover:bg-[#2a2e35] w-full flex items-center">
						<RiHome5Line className="text-gray-400 text-xl" />
						{isExpanded && <span className="ml-2 text-gray-400">Home</span>}
					</button>
					<button className="p-2 rounded-lg hover:cursor-pointer hover:bg-[#2a2e35] w-full flex items-center">
						<FaGamepad className="text-gray-400 text-xl" />
						{isExpanded && <span className="ml-2 text-gray-400">Games</span>}
					</button>
					<button className="p-2 rounded-lg bg-[#2a2e35] w-full flex items-center">
						<FaTrophy className="text-orange-400 text-xl" />
						{isExpanded && <span className="ml-2 text-orange-400">Trophies</span>}
					</button>
					<button className="p-2 rounded-lg hover:cursor-pointer hover:bg-[#2a2e35] w-full flex items-center">
						<IoMdStats className="text-gray-400 text-xl" />
						{isExpanded && <span className="ml-2 text-gray-400">Stats</span>}
					</button>
					<button className="p-2 rounded-lg hover:cursor-pointer hover:bg-[#2a2e35] w-full flex items-center">
						<BsPeople className="text-gray-400 text-xl" />
						{isExpanded && <span className="ml-2 text-gray-400">People</span>}
					</button>
				</div>
			</div>

			{/* Main Sidebar */}
			<DashboardNavbar />
		</div>
	);
}