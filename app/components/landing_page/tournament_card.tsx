import React from 'react'

export default function TournamentCard() {
  return (
    <div className='flex items-center justify-between space-x-2 mb-5'>
    <div className='h-[30px] w-[50px] rounded-full bg-white'></div>
<div>
    <p className='text-[12px] font-semibold'>2020 Nigerial Chess Foundation Tournament</p>
    <p className='text-[10px] text-gray-400'>220 registered players</p>
    </div>   
    <p className='text-[8px] text-red-500'>On going</p>
     </div>
  )
}
