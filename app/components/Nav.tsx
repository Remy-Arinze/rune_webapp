import React from 'react'
import Image from 'next/image'
import Logo from '../../public/assets/logo.png'
import GameButton from './custom_button'

export default function Nav() {
  return (
    <div className='flex justify-between items-center py-5 px-20 mx-auto'>
      {/* Logo */}
      <Image src={Logo} alt="logo" className='w-[10%]' />
      <GameButton>
        <p className='text-black text-[13px] font-semibold'>Join Waitlist</p>
      </GameButton>
    </div>
  )
}
