import React from 'react'
import GamePlayer from '../components/gameplay_screen/game_player'

import ChessBoard from '../../public/assets/chess_board.png'
import Image from 'next/image'

export default function GameBoard() {
  return (
    <div>
        <GamePlayer/>
        <Image src={ChessBoard} alt="" width={450} className='my-5'/>
        <GamePlayer/>
    </div>
  )
}
