import React from 'react';
import Section from './Section';
import { PaperIcon, PlasticIcon, GlassIcon, MetalIcon } from '../constants';

const MaterialCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
    {icon}
    <h3 className="text-2xl font-bold mt-4 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const SolutionSection: React.FC = () => {
  return (
    <Section id="solution">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Uma Solução Poderosa e Coletiva</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Ao separar corretamente nossos resíduos, liberamos um valor imenso, conservamos recursos e impulsionamos uma economia circular. Tudo começa com quatro materiais principais.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <MaterialCard 
          icon={<PaperIcon />} 
          title="Papel e Papelão"
          description="De jornais a embalagens, a reciclagem de papel salva milhões de árvores e reduz o consumo de água e energia." 
        />
        <MaterialCard 
          icon={<PlasticIcon />} 
          title="Plásticos"
          description="A reciclagem de plástico minimiza o uso de aterros e a poluição dos oceanos, transformando resíduos em produtos novos e duráveis." 
        />
        <MaterialCard 
          icon={<GlassIcon />} 
          title="Vidro"
          description="O vidro pode ser reciclado infinitamente sem perda de qualidade, reduzindo drasticamente o uso de energia em comparação com a produção nova." 
        />
        <MaterialCard 
          icon={<MetalIcon />} 
          title="Metais"
          description="A reciclagem de metais como alumínio e aço economiza até 95% da energia necessária para produzi-los a partir de matérias-primas." 
        />
      </div>
    </Section>
  );
};

export default SolutionSection;