import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryImages = [
  { src: 'https://images.pexels.com/photos/3037244/pexels-photo-3037244.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1600', alt: 'Barber using clippers for a precise fade' },
  { src: 'https://images.pexels.com/photos/7781848/pexels-photo-7781848.jpeg?auto=compress&cs=tinysrgb&h=1400&w=1000', alt: 'Profile view of a stylish men\'s haircut' },
  { src: 'https://images.pexels.com/photos/3998427/pexels-photo-3998427.jpeg?auto=compress&cs=tinysrgb&h=1400&w=1000', alt: 'Barber preparing to shave a bearded client' },
  { src: 'https://images.pexels.com/photos/897263/pexels-photo-897263.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1600', alt: 'Barber trimming hair in a modern barbershop' },
  { src: 'https://images.pexels.com/photos/7195805/pexels-photo-7195805.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1600', alt: 'Premium salon interior with styling chairs' },
  { src: 'https://images.pexels.com/photos/15659494/pexels-photo-15659494.jpeg?auto=compress&cs=tinysrgb&h=1400&w=1000', alt: 'Close-up of hair styling technique' },
  { src: 'https://images.pexels.com/photos/2014808/pexels-photo-2014808.jpeg?auto=compress&cs=tinysrgb&h=1400&w=1000', alt: 'Barber performing a precise head shave' },
  { src: 'https://images.pexels.com/photos/9992820/pexels-photo-9992820.jpeg?auto=compress&cs=tinysrgb&h=1400&w=1000', alt: 'Bearded client getting a haircut' },
  { src: 'https://images.pexels.com/photos/4351729/pexels-photo-4351729.jpeg?auto=compress&cs=tinysrgb&h=1400&w=1000', alt: 'Barber giving a stylish haircut, close-up grooming' },
  { src: 'https://images.pexels.com/photos/5700063/pexels-photo-5700063.jpeg?auto=compress&cs=tinysrgb&h=1400&w=1000', alt: 'Detailed view of an electric razor haircut' },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowRight') setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));
      if (e.key === 'ArrowLeft') setActiveIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeIndex]);

  return (
    <section id="gallery" className="relative bg-charcoal-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400">Portfolio</span>
          <h2 className="mt-4 font-display text-4xl text-cream-50 sm:text-5xl">The Craft, Captured.</h2>
          <p className="mt-4 inline-block rounded-full border border-charcoal-700 bg-charcoal-900 px-4 py-1.5 text-xs uppercase tracking-widest text-cream-300/70">
            Demo imagery – replace with 242 Salon's original portfolio
          </p>
        </div>

        <div className="mt-14 columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setActiveIndex(index)}
              className="group block w-full overflow-hidden rounded-xl border border-charcoal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal-950/95 backdrop-blur-sm animate-fade-in p-4"
          onClick={() => setActiveIndex(null)}
        >
          <button
            aria-label="Close"
            onClick={() => setActiveIndex(null)}
            className="absolute right-5 top-5 rounded-full border border-cream-100/20 p-2.5 text-cream-100 transition-colors hover:border-gold-400 hover:text-gold-400"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-cream-100/20 p-2.5 text-cream-100 transition-colors hover:border-gold-400 hover:text-gold-400 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <img
            src={galleryImages[activeIndex].src}
            alt={galleryImages[activeIndex].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-gold-lg"
          />

          <button
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-cream-100/20 p-2.5 text-cream-100 transition-colors hover:border-gold-400 hover:text-gold-400 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
