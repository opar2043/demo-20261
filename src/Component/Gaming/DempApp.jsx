import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Marquee from "react-fast-marquee";
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";
import img4 from "../../assets/img4.jpeg";
import img5 from "../../assets/img5.jpeg";
import img6 from "../../assets/img6.jpeg";
import { FiMic } from "react-icons/fi";
const DempApp = () => {
  const featuredGamesData = [
    {
      id: 1,
      image: img1,
    },
    { id: 2, image: img2 },
    {
      id: 3,
      image: img3,
    },
    {
      id: 4,
      image: img4,
    },
    { id: 5, image: img5 },
    {
      id: 6,
      image: img6,
    },
    { id: 7, image: img4 },
    {
      id: 8,
      image: img2,
    },
        {
      id: 9,
      image: img6,
    },
  ];
  return (
    <div className="w-full mx-auto px-4 md:px-8 py-6 bg-[#141515]">
      {/* Header */}
<Marquee
  speed={50}
  gradient={false}
  pauseOnHover={true}
  className="py-8"
>
  <span className="text-white font-semibold text-sm mb-6">
    Dear customers, please use the given link to access our website{" "}
    <a
      href="https://baji999.in"
      target="_blank"
      rel="noopener noreferrer" 
      className="underline text-blue-400"
    >
      https://baji999.in
    </a>{" "}
    and download our Apps using the link provided -{" "}
    <a
      href="https://bjbaji7.live/download/bj/bj.apk"
      target="_blank"
      rel="noopener noreferrer"
      className="underline text-blue-400"
    >
      https://bjbaji7.live/download/bj/bj.apk
    </a>
  </span>
</Marquee>


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

export default DempApp;
