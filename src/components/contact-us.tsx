"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper as SwiperType } from "swiper";
import Card from "./card";

const ContactUs = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const cards = [
    {
      id: 1,
      image: "/images/jawa-adalah-kunci/ken.png",
      link: "wa.me/6282114198478?text=Halo%20kak%20Ken,%20aku%20mau%20pinjam%20kunci%20Basecamp",
      name: "Ken Bima Satria Gandasasmita",
    },
    {
      id: 2,
      image: "/images/jawa-adalah-kunci/satya.png",
      link: "wa.me/6281216760668?text=Halo%20Satya,%20aku%20mau%20pinjam%20kunci%20Basecamp",
      name: "Satya Wira Pramudita",
    },
    {
      id: 3,
      image: "/images/jawa-adalah-kunci/iffah.png",
      link: "wa.me/6282134623295?text=Halo%20kak%20Iffa,%20aku%20mau%20pinjam%20kunci%20Basecamp",
      name: "Iffa Hesti Adlik Putri",
    },
    {
      id: 4,
      image: "/images/jawa-adalah-kunci/kenji.png",
      link: "wa.me/6281371089032?text=Halo%20Kenji,%20aku%20mau%20pinjam%20kunci%20Basecamp",
      name: "Kenji Ratanaputra",
    },
    {
      id: 5,
      image: "/images/jawa-adalah-kunci/geraldine.png",
      link: "wa.me/6282132031290?text=Halo%20kak%20Geraldine,%20aku%20mau%20pinjam%20kunci%20Basecamp",
      name: "Geraldine",
    },
    {
      id: 6,
      image: "/images/jawa-adalah-kunci/andre.png",
      link: "wa.me/6285257490028?text=Halo%20kak%20Andre,%20aku%20mau%20pinjam%20kunci%20Basecamp",
      name: "Andre",
    },
  ];

  return (
    <div className="flex flex-col gap-20 items-center justify-center h-screen">
      <p className="text-white font-extrabold text-5xl text-center">Get access to Basecamp <span className="text-[#F0861A]">through us!</span></p>

      <div className="flex items-center justify-center">
        {/* Tombol Prev */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-black text-white p-3 rounded-lg"
        >
          <ChevronLeft />
        </button>

        {/* Swiper */}
        <div
          className="w-full 
      max-w-[300px]
      sm:max-w-[400px]
      md:max-w-[600px]
      lg:max-w-4xl"
        >
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={0}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                {/* <div className="bg-white rounded-lg p-6 shadow-lg h-full">
                <h2 className="font-semibold text-lg mb-2">{card.title}</h2>
                <p className="text-gray-600">{card.description}</p>
              </div> */}
                <div className="flex justify-center">
                  <Card card={[card.image, card.link, card.name]} />
                </div>
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
    </div>
  );
};

export default ContactUs;
