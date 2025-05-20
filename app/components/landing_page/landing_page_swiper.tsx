'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Removed Navigation
import 'swiper/css';
import 'swiper/css/pagination'; // Removed navigation CSS import
import Image from 'next/image';
import slideone from '../../../public/assets/banner.png';

export default function Carousel() {
  return (
    <div className="w-full mx-auto mb-6">
      <Swiper
        modules={[Pagination, Autoplay]} // Only using Pagination and Autoplay now
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
        speed={1000}
        className="md:h-[250px] rounded-xl"
      >
        {[1, 2, 3, 4].map((item) => (
          <SwiperSlide key={item} className="bg-gray-800 flex items-center justify-center">
            <Image 
              src={slideone} 
              alt={`Slide ${item}`} 
              className="w-full object-cover"
              priority={item === 1} // Only prioritize first image
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}