import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/src/assets/img/Imagen-Cinco.webp",
  "/src/assets/img/Imagen-Cuatro.webp",
  "/src/assets/img/Imagen-Tres.webp",
];

export default function ImageSlider() {
  const settings = {
    dots: true, // Muestra los indicadores de posición
    infinite: true, // Permite que el carrusel sea infinito
    speed: 500, // Velocidad de transición en ms
    slidesToShow: 2, // Número de imágenes visibles
    slidesToScroll: 1, // Número de imágenes a avanzar
    autoplay: true, // Activar el cambio automático
    autoplaySpeed: 5000, // Cambio cada 5 segundos
    arrows: true, // Flechas de navegación
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-10">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="w-[200px] h-[250px] px-2">
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
}