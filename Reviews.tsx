import { ExternalLink, Star } from 'lucide-react';
import { business } from '@/data/business';

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-charcoal-900 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8 lg:px-10">
        <span className="text-xs uppercase tracking-[0.3em] text-gold-400">Reputation</span>
        <h2 className="mt-4 font-display text-4xl text-cream-50 sm:text-5xl">Trusted by Our Clients.</h2>

        <div className="mx-auto mt-12 max-w-md rounded-3xl border border-gold-400/25 bg-charcoal-950/60 p-10">
          <p className="font-display text-6xl text-cream-50 sm:text-7xl">{business.rating}</p>
          <div className="mt-4 flex items-center justify-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-6 w-6 ${
                  i < 4 ? 'fill-gold-400 text-gold-400' : 'fill-gold-400/50 text-gold-400'
                }`}
              />
            ))}
          </div>
          <p className="mt-4 text-sm uppercase tracking-widest text-cream-300/70">
            {business.reviewCount} Google Reviews
          </p>

          <a
            href={business.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-charcoal-950 transition-all duration-300 hover:bg-gold-300 hover:shadow-gold-lg hover:-translate-y-0.5"
          >
            View Google Reviews
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
