"use client";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HorizontalScrollContainerProps {
	children: React.ReactNode;
	className?: string;
}

export const HorizontalScrollContainer: React.FC<
	HorizontalScrollContainerProps
> = ({ children, className = "" }) => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	const scroll = (direction: "left" | "right") => {
		if (scrollContainerRef.current) {
			const scrollAmount = direction === "right" ? 300 : -300;
			scrollContainerRef.current.scrollBy({
				left: scrollAmount,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className={`relative ${className}`}>
			<div
				ref={scrollContainerRef}
				className="flex space-x-4 overflow-x-auto scrollbar-hide py-2"
			>
				{children}
			</div>

			{/* Navigation buttons - only show on desktop */}
			<div className="hidden md:block">
				<button
					onClick={() => scroll("left")}
					className="absolute left-0 top-1/2 -translate-y-1/2 bg-[var(--dark)] p-2 rounded-full hover:bg-[var(--dark)]/80 z-10"
				>
					<ChevronLeft className="w-5 h-5" />
				</button>
				<button
					onClick={() => scroll("right")}
					className="absolute right-0 top-1/2 -translate-y-1/2 bg-[var(--dark)] p-2 rounded-full hover:bg-[var(--dark)]/80 z-10"
				>
					<ChevronRight className="w-5 h-5" />
				</button>
			</div>
		</div>
	);
};
