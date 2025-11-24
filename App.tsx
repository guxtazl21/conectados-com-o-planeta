
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ImpactSection from './components/ImpactSection';
import ActionableSteps from './components/ActionableSteps';
import RecycleAssistant from './components/RecycleAssistant';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ImpactSection />
        <ActionableSteps />
        <RecycleAssistant />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
};

export default App;