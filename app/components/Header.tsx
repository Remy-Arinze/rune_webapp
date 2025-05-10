import React from "react";

interface HeaderProps {
	title: string;
	actionText?: string;
	onActionClick?: () => void;
}

export const HeaderComponent: React.FC<HeaderProps> = ({
	title,
	actionText = "more",
	onActionClick,
}) => {
	return (
		<div className="flex items-center justify-between">
			<p className="text-[13px] font-medium">{title}</p>
			<button
				onClick={onActionClick}
				className="text-[11px] text-gray-400 hover:text-white transition-colors"
			>
				{actionText}
			</button>
		</div>
	);
};
