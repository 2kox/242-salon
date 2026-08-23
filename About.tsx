import { Clock, MapPin, Star } from 'lucide-react';
import { business } from '@/data/business';

export default function About() {
  return (
    <section id="about" className="relative bg-charcoal-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 -z-10 rounded-3xl border border-gold-400/20 hidden sm:block" />
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/7195805/pexels-photo-7195805.jpeg?auto=compress&cs=tinysrgb&h=1000&w=1200"
                alt="Modern barbershop interior"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-400">Our Story</span>
            <h2 className="mt-4 font-display text-4xl text-cream-50 sm:text-5xl">More Than a Haircut.</h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream-200/85">
              242 Salon is a men's grooming destination in Diyar Al Muharraq focused on sharp cuts,
              clean finishes and a modern barbershop experience.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-charcoal-700 bg-charcoal-950/60 p-5">
                <Star className="h-5 w-5 fill-gold-400 text-gold-400" />
                <p className="mt-3 font-display text-2xl text-cream-50">{business.rating}</p>
                <p className="text-xs uppercase tracking-wide text-cream-300/70">Google Rating</p>
              </div>
              <div className="rounded-xl border border-charcoal-700 bg-charcoal-950/60 p-5">
                <Clock className="h-5 w-5 text-gold-400" />
                <p className="mt-3 font-display text-2xl text-cream-50">Daily</p>
                <p className="text-xs uppercase tracking-wide text-cream-300/70">10 AM – 12 AM</p>
              </div>
              <div className="rounded-xl border border-charcoal-700 bg-charcoal-950/60 p-5">
                <MapPin className="h-5 w-5 text-gold-400" />
                <p className="mt-3 font-display text-2xl text-cream-50">Muharraq</p>
                <p className="text-xs uppercase tracking-wide text-cream-300/70">Diyar Al Muharraq</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
