import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  ArrowRight, 
  Car, 
  MapPin, 
  Store, 
  Clock, 
  Navigation 
} from 'lucide-react';

const Hero = () => {
  // Configuração das animações
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
                    Com mais de 20 anos de estrada, a Auto Escola Méier é sinônimo de segurança e eficiência. Nossa metodologia foca não apenas na aprovação, mas na formação de condutores conscientes e preparados para o trânsito real do Rio de Janeiro.
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
                    <p className="text-[#f20d0d] text-3xl font-black leading-tight">20+</p>
                    <p className="text-sm font-medium text-[#181111]/60">Anos de História</p>
                  </div>
                  <div className="flex flex-col gap-1 border-l border-[#e6dbdb] pl-4">
                    <p className="text-[#f20d0d] text-3xl font-black leading-tight">98%</p>
                    <p className="text-sm font-medium text-[#181111]/60">Aprovação</p>
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
                  {/* Substitua a URL abaixo pela sua imagem real */}
                  <img 
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000&auto=format&fit=crop" 
                    alt="Aluno feliz na auto escola" 
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  
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

            {/* --- SEÇÃO 2: LOCALIZAÇÃO --- */}
            <motion.div 
              className="mt-20 lg:mt-32 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <div className="overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5 lg:grid lg:grid-cols-2">
                
                {/* Detalhes do Endereço */}
                <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                  <div className="mb-6 w-fit">
                    <div className="flex items-center gap-2 rounded-full border border-[#f20d0d]/20 bg-[#f20d0d]/10 px-4 py-1.5">
                      <MapPin className="text-[#f20d0d]" size={18} />
                      <h4 className="text-sm font-bold tracking-wide uppercase text-[#f20d0d]">Onde Estamos</h4>
                    </div>
                  </div>
                  
                  <h2 className="mb-6 text-3xl font-black leading-tight text-[#181111] lg:text-4xl">
                    Praticidade e fácil acesso no <span className="text-[#f20d0d]">Coração do Méier</span>
                  </h2>
                  
                  <div className="space-y-8">
                    <div className="flex gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#f8f5f5] text-[#f20d0d]">
                        <Store size={24} />
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-bold text-[#181111]">Unidade Principal</h3>
                        <p className="text-base leading-relaxed text-[#181111]/70">
                          Rua Silva Rabêlo, 10 sobreloja 203<br/>
                          Méier, Rio de Janeiro - RJ<br/>
                          CEP: 20735-080
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#f8f5f5] text-[#f20d0d]">
                        <Clock size={24} />
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-bold text-[#181111]">Horário de Funcionamento</h3>
                        <p className="text-base leading-relaxed text-[#181111]/70">
                          Segunda a Sexta: 08:00 às 18:00<br/>
                          Sábado: 08:00 às 12:00
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10">
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Auto+Escola+Méier+Rio+de+Janeiro" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#181111] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#181111]/90 hover:shadow-lg active:scale-95 sm:w-auto"
                    >
                      <span>Traçar Rota no Maps</span>
                      {/* Certifique-se de importar o ícone Navigation do lucide-react */}
                      <Navigation className="transition-transform group-hover:translate-x-1" size={20} />
                    </a>
                  </div>
                </div>

                {/* Google Maps Iframe */}
                <div className="relative min-h-[350px] w-full bg-gray-100 lg:min-h-full">
                  <iframe 
                    allowFullScreen="" 
                    className="absolute inset-0 h-full w-full grayscale-[10%]" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" 
                    // Coloquei um link genérico do Maps para o Méier, substitua pelo link de "incorporar" da sua loja real
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1837.680059966096!2d-43.281287511146886!3d-22.900084424003136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997dba8d0f8907%3A0xadeb4739270baada!2sAuto%20Escola%20M%C3%A9ier!5e0!3m2!1spt-PT!2sbr!4v1769709927421!5m2!1spt-PT!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" 
                    style={{ border: 0 }} 
                    title="Localização Auto Escola Méier" 
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;