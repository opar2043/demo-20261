import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";
import img4 from "../../assets/img4.jpeg";
import img5 from "../../assets/img5.jpeg";
import img6 from "../../assets/img6.jpeg";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const Provider = () => {
  const featuredGamesData = [
    { id: 1, name: "Exclusive", image: img1 },
    { id: 2, name: "Sports", image: img2 },
    { id: 3, name: "Casino", image: img3 },
    { id: 4, name: "Slots", image: img4 },
    { id: 5, name: "Crash", image: img5 },
    { id: 6, name: "Table", image: img6 },
    { id: 7, name: "Fishing", image: img2 },
    { id: 8, name: "Arcade", image: img3 },
    { id: 9, name: "Lottery", image: img4 },
  ];

  const eventsData = [
    {
      id: 1,
      event_name: "Super Smash T20",
      team1: "Wellington Firebirds",
      team2: "Canterbury Kings",
      back1: "-",
      lay1: "1.01",
      back2: "1000",
      lay2: "-",
    },
    {
      id: 2,
      event_name: "ICC U19 World Cup",
      team1: "Australia U19",
      team2: "Sri Lanka U19",
      back1: "-",
      lay1: "1.01",
      back2: "100",
      lay2: "200",
    },
    {
      id: 3,
      event_name: "ICC U19 World Cup",
      team1: "Bangladesh U19",
      team2: "USA U19",
      back1: "1.13",
      lay1: "1.14",
      back2: "8",
      lay2: "8.8",
    },
  ];

  return (
    <div className="w-full mx-auto px-4 md:px-8 py-6 bg-[#141515]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="w-1 h-6 bg-[#13805E] rounded-sm"></span>
          <h2 className="text-white font-bold text-lg">Provider</h2>
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

      {/* Provider Slider */}
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
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
        }}
      >
        {featuredGamesData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex items-center gap-3 bg-[#222424] rounded p-4 hover:scale-105 transition justify-around">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-white font-medium text-sm">
                {item.name}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Events Swiper */}
      <div className="mt-8">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            1024: { slidesPerView: 3 },
          }}
        >
          {eventsData.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="bg-[#1A1B1B] rounded py-2">
                <div className="text-white px-5 py-1 rounded-t  bg-[#13805E] font-semibold mb-2 flex justify-between items-center">
                  {event.event_name}  <FaArrowRightArrowLeft></FaArrowRightArrowLeft>
                </div>

                {/* Row 1 */}
                <div className="grid grid-cols-4 gap-2 items-center mb-2 px-2">
                  <div className="col-span-2 text-white text-xs">
                    {event.team1}
                  </div>
                  <div className="bg-[#7CC3F6] text-xs text-black text-center rounded py-1 font-semibold">
                    {event.back1}
                  </div>
                  <div className="bg-[#FAAABA] text-xs text-black text-center rounded py-1 font-semibold">
                    {event.lay1}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-4 gap-2 items-center px-2 ">
                  <div className="col-span-2 text-white text-xs">
                    {event.team2}
                  </div>
                  <div className="bg-[#7CC3F6] text-xs text-black text-center rounded py-1 font-semibold">
                    {event.back2}
                  </div>
                  <div className="bg-[#FAAABA] text-xs text-black text-center rounded py-1 font-semibold">
                    {event.lay2}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Provider;
