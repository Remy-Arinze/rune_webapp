import React from 'react';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Carousel from './components/landing_page/landing_page_swiper';
import { CustomTabs } from './components/landing_page/tabs';
import TournamentCard from './components/landing_page/tournament_card';

export default function Home() {
  return (
    <div className='ml-10 w-[70vw] overflow-y-auto no-scrollbar scroll-mask'>
          <Carousel />
          
          <div className='flex mt-10'>
            {/* Main Scrollable Content */}
            <div className='flex-1'>
              <CustomTabs />
            </div>
            
            {/* Fixed Suggested Tournaments */}
            <div className='sticky top-[80px] h-fit ml-20'>
              <div className='bg-[#121212] w-[200px] p-4 rounded-lg'>
                <p className='font-bold text-[12px]'>Suggested Tournaments</p>
                <div className='mt-5'>
                  <TournamentCard/>
                  <TournamentCard/>
                  <TournamentCard/>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}