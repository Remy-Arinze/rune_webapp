import SearchInput from '@/app/components/search'
import React from 'react'
import TournamentCard from "../../components/tournaments/tournament_card";
import NFT from '../../../public/assets/nft.png'
import { HorizontalScrollContainer } from '@/app/components/horizontal_scroll';
import { generateTournaments } from '@/utils/tournaments';
import { TournamentCardComponent } from '@/app/components/TournamentCard';
import { HeaderComponent } from '@/app/components/Header';



export default function AllTournaments() {
  const RecommendedTournaments = [
		{image:NFT, title:"Winter Chess Games Austria", subtitle:"compete for a chance to win the ultimate in the austrian open", date: "Sat 11 Jan",stake: "1,000.00 RUNE", Slots:'32'},
		{image:NFT, title:"Winter Chess Games Austria", subtitle:"compete for a chance to win the ultimate in the austrian open", date: "Sat 11 Jan",stake:"10,0000 RUNE"  , Slots:'32'},
		{image:NFT, title:"Winter Chess Games Austria", subtitle:"compete for a chance to win the ultimate in the austrian open", date: "Sat 11 Jan",stake:"10,0000 RUNE"  , Slots:'32'},
	];

  const tournaments = generateTournaments(50)

  //  const tournaments = [
  //   {
  //     id: "1",
  //     name: "Grand Rune Masters",
  //     description: "Monthly premier tournament for top ranked players",
  //     players: 32,
  //     maxPlayers: 32,
  //     prize: "10,000 RUNE",
  //     entryFee: "500 RUNE",
  //     status: "ongoing",
  //     startDate: "May 20, 2025",
  //     endDate: "May 27, 2025",
  //     organizer: "Rune Foundation",
  //     participants: ["CryptoKnight", "BlockChainMaster", "RuneArcher", "TokenWarrior"],
  //     image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  //     gradient: "from-green-500/40 to-blue-700/40"
  //   },
  //   {
  //     id: "2",
  //     name: "Weekly Arena Challenge",
  //     description: "Weekly tournament open to all players",
  //     players: 10,
  //     maxPlayers: 16,
  //     prize: "5,000 RUNE",
  //     entryFee: "200 RUNE",
  //     status: "upcoming",
  //     startDate: "May 25, 2025",
  //     endDate: "May 26, 2025",
  //     organizer: "Rune Community",
  //     participants: ["NFTHunter", "DeFiWizard", "TokenSage", "CryptoWarrior"],
  //     image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
  //     gradient: "from-purple-500/40 to-pink-600/40"
  //   },
  //   {
  //     id: "3",
  //     name: "Beginner's Battle Royale",
  //     description: "Tournament for new players to learn and compete",
  //     players: 14,
  //     maxPlayers: 24,
  //     prize: "2,000 RUNE",
  //     entryFee: "50 RUNE",
  //     status: "upcoming",
  //     startDate: "May 30, 2025",
  //     endDate: "June 2, 2025",
  //     organizer: "Rune Academy",
  //     participants: ["CryptoNewbie", "BlockLearner", "RuneStudent", "TokenBeginner"],
  //     image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  //     gradient: "from-cyan-500/40 to-blue-700/40"
  //   },
  //   {
  //     id: "4",
  //     name: "Champion's Cup",
  //     description: "Invitation only tournament for past champions",
  //     players: 5,
  //     maxPlayers: 8,
  //     prize: "20,000 RUNE",
  //     entryFee: "1,000 RUNE",
  //     status: "registration",
  //     startDate: "June 5, 2025",
  //     endDate: "June 12, 2025",
  //     organizer: "Rune Elite Club",
  //     participants: ["CryptoChamp", "BlockMaster", "RuneKing", "TokenLegend"],
  //     image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4",
  //     gradient: "from-amber-500/40 to-red-600/40"
  //   },
  //   {
  //     id: "5",
  //     name: "Crypto Showdown",
  //     description: "Tournament sponsored by major crypto projects",
  //     players: 42,
  //     maxPlayers: 64,
  //     prize: "30,000 RUNE + NFT",
  //     entryFee: "300 RUNE",
  //     status: "registration",
  //     startDate: "June 15, 2025",
  //     endDate: "June 30, 2025", 
  //     organizer: "Crypto Consortium",
  //     participants: ["BTC_Master", "ETH_Champion", "SOL_Warrior", "AVAX_Knight"],
  //     image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
  //     gradient: "from-blue-500/40 to-violet-700/40"
  //   }
  // ];
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
        <div className="mt-20">
         <HeaderComponent title='Tournaments' />
          <div className='flex flex-wrap mt-2 item-center justify-between space-y-5' >
          {tournaments.map((tournament, index) => (
  <TournamentCardComponent
                  key={`tournament-${index}`}
                  {...tournament}
                />               ))}
          </div>
        </div>
    </div>
  )
}
