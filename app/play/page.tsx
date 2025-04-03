'use client'
import React from 'react'
import GameBoard from './game_board'
import { ContentCreatorCard } from '../components/landing_page/content_card'
import { CustomTabs } from '../components/tab_component'
import { Dropdown } from "flowbite-react";
import { SelectDropdown } from '../components/gameplay_screen/sidedropdown'
import GameButton from '../components/custom_button'


export default function PlayScreen() {
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

         <GameButton className='mt-10 w-full'>
        <p className='text-black text-[15px] font-semibold '>Start Game</p>
      </GameButton>

      <p className='text-[12px] my-10 mx-auto'>Custom</p>

      <div style={
        {
           boxShadow: `0 4px 0 , 0 5px 5px rgba(0, 0, 0, 0.1)`,
        }
      } className='py-2 px-4 bg-black flex items-center justify-center  border-[var(--primary)] rounded-lg'><p className='font-bold'>Play a Friend</p></div>
      <div className='mt-3 py-2 px-4 bg-black flex items-center justify-center  border-[var(--primary)] rounded-lg'><p className='font-bold'>Play a Bot</p></div>
      </div>
      <div>Players</div>
     
    </CustomTabs>
      </div>
    </div>
  )
}
