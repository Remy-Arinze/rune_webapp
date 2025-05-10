'use client'
import React from 'react'
import GameBoard from './game_board'
import GameButton from '../components/custom_button';
import { SelectDropdown } from '../components/dropdown';
import { CustomTabs } from '../components/tab_component';
import { useRouter } from 'next/navigation';
import { FaArrowDown } from 'react-icons/fa';
import { IoArrowDown } from 'react-icons/io5';
import { IoIosArrowDown, IoIosArrowDropdown } from 'react-icons/io';



export default function PlayScreen() {
  const router = useRouter();
   const customOptions = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
  ];

  return (
    <div className='flex ml-5' >
      <div>
        <GameBoard />
        <div className='mt-10 bg-[var(--dark)] w-full'>Game History</div>
      </div>

      <div className='ml-10 bg-[var(--dark)] h-[90dvh] px-2 py-1 rounded-lg w-[25%] '>
         <CustomTabs
      tabs={[
        { label: 'New Game', value: 'new game' },
        { label: 'Players', value: 'players' },
      
      ]}
    
      tabListClassName=""
      onTabChange={(value) => console.log('Tab changed to:', value)}
    >
      <div className='w-full'>
        <div className='mt-10'>
           <SelectDropdown 
        options={customOptions}
        placeholder="Standard"
      />
        </div>
        <div className='mt-5'>
           <SelectDropdown 
        options={customOptions}
        placeholder="Standard"
      />
        </div>

         <GameButton className='mt-10 w-full' onClick={()=> router.push('/game')} >
        <p className='text-black text-[15px] font-semibold '>Start Game</p>
      </GameButton>

    <div className='flex items-center space-x-1 mt-5 mb-10 mx-auto'>
      <IoIosArrowDown />
    <p className='text-[11px] '>Custom</p>
    </div>

      <GameButton className='mb-5 text-[var(--background)] text-[14px] w-full' >
        <p>Play a Friend</p>
      </GameButton>
    
      <GameButton className='mb-5 text-[var(--background)] text-[14px] w-full' >
        <p>Play a Bot</p>
      </GameButton>
      </div>
      <div>Players</div>
     
    </CustomTabs>
      </div>
    </div>
  )
}
