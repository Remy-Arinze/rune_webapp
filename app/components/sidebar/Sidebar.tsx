"use client";
import {
	RiFireFill,
} from "react-icons/ri";
import {
	FaQuestionCircle,
	FaCog,
} from "react-icons/fa";
import {  BsPlus } from "react-icons/bs";
import DashboardNavbar from "./dashboard_sidebar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";

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

	 const isOpen = useSelector((state: RootState) => state.ui.isSidebarOpen);
  const dispatch = useDispatch();

	return (
		<div className={`fixed z-500 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:relative md:z-10 md:flex ml-5`}>
			{/* Icon Sidebar (Leading) */}
			<div className="hidden md:flex flex-col mr-4 items-center bg-[#1e2025] w-16 py-5 rounded-lg h-[80dvh] fixed">
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
				
					<button className="p-2 rounded-lg bg-[#2a2e35] hover:cursor-pointer">
						<BsPlus className="text-orange-400 text-3xl" />
					</button>
					<button className="p-2 rounded-lg hover:cursor-pointer hover:bg-[#2a2e35]">
						<FaCog className="text-gray-400 text-xl" />
					</button>
					<button className="p-2 rounded-lg hover:cursor-pointer hover:bg-[#2a2e35]">
						<FaQuestionCircle className="text-gray-400 text-xl" />
					</button>
				</div>
			</div>

			{/* Main Sidebar */}
			<DashboardNavbar />
		</div>
	);
}