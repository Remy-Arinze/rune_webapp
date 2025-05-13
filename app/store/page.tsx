import React from 'react'
import Image from 'next/image'

import Hero from '../../public/assets/marketplace/hero.png'
import NFT from '../../public/assets/nft.png'
import NFTCOMPONENT from '../components/marketpplace/nft_component'
import { IoFlame } from 'react-icons/io5'
import { FaChessBishop, FaChessBoard, FaChessKing } from 'react-icons/fa'




export default function Marketplace() {
  return (
    <div className=' h-[80dvh] overflow-y-scroll no-scrollbar mr-10'>
        <div className='w-full'>
        <Image src={Hero} alt="logo" className='w-full' />
        </div>


<p className='mt-5 mb-2 text-[12px] flex items-center space-x-2'> < IoFlame size={18} className='text-[var(--primary)]'/> Hot Items</p>
        <div className='flex items-center space-x-3'>
           <NFTCOMPONENT item={<Image src={NFT} alt="logo" className='w-[80%]' />} name={"Rooks Rarity"} price={0.1123}/>
           <NFTCOMPONENT item={<FaChessBishop/>} name={"Queens Crown"} price={10.00}/>
           <NFTCOMPONENT item={<FaChessBoard className='text-[var(--primary)]'/>} name={"Circle Of Kings"} price={100.00} />
           <NFTCOMPONENT item={<FaChessKing />} name={"QUEENS CROWN"} price={400.0}/>
           <NFTCOMPONENT item={<FaChessKing />} name={"QUEENS CROWN"} price={400.0}/>
           <NFTCOMPONENT item={<FaChessKing />} name={"QUEENS CROWN"} price={400.0}/>
        </div>
    </div>
  )
}
