import React from 'react';

type TokenComponentProps = {
  icon: React.ReactNode;
  name: string;
  symbol?: string;
  amount: string;
  amountInUsd: string;
  priceChange?: string;
};

export const TokenComponent: React.FC<TokenComponentProps> = ({
  icon,
  name,
  symbol,
  amount,
  amountInUsd,
  priceChange,
}) => {
  return (
    <div className='rounded-md w-full mt-1 items-center p-1'>
      <div className='flex items-center space-x-1'>
        <div className="bg-gray-500 flex items-center justify-center rounded-full w-[30px] h-[30px]">
          {icon}
        </div>
        <p className='text-[13px]'>
          {name}
          {symbol && <span className='text-gray-500 ml-1'>({symbol})</span>}
        </p>
        <p className='ml-[auto] text-[11px]'>{amount}</p>
      </div>
      <div className='flex items-center mt-1 justify-between text-gray-500 text-[10px] pl-8'>
        <p>${amountInUsd}</p>
        {priceChange && <p>{priceChange}</p>}
      </div>
    </div>
  );
};