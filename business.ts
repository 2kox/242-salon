const address = 'Shop B0178, Avenue 0120, 264, Diyar Al Muharraq, Bahrain';
const encodedAddress = encodeURIComponent('242 Salon, Shop B0178, Avenue 0120, 264, Diyar Al Muharraq, Bahrain');

export const business = {
  name: '242 Salon',
  tagline: "Men's Grooming",
  phone: '+973 3554 6262',
  phoneHref: 'tel:+97335546262',
  instagramHandle: '@242_salon',
  instagramUrl: 'https://instagram.com/242_salon',
  addressLines: ['Shop B0178', 'Avenue 0120, 264', 'Diyar Al Muharraq, Bahrain'],
  addressFull: address,
  hoursLabel: 'Daily · 10:00 AM – 12:00 AM',
  hours: [
    { day: 'Sunday', time: '10:00 AM – 12:00 AM' },
    { day: 'Monday', time: '10:00 AM – 12:00 AM' },
    { day: 'Tuesday', time: '10:00 AM – 12:00 AM' },
    { day: 'Wednesday', time: '10:00 AM – 12:00 AM' },
    { day: 'Thursday', time: '10:00 AM – 12:00 AM' },
    { day: 'Friday', time: '10:00 AM – 12:00 AM' },
    { day: 'Saturday', time: '10:00 AM – 12:00 AM' },
  ],
  rating: 4.8,
  reviewCount: 78,
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`,
  reviewsUrl: `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
  mapEmbedUrl: `https://maps.google.com/maps?q=${encodedAddress}&z=16&output=embed`,
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit Us', href: '#visit' },
];
