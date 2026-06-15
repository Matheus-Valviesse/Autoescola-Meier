import React from 'react';
import { motion } from 'framer-motion';
import { BsPerson } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
export default function BalizaContent() {
  return (
    <>
      <motion.h1 
        className="text-5xl md:text-6xl font-black text-[#bc0004] uppercase tracking-tight leading-[1.05]"
        variants={{
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
        }}
      >
        Fim da Baliza <br />
        <span className="text-[#2a1613]">Obrigatória!</span>
      </motion.h1>

      <motion.p 
        className="text-lg md:text-xl text-[#5f3f3a] font-medium max-w-[520px] leading-relaxed"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.6 } }
        }}
      >
        Uma nova regra mudou o processo para tirar a sua CNH. Agora ficou ainda mais simples conquistar a sua liberdade sobre rodas na unidade do Méier.
      </motion.p>

      {/* Seção de Conversão: CTA + Prova Social */}
      <motion.div 
        className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
        }}
      >
        {/* Link Dinâmico - Pode injetar a URL base da autoescola */}
        <a 
          href="https://wa.me/5521971388736" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-[#bc0004] text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_12px_24px_-8px_rgba(188,0,4,0.3)] hover:scale-102 hover:bg-[#930002] active:scale-98 transition-all duration-200"
        >
          <FaWhatsapp className='text-[40px]'/>
          Saber Mais no WhatsApp
        </a>

        {/* Alunos Aprovados */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-[#fff8f6] bg-[#bc0004]/20 flex items-center justify-center overflow-hidden">
                <BsPerson className='text-red-600 text-[20px]' />
              </div>
            ))}
          </div>
          <span className="text-xs font-bold text-[#5f3f3a] leading-tight">
            +89 alunos aprovados <br />este mês
          </span>
        </div>
      </motion.div>
    </>
  );
}