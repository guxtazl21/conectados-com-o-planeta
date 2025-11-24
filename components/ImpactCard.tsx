
import React, { ReactNode } from 'react';

interface ImpactCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ImpactCard: React.FC<ImpactCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-start h-full">
      <div className="bg-green-100 text-green-600 p-3 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default ImpactCard;
