import React from 'react';
import { Facebook, Phone, Mail, MapPin } from 'lucide-react';
import '../index.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-white pt-20 pb-8 mt-auto border-t border-white/10">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 pb-16 border-b border-white/10">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <img src="/logo/logo.png" alt="Logo" className="h-12 w-auto" />
                        </div>
                        <p className="text-white/60 leading-relaxed max-w-md font-light mb-8">
                            Une communauté de religieux engagée pour l'éducation, l'évangélisation et l'épanouissement de la jeunesse au Togo.
                        </p>
                        <div className="flex gap-3">
                            <a href="https://www.facebook.com/Paroisse.JBK/" target="_blank" rel="noreferrer"
                                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="https://wa.me/70239862" target="_blank" rel="noreferrer"
                                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors">
                                <Phone size={18} />
                            </a>
                            <a href="https://www.tiktok.com/@paroisse.saint.je4" target="_blank" rel="noreferrer"
                                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors">
                                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-sans font-bold text-white mb-6 uppercase tracking-widest text-xs">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-white/60 text-sm font-light">
                                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-white/40" />
                                <span>Quartier Don Bosco, Kara, Togo</span>
                            </li>
                            <li className="flex items-center gap-3 text-white/60 text-sm font-light">
                                <Phone size={16} className="flex-shrink-0 text-white/40" />
                                <a href="tel:+22870239862" className="hover:text-white transition-colors">+228 70 23 98 62</a>
                            </li>
                            <li className="flex items-center gap-3 text-white/60 text-sm font-light">
                                <Mail size={16} className="flex-shrink-0 text-white/40" />
                                <a href="mailto:dt.kara.donbosco.aos@gmail.com" className="hover:text-white transition-colors break-all">dt.kara.donbosco.aos@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-sans font-bold text-white mb-6 uppercase tracking-widest text-xs">Navigation</h4>
                        <ul className="space-y-3">
                            <li><a href="/" className="text-white/60 text-sm font-light hover:text-white transition-colors">Accueil</a></li>
                            <li><a href="/paroisse" className="text-white/60 text-sm font-light hover:text-white transition-colors">Paroisse</a></li>
                            <li><a href="/actualites" className="text-white/60 text-sm font-light hover:text-white transition-colors">Actualités</a></li>
                            <li><a href="/contact" className="text-white/60 text-sm font-light hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs font-sans">
                    <p>&copy; {currentYear} Paroisse Don Bosco Kara. Tous droits réservés.</p>
                    <p className="uppercase tracking-widest">Mission Salésienne</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
