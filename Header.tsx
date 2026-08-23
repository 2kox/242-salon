import { useEffect, useState } from 'react';
import { Menu, Phone, Scissors, X } from 'lucide-react';
import { business, navLinks } from '@/data/business';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? 'bg-charcoal-950/95 backdrop-blur-md border-b border-gold-900/40 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-charcoal-950/70 via-charcoal-950/20 to-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#home" className="flex items-center gap-2 group">
            <Scissors className="h-6 w-6 text-gold-400 transition-transform duration-500 group-hover:rotate-90" />
            <span className="font-display text-2xl tracking-wide text-cream-100">
              242 <span className="text-gold-400">Salon</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-widest text-cream-200/90 hover:text-gold-400 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-charcoal-950 transition-all duration-300 hover:bg-gold-300 hover:shadow-gold-lg hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              Call to Book
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 text-cream-100"
          >
            {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
          menuOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3.5 text-base uppercase tracking-wide text-cream-100 hover:bg-charcoal-800 hover:text-gold-400 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href={business.phoneHref}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-charcoal-950"
          >
            <Phone className="h-4 w-4" />
            Call to Book
          </a>
        </nav>
      </div>
    </header>
  );
}
