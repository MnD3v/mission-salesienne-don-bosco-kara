import React from 'react';
import Hero from '../components/Hero';
import ContactSection from '../components/ContactSection';
import { Target, Users, Heart, ArrowRight, Clock, Calendar, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
    const stats = [
        { number: "1995", label: "Année de création" },
        { number: "500+", label: "Jeunes accompagnés" },
        { number: "10+", label: "Programmes actifs" },
    ];

    const missions = [
        {
            icon: <Target className="w-8 h-8 text-primary" />,
            title: "Notre Mission",
            description: "La Mission Salésienne de Don Bosco Kara œuvre pour l'éducation intégrale et l'évangélisation des jeunes au Nord du Togo.",
        },
        {
            icon: <Users className="w-8 h-8 text-primary" />,
            title: "Communauté",
            description: "Une communauté de religieux engagés au quotidien pour l'épanouissement social et spirituel des populations.",
        },
        {
            icon: <Heart className="w-8 h-8 text-primary" />,
            title: "Charité",
            description: "À travers nos œuvres sociales, éducatives et pastorales, nous apportons un soutien concret aux plus nécessiteux.",
        },
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-800 overflow-hidden">
            <Hero />



            {/* Section Présentation / Mission - MIT Style */}
            <section id="mission" className="py-32 md:py-40 bg-white">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    {/* Header Section */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mb-20"
                    >
                        <div className="w-16 h-1 bg-slate-900 mb-8"></div>
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
                            <div className="max-w-3xl">
                                <span className="text-slate-500 font-sans text-xs tracking-widest uppercase mb-4 block">01 — À propos</span>
                                <h2 className="text-4xl md:text-6xl font-sans font-bold text-slate-900 leading-tight tracking-tight">
                                    QUI SOMMES-NOUS ?
                                </h2>
                            </div>
                            <p className="text-lg text-slate-600 max-w-xl leading-relaxed font-light">
                                Fidèles à l'esprit de Saint Jean Bosco, nous plaçons la jeunesse et l'éducation au cœur de notre action.
                            </p>
                        </div>
                    </motion.div>

                    {/* Mission Cards Grid */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 mb-32"
                    >
                        {missions.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className="bg-white p-12 hover:bg-slate-50 transition-colors duration-300 group"
                            >
                                <div className="mb-8 text-slate-900 group-hover:text-primary transition-colors">
                                    {React.cloneElement(item.icon, { className: "w-10 h-10 stroke-[1.5]" })}
                                </div>



                                <h3 className="text-2xl font-sans font-bold text-slate-900 mb-6 tracking-tight uppercase">
                                    {item.title}
                                </h3>

                                <p className="text-slate-600 leading-relaxed mb-8 font-light">
                                    {item.description}
                                </p>

                                <a href="#" className="inline-flex items-center text-slate-900 font-mono text-xs uppercase tracking-widest group-hover:text-primary transition-colors border-b border-slate-200 pb-1">
                                    En savoir plus <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Barre de statistiques - MIT Style */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="bg-slate-900 p-16 md:p-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
                        >
                            {stats.map((stat, idx) => (
                                <div key={idx} className={`flex flex-col items-center justify-center ${idx !== stats.length - 1 ? 'md:border-r md:border-white/10' : ''}`}>
                                    <span className="text-white/50 font-sans text-xs tracking-widest uppercase mb-4 block">
                                        {stat.label}
                                    </span>
                                    <span className="text-6xl md:text-7xl font-sans font-bold text-white mb-2 tracking-tight">{stat.number}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section Citation - MIT Style */}
            <section className="py-32 bg-slate-900">
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <div className="w-12 h-0.5 bg-white/20 mx-auto mb-12"></div>
                        <blockquote className="text-3xl md:text-5xl font-serif text-white leading-tight mb-12 font-normal max-w-4xl mx-auto">
                            "L'éducation est l'affaire du cœur."
                        </blockquote>
                        <cite className="text-white/60 font-sans font-normal not-italic block uppercase tracking-widest text-xs">
                            Saint Jean Bosco
                        </cite>
                    </motion.div>
                </div>
            </section>

            {/* Section Actualités - MIT Style */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    {/* Header */}
                    <div className="mb-20">
                        <div className="w-16 h-1 bg-slate-900 mb-8"></div>
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                            <div className="max-w-3xl">
                                <span className="text-slate-500 font-sans text-xs tracking-widest uppercase mb-4 block">02 — Journal</span>
                                <h2 className="text-4xl md:text-6xl font-sans font-bold text-slate-900 leading-tight tracking-tight">
                                    DERNIÈRES ACTUALITÉS
                                </h2>
                            </div>
                            <a href="/actualites" className="hidden md:flex items-center text-slate-900 font-sans text-xs uppercase tracking-widest hover:text-primary transition-colors group border-b border-slate-200 pb-1">
                                Voir tout le journal <ArrowRight className="ml-3 w-3 h-3 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>

                    {/* Articles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">
                        {[
                            {
                                id: 1,
                                title: "Grande Messe de la Jeunesse",
                                date: "08 Juin 2025",
                                category: "Paroisse",
                                image: "/IMAGE/img/paroissep.jpg",
                                description: "La paroisse Don Bosco Kara a organisé une messe spéciale dédiée à la jeunesse, rassemblant plus de 500 jeunes."
                            },
                            {
                                id: 2,
                                title: "Formations au Centre",
                                date: "28 Mai 2025",
                                category: "Formation",
                                image: "/IMAGE/img/centrefor.jpg",
                                description: "Le Centre de Formation Professionnelle lance de nouveaux ateliers pour accompagner les jeunes vers l’emploi."
                            },
                            {
                                id: 3,
                                title: "Fête de l’Oratorio",
                                date: "15 Mai 2025",
                                category: "Oratorio",
                                image: "/IMAGE/img/oratorio (13).jpg",
                                description: "L’Oratorio a vibré au rythme des jeux et animations. Merci à tous les animateurs pour leur engagement."
                            }
                        ].map((item, idx) => (
                            <motion.article
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="group cursor-pointer"
                            >
                                {/* Image */}
                                <div className="aspect-[4/3] bg-slate-100 w-full mb-8 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-slate-200 transition-colors duration-300"></div>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute top-4 left-4 bg-slate-900 text-white px-3 py-1 text-xs font-sans font-bold uppercase tracking-wider z-10">
                                        {item.category}
                                    </div>
                                </div>

                                {/* Meta */}
                                <div className="flex items-center gap-3 text-xs text-slate-400 mb-4 font-sans uppercase tracking-wide">
                                    <span>{item.date}</span>
                                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                    <span>Actualité</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-sans font-bold text-slate-900 mb-4 leading-tight group-hover:text-primary transition-colors tracking-tight">
                                    {item.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-slate-600 text-base line-clamp-3 mb-6 leading-relaxed font-light">
                                    {item.description}
                                </p>

                                {/* Link */}
                                <a href="/actualites" className="inline-flex items-center text-slate-900 font-sans text-xs uppercase tracking-widest group-hover:text-primary transition-colors border-b border-slate-200 pb-1">
                                    Lire l'article
                                </a>
                            </motion.article>
                        ))}
                    </div>

                    {/* Mobile CTA */}
                    <div className="mt-16 text-center md:hidden">
                        <a href="/actualites" className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-sans text-xs uppercase tracking-widest">
                            Voir toutes les actualités
                        </a>
                    </div>
                </div>
            </section>

            <ContactSection />
        </div>
    );
};

export default Home;
