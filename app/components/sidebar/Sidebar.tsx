"use client";
import {
	RiFireFill,
} from "react-icons/ri";
import {
	FaQuestionCircle,
	FaCog,
} from "react-icons/fa";
import { Tooltip } from 'react-tooltip';
import DashboardNavbar from "./dashboard_sidebar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { openModal } from "@/store/ui_slice";

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
		<div className={`fixed transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-150" : "translate-x-42"} 
        md:translate-x-0 md:relative  md:flex md:ml-5`}>
			{/* Icon Sidebar (Leading) */}
			<div className="hidden sticky top-1 md:flex flex-col mr-4 items-center bg-[#1e2025] w-16 py-5 rounded-lg h-[80dvh]">
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
				
					<button onClick={()=>{
						dispatch(openModal(
							'create_game'
						))
					}} className="p-2 rounded-lg bg-[var(--background)] hover:cursor-pointer">
						<p data-tooltip-id="create-game" data-tooltip-content="Create New Game">⚔️</p>
						<Tooltip id='create-game' place="top"  />
					</button>
					<button className="p-2 rounded-lg bg-[var(--background)]  hover:cursor-pointer hover:bg-[#2a2e35]">
						<FaCog data-tooltip-id="settings" data-tooltip-content="Settings" className="text-gray-400 text-xl" />
						<Tooltip id='settings' place="right"  />
					</button>
					<button className="p-2 rounded-lg hover:cursor-pointer bg-[var(--background)] hover:bg-[#2a2e35]">
						<FaQuestionCircle  data-tooltip-id="support" data-tooltip-content="Support" className="text-gray-400 text-xl" />
						<Tooltip className="text-[12px]" id='support' place="right"  />
					</button>
				</div>
			</div>

			{/* Main Sidebar */}
			<DashboardNavbar />
		</div>
	);
}