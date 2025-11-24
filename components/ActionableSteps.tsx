import React from 'react';
import Section from './Section';

interface Step {
  title: string;
  description: string;
}

interface ActionGroupProps {
  title: string;
  steps: Step[];
  image: string;
}

const ActionGroup: React.FC<ActionGroupProps> = ({ title, steps, image }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row items-center">
    <img src={image} alt={title} className="w-full md:w-1/3 h-48 md:h-full object-cover" />
    <div className="p-8">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <ul className="space-y-3">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span><strong>{step.title}:</strong> {step.description}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);


const ActionableSteps: React.FC = () => {
  const individualSteps: Step[] = [
    { title: "Separe na Fonte", description: "Tenha lixeiras identificadas em casa para papel, plástico, vidro e metal." },
    { title: "Conheça as Regras Locais", description: "Verifique as diretrizes do seu município sobre o que pode e o que não pode ser reciclado." },
    { title: "Reduza e Reutilize", description: "Antes de reciclar, pense em como você pode reduzir o consumo e reutilizar os itens." },
  ];

  const companySteps: Step[] = [
    { title: "Implemente Programas", description: "Estabeleça um programa de reciclagem abrangente no escritório com sinalização clara." },
    { title: "Compras Sustentáveis", description: "Escolha fornecedores que utilizam materiais reciclados e oferecem programas de logística reversa." },
    { title: "Eduque os Colaboradores", description: "Realize workshops para engajar sua equipe e promover uma cultura de sustentabilidade." },
  ];

  return (
    <Section id="action">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Você Pode Ajudar</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          A mudança começa com cada um de nós. Seja você um indivíduo ou uma empresa, suas ações importam.
        </p>
      </div>
      <div className="space-y-12">
        <ActionGroup title="Para Pessoas" steps={individualSteps} image="https://picsum.photos/600/400?people,home" />
        <ActionGroup title="Para Empresas" steps={companySteps} image="https://picsum.photos/600/400?business,office" />
      </div>
    </Section>
  );
};

export default ActionableSteps;