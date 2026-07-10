'use client';

import React, { createContext, useState, useEffect } from 'react';
import { CONTACT } from '@/data/site';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('tastyden_cart');
    if (saved) {
      try {
        setCartItems(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse cart data');
      }
    }
  }, []);

  // Save cart to local storage on change
  useEffect(() => {
    localStorage.setItem('tastyden_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addItem = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeItem = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const deleteItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const totalPrice = cartItems.reduce((acc, item) => {
    // Handle price formats like "59 (R) | 119 (L)" - default to taking the first number
    const priceMatch = String(item.price).match(/\d+/);
    const p = priceMatch ? parseInt(priceMatch[0], 10) : 0;
    return acc + p * item.qty;
  }, 0);

  const sendToWhatsApp = (targetNumber) => {
    if (cartItems.length === 0) return;

    let message = `🍕 *Order from Tasty Den*\n\n`;
    cartItems.forEach((item, idx) => {
      message += `${idx + 1}. ${item.name} × ${item.qty} — ₹${item.price}/-\n`;
    });
    message += `\n💰 *Estimated Total: ₹${totalPrice}/-*`;
    message += `\n🚚 *Delivery fee will be determined by the restaurant based on your exact location.*`;
    message += `\n📍 *Please attach your live location or drop a pin using the 📎 icon below for delivery.*`;
    message += `\n\n⚠️ *Disclaimer: The prices above are for reference purposes only. Any tampered or edited prices will not be accepted.*`;
    message += `\n\nPlease confirm availability and delivery time. Thank you! 🙏`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${targetNumber}?text=${encoded}`, '_blank');
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        deleteItem,
        clearCart,
        totalItems,
        totalPrice,
        sendToWhatsApp,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
