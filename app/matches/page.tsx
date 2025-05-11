import React from 'react'
import { HorizontalScrollContainer } from '../components/horizontal_scroll'
import { IoTrophySharp } from 'react-icons/io5'
import { FaCrown } from 'react-icons/fa'
import GameButton from '../components/custom_button'

function Matches() {
  const topTournaments = [
    {title: 'World Series Chess 2025',},
    {title: 'World Series Chess 2025',},
    {title: 'World Series Chess 2025',},
    {title: 'World Series Chess 2025',},
  ]

  const wagers = [
    {
      player_one:"0x_Ra", player_two:"0x_Dann", 
      player_one_win:"19/1", player_two_win:'29/100', 
      stakes:[
        {
          player_one_to_loose_queen:"20/0",
          player_two_to_loose_queen:"20/0",
          player_one_to_loose_knight:"20/0",
      }
    ]},
    {
      player_one:"0x_Ra", player_two:"0x_Dann", 
      player_one_win:"19/1", player_two_win:'29/100', 
      stakes:[
        {
          player_one_to_loose_queen:"20/0",
          player_two_to_loose_queen:"20/0",
          player_one_to_loose_knight:"20/0",
      }
    ]},
    {
      player_one:"0x_Ra", player_two:"0x_Dann", 
      player_one_win:"19/1", player_two_win:'29/100', 
      stakes:[
        {
          player_one_to_loose_queen:"20/0",
          player_two_to_loose_queen:"20/0",
          player_one_to_loose_knight:"20/0",
      }
    ]},
    {
      player_one:"0x_Ra", player_two:"0x_Dann", 
      player_one_win:"19/1", player_two_win:'29/100', 
      stakes:[
        {
          player_one_to_loose_queen:"20/0",
          player_two_to_loose_queen:"20/0",
          player_one_to_loose_knight:"20/0",
      }
    ]},
    {
      player_one:"0x_Ra", player_two:"0x_Dann", 
      player_one_win:"19/1", player_two_win:'29/100', 
      stakes:[
        {
          player_one_to_loose_queen:"20/0",
          player_two_to_loose_queen:"20/0",
          player_one_to_loose_knight:"20/0",
      }
    ]},
  ]
  return (
    <div className='pr-10'>
        <HorizontalScrollContainer>
        {
          topTournaments.map((tournament,index)=> <div className='flex-shrink-0 w-[40%] p-2 bg-[var(--dark)] rounded-md mr-10 flex flex-col items-center justify-center
          '>
              <div className='flex space-x-2 mb-5 items-center'>
                <IoTrophySharp/>
                <p>{ tournament.title}</p>
              </div>
{/* 
              <div className="mt-2">
                <GameButton>
                  <p>Join</p>
                </GameButton>
              </div> */}
          </div>)
        }
        </HorizontalScrollContainer>
        <p className='mt-5 space-x-2 flex text-[12px] items-center'> <span  className='mr-3 '><FaCrown color='var(--primary)'/></span> Top Matches</p>

{/* Games  */}
  <div className='bg-[var(--dark)] h-[55dvh] overflow-y-scroll no-scrollbar mt-2 rounded-t-md'>
{wagers.map((wager,index)=> <div className='flex py-2 px-2 items-center border-[transparent] border border-b-gray-700'>
<div className=' w-[40%] border-[transparent] border border-r-gray-500' >
  <p className='text-[10px] text-gray-400 flex items-center justify-between'>Blitz <span>1:34:00</span></p>
<div className='flex items-center space-x-3'>
  <div className='flex items-center space-x-2 mt-2'>
    <div className='h-10 w-10 rounded-lg bg-[var(--background)]'></div>
  <p className='text-[12px]'>{wager.player_one}</p>
  </div>
  <p className='text-gray-500 text-[10px]'>vs</p>
  <div className='flex items-center space-x-2 mt-2'>
    <div className='h-10 w-10 rounded-lg bg-[var(--background)]'></div>
  <p className='text-[12px]'>{wager.player_two}</p>
  </div>
</div>
</div>
<div className='h-full w-[1px] border border-[transparent] border-r-gray-500'></div>
{/* Stakes side */}
  <div className='w-[60%] h-full ml-10'>
    <div className=''>
        <p className='text-gray-400 text-[11px]'>1x2</p>
  <div className="flex space-x-3">
  <div className='flex items-center space-x-2 mt-3'>
<div className='rounded-md h-[40px] w-[40px] flex items-center justify-center text-[10px] text-gray-400 bg-[var(--background)]'>
  <p>{wager.player_one_win}</p>
</div>
      </div>
      <div className='flex items-center space-x-2 mt-3'>
<div className='rounded-md h-[40px] w-[40px] flex items-center justify-center text-[10px] text-gray-400 bg-[var(--background)]'>
  <p>{wager.player_two_win}</p>
</div>
      </div>
  </div>
    </div>
  </div>
</div> )}
        </div>
    </div>
  )
}

export default Matches