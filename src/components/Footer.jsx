import React from 'react';
import { Car, Phone, Mail, MapPin, Facebook, Instagram, Music } from 'lucide-react';

const Footer = () => {
  return (
    // Fundo #181111, Borda Superior Vermelha, Texto Branco
    <footer className="bg-[#181111] border-t-4 border-[#f20d0d] relative font-sans text-white">
      
      {/* Background Decorativo Sutil (Opcional, removido para focar na limpeza do código) */}
      
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* --- Coluna 1: Marca --- */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 select-none">
              <div className="w-12 h-12 rounded-xl bg-[#f20d0d] flex items-center justify-center text-white shadow-lg shadow-[#f20d0d]/20">
                <Car size={28} />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl font-bold tracking-tight text-white leading-none">Auto Escola</h2>
                <h2 className="text-xl font-bold tracking-tight text-[#f20d0d] leading-none">Méier</h2>
              </div>
            </div>
            <p className="text-[#ba9c9c] text-sm leading-relaxed">
              Desde 1995 formando condutores com excelência e segurança. A melhor estrutura do Méier para você conquistar sua CNH.
            </p>
            
            {/* Ícones Sociais */}
            <div className="flex gap-3 mt-2">
              <SocialIcon icon={<Instagram size={20} />} href={'https://www.instagram.com/cfcmeier/'} />
              <SocialIcon icon={<Facebook size={20} />} href={'https://www.facebook.com/AUTOESCOLAMEIER/'}/>
             
            </div>
          </div>

          {/* --- Coluna 2: Contato --- */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-white border-b border-[#543b3b] pb-2 inline-block w-full">Contato</h3>
            <ul className="flex flex-col gap-5">
              <ContactItem 
                icon={<MapPin size={20} />} 
                label="Endereço" 
                text={<>Rua Silva Rabêlo, 10 sobreloja 203<br/>Méier, Rio de Janeiro - RJ</>} 
              />
              <ContactItem  
                icon={<Phone size={20} />} 
                label="Telefone" 
                text="(21) 2590-1234" 
              />
              <ContactItem 
                icon={<Mail size={20} />} 
                label="E-mail" 
                text="contato@autoescolameier.com.br" 
              />
            </ul>
          </div>

          {/* --- Coluna 3: Horário --- */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-white border-b border-[#543b3b] pb-2 inline-block w-full">Horário</h3>
            <div className="flex flex-col gap-4">
              <ScheduleItem day="Segunda a Sexta" time="08:00 - 18:00" />
              <ScheduleItem day="Sábado" time="08:00 - 12:00" />
              <ScheduleItem day="Domingo" time="Fechado" isClosed />
            </div>
            
            <div className="mt-2 p-4 rounded-xl bg-[#2a1d1d]/50 border border-[#543b3b]">
              <p className="text-xs text-[#ba9c9c] italic text-center">
                "Sua liberdade começa aqui. Agende sua aula hoje mesmo!"
              </p>
            </div>
          </div>

          {/* --- Coluna 4: Localização (MAPA AQUI) --- */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-white border-b border-[#543b3b] pb-2 inline-block w-full">Localização</h3>
            
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border-2 border-[#2a1d1d] hover:border-[#f20d0d]/50 transition-colors shadow-2xl bg-[#2a1d1d]">
              {/* IFRAME DO GOOGLE MAPS INSERIDO AQUI */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.357642654321!2d-43.2847!3d-22.9002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU0JzAwLjciUyA0M8KwMTcnMDUuMCJX!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Rodapé Final */}
        <div className="mt-16 pt-8 border-t border-[#2a1d1d] flex flex-col md:flex-row items-center justify-center gap-6">
          <p className="text-[#ba9c9c] text-sm text-center md:text-left">
            © 2026 Auto Escola Méier. Todos os direitos reservados.
          </p>
        
        </div>
      </div>
    </footer>
  );
};

// Subcomponentes para limpeza visual
const SocialIcon = ({ icon,href }) => (
  <a href={href} 
    target="_blank" className="w-10 h-10 rounded-full bg-[#2a1d1d] hover:bg-[#f20d0d] text-[#ba9c9c] hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-105">
    {icon}
  </a>
);

const ContactItem = ({ icon, label, text }) => (
  <li className="flex items-start gap-3 group">
    <span className="text-[#f20d0d] mt-0.5 group-hover:scale-110 transition-transform">{icon}</span>
    <div className="flex flex-col">
      <span className="text-xs font-bold text-white uppercase tracking-wider mb-1">{label}</span>
      <span className="text-sm text-[#ba9c9c] leading-snug">{text}</span>
    </div>
  </li>
);

const ScheduleItem = ({ day, time, isClosed }) => (
  <div className="flex justify-between items-center border-b border-[#2a1d1d] pb-2 border-dashed">
    <span className="text-sm text-[#ba9c9c]">{day}</span>
    <span className={`text-sm ${isClosed ? 'font-bold text-[#f20d0d]' : 'font-medium text-white'}`}>{time}</span>
  </div>
);

export default Footer;