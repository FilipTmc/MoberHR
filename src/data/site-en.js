/* ============================================================
   ENGLESKA PODSTRANICA — /en/
   Svi tekstovi na jednom mjestu, kao i u site.js.
   Tekst je klijentov, prenesen u cijelosti.
   ============================================================ */

export const brandEn = {
  name: 'MoberHR',
  suffix: 'Events',
  logo: '/media/logo-mober.png',
  logoTamni: '/media/logo-mober-zelena.png',
  logoZnak: '/media/logo-mober-znak.png',
  logoZnakTamni: '/media/logo-mober-znak-zelena.png',
  logoAlt: 'MoberHR Events — premium event services',
  line: 'Weddings that are not organised for a single day.\nThey create memories for a lifetime.',
}

export const navEn = [
  { label: 'Croatia', href: '#croatia' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

/* Prebacivanje jezika */
export const jezik = {
  naHrvatski: { label: 'HR', href: '/', title: 'Hrvatska verzija' },
  naEngleski: { label: 'EN', href: '/en/', title: 'English version' },
}

/* 01 — naslovna */
export const heroEn = {
  title: 'Destination weddings in Croatia',
  tagline: 'Beautifully planned. Precisely executed. Personally cared for.',
  subtitle:
    'From Istria and Kvarner to Zagreb and the Adriatic coast, MoberHR Events creates and coordinates destination weddings with a strong local presence, trusted partners and more than two decades of hands-on experience.',
  cta: 'Tell us about your day',
  image: '/media/en/hero-coast.jpg',
  alt: 'Wedding ceremony on a cliff above the Adriatic at golden hour',
}

/* 02 — Croatia, through a local eye */
export const croatia = {
  title: 'Croatia, through a local eye.',
  lead: 'Croatia has a way of making celebrations feel naturally extraordinary.',
  places: [
    'A stone villa in Istria.',
    'A dinner overlooking the Adriatic.',
    'A private yacht between the islands.',
    'A long table surrounded by the people who travelled to be there.',
  ],
  turn: 'But beautiful surroundings are only the beginning.',
  body:
    'A destination wedding requires much more behind the scenes: experienced people, reliable suppliers, precise timing, local knowledge and someone who understands what needs to happen before anyone notices that it needs to happen.',
  close: 'That is where we come in.',
  photo: '/media/en/beach-ceremony.jpg',
  photoAlt: 'Beach ceremony beneath a floral arch by the sea',
}

/* 03 — traka fotografija */
export const stripEn = {
  items: [
    { type: 'image', src: '/media/en/table-runner.jpg', alt: 'Candles lining a long table runner in a warmly lit venue' },
    { type: 'video', src: '/media/en/table-setup.mp4', poster: '/media/en/poster-table-setup.jpg', alt: 'Table set with crystal glasses and white flowers' },
    { type: 'image', src: '/media/en/bouquet.jpg', alt: 'Bridal bouquet of white and blush roses resting on a veil' },
    { type: 'video', src: '/media/en/table-flowers.mp4', poster: '/media/en/poster-table-flowers.jpg', alt: 'Long table dressed with white lilies and greenery' },
    { type: 'image', src: '/media/en/table-candles.jpg', alt: 'Candlelit table with pink and white floral runner' },
  ],
  note: 'Swipe for more',
}

/* 04 — About Natasa */
export const aboutEn = {
  eyebrow: 'About Nataša',
  title: '24 years on the front line of hospitality.',
  intro: [
    'I started working in hospitality at the age of 17.',
    'What began as a first job became a profession, and eventually a way of understanding people, events and everything that happens behind them.',
    'For more than 24 years, I have worked on the front line of hospitality, weddings and events — in hotels, restaurants, catering operations and some of Zagreb’s most established event environments.',
  ],
  lesson: 'I have learned that a successful event is never built on one beautiful detail.',
  emphasis: 'It is built on hundreds of decisions made correctly.',
  decisions: [
    'The right person arriving at the right time.',
    'A supplier who does what was agreed.',
    'A team that knows its role.',
    'A timeline that actually works in real life.',
    'A problem solved before guests ever know there was one.',
  ],
  photo: '/media/en/natasa-en.jpg',
  photoAlt: 'Nataša, founder of MoberHR Events, by the Adriatic',
}

/* 05 — kontakt */
export const contactEn = {
  title: 'Get in touch',
  lead: 'Tell us the date, the place you have in mind and roughly how many guests — we will take it from there.',
  photo: '/media/en/couple-arch.jpg',
  photoAlt: 'Couple standing beneath a stone arch dressed with greenery',
  phoneLabel: 'Phone',
  emailLabel: 'Email',
  note: 'We reply in English, Croatian, German and Italian.',
}

/* Obrazac na engleskom — ista logika kao hrvatski.
   Dok je `povezan: false`, slanje ne šalje ništa (vidi ContactForm.jsx). */
export const formEn = {
  aktivan: true,
  povezan: false,
  naslov: 'Or write to us here',
  lead: 'A few lines are enough to start.',
  polja: {
    ime: 'Full name',
    email: 'Email',
    telefon: 'Phone (optional)',
    vrsta: 'Type of event',
    datum: 'Date (if you have one)',
    lokacija: 'Place or venue',
    gosti: 'Number of guests (approx.)',
    poruka: 'Your message',
  },
  vrste: ['Wedding', 'Private celebration', 'Corporate event', 'Other'],
  gumb: 'Send enquiry',
  nijePovezan: 'This form is not connected yet. Until it is, please reach us by phone or email:',
  poslano: 'Thank you. We will be in touch shortly.',
  napomenaDemo: 'Form preview — sending is not active yet.',
}

export const privacyEn = {
  obrazacPrivatnost: 'By sending an enquiry you agree to your details being used to reply to it.',
  obrazacPrivatnostLink: '/politika-privatnosti.html',
  linkLabel: 'Privacy policy',
}

/* Podnožje */
export const footerEn = {
  poveznice: [
    { label: 'Written complaint', href: '/pisani-prigovor-potrosaca.html' },
    { label: 'Price list', href: '/cjenik-usluga.html' },
    { label: 'Terms of business', href: '/opci-uvjeti-poslovanja.html' },
    { label: 'Privacy policy', href: '/politika-privatnosti.html' },
    { label: 'Contact', href: '#contact' },
  ],
  napomena: 'Legal pages are published in Croatian.',
}
