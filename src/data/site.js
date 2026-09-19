/* ============================================================
   SVI TEKSTOVI, FOTOGRAFIJE I KONTAKTI NA JEDNOM MJESTU.
   Tekst je klijentov, prenesen u cijelosti i redoslijedom
   kojim je dostavljen. Mijenja se samo ova datoteka.

   PODACI ZA DOPUNU PRIJE OBJAVE oznaceni su s: TODO
   Prazna polja ("") se NE prikazuju na stranici.
   ============================================================ */

export const brand = {
  name: 'MoberHR',
  suffix: 'Weddings',
  // Zlatna inačica ide na tamne podloge, tamnozelena na svijetle
  // (zlatna na pjenušcu je preslaba za čitanje).
  // Puni logotip (s podnaslovom) za podnožje i završnu sekciju
  logo: '/media/logo-mober.png',
  logoTamni: '/media/logo-mober-zelena.png',
  // Kompaktni znak bez podnaslova za zaglavlje — čitljiviji u maloj visini
  logoZnak: '/media/logo-mober-znak.png',
  logoZnakTamni: '/media/logo-mober-znak-zelena.png',
  logoAlt: 'MoberHR Events — premium event services',
  line: 'Vjenčanja koja se ne organiziraju samo za jedan dan.\nNego stvaraju uspomene za cijeli život.',
}

export const contact = {
  phone: '',      // TODO: npr. '+385 91 234 5678'
  phoneHref: '',  // TODO: npr. 'tel:+385912345678'
  email: '',      // TODO: npr. 'info@moberhr.hr'
  instagram: 'https://www.instagram.com/mober.hr?stkn=eGJ4Z3V0ZW9iOTN0',
  facebook: 'https://m.facebook.com/AloKonobar/',
  tiktok: 'https://www.tiktok.com/@mober.hr?_r=1&_t=ZN-99cRLNoSJF8',
}

export const legal = {
  company: '',  // TODO: puni naziv obrta/tvrtke
  oib: '',      // TODO
  address: '',  // TODO
}

export const nav = [
  { label: 'O nama', href: '#o-nama' },
  { label: 'Usluge', href: '#usluge' },
  { label: 'Lokacije', href: '#lokacije' },
  { label: 'Kontakt', href: '#kontakt' },
]

/* 01 — naslovna sekcija */
export const hero = {
  title: 'Vaše je da volite.\nNaše je da se pobrinemo za ostalo.',
  subtitle: 'Organizacija i koordinacija vjenčanja u Zagrebu, Istri i na hrvatskoj obali.',
  cta: 'Ispričajte nam svoju priču',
  image: '/media/hero-obala.jpg',
  alt: 'Svadbena ceremonija na travnjaku iznad mora u zlatnim satima predvečerja',
}

/* 02 — uvodni citat, krasopis */
export const openingQuote = {
  text: '\u201conly something in me understands the voice of your eyes\u201d',
  author: 'e. e. cummings',
}

/* 03 — zašto postojimo */
export const why = {
  title: 'Vjenčanje ne mora biti savršeno da bi bilo vaše.',
  lead: 'Ali treba imati nekoga tko će znati što napraviti kada nešto ne ide prema planu.',
  someone: [
    'Netko tko će primijetiti da nedostaje čaša prije nego što to primijete gosti.',
    'Netko tko će dočekati fotografa, provjeriti catering, uskladiti glazbu, pripremiti prvi ples i pobrinuti se da mladenci u najvažnijem danu svog života ne moraju razmišljati ni o čemu osim jedno o drugome.',
  ],
  close: 'Upravo zato postojimo.',
}

/* 04 — Nataša */
export const about = {
  eyebrow: 'O meni',
  intro: [
    'Vjenčanje počinje puno prije nego što stignu prvi gosti.',
    'Počinje idejom, razgovorom, maštom i desecima odluka koje treba donijeti da bi jedan poseban dan na kraju izgledao jednostavno i prirodno.',
    'U hospitalityju, organizaciji događanja i svijetu vjenčanja gradila sam iskustvo više od 24 godine. Kroz taj sam put naučila koliko je za uspješan događaj važan svaki detalj – ali i koliko je važna osoba koja sve te detalje zna povezati u jednu cjelinu.',
  ],
  pocetak: {
    naslov: 'Zato moj posao ne počinje na dan vjenčanja.',
    podnaslov: 'Počinje prvim razgovorom s mladencima.',
    tekst: [
      'Želim upoznati njihovu priču, stil, želje i ono što im je važno. A onda dolazi dio koji posebno volim – pretvoriti njihove želje u ideje koje možda sami nisu ni zamislili.',
    ],
  },
  izvan: {
    naslov: 'Volim razmišljati izvan uobičajenog.',
    tekst: [
      'Možda je to posebna plesna koreografija za mladence, ples na svili, profesionalna plesna skupina, dolazak jahtom ili helikopterom, spektakularan vatromet, suhi led, hladne fontane, hostese ili neki potpuno drugačiji detalj koji će njihove goste iznenaditi.',
      'Ne zato da bi vjenčanje bilo „što raskošnije”, nego zato da bude što osobnije i pamtljivije.',
      'Imam ideje, kontakte i resurse koje mogu povezati s vizijom mladenaca – od prvih priprema i komunikacije s dobavljačima, preko organizacije svih elemenata događanja, do same koordinacije na dan vjenčanja.',
    ],
  },
  organizacija: {
    naslov: 'Jer dobra organizacija nije samo gomila tablica i popisa.',
    podnaslov: 'Dobra organizacija znači da netko vidi cijelu sliku.',
    tekst: [
      'Zna što treba napraviti, koga uključiti, gdje pronaći pravo rješenje i kako sve te različite elemente pretvoriti u jednu skladnu priču.',
      'Posebnu pažnju posvećujem komunikaciji s partnerima i dobavljačima. Fotograf, videograf, glazba, dekoracija, cvijeće, torta, rasvjeta, catering, zabavni sadržaj, osoblje i svi ostali sudionici moraju funkcionirati kao tim.',
    ],
  },
  dan: {
    naslov: 'A onda dolazi dan vjenčanja.',
    tekst: [
      'Tada se sve ono što smo mjesecima pripremali pretvara u stvarnost.',
      'Pratim raspored, komunikaciju, dolaske, dobavljače, osoblje i tijek događanja te se brinem da mladenci mogu biti potpuno prisutni u vlastitom danu.',
    ],
    dane: [
      'Da ne razmišljaju što još treba napraviti.',
      'Da ne zovu dobavljače.',
      'Da ne gledaju na sat.',
      'Da ne rješavaju probleme.',
      'Da jednostavno – uživaju.',
    ],
  },
  zakljucak: {
    tekst: [
      'Moj posao zato nije samo organizirati vjenčanje.',
      'Moj posao je osmisliti ga, povezati ljude i ideje, pretvoriti zamisli u izvediv plan i zatim taj plan provesti u djelo.',
      'A ono što najviše volim jest trenutak kada zajedno pronađemo onu jednu ideju zbog koje mladenci kažu:',
    ],
    citat: '„Da. To je baš naše.”',
    poslije: [
      'Jer najljepše vjenčanje nije nužno ono koje ima najviše svega.',
      'Najljepše je ono koje nitko drugi ne bi mogao napraviti na isti način.',
    ],
    finale: 'To je ono što želim stvoriti za vas.',
  },
  krasopis: '\u201cA truly unforgettable celebration is not just seen. It is felt.\u201d',
  photo: '/media/natasa.jpg',
  photoAlt: 'Nataša, voditeljica MoberHR Weddings',
}

/* 05 — od prve ideje do zadnjeg plesa */
export const idea = {
  title: 'Od prve ideje do zadnjeg plesa',
  lead: 'Ne morate imati gotov plan.',
  sub: 'Dovoljno je da znate kako želite da se osjećate tog dana.',
  moods: [
    'Romantično.', 'Elegantno.', 'Opušteno.', 'Veliko.', 'Intimno.',
    'Na moru.', 'U Istri.', 'U Zagrebu.', 'Na jahti.',
  ],
  moodLast: 'Ili negdje gdje još nitko prije vas nije napravio vjenčanje.',
  close: [
    'Mi ćemo zajedno složiti ostatak.',
    'Od lokacije i dobavljača do posljednjeg detalja na plesnom podiju.',
  ],
}

/* 06 — mozaik detalja */
export const mosaic = {
  items: [
    { type: 'image', src: '/media/detalj-svijece.jpg', alt: 'Dugački stol pri svjetlu svijeća s laganim platnenim trakačem' },
    { type: 'video', src: '/media/detalj-stol.mp4', poster: '/media/poster-detalj-stol.jpg', alt: 'Detalj postavljenog stola s kristalnim čašama i svijećama' },
    { type: 'image', src: '/media/detalj-cvijece-svijeca.jpg', alt: 'Plutajuća svijeća u kristalnoj čaši ispred bijelog cvjetnog aranžmana' },
    { type: 'image', src: '/media/detalj-buket.jpg', alt: 'Mladenka drži buket bijelih i bež ruža' },
    { type: 'image', src: '/media/detalj-terasa.jpg', alt: 'Svadbeni stol pod natkrivenom pergolom okruženom zelenilom' },
  ],
}

/* 07 — vaša priča, naš tim */
export const team = {
  title: 'Vaša priča. Naš tim.',
  lead: 'Za vaše vjenčanje ne dolazi jedna osoba koja pokušava istovremeno biti organizator, koordinator, konobar i „osoba za sve“.',
  sub: 'Na dan vašeg vjenčanja uz vas je naš tim od troje ljudi.',
  triad: ['Tri osobe.', 'Tri para očiju.', 'Jedan cilj – da sve funkcionira.'],
  body: 'Dok vi plešete, grlite svoje goste i uživate u večeri, mi pratimo raspored, dobavljače, protokol, catering, goste, atmosferu i sve one sitnice koje se ne vide kada ih netko dobro radi.',
  question: 'A ako se nešto dogodi?',
  answer: 'Vi možda nikada nećete ni saznati.',
  video: '/media/ceremonija.mp4',
  videoPoster: '/media/poster-ceremonija.jpg',
  videoAlt: 'Mladenci tijekom ceremonije, mladenka drži buket',
}

/* 08 — koordinacija na dan vjenčanja */
export const coordination = {
  title: 'Koordinacija na dan vjenčanja',
  lead: ['Vi ste svoj dio napravili.', 'Sada je red na nama.'],
  body: 'Preuzimamo komunikaciju i koordinaciju na sam dan vjenčanja kako biste vi i vaše obitelji mogli biti gosti na vlastitom vjenčanju.',
  listTitle: 'Brinemo o:',
  items: [
    'dolasku i rasporedu svih dobavljača',
    'koordinaciji sale i lokacije',
    'cateringu i servisu',
    'rasporedu ceremonije',
    'ulasku mladenaca',
    'govoru i protokolu',
    'rezanju torte',
    'prvom plesu',
    'glazbi i DJ-u/bendu',
    'fotografu i videografu',
    'cvijeću i dekoracijama',
    'posebnim efektima',
    'rasporedu plesnih točaka',
    'komunikaciji s gostima',
    'svim neplaniranim situacijama koje se mogu dogoditi tijekom večeri',
  ],
  close: 'Vi slavite. Mi pazimo na vrijeme.',
  photo: '/media/koordinacija.jpg',
  photoAlt: 'Okrugli svadbeni stol postavljen na natkrivenoj terasi',
}

/* 09 — operativni tim konobara */
export const staff = {
  title: 'Operativni tim konobara',
  lead: 'Jer lijepo vjenčanje nije samo ono što se vidi.',
  sub: 'Iza dobre večeri stoji tim koji zna raditi.',
  body: [
    'Na raspolaganje možemo staviti profesionalni operativni tim konobara prilagođen broju gostiju, prostoru i konceptu vašeg vjenčanja.',
    'Od intimnih proslava do velikih svadbi.',
  ],
  qualities: ['Iskusan servis.', 'Jasna organizacija.', 'Diskretna prisutnost.'],
  close: 'Da se vi ne morate pitati tko će poslužiti goste.',
  photo: '/media/servis-sala.jpg',
  photoAlt: 'Svečana sala s okruglim stolovima i cvjetnim aranžmanima spremna za goste',
}

/* 09b — organizacija vjenčanja (ide između koordinacije i operativnog tima)
   ⚠️ TEKST JE PRIJEDLOG, NIJE KLIJENTOV — neka ga Nataša pregleda i prepiše
   vlastitim riječima prije objave. Faze su izvedene iz onoga što već opisuje
   u tekstu „O meni”, ali formulacije su moje. */
export const organizacija = {
  title: 'Organizacija vjenčanja',
  lead: 'Od prvog razgovora do trenutka kada plan preuzima tim na dan vjenčanja.',
  sub: 'Ne morate znati redoslijed. To je naš dio posla.',
  faze: [
    {
      naslov: 'Prvi razgovor',
      tekst: 'Upoznajemo vašu priču, stil i ono što vam je uistinu važno. Bez obrazaca i bez gotovih paketa.',
    },
    {
      naslov: 'Koncept i stil',
      tekst: 'Vaše želje pretvaramo u konkretan koncept — atmosferu, boje, ritam dana i detalje po kojima će se vjenčanje pamtiti.',
    },
    {
      naslov: 'Lokacija',
      tekst: 'Predlažemo prostore koji odgovaraju konceptu, broju gostiju i dobu godine, i dogovaramo obilaske.',
    },
    {
      naslov: 'Dobavljači',
      tekst: 'Povezujemo vas s fotografom, glazbom, cvijećem, cateringom i svime ostalim, te preuzimamo komunikaciju s njima.',
    },
    {
      naslov: 'Raspored dana',
      tekst: 'Slažemo satnicu koja drži vodu — od priprema i ceremonije do zadnjeg plesa, s vremenom za nepredviđeno.',
    },
    {
      naslov: 'Predaja timu',
      tekst: 'Sve dogovoreno pretvara se u plan koji na dan vjenčanja preuzima naš koordinacijski tim.',
    },
  ],
  close: 'Vi donosite odluke. Mi pripremamo sve što je potrebno da ih uopće možete donijeti.',
}

/* 10 — corneri */
export const cornersTitle = 'Posebni detalji'
export const corners = [
  {
    id: 'affogato',
    name: 'Affogato & Espresso Corner',
    intro: 'Jer nakon večere uvijek postoji trenutak kada netko kaže:',
    quote: '„Ja bih još jednu kavicu.“',
    after: 'A mi kažemo – zašto ne bismo od toga napravili mali ritual?',
    body: [
      'Naš elegantni Affogato & Espresso Corner spaja svježe pripremljeni espresso i kremasti sladoled u jednostavnom, ali posebnom desertnom trenutku.',
      'Možemo ga prilagoditi stilu vašeg vjenčanja – od elegantnog espresso bara do opuštenog ljetnog cornera na otvorenom.',
    ],
    photo: '/media/corner-espresso.jpg',
  },
  {
    id: 'sladoled',
    name: 'Ice Cream Corner',
    lines: ['Za ljetna vjenčanja.', 'Za djecu.', 'Za odrasle koji se samo prave da nisu djeca.'],
    body: [
      'Sladoledni corner možemo osmisliti kao dio dekoracije i atmosfere vašeg vjenčanja, s izborom okusa i načinom posluživanja koji odgovara vašem konceptu.',
    ],
    close: 'Jer ponekad upravo mali detalji ostanu među najljepšim uspomenama.',
    photo: '/media/corner-sladoled.jpg',
  },
  {
    id: 'kokteli',
    name: 'Cocktail Corner',
    lines: ['Aperol Spritz.', 'Hugo.', 'Gin & Tonic.', 'Espresso Martini.', 'Ili koktel napravljen baš za vas.'],
    body: [
      'Možemo osmisliti cocktail corner koji će postati mjesto na kojem će se gosti spontano zadržavati, razgovarati i nazdravljati.',
    ],
    close: 'Jer dobra atmosfera ne nastaje slučajno.',
    photo: '/media/corner-kokteli.jpg',
  },
]

/* 11 — a što ako želite više */
export const more = {
  title: 'A što ako želite više?',
  lead: 'Onda idemo dalje.',
  sub: 'Ne želimo vas ograničiti na unaprijed složene pakete.',
  pairs: [
    { q: 'Želite vjenčanje u Istri?', a: 'Može.' },
    { q: 'Zagreb?', a: 'Naravno.' },
    { q: 'Vjenčanje na obali?', a: 'Da.' },
    { q: 'Privatna vila?', a: 'Može.' },
    { q: 'Jahta?', a: 'Zašto ne.' },
    { q: 'Helikopter?', a: 'I to možemo organizirati.' },
  ],
  close: ['Vi nam kažete što zamišljate.', 'Mi ostvarujemo.'],
}

/* 12 — lokacije koje se pamte */
export const locations = {
  title: 'Lokacije koje se pamte',
  lead: 'Organiziramo i povezujemo vas s lokacijama i partnerima za:',
  places: [
    { name: 'Istru', text: 'Romantična istarska imanja, vile, boutique hoteli i lokacije među vinogradima i maslinicima.', photo: '/media/lokacija-istra.jpg' },
    { name: 'Zagreb', text: 'Elegantne gradske lokacije, restorani, hoteli, sale i privatni prostori.', photo: '/media/lokacija-zagreb.jpg' },
    { name: 'Obalu i rivijeru', text: 'Vjenčanja uz more, na terasama, u resortima, vilama i privatnim lokacijama.', photo: '/media/lokacija-obala.jpg' },
    { name: 'Jahte', text: 'Vjenčanje, ceremonija ili intimna proslava na moru.', photo: '/media/lokacija-jahta.jpg' },
    { name: 'Helikopter', text: 'Dolazak mladenaca, panoramski let ili jednostavno – iskustvo koje ćete pamtiti cijeli život.', photo: '/media/lokacija-helikopter.jpg' },
  ],
}

/* 13 — sve što vam treba za jedan dan */
export const services = {
  title: 'Sve što vam treba za jedan dan',
  lead: 'Ne morate tražiti deset različitih kontakata.',
  sub: 'Mi možemo povezati i koordinirati:',
  items: [
    { name: 'Fotografi', text: 'Za fotografije koje ćete gledati i za trideset godina.' },
    { name: 'Videografi', text: 'Za trenutke koje fotografija jednostavno ne može uhvatiti.' },
    { name: 'Glazba', text: 'DJ, bendovi, glazbenici i posebni glazbeni program.' },
    { name: 'Cvijeće', text: 'Buketi, ceremonija, stolovi, cvjetni lukovi i kompletna floristika.' },
    { name: 'Dekoracije', text: 'Od decentne elegancije do potpuno personaliziranog koncepta.' },
    { name: 'Catering', text: 'Hrana, posluživanje i kompletna organizacija gastronomskog dijela događaja.' },
    { name: 'Kokteli', text: 'Cocktail bar i signature kokteli.' },
    { name: 'Slatki corneri', text: 'Sladoled, espresso, affogato i drugi desertni koncepti.' },
    { name: 'Ples', text: 'Plesne skupine, plesne točke i koreografije za mladence.' },
    { name: 'Posebni efekti', text: 'Suhi led za prvi ples, niski dim, magla i posebni efekti za atmosferu.' },
    { name: 'Prskalice', text: 'Za ulazak mladenaca, prvi ples ili veliki završetak večeri.' },
    { name: 'Vatromet', text: 'Za trenutak koji želite završiti spektakularno.' },
  ],
  close: 'I sve ostalo što poželite dodati svojoj priči.',
  photo: '/media/buket-veo.jpg',
  photoAlt: 'Mladenkin buket bijelih i bež ruža položen na veo',
}

/* 14 — prvi ples */
export const firstDance = {
  title: 'Prvi ples',
  lines: ['Jedan trenutak.', 'Jedna pjesma.', 'I svi koje volite gledaju vas.'],
  lead: 'Možemo organizirati atmosferu prvog plesa uz:',
  items: ['niski dim', 'suhi led', 'svjetlosne efekte', 'prskalice', 'posebnu rasvjetu', 'koreografiju', 'plesne izvođače'],
  body: 'Sve tempirano prema glazbi i vašem ulasku u taj trenutak.',
  close: 'Da prvi ples zaista izgleda kao vaš.',
  video: '/media/prvi-ples.mp4',
  poster: '/media/poster-prvi-ples.jpg',
  videoAlt: 'Mladenci na plesnom podiju pod obojenim svjetlima',
}

/* 15 — ne organiziramo vam samo vjenčanje */
export const between = {
  title: 'Ne organiziramo vam samo vjenčanje.',
  lead: 'Organiziramo ono što se događa između velikih trenutaka.',
  questions: [
    'Tko će dočekati goste?',
    'Tko će provjeriti je li torta stigla?',
    'Tko će znati kada treba pustiti vašu pjesmu?',
    'Tko će reći fotografu da je vrijeme za obiteljsku fotografiju?',
    'Tko će riješiti problem ako počne kiša?',
    'Tko će provjeriti je li sve spremno prije nego što uđete u salu?',
  ],
  answer: 'Mi.',
  close: ['Jer vi ste mladenci.', 'Ne organizatori.'],
}

/* 16 — zašto ja */
export const whyMe = {
  title: 'Zašto ja?',
  lead: 'Jer sam previše puta bila s druge strane.',
  body: [
    'Radila sam u hotelima, restoranima i eventima.',
    'Gledala sam kako se događaji pripremaju.',
    'Gledala sam kako izgledaju kada sve funkcionira.',
    'Ali i kada ne funkcionira.',
  ],
  after: 'Znam koliko se stvari mora dogoditi iza kulisa da bi jedna večer izgledala potpuno jednostavno. I upravo to iskustvo danas želim dati vama.',
  promise: [
    'Ne obećavam da će baš svaki detalj proći prema planu.',
    'Obećavam vam da ćemo znati što napraviti kada ne prođe.',
  ],
}

/* 17 — vaše je da volite (repriza) */
export const yours = {
  title: 'Vaše je da volite.\nNaše je da se pobrinemo za ostalo.',
  lead: 'Ne morate imati savršeno razrađen plan.',
  list: [
    'Ne morate znati gdje pronaći fotografa.',
    'Ne morate znati koliko konobara trebate.',
    'Ne morate znati kakav catering odgovara vašoj lokaciji.',
    'Ne morate znati kako organizirati prvi ples sa suhim ledom.',
    'Ne morate imati deset tablica i dvadeset telefonskih brojeva.',
  ],
  close: ['Recite nam što želite osjetiti kada se tog dana probudite.', 'Ostalo ćemo zajedno složiti.'],
}

/* 18 — kontakt */
export const contactSection = {
  title: 'Javite nam se',
  lead: 'Najlakše je da nas nazovete ili pošaljete e-mail s datumom i mjestom koje imate na umu.',
  photo: '/media/mladenci-kontakt.jpg',
  photoAlt: 'Mladenci ispred kamenog luka ukrašenog zelenilom',
}

/* 18b — obrazac za upit
   ⚠️ OBRAZAC JOŠ NIJE POVEZAN sa slanjem. Trenutno je primjer izgleda:
   na slanje prikaže poruku i uputi na telefon i e-mail.
   Kako ga spojiti piše u README-u, odjeljak „Kontaktni obrazac”. */
export const obrazac = {
  aktivan: true,               // false = obrazac se uopće ne prikazuje
  povezan: false,              // true tek kada slanje stvarno radi
  naslov: 'Ili nam pišite ovdje',
  lead: 'Javite nam datum, mjesto i par rečenica o tome kako zamišljate svoj dan.',
  polja: {
    ime: 'Ime i prezime',
    email: 'E-mail',
    telefon: 'Telefon (nije obavezno)',
    datum: 'Datum vjenčanja (ako ga imate)',
    lokacija: 'Mjesto ili lokacija',
    poruka: 'Vaša poruka',
  },
  gumb: 'Pošaljite upit',
  // Poruka koja se prikaže dok obrazac nije povezan:
  nijePovezan: 'Obrazac je zasad samo primjer i ne šalje poruku. Do povezivanja nas kontaktirajte telefonom ili e-mailom.',
  // Poruka nakon uspješnog slanja (kada obrazac proradi):
  poslano: 'Hvala na upitu. Javljamo se u najkraćem roku.',
  // Diskretna napomena ispod obrasca — obriši je (postavi '') prije objave
  // ako ne želiš da posjetitelji vide da obrazac nije aktivan.
  napomenaDemo: 'Prikaz obrasca — slanje još nije aktivno.',
}

/* 19 — završni citat, krasopis */
export const closingQuote = {
  // NAPOMENA: ako ova misao ima poznatog autora, upiši ga u 'author'
  // i ispisat će se ispod citata.
  text: '\u201cthe greatest gift we can give someone is not the promise that life will never be difficult, but the certainty that they will never have to face it alone\u201d',
  author: '',
  video: '/media/zavrsna-poruka.mp4',
  poster: '/media/poster-zavrsna-poruka.jpg',
}
