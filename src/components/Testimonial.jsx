import React from "react";
import { motion } from "framer-motion";

const Testimonial = ({ name, position, company, image, text, rating }) => {
    return (
        <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="testimonial-quote-icon">"</div>
            <p className="testimonial-text">{text}</p>
            <div className="testimonial-rating">
                {"★".repeat(rating)}{"☆".repeat(5 - rating)}
            </div>
            <div className="testimonial-author">
                <img src={image} alt={name} className="testimonial-img" loading="lazy" />
                <div className="testimonial-author-info">
                    <h4>{name}</h4>
                    <p>{position}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default Testimonial;
