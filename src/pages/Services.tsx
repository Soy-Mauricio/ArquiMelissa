import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ImageSlider from "../components/Slide/ImageSlider";
import Info from "../components/Props/SectInformation";
import ServicesInfo from "../components/Props/ServicesInfo";

const slidesOne = [
    {
      image: "/src/assets/img/Imagen-Uno.webp",
      title: "Viviendas",
      description: "Un edificio con diseño vanguardista y tecnología eficiente.",
    },
    {
      image: "/src/assets/img/Imagen-Cuatro.webp",
      title: "Edificios",
      description: "Diseño innovador para un centro comercial ecológico.",
    },
    {
      image: "/src/assets/img/Imagen-Tres.webp",
      title: "Comercialess",
      description: "Este es un proyecto de vivienda moderna con diseño sostenible.",
    },
];

const slidesTwo = [
    {
      image: "/src/assets/img/Imagen-Uno.webp",
      title: "Modelo 3D Y Renders",
      description: "Un edificio con diseño vanguardista y tecnología eficiente.",
    },
    {
      image: "/src/assets/img/Imagen-Cuatro.webp",
      title: "Planos y Maquetas Digitales",
      description: "Diseño innovador para un centro comercial ecológico.",
    },
    {
      image: "/src/assets/img/Imagen-Tres.webp",
      title: "Animaciones Arquitectónicas",
      description: "Este es un proyecto de vivienda moderna con diseño sostenible.",
    },
];

const slidesThree = [
    {
      image: "/src/assets/img/Imagen-Uno.webp",
      title: "Diseño Ecológico",
      description: "Un edificio con diseño vanguardista y tecnología eficiente.",
    },
    {
      image: "/src/assets/img/Imagen-Cuatro.webp",
      title: "Certificaciones",
      description: "Diseño innovador para un centro comercial ecológico.",
    },
    {
      image: "/src/assets/img/Imagen-Tres.webp",
      title: "Estrategias",
      description: "Este es un proyecto de vivienda moderna con diseño sostenible.",
    },
];

const slidesFour = [
    {
      image: "/src/assets/img/Imagen-Uno.webp",
      title: "Implementación en BIM",
      description: "Un edificio con diseño vanguardista y tecnología eficiente.",
    },
    {
      image: "/src/assets/img/Imagen-Cuatro.webp",
      title: "Consultoria",
      description: "Diseño innovador para un centro comercial ecológico.",
    },
    {
      image: "/src/assets/img/Imagen-Tres.webp",
      title: "Simulación de Edificaciones",
      description: "Este es un proyecto de vivienda moderna con diseño sostenible.",
    },
];

const Services: React.FC = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);


  return (
    <MainLayout>
        
      <section className="mx-auto lg:px-10 md:px-8 px-6">

        <div id="todos">
            <Info
                title="SERVICIOS"
                content={[
                "Asumo la creación de espacios social, económica y ambientalmente equilibrados como un objetivo esencial en mi trabajo como arquitecta. Considero que la arquitectura no debe limitarse únicamente a la expresión artística o a la eficiencia técnica, sino que debe ser el punto de encuentro entre ambos enfoques. Tradicionalmente, la disciplina se ha visto dominada por dos extremos: uno altamente expresivo y vanguardista, pero muchas veces costoso e irrealista, y otro estrictamente funcional y racional, que aunque práctico, puede carecer de ambición e inspiración.",
                ]}
            />
        </div>

        <div id="arquitectonico">
            <ServicesInfo
                title="DISEÑO ARQUITECTÓNICO"
                content={[]}
            />
            <ImageSlider slides={slidesOne} />
        </div>

        <div id="visualizacion">
            <ServicesInfo
                title="VISUALIZACIÓN Y REPRESENTACIÓN ARQUITECTÓNICA"
                content={[]}
            />
            <ImageSlider slides={slidesTwo} />
        </div>

        <div id="sostenibilidad">
            <ServicesInfo
                title="ARQUITECTURA SOSTENIBLE"
                content={[]}
            />
            <ImageSlider slides={slidesThree} />
        </div>

        <div id="bim">
            <ServicesInfo
                title="ARQUITECTURA DIGITAL Y BIM"
                content={[]}
            />
            <ImageSlider slides={slidesFour} />
        </div>

      </section>

    </MainLayout>
  );
};

export default Services;