import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen max-w-[1200px] mx-auto w-full">
      {/* Navbar fijo a la izquierda en pantallas grandes */}
      <div className="w-full lg:w-[250px] flex-shrink-0">
        <Navbar />
      </div>

      {/* Contenedor del contenido principal */}
      <div className="flex flex-col flex-grow">
        <main className="flex-grow p-4">
          {children}
        </main>

        {/* Footer abajo */}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;