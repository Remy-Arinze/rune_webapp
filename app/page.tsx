"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import Carousel from "./components/landing_page/landing_page_swiper";
import { HeaderComponent } from "./components/Header";
import { HorizontalScrollContainer } from "./components/horizontal_scroll";
import { TournamentCardComponent } from "./components/TournamentCard";
import { generateTournaments } from "@/utils/tournaments";
import { Timer } from "lucide-react";
import nft from '../public/assets/nft.png';
import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  const tournaments = generateTournaments(6);
    
  return (
    <div className="md:h-[80dvh] overflow-y-scroll no-scrollbar bg-[var(--background)] md:pr-10 md:mt-0 mt-5">
      <Carousel />

      <div className="md:mt-10">
        <div className="flex item-start justify-between">
          <div className="w-full md:w-[75%]">
            <HeaderComponent title={"Featured Tournaments"} path="/tournaments/all" />
            <HorizontalScrollContainer className="mt-1 no-scrollbar">
              {tournaments.map((tournament, index) => (
                <TournamentCardComponent
                  key={`tournament-${index}`}
                  {...tournament}
                />
              ))}
            </HorizontalScrollContainer>

            <div className="md:mt-20 mt-10">
              <HeaderComponent title={"Top Matches"} path="/matches" />
              <HorizontalScrollContainer className="mt-1 no-scrollbar">
                {tournaments.map((_, index) => (
                  <Link key={index} href={'/stream'} prefetch>
                    <div className="hover:cursor-pointer flex-shrink-0 w-[200px] bg-[var(--dark)] rounded-md p-2">
                      <div className="flex item-center">
                        <Timer color="orange" size="15"/>
                        <p className="text-[10px] ml-1">20mins ago</p>
                      </div>
                      <div className="flex item-center justify-center space-x-3 mt-10">
                        <div className="w-[50%] ">
                          <Image src={nft} alt="nft" className="w-full" />	
                          <p className="text-[10px]">0x_Ra</p>
                        </div>
                        <p className="text-[10px]">vs</p>
                        <div className="w-[50%]">
                          <Image src={nft} alt="nft" className="w-full" />
                          <p className="text-[10px]">0x_Ra</p>
                          <p className="text-[10px]">dann</p>
                        </div>
                      </div>
                      <div className="mt-10 bg-[var(--background)] flex item-center justify-between rounded-lg p-2">
                        <p className="text-[10px]">odd:3.4</p>
                        <p className="text-[10px]">x:0.5</p>
                        <p className="text-[10px]">odd:2.2</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </HorizontalScrollContainer>
            </div>
          </div>
          <div className="hidden md:flex bg-[var(--dark)] rounded-lg w-[20%] h-[130px]"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;