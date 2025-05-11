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

import nft from '../public/assets/nft.png'
import Image from "next/image";

const LandingPage = () => {
    const tournaments = generateTournaments(6); // Generate 6 tournaments
    const guilds = [
        {title:'H',color:'red'},
        {title:'i',color:'yellow'},
        {title:'B',color:'blue'},
        {title:'W',color:'orange'},
        {title:'Z',color:'purple'},
        {title:'G',color:'green'},
        {title:'D',color:'gray'},
        {title:'P',color:'gold'},
        {title:'X',color:'pink'},
        {title:'Q',color:'red'},
        {title:'I',color:'red'},
        {title:'T',color:'red'},
        {title:'V',color:'red'},
    ]

    return (
        <div className="bg-[var(--background)] pr-10">
            <Carousel />

            {/* Main Content Grid */}
            <div className="mt-10">
                <HorizontalScrollContainer className="">
                    {guilds.map((guild,index) => (
                        <div 
                            key={index+1} 
                            style={{ backgroundColor: "var(--dark)" }}
                            className='w-[50px] h-[50px] rounded-md flex items-center justify-center'
                        >
                            <p className="font-bold">{guild.title}</p>
                        </div>
                    ))}
                </HorizontalScrollContainer>
                
                <div className="flex item-start justify-between mt-10">
                    <div className="w-[75%]">
                        <HeaderComponent title={"Top Tournaments"} path="/all-tournaments" />
                        <HorizontalScrollContainer className="mt-1 no-scrollbar">
                            {tournaments.map((tournament, index) => (
                                <TournamentCardComponent
                                    key={`tournament-${index}`}
                                    {...tournament}
                                    className="flex-shrink-0"
                                />
                            ))}
                        </HorizontalScrollContainer>

						<div className="mt-20">
						<HeaderComponent title={"Top Matches"} path="/matches" />
                        <HorizontalScrollContainer className="mt-1 no-scrollbar">
                            {tournaments.map(() => (
                               <div key={`$tournamen $index`} className="flex-shrink-0 w-[200px] bg-[var(--dark)] rounded-md p-2">
								<div className="flex item-center"><Timer color="orange" size="15"/> <p className="text-[10px] ml-1">20mins ago</p></div>

								<div className="flex item-center justify-center space-x-3 mt-10">
									<div className="w-[50%] ">
<Image src={nft} alt="nft" className="w-full" />	
									<p className="text-[10px]">0x_Ra</p>
									</div>
									<p className="text-[10px]">vs</p>
									<div className="w-[50%]">
                                    <Image src={nft} alt="nft" className="w-full" />										<p className="text-[10px]">0x_Ra</p>
									<p className="text-[10px]">dann</p>									</div>
								</div>

								<div className="mt-10 bg-[var(--background)] flex item-center justify-between rounded-lg p-2">
									<p className="text-[10px]">odd:3.4</p>
									<p className="text-[10px]">x:0.5</p>
									<p className="text-[10px]">odd:2.2</p>
								</div>
							   </div>
                            ))}
                        </HorizontalScrollContainer>
						</div>
                    </div>
                    <div className="bg-[var(--dark)] rounded-lg w-[20%] h-[130px]"></div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;