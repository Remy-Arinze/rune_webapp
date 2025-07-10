import React from 'react';
import SearchInput from '../components/search';
import { IoFilter } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import Image from 'next/image';
import Rune from '../../public/assets/logo.png';
import NFT from '../../public/assets/nft.png';

type ChessNewsItem = {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  date: string;
  time: string;
  category: string;
  isFeatured?: boolean;
};

const chessNewsData: ChessNewsItem[] = [
  {
    id: "R-2044",
    title: "Magnus Carlsen Wins 2023 World Chess Championship",
    subtitle: "Norwegian grandmaster defends his title in thrilling match against Ian Nepomniachtchi that went down to the wire in rapid tiebreaks after the classical portion ended in a draw. The match featured unprecedented psychological warfare and innovative opening preparation from both players.",
    imageUrl: "https://source.unsplash.com/random/1200x600/?chess,magnus-carlsen",
    date: "Nov 20, 2023",
    time: "6:30 PM",
    category: "Tournaments",
    isFeatured: true
  },
  {
    id: "R-2044",
    title: "Magnus Carlsen Wins 2023 World Chess Championship",
    subtitle: "Norwegian grandmaster defends his title in thrilling match against Ian Nepomniachtchi",
    imageUrl: "https://source.unsplash.com/random/300x200/?chess,magnus-carlsen",
    date: "Nov 20, 2023",
    time: "6:30 PM",
    category: "Tournaments"
  },
  {
    id: "R-044",
    title: "New Chess Variant Gains Popularity: 'Chess 960' Takes Over",
    subtitle: "Fischer Random chess sees record participation in online platforms",
    imageUrl: "https://source.unsplash.com/random/300x200/?chess,random",
    date: "Nov 18, 2023",
    time: "2:15 PM",
    category: "Variants"
  },
  {
    id: "R-2084",
    title: "Youngest Grandmaster Record Broken Again",
    subtitle: "12-year-old prodigy from India earns GM title, breaking Abhimanyu Mishra's record",
    imageUrl: "https://source.unsplash.com/random/300x200/?chess,child",
    date: "Nov 17, 2023",
    time: "10:00 AM",
    category: "Records"
  },
  {
    id: 'R-20444',
    title: "AI vs Human: New Milestone Reached",
    subtitle: "Latest chess engine defeats world champion in 25 moves under classical time control",
    imageUrl: "https://source.unsplash.com/random/300x200/?chess,computer",
    date: "Nov 15, 2023",
    time: "4:45 PM",
    category: "Technology"
  },
  {
    id:"R-2124",
    title: "Chess Included in 2028 Olympic Games",
    subtitle: "International Olympic Committee announces chess as demonstration sport",
    imageUrl: "https://source.unsplash.com/random/300x200/?chess,olympics",
    date: "Nov 14, 2023",
    time: "9:30 AM",
    category: "Events"
  },
  {
    id: "R-30464",
    title: "Historic Chess Set Sells for $2.5 Million",
    subtitle: "18th century ivory set once owned by Napoleon fetches record price at auction",
    imageUrl: "https://source.unsplash.com/random/300x200/?chess,antique",
    date: "Nov 12, 2023",
    time: "3:20 PM",
    category: "Collectibles"
  },
  {
    id: "R-69789",
    title: "Chess Streaming Hits New Viewership Records",
    subtitle: "Twitch chess category surpasses 1 million concurrent viewers during championship",
    imageUrl: "https://source.unsplash.com/random/300x200/?chess,streaming",
    date: "Nov 10, 2023",
    time: "8:15 PM",
    category: "Media"
  },
  {
    id: "R-324i5",
    title: "New Study Links Chess to Improved Cognitive Function",
    subtitle: "Research shows 30% reduction in dementia risk among regular players",
    imageUrl: "https://source.unsplash.com/random/300x200/?chess,brain",
    date: "Nov 8, 2023",
    time: "11:45 AM",
    category: "Health"
  },
  {
    id: "R:2089",
    title: "Women's Chess Championship Ends in Dramatic Tiebreak",
    subtitle: "Ju Wenjun and Hou Yifan battle for 6 hours before decisive result",
    imageUrl: "https://source.unsplash.com/random/300x200/?chess,women",
    date: "Nov 7, 2023",
    time: "7:30 PM",
    category: "Tournaments"
  },
  {
    id: "R-42322",
    title: "Chess in Schools Program Expands to 50 Countries",
    subtitle: "UNESCO-backed initiative now reaching 2 million students worldwide",
    imageUrl: "https://source.unsplash.com/random/300x200/?chess,school",
    date: "Nov 5, 2023",
    time: "1:00 PM",
    category: "Education"
  },
  {
    id: "R:06996",
    title: "Blitz Chess Championship Ends in Controversy",
    subtitle: "Time scramble leads to disputed result, organizers to review footage",
    imageUrl: "https://source.unsplash.com/random/300x200/?chess,blitz",
    date: "Nov 3, 2023",
    time: "5:45 PM",
    category: "Controversy"
  },
  {
    id: "R:08986",
    title: "New Chess Museum Opens in Saint Louis",
    subtitle: "World Chess Hall of Fame expands with interactive exhibits",
    imageUrl: "https://source.unsplash.com/random/300x200/?chess,museum",
    date: "Nov 1, 2023",
    time: "10:30 AM",
    category: "Culture"
  },
  {
    id: "R:0958",
    title: "Chess Puzzle App Downloads Surpass 100 Million",
    subtitle: "Lichess and Chess.com report record growth in mobile users",
    imageUrl: "https://source.unsplash.com/random/300x200/?chess,app",
    date: "Oct 30, 2023",
    time: "4:15 PM",
    category: "Technology"
  },
  {
    id: "R-085858",
    title: "Veteran Grandmaster Announces Retirement",
    subtitle: "Viswanathan Anand to focus on commentary and coaching after 40-year career",
    imageUrl: "https://source.unsplash.com/random/300x200/?chess,anand",
    date: "Oct 28, 2023",
    time: "12:00 PM",
    category: "Players"
  },
  {
    id: "R:34355",
    title: "Chess Boxing World Championship Set for December",
    subtitle: "Hybrid sport combines 11 rounds of chess and boxing in alternating rounds",
    imageUrl: "https://source.unsplash.com/random/300x200/?chess,boxing",
    date: "Oct 26, 2023",
    time: "6:00 PM",
    category: "Events"
  }
  // ... (rest of your news items without isFeatured: true)
];

export default function ChessNewsPage() {
  const featuredNews = chessNewsData.find(item => item.isFeatured);
  const regularNews = chessNewsData.filter(item => !item.isFeatured);

  return (
    <div className="mx-auto mt-5 md:mt-0 md:pr-10 md:h-[80dvh] overflow-y-scroll no-scrollbar">
      {/* Header with search and filters */}
      <div className='flex items-center justify-end space-x-2'>
        <SearchInput />
        <button className="p-2 rounded-full hover:bg-gray-700">
          <IoFilter className="text-gray-600 text-md" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-700">
          <VscSettings className="text-gray-600 text-md" />
        </button>
      </div>

      {/* Featured News (Wide Headline) */}
      {featuredNews && (
        <div className="bg-[var(--dark)] rounded-[20px] shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 mt-6 mb-5">
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-2/3 p-6'>
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center space-x-3'>
                  <p className='font-semibold'>{featuredNews.id}</p>
                  <span className="inline-block px-2 py-1 text-[8px] text-white bg-orange-400 rounded-md">
                    {featuredNews.category}
                  </span>
                </div>
                <Image src={Rune} alt='' className='w-[50px]' />
              </div>
              
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                {featuredNews.title}
              </h2>
              <p className="text-gray-400 mb-6 line-clamp-3">
                {featuredNews.subtitle}
              </p>
              
              <div className='mb-5 flex space-x-2'>
                <div className='rounded-full h-[30px] w-[30px] bg-orange-400'></div>
                <div>
                  <p className='text-[10px] text-gray-500'>Reported by</p>
                  <p className='text-[12px]'>Jerome Powell</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center text-[10px] text-gray-500">
                <span>{featuredNews.date}</span>
                <span>{featuredNews.time}</span>
              </div>
            </div>
            
            <div className='md:w-1/3'>
              <Image
                src={featuredNews.imageUrl}
                alt={featuredNews.title}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* Masonry News Grid */}
      <div className='columns-1 md:columns-2 lg:columns-3 gap-6 mt-5'>
        {regularNews.map((newsItem) => (
          <div 
            key={newsItem.id} 
            className="break-inside-avoid mb-6 px-4 py-4 bg-[var(--dark)] rounded-[20px] shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className='flex items-center justify-between mb-5'>
              <div className='flex items-center space-x-3'>
                <p className='font-semibold'>{newsItem.id}</p>
                <span className="inline-block px-2 py-1 text-[8px] text-white bg-orange-400 rounded-md mb-2">
                  {newsItem.category}
                </span>
              </div>
              <Image src={Rune} alt='' className='w-[50px]' />
            </div>
            <hr className='text-gray-700 mb-5'/>
            
            <h2 className="text-[13px] mt-2 mb-1 line-clamp-2">
              {newsItem.title}
            </h2>
            <p className="text-[11px] mb-4 text-gray-400">
              {newsItem.subtitle}
            </p>
            
            <Image
              src={NFT} 
              alt={newsItem.title}
              className="w-full h-20 object-cover mb-5"
            />

            <div className='mb-5 flex space-x-2'>
              <div className='rounded-full h-[30px] w-[30px] bg-orange-400'></div>
              <div>
                <p className='text-[10px] text-gray-500'>Reported by</p>
                <p className='text-[12px]'>Jerome Powell</p>
              </div>
            </div>
            
            <hr className='text-gray-700 mb-5'/>
            <div className="flex justify-between items-center text-[10px] text-gray-500">
              <span>{newsItem.date}</span>
              <span>{newsItem.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}