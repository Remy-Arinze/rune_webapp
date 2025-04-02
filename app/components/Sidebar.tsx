"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { RiHome5Fill, RiHome5Line, RiMenu2Fill } from "react-icons/ri";
import { CiGlobe, CiLogout } from "react-icons/ci";
import { FaGlobe, FaRegUserCircle, FaUserCircle, FaTv } from "react-icons/fa";

interface ItemProps {
	title: string;
	path: string;
	disabledIcon: ReactNode;
	filledIcon: ReactNode;
}

function SidebarItem({ title, path, disabledIcon, filledIcon }: ItemProps) {
  const pathname = usePathname();
  const isActive = pathname === path;
  const linkClass = isActive
    ? "text-black font-bold py-2 bg-[var(--primary)]"
    : "text-gray-400 font-semibold py-2 hover:bg-gray-100 rounded-lg";

  return (
    <li className="mb-1">
      <Link href={path}>
        <div
          className={`${linkClass} rounded-lg flex gap-x-4 items-center text-[13px] pl-2 transition-all duration-200 active:translate-y-[2px]`}
          style={isActive ? { 
            boxShadow: '0 3px 0 #B8D35D',
            transform: 'translateZ(0)' // Force GPU acceleration
          } : {}}
        >
          {isActive ? filledIcon : disabledIcon}
          <p className="md:text-[15px] text-[14px]">{title}</p>
        </div>
      </Link>
    </li>
  );
}

export default function Sidebar() {
	const [isSidebarVisible, setIsSidebarVisible] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarVisible(!isSidebarVisible);
	};

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
							path="/game"
							filledIcon={<CiGlobe size={18} />}
							disabledIcon={<FaGlobe size={18} />}
						/>
						<SidebarItem
							title="Learn"
							path="/game"
							filledIcon={<CiGlobe size={18} />}
							disabledIcon={<FaGlobe size={18} />}
						/>
						<SidebarItem
							title="Tournament"
							path="/game"
							filledIcon={<CiGlobe size={18} />}
							disabledIcon={<FaGlobe size={18} />}
						/>
						<SidebarItem
							title="Marketplace"
							path="/game"
							filledIcon={<CiGlobe size={18} />}
							disabledIcon={<FaGlobe size={18} />}
						/>
					
					</ul>
				</nav>
			</div>
		</div>
	);
}
