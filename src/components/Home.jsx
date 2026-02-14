import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <section id="home" className="hero">
            {/* Background with darker gradient for text readability */}
            <div
                className="hero-bg"
                style={{
                    backgroundImage: `url("/hero_bg.png")`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}
            />

            {/* Overlay is handled in CSS now (linear-gradient) */}
            <div className="hero-overlay" />

            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-badge"
                >
                    Est. 2024 • Cinema Cafe & Social Hub
                </motion.div>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Chill Vibes <br />
                    <span>Street Bites</span>
                </motion.h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Step into our open-air container kitchen.
                    Enjoy big screens, warm lights, and the city's best comfort food.
                </motion.p>

                <motion.div
                    className="hero-btn-group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <Link to="menu" smooth={true} offset={-80} duration={800}>
                        <button className="hero-btn-primary">
                            Explore Menu
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
