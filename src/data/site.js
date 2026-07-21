// All business constants for The Tasty Den
export const SITE = {
  name: 'The Tasty Den',
  tagline: 'Chill Vibes, Street Bites',
  established: 2024,
  type: 'Cinema Cafe & Social Hub',
  description:
    'Step into our open-air container kitchen. Enjoy big screens, warm lights, and the city\'s best comfort food.',
  seoDescription:
    'The Tasty Den — Experience the taste of perfection. Fresh, flavorful fast food in Puttur, Andhra Pradesh. Burgers, pizza, mojitos & more.',
  keywords:
    'Tasty Den, Puttur restaurant, burgers, pizza, fast food, Andhra Pradesh, cinema cafe',
};

export const CONTACT = {
  // Keeping old vars for backwards compatibility just in case
  phone: '+91 81427 62285',
  phoneRaw: '918142762285',
  whatsapp: '+91 8074 473 895',
  whatsappRaw: '918074473895',
  
  lines: [
    { label: 'Line 1', phone: '+91 81427 62285', raw: '918142762285' },
    { label: 'Line 2', phone: '+91 8074 473 895', raw: '918074473895' },
  ],
  
  address:
    'Opp. to GDR Convention Hall, near Govindapalem, Puttur, Andhra Pradesh 517583',
  deliveryFee: 40,
  deliveryRadius: 4,
};

export const SOCIAL = {
  facebook:
    'https://www.facebook.com/profile.php?id=61570224764515&mibextid=rS40aB7S9Ucbxw6v',
  instagram:
    'https://www.instagram.com/the_tastyden_2024?igsh=MWN6NXh6cDIxNWdrcA%3D%3D&utm_source=qr',
  whatsapp: 'https://wa.me/918074473895',
};

export const MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62090.56878964465!2d79.51950500968995!3d13.433326237716756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d5b256fd873a7%3A0x1786184e1f78ff6!2sThe%20Tasty%20Den!5e0!3m2!1sen!2sin!4v1741267858223!5m2!1sen!2sin';

export const DEVELOPER = {
  name: 'DevOz',
  linkedin: 'https://devoz.co.in',
  email: 'bk152002@gmail.com',
};

export const CLOUDINARY_BASE =
  'https://res.cloudinary.com/dyecmgvcy/image/upload';

export const NAV_LINKS = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Menu', to: 'menu' },
  { label: 'Ambience', to: 'ambience' },
  { label: 'Gallery', to: 'gallery' },
  { label: 'Reviews', to: 'testimonials' },
];
