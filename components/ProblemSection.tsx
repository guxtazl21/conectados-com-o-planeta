
import React from 'react';
import Section from './Section';

const StatCard: React.FC<{ icon: React.ReactNode; title: string; value: string; label: string }> = ({ icon, title, value, label }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300 flex flex-col items-center">
    <div className="text-green-500 mb-3">{icon}</div>
    <p className="text-xl font-bold text-gray-700">{title}</p>
    <p className="text-4xl font-bold text-green-500 my-2">{value}</p>
    <p className="text-gray-600 text-sm">{label}</p>
  </div>
);

const LandfillIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);

const OceanIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.8 9.8l.223.223M16.2 9.8l-.223.223M12 12.828V14.5A2.5 2.5 0 0014.5 17h.035" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15s2-2 4-2 4 2 4 2 2-2 4-2 4 2 4 2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9s2-2 4-2 4 2 4 2 2-2 4-2 4 2 4 2" />
    </svg>
);

const EwasteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);


const ProblemSection: React.FC = () => {
  return (
    <Section id="problem" className="bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">O Desafio que Enfrentamos</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Nosso planeta está sofrendo com o peso de nossos resíduos. A gestão ineficiente leva a aterros superlotados, poluição dos oceanos, esgotamento de recursos e aceleração das mudanças climáticas.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatCard 
            icon={<LandfillIcon />}
            title="Aterros Superlotados"
            value="2B Toneladas" 
            label="De resíduos sólidos urbanos gerados anualmente no mundo. Grande parte acaba em aterros, contaminando solo e água." 
        />
        <StatCard 
            icon={<OceanIcon />}
            title="Poluição Plástica"
            value="91%" 
            label="De todo o plástico já produzido não foi reciclado, e cerca de 11 milhões de toneladas acabam nos oceanos a cada ano." 
        />
        <StatCard 
            icon={<EwasteIcon />}
            title="Crise do Lixo Eletrônico"
            value="50M Toneladas" 
            label="De lixo eletrônico é gerado anualmente, liberando toxinas perigosas no meio ambiente se não for descartado corretamente." 
        />
      </div>
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">A Urgência da Ação</h3>
        <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Esses números representam mais do que apenas estatísticas; eles simbolizam ecossistemas danificados, saúde pública em risco e um futuro incerto. A produção e o descarte insustentáveis de bens estão esgotando os recursos naturais do nosso planeta a um ritmo alarmante. A reciclagem não é apenas uma opção, mas uma necessidade crítica para reverter essa tendência, conservar nossos recursos preciosos e mitigar os impactos das mudanças climáticas. Cada ação conta na construção de um modelo de consumo mais consciente e circular.
        </p>
      </div>
    </Section>
  );
};

export default ProblemSection;
