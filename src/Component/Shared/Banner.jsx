import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/banner1.jpeg";
import img2 from "../../assets/banner2.jpeg";
import img3 from "../../assets/banner3.jpeg";


const Banner = () => {
  const slides = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
  ];

  return (
    <section className="relative ">
      <Carousel
        infiniteLoop
        autoPlay
        interval={3000}
        transitionTime={800}
        showStatus={false}
        showThumbs={false}
        swipeable
        emulateTouch
        showArrows={false}
        stopOnHover
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative rounded-md w-full h-[20vh] md:h-[30vh] flex items-center justify-center text-center"
          >
            {/* Background Image */}
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Banner;
