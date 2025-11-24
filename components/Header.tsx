
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v1.285a1.5 1.5 0 01-.64 1.215L10 11.236l-1.36-1.736A1.5 1.5 0 018 8.285V7z" />
            <path d="M10.168 11.685l1.352 1.728a.5.5 0 01-.64.787l-1.5-1.923-1.5 1.923a.5.5 0 01-.64-.787l1.352-1.728-1.594-2.032A2.501 2.501 0 017.5 8.285V7a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0113.5 7v1.285a2.5 2.5 0 01-1.074 2.032l-1.594 2.032z" />
          </svg>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            Conectados com o Planeta
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#problem" className="text-gray-600 hover:text-green-500 transition duration-300">O Problema</a>
          <a href="#solution" className="text-gray-600 hover:text-green-500 transition duration-300">A Solução</a>
          <a href="#impact" className="text-gray-600 hover:text-green-500 transition duration-300">Nosso Impacto</a>
          <a href="#action" className="text-gray-600 hover:text-green-500 transition duration-300">Aja Agora</a>
          <a href="#finder" className="text-gray-600 hover:text-green-500 transition duration-300">Encontre um Centro</a>
          <a href="#instagram" className="text-gray-600 hover:text-green-500 transition duration-300">Nossas Ações</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
