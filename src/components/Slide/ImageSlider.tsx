import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: "/src/assets/img/Imagen-Uno.webp",
    title: "Edificio Coporativo",
    description: "Un edificio con diseño vanguardista y tecnología eficiente. ",
  },
  {
    image: "/src/assets/img/Imagen-Cuatro.webp",
    title: "Diseño de Interiores",
    description: "Diseño innovador para un centro comercial ecológico centro comercial ecológico.",
  },
  {
    image: "/src/assets/img/Imagen-Tres.webp",
    title: "Proyecto Residencial",
    description: "Este es un proyecto de vivienda moderna con diseño sostenible.",
  },
];

export default function ImageSlider() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const settings = {
    dots: false, // Oculta los indicadores de posición (puntos debajo del carrusel)
    infinite: true, // Permite que el carrusel haga un loop infinito
    speed: 300, // Velocidad de la transición entre slides (en milisegundos)
    slidesToShow: 2, // Número de slides visibles al mismo tiempo
    slidesToScroll: 1, // Número de slides que se desplazan por cada cambio
    autoplay: true, // Activa el desplazamiento automático de los slides
    autoplaySpeed: 5000, // Tiempo en milisegundos entre cada cambio automático de slide
    arrows: false, // Oculta las flechas de navegación del carrusel
  };  

  const toggleDescription = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mt-10">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full slick-slide lg:pr-6 lg:ml-0.5 ">
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
                {slide.title} <span className="ml-2 text-2xl">{openIndex === index ? "−" : "+"}</span>
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