import React from 'react';
import { motion } from 'framer-motion';
import BalizaBadge from './BalizaBadge';
import BalizaContent from './BalizaContent';
import BalizaVisual from './BaalizaVisual';


export default function BalizaHeroCard() {
  // Variante pai para coordenar o surgimento dos filhos em cascata (Stagger Effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div className="w-full min-h-[600px] bg-[#fff8f6] text-[#2a1613] font-sans antialiased flex items-center justify-center p-6 md:p-12">
      <motion.div 
        className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Coluna da Esquerda: Textos e CTA (Ocupa 7 colunas no desktop) */}
        <div className="lg:col-span-7 flex flex-col gap-6 order-2 lg:order-1">
          <BalizaBadge />
          <BalizaContent />
        </div>

        {/* Coluna da Direita: Imagem e Cards Integrados (Ocupa 5 colunas no desktop) */}
        <div className="lg:col-span-5 w-full flex justify-center items-center order-1 lg:order-2">
          <BalizaVisual />
        </div>
      </motion.div>
    </div>
  );
}