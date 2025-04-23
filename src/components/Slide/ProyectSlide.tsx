import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface GallerySliderProps {
  images: string[];
}

const GallerySlider: React.FC<GallerySliderProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full max-w-3xl">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="focus:outline-none">
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full h-[500px] object-cover cursor-grab active:cursor-grabbing"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GallerySlider;
