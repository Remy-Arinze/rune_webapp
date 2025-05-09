import React from 'react'
import Image from 'next/image'

import Hero from '../../public/assets/marketplace/hero.png'
import One from '../../public/assets/marketplace/one.png'
import Two from '../../public/assets/marketplace/two.png'
import Three from '../../public/assets/marketplace/three.png'
import Four from '../../public/assets/marketplace/four.png'
import NFTCOMPONENT from '../components/marketpplace/nft_component'




export default function Marketplace() {
  return (
    <div className=''>
        <div className='w-full'>
        <Image src={Hero} alt="logo" className='w-full' />
        </div>


<p className='mt-5 mb-2'>Collection</p>
        <div className='flex items-center justify-between '>
           <NFTCOMPONENT image={One} name={"Rooks Rarity"} description={`Dragonz Land is a Trading Card Play-2-
Earn Game where each card is a unique…`} units={'100,000'} price={'234'} volume={'1000'} />
           <NFTCOMPONENT image={Two} name={"Queens Crown"} description={`Dragonz Land is a Trading Card Play-2-
Earn Game where each card is a unique…`} units={'100,000'} price={'234'} volume={'1000'} />
           <NFTCOMPONENT image={Three} name={"Circle Of Kings"} description={`Dragonz Land is a Trading Card Play-2-
Earn Game where each card is a unique…`} units={'100,000'} price={'234'} volume={'1000'} />
           <NFTCOMPONENT image={Four} name={"QUEENS CROWN"} description={`Dragonz Land is a Trading Card Play-2-
Earn Game where each card is a unique…`} units={'100,000'} price={'234'} volume={'1000'} />
        </div>
    </div>
  )
}
