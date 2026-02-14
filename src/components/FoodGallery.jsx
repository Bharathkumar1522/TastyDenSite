import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const foodImages = [
    "https://res.cloudinary.com/dyecmgvcy/image/upload/f_auto,q_auto,w_600/v1741174330/foodgallery1_nk0aha.webp",
    "https://res.cloudinary.com/dyecmgvcy/image/upload/f_auto,q_auto,w_600/v1741174330/foodgallery2_penuos.webp",
    "https://res.cloudinary.com/dyecmgvcy/image/upload/f_auto,q_auto,w_600/v1741174330/foodgallery3_gkmafb.webp",
    "https://res.cloudinary.com/dyecmgvcy/image/upload/f_auto,q_auto,w_600/v1741322223/WhatsApp_Image_2025-02-23_at_12.00.27_e1171ae0_n43cnl.jpg",
    "https://res.cloudinary.com/dyecmgvcy/image/upload/f_auto,q_auto,w_600/v1741174330/foodgallery4_hzajze.webp",
    "https://res.cloudinary.com/dyecmgvcy/image/upload/f_auto,q_auto,w_600/v1741174331/foodgallery5_hlqsvw.webp",
    "https://res.cloudinary.com/dyecmgvcy/image/upload/f_auto,q_auto,w_600/v1741174331/foodgallery6_lw9yvr.webp",
    "https://res.cloudinary.com/dyecmgvcy/image/upload/f_auto,q_auto,c_crop,ar_1:1,w_600/v1741326785/WhatsApp_Image_2025-02-23_at_12.00.29_cea29b2b_yhueyx.jpg",
    "https://res.cloudinary.com/dyecmgvcy/image/upload/f_auto,q_auto,w_600/v1741174332/foodgallery7_azdvgl.webp",
    "https://res.cloudinary.com/dyecmgvcy/image/upload/f_auto,q_auto,w_600/v1741322222/WhatsApp_Image_2025-02-23_at_12.00.26_478f557f_whmfgh.jpg",
];

const FoodGallery = () => {
    // Mobile Carousel Logic
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9,
            rotate: direction < 0 ? 5 : -5,
        })
    };

    const swipe = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let newIndex = prevIndex + newDirection;
            if (newIndex < 0) newIndex = foodImages.length - 1;
            if (newIndex >= foodImages.length) newIndex = 0;
            return newIndex;
        });
    };

    return (
        <section id="gallery" className="gallery-section">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <h2 className="section-heading">Food Gallery</h2>
                <div className="gold-divider" />
                <p className="section-subtitle">
                    A feast for your eyes — discover our mouthwatering creations
                </p>
            </motion.div>

            {/* === MOBILE CAROUSEL (Looping) === */}
            <div className="mobile-gallery-container">
                <div className="carousel-viewport">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.img
                            key={currentIndex}
                            src={foodImages[currentIndex]}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                                scale: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipeConfidenceThreshold = 10000;
                                const swipePower = Math.abs(offset.x) * velocity.x;

                                if (swipePower < -swipeConfidenceThreshold) {
                                    swipe(1);
                                } else if (swipePower > swipeConfidenceThreshold) {
                                    swipe(-1);
                                }
                            }}
                            className="carousel-image"
                            alt="Food Gallery"
                        />
                    </AnimatePresence>

                    {/* Arrows overlaid on image */}
                    <button className="carousel-nav prev" onClick={() => swipe(-1)} aria-label="Previous">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                    </button>
                    <button className="carousel-nav next" onClick={() => swipe(1)} aria-label="Next">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                    </button>

                    {/* Index Indicator */}
                    <div className="carousel-badge">
                        {currentIndex + 1} / {foodImages.length}
                    </div>
                </div>
            </div>

            {/* === DESKTOP MASONRY === */}
            <div className="gallery-masonry desktop-gallery">
                {foodImages.map((src, index) => (
                    <motion.div
                        key={index}
                        className="gallery-item"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.06 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <img
                            src={src}
                            alt={`Tasty Den Food ${index + 1}`}
                            loading="lazy"
                        />
                        <div className="gallery-item-overlay">
                            {/* Overlay content if needed */}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FoodGallery;