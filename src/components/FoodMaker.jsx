import { motion } from "framer-motion";

const stats = [
    { number: "98+", label: "Menu Items" },
    { number: "2+", label: "Years Exp." },
    { number: "1K+", label: "Happy Customers" },
];

const FoodMaker = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-grid">
                {/* Text Column */}
                <motion.div
                    className="about-text-col"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <span className="about-label">The Vibe</span>
                    <h2 className="about-title">
                        Puttur's First Cinema Cafe
                    </h2>
                    <div className="gold-divider" style={{ margin: '0 0 1.5rem 0' }} />
                    <p className="about-desc">
                        We are an open-air, <strong>fast-casual social hub</strong> built around a repurposed shipping container kitchen. Our vibe is "Industrial-Chic" mixed with raw street style—think gravel flooring, exposed metal, and huge screens.
                        <br /><br />
                        Whether you're here for an IPL match on our outdoor projector or just craving authentic street-style burgers and fried chicken, we've got the perfect spot for you.
                    </p>

                    <div className="about-stats">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                className="stat-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + i * 0.15, duration: 0.7 }}
                                viewport={{ once: true }}
                            >
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Image Column */}
                <motion.div
                    className="about-image-col"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="about-image-glow" />
                    <img
                        src="https://res.cloudinary.com/dyecmgvcy/image/upload/f_auto,q_auto,w_800/v1740994754/section2_hupimn.webp"
                        alt="Delicious food by The Tasty Den"
                        className="about-image"
                        loading="lazy"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default FoodMaker;
