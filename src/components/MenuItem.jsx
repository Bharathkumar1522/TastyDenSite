import React, { useState } from "react";
import { useCart } from "./CartContext";
import { motion, AnimatePresence } from "framer-motion";

const MenuItem = ({ item }) => {
    const baseUrl = "https://res.cloudinary.com/dyecmgvcy/image/upload/f_auto,q_auto,w_600/";
    const imageUrl = item.imageUrl ? `${baseUrl}${item.imageUrl}` : null;
    const { addItem, items } = useCart();
    const [justAdded, setJustAdded] = useState(false);

    const cartItem = items.find((i) => i.id === item.id);
    const qtyInCart = cartItem ? cartItem.qty : 0;

    const handleAdd = (e) => {
        e.stopPropagation();
        addItem(item);
        setJustAdded(true);
        setTimeout(() => setJustAdded(false), 600);
    };

    return (
        <div className={`menu-item ${qtyInCart > 0 ? "in-cart" : ""}`}>
            {imageUrl ? (
                <div className="menu-image-container">
                    <img
                        src={imageUrl}
                        alt={item.name}
                        loading="lazy"
                        onError={(e) => {
                            e.target.parentNode.style.display = 'none';
                        }}
                    />
                    <div className="dietary-badge">
                        <span className={`badge-icon ${item.isVeg ? 'veg' : 'non-veg'}`}>
                            <span className="dot"></span>
                        </span>
                    </div>
                </div>
            ) : (
                <div className="menu-no-image">
                    <div className="dietary-badge-text-only">
                        <span className={`badge-icon ${item.isVeg ? 'veg' : 'non-veg'}`}>
                            <span className="dot"></span>
                        </span>
                    </div>
                </div>
            )}

            <div className="menu-item-content">
                <div className="menu-title-row">
                    <h2>{item.name}</h2>
                </div>
                <div className="menu-price-row">
                    <span className="price">₹{item.price}/-</span>
                    <button
                        className={`add-to-cart-btn ${justAdded ? "added" : ""}`}
                        onClick={handleAdd}
                        aria-label={`Add ${item.name} to cart`}
                    >
                        <AnimatePresence mode="wait">
                            {justAdded ? (
                                <motion.span
                                    key="check"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    className="add-btn-icon"
                                >
                                    ✓
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="plus"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    className="add-btn-icon"
                                >
                                    +
                                </motion.span>
                            )}
                        </AnimatePresence>
                        {qtyInCart > 0 && (
                            <span className="add-btn-qty">{qtyInCart}</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
