import { SwordsIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
    FaCrown,
    FaTrophy,
    FaNewspaper,
    FaHome,
    FaStore,
    FaGamepad,
    FaGlobe,
    FaUser,
} from "react-icons/fa";

const DashboardNavbar = () => {
    const pathname = usePathname();

    return (
       <div>
         <div className=" bg-[var(--dark)] text-white w-[15rem] p-6 flex flex-col border-r border-gray-800">
            {/* User Profile Header */}
            <div className="mb-8">
                <Link href={'/account'}>
                <div className="h-[50px] w-[50px] flex items-center justify-center rounded-full bg-orange-400">
                    <FaUser color="black" />
                </div>
                </Link>
                <p className="text-[10px] text-gray-500 mt-5">Good Morning</p>
                <h1 className="text-xl font-bold ">0X_RA</h1>
                <hr className="text-gray-700 my-2 mb-5" />
                <NavItem 
                    icon={<FaHome />} 
                    label="Home" 
                    link="/" 
                    isActive={pathname === "/"} 
                />
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
                            icon={<FaGamepad />}
                            link="/play"
                            label="Play"
                            isActive={pathname === "/play"}
                        />
                        <NavItem
                            icon={<SwordsIcon size={18} />}
                            link="/matches"
                            label="Matches"
                            isActive={pathname === "/matches"}
                        />
                        <NavItem
                            icon={<FaTrophy />}
                            link="/tournaments"
                            label="Tournaments"
                            isActive={pathname === "/tournaments"}
                        />
                        <NavItem 
                            icon={<FaNewspaper />} 
                            label="News" 
                            link="/news" 
                            isActive={pathname === "/news"} 
                        />
                        <NavItem 
                            icon={<FaStore />} 
                            label="Store" 
                            link="/store" 
                            isActive={pathname === "/store"} 
                        />
                        <NavItem
                            icon={<FaGlobe />}
                            link="/leaderboard"
                            label="Leaderboard"
                            isActive={pathname === "/leaderboard"}
                        />
                    </ul>
                </div>

                {/* CONFIGURER Section */}
                {/* <div className="mb-8">
                    <h2 className="text-gray-500 uppercase text-xs font-bold mb-4 tracking-wider">
                        CONFIGURER
                    </h2>
                    <ul className="space-y-3">
                        <NavItem
                            icon={<FaQuestionCircle />}
                            label="Support"
                            link="/support"
                            isActive={pathname === "/support"}
                        />
                        <NavItem
                            icon={<FaCog />}
                            label="Settings"
                            link="/settings"
                            isActive={pathname === "/settings"}
                        />
                    </ul>
                </div> */}

                {/* Premium Membership Banner */}
                <div className="bg-orange-400 p-4 rounded-lg mb-6">
                    <div className="flex items-start mb-2">
                        <FaCrown className="text-yellow-400 mt-1 mr-2" />
                        <div>
                            <h3 className="font-bold text-sm text-[var(--background)]">Unlock more with Premium</h3>
                            <p className="text-gray-700 text-[10px]">
                                More comes the benefit of a premium membership.
                            </p>
                        </div>
                    </div>
                    <button className="w-full bg-[var(--background)] hover:cursor-pointer text-orange-400 py-2 px-4 rounded text-sm font-bold transition-colors">
                        Upgrade Now
                    </button>
                </div>
            </div>

            {/* Footer/Get Started */}
            <div>
                <button className="w-full bg-black hover:bg-blue-700 text-gray-400 py-2 px-4 rounded text-sm font-bold transition-colors mb-3">
                    Get Started
                </button>
                <div className="text-center text-gray-500 text-xs">
                    © 2024 Erik Padamans
                </div>
            </div>
        </div>
       </div>
    );
};

// Updated NavItem component with active state styling
const NavItem = ({
    icon,
    label,
    link,
    isActive,
}: {
    icon: React.ReactNode;
    label: string;
    link: string;
    isActive: boolean;
}) => {
    return (
        <Link href={link} prefetch>
            <li className={`flex items-center space-x-3 p-2 rounded cursor-pointer transition-colors ${
                isActive 
                    ? "bg-[#2A2E35] text-orange-400" 
                    : "hover:bg-[#2A2E35] text-gray-400 hover:text-gray-300"
            }`}>
                <span>{icon}</span>
                <span className="text-[14px]">{label}</span>
            </li>
        </Link>
    );
};

export default DashboardNavbar;