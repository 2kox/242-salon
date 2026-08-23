import { Instagram, Navigation, Phone } from 'lucide-react';
import { business } from '@/data/business';

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold-900/40 bg-charcoal-950/95 backdrop-blur-md lg:hidden pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-3 divide-x divide-charcoal-800">
        <a
          href={business.phoneHref}
          className="flex flex-col items-center gap-1 py-3 text-cream-100 transition-colors active:text-gold-400"
        >
          <Phone className="h-5 w-5 text-gold-400" />
          <span className="text-xs font-medium uppercase tracking-wide">Call</span>
        </a>
        <a
          href={business.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-cream-100 transition-colors active:text-gold-400"
        >
          <Navigation className="h-5 w-5 text-gold-400" />
          <span className="text-xs font-medium uppercase tracking-wide">Directions</span>
        </a>
        <a
          href={business.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-cream-100 transition-colors active:text-gold-400"
        >
          <Instagram className="h-5 w-5 text-gold-400" />
          <span className="text-xs font-medium uppercase tracking-wide">Instagram</span>
        </a>
      </div>
    </div>
  );
}
