import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
        <div className="nav-container">
            {/* Logo */}
            <img 
            src="https://res.cloudinary.com/dyecmgvcy/image/upload/v1740984091/Tastyden_Logo_exrvry.png" 
            className="w-50" 
            alt="Tasty Den Logo"
            />

            {/* Navigation Links (Desktop & Mobile) */}
            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li><Link to="home" smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="menu" smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)}>Menu</Link></li>
            <li><Link to="gallery" smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)}>Gallery</Link></li>
            <li><Link to="testimonials" smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)}>Testimonials</Link></li>
            <li><Link to="contact" smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>

            {/* Mobile Menu Button */}
            <div className="hamburger" onClick={toggleMenu}>
            <span className={`bar ${isOpen ? "open" : ""}`}></span>
            <span className={`bar ${isOpen ? "open" : ""}`}></span>
            <span className={`bar ${isOpen ? "open" : ""}`}></span>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;
