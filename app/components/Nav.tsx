import React from "react";
import Image from "next/image";
import Logo from "./../../public/assets/logo.png";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import Link from "next/link";

const Nav = () => {
	return (
		<nav className="bg-[var(--background)] text-white w-full absolute z-100 fixed top-0  p-4 flex items-center justify-between border-b border-gray-700">
			<div className="flex items-center space-x-20">
				<div className="flex items-center space-x-3">
					<Image src={Logo} alt="logo" className="w-[35%]" />
					<p className="text-[12px] text-gray-500">:</p>
					<p className="text-[10px] text-gray-500">Tournaments</p>
				</div>
				<div className="hidden md:flex space-x-6">
					<a href="#" className="hover:text-blue-400 text-[12px]">
						Overview
					</a>
					<a href="#" className="hover:text-blue-400 text-[12px]">
						ladder
					</a>
					<a href="#" className="hover:text-blue-400 text-[12px]">
						History
					</a>
				</div>
			</div>

			<div className="flex items-center space-x-4">
				
				<button className="p-2 rounded-full hover:bg-gray-700">
					<FaBell size={15} className="text-md" />
				</button>
			
			</div>
		</nav>
	);
};

export default Nav;
