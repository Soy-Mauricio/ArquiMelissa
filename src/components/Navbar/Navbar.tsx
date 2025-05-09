import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const sections = [
    {
      title: "PROYECTOS",
      links: [
        { name: "Todos", path: "/Proyects#todos" },
        { name: "Interiores", path: "/Interiors#interiores" },
        { name: "Comerciales", path: "/Commercial#comerciales" },
        { name: "Viviendas", path: "/Housing#viviendas" },
      ],
    },
    {
      title: "SERVICIOS",
      links: [
        { name: "Todos", path: "/Services" },
        { name: "Diseño Arquitectónico", path: "/Services#arquitectonico" },
        { name: "Visualización Arquitectónica", path: "/Services#visualizacion" },
        { name: "Arquitectura Sostenible", path: "/Services#sostenibilidad" },
        { name: "Consultoria", path: "/Services#consultoria" },
      ],
    },
    {
      title: "INFORMACIÓN",
      links: [
        { name: "Trayectoria", path: "/Information#trayectoria" },
        { name: "Arquitectura", path: "/Information#arquitectura" },
        { name: "Visión", path: "/Information#vision" },
        { name: "Certificaciones", path: "/Information#certificados" },
      ],
    },
    {
      title: "CONTACTO",
      links: [
        { name: "+57 3202232882", path: "#" },
        { name: "melissa@gmail.com", path: "#" },
        { name: "Agendar Cita", path: "#" },
      ],
    },
  ];  

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubMenu = (menu: string) =>
    setOpenSubMenu(openSubMenu === menu ? null : menu);

  return (
    <header className="relative w-full">
      <nav className="w-full">
        {/* Logo centrado */}
        <div className="lg:hidden absolute top-4 left-4">
          <Link to="/home" className="text-2xl font-bold flex">MELISSA</Link>
        </div>

        {/* Menú de navegación */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black 
            lg:w-auto lg:h-auto lg:relative lg:bg-white z-50 transform transition-transform duration-700 ease-in-out flex justify-center items-center lg:block 
            ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
        >
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:mt-12">
            {/* Logo centrado en pantallas grandes */}
            <div className="hidden lg:flex justify-center w-full mb-8">
              <Link to="/home" className="text-2xl font-bold">MELISSA-ARQ</Link>
            </div>

            {/* Opciones con submenús */}
            {sections.map((section) => (
              <div key={section.title} className="w-full">
                <button
                  onClick={() => toggleSubMenu(section.title)}
                  className="flex justify-between items-center w-full text-white lg:text-black font-semibold text-base px-4 py-2 cursor-pointer"
                >
                  {section.title}
                  <span className="text-2xl">{openSubMenu === section.title ? "−" : "+"}</span>
                </button>

                {/* Contenido desplegable */}
                <div
                  className={`overflow-hidden transition-all duration-700 ${
                    openSubMenu === section.title ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-col mt-2 space-y-2 px-6">
                    {section.links.map((link, index) => (
                      <Link
                        key={index}
                        to={link.path}
                        className="text-gray-300 lg:text-gray-700 hover:text-white lg:hover:text-black flex justify-start"
                        onClick={() => setIsOpen(false)} // Cerrar el menú al hacer clic
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botón para cerrar el menú en móviles */}
          {isOpen && (
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-white lg:hidden p-4">
              <img className="w-[25px]" src="/public/icons/cruz.webp" alt="Close Icon" />
            </button>
          )}
        </div>

        {/* Botón del menú hamburguesa en móviles */}
        <div className="lg:hidden flex items-center absolute top-4 right-4">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <img className="w-[28px]" src="/public/icons/menu-hamburguesa.webp" alt="Open Icon" />
          </button>
        </div>
      </nav>
    </header>
  );
}