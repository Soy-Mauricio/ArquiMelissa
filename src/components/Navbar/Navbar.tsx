import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="flex h-auto">
        <nav className="max-w-[1200px] w-full">
            <div className="flex justify-between items-center relative p-4 md:mx-6 2xl:mx-6 mt-2">
            {/* Logo */}
            <div className="text-2xl font-bold cursor-pointer flex">
                <Link to='/home'> MELISSA </Link>
            </div>

            {/* Botón del menú hamburguesa */}
            <div className="lg:hidden flex items-center">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                <img className="w-[28px]" src="/public/icons/menu-hamburguesa.webp" alt="Open Icon" />
                </button>
            </div>

            {/* Menú de navegación */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black lg:bg-transparent lg:relative lg:flex lg:items-center lg:justify-end z-50 transform transition-transform duration-700 ease-in-out ${
                isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                }`}
            >
                <div className="flex flex-col lg:flex-row lg:space-x-8 items-center justify-center h-full">
                {["Proyectos", "Servicios", "Sobre", "Contacto"].map((item) => (
                    <div className="flex items-center justify-center w-auto mb-4 lg:mb-0">
                    <a href="#" className="text-white font-semibold text-lg border-b-1 border-transparent lg:hover:border-white transition-all duration-500">
                        {item}
                        <img className="w-[15px] h-[14px] ml-1 lg:hidden inline-block" src={`assets/Icons/angulo-derecho.png`} alt="" />
                    </a>
                    </div>
                ))}
                </div>

                {/* Botón para cerrar el menú en pantallas pequeñas */}
                {isOpen && (
                <button onClick={toggleMenu} className="absolute top-4 right-4 text-white lg:hidden p-4">
                    <img className="w-[25px]" src="/public/icons/cruz.webp" alt="Close Icon"/>
                </button>
                )}
            </div>
            </div>
        </nav>
    </header>

  );
}
