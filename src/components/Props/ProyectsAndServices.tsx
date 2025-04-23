import GallerySlider from "../Slide/ProyectSlide"

interface ProyectsProps {
    proyecto: string;
    ubicacion: string;
    arquitecta: string;
    estado: string;
    descripcion: string[];
    titulo: string;
    imagenes: string[];
  }

  const Information = ({ proyecto, ubicacion, arquitecta, estado, titulo, descripcion, imagenes }: ProyectsProps) => {
    return (

        <div className="flex flex-col mt-20">

            <div className="mb-5">
                <h1 className="font-light lg:text-6xl md:text-6xl text-4xl">{titulo}</h1>
            </div>

            <hr className="opacity-50" />

            <div className="text-lg lg:w-[700px] md:w-[685px] sm:w-[275px] mt-16">
                {descripcion.map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                ))}
            </div>

            <div className="mt-10">
                <GallerySlider images={imagenes} />
            </div>

            <div className="italic font-light lg:text-lg md:text-lg text-2xl mt-14">
                <div className="flex">
                    <span className="font-semibold">Proyecto:</span>
                    <p className="ml-1">{proyecto}</p>
                </div>
                <div className="flex">
                    <span className="font-semibold">Ubicación:</span>
                    <p className="ml-1">{ubicacion}</p>
                </div>
                <div className="flex">
                    <span className="font-semibold">Arquitecta:</span>
                    <p className="ml-1">{arquitecta}</p>
                </div>
                <div className="flex">
                    <span className="font-semibold">Estado del Proyecto:</span>
                    <p className="ml-1">{estado}</p>
                </div>

                <hr className="mt-5 opacity-50" />

            </div>

        </div>
    );
  };
  
export default Information;