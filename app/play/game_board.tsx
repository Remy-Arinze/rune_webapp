"use client"
import React from 'react'

import ChessBoard from '../../public/assets/chess_board_copy.png'
import Image from 'next/image'
import GamePlayer from '../components/gameplay_screen/game_player'

export default function GameBoard() {
  return (
    <div>
        <GamePlayer/>
        <Image src={ChessBoard} alt="" width={450} className='my-5'/>
        <GamePlayer/>
    </div>
  )
}
