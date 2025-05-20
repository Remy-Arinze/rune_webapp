import React from 'react';

const BetOption: React.FC<{
  odds: string;
  isSelected: boolean;
  onClick: () => void;
  label?: string;
  icon?: React.ReactNode;
}> = ({ odds, isSelected, onClick, label, icon }) => (
  <div 
    className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer transition-all
      ${isSelected ? 'bg-[var(--primary)] text-[var(--background)] border-[var(--primary)]' : 
        'bg-[var(--dark)] border-gray-700 hover:bg-gray-800 text-gray-300'}
      border min-w-[60px] h-[60px]`}
    onClick={onClick}
  >
    {icon && <div className="mb-1 text-lg">{icon}</div>}
    <p className="text-xs font-medium">{label}</p>
    <p className={`text-xs mt-1 ${isSelected ? 'text-[var(--background)]' : 'text-[var(--primary)]'} font-bold`}>{odds}</p>
  </div>
);

export default BetOption;