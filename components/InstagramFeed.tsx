
import React from 'react';
import Section from './Section';

const mockPosts = [
  {
    id: 1,
    caption: 'Dia incrível de mutirão de limpeza na Praia da Costa! Juntos, removemos mais de 100kg de resíduos. Agradecemos a todos os voluntários!',
    likes: 124,
    comments: 15,
  },
  {
    id: 2,
    caption: 'Nossa oficina de compostagem foi um sucesso! Aprender a transformar resíduos orgânicos em adubo é um passo poderoso para um futuro mais verde.',
    likes: 231,
    comments: 22,
  },
  {
    id: 3,
    caption: 'Você sabia que uma única lata de alumínio reciclada economiza energia suficiente para manter uma TV ligada por 3 horas? Pequenos gestos, grande impacto!',
    likes: 302,
    comments: 35,
  },
  {
    id: 4,
    caption: 'Parabéns à Cooperativa de Catadores do Bairro da Penha pelo trabalho incansável. Eles são os verdadeiros heróis da reciclagem!',
    likes: 189,
    comments: 18,
  },
  {
    id: 5,
    caption: 'Hoje foi dia de visita educativa na escola Monteiro Lobato. As crianças aprenderam sobre a separação correta dos resíduos de forma lúdica e divertida.',
    likes: 255,
    comments: 29,
  },
  {
    id: 6,
    caption: 'Junte-se a nós! Estamos sempre em busca de voluntários para nossas ações. Sua ajuda faz toda a diferença. Link na bio!',
    likes: 158,
    comments: 12,
  },
];

const InstagramPostCard: React.FC<{ post: typeof mockPosts[0] }> = ({ post }) => (
  <a
    href="https://www.instagram.com/reciclacapixaba"
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-white rounded-lg shadow-md p-6 h-full flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
    aria-label={`Ver post no Instagram: ${post.caption}`}
  >
    <p className="text-gray-700 mb-4 flex-grow">
      {post.caption}
    </p>
    <div className="flex items-center space-x-4 text-gray-500 border-t pt-3 mt-4">
      <div className="flex items-center space-x-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
        <span className="font-bold text-sm">{post.likes}</span>
      </div>
      <div className="flex items-center space-x-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.839 8.839 0 01-4.083-.982A.5.5 0 005 16.516v.484a1 1 0 001.268.961 10.01 10.01 0 004.732-1.464A8.995 8.995 0 0018 10zm-8-9a7 7 0 01.944 13.053A2.001 2.001 0 0011 15.543V14c0-1.103.896-2 2-2h.543a7.001 7.001 0 004.457-11.944A7.001 7.001 0 0010 1z" clipRule="evenodd" />
        </svg>
        <span className="font-bold text-sm">{post.comments}</span>
      </div>
    </div>
  </a>
);

const InstagramFeed: React.FC = () => {
  return (
    <Section id="instagram" className="bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossas Ações no Instagram</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Acompanhe nosso trabalho e participe das nossas iniciativas. Siga{' '}
          <a href="https://www.instagram.com/reciclacapixaba" target="_blank" rel="noopener noreferrer" className="text-green-500 font-bold hover:underline">
            @reciclacapixaba
          </a>{' '}
          e faça parte da mudança!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mockPosts.map((post) => (
          <InstagramPostCard key={post.id} post={post} />
        ))}
      </div>
      <div className="text-center mt-12">
        <a 
          href="https://www.instagram.com/reciclacapixaba"
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 inline-flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.149-4.771-1.664-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.585.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667 0 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"></path>
          </svg>
          Seguir no Instagram
        </a>
      </div>
    </Section>
  );
};

export default InstagramFeed;
