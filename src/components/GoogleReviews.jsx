import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ExternalLink, Heart } from 'lucide-react';
import reviewsData from '../data/reviews.json'; // Certifique-se que o caminho está correto

const GoogleReviews = () => {
  // Estado para controlar qual "página" de reviews estamos vendo
  const [currentIndex, setIndex] = useState(0);
  const itemsPerPage = 3;

  // Lógica de Rotação Automática (20 segundos)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => {
        // Se chegar no fim da lista, volta para o começo (0)
        const nextIndex = prevIndex + itemsPerPage;
        return nextIndex >= reviewsData.length ? 0 : nextIndex;
      });
    }, 20000); // 20000ms = 20 segundos

    return () => clearInterval(timer); // Limpa o timer se o componente desmontar
  }, []);

  // Pega apenas os 3 reviews atuais baseados no índice
  const currentReviews = reviewsData.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="bg-[#f8f5f5] py-20 px-4 md:px-10 lg:px-20 border-t border-gray-200 relative overflow-hidden">
      
      {/* Detalhes de Fundo */}
      <div className="absolute -left-20 top-20 w-64 h-64 bg-[#f20d0d]/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-[1280px] mx-auto relative z-10">
        
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f20d0d]/20 bg-white px-4 py-1.5 shadow-sm">
            <Heart className="text-[#f20d0d] fill-[#f20d0d]" size={14} />
            <span className="text-xs font-bold text-[#f20d0d] uppercase tracking-wide">Quem faz, recomenda</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-[#181111]">
            O que nossos alunos <span className="text-[#f20d0d]">dizem</span>
          </h2>
          <p className="text-lg text-[#8a6060] max-w-2xl">
            Aprovação de primeira e instrutores pacientes. Veja a experiência real de quem tirou a CNH com a gente.
          </p>
        </div>

        {/* Grid de Reviews com Animação de Troca */}
        <div className="min-h-[300px]"> {/* Altura mínima para evitar pulos layout */}
          <AnimatePresence mode='wait'>
            <motion.div 
              key={currentIndex} // A chave mudando força a animação de saída/entrada
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentReviews.map((review, idx) => (
                <div 
                  key={`${currentIndex}-${idx}`}
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={`${i < review.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <Quote className="text-[#f20d0d]/10" size={32} />
                    </div>
                    
                    <p className="text-[#181111]/80 text-sm leading-relaxed mb-6 font-medium italic line-clamp-4">
                      "{review.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100 mt-auto">
                    {/* Avatar Lógica */}
                    {review.image ? (
                       <img 
                       src={review.image} 
                       alt={review.name} 
                       loading="lazy" 
                       className="h-10 w-10 rounded-full object-cover border border-gray-200"
                       // Fallback se a imagem quebrar
                       onError={(e) => {
                         e.target.style.display = 'none';
                         e.target.nextSibling.style.display = 'flex';
                       }}
                     />
                    ) : null}
                    
                    {/* Fallback Avatar (Inicial) - Mostra se não tiver imagem ou se ela quebrar */}
                    <div 
                      className="h-10 w-10 rounded-full bg-gradient-to-tr from-[#f20d0d] to-orange-500 flex items-center justify-center text-white font-bold text-sm shadow-md"
                      style={{ display: review.image ? 'none' : 'flex' }}
                    >
                      {review.name.charAt(0)}
                    </div>
                    
                    <div className="flex flex-col">
                      <h4 className="font-bold text-[#181111] text-sm">{review.name}</h4>
                      <div className="flex items-center gap-1">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="G" className="w-3 h-3" />
                        <span className="text-xs text-gray-500">Google Review</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <a 
            href="https://www.google.com/search?sca_esv=75292d05ed8192ec&sxsrf=ANbL-n5vPwQifIOmbfVcsMyQmOnZkrBa6g:1769795454161&si=AL3DRZHrmvnFAVQPOO2Bzhf8AX9KZZ6raUI_dT7DG_z0kV2_x1ktskuxNJ2O-CbyJ5KGsSCotzlHFPhGKZkK1fKMLKmau0Hsmh2McuSdvz44Mx7OMxj9VcbLSvVZeUdmrs1tLL1FdoN8Ij23H7KZX4Mhfa-8LzKejw%3D%3D&q=Auto+Escola+M%C3%A9ier+Cr%C3%ADticas&sa=X&ved=2ahUKEwjd9vrq6bOSAxV4rpUCHfsQOm4Q0bkNegQINhAF&biw=1920&bih=911&dpr=1&aic=0" // Coloque o link real do Google Maps da autoescola aqui
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-[#e6dbdb] rounded-full text-[#181111] font-bold hover:bg-[#f8f5f5] hover:border-[#f20d0d] transition-all group shadow-sm"
          >
            Ver todas as avaliações no Google
            <ExternalLink className="group-hover:translate-x-1 transition-transform text-[#f20d0d]" size={18} />
          </a>
        </motion.div>
        
      </div>
    </section>
  );
};

export default GoogleReviews;