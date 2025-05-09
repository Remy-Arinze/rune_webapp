import React from "react";
import Image from "next/image";
import Logo from "./../../public/assets/logo.png";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Nav = () => {
	return (
		<nav className="bg-[var(--background)] text-white  p-4 flex items-center justify-between border-b border-gray-700">
			<div className="flex items-center space-x-20">
				<div className="flex items-center space-x-3">
					<Image src={Logo} alt="logo" className="w-[25%]" />
					<p className="text-[12px] text-gray-500">:</p>
					<p className="text-[12px] text-gray-500">Tournaments</p>
				</div>
				<div className="hidden md:flex space-x-6">
					<a href="#" className="hover:text-blue-400 text-[13px]">
						Overview
					</a>
					<a href="#" className="hover:text-blue-400 text-[13px]">
						ladder
					</a>
					<a href="#" className="hover:text-blue-400 text-[13px]">
						History
					</a>
				</div>
			</div>

			<div className="flex items-center space-x-4">
				<div className="relative">
					<input
						type="text"
						placeholder="Search..."
						className="bg-gray-800 rounded-full py-1 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					<FaSearch className="absolute left-3 top-2 text-gray-400" />
				</div>
				<button className="p-2 rounded-full hover:bg-gray-700">
					<FaBell className="text-lg" />
				</button>
				<button className="p-2 rounded-full hover:bg-gray-700">
					<FaUserCircle className="text-2xl" />
				</button>
			</div>
		</nav>
	);
};

export default Nav;
