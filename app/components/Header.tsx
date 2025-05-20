'use client'
import { useRouter } from "next/navigation";
import React from "react";

interface HeaderProps {
	title: string;
	actionText?: string;
	hasPath?: boolean;
	path?: string;
	icon?: React.ReactNode; // Optional icon
}

export const HeaderComponent: React.FC<HeaderProps> = ({
	title,
	actionText = "more",
	hasPath = false,
	path,
	icon,
}) => {
	const router = useRouter();

	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center gap-1">
				{icon && <span className="text-gray-400">{icon}</span>}
				<p className="text-[11px] text-gray-400 font-medium">{title}</p>
			</div>
			{hasPath && (
				<p
					onClick={() => router.push(`${path}`)}
					className="text-[12px] hover:cursor-pointer text-gray-400 hover:text-white transition-colors"
				>
					{actionText}
				</p>
			)}
		</div>
	);
};
