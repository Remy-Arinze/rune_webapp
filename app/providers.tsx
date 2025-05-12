"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import Sidebar from "./components/sidebar/Sidebar";

export function Providers({ children }: { children: React.ReactNode }) {

	return (
		<Provider store={store}>
			<section className="flex mx-auto pt-5">
				
					<div className=" h-[calc(100vh-80px)] fixed overflow-y-scroll no-scrollbar">
						<Sidebar />
					</div>
			
				<div className={  "w-[72%] ml-[28%] "}>
					{children}
				</div>
			</section>
		</Provider>
	);
}
