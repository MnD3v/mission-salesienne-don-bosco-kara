import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        telephone: '',
        objet: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const phone = '22890415752';
        const text = encodeURIComponent(
            `Nouveau message depuis le site Paroisse Don Bosco Kara:\n\nNom: ${formData.nom}\nEmail: ${formData.email}\nTéléphone: ${formData.telephone}\nObjet: ${formData.objet}\nMessage: ${formData.message}`
        );
        window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    };

    return (
        <section id="contact" className="py-32 bg-white">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                {/* Header */}
                <div className="mb-20">
                    <div className="w-16 h-1 bg-slate-900 mb-8"></div>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
                        <div className="max-w-3xl">
                            <span className="text-slate-500 font-sans text-xs tracking-widest uppercase mb-4 block">03 — Contact</span>
                            <h2 className="text-4xl md:text-6xl font-sans font-bold text-slate-900 leading-tight tracking-tight">
                                RESTONS EN CONTACT
                            </h2>
                        </div>
                        <p className="text-lg text-slate-600 max-w-xl leading-relaxed font-light">
                            Vous avez une question ou souhaitez participer à nos activités ? N'hésitez pas à nous écrire.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Informations de contact */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-sans font-bold text-slate-900 mb-8 uppercase tracking-tight">Nos coordonnées</h3>

                        <div className="space-y-8">
                            <div className="border-l-2 border-slate-900 pl-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-5 h-5 text-slate-900 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-sans font-bold text-slate-900 mb-1 uppercase text-sm tracking-wider">Adresse</h4>
                                        <p className="text-slate-600 font-light">Quartier Don Bosco, Kara, Togo</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-l-2 border-slate-900 pl-6">
                                <div className="flex items-start gap-4">
                                    <Phone className="w-5 h-5 text-slate-900 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-sans font-bold text-slate-900 mb-1 uppercase text-sm tracking-wider">Téléphone</h4>
                                        <p className="text-slate-600 font-light">+228 70 23 98 62</p>
                                        <p className="text-slate-400 text-sm mt-1 font-light">Lun - Ven, 8h - 18h</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-l-2 border-slate-900 pl-6">
                                <div className="flex items-start gap-4">
                                    <Mail className="w-5 h-5 text-slate-900 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-sans font-bold text-slate-900 mb-1 uppercase text-sm tracking-wider">Email</h4>
                                        <p className="text-slate-600 font-light break-all">dt.kara.donbosco.aos@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Formulaire */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="nom" className="block text-xs font-sans font-bold text-slate-900 mb-3 uppercase tracking-wider">Nom complet</label>
                                    <input
                                        type="text"
                                        id="nom"
                                        name="nom"
                                        value={formData.nom}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-slate-200 focus:border-slate-900 outline-none transition-colors bg-white font-light"
                                        placeholder="Votre nom"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs font-sans font-bold text-slate-900 mb-3 uppercase tracking-wider">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-slate-200 focus:border-slate-900 outline-none transition-colors bg-white font-light"
                                        placeholder="votre@email.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="telephone" className="block text-xs font-sans font-bold text-slate-900 mb-3 uppercase tracking-wider">Téléphone</label>
                                    <input
                                        type="tel"
                                        id="telephone"
                                        name="telephone"
                                        value={formData.telephone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-slate-200 focus:border-slate-900 outline-none transition-colors bg-white font-light"
                                        placeholder="Votre numéro"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="objet" className="block text-xs font-sans font-bold text-slate-900 mb-3 uppercase tracking-wider">Objet</label>
                                    <input
                                        type="text"
                                        id="objet"
                                        name="objet"
                                        value={formData.objet}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-slate-200 focus:border-slate-900 outline-none transition-colors bg-white font-light"
                                        placeholder="Sujet du message"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-xs font-sans font-bold text-slate-900 mb-3 uppercase tracking-wider">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 border-2 border-slate-200 focus:border-slate-900 outline-none transition-colors bg-white resize-y font-light"
                                    placeholder="Votre message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-sans font-bold py-4 transition-colors flex items-center justify-center gap-3 uppercase text-xs tracking-widest"
                            >
                                <Send size={16} />
                                Envoyer le message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
