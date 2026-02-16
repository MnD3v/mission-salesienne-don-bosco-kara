import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, image, children }) => {
    return (
        <div className="relative h-[40vh] min-h-[300px] w-full overflow-hidden bg-primary flex items-center justify-center">
            {image && (
                <div className="absolute inset-0">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
                </div>
            )}

            <div className="relative z-10 container text-center px-4">
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                >
                    {title}
                </motion.h1>
                {children && (
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-white/90 text-lg max-w-2xl mx-auto"
                    >
                        {children}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default PageHeader;
