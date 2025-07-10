"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import Sidebar from "./components/sidebar/Sidebar";
import Nav from "./components/Nav";
import CustomModal from "./components/custom_modal";
import { usePathname } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();

	// Add all paths where you want the sidebar hidden
	const hideSidebar = pathname.startsWith("/game");

	return (
		<Provider store={store}>
			<main>
				<CustomModal />
				<Nav />
				<section className="flex mx-auto pt-5">
					{/* Conditionally render Sidebar */}
					{!hideSidebar && (
						<div className="md:h-[calc(100vh-80px)] fixed md:z-0 z-50 overflow-y-scroll no-scrollbar">
							<Sidebar />
						</div>
					)}

					<div
						className={`${
							!hideSidebar
								? "md:w-[calc(100%-23rem)] ml-[auto]"
								: "w-full ml-0"
						} w-full md:px-0 px-3 md:mb-0 mb-10`}
					>
						{children}
					</div>
				</section>
			</main>
		</Provider>
	);
}
