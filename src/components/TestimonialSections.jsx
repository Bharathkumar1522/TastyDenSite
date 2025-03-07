import React from "react";
import Testimonial from "./Testimonial.jsx";

const testimonials = [
    {
        name: "Raghavendra Royal",
        position: "Customer",
        company: "TastyDen",
        image: "https://res.cloudinary.com/dyecmgvcy/image/upload/v1741264409/malepic_yb0vf4.jpg",
        text: "Nice place to eat tasty food and also very nice ambience and all items are at affordable prices",
        rating: 5,
    },
    {
        name: "Bharath kumar",
        position: "Customer",
        company: "TastyDen",
        image: "https://res.cloudinary.com/dyecmgvcy/image/upload/v1741264409/malepic_yb0vf4.jpg",
        text: "Best wraps and friend chicken in puttur. Must try",
        rating: 4,
    },
    {
        name: "Nasirkhan",
        position: "Customer",
        company: "TasyDen",
        image: "https://res.cloudinary.com/dyecmgvcy/image/upload/v1741264409/malepic_yb0vf4.jpg",
        text: "If you are looking for best eats in puttur this is the place",
        rating: 5,
    },
    ];

    const TestimonialsSection = () => {
    return (
        <>
        <h2 className="text-white text-2xl sm:text-4xl font-bold text-center mt-20 mb-15"> Customer Ratings</h2>
        <div className="testimonials-section">
        <div className="testimonial-cards">
            {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
            ))}
        </div>
        </div>
        </>
        
    );
    };

export default TestimonialsSection;
