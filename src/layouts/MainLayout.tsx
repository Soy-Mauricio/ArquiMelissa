import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer';

type MainLayout = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayout> = ({ children }) => {
  return (
    <>
      <Navbar/>

      <main className="flex-grow">
        {children} {/* Aquí se insertará el contenido específico de cada página */}
      </main>
      
      <Footer/>
    </>
  );
};

export default MainLayout;