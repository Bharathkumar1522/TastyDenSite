import React from "react";
import { motion } from "framer-motion";

const Testimonial = ({ name, position, company, image, text, rating }) => {
    return (
        <section id="testimonials">
        <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.8,
            }}
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is in view
            >
            <img src={image} alt={name} className="testimonial-img" />
            <h3 className="font-semibold">{name}</h3>
            <p>{position} of {company}</p>
            <div className="testimonial-rating">
                {"★".repeat(rating)} {"☆".repeat(5 - rating)} {/* Star rating */}
            </div>
            <p className="testimonial-text">"{text}"</p>
        </motion.div>
        </section>
        
    );
};

export default Testimonial;



