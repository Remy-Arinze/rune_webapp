"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import {
	RiHome5Line,
	RiFireFill,
} from "react-icons/ri";
import {
	FaTrophy,
	FaGamepad,
	FaChevronRight,
} from "react-icons/fa";
import { IoMdStats } from "react-icons/io";
import { BsFillPeopleFill, BsPeople } from "react-icons/bs";
import DashboardNavbar from "./sidebar/main";

interface ItemProps {
	title: string;
	path: string;
	disabledIcon: ReactNode;
	filledIcon: ReactNode;
	showChevron?: boolean;
}

function SidebarItem({
	title,
	path,
	disabledIcon,
	filledIcon,
	showChevron = false,
}: ItemProps) {
	const pathname = usePathname();
	const isActive = pathname === path;
	const linkClass = isActive
		? "text-white font-bold py-2 bg-[#2a2e35]"
		: "text-gray-400 font-semibold py-2 hover:bg-[#2a2e35] rounded-lg";

	return (
		<li className="mb-1">
			<Link href={path}>
				<div
					className={`${linkClass} rounded-lg flex gap-x-3 items-center text-[13px] px-3 py-3 transition-all duration-200`}
				>
					<span className="flex items-center justify-center w-6">
						{isActive ? filledIcon : disabledIcon}
					</span>
					<p className="md:text-[14px] text-[14px] flex-grow">{title}</p>
					{showChevron && <FaChevronRight className="text-xs" />}
				</div>
			</Link>
		</li>
	);
}

export default function Sidebar() {
	const [isSidebarVisible, setIsSidebarVisible] = useState(false);
	const [isMainSidebarExpanded, setIsMainSidebarExpanded] = useState(true);

	const toggleSidebar = () => {
		setIsSidebarVisible(!isSidebarVisible);
	};

	const toggleMainSidebar = () => {
		setIsMainSidebarExpanded(!isMainSidebarExpanded);
	};

	return (
		<div className="flex ml-5">
			{/* Icon Sidebar (Leading) */}
			<div className="hidden md:flex flex-col mr-4 items-center bg-[#1e2025] h-[100dvh] w-16 py-5 rounded-lg">
				<div className="mb-8 p-2 rounded-lg bg-[#2a2e35]">
					<RiFireFill className="text-orange-400 text-xl" />
				</div>
				<div className=" flex flex-col space-y-3">
					<div className="h-[30] w-[30] bg-yellow-500 rounded-md"></div>
					<div className="h-[30] w-[30] bg-red-500 rounded-md"></div>
					<div className="h-[30] w-[30] bg-blue-500 rounded-md"></div>
					<div className="h-[30] w-[30] bg-pink-500 rounded-md"></div>
				</div>
				<div className="flex flex-col items-center space-y-6 mt-[auto]">
					<button className="p-2 rounded-lg hover:bg-[#2a2e35]">
						<RiHome5Line className="text-gray-å0 text-xl" />
					</button>
					<button className="p-2 rounded-lg hover:bg-[#2a2e35]">
						<FaGamepad className="text-gray-400 text-xl" />
					</button>
					<button className="p-2 rounded-lg bg-[#2a2e35]">
						<FaTrophy className="text-orange-400 text-xl" />
					</button>
					<button className="p-2 rounded-lg hover:bg-[#2a2e35]">
						<IoMdStats className="text-gray-400 text-xl" />
					</button>
					<button className="p-2 rounded-lg hover:bg-[#2a2e35]">
						<BsPeople className="text-gray-400 text-xl" />
					</button>
				</div>
			</div>

			{/* Main Sidebar */}
			<DashboardNavbar />
		</div>
	);
}
