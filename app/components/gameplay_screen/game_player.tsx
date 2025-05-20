import React from 'react'
import { CiUser, CiSettings } from 'react-icons/ci'

export default function GamePlayer() {
  return (
    <div className='flex items-center justify-between '>
            <div className='flex '>
                <div className='h-[30px] flex items-center justify-center w-[30px] rounded-md bg-[var(--primary)]'>
                <CiUser color='black'/>
            </div>
            <p className='ml-2 text-[12px] text-gray-400'>Opponent</p>
            </div>

            <div className='flex space-x-2'>
                <CiSettings size={20} color='var(--primary)' />
                <div className='py-2 px-4 text-md rounded-lg bg-gray-800'>03:00</div>
            </div>
        </div>
  )
}
