import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Info from "../components/Props/SectInformation";
import InfoTrayectory from "../components/Props/ArqVision";

const Information: React.FC = () => {

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
        <div id="trayectoria">
          <Info
              title="TRAYECTORIA"
              content={[
              "Trabajando por la creación de espacios que no solo sean funcionales, sino también visualmente inspiradores. Con una formación sólida en diseño y planificación, mi enfoque está en generar soluciones arquitectónicas que conecten estética y eficiencia, siempre buscando mejorar la calidad de vida de quienes habitan los espacios que creo.",
              "A lo largo de mi carrera, he tenido la oportunidad de trabajar en una variedad de proyectos que abarcan desde residenciales hasta comerciales, cada uno con su propio desafío y su propia historia. Mi objetivo es siempre fusionar las necesidades del cliente con la innovación y el respeto por el entorno, creando diseños que sean tanto sostenibles como atemporales.",
              "Cada proyecto es una nueva oportunidad para explorar, aprender y desafiar los límites del diseño. Me considero una arquitecta comprometida con la evolución constante, buscando siempre la perfección en cada detalle, sin perder de vista el bienestar de las personas que interactuarán con esos espacios."
              ]}
          />

          <div className="flex justify-start mt-20 w-full">
              <img src="/src/assets/img/Arquitecta.webp" alt="Aruitecta-Melissa" className="object-cover w-full"/>
          </div>
        </div>

        <div id="arquitectura">
          <Info
              title="ARQUITECTURA"
              content={[
              "Asumo la creación de espacios social, económica y ambientalmente equilibrados como un objetivo esencial en mi trabajo como arquitecta. Considero que la arquitectura no debe limitarse únicamente a la expresión artística o a la eficiencia técnica, sino que debe ser el punto de encuentro entre ambos enfoques. Tradicionalmente, la disciplina se ha visto dominada por dos extremos: uno altamente expresivo y vanguardista, pero muchas veces costoso e irrealista, y otro estrictamente funcional y racional, que aunque práctico, puede carecer de ambición e inspiración.",
              "Cada proyecto es una oportunidad para innovar y encontrar soluciones que no solo respondan a las necesidades del presente, sino que también sean sostenibles a largo plazo. Me motiva diseñar espacios que inspiren, que reflejen identidad y que mejoren la calidad de vida de las personas. Para mí, la arquitectura no es solo una disciplina técnica, sino una herramienta de transformación que puede dar forma a ciudades más humanas, eficientes y armónicas con su contexto.",
              ]}
          />

          <InfoTrayectory 
            img_one="/src/assets/img/Arquitectura.webp"
            img_two="/src/assets/img/PlanosDos.webp"
          />

        </div>

        <div id="vision">
          <Info
              title="VISIÓN"
              content={[
              "Concibo la arquitectura como una forma de crear espacios que inspiren, funcionen y mejoren la vida de las personas. Busco unir estética, funcionalidad y sostenibilidad en proyectos personalizados que reflejen la identidad del cliente, generen emociones y se integren armónicamente con su entorno. Diseñar con propósito, creatividad y responsabilidad es mi compromiso.",
              ]}
          />

        </div>

        <div id="certificados">
          <Info
              title="CERTIFICADOS"
              content={[
              "He complementado mi formación profesional con una serie de certificaciones que respaldan mis conocimientos y habilidades en el campo de la arquitectura. Entre ellas se destacan cursos especializados en diseño estructural, normativas urbanísticas, sostenibilidad y modelado 3D (BIM). Estas certificaciones han sido otorgadas por la universidad UNIMETA y han fortalecido mi capacidad para abordar proyectos arquitectónicos con enfoque técnico, estético y funcional.",
              ]}
          />

          <div className="mt-20">
            <img src="/src/assets/img/Certificados.webp" alt="" />
          </div>

        </div>
      </section>

    </MainLayout>
  );
};

export default Information;