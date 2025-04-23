import React from "react";
import MainLayout from "../layouts/MainLayout";
import Information from "../components/Props/ProyectsAndServices";
 

const Proyects: React.FC = () => {

  return (
    <MainLayout>
        
      <section className="mx-auto lg:px-10 md:px-8 px-6">
        <div id="interiores">
            <Information
                proyecto="Diseño de Interiores"
                ubicacion="Amarilo - Villavicencio"
                arquitecta="Melissa"
                estado="Finalizado"
                imagenes={[
                  "/src/assets/img/Imagen-Tres.webp",
                  "/src/assets/img/Imagen-Cuatro.webp",
                  "/src/assets/img/Imagen-Cinco.webp",
                ]}
                titulo="INTERIORES"
                descripcion={["El proyecto consiste en el rediseño interior de un apartamento en el conjunto residencial Amarilo, en Villavicencio, con el objetivo de transformar un espacio convencional en un hogar moderno, funcional y acogedor para una familia joven. Se unificaron las áreas sociales eliminando divisiones innecesarias, lo que permitió una mayor amplitud visual y mejor circulación.",

                "Se usaron materiales como madera clara, porcelanato tipo cemento y detalles metálicos en negro para lograr un equilibrio entre calidez y modernidad. La iluminación combina luces empotradas y lámparas decorativas, creando ambientes agradables durante el día y la noche. El dormitorio principal se diseñó como un espacio íntimo y sereno, utilizando tonos suaves y texturas textiles que invitan al descanso. El resultado es un diseño contemporáneo adaptado al estilo de vida actual y al contexto tropical de la ciudad."]}
            />
        </div>
      </section>

    </MainLayout>
  );
};

export default Proyects;