import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "./CartContext";

const Cart = () => {
    const {
        items,
        removeItem,
        deleteItem,
        addItem,
        clearCart,
        totalItems,
        totalPrice,
        showCart,
        setShowCart,
        sendToWhatsApp,
    } = useCart();

    return (
        <>
            {/* Floating Cart Button */}
            <AnimatePresence>
                {totalItems > 0 && (
                    <motion.button
                        className="cart-fab"
                        onClick={() => setShowCart(true)}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        aria-label="Open cart"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                        </svg>
                        <span className="cart-fab-count">{totalItems}</span>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Cart Drawer Overlay */}
            <AnimatePresence>
                {showCart && (
                    <>
                        <motion.div
                            className="cart-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowCart(false)}
                        />
                        <motion.div
                            className="cart-drawer"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {/* Header */}
                            <div className="cart-drawer-header">
                                <h3>Your Order</h3>
                                <button
                                    className="cart-close-btn"
                                    onClick={() => setShowCart(false)}
                                    aria-label="Close cart"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            </div>

                            {/* Cart Items */}
                            <div className="cart-items-list">
                                {items.length === 0 ? (
                                    <div className="cart-empty">
                                        <p>Your cart is empty</p>
                                        <span>Tap items on the menu to add them here</span>
                                    </div>
                                ) : (
                                    items.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            className="cart-item-row"
                                            layout
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -30 }}
                                        >
                                            <div className="cart-item-info">
                                                <span className={`cart-veg-dot ${item.isVeg ? "veg" : "non-veg"}`}></span>
                                                <div>
                                                    <p className="cart-item-name">{item.name}</p>
                                                    <p className="cart-item-price">₹{item.price}/-</p>
                                                </div>
                                            </div>
                                            <div className="cart-item-controls">
                                                <button
                                                    className="cart-qty-btn"
                                                    onClick={() => removeItem(item.id)}
                                                    aria-label="Decrease quantity"
                                                >
                                                    −
                                                </button>
                                                <span className="cart-qty">{item.qty}</span>
                                                <button
                                                    className="cart-qty-btn"
                                                    onClick={() => addItem(item)}
                                                    aria-label="Increase quantity"
                                                >
                                                    +
                                                </button>
                                                <button
                                                    className="cart-delete-btn"
                                                    onClick={() => deleteItem(item.id)}
                                                    aria-label="Remove item"
                                                >
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="3 6 5 6 21 6" />
                                                        <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))
                                )}
                            </div>

                            {/* Footer */}
                            {items.length > 0 && (
                                <div className="cart-drawer-footer">
                                    <div className="cart-total-row">
                                        <span>Estimated Total</span>
                                        <span className="cart-total-price">₹{totalPrice}/-</span>
                                    </div>
                                    <button
                                        className="cart-whatsapp-btn"
                                        onClick={sendToWhatsApp}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        Send Order via WhatsApp
                                    </button>
                                    <button
                                        className="cart-clear-btn"
                                        onClick={clearCart}
                                    >
                                        Clear Cart
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Cart;
