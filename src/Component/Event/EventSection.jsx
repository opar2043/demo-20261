import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
 import img1 from "../../assets/banner4.jpeg";
 import img2 from "../../assets/banner3.jpeg";
 import img3 from "../../assets/banner5.jpeg";
 import img6 from "../../assets/banner6.jpeg";
 import img7 from "../../assets/banner7.jpeg";
const eventData = [
  { id: 1, image: img6 },
  { id: 2, image: img3 },
  { id: 3, image: img2 },
  { id: 4, image: img1 },
  { id: 5, image: img7 },
];


const EventSection = () => {
  return (
    <div className="w-full mx-auto px-4 md:px-8 py-6 bg-[#141515]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="w-1 h-6 bg-[#13805E] rounded-sm"></span>
          <h2 className="text-white font-bold text-lg">Event</h2>
        </div>

        {/* Arrows come from Swiper */}
        <div className="flex gap-2">
          <div className="event-prev cursor-pointer px-2 py-1 border border-gray-600 text-white rounded">
            ‹
          </div>
          <div className="event-next cursor-pointer px-2 py-1 border border-gray-600 text-white rounded">
            ›
          </div>
        </div>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          prevEl: ".event-prev",
          nextEl: ".event-next",
        }}
        breakpoints={{
          768: {
            slidesPerView: 3, // Desktop = 3 cards
          },
        }}
      >
        {eventData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-[160px]  overflow-hidden">
              <img
                src={item.image}
                alt="event"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventSection;
