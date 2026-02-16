import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Gestion du scroll pour l'effet de fond
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Paroisse', path: '/paroisse' },
    { name: 'Centre de Formation', path: '/centre-formation' },
    { name: 'Collège & Lycée', path: '/college-lycee' },
    { name: 'Oratorio', path: '/oratorio' },
    { name: 'Pastorale', path: '/pastorale' },
    { name: 'ONG', path: '/ong' },
    { name: 'Actualités', path: '/actualites' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 border-b ${scrolled
        ? 'bg-slate-900/80 backdrop-blur-md border-white/10 py-3 shadow-lg'
        : 'bg-transparent border-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo & Marque */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-white rounded-full -hover:bg-white/30 transition-all" />
            <img
              src="/logo/logo.png"
              alt="Logo"
              className="relative h-10 w-auto rounded-full bg-white/10 p-0.5 backdrop-blur-sm border border-white/20"
            />
          </div>
        </Link>

        {/* Desktop Menu - Clean & Minimalist */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="relative group py-2"
            >
              <span className={`text-sm font-medium transition-colors duration-300 ${location.pathname === link.path
                ? 'text-white'
                : 'text-white/70 group-hover:text-white'
                }`}>
                {link.name}
              </span>
              {/* Ligne animée au survol */}
              <span className={`absolute bottom-0 left-0 h-[2px] bg-yellow-400 transition-all duration-300 ease-out ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
            </Link>
          ))}

          {/* Bouton CTA discret */}
          <Link
            to="/contact"
            className="ml-4 px-5 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-slate-900 text-sm font-semibold transition-all duration-300 border border-white/20 backdrop-blur-sm"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-white/80 hover:text-white p-2 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay - Smooth Slide */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-slate-900 border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-white/80 hover:text-white text-lg font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-3 rounded-lg bg-white text-slate-900 font-bold"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
