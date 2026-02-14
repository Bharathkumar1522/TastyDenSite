import React from "react";
import { motion } from "framer-motion";
import Testimonial from "./Testimonial.jsx";

const testimonials = [
    {
        name: "Raghavendra Royal",
        position: "Customer",
        company: "Tasty Den",
        image: "https://res.cloudinary.com/dyecmgvcy/image/upload/f_auto,q_auto,w_100/v1741264409/malepic_yb0vf4.jpg",
        text: "Nice place to eat tasty food and also very nice ambience and all items are at affordable prices.",
        rating: 5,
    },
    {
        name: "Bharath Kumar",
        position: "Customer",
        company: "Tasty Den",
        image: "https://res.cloudinary.com/dyecmgvcy/image/upload/f_auto,q_auto,w_100/v1741264409/malepic_yb0vf4.jpg",
        text: "Best wraps and fried chicken in Puttur. Must try!",
        rating: 4,
    },
    {
        name: "Nasir Khan",
        position: "Customer",
        company: "Tasty Den",
        image: "https://res.cloudinary.com/dyecmgvcy/image/upload/f_auto,q_auto,w_100/v1741264409/malepic_yb0vf4.jpg",
        text: "If you are looking for the best eats in Puttur, this is the place.",
        rating: 5,
    },
];

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="testimonials-section">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <h2 className="section-heading">Customer Reviews</h2>
                <div className="gold-divider" />
                <p className="section-subtitle">
                    Hear what our happy customers have to say about us
                </p>
            </motion.div>

            <div className="testimonials-grid">
                {testimonials.map((testimonial, index) => (
                    <Testimonial key={index} {...testimonial} />
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;
