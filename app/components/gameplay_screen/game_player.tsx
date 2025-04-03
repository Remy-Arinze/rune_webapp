import React from 'react'
import { CiUser, CiSettings } from 'react-icons/ci'

export default function GamePlayer() {
  return (
    <div className='flex items-center justify-between '>
            <div className='flex '>
                <div className='h-[40px] flex items-center justify-center w-[40px] rounded-md bg-[var(--primary)]'>
                <CiUser color='black'/>
            </div>
            <p className='ml-2 text-[14px] text-gray-600'>Opponent</p>
            </div>

            <div className='flex space-x-2'>
                <div className='py-3 px-5 text-xl rounded-lg bg-gray-800'>03:00</div>
                <CiSettings size={20} color='var(--primary)' />
            </div>
        </div>
  )
}
