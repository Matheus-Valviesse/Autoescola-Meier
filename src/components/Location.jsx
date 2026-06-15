import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Store, Clock, Navigation } from 'lucide-react';

const LocationSection = ({ fadeInUp }) => {
  return (
    <motion.div 
      className="mt-20 lg:mt-32 w-full max-w-[1200px] mx-auto px-4 md:px-0" // Adicionado o max-w e as margens para não estourar nas bordas
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5 grid grid-cols-1 lg:grid-cols-2">
        
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
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#181111] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#181111]/90 hover:shadow-lg active:scale-95 sm:w-auto"
            >
              <span>Traçar Rota no Maps</span>
              <Navigation className="transition-transform group-hover:translate-x-1" size={20} />
            </a>
          </div>
        </div>

        {/* Google Maps Iframe */}
        <div className="relative min-h-[350px] w-full bg-gray-100 lg:min-h-full h-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2475010620853!2d-43.2818556!3d-22.895048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997dd1472856f7%3A0x67396112d7c505f0!2sR.%20Silva%20Rab%C3%AAlo%2C%2010%20-%20M%C3%A9ier%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020735-080!5e0!3m2!1spt-BR!2sbr!4v1710000000000" 
            title="Localização Auto Escola Méier"
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            className="absolute inset-0 h-full w-full grayscale-[10%]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LocationSection;