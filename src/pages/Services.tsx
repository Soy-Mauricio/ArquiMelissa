import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ImageSlider from "../components/Slide/ImageSlider";
import Info from "../components/Props/SectInformation";
import ServicesInfo from "../components/Props/ServicesInfo";
import ActionButton from "../components/Buttons/ActionButton"

const slidesOne = [
    {
      image: "/src/assets/img/Vivienda.webp",
      title: "Viviendas",
      description: "Creamos espacios residenciales únicos, funcionales y personalizados, que se adaptan al estilo de vida y necesidades de cada cliente, combinando estética, confort y sostenibilidad.",
    },
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
];

const slidesTwo = [
    {
      image: "/src/assets/img/3D.webp",
      title: "Renders",
      description: "Realizamos renders arquitectónicos realistas y personalizados, que permiten visualizar cada detalle del proyecto antes de su construcción, combinando precisión técnica, estética y una presentación impactante.",
    },
    {
      image: "/src/assets/img/Planos.webp",
      title: "Planos y Maquetas Digitales",
      description: "Elaboramos planos y maquetas digitales precisas y personalizadas que representan fielmente cada detalle del proyecto, facilitando su comprensión, planificación y ejecución con claridad y eficiencia.",
    },
    {
      image: "/src/assets/img/MaquetaDigital.webp",
      title: "Modelo 3D",
      description: "Desarrollamos modelos 3D que dan vida a tus ideas antes de construirlas, ofreciendo una representación clara y realista de cada espacio, con atención al detalle y una visualización completa del proyecto.",
    },
];

const slidesThree = [
    {
      image: "/src/assets/img/Ecologico.webp",
      title: "Diseño Ecológico",
      description: "Desarrollamos proyectos arquitectónicos sostenibles, funcionales y personalizados, que respetan el entorno y optimizan los recursos naturales, integrando eficiencia energética, confort y armonía con el medio ambiente.",
    },
    {
      image: "/src/assets/img/Sostenible.webp",
      title: "Viviendas Sostenibles",
      description: "Diseñamos viviendas que promueven el respeto por el medio ambiente, utilizando materiales ecológicos y soluciones energéticas eficientes, para crear espacios cómodos y responsables con el entorno.",
    },
    {
      image: "/src/assets/img/Estrategia.webp",
      title: "Estrategias",
      description: "Tenemos estrategias personalizadas que optimizan el diseño y la funcionalidad de cada proyecto, garantizando que se cumplan tus objetivos a largo plazo, siempre con una visión innovadora y práctica.",
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
                "En cada proyecto, se busca transformar espacios en experiencias que respondan a las necesidades de quienes los habitan. Ofrecemos un enfoque integral en diseño arquitectónico, combinando funcionalidad, estética y sostenibilidad.",
                
                "Desde el diseño de viviendas y espacios comerciales, hasta consultoría en arquitectura sostenible y restauración patrimonial, cada servicio está pensado para entregar soluciones personalizadas, innovadoras y responsables con el entorno.",
                
                "Con atención al detalle, acompañamiento cercano y compromiso con la calidad, garantizamos resultados que reflejan la identidad y visión de cada cliente.",
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

        <div id="consultoria">
            <Info
                title="CONSULTORIA"
                content={[
                "Acompaño a mis clientes en cada etapa del proceso arquitectónico, brindando asesoría personalizada para que cada decisión esté bien fundamentada desde el inicio. Mi objetivo es ayudarte a transformar tus ideas en proyectos viables, funcionales y sostenibles.",
                
                "Analizo cada caso desde una perspectiva técnica, estética y normativa, asegurando que cada propuesta se adapte a tus necesidades y al entorno. Ya sea que estés comenzando un nuevo proyecto, necesites optimizar un espacio existente o busques orientación en procesos legales y constructivos, estaré allí para guiarte con profesionalismo y compromiso.",
                
                ]}
            />

            <ActionButton />

        </div>

      </section>

    </MainLayout>
  );
};

export default Services;