import { useRouter } from "next/navigation";
import React from "react";

interface HeaderProps {
	title: string;
	actionText?: string;
	path?: string;
}

export const HeaderComponent: React.FC<HeaderProps> = ({
	title,
	actionText = "more",
	path,
}) => {
	const router = useRouter()
	return (
		<div className="flex items-center justify-between">
			<p className="text-[12px] text-gray-400 font-medium">{title}</p>
			<p
				onClick={()=> router.push(`${path}`)}
				className="text-[11px] hover:cursor-pointer text-gray-400 hover:text-white transition-colors"
			>
				{actionText}
			</p>
		</div>
	);
};
