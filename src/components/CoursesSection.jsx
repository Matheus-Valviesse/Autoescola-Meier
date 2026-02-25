import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Bike, ShieldCheck, CheckCircle2, Star, MousePointerClick, Loader2 } from 'lucide-react';
import { GiRibbonMedal } from "react-icons/gi";

const categories = [
  { id: 'cat-b', label: '1ª Habilitação Carro (B)', icon: Car },
  { id: 'cat-a', label: '1ª Habilitação Moto (A)', icon: Bike },
  { id: 'cat-ab', label: 'Carro e Moto (AB)', icon: ShieldCheck },
  { id: 'add-b', label: 'Adição de Carro', icon: Car },
  { id: 'add-a', label: 'Adição de Moto', icon: Bike },
];

const processarDadosDaPlanilha = (dadosPlanilha) => {
  const novoFormato = {};
  dadosPlanilha.forEach(item => {
    if (!novoFormato[item.id_categoria]) novoFormato[item.id_categoria] = [];
    novoFormato[item.id_categoria].push({
      name: item.nome_plano,
      priceCash: item.preco_a_vista,
      priceInstallment: item.preco_parcelado,
      installments: item.qtd_parcelas, 
      highlight: String(item.destaque).toLowerCase() === 'true',
      features: item.beneficios ? item.beneficios.split(' | ') : []
    });
  });
  return novoFormato;
};

const parseValue = (val) => {
  if (typeof val === 'number') return val;
  if (typeof val === 'string') {
    if (val.includes(',')) {
      return parseFloat(val.replace(/\./g, '').replace(',', '.'));
    }
    return parseFloat(val) || 0;
  }
  return 0;
};

const getPlanStyle = (name) => {
  const planName = name?.toLowerCase() || '';
  if (planName.includes('bronze')) return { color: '#CD7F32' }; 
  if (planName.includes('prata')) return { color: '#C0C0C0' };
  if (planName.includes('ouro')) return { color: '#FFD700' };
  return { color: '#f20d0d' }; 
};

const PlanosSection = () => {
  const [plans, setPlans] = useState('');
  const [activeTab, setActiveTab] = useState('cat-b');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const CACHE_KEY = 'precos_autoescola';
    const CACHE_TIME = 10 * 60 * 60; 
    const API_URL = import.meta.env.VITE_API_LINK; 

    const fetchPrecos = async () => {
      setIsLoading(true);
      let dadosParaExibir = null;
      const cachedRaw = localStorage.getItem(CACHE_KEY);
      
      if (cachedRaw) {
        const { data, timestamp } = JSON.parse(cachedRaw);
        const isCacheValido = (Date.now() - timestamp) < CACHE_TIME;

        if (isCacheValido) {
          setPlans(processarDadosDaPlanilha(data));
          setIsLoading(false);
          return;
        }
        dadosParaExibir = data; 
      }

      try {
        if (!API_URL) return; 
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Erro na resposta da API');
        
        const data = await response.json();
        localStorage.setItem(CACHE_KEY, JSON.stringify({ data: data, timestamp: Date.now() }));
        setPlans(processarDadosDaPlanilha(data));

      } catch (error) {
        console.error("Erro ao buscar API...", error);
        if (dadosParaExibir) {
          setPlans(processarDadosDaPlanilha(dadosParaExibir));
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrecos();
  }, []);

  const formatCurrency = (val) => {
    const numberVal = parseValue(val);
    return numberVal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const handlePlanClick = (planName) => {
    const categoryLabel = categories.find(c => c.id === activeTab)?.label;
    const message = `Olá! Vim pelo site. Gostaria de saber mais sobre o plano *${planName}* de *${categoryLabel}*.`;
    const link = `https://wa.me/5521971388736?text=${encodeURIComponent(message)}`;
    window.open(link, '_blank');
  };

  const currentPlans = plans[activeTab] || [];

  return (
    <section className="w-full py-20 px-4 md:px-10 lg:px-20 bg-[#f8f5f5] text-[#181111]" id="planos">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12">
        
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-[#f20d0d] font-bold text-sm uppercase tracking-wider bg-[#f20d0d]/10 px-4 py-2 rounded-full">
            Investimento
          </span>
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            Planos que cabem no <span className="text-[#f20d0d]">seu bolso</span>
          </h2>
          <p className="text-[#634f4f] text-lg max-w-[600px]">
            Escolha a categoria desejada abaixo para ver os pacotes disponíveis.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-sm ${
                activeTab === cat.id 
                  ? 'bg-[#f20d0d] text-white shadow-[#f20d0d]/30 scale-105 ring-2 ring-[#f20d0d] ring-offset-2' 
                  : 'bg-white text-[#181111] border border-gray-200 hover:border-[#f20d0d] hover:text-[#f20d0d]'
              }`}
            >
              <cat.icon size={18} />
              {cat.label}
            </button>
          ))}
        </div>

        <div className="min-h-[400px]">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-full pt-10">
              <Loader2 className="w-12 h-12 text-[#f20d0d] animate-spin mb-4" />
              <p className="text-[#634f4f] font-medium animate-pulse">Buscando as melhores ofertas...</p>
            </div>
          ) : (
            <AnimatePresence mode='wait'>
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 pt-12" // pt-12 adicionado para dar espaço pro card que "pula"
              >
                {currentPlans.map((plan, index) => (
                  <div 
                    key={index} 
                    /* MÁGICA DO DESTAQUE: Borda muito mais grossa (border-4), sombra vermelha forte e sobe bastante (-translate-y-6) */
                    className={`relative flex flex-col bg-white rounded-3xl p-6 transition-all duration-300 group ${
                      plan.highlight 
                        ? 'border-4 border-[#f20d0d] shadow-[0_20px_50px_rgba(242,13,13,0.25)] transform md:-translate-y-6 z-10' 
                        : 'border border-gray-200 shadow-md hover:border-[#f20d0d]/40 mt-2 hover:-translate-y-1'
                    }`}
                  >
                    
                    {/* Medalha vazando, AGORA EXCETO NO COBRE */}
                    {plan.name.toLowerCase() !== 'cobre' && (
                      <div className="absolute -top-8 -right-4 md:-right-6 z-20 transform rotate-12 drop-shadow-xl transition-transform duration-300 hover:scale-110 hover:rotate-6">
                        <GiRibbonMedal 
                          size={76} 
                          color={getPlanStyle(plan.name).color} 
                          className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]"
                        />
                      </div>
                    )}

                    {/* Tag de "MAIS POPULAR" chamativa e pulsando */}
                    {plan.highlight && (
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#f20d0d] text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest flex items-center gap-2 shadow-xl whitespace-nowrap z-30 animate-bounce">
                        <Star size={16} fill="white" className="animate-pulse" /> MAIS POPULAR
                      </div>
                    )}

                    <div className="mb-6 text-center mt-6">
                      <h3 className="text-2xl font-black text-[#181111] mb-4 uppercase tracking-wide">
                        {plan.name}
                      </h3>
                      
                      <div className="flex flex-col items-center justify-center bg-[#f8f5f5] rounded-xl p-4 mb-4">
                        <span className="text-xs text-[#634f4f] uppercase font-bold mb-1">À Vista</span>
                        <div className="flex items-baseline gap-1 text-[#181111]">
                          <span className="text-sm font-medium">R$</span>
                          <span className="text-4xl font-black tracking-tight">{formatCurrency(plan.priceCash)}</span>
                        </div>
                      </div>

                      <div className="text-sm text-[#634f4f] min-h-[40px] flex items-center justify-center flex-col">
                        <span className="font-bold text-[#f20d0d] whitespace-pre-line text-center">
                          {plan.installments || `ou R$ ${plan.priceInstallment} parcelado`}
                        </span>
                        <span className="text-xs font-bold uppercase mt-1">No Cartão</span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="h-px w-full bg-gray-100 mb-6"></div>
                      <ul className="flex flex-col gap-4 mb-8">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-[#181111]/80 font-medium">
                            <CheckCircle2 className="text-[#f20d0d] shrink-0" size={18} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button 
                      onClick={() => handlePlanClick(plan.name)}
                      className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                      plan.highlight
                        ? 'bg-[#f20d0d] text-white hover:bg-red-700 shadow-lg shadow-[#f20d0d]/30 hover:shadow-xl hover:scale-105'
                        : 'bg-[#181111] text-white hover:bg-gray-900 hover:scale-[1.02]'
                    }`}>
                      Quero este plano
                      <MousePointerClick size={18} />
                    </button>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        <div className="text-center space-y-2 mt-4">
          <p className="text-xs text-[#8a6060] max-w-3xl mx-auto font-medium">
            * Taxas estaduais (DUDA) e exames da clínica não estão inclusos.
            <br />
            ** Consulte condições de parcelamento. No plano AB, apenas o primeiro veículo tem aluguel grátis para o exame.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PlanosSection;