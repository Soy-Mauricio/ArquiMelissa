import React, { useState } from "react";

const ContactModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Botón de acción */}
      <button
        onClick={handleToggle}
        className="cursor-pointer px-6 py-3 mt-10 bg-purple-700 text-white shadow-lg hover:bg-purple-800 transition-all"
      >
        Contáctame
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md relative">
            {/* Botón cerrar */}
            <button
              onClick={handleToggle}
              className="cursor-pointer absolute top-3 right-4 text-gray-500 hover:text-black text-2xl"
              aria-label="Cerrar"
            >
              &times;
            </button>

            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Formulario de Contacto
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Aquí puedes manejar el envío del formulario
                console.log("Formulario enviado");
                handleToggle();
              }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label htmlFor="correo" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  required
                  className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  required
                  className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition-all"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactModal;
