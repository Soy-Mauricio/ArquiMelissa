import React from "react";
import MainLayout from "../layouts/MainLayout";
import ImageSlider from "../components/Slide/ImageSlider";
import Info from "../components/Props/SectInformation";

const slidesOne = [
    {
      image: "/src/assets/img/Imagen-Uno.webp",
      title: "Edificio Corporativo",
      description: "Un edificio con diseño vanguardista y tecnología eficiente.",
    },
    {
      image: "/src/assets/img/Imagen-Cuatro.webp",
      title: "Diseño de Interiores",
      description: "Diseño innovador para un centro comercial ecológico.",
    },
    {
      image: "/src/assets/img/Imagen-Tres.webp",
      title: "Proyecto Residencial",
      description: "Este es un proyecto de vivienda moderna con diseño sostenible.",
    },
  ];
  
  const slidesTwo = [
    {
      image: "/src/assets/img/Imagen-Tres.webp",
      title: "Arquitectura y Sostenibilidad",
      description: "Espacios de coworking modernos y funcionales.",
    },
    {
      image: "/src/assets/img/Imagen-Cuatro.webp",
      title: "Inovación y Tecnología",
      description: "Un hotel de lujo con arquitectura sostenible.",
    },
    {
    image: "/src/assets/img/Imagen-Cuatro.webp",
    title: "Renovación y Restauración",
    description: "Un hotel de lujo con arquitectura sostenible.",
    },
  ];

const Information: React.FC = () => {
  return (
    <MainLayout>
        
        <section className="lg:px-10 md:px-6 px-4">
            <div className="mt-10">
                <Info
                    title="TRAYECTORIA"
                    content={[
                    "Trabajando por la creación de espacios que no solo sean funcionales, sino también visualmente inspiradores. Con una formación sólida en diseño y planificación, mi enfoque está en generar soluciones arquitectónicas que conecten estética y eficiencia, siempre buscando mejorar la calidad de vida de quienes habitan los espacios que creo.",
                    "A lo largo de mi carrera, he tenido la oportunidad de trabajar en una variedad de proyectos que abarcan desde residenciales hasta comerciales, cada uno con su propio desafío y su propia historia. Mi objetivo es siempre fusionar las necesidades del cliente con la innovación y el respeto por el entorno, creando diseños que sean tanto sostenibles como atemporales.",
                    "Cada proyecto es una nueva oportunidad para explorar, aprender y desafiar los límites del diseño. Me considero una arquitecta comprometida con la evolución constante, buscando siempre la perfección en cada detalle, sin perder de vista el bienestar de las personas que interactuarán con esos espacios."
                    ]}
                />

                <div className="flex justify-start mt-20 lg:w-[800px] md:w-full">
                    <img src="/src/assets/img/Arquitecta.webp" alt="Aruitecta-Melissa" className="object-cover w-full"/>
                </div>
            </div>

            <div className="mt-20">
                <Info
                    title="ARQUITECTURA"
                    content={[
                    "Asumo la creación de espacios social, económica y ambientalmente equilibrados como un objetivo esencial en mi trabajo como arquitecta. Considero que la arquitectura no debe limitarse únicamente a la expresión artística o a la eficiencia técnica, sino que debe ser el punto de encuentro entre ambos enfoques. Tradicionalmente, la disciplina se ha visto dominada por dos extremos: uno altamente expresivo y vanguardista, pero muchas veces costoso e irrealista, y otro estrictamente funcional y racional, que aunque práctico, puede carecer de ambición e inspiración.",
                    "Cada proyecto es una oportunidad para innovar y encontrar soluciones que no solo respondan a las necesidades del presente, sino que también sean sostenibles a largo plazo. Me motiva diseñar espacios que inspiren, que reflejen identidad y que mejoren la calidad de vida de las personas. Para mí, la arquitectura no es solo una disciplina técnica, sino una herramienta de transformación que puede dar forma a ciudades más humanas, eficientes y armónicas con su contexto.",
                    ]}
                />

                <ImageSlider slides={slidesOne} />
            </div>

            <div className="mt-20">
                <Info
                    title="VISIÓN"
                    content={[
                    "Para mí, la arquitectura es mucho más que diseñar estructuras; es la oportunidad de crear espacios que inspiren, funcionen y mejoren la vida de las personas. Mi visión es desarrollar proyectos donde la estética, la funcionalidad y la sostenibilidad se unan para dar forma a entornos que no solo sean visualmente atractivos, sino también eficientes y perdurables en el tiempo.",
                    "Cada detalle en mis diseños tiene un propósito. Desde la distribución del espacio hasta la elección de materiales, mi enfoque es crear soluciones personalizadas que se adaptan a las necesidades y el estilo de vida de cada cliente. Me apasiona transformar ideas en realidades, ofreciendo espacios que reflejan personalidad, confort y armonía con su entorno. Creo en una arquitectura que cuente historias, que genera emociones y que marca una diferencia. Mi compromiso es diseñar con creatividad y responsabilidad, siempre buscando innovar y aportar valor en cada uno.",
                    ]}
                />

            <ImageSlider slides={slidesTwo} />
            </div>
        </section>

    </MainLayout>
  );
};

export default Information;