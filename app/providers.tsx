"use client";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import Sidebar from "./components/sidebar/Sidebar";
import Nav from "./components/Nav";

export function Providers({ children }: { children: React.ReactNode }) {

	const [isSidebarVisible, setIsSidebarVisible] = useState(false);
	// const [isMainSidebarExpanded,setIsMainSidebarExpanded] = useState(true);


	return (
		<Provider store={store}>
			<main>
				<Nav/>
				<section className="flex mx-auto pt-5">
					<div className=" md:h-[calc(100vh-80px)] fixed overflow-y-scroll no-scrollbar">
						<Sidebar />
					</div>
			
				<div className={ "md:w-[72%] md:ml-[28%] w-full md:px-0 px-3 md:mb-0 mb-10"}>
					{children}
				</div>
			</section>
			</main>
		</Provider>
	);
}
