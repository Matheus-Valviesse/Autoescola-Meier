import React from 'react';
import { Camera, Facebook, Music, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#181111] border-t-4 border-[#f20d0d] relative font-sans text-white">
      {/* Efeito de Fundo do Mapa (Opacidade Baixa) */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay bg-cover bg-center" 
        style={{ backgroundImage: "url('https://maps.googleapis.com/maps/api/staticmap?center=Meier,Rio+de+Janeiro&zoom=14&size=600x300&sensor=false')" }} // Placeholder seguro
      ></div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Coluna 1: Marca e Redes Sociais */}
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
              <SocialLink href="#" icon={<Camera size={20} />} label="Instagram" />
              <SocialLink href="#" icon={<Facebook size={20} />} label="Facebook" />
              <SocialLink href="#" icon={<Music size={20} />} label="TikTok" />
            </div>
          </div>

          {/* Coluna 2: Contato */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-white border-b border-[#543b3b] pb-2 inline-block w-full">Contato</h3>
            <ul className="flex flex-col gap-5">
              <ContactItem icon={<MapPin size={20} />} label="Endereço" text={<>Rua Dias da Cruz, 123<br/>Méier, Rio de Janeiro - RJ</>} />
              <ContactItem icon={<Phone size={20} />} label="Telefone" text="(21) 2590-1234" />
              <ContactItem icon={<Mail size={20} />} label="E-mail" text="contato@autoescolameier.com.br" />
            </ul>
          </div>

          {/* Coluna 3: Horário */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-white border-b border-[#543b3b] pb-2 inline-block w-full">Horário</h3>
            <div className="flex flex-col gap-4">
              <ScheduleItem day="Segunda a Sexta" time="08:00 - 20:00" />
              <ScheduleItem day="Sábado" time="08:00 - 14:00" />
              <ScheduleItem day="Domingo" time="Fechado" isClosed />
            </div>
            {/* CTA Texto */}
            <div className="mt-2 p-4 rounded-xl bg-[#2a1d1d]/50 border border-[#543b3b]">
              <p className="text-xs text-[#ba9c9c] italic text-center">
                "Sua liberdade começa aqui. Agende sua aula hoje mesmo!"
              </p>
            </div>
          </div>

          {/* Coluna 4: Mapa Visual */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-white border-b border-[#543b3b] pb-2 inline-block w-full">Localização</h3>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border-2 border-[#2a1d1d] hover:border-[#f20d0d]/50 transition-colors cursor-pointer group shadow-2xl">
              {/* Imagem do Mapa */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: "url('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1837.680059966096!2d-43.281287511146886!3d-22.900084424003136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997dba8d0f8907%3A0xadeb4739270baada!2sAuto%20Escola%20M%C3%A9ier!5e0!3m2!1spt-PT!2sbr!4v1769709927421!5m2!1spt-PT!2sbr')" }} // Placeholder mapa real
              ></div>
              {/* Pino Pulsante */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f20d0d] opacity-75"></span>
                  <div className="relative w-10 h-10 rounded-full bg-[#f20d0d] text-white flex items-center justify-center shadow-lg">
                    <MapPin size={20} />
                  </div>
                </div>
              </div>
              {/* Overlay Gradiente */}
              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-2">
                <span className="text-xs text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">Abrir no Google Maps</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="mt-16 pt-8 border-t border-[#2a1d1d] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#ba9c9c] text-sm text-center md:text-left">
            © 2024 Auto Escola Méier. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <FooterLink text="Política de Privacidade" />
            <FooterLink text="Termos de Uso" />
          </div>
        </div>
      </div>
    </footer>
  );
};

// Subcomponentes para limpar o código principal
const Car = ({size}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"/><circle cx="6.5" cy="16.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/></svg>
);

const SocialLink = ({ href, icon, label }) => (
  <a href={href} aria-label={label} className="w-10 h-10 rounded-full bg-[#2a1d1d] hover:bg-[#f20d0d] text-[#ba9c9c] hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-105">
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

const FooterLink = ({ text }) => (
  <a href="#" className="text-[#ba9c9c] hover:text-[#f20d0d] text-sm transition-colors relative group">
    {text}
    <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#f20d0d] transition-all group-hover:w-full"></span>
  </a>
);

export default Footer;