import React from "react";
import { FaTrophy, FaGamepad } from "react-icons/fa";
import Image from 'next/image'
import { HorizontalScrollContainer } from "../components/horizontal_scroll";
import Knight from '../../public/assets/khight.jpg'
import { RiFireFill } from "react-icons/ri";
import NFT from '../../public/assets/nft.png'
import TournamentCard from "../components/tournaments.tsx/tournament_card";
import banner from '../../public/assets/banner.png'

const TournamentsPage = () => {
  const pastTournaments = [
    { image: NFT, title: "Winter Chess Games Austria", subtitle: "compete for a chance to win the ultimate in the austrian open", date: "Sat 11 Jan", stake: "1,000.00 RUNE", Slots: '32' },
    // ... other tournament entries
  ];

  return (
    <div className="text-white md:mt-0 mt-5 md:pr-10 md:h-[80dvh] overflow-y-scroll no-scrollbar">
      {/* Header Section with Improved Background */}
      <div className="relative mb-8  md:h-[300px] overflow-hidden rounded-lg">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={banner}
            alt="Tournament banner"
            layout="fill"
            objectFit="cover"
            quality={100}
            placeholder="blur"
            className=""
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex h-full items-center md:px-5 md:py-5 space-x-4">
          <div className="w-[15%] min-w-[100px]">
            <Image 
              src={Knight} 
              alt="Knight" 
              className="rounded-lg"
              width={100}
              height={120}
              objectFit="cover"
            />
          </div>
          
          <div className="flex-1">
            <h1 className="text-[10px] rounded p-1 bg-white w-[max-content] text-[var(--primary)]">5000+ Players</h1>
            <h2 className="text-[13px] md:text-xl font-semibold">
              MAKE YOUR MOVE IN THE BIGGEST STAGES
            </h2>
            <p className="text-[10px] text-gray-300 md:text-sm md:mb-6 mb-3">
              Compete In Epic Tournaments On Rune And Win.
            </p>
            
            {/* Stats */}
            <div className="flex space-x-4">
              <div className="bg-[var(--dark)] md:p-3 px-2 flex space-x-2 items-center rounded-lg backdrop-blur-sm">
                <FaGamepad className="text-orange-400 text-lg" />
                <div>
                  <p className="text-[11px] md:text-sm font-bold">3200+</p>
                  <p className="text-[10px] text-gray-300 md:text-xs">Matches</p>
                </div>
              </div>
              
              <div className="bg-[var(--dark)] p-3 flex space-x-2 items-center rounded-lg backdrop-blur-sm">
                <RiFireFill className="text-orange-400 text-lg" />
                <div>
                  <p className=" text-[10px] md:text-sm font-bold">100+</p>
                  <p className="text-[10px] text-gray-300 md:text-xs">Tournaments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of your component remains the same */}
      <div className="mt-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-[11px] md:text-[13px] mb-1 flex items-center">
              <FaTrophy className="mr-2" /> FEATURED TOURNAMENTS
            </h3>
            <p className="text-gray-500 text-[10px] mb-2">
              Participate in contests and win wagers.
            </p>
          </div>
          <p className="text-[10px] text-gray-400">view all</p>
        </div>

        {/* Past Tournaments */}
        <div className="mb-12">
          <HorizontalScrollContainer>
            {pastTournaments.map((tournament, index) => (
              <TournamentCard slot={""} key={index} {...tournament} index={index} />
            ))}
          </HorizontalScrollContainer>
        </div>
      </div>

      {/* ... other sections ... */}
    </div>
  );
};

export default TournamentsPage;