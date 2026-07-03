'use client';
import { useContext } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, Send } from 'lucide-react';
import { CartContext } from '@/context/CartContext';
import { CONTACT } from '@/data/site';
import gsap from 'gsap';

export default function Cart() {
  const { 
    cartItems, 
    addItem, 
    removeItem, 
    deleteItem, 
    clearCart, 
    totalItems, 
    totalPrice, 
    sendToWhatsApp,
    isCartOpen,
    setIsCartOpen
  } = useContext(CartContext);

  return (
    <>
      {/* Floating Cart Button */}
      {!isCartOpen && totalItems > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 md:bottom-6 md:right-6 z-[90] bg-[var(--gold)] text-[#020f0a] p-3 md:p-4 rounded-full shadow-[0_0_20px_rgba(212,168,83,0.4)] hover:scale-110 transition-transform flex items-center justify-center animate-bounce"
        >
          <ShoppingBag className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-white text-[#020f0a] text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-lg border-2 border-[var(--gold)]">
            {totalItems}
          </span>
        </button>
      )}

      {isCartOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-[#020f0a]/80 backdrop-blur-sm z-[100]"
            onClick={() => setIsCartOpen(false)}
          />
          
          {/* Drawer */}
          <div className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-[#051a11] shadow-2xl z-[110] flex flex-col border-l border-white/5 transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] translate-x-0">
        
        {/* Header */}
        <div className="p-4 md:p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-[var(--gold)]" />
            <h2 className="font-display text-xl md:text-2xl font-bold text-white">Your Order</h2>
            <span className="bg-[var(--gold)] text-[#020f0a] px-2 py-0.5 rounded-full text-xs font-bold ml-2">
              {totalItems}
            </span>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-[var(--text-muted)]">
              <ShoppingBag className="w-16 h-16 mb-4 opacity-20" />
              <p className="text-lg">Your cart is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="mt-6 text-[var(--gold)] font-bold hover:underline"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-3 md:gap-4 p-3 md:p-4 rounded-2xl bg-white/5 border border-white/5">
                {/* Item Image */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden bg-[#020f0a] shrink-0 border border-white/10">
                  {item.imageUrl ? (
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[var(--gold)]/30 font-display text-[10px] md:text-xs font-bold">
                      TD
                    </div>
                  )}
                </div>

                {/* Item Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-white leading-tight mb-1 line-clamp-2 text-sm md:text-base">{item.name}</h4>
                    <p className="text-[var(--gold)] font-medium text-xs md:text-sm">₹{item.price}</p>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 md:gap-3 bg-[#020f0a] rounded-full px-2 py-1 border border-white/10">
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="p-1 hover:text-[var(--gold)] transition-colors text-white"
                      >
                        <Minus className="w-3 h-3 md:w-4 md:h-4" />
                      </button>
                      <span className="font-bold text-xs md:text-sm w-4 text-center text-white">{item.qty}</span>
                      <button 
                        onClick={() => addItem(item)}
                        className="p-1 hover:text-[var(--gold)] transition-colors text-white"
                      >
                        <Plus className="w-3 h-3 md:w-4 md:h-4" />
                      </button>
                    </div>

                    <button 
                      onClick={() => deleteItem(item.id)}
                      className="p-1.5 md:p-2 text-red-400 hover:bg-red-400/10 rounded-full transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        {cartItems.length > 0 && (
          <div className="p-4 md:p-6 pb-[calc(2rem+env(safe-area-inset-bottom))] md:pb-6 border-t border-white/5 bg-[#020f0a]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[var(--text-secondary)] text-sm md:text-base">Subtotal</span>
              <span className="font-bold text-lg text-white">₹{totalPrice}</span>
            </div>
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <span className="text-[var(--text-secondary)] text-sm md:text-base">Delivery Fee</span>
              <span className="text-[var(--text-muted)] text-xs md:text-sm">Calculated on WA</span>
            </div>
            
            <div className="flex flex-col gap-2 md:gap-3">
              <button 
                onClick={() => sendToWhatsApp(CONTACT.lines[0].raw)}
                className="w-full flex items-center justify-center gap-2 bg-[var(--green-whatsapp)] text-white p-3 md:p-4 rounded-xl font-bold hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20 text-sm md:text-base"
              >
                <Send className="w-4 h-4 md:w-5 md:h-5" />
                Order via WhatsApp
              </button>
              <button 
                onClick={clearCart}
                className="w-full mt-1 p-3 md:p-4 rounded-xl border border-white/10 text-[var(--text-muted)] font-bold hover:bg-white/5 hover:text-white transition-colors text-sm md:text-base"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
      </>
      )}
    </>
  );
}
