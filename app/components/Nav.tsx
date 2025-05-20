"use client"
import React, { useState } from "react";
import Image from "next/image";
import Logo from "./../../public/assets/logo.png";
import {  FaBell } from "react-icons/fa";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "@/store/ui_slice";

const Nav = () => {
	const  [isSignedIn] = useState(false);
	const dispatch = useDispatch();
	return (
		<nav className="bg-[var(--background)] text-white w-full absolute z-100 fixed top-0  p-4 flex items-center justify-between border-b border-gray-700">
			<div className="flex items-center space-x-20">
				<div className="flex items-center space-x-3">
					<Image src={Logo} alt="logo" className="md:w-[8rem] w-[10rem]" />
					{/* <p className="md:flex hidden text-[10px] text-gray-500">Tournaments</p> */}
					{/* <p className="md:flex hidden text-[12px] text-gray-500">:</p> */}
				</div>
				{/* <div className="hidden md:flex space-x-6">
					<a href="#" className="hover:text-blue-400 text-[12px]">
						Create game
					</a>
					<a href="#" className="hover:text-blue-400 text-[12px]">
						ladder
					</a>
					<a href="#" className="hover:text-blue-400 text-[12px]">
						History
					</a>
				</div> */}
			</div>

			<div className="hidden md:flex items-center space-x-4">
			{
				isSignedIn ?

				<button className="p-2 rounded-full hover:bg-gray-700">
					<FaBell size={15} className="text-md" />
				</button> : <Link prefetch href={'/auth/login'}>
				<p className="text-[12px] py-1 px-4 text-[var(--background)] font-semibold bg-orange-400 rounded-md">Sign In</p></Link>
			}
			</div>

			<CiMenuBurger onClick={()=> dispatch(toggleSidebar())} className="md:hidden text-white" />
		</nav>
	);
};

export default Nav;
