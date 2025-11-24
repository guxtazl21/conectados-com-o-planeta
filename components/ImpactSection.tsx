import React from 'react';
import Section from './Section';
import ImpactCard from './ImpactCard';

const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const DollarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.284-1.255-.758-1.684M12 15M12 15v-6m0 6H9m3 0h3m-3 0a3 3 0 100-6 3 3 0 000 6z" />
  </svg>
);

const ImpactSection: React.FC = () => {
  return (
    <Section id="impact" className="bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">O Efeito Cascata da Reciclagem</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Cada item reciclado contribui para um planeta mais saudável, uma economia mais forte e uma sociedade mais justa.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="animate-fade-in-up" style={{ animationDelay: '200ms', opacity: 0 }}>
          <ImpactCard
            icon={<LeafIcon />}
            title="Preservação Ambiental"
            description="Reduz drasticamente os resíduos em aterros, conserva recursos naturais finitos, economiza energia e diminui as emissões de gases de efeito estufa, combatendo diretamente as mudanças climáticas."
          />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '400ms', opacity: 0 }}>
          <ImpactCard
            icon={<DollarIcon />}
            title="Crescimento Econômico"
            description="Fornece um fluxo constante de matérias-primas para a indústria, reduz os custos de fabricação e promove a inovação no crescente setor da economia circular."
          />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '600ms', opacity: 0 }}>
          <ImpactCard
            icon={<UsersIcon />}
            title="Inclusão Social e Dignidade"
            description="Fortalece as cooperativas de catadores de materiais recicláveis, garantindo um fluxo consistente de materiais, o que se traduz em renda estável, condições de trabalho mais seguras e inclusão social para milhares de trabalhadores."
          />
        </div>
      </div>
    </Section>
  );
};

export default ImpactSection;