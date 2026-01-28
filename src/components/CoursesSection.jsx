import React from 'react';
import { motion } from 'framer-motion';
import { Car, PlusCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';

const coursesData = [
  {
    title: "1ª Habilitação (A/B)",
    description: "O pacote completo para quem vai tirar a carteira pela primeira vez. Inclui todo o processo teórico e prático.",
    icon: Car,
    features: ["Carro e Moto", "45h Aulas Teóricas", "20h Aulas Práticas", "Material Didático Incluso"],
    popular: true,
    recommended: false
  },
  {
    title: "Adição de Categoria",
    description: "Já possui habilitação e quer dirigir outros veículos? Adicione categorias C, D ou E ao seu documento.",
    icon: PlusCircle,
    features: ["Para categorias A, B, D ou E", "Amplie oportunidades de trabalho", "15h Aulas Práticas", "Horários Flexíveis"],
    popular: false,
    recommended: false
  },
  {
    title: "Aulas para Habilitados",
    description: "Supere o medo de dirigir com instrutores especializados em psicologia do trânsito. Volte a ter liberdade.",
    icon: ShieldCheck,
    features: ["Perca o medo de dirigir", "Treinamento no trânsito real", "Foco em baliza e ladeira", "Pacotes personalizados"],
    popular: false,
    recommended: true
  }
];

const CoursesSection = () => {
  // Variantes de Animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section className="w-full py-16 px-4 md:px-10 lg:px-40 bg-[#f8f5f5] text-[#181111]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center text-center gap-3">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center rounded-full border border-[#e6dbdb] bg-white p-2 pr-4 shadow-sm"
          >
            <span className="flex items-center justify-center rounded-full bg-[#f20d0d]/10 px-2 py-1 text-xs font-bold text-[#f20d0d] mr-2">NOVO</span>
            <p className="text-sm font-medium text-[#181111]">Turmas abertas para 2024</p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#181111] text-4xl md:text-5xl font-bold leading-tight tracking-tight"
          >
            Escolha o Seu <span className="text-[#f20d0d] relative inline-block">
              Caminho
              {/* SVG do sublinhado */}
              <svg className="absolute w-full h-3 bottom-1 left-0 text-[#f20d0d]/20 -z-10" preserveAspectRatio="none" viewBox="0 0 100 10">
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
              </svg>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#634f4f] text-lg max-w-[600px]"
          >
            Nossos cursos são projetados para transformar você em um motorista confiante e seguro. Escolha a opção ideal para sua necessidade.
          </motion.p>
        </div>

        {/* Grid de Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {coursesData.map((course, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className={`group relative flex flex-col gap-6 rounded-2xl border border-solid border-[#e6dbdb] bg-white p-8 shadow-sm transition-all duration-300 ${course.popular ? 'border-[#f20d0d]/30 ring-1 ring-[#f20d0d]/10' : ''}`}
            >
              {/* Header do Card */}
              <div className="flex items-start justify-between">
                <div className={`flex h-14 w-14 items-center justify-center rounded-full transition-colors ${course.popular ? 'bg-[#f20d0d] text-white' : 'bg-[#f20d0d]/10 text-[#f20d0d] group-hover:bg-[#f20d0d] group-hover:text-white'}`}>
                  <course.icon size={32} strokeWidth={1.5} />
                </div>
                {course.popular && (
                  <span className="rounded-full bg-[#f20d0d] px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">Mais Popular</span>
                )}
                {course.recommended && (
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700 uppercase tracking-wider">Recomendado</span>
                )}
              </div>

              {/* Título e Descrição */}
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-[#181111]">{course.title}</h3>
                <p className="text-[#634f4f] text-sm leading-relaxed">{course.description}</p>
              </div>

              <div className="my-2 h-px w-full bg-[#f5f0f0]"></div>

              {/* Lista de Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {course.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#181111]">
                    <CheckCircle2 className="text-[#f20d0d]" size={20} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Botão */}
              <button className="mt-4 flex w-full cursor-pointer items-center justify-center rounded-full bg-[#f5f0f0] py-3 text-sm font-bold text-[#181111] transition-all hover:bg-[#f20d0d] hover:text-white">
                {course.popular ? 'Começar Agora' : 'Saiba Mais'}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;