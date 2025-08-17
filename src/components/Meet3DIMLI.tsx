'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeInOut',
        },
    },
};

export default function MeetPlatform() {
    return (
        <section className="min-h-screen bg-black text-white px-8 md:px-16 py-20">
            <motion.div
                className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Left Content */}
                <div className="flex-1 space-y-6">
                    <motion.p className="text-lg text-gray-400" variants={fadeInUp}>
                        Meet 3DIMLI
                    </motion.p>
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold leading-tight"
                        variants={fadeInUp}
                    >
                        Your All-in-one Digital <br /> Commerce Platform
                    </motion.h2>
                    <motion.p className="text-gray-400 text-lg" variants={fadeInUp}>
                        <strong>Sell 3D Models, E-books, and digital products</strong>{' '}
                        effortlessly. Manage your store, deliver products seamlessly, and
                        reach a global audience.
                    </motion.p>
                    <motion.button
                        variants={fadeInUp}
                        className="mt-4 px-6 py-3 rounded-full border border-white bg-black bg-opacity-20 text-white font-semibold flex items-center gap-2 hover:bg-opacity-40 transition duration-300"
                    >
                        Start Selling Now
                        <span className="text-xl">{'→'}</span>
                    </motion.button>

                </div>

                {/* Right Video */}
                <motion.div className="flex-1" variants={fadeInUp}>
                    <div className="overflow-hidden shadow-xl max-w-full max-h-[400px] rounded-l-[100px] rounded-r-none">
                        <video
                            src="/video.webm" // Your video path
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover rounded-l-[360px] rounded-r-none"
                        />
                    </div>


                </motion.div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
    className="mt-24 mx-auto w-full max-w-6xl px-4 text-center"
    initial="hidden"
    animate="visible"
    variants={containerVariants}
>
    <div className="flex flex-wrap justify-between items-start gap-y-6 border-y border-orange-400 py-4">
        {['Global', 'Earnings', 'Support'].map((title, idx) => (
            <motion.div
                key={title}
                className="w-full sm:w-1/3 px-4 border-orange-400 sm:border-r last:border-none"
                variants={fadeInUp}
            >
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-orange-400 mt-1 text-sm">
                    {title === 'Global' && 'For creators worldwide.'}
                    {title === 'Earnings' && 'Keep 100% of what you earn.'}
                    {title === 'Support' && "We've got your back."}
                </p>
            </motion.div>
        ))}
    </div>
</motion.div>








        </section>
    );
}
