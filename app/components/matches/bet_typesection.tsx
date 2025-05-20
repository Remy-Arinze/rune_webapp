import React from 'react';
import { BetOption as BetOptionType } from './types';
import BetOption from './bet_options';

const BetTypeSection: React.FC<{
  title: string;
  options: BetOptionType[];
  selectedOption: number | undefined;
  onSelect: (index: number) => void;
}> = ({ title, options, selectedOption, onSelect }) => (
  <div className='mb-4 pr-4 mr-4 border-r border-gray-700 last:border-r-0'>
    <p className='text-gray-400 text-[10px] font-semibold mb-2 uppercase tracking-wider'>{title}</p>
    <div className="flex space-x-3">
      {options.map((option, index) => (
        <BetOption
          key={index}
          odds={option.odds}
          label={option.label}
          icon={option.icon}
          isSelected={selectedOption === index}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  </div>
);

export default BetTypeSection;