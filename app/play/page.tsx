'use client'
import React, { useState } from 'react'
import GameBoard from './game_board'
import GameButton from '../components/custom_button'
import { SelectDropdown } from '../components/dropdown'
import { CustomTabs } from '../components/tab_component'
import { useRouter } from 'next/navigation'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { FaChessKing, FaChessQueen, FaChessRook, FaChessBishop, FaChessKnight, FaChessPawn, FaCrown, FaTrophy, FaUserFriends, FaRobot } from 'react-icons/fa'
import { GiChessKing, GiSwordsEmblem } from 'react-icons/gi'
import { RiSwordFill } from 'react-icons/ri'

const PlayScreen = () => {
  const router = useRouter()
  const [showFriendList, setShowFriendList] = useState(false)
  const [activeTab, setActiveTab] = useState('new game')

  const timeControls = [
    { value: "bullet", label: "Bullet (1 min)" },
    { value: "blitz", label: "Blitz (3|2)" },
    { value: "rapid", label: "Rapid (10|0)" },
    { value: "classical", label: "Classical (30|20)" },
  ]

  const gameVariants = [
    { value: "standard", label: "Standard Chess" },
    { value: "960", label: "Chess 960" },
    { value: "atomic", label: "Atomic" },
    { value: "horde", label: "Horde" },
  ]

  // Dummy player data
  const friendsList = [
    { id: 1, name: "ChessMaster64", rating: 1850, status: "online", wins: 42, rank: "Gold", avatar: "/assets/avatars/1.png" },
    { id: 2, name: "PawnStorm", rating: 1620, status: "online", wins: 28, rank: "Silver", avatar: "/assets/avatars/2.png" },
    { id: 3, name: "CheckmateKing", rating: 2100, status: "offline", wins: 87, rank: "Platinum", avatar: "/assets/avatars/3.png" },
    { id: 4, name: "BishopSlayer", rating: 1540, status: "online", wins: 15, rank: "Bronze", avatar: "/assets/avatars/4.png" },
    { id: 5, name: "QueenGambit", rating: 1980, status: "away", wins: 63, rank: "Gold", avatar: "/assets/avatars/5.png" },
  ]

  const getRankIcon = (rank:string) => {
    switch(rank.toLowerCase()) {
      case 'bronze': return <FaChessPawn className="text-amber-700" />
      case 'silver': return <FaChessRook className="text-gray-300" />
      case 'gold': return <FaChessKnight className="text-yellow-400" />
      case 'platinum': return <FaChessBishop className="text-blue-300" />
      case 'diamond': return <FaChessQueen className="text-purple-300" />
      default: return <FaChessPawn className="text-gray-400" />
    }
  }

  return (
    <div className='flex overflow-scroll no-scrollbar bg-[var(--background)]'>
      {/* Main Game Area */}
      <div className=' flex'>
        {/* Chess Board */}
        <div className=' flex mr-10 flex-col items-center h-[80dvh] overflow-y-scroll no-scrollbar'>
          <div className='relative'>
            <GameBoard />
          </div>
          
          <div className='mt-8 bg-[var(--dark)] w-full max-w-2xl rounded-lg p-4'>
            <h3 className='flex items-center text-lg font-bold mb-3'>
              <RiSwordFill className='text-orange-400 mr-2' />
              Recent Games
            </h3>
            <div className='space-y-2'>
              {[1, 2, 3].map((game) => (
                <div key={game} className='flex items-center justify-between p-2 bg-[var(--darker)] rounded'>
                  <div className='flex items-center'>
                    <FaChessKing className='mr-2 text-orange-400' />
                    <span>Game #{game}</span>
                  </div>
                  <span className='text-sm text-gray-400'>2 days ago</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Game Setup Panel */}
        <div className={`w-[15rem] bg-[var(--dark)] px-3 transition-all duration-300 h-[80dvh] overflow-y-scroll no-scrollbar`}>
          <CustomTabs
            hasBackgroundColor={false}
            tabs={[
              { label: 'New Game', value: 'new game', icon: <FaChessKing className="mr-1" /> },
              { label: 'Players', value: 'players', icon: <FaUserFriends className="mr-1" /> },
            ]}
          >
            {/* New Game Tab Content */}
            <div className='mt-3 space-y-6'>
              <div>
                <h4 className='flex items-center text-[13px] font-semibold mb-2'>
                  <FaChessPawn className='mr-2 text-orange-400 ' />
                  Game Variant
                </h4>
                <SelectDropdown 
                  options={gameVariants}
                  placeholder="Select variant"
                  icon={<FaChessKing className="text-orange-400 text-[12px]" />}
                />
              </div>

              <div>
                <h4 className='flex items-center text-[13px] font-semibold mb-2'>
                  <FaTrophy className='mr-2 text-orange-400' />
                  Time Control
                </h4>
                <SelectDropdown 
                  options={timeControls}
                  placeholder="Select time control"
                  icon={<FaTrophy className="text-orange-400 text-[12px]" />}
                />
              </div>

              <div className='pt-4'>
                <GameButton 
                  className='w-full '
                  onClick={() => router.push('/game')}
                >
                  <div className='flex items-center justify-center text-md'>
                    <GiSwordsEmblem className='mr-2 ' />
                    <span className='font-bold'>Start Game</span>
                  </div>
                </GameButton>
              </div>

              <div className='flex items-center justify-center space-x-2 text-gray-400 cursor-pointer' onClick={() => setShowFriendList(!showFriendList)}>
                <IoIosArrowDown className={`transition-transform ${showFriendList ? 'rotate-180' : ''}`} />
                <p className='text-sm'>More Options</p>
              </div>

              <div className='space-y-3'>
                <GameButton 
                  className='w-full text-sm'
                  onClick={() => setShowFriendList(!showFriendList)}
                >
                  <div className='flex items-center justify-center'>
                    <FaUserFriends className='mr-2 text-[var(--background)]' />
                    <span>Play a Friend</span>
                  </div>
                </GameButton>

                <GameButton className='w-full text-sm'>
                  <div className='flex items-center justify-center'>
                    <FaRobot className='mr-2 text-blue-400' />
                    <span>Play a Bot</span>
                  </div>
                </GameButton>
              </div>
            </div>

            {/* Players Tab Content */}
            <div className='mt-3'>
              <h3 className='text-sm font-medium mb-2'>Online Players</h3>
              <div className='space-y-3'>
                {friendsList.map(player => (
                  <div key={player.id} className='flex items-center py-3 cursor-pointer'>
                    <div className='relative mr-3'>
                      <div className='w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center'>
                        <FaChessKing className='text-orange-400' />
                      </div>
                      <div className='absolute -bottom-1 -right-1'>
                        {getRankIcon(player.rank)}
                      </div>
                    </div>
                    <div className='flex-1'>
                      <div className='flex justify-between items-center'>
                        <span className='font-medium text-[14px]'>{player.name}</span>
                        <span className='text-[10px] bg-green-900 text-green-300 px-2 py-1 rounded-full'>{player.rating}</span>
                      </div>
                      <div className='flex justify-between text-xs text-gray-400 mt-1'>
                        <span className='text-[10px]'>{player.wins} wins</span>
                        <span className='flex items-center text-[10px]'>
                          <span className={`w-2 h-2 rounded-full mr-1 ${player.status === 'online' ? 'bg-green-500' : 'bg-gray-500'}`}></span>
                          {player.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CustomTabs>
        </div>

        {/* Friends List Panel (conditionally shown) */}
        {showFriendList && (
          <div className=' bg-[var(--darker)] px-5 overflow-y-auto h-[80dvh] overflow-y-scroll no-scrollbar'>
            <div className='flex items-center justify-between mb-6'>
              <h3 className='text-sm font-bold flex items-center'>
                <FaUserFriends className='mr-2 text-[var(--primary)]' />
                Friends
              </h3>
              <button 
                onClick={() => setShowFriendList(false)}
                className='text-gray-400 hover:text-white'
              >
                <IoIosArrowForward />
              </button>
            </div>

            <div className='space-y-4 '>
              {friendsList.map(friend => (
                <div key={friend.id} className='flex items-center p-3 bg-[var(--dark)] rounded-lg hover:bg-[var(--dark-hover)] cursor-pointer'>
                  <div className='relative mr-3'>
                    <div className='w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center'>
                      <FaChessQueen className='text-orange-400 text-xl' />
                    </div>
                    {friend.status === 'online' && (
                      <div className='absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-[var(--dark)]'></div>
                    )}
                  </div>
                  <div className='flex-1'>
                    <div className='flex justify-between space-x-4 items-center'>
                      <span className='font-medium text-[12px]'>{friend.name}</span>
                      <div className='flex items-center'>
                        <FaTrophy className='text-yellow-400 mr-1' />
                        <span className='text-[10px]'>{friend.rating}</span>
                      </div>
                    </div>
                    <div className='flex justify-between items-center mt-1'>
                      <div className='flex items-center'>
                        {getRankIcon(friend.rank)}
                        <span className='text-[10px] ml-1 text-gray-400'>{friend.rank}</span>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='mt-8'>
              <h4 className='text-sm font-semibold mb-3 flex items-center'>
                <FaCrown className='mr-2 text-yellow-400' />
                Top Players
              </h4>
              <div className='space-y-3'>
                {[...friendsList]
                  .sort((a, b) => b.rating - a.rating)
                  .slice(0, 3)
                  .map((player, index) => (
                    <div key={player.id} className='flex items-center p-2 bg-[var(--dark)] rounded'>
                      <div className='w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center mr-2'>
                        <span className='text-xs font-bold text-black'>{index + 1}</span>
                      </div>
                      <span className='font-medium text-sm flex-1'>{player.name}</span>
                      <span className='text-xs bg-green-900 text-green-300 px-2 rounded-full'>{player.rating}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PlayScreen