import { Scissors, SprayCan, Sparkles, Zap } from 'lucide-react';

const services = [
  {
    name: "Men's Haircut",
    description: 'Sharp, tailored cuts built around your face shape and personal style, finished with precision detailing.',
    image: 'https://images.pexels.com/photos/897263/pexels-photo-897263.jpeg?auto=compress&cs=tinysrgb&h=900&w=900',
    icon: Scissors,
  },
  {
    name: 'Beard Grooming',
    description: 'Expert shaping, lining and conditioning to keep your beard sharp, full and perfectly defined.',
    image: 'https://images.pexels.com/photos/3998427/pexels-photo-3998427.jpeg?auto=compress&cs=tinysrgb&h=900&w=900',
    icon: SprayCan,
  },
  {
    name: 'Hair Styling',
    description: 'Finishing touches and modern styling that carry your look from the chair to the street.',
    image: 'https://images.pexels.com/photos/15659494/pexels-photo-15659494.jpeg?auto=compress&cs=tinysrgb&h=900&w=900',
    icon: Sparkles,
  },
  {
    name: 'Head Shave',
    description: 'A clean, close, traditional shave for a smooth finish and a sharp, confident look.',
    image: 'https://images.pexels.com/photos/2014808/pexels-photo-2014808.jpeg?auto=compress&cs=tinysrgb&h=900&w=900',
    icon: Zap,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-charcoal-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400">What We Offer</span>
          <h2 className="mt-4 font-display text-4xl text-cream-50 sm:text-5xl">Grooming, Refined.</h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className="group relative overflow-hidden rounded-2xl border border-charcoal-700 bg-charcoal-900 transition-all duration-500 hover:-translate-y-2 hover:border-gold-400/50 hover:shadow-gold-lg"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/50 bg-charcoal-950/70 backdrop-blur-sm transition-colors duration-300 group-hover:bg-gold-400 group-hover:border-gold-400">
                    <Icon className="h-5 w-5 text-gold-400 transition-colors duration-300 group-hover:text-charcoal-950" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-cream-50">{service.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream-300/80">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-12 max-w-xl text-center text-sm uppercase tracking-widest text-cream-300/70">
          For service availability and pricing, contact 242 Salon.
        </p>
      </div>
    </section>
  );
}
