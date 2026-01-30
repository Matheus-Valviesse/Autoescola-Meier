import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Bike, ShieldCheck, CheckCircle2, Star, MousePointerClick } from 'lucide-react';

const categories = [
  { id: 'cat-b', label: '1ª Habilitação Carro (B)', icon: Car },
  { id: 'cat-a', label: '1ª Habilitação Moto (A)', icon: Bike },
  { id: 'cat-ab', label: 'Carro e Moto (AB)', icon: ShieldCheck },
  { id: 'add-b', label: 'Adição de Carro', icon: Car },
  { id: 'add-a', label: 'Adição de Moto', icon: Bike },
];

// DADOS ESTRITAMENTE BASEADOS NOS PDFS ENVIADOS
const plansData = {
  'cat-b': [ // Fonte: PRIMEIRA HABILITAÇÃO DE CARRO – CAT. B.pdf
    {
      name: "Básico",
      priceCash: "300,00",
      priceInstallment: "400,00",
      installments: 2,
      features: ["2 Aulas Práticas", "Aluguel do veículo GRÁTIS"],
      highlight: false
    },
    {
      name: "Intermediário",
      priceCash: "650,00",
      priceInstallment: "800,00",
      installments: 4,
      features: ["5 Aulas Práticas", "Aluguel do veículo GRÁTIS"],
      highlight: true
    },
    {
      name: "Complementar",
      priceCash: "1.300,00",
      priceInstallment: "1.500,00",
      installments: 10,
      features: ["10 Aulas Práticas", "Aluguel do veículo GRÁTIS"],
      highlight: false
    }
  ],
  'cat-a': [ // Fonte: PRIMEIRA HABILITAÇÃO DE MOTO – CAT. A .pdf (Preços idênticos à Cat B)
    {
      name: "Básico",
      priceCash: "300,00",
      priceInstallment: "400,00",
      installments: 2,
      features: ["2 Aulas Práticas", "Aluguel do veículo GRÁTIS"],
      highlight: false
    },
    {
      name: "Intermediário",
      priceCash: "650,00",
      priceInstallment: "800,00",
      installments: 4,
      features: ["5 Aulas Práticas", "Aluguel do veículo GRÁTIS"],
      highlight: true
    },
    {
      name: "Complementar",
      priceCash: "1.300,00",
      priceInstallment: "1.500,00",
      installments: 10,
      features: ["10 Aulas Práticas", "Aluguel do veículo GRÁTIS"],
      highlight: false
    }
  ],
  'cat-ab': [ // Fonte: PRIMEIRA HABILITAÇÃO DE MOTO E CARRO – CAT. AB (1).pdf
    {
      name: "Básico",
      priceCash: "600,00",
      priceInstallment: "800,00",
      installments: 4,
      features: ["4 Aulas Práticas", "Aluguel do 1º veículo GRÁTIS"],
      highlight: false
    },
    {
      name: "Intermediário",
      priceCash: "1.300,00",
      priceInstallment: "1.500,00",
      installments: 10,
      features: ["10 Aulas Práticas", "Aluguel do 1º veículo GRÁTIS"],
      highlight: true
    },
    {
      name: "Complementar",
      priceCash: "1.799,00",
      priceInstallment: "1.900,00",
      installments: 10,
      features: ["20 Aulas Práticas", "Aluguel do 1º veículo GRÁTIS"],
      highlight: false
    }
  ],
  'add-b': [ // Fonte: ADIÇÃO DE CATEGORIA CARRO – CAT. B (1).pdf
    {
      name: "Básico",
      priceCash: "300,00",
      priceInstallment: "400,00",
      installments: 2,
      features: ["2 Aulas Práticas", "Aluguel do veículo GRÁTIS"],
      highlight: false
    },
    {
      name: "Intermediário",
      priceCash: "650,00",
      priceInstallment: "800,00",
      installments: 4,
      features: ["4 Aulas Práticas", "Aluguel do veículo GRÁTIS"],
      highlight: true
    },
    {
      name: "Complementar",
      priceCash: "1.300,00",
      priceInstallment: "1.500,00",
      installments: 10,
      features: ["10 Aulas Práticas", "Aluguel do veículo GRÁTIS"],
      highlight: false
    }
  ],
  'add-a': [ // Fonte: ADIÇÃO DE CATEGORIA MOTO – CAT. A.pdf
    {
      name: "Básico",
      priceCash: "300,00",
      priceInstallment: "400,00",
      installments: 2,
      features: ["2 Aulas Práticas", "Aluguel do veículo GRÁTIS"],
      highlight: false
    },
    {
      name: "Intermediário",
      priceCash: "650,00",
      priceInstallment: "800,00",
      installments: 4,
      features: ["4 Aulas Práticas", "Aluguel do veículo GRÁTIS"],
      highlight: true
    },
    {
      name: "Complementar",
      priceCash: "1.300,00",
      priceInstallment: "1.500,00",
      installments: 10,
      features: ["10 Aulas Práticas", "Aluguel do veículo GRÁTIS"],
      highlight: false
    }
  ]
};

const PlanosSection = () => {
  const [activeTab, setActiveTab] = useState('cat-b');

  const getParcela = (totalString, numParcelas) => {
    const total = parseFloat(totalString.replace('.', '').replace(',', '.'));
    const parcela = total / numParcelas;
    return parcela.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const handlePlanClick = (planName) => {
    const categoryLabel = categories.find(c => c.id === activeTab)?.label;
    const message = `Olá! Vim pelo site. Gostaria de saber mais sobre o plano *${planName}* de *${categoryLabel}*.`;
    const link = `https://wa.me/5521971388736?text=${encodeURIComponent(message)}`;
    window.open(link, '_blank');
  };

  return (
    <section className="w-full py-20 px-4 md:px-10 lg:px-40 bg-[#f8f5f5] text-[#181111]" id="planos">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        
        {/* Cabeçalho */}
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

        {/* Navegação de Abas */}
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

        {/* Grid de Planos */}
        <AnimatePresence mode='wait'>
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {plansData[activeTab].map((plan, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col bg-white rounded-3xl p-8 border transition-all duration-300 group ${
                  plan.highlight 
                    ? 'border-[#f20d0d] shadow-2xl shadow-[#f20d0d]/10 md:-mt-4 md:mb-4 z-10' 
                    : 'border-gray-100 shadow-lg hover:border-[#f20d0d]/30'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f20d0d] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1 shadow-md whitespace-nowrap">
                    <Star size={12} fill="white" /> Recomendado
                  </div>
                )}

                <div className="mb-6 text-center">
                  <h3 className="text-xl font-bold text-[#181111] mb-4">{plan.name}</h3>
                  
                  {/* Preço à vista */}
                  <div className="flex flex-col items-center justify-center bg-[#f8f5f5] rounded-xl p-4 mb-4">
                    <span className="text-xs text-[#634f4f] uppercase font-bold mb-1">À Vista</span>
                    <div className="flex items-baseline gap-1 text-[#181111]">
                      <span className="text-sm font-medium">R$</span>
                      <span className="text-4xl font-black tracking-tight">{plan.priceCash}</span>
                    </div>
                  </div>

                  {/* Preço Parcelado */}
                  <div className="text-sm text-[#634f4f]">
                    ou <span className="font-bold text-[#181111]">{plan.installments}x</span> de <span className="font-bold text-[#f20d0d] text-lg">R$ {getParcela(plan.priceInstallment, plan.installments)}</span>
                    <div className="text-xs opacity-70 mt-1">(Total a prazo: R$ {plan.priceInstallment})</div>
                  </div>
                </div>

                {/* Lista de Benefícios */}
                <div className="flex-1">
                  <div className="h-px w-full bg-gray-100 mb-6"></div>
                  <ul className="flex flex-col gap-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-[#181111]/80">
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
                    ? 'bg-[#f20d0d] text-white hover:bg-red-700 shadow-lg shadow-[#f20d0d]/25 hover:shadow-xl hover:scale-[1.02]'
                    : 'bg-[#181111] text-white hover:bg-gray-900 hover:scale-[1.02]'
                }`}>
                  Quero este plano
                  <MousePointerClick size={18} />
                </button>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Nota de Rodapé da Seção */}
        <div className="text-center space-y-2 mt-4">
          <p className="text-xs text-[#8a6060] max-w-3xl mx-auto">
            * Taxas estaduais (DUDA) e exames da clínica não estão inclusos.
            <br />
            ** No plano AB, apenas o primeiro veículo tem aluguel grátis para o exame.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PlanosSection;