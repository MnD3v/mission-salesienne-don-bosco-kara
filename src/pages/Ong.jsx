import React from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { Heart, Globe, BookOpen, Shield, School, Hammer, Droplets, Stethoscope, Handshake, Quote } from 'lucide-react';

const Ong = () => {
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

    const objectives = [
        {
            icon: <Shield className="w-8 h-8 text-secondary" />,
            title: "Protection",
            description: "Accueillir et réinsérer les enfants de la rue et lutter contre le trafic des mineurs.",
        },
        {
            icon: <BookOpen className="w-8 h-8 text-secondary" />,
            title: "Éducation",
            description: "Contribuer à la formation de la jeunesse à travers nos écoles et centres professionnels.",
        },
        {
            icon: <Heart className="w-8 h-8 text-secondary" />,
            title: "Promotion Féminine",
            description: "Soutenir la promotion sociale des femmes, notamment en milieu rural.",
        },
        {
            icon: <Globe className="w-8 h-8 text-secondary" />,
            title: "Développement",
            description: "Réaliser des forages et soutenir les infrastructures dans les zones reculées.",
        }
    ];

    const actions = [
        { label: "Prise en charge des enfants en danger (Foyers)", icon: <Heart className="w-5 h-5" /> },
        { label: "Scolarisation (Collège & Lycée)", icon: <School className="w-5 h-5" /> },
        { label: "Formation Professionnelle (CFP)", icon: <Hammer className="w-5 h-5" /> },
        { label: "Internat pour garçons", icon: <BookOpen className="w-5 h-5" /> },
        { label: "Construction de forages", icon: <Droplets className="w-5 h-5" /> },
        { label: "Soutien aux écoles rurales", icon: <School className="w-5 h-5" /> },
        { label: "Santé et soin social", icon: <Stethoscope className="w-5 h-5" /> },
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-800">
            <PageHeader
                title="ONG DON BOSCO KARA"
                image="/IMAGE/img/ong.jpg"
            >
                Au service des jeunes les plus vulnérables depuis 1985.
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
                                    UNE MISSION D'ESPOIR
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed font-light mb-6">
                                    Depuis sa fondation en 1985, l'ONG Don Bosco Kara œuvre sans relâche au Nord-Togo. Née de l'initiative missionnaire salésienne, elle est devenue un pilier pour la jeunesse en difficulté.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
                                    Notre mission première est d'offrir une seconde chance. Que ce soit pour les enfants en situation de rue, les victimes de trafic ou les jeunes sans ressources, nous proposons un chemin vers l'autonomie à travers l'éducation, la formation professionnelle et l'accompagnement social.
                                </p>

                                <div className="bg-slate-50 p-6 border-l-4 border-primary italic text-slate-600">
                                    "Nous travaillons main dans la main avec les institutions locales et internationales pour répondre aux besoins réels de la jeunesse togolaise."
                                </div>
                            </div>

                            {/* Image Placeholder */}
                            {/* Image Placeholder */}
                            <div className="w-full md:w-1/3 pt-12 md:pt-24 hidden md:block">
                                <div className="aspect-[3/4] bg-slate-100 relative overflow-hidden rounded-sm">
                                    <div className="absolute inset-0 bg-slate-200"></div>
                                    <img
                                        src="/IMAGE/img/ong.jpg"
                                        alt="ONG Don Bosco"
                                        className="absolute inset-0 w-full h-full object-cover shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section Objectives - Dark Theme */}
            <section className="py-24 md:py-32 bg-slate-900 text-white">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mb-16 text-center"
                    >
                        <span className="text-white/50 font-sans text-xs tracking-widest uppercase mb-4 block">02 — Nos Objectifs</span>
                        <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-8">NOTRE ENGAGEMENT</h2>
                        <div className="w-12 h-0.5 bg-white/20 mx-auto"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
                        {objectives.map((obj, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300 rounded-sm"
                            >
                                <div className="mb-6 flex justify-center">
                                    {obj.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">{obj.title}</h3>
                                <p className="text-white/60 font-light text-sm leading-relaxed">{obj.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Actions & Impact */}
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
                            <span className="text-slate-500 font-sans text-xs tracking-widest uppercase mb-4 block">03 — Nos Actions</span>
                            <h2 className="text-4xl md:text-6xl font-sans font-bold text-slate-900 leading-tight tracking-tight">
                                IMPACT CONCRET
                            </h2>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-slate-50 p-10 border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 uppercase font-sans tracking-tight">Domaines d'Intervention</h3>
                            <ul className="space-y-4">
                                {actions.map((action, idx) => (
                                    <li key={idx} className="flex items-center gap-4 text-slate-700">
                                        <span className="bg-white p-2 text-primary shadow-sm rounded-full">{action.icon}</span>
                                        <span className="font-medium">{action.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col justify-center items-start p-6 md:p-12">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase font-sans tracking-tight">Devenir Partenaire</h3>
                            <p className="text-slate-600 font-light leading-relaxed mb-8 text-lg">
                                Vous souhaitez soutenir nos actions ou collaborer avec nous ? Rejoignez-nous pour offrir plus d’opportunités aux jeunes et aux familles de Kara.
                            </p>
                            <a
                                href="https://wa.me/22890415752"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
                            >
                                <Handshake className="w-5 h-5" />
                                Contacter l'ONG
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA / Quote */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <Quote className="w-12 h-12 text-slate-300 mx-auto mb-8 opacity-50" />
                    <blockquote className="text-3xl md:text-5xl font-serif text-slate-900 leading-tight mb-8">
                        "Pour faire le bien, il faut un peu de courage, beaucoup de patience et surtout beaucoup d'amour."
                    </blockquote>
                    <cite className="text-slate-500 font-sans text-xs uppercase tracking-widest not-italic block">
                        Saint Jean Bosco
                    </cite>
                </div>
            </section>
        </div>
    );
};

export default Ong;
