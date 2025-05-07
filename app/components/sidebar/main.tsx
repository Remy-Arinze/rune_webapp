import { Store } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
	FaCrown,
	FaQuestionCircle,
	FaCog,
	FaUsers,
	FaTrophy,
	FaNewspaper,
	FaSignOutAlt,
	FaHome,
	FaStore,
} from "react-icons/fa";
import { FiCheck, FiSquare } from "react-icons/fi";

const DashboardNavbar = () => {
	return (
		<div className="bg-[var(--dark)] text-white w-64 h-screen p-6 flex flex-col border-r border-gray-800">
			{/* User Profile Header */}
			<div className="mb-8">
				<div className="h-[50] w-[50] rounded-full bg-orange-400"></div>
				<p className="text-[10px] text-gray-500 mt-5">Good Morning</p>
				<h1 className="text-xl font-bold ">Erik Padamans</h1>
				<hr className="text-gray-700 my-2 mb-5" />
				<NavItem icon={<FaHome />} label="Dashboard" link="/" />
			</div>

			{/* Main Navigation Sections */}
			<div className="flex-grow">
				{/* MATERIATORY Section */}
				<div className="mb-8">
					<h2 className="text-gray-500 uppercase text-xs font-bold mb-4 tracking-wider">
						Navigation
					</h2>

					<ul className="space-y-3">
						<NavItem
							icon={<FaTrophy />}
							link="/tournaments"
							label="Tournaments"
						/>
						<NavItem icon={<FaNewspaper />} label="News" link="/tournaments" />
						<NavItem icon={<FaStore />} label="Store" link="/tournaments" />
						<NavItem
							icon={<FaUsers />}
							link="/tournaments"
							label="Leaderboards"
						/>
					</ul>
				</div>

				{/* CONFIGURER Section */}
				<div className="mb-8">
					<h2 className="text-gray-500 uppercase text-xs font-bold mb-4 tracking-wider">
						CONFIGURER
					</h2>
					<ul className="space-y-3">
						<NavItem
							icon={<FaQuestionCircle />}
							label="Support"
							link="/tournaments"
						/>
						<NavItem
							icon={<FaCog className="text-blue-400" />}
							label="Settings"
							link="/tournaments"
						/>
					</ul>
				</div>

				{/* Premium Membership Banner */}
				<div className="bg-[#2A2E35] p-4 rounded-lg mb-6">
					<div className="flex items-start mb-2">
						<FaCrown className="text-yellow-400 mt-1 mr-2" />
						<div>
							<h3 className="font-bold text-sm">Unlock more with Premium</h3>
							<p className="text-gray-400 text-xs">
								More comes the benefit of a premium membership.
							</p>
						</div>
					</div>
					<button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded text-sm font-bold transition-colors">
						Upgrade Now
					</button>
				</div>
			</div>

			{/* Footer/Get Started */}
			<div>
				<button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm font-bold transition-colors mb-3">
					Get Started
				</button>
				<div className="text-center text-gray-500 text-xs">
					© 2024 Erik Padamans
				</div>
			</div>
		</div>
	);
};

// Reusable NavItem component
const NavItem = ({
	icon,
	label,
	link,
}: {
	icon: React.ReactNode;
	label: string;
	link: string;
}) => {
	return (
		<Link href={link}>
			<li className="flex items-center space-x-3 hover:bg-[#2A2E35] p-2 rounded cursor-pointer transition-colors">
				<span className="text-gray-300">{icon}</span>
				<span className="text-gray-300 text-sm">{label}</span>
			</li>
		</Link>
	);
};

export default DashboardNavbar;
