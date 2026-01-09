export const APP_CONFIG = {
  name: 'Kattalan',
  phone: '+91 98765 43210',
  email: 'hello@kattalan.in',
  whatsapp: '919999999999',
  copyrightYear: 2026
};

export const STANDARD_WOOD_COLOURS = [
  'Natural Clear', 'Golden Teak', 'Spiced Walnut', 'Vintage Cherry', 'Charcoal Black'
];

export const PRODUCTS = [
  {
    id: 'n1',
    name: 'The Visionary',
    category: 'Signature Series',
    price: '₹52,000',
    description: 'A desk that looks to the future. Features a seamless waterfall edge.',
    features: ['Waterfall Edge', 'Hidden Tech Dock', 'Premium Walnut'],
    image: 'the-visionary.jpg',
    sizes: ['5ft x 2.5ft', '6ft x 3ft'],
    finishes: STANDARD_WOOD_COLOURS,
    isNew: true
  },
  {
    id: 'n2',
    name: 'The Diplomat',
    category: 'Heritage Series',
    price: '₹58,000',
    description: 'A commanding presence. Deep tones and enclosed sides create a fortress.',
    features: ['Enclosed Sides', 'Leather Inlay Option', 'Brass Accents'],
    image: 'the-diplomat.jpg',
    sizes: ['6ft x 3ft', '7ft x 3.5ft'],
    finishes: STANDARD_WOOD_COLOURS,
    isNew: true
  },
  {
    id: 'n3',
    name: 'The Sentinel',
    category: 'Industrial Series',
    price: '₹48,000',
    description: 'Built like a tank. Reinforced steel geometry meets 2-inch thick solid timber.',
    features: ['2-inch Thick Top', 'X-Frame Legs', 'Max Load 150kg'],
    image: 'the-sentinel.jpg',
    sizes: ['5ft x 2.5ft', '6ft x 2.5ft'],
    finishes: STANDARD_WOOD_COLOURS,
    isNew: true
  },
  {
      id: 'p1',
      name: 'The Founder',
      category: 'Flagship Series',
      price: '₹38,000',
      description: 'Our signature solid acacia workstation. 1.5-inch thick solid wood top.',
      features: ['Solid Acacia Wood', 'Industrial Steel Frame', 'Cable Management'],
      image: 'the-founder.jpg',
      sizes: ['5ft x 2.5ft', '6ft x 2.5ft'],
      finishes: STANDARD_WOOD_COLOURS
  }
  // Add rest of your products here...
];