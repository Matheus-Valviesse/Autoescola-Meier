import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppBanner = () => {
  return (
    <section className="w-full px-4 md:px-10 lg:px-40 pb-16 bg-[#f8f5f5]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        viewport={{ once: true }}
        className="relative w-full max-w-[1200px] mx-auto overflow-hidden rounded-3xl bg-[#181111] text-white p-10 md:p-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
      >
        {/* Padrões Decorativos de Fundo */}
        <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-[#f20d0d]/20 to-transparent pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#f20d0d]/10 pointer-events-none blur-3xl"></div>

        {/* Conteúdo de Texto */}
        <div className="relative z-10 max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para começar sua jornada?</h2>
          <p className="text-gray-300 text-lg mb-0">Agende sua visita hoje mesmo e conheça nossa estrutura com simuladores modernos.</p>
        </div>

        {/* Botão de Ação */}
        <div className="relative z-10 flex flex-col gap-4 min-w-[200px]">
          <motion.a 
            href="https://wa.me/5521971388736" // Substitua pelo seu número
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              boxShadow: ["0px 0px 0px rgba(242, 13, 13, 0)", "0px 0px 20px rgba(242, 13, 13, 0.5)", "0px 0px 0px rgba(242, 13, 13, 0)"] 
            }}
            transition={{ 
              boxShadow: { duration: 2, repeat: Infinity } 
            }}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#26d466] px-8 py-4 text-base font-bold text-white transition-all hover:bg-white hover:text-[#26d466] shadow-lg shadow-[#f20d0d]/20"
          >
            <span className='text-[30px]'><FaWhatsapp /></span>
            <span>Falar no WhatsApp</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default WhatsAppBanner;