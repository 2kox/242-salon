import { Clock, Instagram, MapPin, Navigation, Phone } from 'lucide-react';
import { business } from '@/data/business';

export default function Visit() {
  return (
    <section id="visit" className="relative bg-charcoal-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400">Find Us</span>
          <h2 className="mt-4 font-display text-4xl text-cream-50 sm:text-5xl">Visit 242 Salon</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-between rounded-2xl border border-charcoal-700 bg-charcoal-900 p-8 sm:p-10">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-gold-400/40 bg-charcoal-950/60">
                  <MapPin className="h-5 w-5 text-gold-400" />
                </div>
                <div>
                  <p className="font-display text-lg text-cream-50">242 Salon</p>
                  {business.addressLines.map((line) => (
                    <p key={line} className="text-cream-300/80">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-gold-400/40 bg-charcoal-950/60">
                  <Phone className="h-5 w-5 text-gold-400" />
                </div>
                <div>
                  <p className="font-display text-lg text-cream-50">Phone</p>
                  <a href={business.phoneHref} className="text-cream-300/80 transition-colors hover:text-gold-400">
                    {business.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-gold-400/40 bg-charcoal-950/60">
                  <Clock className="h-5 w-5 text-gold-400" />
                </div>
                <div>
                  <p className="font-display text-lg text-cream-50">Opening Hours</p>
                  <p className="text-cream-300/80">Daily</p>
                  <p className="text-cream-300/80">10:00 AM – 12:00 AM</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={business.phoneHref}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-charcoal-950 transition-all duration-300 hover:bg-gold-300 hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <a
                href={business.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-cream-100/25 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-cream-50 transition-all duration-300 hover:border-gold-400/60 hover:bg-white/5"
              >
                <Navigation className="h-4 w-4" />
                Directions
              </a>
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-cream-100/25 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-cream-50 transition-all duration-300 hover:border-gold-400/60 hover:bg-white/5"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>

          <div className="min-h-[380px] overflow-hidden rounded-2xl border border-charcoal-700 lg:min-h-full">
            <iframe
              title="242 Salon location map"
              src={business.mapEmbedUrl}
              className="h-full min-h-[380px] w-full"
              style={{ filter: 'invert(90%) hue-rotate(180deg) contrast(0.9)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
