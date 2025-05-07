"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
<<<<<<< HEAD
import { RiHome5Fill, RiHome5Line, RiMenu2Fill } from "react-icons/ri";
import { CiGlobe, } from "react-icons/ci";
import { FaGlobe} from "react-icons/fa";
=======
import {
	RiHome5Fill,
	RiHome5Line,
	RiMenu2Fill,
	RiFireFill,
	RiFireLine,
} from "react-icons/ri";
import {
	FaTrophy,
	FaUsers,
	FaCog,
	FaSignOutAlt,
	FaGamepad,
	FaHistory,
	FaChartLine,
	FaCalendarAlt,
	FaChevronRight,
} from "react-icons/fa";
import { IoMdStats } from "react-icons/io";
import { BsFillPeopleFill, BsPeople } from "react-icons/bs";
import DashboardNavbar from "./sidebar/main";
>>>>>>> d4d3aac (revamped sidebar and landing)

interface ItemProps {
	title: string;
	path: string;
	disabledIcon: ReactNode;
	filledIcon: ReactNode;
<<<<<<< HEAD
}

function SidebarItem({ title, path, disabledIcon, filledIcon }: ItemProps) {
  const pathname = usePathname();
  const isActive = pathname === path;
  const linkClass = isActive
    ? "text-black font-bold py-2 bg-[var(--primary)]"
    : "text-gray-400 font-semibold py-2 hover:bg-[var(--background)] rounded-lg";

  return (
    <li className="mb-3">
      <Link href={path}>
        <div
          className={`${linkClass} rounded-lg flex gap-x-4 items-center text-[13px] pl-2 transition-all duration-200 active:translate-y-[2px]`}
          style={isActive ? { 
            boxShadow: '0 3px 0 #65d4d0f8',
            transform: 'translateZ(0)' // Force GPU acceleration
          } : {}}
        >
          {isActive ? filledIcon : disabledIcon}
          <p className="md:text-[15px] text-[14px]">{title}</p>
        </div>
      </Link>
    </li>
  );
=======
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
>>>>>>> d4d3aac (revamped sidebar and landing)
}

export default function Sidebar() {
	const [isSidebarVisible, setIsSidebarVisible] = useState(false);
<<<<<<< HEAD
=======
	const [isMainSidebarExpanded, setIsMainSidebarExpanded] = useState(true);
>>>>>>> d4d3aac (revamped sidebar and landing)

	const toggleSidebar = () => {
		setIsSidebarVisible(!isSidebarVisible);
	};

<<<<<<< HEAD
	return (
		<div>
			{/* Toggle button for mobile screens */}
			<div className="md:hidden p-3 absolute top-1 left-0 z-20">
				<button onClick={toggleSidebar}>
					{/* Your icon for the menu toggle button */}
					<RiMenu2Fill size={20} color="#36454F" />
				</button>
			</div>

			{/* Sidebar overlay for mobile */}
			{isSidebarVisible && (
				<div
					className="fixed inset-0 z-40 bg-black bg-opacity-40 backdrop-blur-sm"
					onClick={toggleSidebar}
				></div>
			)}

			{/* Sidebar content */}
			<div
				className={`fixed top-0 left-0 ml-[5%] bg-[var(--dark)] z-50 h-[90dvh] rounded-lg overflow-x-hidden overflow-y-scroll no-scrollbar transition-transform duration-500 ease-in-out transform ${
					isSidebarVisible ? "translate-x-0" : "-translate-x-full"
				} md:relative md:translate-x-0 w-4/5 md:w-[200px] px-5 `}
			>

			
				<nav className="mt-10">
					<ul>
						<SidebarItem
							title="Home"
							path="/"
							filledIcon={<RiHome5Fill size={18} />}
							disabledIcon={<RiHome5Line size={18} />}
						/>
						<SidebarItem
							title="Play"
							path="/play"
							filledIcon={<CiGlobe size={18} />}
							disabledIcon={<FaGlobe size={18} />}
						/>
						{/* <SidebarItem
							title="Learn"
							path="/learn"
							filledIcon={<CiGlobe size={18} />}
							disabledIcon={<FaGlobe size={18} />}
						/> */}
						<SidebarItem
							title="Tournament"
							path="/tournament"
							filledIcon={<CiGlobe size={18} />}
							disabledIcon={<FaGlobe size={18} />}
						/>
						<SidebarItem
							title="Marketplace"
							path="/marketplace"
							filledIcon={<CiGlobe size={18} />}
							disabledIcon={<FaGlobe size={18} />}
						/>
					
					</ul>
				</nav>
				<nav className="mt-20">
					<ul>
						<SidebarItem
							title="Login"
							path="/auth/login"
							filledIcon={<div className="ml-5"></div>}
							disabledIcon={<div className="ml-5"></div>}
						/>
						
						<SidebarItem
							title="SignUp"
							path="/auth/signup"
							filledIcon={<div className="ml-5"></div>}
							disabledIcon={<div className="ml-5"></div>}
						/>
						
					
					
					</ul>
				</nav>
			</div>
=======
	const toggleMainSidebar = () => {
		setIsMainSidebarExpanded(!isMainSidebarExpanded);
	};

	return (
		<div className="flex ml-5">
			{/* Icon Sidebar (Leading) */}
			<div className="hidden md:flex flex-col mr-4 items-center bg-[#1e2025] h-[90dvh] w-16 py-5 rounded-lg">
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
>>>>>>> d4d3aac (revamped sidebar and landing)
		</div>
	);
}
