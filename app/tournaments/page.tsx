import React from "react";
import { FaTrophy, FaGamepad, FaCalendarAlt, FaHistory } from "react-icons/fa";
import Image from 'next/image'
import { HorizontalScrollContainer } from "../components/horizontal_scroll";
import Knight from '../../public/assets/khight.jpg'
import { RiFireFill } from "react-icons/ri";
import banner from '../../public/assets/banner.png'
import { TournamentCardComponent } from "../components/TournamentCard";
import { generateTournaments } from "@/utils/tournaments";
import { HeaderComponent } from "../components/Header";

const TournamentsPage = () => {
  const allTournaments = generateTournaments(12);
  
  // Categorize tournaments
  const upcomingTournaments = allTournaments.filter(t => t.status === 'upcoming');
  const ongoingTournaments = allTournaments.filter(t => t.status === 'live');
  const pastTournaments = allTournaments.filter(t => t.status === 'completed');

  return (
    <div className="text-white md:mt-0 mt-5 md:pr-10 md:h-[80dvh] overflow-y-scroll no-scrollbar">
      {/* Header Section */}
      <div className="relative mb-5 overflow-hidden rounded-lg">
        <div className="absolute inset-0 z-0">
          <Image
            src={banner}
            alt="Tournament banner"
            layout="fill"
            objectFit="cover"
            quality={100}
            placeholder="blur"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
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
                  <p className="text-[10px] md:text-sm font-bold">100+</p>
                  <p className="text-[10px] text-gray-300 md:text-xs">Tournaments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Tournaments Section */}
      <div className="mb-5">
        <HeaderComponent
        title="Upcoming Tournaments"
        hasPath={true}
        actionText="View More"
        icon={<FaCalendarAlt className="mr-2 text-blue-400" />} />

        <HorizontalScrollContainer>
          {upcomingTournaments.map((tournament, index) => (
            <TournamentCardComponent
              key={`upcoming-${index}`}
              {...tournament}
            />
          ))}
        </HorizontalScrollContainer>
      </div>

      {/* Ongoing Tournaments Section */}
      <div className="mb-8">
        <HeaderComponent
        title="Live Tournaments"
        hasPath={true}
        actionText="View More"
        path="/tournaments/all"
        icon={<RiFireFill className="mr-2 text-orange-400" />}
         />

        <HorizontalScrollContainer>
          {ongoingTournaments.map((tournament, index) => (
            <TournamentCardComponent
              key={`ongoing-${index}`}
              {...tournament}
            />
          ))}
        </HorizontalScrollContainer>
      </div>

      {/* Past Tournaments Section */}
      <div className="mb-12">
        <HeaderComponent
        title="Past Tournaments"
        hasPath={true}
        path="/tournaments/all"
        actionText="View More"
        icon={<FaHistory className="mr-2 text-purple-400" />}
        />

        <HorizontalScrollContainer>
          {pastTournaments.map((tournament, index) => (
            <TournamentCardComponent
              key={`past-${index}`}
              {...tournament}
            />
          ))}
        </HorizontalScrollContainer>
      </div>

      {/* Featured Players Section */}
      <div className="mb-8">
        <h3 className="text-[11px] md:text-[13px] mb-3 flex items-center">
          <FaTrophy className="mr-2 text-yellow-400" /> TOP PLAYERS
        </h3>
        
        <HorizontalScrollContainer>
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <div key={`player-${index}`} className="flex-shrink-0 w-24 bg-[var(--dark)] rounded-lg p-3 mr-4 text-center">
              <div className="w-12 h-12 rounded-full bg-gray-700 mx-auto mb-2 flex items-center justify-center">
                <FaGamepad className="text-xl" />
              </div>
              <p className="text-xs font-medium truncate">Player{index + 1}</p>
              <p className="text-[10px] text-yellow-400">{1000 + index * 200} RUNE</p>
            </div>
          ))}
        </HorizontalScrollContainer>
      </div>
    </div>
  );
};

export default TournamentsPage;