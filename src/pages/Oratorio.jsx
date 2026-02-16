import React from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { Gamepad2, Music, Heart, Users, Trophy, Smile, Quote } from 'lucide-react';

const Oratorio = () => {
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
            icon: <Trophy className="w-8 h-8 text-secondary" />,
            title: "Sports",
            description: "Football, basket-ball et tournois pour développer l'esprit d'équipe.",
        },
        {
            icon: <Music className="w-8 h-8 text-secondary" />,
            title: "Arts & Culture",
            description: "Théâtre, musique et danse pour exprimer ses talents.",
        },
        {
            icon: <Heart className="w-8 h-8 text-secondary" />,
            title: "Spiritualité",
            description: "Moments de prière et de formation chrétienne adaptés aux jeunes.",
        },
        {
            icon: <Gamepad2 className="w-8 h-8 text-secondary" />,
            title: "Jeux & Loisirs",
            description: "Un espace de détente sain et sécurisé pour s'amuser entre amis.",
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-800">
            <PageHeader
                title="ORATORIO"
                image="/IMAGE/img/oratorio (13).jpg"
            >
                Une cour de récréation où l'on apprend à vivre, à aimer et à grandir ensemble.
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
                                <span className="text-slate-500 font-sans text-xs tracking-widest uppercase mb-4 block">01 — L'Esprit Salésien</span>
                                <h2 className="text-4xl md:text-6xl font-sans font-bold text-slate-900 leading-tight tracking-tight mb-8">
                                    UNE MAISON QUI ACCUEILLE
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed font-light mb-6">
                                    L'Oratorio est le cœur battant de la mission salésienne. C'est un espace ouvert à tous les jeunes, sans distinction, où ils peuvent se sentir chez eux.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
                                    C'est une église qui évangélise, une école qui prépare à la vie, et une cour de récréation où l'on se rencontre dans la joie. Nous proposons des animations, des jeux et un accompagnement éducatif pour aider chaque jeune à devenir un "bon chrétien et un honnête citoyen".
                                </p>

                                <div className="inline-flex items-center gap-4 text-slate-900 font-bold uppercase tracking-widest text-xs border-b border-primary pb-2">
                                    <Smile className="w-5 h-5 text-primary" />
                                    Toujours Joyeux
                                </div>
                            </div>

                            {/* Image Placeholder */}
                            <div className="w-full md:w-1/3 pt-12 md:pt-24 hidden md:block">
                                <div className="aspect-[3/4] bg-slate-100 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-slate-200"></div>
                                    <img
                                        src="/IMAGE/img/oratorio (8).jpg"
                                        alt="Oratorio Joie"
                                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
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
                        <span className="text-white/50 font-sans text-xs tracking-widest uppercase mb-4 block">02 — Nos Activités</span>
                        <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-8">VIVRE L'ORATORIO</h2>
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
                                className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300 rounded-sm"
                            >
                                <div className="mb-6 flex justify-center">
                                    {act.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">{act.title}</h3>
                                <p className="text-white/60 font-light text-sm leading-relaxed">{act.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Gallery Preview - Grid Style */}
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
                            <span className="text-slate-500 font-sans text-xs tracking-widest uppercase mb-4 block">03 — Galerie</span>
                            <h2 className="text-4xl md:text-6xl font-sans font-bold text-slate-900 leading-tight tracking-tight">
                                INSTANTS DE VIE
                            </h2>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="aspect-square bg-slate-100 overflow-hidden relative group"
                        >
                            <img src="/IMAGE/img/oratorio (3).jpg" alt="Oratorio 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="aspect-square bg-slate-100 overflow-hidden relative group md:mt-12"
                        >
                            <img src="/IMAGE/img/oratorio (12).jpg" alt="Oratorio 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="aspect-square bg-slate-100 overflow-hidden relative group"
                        >
                            <img src="/IMAGE/img/oratorio (11).jpg" alt="Oratorio 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer CTA / Quote */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <Quote className="w-12 h-12 text-slate-300 mx-auto mb-8 opacity-50" />
                    <blockquote className="text-3xl md:text-5xl font-serif text-slate-900 leading-tight mb-8">
                        "Ici, on fait consister la sainteté à être toujours joyeux."
                    </blockquote>
                    <cite className="text-slate-500 font-sans text-xs uppercase tracking-widest not-italic block">
                        Saint Dominique Savio
                    </cite>
                </div>
            </section>
        </div>
    );
};

export default Oratorio;
