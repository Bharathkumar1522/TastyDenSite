'use client';
import { useContext, useState } from 'react';
import { Plus, Check } from 'lucide-react';
import { CartContext } from '@/context/CartContext';
import gsap from 'gsap';

export default function MenuItem({ item, isMobile }) {
  const { cartItems, addItem } = useContext(CartContext);
  const [imgError, setImgError] = useState(false);
  const cartItem = cartItems.find(i => i.id === item.id);
  const qty = cartItem ? cartItem.qty : 0;

  const handleAdd = (e) => {
    // Micro-animation on button
    const btn = e.currentTarget;
    gsap.fromTo(btn, 
      { scale: 0.9 }, 
      { scale: 1, duration: 0.3, ease: 'back.out(2)' }
    );
    
    addItem(item);
  };

  return (
    <div className={`
      relative flex flex-col bg-[var(--bg-secondary)] border border-white/5 
      rounded-2xl overflow-hidden group transition-all duration-300
      hover:border-[var(--gold)]/30 hover:shadow-2xl hover:-translate-y-1 will-change-transform
      ${qty > 0 ? 'ring-1 ring-[var(--gold)]' : ''}
    `}>
      {/* Image Container */}
      <div className="relative h-32 sm:h-48 w-full overflow-hidden bg-[#020f0a]">
        {item.imageUrl && !imgError ? (
          <img 
            src={item.imageUrl} 
            alt={item.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[var(--gold)]/20 font-display text-2xl font-bold bg-gradient-to-br from-[#051a11] to-[#020f0a]">
            TASTY DEN
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between relative z-10 p-4 sm:p-5">
        <div>
          <div className="flex items-center mb-2">
            {/* Veg/Non-veg badge */}
            <div className={`w-3 h-3 rounded-full border-2 ${item.isVeg ? 'border-green-500 bg-green-500/20' : 'border-red-500 bg-red-500/20'} flex items-center justify-center mr-2`}>
              <div className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`} />
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-[var(--text-muted)] tracking-wider">
              {item.isVeg ? 'VEG' : 'NON-VEG'}
            </span>
          </div>

          <h3 className="font-display text-base sm:text-xl font-bold text-white leading-tight mb-2">
            {item.name}
          </h3>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="text-[var(--gold)] font-bold text-base sm:text-xl">
            ₹{item.price}
          </div>
          
          <button 
            onClick={handleAdd}
            className={`
              relative flex items-center justify-center w-10 h-10 rounded-full transition-colors shadow-lg
              ${qty > 0 
                ? 'bg-[var(--gold)] text-[#020f0a]' 
                : 'bg-white/10 text-white hover:bg-[var(--gold)] hover:text-[#020f0a]'
              }
            `}
          >
            {qty > 0 ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
            
            {/* Quantity Badge */}
            {qty > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-white text-[#020f0a] text-xs font-bold flex items-center justify-center rounded-full shadow-lg">
                {qty}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
