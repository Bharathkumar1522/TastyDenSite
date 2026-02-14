import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
    }, [mobileOpen]);

    const navLinks = [
        { to: "home", label: "Home" },
        { to: "about", label: "About" },
        { to: "menu", label: "Menu" },
        { to: "ambience", label: "Ambience" },
        { to: "gallery", label: "Gallery" },
        { to: "testimonials", label: "Reviews" },
        { to: "contact", label: "Order Now", cta: true },
    ];

    return (
        <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
            <div className="nav-container">
                {/* Logo */}
                <div className="nav-logo-wrapper">
                    <img
                        src="/logo2.png"
                        className="nav-logo"
                        alt="The Tasty Den"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentNode.innerHTML += '<h2 style="font-family: var(--font-display); font-weight: 700; color: var(--bg-white); font-size: 1.5rem; letter-spacing: 1px;">TASTY DEN</h2>';
                        }}
                    />
                </div>

                {/* Desktop Nav - Floating Pill Design */}
                <ul className="nav-links-desktop">
                    {navLinks.map((link) => (
                        <li key={link.to} className="nav-link-item">
                            <Link
                                to={link.to}
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={600}
                                className={link.cta ? "nav-cta" : ""}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger */}
                <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
                    <motion.div
                        animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }}
                        className="bar"
                    />
                    <motion.div
                        animate={{ opacity: mobileOpen ? 0 : 1 }}
                        className="bar"
                    />
                    <motion.div
                        animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }}
                        className="bar"
                    />
                </div>
            </div>

            {/* Mobile Full Screen Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="mobile-menu open"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setMobileOpen(false)}
                                smooth={true}
                                offset={-60}
                                duration={600}
                                className="mobile-nav-link"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
