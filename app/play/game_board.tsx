"use client"
import React from 'react'

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
