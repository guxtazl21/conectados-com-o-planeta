
import React, { useState } from 'react';
import Section from './Section';
import { MapPinIcon, PhoneIcon, ClockIcon } from '../constants';

// Mock Data (Translated)
const mockCenters = [
  {
    name: "Reciclagem Vale Verde",
    address: "Rua da Reciclagem, 123, Vila Verde, 12345-000",
    phone: "(11) 91234-5678",
    hours: "Seg-Sáb: 8h - 18h",
    materials: ["Papel", "Plástico", "Vidro", "Metal"],
  },
  {
    name: "Ponto de Coleta Ecológico",
    address: "Avenida Sustentável, 456, Bela Vista, 67890-000",
    phone: "(21) 99876-5432",
    hours: "Ter-Sex: 9h - 17h",
    materials: ["Plástico", "Vidro"],
  },
  {
    name: "Recuperadora de Papel Metrópole",
    address: "Praça do Papelão, 789, Cidade Central, 54321-000",
    phone: "(31) 92345-6789",
    hours: "Seg-Sex: 7h - 16h",
    materials: ["Papel"],
  },
  {
    name: "Metais e Latas da Cidade",
    address: "Avenida Alumínio, 101, Cidade Central, 54321-000",
    phone: "(41) 93456-7890",
    hours: "Seg-Sáb: 9h - 17h",
    materials: ["Metal"],
  },
  {
    name: "Central de Reciclagem Comunitária",
    address: "Alameda da Comunidade, 210, Vila Verde, 12345-000",
    phone: "(51) 98765-4321",
    hours: "Sáb-Dom: 10h - 16h",
    materials: ["Papel", "Vidro", "Metal"],
  }
];

// Type for a recycling center
type RecyclingCenter = typeof mockCenters[0];

// Result Card sub-component
const ResultCard: React.FC<{ center: RecyclingCenter }> = ({ center }) => {
  const materialColors: { [key: string]: string } = {
    Papel: 'bg-blue-100 text-blue-800',
    Plástico: 'bg-yellow-100 text-yellow-800',
    Vidro: 'bg-green-100 text-green-800',
    Metal: 'bg-gray-200 text-gray-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500 transform hover:scale-[1.02] transition-transform duration-300">
      <h3 className="text-xl font-bold mb-3 text-gray-800">{center.name}</h3>
      <div className="space-y-2 text-gray-600">
        <p className="flex items-center"><MapPinIcon /> {center.address}</p>
        <p className="flex items-center"><PhoneIcon /> {center.phone}</p>
        <p className="flex items-center"><ClockIcon /> {center.hours}</p>
      </div>
      <div className="mt-4">
        <h4 className="font-semibold text-sm mb-2 text-gray-500">Aceita:</h4>
        <div className="flex flex-wrap gap-2">
          {center.materials.map(material => (
            <span key={material} className={`px-3 py-1 text-xs font-semibold rounded-full ${materialColors[material] || 'bg-gray-100 text-gray-800'}`}>
              {material}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Icons for the filter buttons
const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path d="M3.6 9l16.8 0" />
        <path d="M3.6 15l16.8 0" />
        <path d="M11.5 3a17 17 0 0 0 0 18" />
        <path d="M12.5 3a17 17 0 0 1 0 18" />
    </svg>
);

const FilterPaperIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5" />
        <path d="M12 12l8 -4.5" />
        <path d="M12 12v9" />
        <path d="M12 12l-8 -4.5" />
        <path d="M16 5.25l-8 4.5" />
    </svg>
);

const FilterPlasticIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M10 21h4" />
        <path d="M12 21v-14" />
        <path d="M15 3h-6a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1z" />
        <path d="M8 7l1 12.5a2.5 2.5 0 0 0 2.5 2.5h3a2.5 2.5 0 0 0 2.5 -2.5l1 -12.5" />
    </svg>
);

const FilterGlassIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M8 21l8 0" />
        <path d="M12 15l0 6" />
        <path d="M17 3l1 7c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -7h10z" />
    </svg>
);

const FilterMetalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 5h14a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1z" />
        <path d="M6 8h12" />
        <path d="M6 16h12" />
        <path d="M9 3v2" />
        <path d="M15 3v2" />
    </svg>
);

const materials = [
    { name: 'Todos', icon: <GlobeIcon /> },
    { name: 'Papel', icon: <FilterPaperIcon /> },
    { name: 'Plástico', icon: <FilterPlasticIcon /> },
    { name: 'Vidro', icon: <FilterGlassIcon /> },
    { name: 'Metal', icon: <FilterMetalIcon /> }
];

const RecyclingCenterFinder: React.FC = () => {
  const [location, setLocation] = useState('');
  const [materialFilter, setMaterialFilter] = useState('Todos');
  const [results, setResults] = useState<RecyclingCenter[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searched, setSearched] = useState(false);

  const handleGeolocation = () => {
    if (navigator.geolocation) {
      setIsLoading(true);
      setError(null);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude.toFixed(4);
          const lon = position.coords.longitude.toFixed(4);
          setLocation(`Localização Atual (${lat}, ${lon})`);
          handleSearch(undefined, "geolocation"); 
        },
        () => {
          setError("Não foi possível obter sua localização. Verifique as permissões do seu navegador.");
          setIsLoading(false);
        }
      );
    } else {
      setError("A geolocalização não é suportada pelo seu navegador.");
    }
  };

  const handleSearch = (e?: React.FormEvent, searchTrigger?: string) => {
    if (e) e.preventDefault();
    if (!location.trim() && searchTrigger !== 'geolocation') {
        setError("Por favor, insira uma localização ou use a geolocalização.");
        return;
    }
    
    setIsLoading(true);
    setError(null);
    setSearched(true);
    setResults([]);

    setTimeout(() => {
      const filteredResults = mockCenters.filter(center => 
        materialFilter === 'Todos' || center.materials.includes(materialFilter)
      );
      setResults(filteredResults);
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <Section id="finder" className="bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Encontre um Centro de Reciclagem</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Digite sua localização e selecione um material para encontrar um ponto de coleta perto de você.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <form onSubmit={handleSearch}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
            <div className="lg:col-span-3">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">CEP ou Cidade</label>
              <div className="flex gap-2">
                 <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="ex: 'São Paulo' ou '01000-000'"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition bg-white text-gray-900"
                  />
                <button type="button" onClick={handleGeolocation} className="p-3 bg-gray-200 hover:bg-gray-300 rounded-md transition" aria-label="Usar minha localização">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2c-4.418 0-8 3.582-8 8s8 14 8 14 8-9.582 8-14-3.582-8-8-8zM12 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Material</label>
              <div className="flex flex-wrap justify-center md:justify-between gap-2 items-center h-full">
                {materials.map(mat => (
                  <button
                    key={mat.name}
                    type="button"
                    onClick={() => setMaterialFilter(mat.name)}
                    className={`flex flex-col items-center justify-center p-2 rounded-lg w-20 h-20 text-center transition-all duration-300 transform hover:scale-105 ${
                      materialFilter === mat.name 
                      ? 'bg-green-500 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    aria-label={`Filtrar por ${mat.name}`}
                  >
                     <div className={materialFilter === mat.name ? 'text-white' : 'text-green-500'}>
                        {mat.icon}
                    </div>
                    <span className="text-xs font-semibold mt-1">{mat.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-500 text-white font-bold py-3 px-8 rounded-md hover:bg-green-600 disabled:bg-gray-400 transition-colors transform hover:scale-[1.02]"
          >
            {isLoading ? 'Buscando...' : 'Encontrar Centros'}
          </button>
        </form>
      </div>

      <div className="mt-12 max-w-4xl mx-auto">
        {isLoading && (
            <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-green-500"></div>
                <p className="mt-4 text-gray-600">Encontrando centros...</p>
            </div>
        )}
        {error && <p className="text-center text-red-600 bg-red-100 p-4 rounded-md font-semibold">{error}</p>}
        {!isLoading && !error && searched && (
          results.length > 0 ? (
            <div className="space-y-6">
              {results.map((center, index) => (
                <ResultCard key={index} center={center} />
              ))}
            </div>
          ) : (
             <div className="text-center py-8 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-700">Nenhum Resultado Encontrado</h3>
                <p className="text-gray-500 mt-2">Tente ajustar sua localização ou filtro de material.</p>
            </div>
          )
        )}
      </div>
    </Section>
  );
};

export default RecyclingCenterFinder;
