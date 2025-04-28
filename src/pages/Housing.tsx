import React from "react";
import MainLayout from "../layouts/MainLayout";
import Information from "../components/Props/ProyectsAndServices";
 

const Proyects: React.FC = () => {

  return (
    <MainLayout>
        
      <section className="mx-auto lg:px-10 md:px-8 px-6">
        <div id="viviendas">
            <Information
                proyecto="Diseño de Interiores"
                ubicacion="Vereda Buenos Aires"
                arquitecta="Melissa"
                estado="Finalizado"
                imagenes={[
                  "/src/assets/img/ViviendaUno.webp",
                  "/src/assets/img/ViviendaDos.webp",
                  "/src/assets/img/ViviendaTres.webp",
                  "/src/assets/img/ViviendaCuatro.webp",
                  "/src/assets/img/ViviendaCinco.webp",
                ]}
                titulo="VIVIENDAS"
                descripcion={["En este proyecto residencial combinamos materiales naturales como piedra volcánica, madera y concreto aparente para crear un hogar robusto, cálido y en diálogo con el entorno natural. El diseño apuesta por espacios abiertos, techos altos y amplias entradas de luz natural, logrando ambientes luminosos y frescos.",

                "La cocina integra funcionalidad y diseño minimalista, mientras los acabados honestos resaltan la nobleza de los materiales. La vivienda refleja una arquitectura contemporánea que respeta el paisaje y promueve un estilo de vida sencillo y conectado con la naturaleza."]}
            />
        </div>
      </section>

    </MainLayout>
  );
};

export default Proyects;