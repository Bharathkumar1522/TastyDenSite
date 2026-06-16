'use client';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { CONTACT, SOCIAL, MAPS_EMBED_URL, DEVELOPER } from '@/data/site';
import SectionHeading from '../ui/SectionHeading';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020f0a] pt-24 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          label="Location"
          title="Find Us"
          subtitle="Drop by for great food, live screenings, and a chill evening with friends."
        />

        <div className="grid md:grid-cols-2 mt-16 rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl bg-[#051a11]">
          {/* Info Side */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <img 
              src="/logo2.png" 
              alt="The Tasty Den" 
              className="h-20 w-auto object-contain self-start mb-8 rounded-2xl border-2 border-[var(--gold)] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            />

            <ul className="space-y-6 text-[var(--text-secondary)]">
              <li className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[var(--gold)] shrink-0 mt-1" />
                <span className="text-lg">{CONTACT.phone}</span>
              </li>
              <li className="flex items-start gap-4">
                <MessageCircle className="w-6 h-6 text-[var(--gold)] shrink-0 mt-1" />
                <span className="text-lg">{CONTACT.whatsapp}</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[var(--gold)] shrink-0 mt-1" />
                <span className="text-lg leading-relaxed">{CONTACT.address}</span>
              </li>
            </ul>
          </div>

          {/* Map Side */}
          <div className="h-[400px] md:h-auto relative min-h-[300px]">
            <iframe
              src={MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="The Tasty Den Location"
              className="absolute inset-0"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 py-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
              <FaWhatsapp className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[var(--text-muted)] text-sm mb-2">
              Designed & Developed by{' '}
              <a href={DEVELOPER.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] hover:underline">
                {DEVELOPER.name}
              </a>
            </p>
            <p className="text-[var(--text-muted)] text-xs">
              © {currentYear} The Tasty Den. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
