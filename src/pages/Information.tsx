import React from "react";
import MainLayout from "../layouts/MainLayout";
import ImageSlider from "../components/Slide/ImageSlider";

const Information: React.FC = () => {
  return (
    <MainLayout>
        <section className="mt-10 lg:px-10 px-6">
            <div className="lg:mt-0 mt-30">
                <h1 className="font-light lg:text-6xl text-4xl">TRAYECTORIA</h1>
            </div>

            <div className="lg:w-[600px] md:w-[585px] sm:w-[275px] mt-10 text-lg">
                <p>Trabajando por la creación de espacios que no solo sean funcionales, sino también visualmente inspiradores. Con una formación sólida en diseño y planificación, mi enfoque está en generar soluciones arquitectónicas que conecten estética y eficiencia, siempre buscando mejorar la calidad de vida de quienes habitan los espacios que creo.</p>
                <br />
                <p>A lo largo de mi carrera, he tenido la oportunidad de trabajar en una variedad de proyectos que abarcan desde residenciales hasta comerciales, cada uno con su propio desafío y su propia historia. Mi objetivo es siempre fusionar las necesidades del cliente con la innovación y el respeto por el entorno, creando diseños que sean tanto sostenibles como atemporales.
                Cada proyecto es una nueva oportunidad para explorar, aprender y desafiar los límites del diseño. Me considero una arquitecta comprometida con la evolución constante, buscando siempre la perfección en cada detalle, sin perder de vista el bienestar de las personas que interactuarán con esos espacios.</p>
            </div>

            <div>
                <ImageSlider/>
            </div>
        </section>
    </MainLayout>
  );
};

export default Information;