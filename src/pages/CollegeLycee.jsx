import React from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { BookOpen, Users, GraduationCap, School, Microscope, Monitor, Quote } from 'lucide-react';

const CollegeLycee = () => {
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

    const values = [
        {
            icon: <GraduationCap className="w-8 h-8 text-primary" />,
            title: "Excellence Académique",
            description: "Des enseignants qualifiés et un suivi rigoureux pour la réussite de tous.",
        },
        {
            icon: <Users className="w-8 h-8 text-primary" />,
            title: "Vie Associative",
            description: "Clubs, sports, théâtre, chorale : de nombreuses activités pour s’épanouir.",
        },
        {
            icon: <School className="w-8 h-8 text-primary" />,
            title: "Éducation Intégrale",
            description: "Développement intellectuel, moral, spirituel et social de chaque jeune.",
        }
    ];

    const facilities = [
        { icon: <Microscope className="w-6 h-6" />, label: "Laboratoire équipé" },
        { icon: <Monitor className="w-6 h-6" />, label: "Salle informatique" },
        { icon: <BookOpen className="w-6 h-6" />, label: "Bibliothèque" },
        { icon: <School className="w-6 h-6" />, label: "Internat garçons" }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-800">
            <PageHeader
                title="COLLÈGE & LYCÉE"
                image="/IMAGE/img/lycee.jpg"
            >
                Une éducation intégrale pour l'avenir de la jeunesse, dans l'esprit de Don Bosco.
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
                                <span className="text-slate-500 font-sans text-xs tracking-widest uppercase mb-4 block">01 — Notre Pédagogie</span>
                                <h2 className="text-4xl md:text-6xl font-sans font-bold text-slate-900 leading-tight tracking-tight mb-8">
                                    APPRENDRE & GRANDIR
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed font-light mb-6">
                                    Le Collège et Lycée Don Bosco Kara accueille les jeunes pour le niveau collège et lycée. La pédagogie salésienne est au cœur de notre formation.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
                                    Les élèves et le personnel vivent comme une famille, permettant une proximité unique entre enseignants et élèves. Diverses activités socio-culturelles sont organisées pour l'épanouissement de tous.
                                </p>

                                <div className="bg-slate-50 p-8 border border-slate-100 rounded-sm">
                                    <h3 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-widest flex items-center gap-2">
                                        <School className="w-4 h-4" /> Nos Infrastructures
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {facilities.map((fac, idx) => (
                                            <div key={idx} className="flex items-center gap-3 text-slate-700">
                                                <div className="text-primary">{fac.icon}</div>
                                                <span className="font-medium text-sm">{fac.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Image Placeholder - Could be replaced later */}
                            {/* Image Placeholder */}
                            <div className="w-full md:w-1/3 pt-12 md:pt-24 hidden md:block">
                                <div className="aspect-[3/4] bg-slate-100 relative overflow-hidden rounded-sm">
                                    <div className="absolute inset-0 bg-slate-200"></div>
                                    <img
                                        src="/IMAGE/img/lycee.jpg"
                                        alt="Collège et Lycée"
                                        className="absolute inset-0 w-full h-full object-cover shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section Values - Dark Theme */}
            <section className="py-24 md:py-32 bg-slate-900 text-white">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mb-16 text-center"
                    >
                        <span className="text-white/50 font-sans text-xs tracking-widest uppercase mb-4 block">02 — Nos Valeurs</span>
                        <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-8">PILIERS ÉDUCATIFS</h2>
                        <div className="w-12 h-0.5 bg-white/20 mx-auto"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
                        {values.map((val, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className={`flex flex-col items-center justify-center p-8 ${idx !== values.length - 1 ? 'md:border-r md:border-white/10' : ''}`}
                            >
                                <div className="bg-white/10 p-4 rounded-full mb-6">
                                    {React.cloneElement(val.icon, { className: "w-8 h-8 text-secondary" })}
                                </div>
                                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">{val.title}</h3>
                                <p className="text-white/60 font-light leading-relaxed">{val.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Info Pratiques - Grid Style */}
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
                            <span className="text-slate-500 font-sans text-xs tracking-widest uppercase mb-4 block">03 — Informations</span>
                            <h2 className="text-4xl md:text-6xl font-sans font-bold text-slate-900 leading-tight tracking-tight">
                                INFOS PRATIQUES
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
                        <motion.div variants={fadeInUp} className="bg-white p-12 flex flex-col items-start h-full">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase font-sans tracking-tight">Inscriptions</h3>
                            <p className="text-slate-600 mb-4 font-light text-lg">Période d'inscription annuelle :</p>
                            <div className="text-3xl font-bold text-primary">Juin - Septembre</div>
                            <p className="mt-6 text-slate-500 text-sm italic">Les dossiers sont à retirer au secrétariat de l'établissement.</p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="bg-white p-12 flex flex-col items-start h-full">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase font-sans tracking-tight">Horaires</h3>
                            <div className="space-y-4 w-full">
                                <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                                    <span className="text-slate-600 font-light">Matin</span>
                                    <span className="font-bold text-slate-900">07h30 - 12h00</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                                    <span className="text-slate-600 font-light">Après-midi</span>
                                    <span className="font-bold text-slate-900">14h00 - 17h00</span>
                                </div>
                                <div className="mt-4 text-xs text-slate-400 uppercase tracking-widest font-bold">Lundi au Vendredi</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Footer CTA / Quote */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <Quote className="w-12 h-12 text-slate-300 mx-auto mb-8 opacity-50" />
                    <blockquote className="text-3xl md:text-5xl font-serif text-slate-900 leading-tight mb-8">
                        "Sans affection, pas de confiance ; sans confiance, pas d’éducation."
                    </blockquote>
                    <cite className="text-slate-500 font-sans text-xs uppercase tracking-widest not-italic block">
                        Saint Jean Bosco
                    </cite>
                </div>
            </section>
        </div>
    );
};

export default CollegeLycee;
