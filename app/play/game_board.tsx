"use client"
import React from 'react'

import ChessBoard from '../../public/assets/chess_board_copy.png'
import Image from 'next/image'
import GamePlayer from '../components/gameplay_screen/game_player'
import { Chessboard } from 'react-chessboard'

export default function GameBoard() {
  return (
    <div>
        <GamePlayer/>
        <br />
        <Chessboard boardWidth={350}/>
        <br />
        <GamePlayer/>
    </div>
  )
}
