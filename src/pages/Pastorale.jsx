import React from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { BookOpen, Users, Heart, Star, Sun, HandHeart, Quote } from 'lucide-react';

const Pastorale = () => {
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

    const activities = [
        {
            icon: <BookOpen className="w-8 h-8 text-secondary" />,
            title: "Catéchèse",
            description: "Préparation aux sacrements, groupes bibliques et formation chrétienne pour tous les âges.",
        },
        {
            icon: <Users className="w-8 h-8 text-secondary" />,
            title: "Mouvements Jeunes",
            description: "MEJ, Scouts, Chorales et groupes salésiens pour vivre sa foi en communauté.",
        },
        {
            icon: <HandHeart className="w-8 h-8 text-secondary" />,
            title: "Solidarité",
            description: "Visites aux malades, aide aux plus démunis et engagement social concret.",
        },
        {
            icon: <Star className="w-8 h-8 text-secondary" />,
            title: "Temps Forts",
            description: "Retraites, pèlerinages, veillées de prière et grandes fêtes liturgiques.",
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-800">
            <PageHeader
                title="PASTORALE DES JEUNES"
                image="/IMAGE/img/paroissep.jpg"
            >
                Accompagner les jeunes et les familles dans leur cheminement de foi et d'engagement.
            </PageHeader>

            {/* Section Présentation */}
            <section className="py-24 md:py-32 bg-white">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mb-20"
                    >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
                            <div className="max-w-2xl">
                                <div className="w-16 h-1 bg-slate-900 mb-8"></div>
                                <span className="text-slate-500 font-sans text-xs tracking-widest uppercase mb-4 block">01 — Mission & Vision</span>
                                <h2 className="text-4xl md:text-6xl font-sans font-bold text-slate-900 leading-tight tracking-tight mb-8">
                                    GRANDIR DANS LA FOI
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed font-light mb-6">
                                    La Pastorale de la Paroisse Saint Jean Bosco de Kara est le cœur spirituel de notre communauté. Elle accompagne les jeunes, les familles et tous les fidèles dans leur cheminement personnel et communautaire.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
                                    Pilotée par un bureau et un Père Aumônier, elle coordonne l'ensemble des mouvements de jeunes. Nos activités embrassent la formation humaine, sociale, culturelle et sportive, toujours dans l'esprit de joie et de service de Don Bosco.
                                </p>

                                <div className="bg-slate-50 p-6 border-l-4 border-primary italic text-slate-600">
                                    "La coordination de la pastorale veille à l'unité et au dynamisme de tous les groupes, en lien étroit avec le Curé de la paroisse."
                                </div>
                            </div>

                            {/* Image Placeholder */}
                            {/* Image Placeholder */}
                            <div className="w-full md:w-1/3 pt-12 md:pt-24 hidden md:block">
                                <div className="aspect-[3/4] bg-slate-100 relative overflow-hidden rounded-sm">
                                    <div className="absolute inset-0 bg-slate-200"></div>
                                    <img
                                        src="/IMAGE/img/acceuilD.jpg"
                                        alt="Pastorale des jeunes"
                                        className="absolute inset-0 w-full h-full object-cover shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section Activities - Dark Theme */}
            <section className="py-24 md:py-32 bg-slate-900 text-white">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mb-16 text-center"
                    >
                        <span className="text-white/50 font-sans text-xs tracking-widest uppercase mb-4 block">02 — Nos Piliers</span>
                        <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-8">VIE PASTORALE</h2>
                        <div className="w-12 h-0.5 bg-white/20 mx-auto"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
                        {activities.map((act, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300 rounded-sm group"
                            >
                                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                                    {act.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">{act.title}</h3>
                                <p className="text-white/60 font-light text-sm leading-relaxed">{act.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Values - Grid Style */}
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
                        <div className="max-w-3xl">
                            <span className="text-slate-500 font-sans text-xs tracking-widest uppercase mb-4 block">03 — Nos Valeurs</span>
                            <h2 className="text-4xl md:text-6xl font-sans font-bold text-slate-900 leading-tight tracking-tight">
                                AU SERVICE DE TOUS
                            </h2>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200"
                    >
                        <motion.div variants={fadeInUp} className="bg-white p-12 hover:bg-slate-50 transition-colors duration-300">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase font-sans tracking-tight">Accompagnement</h3>
                            <p className="text-slate-600 font-light leading-relaxed">
                                Être présent à chaque étape de la vie, offrir une écoute bienveillante et un soutien spirituel personnalisé.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="bg-white p-12 hover:bg-slate-50 transition-colors duration-300">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase font-sans tracking-tight">Formation</h3>
                            <p className="text-slate-600 font-light leading-relaxed">
                                Des parcours adaptés pour enfants, jeunes et adultes afin d'approfondir la connaissance de la foi et de l'Église.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="bg-white p-12 hover:bg-slate-50 transition-colors duration-300">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase font-sans tracking-tight">Engagement</h3>
                            <p className="text-slate-600 font-light leading-relaxed">
                                Une foi qui se traduit en actes concrets de solidarité, de service et de responsabilité dans la société.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Footer CTA / Quote */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <Quote className="w-12 h-12 text-slate-300 mx-auto mb-8 opacity-50" />
                    <blockquote className="text-3xl md:text-5xl font-serif text-slate-900 leading-tight mb-8">
                        "Avec Don Bosco, éduquer c’est une affaire de cœur."
                    </blockquote>
                    <cite className="text-slate-500 font-sans text-xs uppercase tracking-widest not-italic block">
                        Saint Jean Bosco
                    </cite>
                </div>
            </section>
        </div>
    );
};

export default Pastorale;
