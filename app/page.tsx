"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import Carousel from "./components/landing_page/landing_page_swiper";
import { HeaderComponent } from "./components/Header";
import { HorizontalScrollContainer } from "./components/horizontal_scroll";
import { TournamentCardComponent } from "./components/TournamentCard";
import { generateTournaments } from "@/utils/tournaments";
import { Timer, Flame, Zap, Calendar, ShoppingCart, TrendingUp, Trophy } from "lucide-react";
import nft from '../public/assets/nft.png';
import Image from "next/image";
import RecentWinners from "./components/landing_page/winners";
import MatchCard from "./components/landing_page/match_card";

const LandingPage = () => {
  const tournaments = generateTournaments(6);
  const storeItems = generateTournaments(4);
  const upcomingEvents = generateTournaments(10);
    
  return (
    <div className="md:h-[80dvh] overflow-y-scroll no-scrollbar bg-[var(--background)] md:pr-10 md:mt-0 mt-5">
      <Carousel />

      <div className="md:mt-10">
        <div className="flex item-start justify-between">
          <div className="w-full md:w-[35rem] lg:w-[70%] space-y-12">
            {/* Featured Tournaments */}
            <section>
              <HeaderComponent 
                title={"Featured Tournaments"} 
                path="/tournaments/all" 
                icon={<Flame className="text-orange-400" size={18} />}
              />
              <HorizontalScrollContainer className="mt-1 no-scrollbar">
                {tournaments.map((tournament, index) => (
                  <TournamentCardComponent
                    key={`tournament-${index}`}
                    {...tournament}
                  />
                ))}
              </HorizontalScrollContainer>
            </section>

            {/* Live Matches */}
            <section>
              <HeaderComponent 
                title={"Top Matches"} 
                path="/matches" 
                icon={<Zap className="text-yellow-400" size={18} />}
              />
              <HorizontalScrollContainer className="mt-1 no-scrollbar">
                {tournaments.map((_, index) => (
                  <MatchCard key={`match-${index}`} />
                ))}
              </HorizontalScrollContainer>
            </section>

            {/* Store Highlights */}
            <section>
              <HeaderComponent 
                title={"Now in store"} 
                path="/store" 
                icon={<ShoppingCart className="text-blue-400" size={18} />}
              />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {storeItems.map((item, index) => (
                  <div key={`store-${index}`} className="bg-[var(--dark)] rounded-lg p-3 border border-[var(--dark-border)] hover:border-orange-400/30 transition-all">
                    <div className="relative aspect-square">
                      <Image
                        src={nft}
                        alt={item.title}
                        fill
                        className="object-cover rounded-md"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-2">
                        <p className="text-xs font-bold truncate">{item.title}</p>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-[10px] text-orange-400">50% OFF</span>
                          <span className="text-[10px] font-bold">150 RUNE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Upcoming Events */}
            <section>
              <HeaderComponent 
                title={"Upcoming Events"} 
                path="/events" 
                icon={<Calendar className="text-purple-400" size={18} />}
              />
              <HorizontalScrollContainer className="mt-4">
                {upcomingEvents.map((event, index) => (
                  <div key={`event-${index}`} className="bg-[var(--dark)] flex-shrink-0 rounded-lg overflow-hidden border border-[var(--dark-border)]">
                    <div className="relative h-32">
                      <Image
                        src={nft}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 p-3">
                        <p className="text-sm font-bold">{event.title}</p>
                        <div className="flex items-center mt-1">
                          <Timer className="text-gray-400 mr-1" size={12} />
                          <span className="text-[10px] text-gray-400">Starts in 2 days</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] text-gray-400">Prize Pool</span>
                        <span className="text-xs font-bold text-green-400">5000 RUNE</span>
                      </div>
                      <div className="mt-2 w-full bg-gray-700 rounded-full h-1.5">
                        <div className="bg-orange-400 h-1.5 rounded-full" style={{ width: `${Math.random() * 100}%` }}></div>
                      </div>
                      <p className="text-[10px] text-gray-400 mt-1">32/100 participants</p>
                    </div>
                  </div>
                ))}
              </HorizontalScrollContainer>
            </section>

            {/* Promotional Banner */}
            <section>
              <div className="bg-gradient-to-r from-orange-500 to-purple-600 rounded-xl p-6 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold">Premium Membership</h3>
                  <p className="text-sm mt-2 max-w-md">
                    Unlock exclusive tournaments, higher rewards, and special badges with our premium membership.
                  </p>
                  <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-white hover:text-black transition-colors">
                    Upgrade Now
                  </button>
                </div>
                <div className="absolute right-0 top-0 h-full opacity-20">
                  <Trophy className="h-full w-auto text-white" size={100} />
                </div>
              </div>
            </section>

            {/* Top Players */}
            <section>
              <HeaderComponent 
                title={"Top Players This Week"} 
                path="/leaderboard" 
                icon={<TrendingUp className="text-green-400" size={18} />}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {[1, 2, 3, 4].map((player, index) => (
                  <div key={`player-${index}`} className="bg-[var(--dark)] rounded-lg p-3 flex items-center">
                    <div className="relative">
                      <Image
                        src={nft}
                        alt={`Player ${index + 1}`}
                        width={40}
                        height={40}
                        className="rounded-full border-2 border-orange-400"
                      />
                      {index < 3 && (
                        <div className="absolute -top-1 -right-1 bg-yellow-400 rounded-full w-5 h-5 flex items-center justify-center">
                          <span className="text-[10px] font-bold text-black">{index + 1}</span>
                        </div>
                      )}
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-bold">Player_{index + 1}</p>
                      <div className="flex justify-between mt-1">
                        <span className="text-[10px] text-gray-400">Wins: {12 - index}</span>
                        <span className="text-[10px] text-green-400">+{1500 - (index * 200)} RUNE</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Winners Sidebar (unchanged) */}
          <RecentWinners />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;