import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  const slides = [
    {
      img: "https://img.b112j.com/upload/announcement/image_241701.jpg",
    },
    {
      img: "https://img.b112j.com/upload/announcement/image_283383.jpg",
    },
    {
      img: "https://img.b112j.com/upload/announcement/image_241701.jpg",
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
            className="relative rounded-md w-full h-[20vh] md:h-[40vh] flex items-center justify-center text-center"
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
