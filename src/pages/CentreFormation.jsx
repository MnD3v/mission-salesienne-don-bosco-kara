import React from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { Wrench, Zap, Hammer, Monitor, BookOpen, Users, Heart, GraduationCap, Quote } from 'lucide-react';

const CentreFormation = () => {
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

    const formations = [
        {
            icon: <Zap className="w-8 h-8 text-primary" />,
            title: "Électricité",
            desc: "Formation complète en électricité bâtiment et industrielle. Niveau CAP, BT, F3."
        },
        {
            icon: <Hammer className="w-8 h-8 text-primary" />,
            title: "Maçonnerie",
            desc: "Expertise en construction et génie civil. Niveau CAP, BT, F4."
        },
        {
            icon: <Wrench className="w-8 h-8 text-primary" />,
            title: "Menuiserie",
            desc: "Art du bois et de l'aluminium pour des réalisations modernes. Niveau CAP, BT."
        },
        {
            icon: <Monitor className="w-8 h-8 text-primary" />,
            title: "Modulaire",
            desc: "Sessions courtes et ciblées en Énergies solaires et Informatique."
        },
    ];

    const stats = [
        { number: "1985", label: "Année de création" },
        { number: "40+", label: "Années d'expérience" },
        { number: "1000+", label: "Diplômés" },
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-800">
            <PageHeader
                title="CENTRE DE FORMATION"
                image="/IMAGE/img/IMG-2.jpg"
            >
                Former les jeunes pour un avenir meilleur : le cœur de notre mission éducative.
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
                                <span className="text-slate-500 font-sans text-xs tracking-widest uppercase mb-4 block">01 — Notre Histoire</span>
                                <h2 className="text-4xl md:text-6xl font-sans font-bold text-slate-900 leading-tight tracking-tight mb-8">
                                    L'EXCELLENCE ARTISANALE
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed font-light mb-6">
                                    Fondé en 1985 comme Centre de Développement Artisanal, notre établissement est devenu le Centre de Formation Professionnelle et Technique Don Bosco Kara.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
                                    Notre objectif est simple mais ambitieux : offrir à chaque jeune, quel que soit son parcours, la possibilité d'acquérir un métier noble, de développer ses talents et de construire son avenir avec dignité et compétence.
                                </p>

                                <div className="w-full bg-slate-50 p-8 border border-slate-100 rounded-sm">
                                    <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-widest flex items-center gap-2">
                                        <BookOpen className="w-4 h-4" /> Inscriptions
                                    </h3>
                                    <p className="text-slate-600 mb-6 font-light leading-relaxed text-sm">
                                        Les inscriptions sont ouvertes chaque année de <strong>Juillet à Septembre</strong>.<br />
                                        Le centre dispose également d'un internat pour accueillir les jeunes de la région.
                                    </p>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-3 text-sm text-slate-600">
                                            <span className="font-bold text-slate-900 uppercase text-xs tracking-wide">Tél:</span>
                                            <span className="font-mono text-xs">+228 90 53 03 46 / 70 45 54 69</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Image Placeholder */}
                            {/* Image Placeholder */}
                            <div className="w-full md:w-1/3 pt-12 md:pt-24 hidden md:block">
                                <div className="aspect-[3/4] bg-slate-100 relative overflow-hidden rounded-sm">
                                    <div className="absolute inset-0 bg-slate-200"></div>
                                    <img
                                        src="/IMAGE/img/centrefor.jpg"
                                        alt="Centre de Formation"
                                        className="absolute inset-0 w-full h-full object-cover shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section Stats - Dark Theme */}
            <section className="py-24 md:py-32 bg-slate-900 text-white">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mb-16 text-center"
                    >
                        <span className="text-white/50 font-sans text-xs tracking-widest uppercase mb-4 block">02 — Impact</span>
                        <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-8">CHIFFRES CLÉS</h2>
                        <div className="w-12 h-0.5 bg-white/20 mx-auto"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
                        {stats.map((stat, idx) => (
                            <div key={idx} className={`flex flex-col items-center justify-center ${idx !== stats.length - 1 ? 'md:border-r md:border-white/10' : ''}`}>
                                <span className="text-white/50 font-sans text-xs tracking-widest uppercase mb-4 block">
                                    {stat.label}
                                </span>
                                <span className="text-6xl md:text-7xl font-sans font-bold text-white mb-2 tracking-tight">{stat.number}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Formations - Grid Style */}
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
                            <span className="text-slate-500 font-sans text-xs tracking-widest uppercase mb-4 block">03 — Nos Filières</span>
                            <h2 className="text-4xl md:text-6xl font-sans font-bold text-slate-900 leading-tight tracking-tight">
                                OFFRE DE FORMATION
                            </h2>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200"
                    >
                        {formations.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className="bg-white p-12 hover:bg-slate-50 transition-colors duration-300 group flex flex-col items-start"
                            >
                                <div className="mb-8 text-slate-900 group-hover:text-primary transition-colors">
                                    {React.cloneElement(item.icon, { className: "w-10 h-10 stroke-[1.5]" })}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight uppercase font-sans">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed font-light text-base">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Valeurs Grid below Formations */}
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-100 pt-16">
                        <div className="flex flex-col gap-4">
                            <div className="text-slate-900 mb-2">
                                <Zap className="w-6 h-6 stroke-[1.5]" />
                            </div>
                            <h4 className="font-bold text-sm uppercase tracking-widest text-slate-900">Pratique</h4>
                            <p className="text-slate-500 font-light text-sm">Ateliers équipés et stages en entreprise pour une insertion rapide.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="text-slate-900 mb-2">
                                <Users className="w-6 h-6 stroke-[1.5]" />
                            </div>
                            <h4 className="font-bold text-sm uppercase tracking-widest text-slate-900">Accompagnement</h4>
                            <p className="text-slate-500 font-light text-sm">Suivi personnalisé de l'orientation jusqu'à l'insertion professionnelle.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="text-slate-900 mb-2">
                                <Heart className="w-6 h-6 stroke-[1.5]" />
                            </div>
                            <h4 className="font-bold text-sm uppercase tracking-widest text-slate-900">Humain</h4>
                            <p className="text-slate-500 font-light text-sm">Respect, discipline, esprit d'équipe et solidarité salésienne.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA / Quote */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <Quote className="w-12 h-12 text-slate-300 mx-auto mb-8 opacity-50" />
                    <blockquote className="text-3xl md:text-5xl font-serif text-slate-900 leading-tight mb-8">
                        "Dans chaque jeune, il y a un point accessible au bien."
                    </blockquote>
                    <cite className="text-slate-500 font-sans text-xs uppercase tracking-widest not-italic block">
                        Saint Jean Bosco
                    </cite>
                </div>
            </section>
        </div>
    );
};

export default CentreFormation;
