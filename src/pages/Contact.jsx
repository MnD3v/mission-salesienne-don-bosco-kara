import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

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
        const { nom, email, telephone, objet, message } = formData;
        const phone = '22890415752';
        const text = encodeURIComponent(
            `Nouveau message depuis le site Paroisse Don Bosco Kara:\n\nNom: ${nom}\nEmail: ${email}\nTéléphone: ${telephone}\nObjet: ${objet}\nMessage: ${message}`
        );
        window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    };

    const contactInfo = [
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Adresse",
            details: ["Quartier Don Bosco", "Kara, Togo"],
            action: "Voir sur la carte"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Téléphone",
            details: ["+228 70 23 98 62", "+228 90 41 57 52"],
            action: "Appeler maintenant"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            details: ["dt.kara.donbosco.aos@gmail.com"],
            action: "Envoyer un email"
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-800">
            <PageHeader
                title="CONTACTEZ-NOUS"
                image="/IMAGE/img/acceuilD.jpg"
            >
                Une question, un besoin, une envie de rejoindre notre mission ? Nous sommes à votre écoute.
            </PageHeader>

            {/* Section Info Grid */}
            <section className="py-24 md:py-32 bg-white">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
                    >
                        {contactInfo.map((info, idx) => (
                            <div key={idx} className="bg-slate-50 p-10 border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                                    {info.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-widest mb-4">{info.title}</h3>
                                <div className="text-slate-600 font-light mb-8 space-y-1">
                                    {info.details.map((detail, i) => (
                                        <p key={i}>{detail}</p>
                                    ))}
                                </div>
                                <span className="text-primary text-xs font-bold uppercase tracking-widest border-b border-primary/20 pb-1 cursor-pointer hover:border-primary transition-colors">
                                    {info.action}
                                </span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Contact Form Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <div className="w-16 h-1 bg-slate-900 mb-8"></div>
                            <span className="text-slate-500 font-sans text-xs tracking-widest uppercase mb-4 block">01 — Formulaire</span>
                            <h2 className="text-3xl md:text-5xl font-sans font-bold text-slate-900 leading-tight mb-6">
                                ENVOYER UN MESSAGE
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-light mb-12">
                                Remplissez le formulaire ci-dessous pour nous envoyer un message direct via WhatsApp. Notre équipe vous répondra dans les plus brefs délais.
                            </p>

                            <div className="bg-slate-900 text-white p-8 md:p-12 rounded-sm relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-4">Besoin d'une réponse rapide ?</h3>
                                    <p className="text-white/70 mb-8 font-light">
                                        N'hésitez pas à nous contacter directement sur nos réseaux sociaux ou par téléphone pour les urgences.
                                    </p>
                                    <a
                                        href="https://wa.me/22890415752"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-bold transition-colors"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        WhatsApp Direct
                                    </a>
                                </div>
                                <div className="absolute -bottom-10 -right-10 text-white/5">
                                    <MessageCircle size={200} />
                                </div>
                            </div>
                        </motion.div>

                        <motion.form
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            onSubmit={handleSubmit}
                            className="bg-white p-8 md:p-12 border border-slate-200 shadow-sm rounded-sm"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="nom" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Nom complet *</label>
                                    <input
                                        type="text"
                                        id="nom"
                                        name="nom"
                                        required
                                        value={formData.nom}
                                        onChange={handleChange}
                                        className="w-full bg-slate-50 border border-slate-200 p-4 text-slate-900 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Votre nom"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-slate-50 border border-slate-200 p-4 text-slate-900 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="votre@email.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="telephone" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Téléphone</label>
                                    <input
                                        type="tel"
                                        id="telephone"
                                        name="telephone"
                                        value={formData.telephone}
                                        onChange={handleChange}
                                        className="w-full bg-slate-50 border border-slate-200 p-4 text-slate-900 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Votre numéro"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="objet" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Objet *</label>
                                    <input
                                        type="text"
                                        id="objet"
                                        name="objet"
                                        required
                                        value={formData.objet}
                                        onChange={handleChange}
                                        className="w-full bg-slate-50 border border-slate-200 p-4 text-slate-900 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Sujet du message"
                                    />
                                </div>
                            </div>

                            <div className="mb-8">
                                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50 border border-slate-200 p-4 text-slate-900 focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="Écrivez votre message ici..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 uppercase tracking-widest transition-all flex items-center justify-center gap-3 group"
                            >
                                <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                Envoyer le message
                            </button>
                        </motion.form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
