import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ImageSlider from "../components/Slide/ImageSlider";
import Info from "../components/Props/SectInformation";

const slidesOne = [
    {
      image: "/src/assets/img/Interiores.webp",
      title: "Interiores",
      description: "Transformamos espacios interiores en ambientes armoniosos y funcionales, cuidando cada detalle para reflejar tu personalidad y mejorar tu calidad de vida.",
    },
    {
      image: "/src/assets/img/Comercial.webp",
      title: "Comerciales",
      description: "Diseñamos espacios comerciales únicos, funcionales y personalizados, que potencian la identidad de tu marca y mejoran la experiencia de tus clientes, combinando estrategia, estética y eficiencia.",
    },
    {
      image: "/src/assets/img/Vivienda.webp",
      title: "Viviendas",
      description: "Creamos espacios residenciales únicos, funcionales y personalizados, que se adaptan al estilo de vida y necesidades de cada cliente, combinando estética, confort y sostenibilidad.",
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
              "En esta sección, comparto algunos de los proyectos más representativos y transformadores que he tenido el privilegio de desarrollar a lo largo de mi carrera en arquitectura. Cada uno de estos proyectos es una representación de mi compromiso por crear soluciones innovadoras y funcionales, siempre considerando las necesidades específicas de los clientes y los entornos en los que se insertan. Mi enfoque busca equilibrar la estética con la sostenibilidad, asegurando que cada espacio no solo sea visualmente atractivo, sino también eficiente, accesible y en armonía con su contexto.",

              "A lo largo de mi trayectoria, he trabajado en una variedad de proyectos, desde viviendas unifamiliares y diseños comerciales. Cada desafío me ha permitido explorar nuevas técnicas, materiales y enfoques de diseño, siempre con el objetivo de mejorar la calidad de vida de las personas que habitarán o interactuarán con esos espacios."
              ]}
          />

          <ImageSlider slides={slidesOne} />
        </div>

      </section>

    </MainLayout>
  );
};

export default Proyects;