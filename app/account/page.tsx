import React from 'react'
import { CustomTabs } from '../components/tab_component'
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { Bitcoin } from 'lucide-react';
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
import { TokenComponent } from '../components/account/token_component';

import Image from 'next/image'
import ChessBoard from '../../public/assets/chess_board_copy.png'
import { FaEthereum } from 'react-icons/fa';

export default function Account() {
  const gameHistory = [
    {date:'Jan 12'},
    {date:'Jan 12'},
    {date:'Jan 12'},
    {date:'Jan 12'},
    {date:'Jan 12'},
    {date:'Jan 12'},
    {date:'Jan 12'},
    {date:'Jan 12'},
  ]
  return (
    <div className='md:flex space-x-5 md:pr-10 md:mt-0 mt-5'>
     
        <div className='md:w-[35%] md:h-[80dvh] h-[60dvh] overflow-y-scroll no-scrollbar'>
          <div>
          <CustomTabs hasBackgroundColor={false} tabs={[
                  { value: 'token', label: 'Tokens' },
                  { value: 'collections', label: 'Collections' },
                  { value: 'history', label: 'History' },
          ]}>
          <div className=' w-full rounded-lg bg-[var(--dark)] py-4 px-2'>
                <p className='text-[12px]'>
                  WELCOME BACK RA! 
                </p>

                <p className='mt-5 text-gray-400 text-[10px]'>Account Balance</p>
                <p className='text-2xl'>$20,454.00</p>
                <p className='text-[10px] text-gray-400'>20,454.00 <span>RUNE</span></p>

                <div className="mt-3  flex items-center justify-between">
                  <button className='flex items-center justify-center w-[50px] h-[50px] rounded-lg  bg-[var(--background)]'>
                  <GoArrowUpRight />
                  </button>
                  <button className='flex items-center justify-center w-[50px] h-[50px] rounded-lg  bg-[var(--background)]'>
                  <GoArrowDownLeft />
                  </button>
                  <button className='flex items-center justify-center w-[50px] h-[50px] rounded-lg  bg-[var(--background)]'>
                  <HiArrowPathRoundedSquare />
                  
                  </button>
                </div>

                <div className='mt-5'>
                  <p className='text-gray-500 text-[10px] flex item-center justify-between'>Tokens <span className='hover:cursor-pointer'>more</span></p>
                 <TokenComponent symbol='Rune' priceChange='0.000' icon={<p className='font-bold'>R</p>} name={'Rune'} amount={'0.000'} amountInUsd={'1000,000'} />                </div>
                 <TokenComponent symbol='BTC' priceChange='0.000' icon={<Bitcoin />} name={'Bitcoin'} amount={'0.000'} amountInUsd={'1000,000'} />
                 {/* <TokenComponent symbol='ETH' priceChange='0.000' icon={<FaEthereum />} name={'Ethereun'} amount={'0.000'} amountInUsd={'1000,000'} /> */}
            </div>
            <div>Collections</div>
            <div>History</div>
          </CustomTabs>
          
          </div>
            
        </div>
        <div className=' md:mt-0 mt-10 md:w-[70%] p-4 rounded-lg md:h-[80dvh] h-[70dvh] bg-[var(--dark)] overflow-y-scroll no-scrollbar'>
        <p className='text-[12px] text-gray-400 mb-5'>Game History</p>
      <div className='flex flex-wrap space-x-2 space-y-5'>
               {gameHistory.map((game,index)=>  <Image key={index} src={ChessBoard} alt="" width={450} className='w-[30%]'/> )}
        
      </div>
        </div>
    </div>
  )
}
