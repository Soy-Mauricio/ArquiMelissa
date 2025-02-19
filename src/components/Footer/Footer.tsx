import { useState } from "react";

const Footer = () => {
  const sections = [
    {
      title: "Contacto",
      links: ["+57 3142654949", "melisa@gmail.com", "Blog", "Contacto"],
    },
    {
      title: "Productos",
      links: ["Planes", "Precios", "Testimonios", "Integraciones"],
    },
    {
      title: "Soporte",
      links: ["Centro de Ayuda", "FAQs", "Guías", "Reportar un Problema"],
    },
    {
      title: "Legal",
      links: ["Términos de Servicio", "Política de Privacidad", "Cookies"],
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {sections.map((section, index) => (
            <div key={index}>
              {/* Encabezado con botón desplegable */}
              <button
                className="w-full text-left text-lg font-semibold py-2 md:py-0"
                onClick={() => toggleSection(index)}
              >
                {section.title}
              </button>
              {/* Contenido desplegable en móvil / siempre visible en desktop */}
              <ul
                className={`overflow-hidden transition-all duration-300 md:block ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0 md:opacity-100 md:max-h-none"
                }`}
              >
                {section.links.map((link, i) => (
                  <li key={i} className="py-1 text-gray-400 hover:text-white">
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
