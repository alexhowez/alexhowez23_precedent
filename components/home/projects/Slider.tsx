"use client";
import React from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

type Props = any

// const c = "  block w-full h-full object-cover"

export default function Modal({ images }: Props) {
  return (
    <div className="p-4 w-full h-full">
      <Swiper navigation={true} modules={[Navigation]} className="p-4 w-full h-full">
        <SwiperSlide className="text-center flex items-center justify-center">
          <Image
            src="/hero_bg2.jpg"
            alt="Hero background"
            height={250}
            width={250}
            className="mx-auto h-[250px] w-[250px] overflow-clip block object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="text-center flex items-center justify-center">Slide 2</SwiperSlide>
        <SwiperSlide className="text-center flex items-center justify-center">Slide 3</SwiperSlide>
      </Swiper>
    </div>
  )
}