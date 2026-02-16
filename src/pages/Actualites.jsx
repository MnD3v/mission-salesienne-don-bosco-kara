import React from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Actualites = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const news = [
        {
            id: 1,
            title: "Grande Messe de la Jeunesse",
            date: "08 Juin 2025",
            category: "Paroisse",
            image: "/IMAGE/img/WhatsApp Image 2025-06-17 à 11.09.44_26e94dbe.jpg",
            description: "La paroisse Don Bosco Kara a organisé une messe spéciale dédiée à la jeunesse, rassemblant plus de 500 jeunes de la région. Un moment fort de prière, de chants et de partage dans l’esprit salésien.",
            link: "/paroisse"
        },
        {
            id: 2,
            title: "Nouvelles formations au Centre Don Bosco",
            date: "28 Mai 2025",
            category: "Formation",
            image: "/IMAGE/img/centrefor.jpg",
            description: "Le Centre de Formation Professionnelle et Technique lance de nouveaux ateliers en informatique, menuiserie et couture pour accompagner les jeunes vers l’emploi et l’autonomie.",
            link: "/centre-formation"
        },
        {
            id: 3,
            title: "Fête de l’Oratorio : Jeux et fraternité",
            date: "15 Mai 2025",
            category: "Oratorio",
            image: "/IMAGE/img/oratorio (13).jpg",
            description: "L’Oratorio a vibré au rythme des jeux, ateliers et animations pour les jeunes. Merci à tous les bénévoles et animateurs pour leur engagement auprès de la jeunesse de Kara.",
            link: "/oratorio"
        },
        {
            id: 4,
            title: "Soutien scolaire au Foyer Immaculée",
            date: "02 Mai 2025",
            category: "Foyer",
            image: "/IMAGE/img/jpd (2).jpg",
            description: "Les jeunes filles du Foyer Immaculée bénéficient d’un accompagnement scolaire personnalisé et d’activités d’éveil pour leur épanouissement.",
            link: "/foyer-immaculee"
        }
    ];

    const featuredNews = news[0];
    const otherNews = news.slice(1);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-800">
            <PageHeader
                title="ACTUALITÉS"
                image="/IMAGE/img/paroisses.jpg"
            >
                Restez informé de la vie de notre mission et de nos événements.
            </PageHeader>

            {/* Section News Grid */}
            <section className="py-24 md:py-32 bg-white">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mb-20"
                    >
                        <div className="w-16 h-1 bg-slate-900 mb-8"></div>
                        <span className="text-slate-500 font-sans text-xs tracking-widest uppercase mb-4 block">01 — À la Une</span>

                        {/* Featured Article */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                            <div className="aspect-video relative overflow-hidden rounded-sm group cursor-pointer">
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                <img
                                    src={featuredNews.image}
                                    alt={featuredNews.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-6 left-6 z-20">
                                    <span className="px-4 py-2 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-sm">
                                        {featuredNews.category}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex items-center gap-4 text-slate-400 text-sm mb-6 font-medium">
                                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {featuredNews.date}</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-sans font-bold text-slate-900 leading-tight mb-6 hover:text-primary transition-colors cursor-pointer">
                                    {featuredNews.title}
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
                                    {featuredNews.description}
                                </p>
                                <Link to={featuredNews.link} className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all group">
                                    Lire la suite <ArrowRight className="w-4 h-4 group-hover:text-secondary transition-colors" />
                                </Link>
                            </div>
                        </div>

                        {/* Other News Grid */}
                        <div className="mb-12">
                            <div className="w-12 h-1 bg-slate-200 mb-8"></div>
                            <h3 className="text-2xl font-bold text-slate-900 uppercase tracking-widest mb-12">Dernières Nouvelles</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {otherNews.map((item) => (
                                <motion.div
                                    key={item.id}
                                    variants={fadeInUp}
                                    className="group flex flex-col h-full"
                                >
                                    <div className="aspect-[4/3] bg-slate-100 overflow-hidden rounded-sm relative mb-6">
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold uppercase tracking-widest rounded-sm">
                                                {item.category}
                                            </span>
                                        </div>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <div className="text-slate-400 text-xs font-medium mb-3 flex items-center gap-2">
                                            <Calendar className="w-3 h-3" /> {item.date}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 leading-snug mb-4 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600 font-light text-sm leading-relaxed mb-6 flex-1">
                                            {item.description}
                                        </p>
                                        <Link to={item.link} className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mt-auto hover:gap-3 transition-all">
                                            En savoir plus <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Actualites;
