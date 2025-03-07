import React from "react";
import { motion } from "framer-motion"; // Import animations

const foodImages = [
    "https://res.cloudinary.com/dyecmgvcy/image/upload/q_auto/v1741174330/foodgallery1_nk0aha.webp",
    "https://res.cloudinary.com/dyecmgvcy/image/upload/q_auto/v1741174330/foodgallery2_penuos.webp",
    "https://res.cloudinary.com/dyecmgvcy/image/upload/q_auto/v1741174330/foodgallery3_gkmafb.webp",
    "https://res.cloudinary.com/dyecmgvcy/image/upload/q_auto/v1741322223/WhatsApp_Image_2025-02-23_at_12.00.27_e1171ae0_n43cnl.jpg",
    "https://res.cloudinary.com/dyecmgvcy/image/upload/q_auto/v1741174330/foodgallery4_hzajze.webp",
    "https://res.cloudinary.com/dyecmgvcy/image/upload/q_auto/v1741174331/foodgallery5_hlqsvw.webp",
    "https://res.cloudinary.com/dyecmgvcy/image/upload/q_auto/v1741174331/foodgallery6_lw9yvr.webp",
    "https://res.cloudinary.com/dyecmgvcy/image/upload/q_auto/v1741174332/foodgallery7_azdvgl.webp",
    "https://res.cloudinary.com/dyecmgvcy/image/upload/q_auto/v1741322222/WhatsApp_Image_2025-02-23_at_12.00.26_478f557f_whmfgh.jpg",
    ];

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
        
const FoodGallery = () => {
    return (
        <div className="food-gallery-section">
        {/* Heading is outside the main gallery container */}
        <h1 className="text-white text-3xl sm:text-4xl font-bold text-center mt-20 mb-15">Food Gallery</h1>  
    
        <div className="gallery-container">
            <div className="gallery-grid">
            {foodImages.map((src, index) => (
                <motion.img
                key={index}
                src={src}
                alt={`Food ${index + 1}`}
                className="gallery-img"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.3)" }}
                />
            ))}
            </div>
        </div>
        </div>
    );
};
    
        
export default FoodGallery;