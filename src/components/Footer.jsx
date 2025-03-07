import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <div className="restaurant-location-section">
        {/* Animated container for the section */}
        <motion.div
            className="restaurant-location-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <h2 className="text-white text-2xl sm:text-4xl font-bold text-center mt-20 mb-5">Our Restaurants. Where to Find Us?</h2>
            <p className="text-white mb-10 text-sm sm:text-base ">
            Want to have a superb meal in an exceptional setting with family, friends, or work colleagues? Here is the address of our restaurant.
            </p>
        </motion.div>
        
        <div className="footer-main">
            {/* Footer Content */}
            <div className="footer-container">
            <div className="footer-logo">
                <img src="https://res.cloudinary.com/dyecmgvcy/image/upload/v1740984091/Tastyden_Logo_exrvry.png" alt="Tasty Den Logo" className="footer-logo-img" />
            </div>
            <div className="footer-links">
                <div className="footer-column">
                <h3>Contact Us</h3>
                <ul>
                    <li>📞 Call: +917671814378</li>
                    <li>📍 Address: opp. to GDR convention hall, near govindapalem, Puttur, Andhra Pradesh 517583</li>
                </ul>
                </div>
            </div>
            </div>

            <motion.div
            className="google-maps-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 50 }}
            >
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62090.56878964465!2d79.51950500968995!3d13.433326237716756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d5b256fd873a7%3A0x1786184e1f78ff6!2sThe%20Tasty%20Den!5e0!3m2!1sen!2sin!4v1741267858223!5m2!1sen!2sin"
                width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
            ></iframe>
            </motion.div>
        </div>
        <p className='mt-10'>Designed & Developed by 
            <a href="https://www.linkedin.com/in/bharath-kumar-sagi/" target="_blank" className="ml-3 text-blue-400 hover:underline">Bharath</a> | 
            <a href="mailto:bk152002@gmail.com" className="ml-3 text-blue-400 hover:underline">Email</a>
        </p>
        <hr className="border-t border-gray-400 mt-2 mb-4" />
            <div className='footer-icon-container'>
                
                    <div class="icons">
                    <ul className='footer-icon-bottom'>
                        <li>
                            <a target='blank' href="https://www.facebook.com/profile.php?id=61570224764515&mibextid=rS40aB7S9Ucbxw6v" className='icon-desc'><ion-icon name="logo-facebook"></ion-icon></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/the_tastyden_2024?igsh=MWN6NXh6cDIxNWdrcA%3D%3D&utm_source=qr" target='blank' className='icon-desc'><ion-icon name="logo-instagram"></ion-icon></a>
                        </li>
                        <li>
                            <a 
                                href="https://wa.me/917671814378" 
                                className="icon-desc" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <ion-icon name="logo-whatsapp"></ion-icon>
                            </a>
                        </li>
                    </ul>
                    </div>
                    <p className='mt-3'>© 2025 TastyDen. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
