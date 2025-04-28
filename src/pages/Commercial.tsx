import React from "react";
import MainLayout from "../layouts/MainLayout";
import Information from "../components/Props/ProyectsAndServices";
 

const Proyects: React.FC = () => {

  return (
    <MainLayout>
        
      <section className="mx-auto lg:px-10 md:px-8 px-6">
        <div id="comerciales">
            <Information
                proyecto="Proyectos Comerciales"
                ubicacion="Primavera - Villavicencio"
                arquitecta="Melissa"
                estado="Finalizado"
                imagenes={[
                  "/src/assets/img/ComercialUno.webp",
                  "/src/assets/img/ComercialDos.webp",
                  "/src/assets/img/ComercialTres.webp",
                  "/src/assets/img/ComercialCuatro.webp",
                  "/src/assets/img/ComercialCinco.webp",
                ]}
                titulo="COMERCIALES"
                descripcion={["El proyecto consiste en el diseño interior de una cafetería en la ciudad de Villavicencio, enfocada en crear un ambiente moderno, fresco y acogedor. Se optó por una distribución abierta que conecta cocina y áreas de mesas, mejorando la circulación y la experiencia del cliente.",

                "El uso de madera clara, mármol, cerámica blanca y detalles metálicos aporta una estética limpia y contemporánea, mientras que los jardines verticales añaden un toque natural. La iluminación combina luz funcional y decorativa, creando un espacio adaptable tanto de día como de noche.",
              
                "El resultado es una cafetería cálida y versátil, pensada para el encuentro y el disfrute."]}
            />
        </div>
      </section>

    </MainLayout>
  );
};

export default Proyects;