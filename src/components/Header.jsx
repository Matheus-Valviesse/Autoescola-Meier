import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Função para rolar suavemente até a seção e fechar o menu mobile se estiver aberto
  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false); // Fecha o menu mobile ao clicar
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const navLinks = [
    { label: 'Início', id: 'inicio' }, // Certifique-se que sua HeroSection tem id="inicio"
    { label: 'Diferenciais', id: 'diferenciais' }, // Adicione id="diferenciais" na seção WhyChooseUs
    { label: 'Planos', id: 'planos' }, // Adicione id="planos" na PlanosSection
    { label: 'Depoimentos', id: 'depoimentos' }, // Adicione id="depoimentos" na GoogleReviews
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-[#e6dbdb] bg-white/90 backdrop-blur-md dark:bg-[#181111]/90 dark:border-[#f20d0d]/30 transition-colors duration-300">
        <div className="flex items-center justify-between px-6 py-4 lg:px-20 max-w-[1440px] mx-auto">
          
          {/* Logo e Nome */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => scrollToSection('inicio')}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full  text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              <img 
                 src="/logo-do-site.svg" 
                 alt="Logo Auto Escola" 
                 className="w-full h-full " // Ajuste o object-cover conforme a necessidade da sua logo
               />
            </div>
            <h2 className="text-xl font-bold tracking-tight text-[#181111] dark:text-white group-hover:text-[#f20d0d] transition-colors">
              Auto Escola Méier
            </h2>
          </div>

          {/* Navegação Desktop (Escondida no Mobile) */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-[#8a6060] dark:text-gray-300 hover:text-[#f20d0d] dark:hover:text-[#f20d0d] transition-colors relative group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#f20d0d] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Botão Hambúrguer (Aparece só no Mobile) */}
          <button 
            className="md:hidden text-[#181111] dark:text-white p-2 rounded-md hover:bg-[#f8f5f5] dark:hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </header>

      {/* Menu Mobile Overlay (Animação de Entrada) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#181111] pt-24 px-6 md:hidden flex flex-col items-center gap-8"
          >
            {navLinks.map((link) => (
              <motion.button
                key={link.label}
                onClick={() => scrollToSection(link.id)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl font-bold text-[#181111] dark:text-white hover:text-[#f20d0d] transition-colors w-full text-center py-4 border-b border-gray-100 dark:border-white/5"
              >
                {link.label}
              </motion.button>
            ))}
            
            {/* Botão de Fechar Extra (Opcional, pois o X já fecha) */}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 text-[#8a6060] text-sm underline"
            >
              Fechar Menu
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;