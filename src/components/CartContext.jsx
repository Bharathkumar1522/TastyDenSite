import React, { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const WHATSAPP_NUMBER = "918142762285";

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const addItem = useCallback((item) => {
        setItems((prev) => {
            const existing = prev.find((i) => i.id === item.id);
            if (existing) {
                return prev.map((i) =>
                    i.id === item.id ? { ...i, qty: i.qty + 1 } : i
                );
            }
            return [...prev, { ...item, qty: 1 }];
        });
    }, []);

    const removeItem = useCallback((id) => {
        setItems((prev) => {
            const existing = prev.find((i) => i.id === id);
            if (existing && existing.qty > 1) {
                return prev.map((i) =>
                    i.id === id ? { ...i, qty: i.qty - 1 } : i
                );
            }
            return prev.filter((i) => i.id !== id);
        });
    }, []);

    const deleteItem = useCallback((id) => {
        setItems((prev) => prev.filter((i) => i.id !== id));
    }, []);

    const clearCart = useCallback(() => {
        setItems([]);
    }, []);

    const totalItems = items.reduce((sum, i) => sum + i.qty, 0);

    const totalPrice = items.reduce((sum, i) => {
        // Parse price — handle "59 (R) | 119 (L)" style prices by taking the first number
        const numericPrice = parseInt(i.price.replace(/[^\d]/g, ""), 10) || 0;
        return sum + numericPrice * i.qty;
    }, 0);

    const sendToWhatsApp = useCallback(() => {
        if (items.length === 0) return;

        let message = "🍕 *Order from Tasty Den*\n\n";
        items.forEach((item, idx) => {
            message += `${idx + 1}. ${item.name} × ${item.qty} — ₹${item.price}/-\n`;
        });
        message += `\n💰 *Estimated Total: ₹${totalPrice}/-*`;
        message += `\n🚚 *(₹40 delivery fee | Delivery within 4km radius only)*`;
        message += `\n\nPlease confirm availability and delivery time. Thank you! 🙏`;

        const encoded = encodeURIComponent(message);
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
    }, [items, totalPrice]);

    return (
        <CartContext.Provider
            value={{
                items,
                addItem,
                removeItem,
                deleteItem,
                clearCart,
                totalItems,
                totalPrice,
                showCart,
                setShowCart,
                sendToWhatsApp,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
