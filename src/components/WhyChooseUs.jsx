import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Car, Trophy, MessageCircle } from 'lucide-react';

const featuresData = [
  {
    icon: Smile,
    title: "Instrutores Pacientes",
    description: "Treinamento humanizado e calmo. Especialistas em treinar pessoas que têm medo de dirigir ou estão começando do zero absoluto."
  },
  {
    icon: Car,
    title: "Frota Nova e Confortável",
    description: "Nada de carros velhos. Aprenda em veículos do ano, equipados com direção elétrica e ar-condicionado para seu conforto total."
  },
  {
    icon: Trophy,
    title: "Alto Índice de Aprovação",
    description: "Nossa metodologia é focada nos detalhes do exame prático do DETRAN. Aulas simuladas no percurso real da prova."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-20 relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#f20d0d]/5 to-transparent pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto flex flex-col gap-16 relative z-10">
        
        {/* Cabeçalho */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 border-b border-gray-100 pb-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 max-w-2xl"
          >
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-[#181111]">
              Por que escolher a <span className="text-[#f20d0d]">Auto Escola Méier?</span>
            </h2>
            <p className="text-lg text-[#8a6060]">
              Focamos na sua segurança e aprendizado real. Veja o que nos torna a melhor opção para sua formação de condutor.
            </p>
          </motion.div>

          <motion.button 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-[#f20d0d] font-bold text-lg hover:underline decoration-2 underline-offset-4 group"
          >
            Falar com consultor
            <MessageCircle className="transition-transform group-hover:translate-x-1" size={20} />
          </motion.button>
        </div>

        {/* Grid de Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuresData.map((feature, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
              }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(242, 13, 13, 0.05)" }}
              className="group flex flex-col gap-6 rounded-2xl bg-[#f8f5f5] p-8 border border-transparent hover:border-[#f20d0d]/20 transition-all duration-300"
            >
              <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center text-[#f20d0d] shadow-sm group-hover:bg-[#f20d0d] group-hover:text-white transition-colors duration-300">
                <feature.icon size={32} />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold text-[#181111]">{feature.title}</h3>
                <p className="text-[#8a6060] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;