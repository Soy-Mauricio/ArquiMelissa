import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Slide {
  image: string;
  title: string;
  description: string;
}

interface ImageSliderProps {
  slides: Slide[];
}

export default function ImageSlider({ slides }: ImageSliderProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // Para pantallas menores a 768px (tablets y celulares)
        settings: {
          slidesToShow: 1, // Solo se muestra 1 imagen en celulares
        },
      },
    ],
  };

  const toggleDescription = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mt-10">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full slick-slide md:pr-6 md:ml-0.5">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[250px] object-cover cursor-pointer"
              draggable="false"
            />
            <div className="text-center mt-3 flex flex-col justify-start">
              <button
                className="cursor-pointer text-lg font-semibold text-gray-800 flex justify-start items-center w-full"
                onClick={() => toggleDescription(index)}
              >
                {slide.title} <span className="h-full ml-2 text-2xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 mt-2 text-start h-auto">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}