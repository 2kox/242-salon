import { Instagram, Phone, Scissors } from 'lucide-react';
import { business, navLinks } from '@/data/business';

export default function Footer() {
  return (
    <footer className="border-t border-charcoal-800 bg-charcoal-950 pb-28 pt-16 lg:pb-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <Scissors className="h-6 w-6 text-gold-400" />
              <span className="font-display text-2xl text-cream-100">
                242 <span className="text-gold-400">Salon</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-cream-300/70">Diyar Al Muharraq, Bahrain</p>
            <a href={business.phoneHref} className="mt-1 block text-sm text-cream-300/70 hover:text-gold-400">
              {business.phone}
            </a>
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-sm text-cream-300/70 hover:text-gold-400"
            >
              <Instagram className="h-4 w-4" />
              {business.instagramHandle}
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-gold-400">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-cream-300/70 hover:text-gold-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-gold-400">Opening Hours</p>
            <p className="mt-4 text-sm text-cream-300/70">Daily</p>
            <p className="text-sm text-cream-300/70">10:00 AM – 12:00 AM</p>
            <a
              href={business.phoneHref}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold-400 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-charcoal-950 transition-all duration-300 hover:bg-gold-300"
            >
              <Phone className="h-3.5 w-3.5" />
              Call to Book
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-charcoal-800 pt-8 text-center text-xs text-cream-300/50">
          © {new Date().getFullYear()} 242 Salon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
