import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-white text-center" style={{ backgroundImage: `url('https://picsum.photos/1600/900?nature,water')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="relative z-10 p-6">
        <h2 className="text-2xl md:text-4xl font-bold text-green-400 mb-4 uppercase tracking-wider animate-fade-in-up" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
          Conectados com o Planeta
        </h2>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-down" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
          Transforme Consciência em Ação
        </h1>
        <p className="text-xl md:text-3xl max-w-4xl mx-auto mb-8 animate-fade-in-up" style={{animationDelay: '0.5s', textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
          Junte-se ao movimento para tornar a reciclagem um hábito e construir um futuro sustentável para todos.
        </p>
      </div>
    </section>
  );
};

export default Hero;