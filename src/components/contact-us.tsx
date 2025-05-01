'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper as SwiperType } from 'swiper';
import Card from './card';

const ContactUs = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const cards = [
    { id: 1, image: '/images/hero-background.jpg', link: 'https://www.linkedin.com/in/dhimas-sulistio/', name: 'Dhimas Sulistio' },
    { id: 2, image: '/images/hero-background.jpg', link: 'https://www.linkedin.com/in/dhimas-sulistio/', name: 'Dhimas Sulistio' },
    { id: 3, image: '/images/hero-background.jpg', link: 'https://www.linkedin.com/in/dhimas-sulistio/', name: 'Dhimas Sulistio' },
    { id: 4, image: '/images/hero-background.jpg', link: 'https://www.linkedin.com/in/dhimas-sulistio/', name: 'Dhimas Sulistio' },
  ];

  return (
    <div className="flex items-center justify-center h-screen">
      {/* Tombol Prev */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="bg-black text-white p-3 rounded-lg"
      >
        <ChevronLeft />
      </button>

      {/* Swiper */}
      <div className="w-full 
      max-w-[300px]
      sm:max-w-[400px]
      md:max-w-[600px]
      lg:max-w-4xl">
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={0}
          slidesPerView={1.3}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              {/* <div className="bg-white rounded-lg p-6 shadow-lg h-full">
                <h2 className="font-semibold text-lg mb-2">{card.title}</h2>
                <p className="text-gray-600">{card.description}</p>
              </div> */}
              <Card card={[card.image, card.link, card.name]} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Tombol Next */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="bg-black text-white p-3 rounded-lg"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default ContactUs;
