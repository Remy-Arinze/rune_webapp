import GameButton from '@/app/components/custom_button'
import { HorizontalScrollContainer } from '@/app/components/horizontal_scroll'
import SearchInput from '@/app/components/search'
import React from 'react'
import TournamentCard from "../../components/tournaments.tsx/tournament_card";
import NFT from '../../../public/assets/nft.png'



export default function AllTournaments() {
  const RecommendedTournaments = [
		{image:NFT, title:"Winter Chess Games Austria", subtitle:"compete for a chance to win the ultimate in the austrian open", date: "Sat 11 Jan",stake: "1,000.00 RUNE", Slots:'32'},
		{image:NFT, title:"Winter Chess Games Austria", subtitle:"compete for a chance to win the ultimate in the austrian open", date: "Sat 11 Jan",stake:"10,0000 RUNE"  , Slots:'32'},
		{image:NFT, title:"Winter Chess Games Austria", subtitle:"compete for a chance to win the ultimate in the austrian open", date: "Sat 11 Jan",stake:"10,0000 RUNE"  , Slots:'32'},
	];
  return (
    <div >
        <div className='flex items-center justify-start'>
        <SearchInput /> 
        </div>

        <div className="mt-10">
          <p className='text-[14px]'>Recommended for you</p>
          <div className='flex items-center space-x-3 '>
          {RecommendedTournaments.map((tournament, index) => (
              <TournamentCard height='h-[100px]' image={tournament.image} title={tournament.title} subtitle={tournament.subtitle} stake={tournament.stake} slot={tournament.Slots} date={tournament.date} index={index} />
            ))}
          </div>
        </div>
    </div>
  )
}
