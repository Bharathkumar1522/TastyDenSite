import React from "react";
import { motion } from "framer-motion";

const ambienceData = [
    {
        image: "https://res.cloudinary.com/dyecmgvcy/image/upload/f_auto,q_auto,w_1200/v1741173420/ambience_b7rmjt.webp",
        title: "Industrial Chic",
        desc: "A raw, street-style setting with gravel flooring, DIY tire seating, and warm Edison lights that set the perfect mood for a chill night out.",
    },
    {
        image: "https://res.cloudinary.com/dyecmgvcy/image/upload/f_auto,q_auto,w_1200/v1741173420/ambience2_vjzmdl.webp",
        title: "Screening Lounge",
        desc: "The ultimate hang-out spot featuring a massive outdoor projector for movies, cricket matches, and live sports events under the stars.",
    },
];

const Ambience = () => {
    return (
        <section id="ambience" className="ambience-section">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <h2 className="section-heading">Our Ambience</h2>
                <div className="gold-divider" />
                <p className="section-subtitle">
                    More than just food — we create unforgettable experiences
                </p>
            </motion.div>

            <div className="ambience-grid">
                {ambienceData.map((item, i) => (
                    <motion.div
                        key={i}
                        className="ambience-card"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: i * 0.15 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="ambience-card-img"
                            loading="lazy"
                        />
                        <div className="ambience-card-overlay" />
                        <div className="ambience-card-content">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Ambience;
