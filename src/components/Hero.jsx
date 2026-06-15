import React,{useState, useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  ArrowRight, 
  Car, 
  MapPin, 
  Store, 
  Clock, 
  Navigation,
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import BalizaHeroCard from './Card/BalizaHeroCard';

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };


  const [currentImage, setCurrentImage] = useState(0);
  const images = ['imgs/img_1.png', '/imgs/img_2.png', '/imgs/img_3.png', '/imgs/img_4.png'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000); 

    return () => clearInterval(timer);
  }, [images.length]);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f8f5f5] text-[#181111] font-sans">
      
      {/* Container Principal */}
      <main className="layout-container flex h-full grow flex-col justify-center py-10 md:py-20">
        <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            
            {/* --- SEÇÃO 1: SOBRE NÓS --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Coluna Esquerda: Texto */}
              <motion.div 
                className="flex flex-col gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="w-fit">
                  <div className="bg-[#f20d0d]/10 border border-[#f20d0d]/20 rounded-full px-4 py-1.5 flex items-center gap-2">
                    <CheckCircle className="text-[#f20d0d]" size={18} />
                    <h4 className="text-[#f20d0d] text-sm font-bold tracking-wide uppercase">Sobre Nós</h4>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex flex-col gap-4">
                  <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black leading-[1.1] tracking-tight text-[#181111]">
                    A Auto Escola que o <span className="text-[#f20d0d]">Méier</span> Confia
                  </h1>
                  <p className="text-lg md:text-xl text-[#181111]/80 font-normal leading-relaxed">
                    Segurança, Tradição e a Menor Taxa de Reprovação da Zona Norte.
                  </p>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex flex-col gap-4 text-base text-[#181111]/70 leading-relaxed">
                  <p>
                    Com mais de 37 anos de estrada, a Auto Escola Méier é sinônimo de segurança e eficiência. Nossa metodologia foca não apenas na aprovação, mas na formação de condutores conscientes e preparados para o trânsito real do Rio de Janeiro.
                  </p>
                  <p>
                    Contamos com uma frota moderna, ar-condicionado em todos os veículos e instrutores pacientes dedicados ao seu sucesso. Aqui, você não é apenas mais um aluno, você é o próximo motorista habilitado da família.
                  </p>
                </motion.div>

                {/* Grid de Estatísticas */}
                <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4 border-y border-[#e6dbdb] py-6">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#f20d0d] text-3xl font-black leading-tight">5k+</p>
                    <p className="text-sm font-medium text-[#181111]/60">Habilitados</p>
                  </div>
                  <div className="flex flex-col gap-1 border-l border-[#e6dbdb] pl-4">
                    <p className="text-[#f20d0d] text-3xl font-black leading-tight">37+</p>
                    <p className="text-sm font-medium text-[#181111]/60">Anos de História</p>
                  </div>
                  <div className="flex flex-col gap-1 border-l border-[#e6dbdb] pl-4">
                    <p className="text-[#f20d0d] text-3xl font-black leading-tight">78%</p>
                    <p className="text-sm font-medium text-[#181111]/60">Melhor indice de aprovação da região</p>
                  </div>
                </motion.div>

                {/* <motion.div variants={fadeInUp} className="pt-2">
                  <button className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#f20d0d] px-8 py-4 transition-all hover:bg-[#f20d0d]/90 hover:scale-[1.02] active:scale-[0.98]">
                    <span className="text-white text-base font-bold leading-normal tracking-wide">Conheça Nossa Frota</span>
                    <ArrowRight className="text-white transition-transform group-hover:translate-x-1" size={20} />
                  </button>
                </motion.div> */}
              </motion.div>

              {/* Coluna Direita: Imagem */}
              <motion.div 
                className="relative h-full min-h-[400px] w-full flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="absolute -right-10 -top-10 h-[80%] w-[80%] rounded-xl bg-[#f20d0d]/5 -z-10"></div>
                <div className="relative w-full overflow-hidden rounded-xl shadow-2xl aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
                  
                {/* --- INÍCIO DO CARROSSEL --- */}
                  <div className="absolute inset-0 group">
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={currentImage}
                        src={images[currentImage]} 
                        alt={`Imagem ${currentImage + 1} da Mr. Rocha Auto Escola`}
                        className="absolute inset-0 h-full w-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                      />
                    </AnimatePresence>

                    {/* Botões de Navegação (Aparecem no hover) */}
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 text-[#181111] opacity-0 backdrop-blur-sm transition-opacity hover:bg-white group-hover:opacity-100"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 text-[#181111] opacity-0 backdrop-blur-sm transition-opacity hover:bg-white group-hover:opacity-100"
                    >
                      <ChevronRight size={24} />
                    </button>

                    {/* Indicadores (Bolinhas) */}
                    <div className="absolute bottom-32 left-0 right-0 z-10 flex justify-center gap-2">
                      {images.map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            idx === currentImage ? 'w-6 bg-[#f20d0d]' : 'w-2 bg-white/60'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  {/* --- FIM DO CARROSSEL --- */}
                  
                  {/* Card Flutuante sobre a imagem */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-6 left-6 right-6 rounded-lg bg-white/95 p-5 backdrop-blur-sm shadow-lg border border-white/20"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f20d0d]/10 text-[#f20d0d]">
                        <Car size={24} />
                      </div>
                      <div>
                        <p className="font-bold text-[#181111] text-base">Aulas Práticas no Méier</p>
                        <p className="text-xs text-[#181111]/60">Rotas de exame oficial</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            


          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;