import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ImageSlider from "../components/Slide/ImageSlider";
import Info from "../components/Props/SectInformation";

const slidesOne = [
    {
      image: "/src/assets/img/Imagen-Uno.webp",
      title: "Interiores",
      description: "Un edificio con diseño vanguardista y tecnología eficiente.",
    },
    {
      image: "/src/assets/img/Imagen-Cuatro.webp",
      title: "Residenciales",
      description: "Diseño innovador para un centro comercial ecológico.",
    },
    {
      image: "/src/assets/img/Imagen-Tres.webp",
      title: "Culturales",
      description: "Este es un proyecto de vivienda moderna con diseño sostenible.",
    },
  ];
  

const Proyects: React.FC = () => {

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
              title="PROYECTOS"
              content={[
              "Asumo la creación de espacios social, económica y ambientalmente equilibrados como un objetivo esencial en mi trabajo como arquitecta. Considero que la arquitectura no debe limitarse únicamente a la expresión artística o a la eficiencia técnica, sino que debe ser el punto de encuentro entre ambos enfoques. Tradicionalmente, la disciplina se ha visto dominada por dos extremos: uno altamente expresivo y vanguardista, pero muchas veces costoso e irrealista, y otro estrictamente funcional y racional, que aunque práctico, puede carecer de ambición e inspiración.",
              "Cada proyecto es una oportunidad para innovar y encontrar soluciones que no solo respondan a las necesidades del presente, sino que también sean sostenibles a largo plazo. Me motiva diseñar espacios que inspiren, que reflejen identidad y que mejoren la calidad de vida de las personas. Para mí, la arquitectura no es solo una disciplina técnica, sino una herramienta de transformación que puede dar forma a ciudades más humanas, eficientes y armónicas con su contexto.",
              ]}
          />

          <ImageSlider slides={slidesOne} />
        </div>

      </section>

    </MainLayout>
  );
};

export default Proyects;