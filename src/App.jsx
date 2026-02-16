import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Paroisse from './pages/Paroisse';
import CentreFormation from './pages/CentreFormation';
import CollegeLycee from './pages/CollegeLycee';

import Oratorio from './pages/Oratorio';

import Pastorale from './pages/Pastorale';

import Ong from './pages/Ong';

import Actualites from './pages/Actualites';

import Contact from './pages/Contact';

// Placeholder components for other pages
const PlaceholderPage = ({ title }) => (
  <div className="pt-32 pb-20 container min-h-[60vh] text-center">
    <h1 className="text-4xl font-bold text-primary mb-6">{title}</h1>
    <p className="text-xl text-gray-600">Cette page est en cours de construction.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/paroisse" element={<Paroisse />} />
            <Route path="/centre-formation" element={<CentreFormation />} />
            <Route path="/college-lycee" element={<CollegeLycee />} />
            <Route path="/foyer-immaculee" element={<PlaceholderPage title="Foyer Immaculée" />} />
            <Route path="/foyer-jean-paul-ii" element={<PlaceholderPage title="Foyer Jean Paul II" />} />
            <Route path="/oratorio" element={<Oratorio />} />
            <Route path="/pastorale" element={<Pastorale />} />
            <Route path="/ong" element={<Ong />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/autres" element={<PlaceholderPage title="Autres" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
