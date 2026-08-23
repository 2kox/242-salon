import { MapPin, Navigation, Phone, Star } from 'lucide-react';
import { business } from '@/data/business';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100vh] items-center overflow-hidden bg-charcoal-950"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3037244/pexels-photo-3037244.jpeg?auto=compress&cs=tinysrgb&h=1600&w=2400"
          alt="Barber giving a precise haircut with clippers"
          className="h-full w-full object-cover object-center scale-105 animate-[fadeIn_1.8s_ease-out]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-charcoal-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/80 via-charcoal-950/20 to-charcoal-950/60" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-charcoal-950/50 px-4 py-1.5 text-sm text-cream-100 backdrop-blur-sm">
              <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
              {business.rating} <span className="text-cream-300">★ Google Rating</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-charcoal-950/50 px-4 py-1.5 text-sm text-cream-100 backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-gold-400" />
              Diyar Al Muharraq, Bahrain
            </span>
          </div>

          <h1
            className="font-display text-5xl leading-[1.1] text-cream-50 sm:text-6xl md:text-7xl lg:text-8xl animate-fade-in-up"
            style={{ animationDelay: '0.25s', opacity: 0 }}
          >
            Precision.
            <br />
            Style. <span className="text-gold-400">242.</span>
          </h1>

          <p
            className="mt-6 max-w-xl text-lg text-cream-200/90 sm:text-xl animate-fade-in-up"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            Premium grooming in the heart of Diyar Al Muharraq.
          </p>

          <div
            className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-in-up"
            style={{ animationDelay: '0.55s', opacity: 0 }}
          >
            <a
              href={business.phoneHref}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-charcoal-950 transition-all duration-300 hover:bg-gold-300 hover:shadow-gold-lg hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              Call to Book
            </a>
            <a
              href={business.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-cream-100/30 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-cream-50 backdrop-blur-sm transition-all duration-300 hover:border-gold-400/60 hover:bg-white/10"
            >
              <Navigation className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
              Get Directions
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce-slow hidden sm:block">
        <div className="h-10 w-6 rounded-full border-2 border-cream-100/40 flex items-start justify-center p-1">
          <div className="h-1.5 w-1.5 rounded-full bg-gold-400" />
        </div>
      </div>
    </section>
  );
}
