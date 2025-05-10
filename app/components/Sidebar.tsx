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
import {  BsPeople } from "react-icons/bs";
import DashboardNavbar from "./sidebar/dashboard_sidebar";

// interface ItemProps {
// 	title: string;
// 	path: string;
// 	disabledIcon: ReactNode;
// 	filledIcon: ReactNode;
// 	showChevron?: boolean;
// }

export default function Sidebar() {
	// const [isSidebarVisible, setIsSidebarVisible] = useState(false);
	// const [isMainSidebarExpanded,setIsMainSidebarExpanded] = useState(true);

	// const toggleSidebar = () => {
	// 	setIsSidebarVisible(!isSidebarVisible);
	// };

	// const toggleMainSidebar = () => {
	// 	setIsMainSidebarExpanded(!isMainSidebarExpanded);
	// };

	return (
		<div className="flex ml-5">
			{/* Icon Sidebar (Leading) */}
			<div className="hidden md:flex flex-col mr-4 items-center bg-[#1e2025] w-16 py-5 rounded-lg">
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
					<button className="p-2 rounded-lg hover:cursor-pointer hover:bg-[#2a2e35]">
						<RiHome5Line className="text-gray-å0 text-xl" />
					</button>
					<button className="p-2 rounded-lg hover:cursor-pointer hover:bg-[#2a2e35]">
						<FaGamepad className="text-gray-400 text-xl" />
					</button>
					<button className="p-2 rounded-lg bg-[#2a2e35]">
						<FaTrophy className="text-orange-400 text-xl" />
					</button>
					<button className="p-2 rounded-lg hover:cursor-pointer hover:bg-[#2a2e35]">
						<IoMdStats className="text-gray-400 text-xl" />
					</button>
					<button className="p-2 rounded-lg hover:cursor-pointer hover:bg-[#2a2e35]">
						<BsPeople className="text-gray-400 text-xl" />
					</button>
				</div>
			</div>

			{/* Main Sidebar */}
			<DashboardNavbar />
		</div>
	);
}
