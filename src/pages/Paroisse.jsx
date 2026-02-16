import React from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Heart, Users, Sun, School, Quote, Church } from 'lucide-react';

const Paroisse = () => {
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

    const messes = [
        { day: "Dimanche", times: ["06h30", "08h30"] },
        { day: "Lundi - Vendredi", times: ["05h45"], note: "Mardi & Mercredi : 18h00" },
        { day: "Samedi", times: ["06h00"] }
    ];

    const valeurs = [
        {
            icon: <Sun className="w-8 h-8 text-primary" />,
            title: "Foi Vivante",
            description: "Des célébrations eucharistiques animées et une vie sacramentelle riche pour nourrir la foi de chacun.",
        },
        {
            icon: <Users className="w-8 h-8 text-primary" />,
            title: "Accueil & Fraternité",
            description: "Une communauté ouverte à tous, accueillant chacun dans le respect, la bienveillance et la chaleur familiale.",
        },
        {
            icon: <Heart className="w-8 h-8 text-primary" />,
            title: "Charité Active",
            description: "Un engagement concret auprès des plus démunis à travers nos œuvres sociales et notre solidarité.",
        },
        {
            icon: <School className="w-8 h-8 text-primary" />,
            title: "Jeunesse & Famille",
            description: "Une attention particulière portée à l'éducation des jeunes et à l'accompagnement des familles.",
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-800">
            <PageHeader
                title="PAROISSE ST JEAN BOSCO"
                image="/IMAGE/img/paroissep.jpg"
            >
                Une communauté de foi, d'espérance et de charité au cœur de la ville de Kara.
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
                                <span className="text-slate-500 font-sans text-xs tracking-widest uppercase mb-4 block">01 — Histoire & Mission</span>
                                <h2 className="text-4xl md:text-6xl font-sans font-bold text-slate-900 leading-tight tracking-tight mb-8">
                                    LA PAROISSE DES JEUNES
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed font-light mb-6">
                                    Créée en 1995 et dirigée par les prêtres salésiens, la Paroisse Saint Jean Bosco est un phare spirituel dans la zone Sud de Kara.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
                                    Nous avons la charge particulière de l'aumônerie de l'Université de Kara, faisant de notre communauté un lieu privilégié de rencontre et de formation pour la jeunesse étudiante. Fidèles à l'esprit de Don Bosco, nous plaçons l'accueil, la joie et l'éducation au cœur de notre pastorale.
                                </p>

                                <div className="w-full bg-slate-50 p-8 border border-slate-100 rounded-sm">
                                    <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-widest flex items-center gap-2">
                                        <MapPin className="w-4 h-4" /> Localisation
                                    </h3>
                                    <p className="text-slate-600 mb-6 font-light leading-relaxed text-sm">
                                        Quartier Don Bosco, Kara, Togo.<br />
                                        <span className="text-slate-400 mt-1 block">À proximité de l'Université de Kara</span>
                                    </p>
                                    <a
                                        href="https://maps.app.goo.gl/55jxAYuLWtN76QeH9"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1 hover:text-primary hover:border-primary transition-colors"
                                    >
                                        Voir sur la carte
                                    </a>
                                </div>
                            </div>

                            {/* Image Part - Can be added later or placeholder */}
                            {/* Image Part */}
                            <div className="w-full md:w-1/3 pt-12 md:pt-24 hidden md:block">
                                <div className="aspect-[3/4] bg-slate-100 relative overflow-hidden rounded-sm">
                                    <div className="absolute inset-0 bg-slate-200"></div>
                                    <img
                                        src="/IMAGE/img/paroissee.jpg"
                                        alt="Paroisse Saint Jean Bosco"
                                        className="absolute inset-0 w-full h-full object-cover shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section Horaires - Dark Theme like Stats in Home */}
            <section className="py-24 md:py-32 bg-slate-900 text-white">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mb-16 text-center"
                    >
                        <span className="text-white/50 font-sans text-xs tracking-widest uppercase mb-4 block">02 — Vie Liturgique</span>
                        <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-8">HORAIRES DES MESSES</h2>
                        <div className="w-12 h-0.5 bg-white/20 mx-auto"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
                        {messes.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className={`flex flex-col items-center justify-center p-12 bg-slate-900 hover:bg-slate-800 transition-colors duration-300`}
                            >
                                <span className="text-white/40 font-mono text-xs tracking-widest uppercase mb-6">{item.day}</span>
                                <div className="space-y-4 text-center">
                                    {item.times.map((t, i) => (
                                        <div key={i} className="text-5xl md:text-6xl font-sans font-bold tracking-tighter text-white">{t}</div>
                                    ))}
                                </div>
                                {item.note && (
                                    <span className="mt-6 text-secondary text-xs font-bold tracking-widest uppercase bg-secondary/10 px-3 py-1 rounded-full">{item.note}</span>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Autres célébrations */}
                    <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto border-t border-white/10 pt-12">
                        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
                            <div className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full shrink-0 text-secondary">
                                <Calendar className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg uppercase tracking-widest mb-2 font-sans">Confessions</h4>
                                <p className="text-white/60 font-light leading-relaxed">Le sacrement de réconciliation est proposé tous les samedis à partir de 16h00 ou sur rendez-vous.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
                            <div className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full shrink-0 text-secondary">
                                <Heart className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg uppercase tracking-widest mb-2 font-sans">Adoration</h4>
                                <p className="text-white/60 font-light leading-relaxed">Un temps d'adoration eucharistique communautaire est vécu tous les jeudis soir à 18h00.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Valeurs / Groups - Grid Style */}
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
                            <span className="text-slate-500 font-sans text-xs tracking-widest uppercase mb-4 block">03 — Notre Esprit</span>
                            <h2 className="text-4xl md:text-6xl font-sans font-bold text-slate-900 leading-tight tracking-tight">
                                VIVRE ENSEMBLE
                            </h2>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200"
                    >
                        {valeurs.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className="bg-white p-10 hover:bg-slate-50 transition-colors duration-300 group flex flex-col items-start"
                            >
                                <div className="mb-8 text-slate-900 group-hover:text-primary transition-colors">
                                    {React.cloneElement(item.icon, { className: "w-8 h-8 stroke-[1.5]" })}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-4 tracking-tight uppercase font-sans">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed font-light text-sm">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Footer CTA / Quote */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <Quote className="w-12 h-12 text-slate-300 mx-auto mb-8 opacity-50" />
                    <blockquote className="text-3xl md:text-5xl font-serif text-slate-900 leading-tight mb-8">
                        "Marchez avec les pieds sur terre, mais le cœur au ciel."
                    </blockquote>
                    <cite className="text-slate-500 font-sans text-xs uppercase tracking-widest not-italic block">
                        Saint Jean Bosco
                    </cite>
                </div>
            </section>
        </div>
    );
};

export default Paroisse;
