import React from 'react';
import { motion } from 'framer-motion';
import { BsPerson } from "react-icons/bs";
import { MdCampaign } from "react-icons/md";

export default function BalizaVisual() {
  return (
    <motion.div 
      className="relative w-full max-w-[480px]"
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, type: 'spring', damping: 20 } }
      }}
    >
      {/* 
        AQUI ESTÁ A CORREÇÃO: 
        Tiramos o '-z-10' e colocamos 'z-0'. Isso impede que ele seja jogado 
        para trás da tela inteira quando a animação acaba. 
      */}
      <div className="absolute -inset-2 bg-[#bc0004]/15 rounded-3xl -rotate-2 z-0" />

      {/* 
        AQUI ESTÁ A OUTRA METADE DA CORREÇÃO: 
        Adicionamos 'relative z-10' ao card branco para garantir que ele 
        fique por cima do fundo vermelho.
      */}
      <div className="relative z-10 bg-white rounded-2xl shadow-[0_15px_40px_-12px_rgba(42,22,19,0.08)] border border-[#eabcb5] p-5">
        
        {/* Container da Imagem com o Badge Flutuante */}
        <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-5 group">
          <img 
            alt="Ilustração do fim da baliza obrigatória" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
            src="imgs/img_card.png" 
          />
          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-white/40 shadow-sm">
            <span className="text-[#bc0004] text-lg flex items-center">
              <MdCampaign className='text-[22px]' />
            </span>
            <span className="text-xs font-bold text-[#bc0004]">Novidade</span>
          </div>
        </div>

        {/* Cards de Métricas Inferiores REFEITOS e Alinhados */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 bg-[#ffe9e6] rounded-xl border border-[#eabcb5]/40 flex flex-col gap-0.5">
            <span className="text-[11px] font-bold text-[#5f3f3a] uppercase tracking-wider">Processo</span>
            <span className="text-lg font-extrabold text-[#bc0004]">Mais Ágil</span>
          </div>
          <div className="p-4 bg-[#ffe9e6] rounded-xl border border-[#eabcb5]/40 flex flex-col gap-0.5">
            <span className="text-[11px] font-bold text-[#5f3f3a] uppercase tracking-wider">Dificuldade</span>
            <span className="text-lg font-extrabold text-[#2a1613]">Reduzida</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}