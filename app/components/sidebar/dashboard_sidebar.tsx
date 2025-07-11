import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
    FaCrown,
    FaNewspaper,
    FaUser,
    FaChartLine,
    FaShoppingCart,
    FaTrophy,
} from "react-icons/fa";
import { RiSwordFill } from "react-icons/ri";
import { GoHomeFill } from "react-icons/go";
import { IoGameController } from "react-icons/io5";

const DashboardNavbar = () => {
    const pathname = usePathname();

    return (
       <div>
         <div className="bg-[var(--dark)] text-white w-[15rem] p-6 flex flex-col border-r border-gray-800">
            {/* User Profile Header */}
            <div className="mb-8">
                <Link href={'/account'}>
                <div className="h-[50px] w-[50px] flex items-center justify-center rounded-full bg-[var(--primary)]">
                    <FaUser color="black" />
                </div>
                </Link>
                <p className="text-[10px] text-gray-500 mt-5">Hello</p>
                <h1 className="text-xl font-bold ">0X_RA</h1>
                <hr className="text-gray-700 my-2 mb-5" />
                <NavItem 
                    icon={<GoHomeFill size={18} />} 
                    label="Home" 
                    link="/" 
                    isActive={pathname === "/"} 
                />
            </div>

            {/* Main Navigation Sections */}
            <div className="flex-grow">
                {/* Navigation Section */}
                <div className="mb-8">
                    <h2 className="text-gray-500 uppercase text-xs font-bold mb-4 tracking-wider">
                        Navigation
                    </h2>

                    <ul className="flex flex-col space-y-2">
                        <NavItem
                            icon={<IoGameController size={18} />}
                            link="/play"
                            label="Play"
                            isActive={pathname === "/play"}
                        />
                        <NavItem
                            icon={<RiSwordFill size={18} />}
                            link="/matches"
                            label="Matches"
                            isActive={pathname === "/matches"}
                        />
                        <NavItem
                            icon={<FaTrophy size={18} />}
                            link="/tournaments"
                            label="Tournaments"
                            isActive={pathname === "/tournaments"}
                        />
                        <NavItem 
                            icon={<FaNewspaper size={18} />} 
                            label="News" 
                            link="/news" 
                            isActive={pathname === "/news"} 
                        />
                        <NavItem 
                            icon={<FaShoppingCart size={18} />} 
                            label="Store" 
                            link="/store" 
                            isActive={pathname === "/store"} 
                        />
                        <NavItem
                            icon={<FaChartLine size={18} />}
                            link="/leaderboard"
                            label="Leaderboard"
                            isActive={pathname === "/leaderboard"}
                        />
                    </ul>
                </div>

                {/* Premium Membership Banner */}
                <div className="bg-[var(--primary)] p-4 rounded-lg mb-6">
                    <div className="flex items-start mb-2">
                        <FaCrown className="text-yellow-400 mt-1 mr-2" size={16} />
                        <div>
                            <h3 className="font-bold text-sm text-[var(--background)]">Unlock more with Premium</h3>
                            <p className="text-gray-700 text-[10px]">
                                Get exclusive benefits with premium membership.
                            </p>
                        </div>
                    </div>
                    <button className="w-full bg-[var(--background)] hover:cursor-pointer text-orange-400 py-2 px-4 rounded text-sm font-bold transition-colors">
                        Upgrade Now
                    </button>
                </div>
            </div>

            {/* Footer */}
            <div>
                <div className="text-gray-500 text-xs">
                    © 2024 Rune
                </div>
            </div>
        </div>
       </div>
    );
};

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
            <li
                style={{
                    boxShadow: isActive ? "0 1px 2px var(--borderAccent)" : "none",
                }}
                className={`flex items-center space-x-3 p-2 rounded cursor-pointer transition-colors ${
                    isActive 
                        ? "bg-[#2A2E35] text-[var(--primary)]" 
                        : "hover:bg-[#2A2E35] text-gray-400 hover:text-gray-300"
                }`}>
                <span className="flex items-center justify-center w-5">{icon}</span>
                <span className="text-[14px]">{label}</span>
            </li>
        </Link>
    );
};

export default DashboardNavbar;