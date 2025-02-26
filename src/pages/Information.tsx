import React from "react";
import MainLayout from "../layouts/MainLayout";
import ImageSlider from "../components/Slide/ImageSlider";
import Info from "../components/Props/SectInformation";

const Information: React.FC = () => {
  return (
    <MainLayout>
        
        <section className="lg:px-10 px-6">
            <div className="mt-10">
                <Info
                    title="TRAYECTORIA"
                    content={[
                    "Trabajando por la creación de espacios que no solo sean funcionales, sino también visualmente inspiradores. Con una formación sólida en diseño y planificación, mi enfoque está en generar soluciones arquitectónicas que conecten estética y eficiencia, siempre buscando mejorar la calidad de vida de quienes habitan los espacios que creo.",
                    "A lo largo de mi carrera, he tenido la oportunidad de trabajar en una variedad de proyectos que abarcan desde residenciales hasta comerciales, cada uno con su propio desafío y su propia historia. Mi objetivo es siempre fusionar las necesidades del cliente con la innovación y el respeto por el entorno, creando diseños que sean tanto sostenibles como atemporales.",
                    "Cada proyecto es una nueva oportunidad para explorar, aprender y desafiar los límites del diseño. Me considero una arquitecta comprometida con la evolución constante, buscando siempre la perfección en cada detalle, sin perder de vista el bienestar de las personas que interactuarán con esos espacios."
                    ]}
                />

                <div className="flex justify-start mt-20 w-[800px]">
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

                <ImageSlider />
            </div>
        </section>

    </MainLayout>
  );
};

export default Information;