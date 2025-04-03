import { CheckIcon } from 'flowbite-react/icons'
import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface props{
    image: StaticImageData,
    name: string,
    description: string,
    units: string | number,
    price: string | number,
    volume: string | number,

}

export default function NFTCOMPONENT({name,description,image,price,units,volume}:props) {
  return (
     <div className='px-2 py-3 w-[24%] h-[300px] bg-[var(--dark)] rounded-lg'>
                
                     <Image src={image} alt="logo" className='w-full h-[100px]' />
        <div className='flex items-center justify-center space-x-3 mt-5'>
            <p>{name}</p>
            <CheckIcon/>
        </div>
        <p className='text-[10px] text-center text-gray-500 mb-3'>{units} items</p>
        <p className='text-[12px] text-grey-400 text-center px-3'>{description}</p>

<div className='mt-5 flex items-center justify-evenly' >
    <div>
        <p className='text-[12px]'>Floor</p>
    <div className='flex items-center space-x-1 '>
        <p className='text-[13px]'>R</p>
        <p className='text-[13px]'>{price}</p>
    </div>
    </div>
    <div>
        <p className='text-[12px]'>Volume</p>
    <div className='flex items-center space-x-1 '>
        <p className='text-[13px]'>R</p>
        <p className='text-[13px]'>{volume}</p>
    </div>
    </div>
</div>
            </div>
  )
}
