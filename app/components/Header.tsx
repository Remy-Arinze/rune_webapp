'use client'
import { useRouter } from "next/navigation";
import React from "react";

interface HeaderProps {
	title: string;
	actionText?: string;
	hasPath?:boolean;
	path?: string;
}

export const HeaderComponent: React.FC<HeaderProps> = ({
	title,
	actionText = "more",
	hasPath =false,
	path,
}) => {
	const router = useRouter()
	return (
		<div className="flex items-center justify-between">
			<p className="text-[11px] text-gray-400 font-medium">{title}</p>
		{hasPath &&	<p
				onClick={()=> router.push(`${path}`)}
				className="text-[12px] hover:cursor-pointer text-gray-400 hover:text-white transition-colors"
			>
				{actionText}
			</p>}
		</div>
	);
};
