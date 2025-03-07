import React from "react";
import { motion } from "framer-motion"; // Import animations

const Ambience = () => {
  // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <section id="gallery">
        <div className="ambience-container">
            <h1 className="text-white text-3xl sm:text-4xl font-bold text-center mt-20 mb-15">Ambience</h1>

            <div className="ambience-item ">
                <motion.img
                src="https://res.cloudinary.com/dyecmgvcy/image/upload/v1741173420/ambience_b7rmjt.webp"
                alt="Rustic Meetups"
                className="ambience-img"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                />
                <div className="ambience-text">
                <h2>Rustic Meetups</h2>
                <p>
                    Experience our charming outdoor patio, where beautiful lighting and a pleasant ambiance create the ideal setting for memorable meals with friends and family.
                </p>
                </div>
            </div>

            <div className="ambience-item p-5">
                <motion.img
                src="https://res.cloudinary.com/dyecmgvcy/image/upload/q_auto/v1741173420/ambience2_vjzmdl.webp"
                alt="Outdoor Movie Nights"
                className="ambience-img"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                />
                <div className="ambience-text">
                <h2>Outdoor Movie Nights</h2>
                <p>
                    Our outdoor space transforms into an entertainment hub with a large projector, allowing you to enjoy your favorite films and events under the stars while you dine.
                </p>
                </div>
            </div>
        </div>
        </section>
        
    );
};

export default Ambience;
