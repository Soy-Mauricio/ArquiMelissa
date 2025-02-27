import React from "react";
import MainLayout from "../layouts/MainLayout";

const Home: React.FC = () => {
  const images = [
    { id: 1, src: "/src/assets/img/Imagen-Seis.webp", alt: "Image 1" },
    { id: 2, src: "/src/assets/img/Imagen-Dos.webp", alt: "Image 2" },
    { id: 3, src: "/src/assets/img/Imagen-Cuatro.webp", alt: "Image 3" },
    { id: 4, src: "/src/assets/img/Imagen-Cinco.webp", alt: "Image 4" },
    { id: 5, src: "/src/assets/img/Imagen-Ocho.webp", alt: "Image 6" },
    { id: 6, src: "/src/assets/img/Imagen-Uno.webp", alt: "Image 7" },
  ];

  return (
    <MainLayout>
      <div className="mx-auto p-4 lg:mt-10 mt-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-1">
          {images.map((image) => (
            <div key={image.id} className="mb-1 break-inside-avoid">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full shadow-lg transition-transform duration-700 ease-in-out transform scale-100 hover:scale-110 cursor-pointer"
              />
            </div>
          ))}
        </div>
        <div className="mt-10">
          <h2 className="text-lg italic">Arquitecta</h2>
          <h3 className="opacity-65">Melissa Castro</h3>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;