import React from "react";
import { motion } from "framer-motion";
import clipboardCopy from "clipboard-copy";

const Contact = () => {
  // The phone number to be used for WhatsApp and copy
    const phoneNumber = "+917671814378";

    // Handle 'Chat with us' button click (opens WhatsApp)
    const handleChatClick = () => {
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        window.open(whatsappUrl, "_blank");
    };

    // Handle 'Copy Number' button click (copies to clipboard)
    const handleCopyClick = () => {
        clipboardCopy(phoneNumber);
        alert("Phone number copied to clipboard!");
    };

    return (
        <section id="contact">
        <div className="order-now-section">
            {/* Animated container */}
            <motion.div
            className="order-now-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is visible
            >
                <h1 className="order-heading">Order Now</h1>
                <p className="order-description">
                "Feel free to text or call to place an order."
                </p>

                <div className="buttons">
                {/* Chat with us button */}
                <button
                    onClick={handleChatClick}
                    className="chat-button"
                >
                    <i className="whatsapp-icon">📱</i> Chat with us
                </button>

                {/* Copy number button */}
                <button
                    onClick={handleCopyClick}
                    className="copy-button"
                >
                    <i className="copy-icon">📋</i> Copy Number
                </button>
                </div>
            </motion.div>
        </div>
        </section>

    );
};

export default Contact;
