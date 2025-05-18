import React, { ReactNode } from 'react'
import { BsCart, BsHeartFill } from 'react-icons/bs'
import { IoFlame } from 'react-icons/io5'

interface props{
    name: string,
    price: string | number,
    item?: ReactNode

}

export default function NFTCOMPONENT({name,price,item}:props) {
    return (
        <div className='px-1 py-3 flex-shrink-0 w-[120px] bg-[var(--dark)] rounded-lg'>
            <div className=' mb-3 relative text-[50px] w-full h-[70px] flex items-center justify-center'>
                {item}
            </div>
            <p className='text-[10px]'>{name}</p>
        <p className='text-[9px] mt-1 rounded bg- text-gray-500 flex items-center text-red-500 space-x-2'><IoFlame className=' text-[15px]' /> Rare </p>

<div className=' flex mt-3 items-center justify-between' >
        <p className='text-[10px] text-yellow-500'>$ {price}</p>
    <div className='flex items-center space-x-2 text-[12px] '>
        <BsHeartFill />
        <BsCart/>
    </div>
</div>
            </div>
  )
}
