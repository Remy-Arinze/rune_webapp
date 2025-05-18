import SearchInput from '@/app/components/search'
import React from 'react'
import TournamentCard from "../../components/tournaments.tsx/tournament_card";
import NFT from '../../../public/assets/nft.png'
import { HorizontalScrollContainer } from '@/app/components/horizontal_scroll';



export default function AllTournaments() {
  const RecommendedTournaments = [
		{image:NFT, title:"Winter Chess Games Austria", subtitle:"compete for a chance to win the ultimate in the austrian open", date: "Sat 11 Jan",stake: "1,000.00 RUNE", Slots:'32'},
		{image:NFT, title:"Winter Chess Games Austria", subtitle:"compete for a chance to win the ultimate in the austrian open", date: "Sat 11 Jan",stake:"10,0000 RUNE"  , Slots:'32'},
		{image:NFT, title:"Winter Chess Games Austria", subtitle:"compete for a chance to win the ultimate in the austrian open", date: "Sat 11 Jan",stake:"10,0000 RUNE"  , Slots:'32'},
	];
  return (
    <div className='md:pr-10 md:mt-0 mt-5'>
        <div className='flex items-center justify-start'>
        <SearchInput /> 
        </div>

        <div className="mt-10">
          <p className='md:text-[14px] text-[11px]'>Recommended for you</p>
          <HorizontalScrollContainer >
          {RecommendedTournaments.map((tournament, index) => (
              <TournamentCard key={index} height='md:h-[100px]' image={tournament.image} title={tournament.title} subtitle={tournament.subtitle} stake={tournament.stake} slot={tournament.Slots} date={tournament.date} index={index} />
            ))}
          </HorizontalScrollContainer>
        </div>
    </div>
  )
}
