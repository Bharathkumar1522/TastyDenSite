'use client';
import ScrollReveal from './ScrollReveal';

export default function SectionHeading({ label, title, subtitle, alignment = 'center' }) {
  return (
    <div className={`  ${alignment === 'center' ? 'text-center ' : 'text-left'}`}>
      {label && (
        <ScrollReveal delay={0}>
          <span className="text-[var(--gold)] font-semibold uppercase tracking-[2px] text-sm block ">
            {label}
          </span>
        </ScrollReveal>
      )}
      
      <ScrollReveal delay={0.1}>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[var(--bg-white)]  leading-tight">
          {title}
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className={`h-[2px] w-24 bg-[var(--gold)]  ${alignment === 'center' ? '' : ''}`} />
      </ScrollReveal>

      {subtitle && (
        <ScrollReveal delay={0.3}>
          <p className="text-[var(--text-secondary)] text-lg md:text-xl  leading-relaxed ">
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
