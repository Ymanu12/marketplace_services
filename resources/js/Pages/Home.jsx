import React from 'react';
import './Home.css';
// Composants internes simplifiés pour la démo
const Navbar = () => (
  <nav className="flex justify-between items-center py-5 px-10 bg-white border-b">
    <div className="text-3xl font-bold text-slate-800">fiverr<span className="text-green-500">.</span></div>
    <div className="space-x-6 font-semibold text-gray-600">
      <span className="cursor-pointer hover:text-green-500">Fiverr Pro</span>
      <span className="cursor-pointer hover:text-green-500">Explorer</span>
      <span className="cursor-pointer hover:text-green-500">Devenir prestataire</span>
      <button className="px-5 py-2 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white transition">S'inscrire</button>
    </div>
  </nav>
);

const Hero = () => (
  <div className="bg-green-900 text-white py-20 px-10 flex items-center">
    <div className="w-1/2">
      <h1 className="text-5xl font-bold leading-tight mb-6">
        Trouvez les services <span className="italic font-serif">freelance</span> parfaits pour votre entreprise
      </h1>
      <div className="flex bg-white rounded-md overflow-hidden w-full max-w-xl">
        <input 
          type="text" 
          placeholder='Essayez "création de logo"' 
          className="p-4 flex-grow text-gray-800 outline-none"
        />
        <button className="bg-green-500 px-8 py-4 font-bold hover:bg-green-600 transition">Rechercher</button>
      </div>
      <div className="mt-6 flex gap-3 items-center">
        <span className="text-sm font-semibold">Populaire :</span>
        {['Site Web', 'WordPress', 'Logo', 'IA'].map(tag => (
          <span key={tag} className="border border-white rounded-full px-3 py-1 text-sm hover:bg-white hover:text-green-900 cursor-pointer">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const TrustedBy = () => (
  <div className="bg-gray-100 py-4 flex justify-center items-center gap-10 text-gray-400 font-bold">
    <span>Approuvé par :</span>
    <span className="text-xl">Meta</span>
    <span className="text-xl">Google</span>
    <span className="text-xl">Netflix</span>
    <span className="text-xl">P&G</span>
    <span className="text-xl">PayPal</span>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <TrustedBy />
      
      {/* Section Catégories */}
      <section className="py-20 px-10">
        <h2 className="text-3xl font-bold text-gray-700 mb-10">Parcourez les catégories</h2>
        <div className="grid grid-cols-5 gap-6">
          {['Graphisme', 'Marketing', 'Rédaction', 'Vidéo', 'Musique'].map((cat) => (
            <div key={cat} className="border p-6 rounded-lg shadow-sm hover:shadow-md cursor-pointer transition flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full mb-4"></div>
              <span className="font-semibold">{cat}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;