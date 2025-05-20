import { Coins, Sword, Timer, Trophy } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import nft from '../../../public/assets/nft.png'

export default function MatchCard() {
  return (
    <Link href={'/stream'} prefetch>
  <div className="hover:cursor-pointer flex-shrink-0 w-[200px] bg-[var(--dark)] rounded-lg p-3 border border-[var(--dark-border)] hover:border-orange-400/30 transition-all">
    {/* Header with timer and status */}
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <Timer className="text-orange-400" size={14} />
        <span className="text-[10px] text-gray-400 ml-1">20m ago</span>
      </div>
      <div className="flex items-center bg-[var(--darker)] px-2 py-1 rounded-full">
        <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
        <span className="text-[10px]">LIVE</span>
      </div>
    </div>

    {/* Players vs section */}
    <div className="flex items-center justify-between mt-4">
      {/* Player 1 */}
      <div className="flex flex-col items-center w-[40%]">
        <div className="relative">
          <Image 
            src={nft} 
            alt="player" 
            width={48} 
            height={48}
            className="rounded-full border-2 border-orange-400"
          />
          <Trophy className="absolute -bottom-1 -right-1 text-yellow-400 bg-[var(--dark)] rounded-full p-0.5" size={14} />
        </div>
        <p className="text-xs font-medium mt-2 text-center">0x_Ra</p>
        <p className="text-[10px] text-gray-400">3 wins</p>
      </div>

      {/* VS Badge */}
      <div className="flex flex-col items-center">
        <div className="bg-[var(--darker)] rounded-full w-6 h-6 flex items-center justify-center">
          <Sword className="text-orange-400" size={12} />
        </div>
        <span className="text-[10px] font-bold mt-1">VS</span>
      </div>

      {/* Player 2 */}
      <div className="flex flex-col items-center w-[40%]">
        <Image 
          src={nft} 
          alt="player" 
          width={48} 
          height={48}
          className="rounded-full border-2 border-blue-400"
        />
        <p className="text-xs font-medium mt-2 text-center">dann</p>
        <p className="text-[10px] text-gray-400">1 win</p>
      </div>
    </div>

    {/* Odds section */}
    <div className="mt-4 bg-[var(--darker)] rounded-lg p-2">
      <div className="flex justify-between items-center mb-1">
        <span className="text-[10px] text-gray-400">Odds</span>
        <div className="flex items-center">
          <Coins className="text-yellow-400 mr-1" size={12} />
          <span className="text-[10px] font-bold">3.4x</span>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-center">
          <p className="text-[10px] text-orange-400">3.4</p>
          <div className="h-1 w-full bg-gray-600 rounded-full mt-1">
            <div className="h-1 bg-orange-400 rounded-full" style={{ width: '70%' }}></div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-[10px] text-blue-400">2.2</p>
          <div className="h-1 w-full bg-gray-600 rounded-full mt-1">
            <div className="h-1 bg-blue-400 rounded-full" style={{ width: '30%' }}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Link>
  )
}
