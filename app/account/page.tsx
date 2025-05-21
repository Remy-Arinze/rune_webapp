import React from 'react'
import { CustomTabs } from '../components/tab_component'
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { Bitcoin, ChevronRight, Coins, Dice5, Gem, Trophy, Wallet } from 'lucide-react';
import { TokenComponent } from '../components/account/token_component';
import { FaEthereum, FaFlag, } from 'react-icons/fa';
import {  GiSwordWound } from 'react-icons/gi';
import { RiSwordFill } from 'react-icons/ri';
import Image from 'next/image'
import ChessBoard from '../../public/assets/chess_board_copy.png'
import { BsArrowDownLeft, BsArrowUpRight } from 'react-icons/bs';

export default function Account() {
  // Game history data
  const gameHistory = [
    {
      id: 1,
      date: 'Jan 12, 2023',
      opponent: '0xKasparov',
      result: 'win',
      moves: 42,
      timeControl: '10+0',
      wager: '50 RUNE',
      nftEarned: true
    },
    {
      id: 2,
      date: 'Jan 11, 2023',
      opponent: '0xCarlsen',
      result: 'loss',
      moves: 28,
      timeControl: '5+3',
      wager: '25 RUNE',
      nftEarned: false
    },
    {
      id: 3,
      date: 'Jan 10, 2023',
      opponent: '0xNakamura',
      result: 'forfeit',
      moves: 12,
      timeControl: '3+2',
      wager: '10 RUNE',
      nftEarned: false
    },
    {
      id: 4,
      date: 'Jan 9, 2023',
      opponent: '0xFirouzja',
      result: 'win',
      moves: 56,
      timeControl: '15+10',
      wager: '100 RUNE',
      nftEarned: true
    },
    {
      id: 5,
      date: 'Jan 8, 2023',
      opponent: '0xDing',
      result: 'draw',
      moves: 38,
      timeControl: '10+0',
      wager: '75 RUNE',
      nftEarned: false
    },
  ];

  // NFT Collections data
  const nftCollections = [
    {
      id: 1,
      name: 'Circle Of Kings',
      description: 'Allows you own an assign admins to tournaments',
      image: ChessBoard,
      price: '250 RUNE',
      usdValue: '$425.00',
      rarity: 'Epic'
    },
    {
      id: 2,
      name: 'Silver Queen',
      description: 'Tournament participation reward',
      image: ChessBoard,
      price: '150 RUNE',
      usdValue: '$255.00',
      rarity: 'Rare'
    },
    {
      id: 3,
      name: 'Bronze Knight',
      description: 'First blood achievement',
      image: ChessBoard,
      price: '75 RUNE',
      usdValue: '$127.50',
      rarity: 'Uncommon'
    },
    {
      id: 4,
      name: 'Emerald Pawn',
      description: '100 games played milestone',
      image: ChessBoard,
      price: '50 RUNE',
      usdValue: '$85.00',
      rarity: 'Common'
    },
  ];

  // Transaction history data
  const transactionHistory = [
    {
      id: 1,
      type: 'deposit',
      amount: '1000 RUNE',
      usdValue: '$1700.00',
      date: 'Jan 15, 2023',
      status: 'completed'
    },
    {
      id: 2,
      type: 'withdrawal',
      amount: '500 RUNE',
      usdValue: '$850.00',
      date: 'Jan 14, 2023',
      status: 'completed'
    },
    {
      id: 3,
      type: 'wager_win',
      amount: '75 RUNE',
      usdValue: '$127.50',
      date: 'Jan 13, 2023',
      status: 'completed'
    },
    {
      id: 4,
      type: 'wager_loss',
      amount: '50 RUNE',
      usdValue: '$85.00',
      date: 'Jan 12, 2023',
      status: 'completed'
    },
    {
      id: 5,
      type: 'nft_purchase',
      amount: '150 RUNE',
      usdValue: '$255.00',
      date: 'Jan 11, 2023',
      status: 'completed'
    },
    {
      id: 6,
      type: 'nft_sale',
      amount: '200 RUNE',
      usdValue: '$340.00',
      date: 'Jan 10, 2023',
      status: 'completed'
    },
  ];

  const GameHistoryItem = ({ game }: { game: typeof gameHistory[0] }) => (
    <div className="flex items-center px-4 py-2 bg-[var(--dark)] rounded-xl mb-3 hover:bg-gray-800/50 transition-all shadow-lg">
      <div className="relative mr-4">
        <Image 
          src={ChessBoard} 
          alt="Chess game" 
          width={80} 
          height={80} 
          className="rounded-lg"
        />
        {game.nftEarned && (
          <div className="absolute -top-2 -right-2 bg-[var(--primary)] text-[var(--dark)] w-6 h-6 rounded-full flex items-center justify-center">
            <Gem size={12} />
          </div>
        )}
      </div>
      
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-xs flex items-center">
            {game.opponent}
            <span className="ml-2 text-xs px-2 py-1 rounded-full bg-gray-700">
              {game.timeControl}
            </span>
          </h3>
          <div className={`text-xs px-2 py-1 rounded-full ${
            game.result === 'win' ? 'bg-green-500/20 text-green-400' : 
            game.result === 'loss' ? 'bg-red-500/20 text-red-400' : 
            'bg-yellow-500/20 text-yellow-400'
          }`}>
            {game.result === 'win' ? (
              <span className="flex items-center"><Trophy size={12} className="mr-1" /> Won</span>
            ) : game.result === 'loss' ? (
              <span className="flex items-center"><GiSwordWound className="mr-1" /> Lost</span>
            ) : (
              <span className="flex items-center"><FaFlag size={10} className="mr-1" /> Forfeit</span>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
          <div className="flex items-center space-x-3 text-xs">
            <span className="flex items-center">
              <Dice5 size={12} className="mr-1" />
              {game.moves} moves
            </span>
            <span className="flex items-center">
              <Coins size={12} className="mr-1" />
              {game.wager}
            </span>
          </div>
          <span className='text-xs'>{game.date}</span>
        </div>
      </div>
    </div>
  );

  const NftItem = ({ nft }: { nft: typeof nftCollections[0] }) => (
    <div className="flex items-center p-4 bg-[var(--dark)] rounded-xl mb-3 hover:bg-gray-800/50 transition-all shadow-lg">
      <div className="relative mr-4">
        <Image 
          src={nft.image} 
          alt={nft.name} 
          width={80} 
          height={80} 
          className="rounded-lg"
        />
    
      </div>
      
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-sm">{nft.name}</h3>
          <span className="text-xs px-2 py-1 rounded-full bg-gray-700">
            {nft.rarity}
          </span>
        </div>
        
        
        <div className="flex items-center justify-between text-[12px] mt-2">
          <div>
            <p className="font-medium text-gray-300 ">{nft.price}</p>
            <p className="text-gray-400">{nft.usdValue}</p>
          </div>
      
        </div>
      </div>
    </div>
  );

  const TransactionItem = ({ tx }: { tx: typeof transactionHistory[0] }) => {
    const isCredit = ['deposit', 'wager_win', 'nft_sale'].includes(tx.type);
    
    return (
      <div className="flex items-center p-4 bg-[var(--dark)] rounded-xl mb-3 hover:bg-gray-800/50 transition-all">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
          isCredit ? 'bg-green-500/20' : 'bg-red-500/20'
        }`}>
          {tx.type === 'deposit' ? (
            <Wallet size={18} className={isCredit ? 'text-green-400' : 'text-red-400'} />
          ) : tx.type === 'withdrawal' ? (
            <Wallet size={18} className={isCredit ? 'text-green-400' : 'text-red-400'} />
          ) : tx.type.includes('wager') ? (
            <RiSwordFill size={18} className={isCredit ? 'text-green-400' : 'text-red-400'} />
          ) : (
            <Gem size={18} className={isCredit ? 'text-green-400' : 'text-red-400'} />
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-medium capitalize text-sm">
              {tx.type.replace('_', ' ')}
            </h3>
            <span className={`font-bold text-sm ${isCredit ? 'text-green-400' : 'text-red-400'}`}>
              {isCredit ? '+' : '-'}{tx.amount}
            </span>
          </div>
          
          <div className="flex items-center justify-between text-xs text-gray-400 mt-1">
            <span>{tx.date}</span>
            <span>{tx.usdValue}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='md:flex space-x-5 md:pr-10 md:mt-0 mt-5'>
      <div className='md:w-[35%] md:h-[80dvh] h-[60dvh] overflow-y-scroll no-scrollbar'>
        <div>
          <CustomTabs hasBackgroundColor={false} tabs={[
            { value: 'token', label: 'Tokens' },
            { value: 'collections', label: 'Collections' },
            { value: 'history', label: 'History' },
          ]}>
            <div className='w-full rounded-lg bg-[var(--dark)] py-4 px-2'>
              <p className='text-[12px]'>WELCOME BACK RA!</p>
              <p className='mt-5 text-gray-400 text-[10px]'>Account Balance</p>
              <p className='text-2xl'>$20,454.00</p>
              <p className='text-[10px] text-gray-400'>20,454.00 <span>RUNE</span></p>
              
              <div className="mt-3 flex items-center justify-between">
                <button className='flex items-center justify-center w-[50px] h-[50px] rounded-lg bg-[var(--background)] hover:bg-[var(--primary)] transition-colors'>
                  <BsArrowUpRight />
                </button>
                <button className='flex items-center justify-center w-[50px] h-[50px] rounded-lg bg-[var(--background)] hover:bg-[var(--primary)] transition-colors'>
                  <BsArrowDownLeft />
                </button>
                <button className='flex items-center justify-center w-[50px] h-[50px] rounded-lg bg-[var(--background)] hover:bg-[var(--primary)] transition-colors'>
                  <HiArrowPathRoundedSquare />
                </button>
              </div>

              <div className='mt-5'>
                <p className='text-gray-500 text-[10px] flex item-center justify-between'>
                  Tokens <span className='hover:cursor-pointer hover:text-[var(--primary)]'>more</span>
                </p>
                <TokenComponent symbol='Rune' priceChange='0.000' icon={<p className='font-bold'>R</p>} name={'Rune'} amount={'0.000'} amountInUsd={'1000,000'} />
                <TokenComponent symbol='BTC' priceChange='0.000' icon={<Bitcoin />} name={'Bitcoin'} amount={'0.000'} amountInUsd={'1000,000'} />
                <TokenComponent symbol='ETH' priceChange='0.000' icon={<FaEthereum />} name={'Ethereum'} amount={'0.000'} amountInUsd={'1000,000'} />
              </div>
            </div>
            
            <div className="space-y-3">
              {nftCollections.map(nft => (
                <NftItem key={nft.id} nft={nft} />
              ))}
            </div>
            
            <div className="space-y-3">
              {transactionHistory.map(tx => (
                <TransactionItem key={tx.id} tx={tx} />
              ))}
            </div>
          </CustomTabs>
        </div>
      </div>
      
      <div className='md:mt-0 mt-10 md:w-[70%] p-4 rounded-lg md:h-[80dvh] h-[70dvh] bg-[var(--dark)] overflow-y-scroll no-scrollbar'>
        <div className="flex items-center justify-between mb-5">
          <p className='text-[12px] text-gray-400'>Game History</p>
          <button className="text-[11px] text-[var(--primary)] px-3 py-1 rounded-lg flex items-center">
            View All <ChevronRight size={14} className="ml-1" />
          </button>
        </div>
        
        <div className="space-y-3">
          {gameHistory.map(game => (
            <GameHistoryItem key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  )
}