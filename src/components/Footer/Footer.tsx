import { useState } from "react";

const Footer = () => {
  const sections = [
    {
      title: "CONTACTO",
      links: ["melissa@gmail.com", "+57 3202232882"],
    },
    {
      title: "SOCIAL",
      links: ["Instagram", "Linkedin", "Facebook"],
    },
    {
      title: "SOBRE MI",
      links: ["Arquitectura", "Visión", "Proyectos", "Certificaciones"],
    },
    {
      title: "SERVICIOS",
      links: ["Diseño Aruitectónico", "Visualización Arquitectónica", "Sostenibilidad", "BIM"],
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {sections.map((section, index) => (
            <div key={index}>
              {/* Título y botón "+" */}
              <button
                className="w-full md:w-auto inline-flex items-center gap-2 text-base font-semibold py-2 text-black cursor-pointer hover:opacity-100"
                onClick={() => toggleSection(index)}
              >
                {section.title}
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {/* Contenido desplegable */}
              <ul
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {section.links.map((link, i) => (
                  <li key={i} className="py-1 text-gray-600 hover:text-black">
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Derechos reservados */}
      <div className="lg:mt-80 md:mt-60 mt-20 text-center text-gray-600 text-sm">
        © 2025 Melissa Castro. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;