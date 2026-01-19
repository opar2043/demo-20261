import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const GamesSection = () => {
  const featuredGamesData = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RLDPR60BqOAmeVxTYVx-sYfRnDUBaUQ0D8l-sj_PCEVZCJmWMZAq2_s&s",
    },
    { id: 2, image: "/images/game2.jpg" },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-Qnwa1GPdLQFYxHbMvzuB4qMWi76l1zCSEzUGHQlSs9Ufo45kL8ezw&s",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RLDPR60BqOAmeVxTYVx-sYfRnDUBaUQ0D8l-sj_PCEVZCJmWMZAq2_s&s",
    },
    { id: 5, image: "/images/game5.jpg" },
    {
      id: 6,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RLDPR60BqOAmeVxTYVx-sYfRnDUBaUQ0D8l-sj_PCEVZCJmWMZAq2_s&s",
    },
    { id: 7, image: "/images/game7.jpg" },
    {
      id: 8,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RLDPR60BqOAmeVxTYVx-sYfRnDUBaUQ0D8l-sj_PCEVZCJmWMZAq2_s&s",
    },
  ];
  return (
    <div className="w-full md:w-10/12 mx-auto px-4 md:px-8 py-6 bg-[#141515]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="w-1 h-6 bg-[#13805E] rounded-sm"></span>
          <h2 className="text-white font-bold text-lg">Featured Games</h2>
        </div>

        <div className="flex gap-2">
          <div className="featured-prev cursor-pointer px-2 py-1 border border-gray-600 text-white rounded">
            ‹
          </div>
          <div className="featured-next cursor-pointer px-2 py-1 border border-gray-600 text-white rounded">
            ›
          </div>
        </div>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={16}
        slidesPerView={2}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={{
          prevEl: ".featured-prev",
          nextEl: ".featured-next",
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 6, // Desktop = 6 cards
          },
        }}
      >
        {featuredGamesData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full overflow-hidden hover:scale-105 transition">
              <img
                src={item.image}
                alt="game"
                className="w-full h-[200px] object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GamesSection;
