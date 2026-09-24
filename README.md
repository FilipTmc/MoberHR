# MoberHR Weddings

Statična landing stranica (React + Vite) za objavu na Cloudflare Pages.
Sadrži cjelokupan klijentov tekst, u 19 zasebno oblikovanih cjelina.

## Pokretanje

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # produkcijski build u /dist
npm run preview    # provjera builda lokalno
```

## Gdje se mijenja sadržaj

Sve na jednom mjestu: **`src/data/site.js`** — tekstovi, fotografije i kontakti.
Dizajn se ne dira. Fotografije i videa idu u **`public/media/`**; nova datoteka →
upiši putanju u `site.js` (npr. `/media/natasa.jpg`).

## Redoslijed sekcija

Naslovna · Citat u krasopisu · zatim numerirana poglavlja 01–15, traka
fotografija i završni citat:

01 zašto postojimo · 02 Nataša · 03 od ideje do plesa · (traka fotografija) ·
04 naš tim · 05 koordinacija · 06 organizacija vjenčanja · 07 operativni tim ·
08 posebni detalji · 09 želite više · 10 lokacije · 11 dobavljači ·
12 prvi ples · 13 između trenutaka · 14 zašto Nataša · 15 vaše je da volite ·
16 kontakt · završni citat u krasopisu

⚠️ Tekst cjeline **06 organizacija vjenčanja** je prijedlog, nije klijentov.
Neka ga Nataša pregleda i prepiše prije objave (`organizacija` u `site.js`).

## Boje i pisma

Pjenušac `#F4EFE4` kao podloga (uz `#FBF8F1` i `#E9E0CE` za izmjenu sekcija),
tamnozelena `#16291E` za sve detalje, linije i tamne sekcije. Zlatne nema —
klijent je tražio tamnozelene detalje, a bez zlatne izgleda modernije.

Naslovi **Syne**, tekst **Manrope**, citati **Pinyon Script**.

Fontovi su **ugrađeni u projekt** (`@fontsource/*`), ne dolaze s Googleovog
CDN-a. Stranica ne šalje nijedan zahtjev prema vanjskom poslužitelju.

## PODACI ZA DOPUNU PRIJE OBJAVE

U `src/data/site.js` traži `TODO`:

- [x] ~~`contact.instagram`, `contact.facebook`, `contact.tiktok`~~ — upisano
- [ ] `legal.company`, `legal.oib`, `legal.address`
- [x] ~~`about.photo` — Natašina fotografija~~ — upisano
- [x] ~~`brand.logo` — logotip~~ — upisano
- [x] ~~`corners[].photo` — tri fotografije cornera~~ — upisano
- [x] ~~`contact.phone`, `contact.email`~~ — upisano
- [ ] `cornersTitle` — naslov te cjeline, ako želiš drugačiji
- [x] ~~`locations.places[].photo` — pet fotografija lokacija~~ — upisano
- [ ] `closingQuote.author` — ako završna misao ima poznatog autora
- [ ] **cjenik: upisati cijene koje nedostaju** — Gelato Corner Basic i Premium,
      Organizacija događanja, Operativni tim (konobar i voditelj)
- [ ] arhivirati prethodnu verziju cjenika pri svakoj izmjeni cijena
- [ ] `index.html` — zamijeni `https://moberhr.hr/` pravom domenom

Preostalo je još samo telefon, e-mail, poslovni podaci i domena.
Prazna polja se jednostavno ne prikazuju, pa ništa ne puca ako podatak nedostaje.

## Logotip

Dvije inačice, obje izvedene iz dostavljenog PNG-a:
zlatna za tamne podloge, tamnozelena za svijetle (zlatna na pjenušcu je
preslaba za čitanje). Uz to i kompaktni znak bez podnaslova „PREMIUM EVENT
SERVICES" za zaglavlje, gdje je visina mala. Sve u `public/media/logo-*.png`,
putanje u `brand` unutar `site.js`.

## Napomena o tekstu „O meni"

Novi, duži tekst zamijenio je raniju kraću verziju sekcije o Nataši
(„Ja sam Nataša i posljednje 24 godine…"). Obje priče pokrivaju isto,
pa bi dvije verzije jedna do druge slabile stranicu. Stara verzija je u
povijesti datoteke ako je treba vratiti.
Obrazac za upite namjerno nije dodan — kontakt ide preko telefona i e-maila.

## Ispravci u klijentovu tekstu

Preneseno je sve, uz četiri pravopisna ispravka (lako se vrate u `site.js`):

- „AFOGATO“ → „Affogato“ (kako i sam klijent piše u tijelu teksta)
- „CVJEĆE“ → „Cvijeće“
- „posljednjih 24 godine“ → „posljednje 24 godine“
- `Mi** ostvarujemo. **` → „Mi ostvarujemo.“ (zalutale zvjezdice)

## Engleska podstranica

Objavljena je na `/en/` kao zaseban Vite ulaz (vidi `vite.config.js`).
Tekstovi su u `src/data/site-en.js`, komponente u `src/en/`, a dizajn i CSS
dijeli s hrvatskom stranicom. Prebacivanje jezika je gumb EN/HR u navigaciji.

Fotografije su u `public/media/en/`. Pravne stranice su zajedničke i na
hrvatskom — to je u podnožju engleske verzije i napisano.

## Cjenik i pravne stranice

Cijene se **ne prikazuju** na prodajnom dijelu stranice — to je odluka klijenta.
Sekcija „Želite saznati više?" (prije kontakta) ima samo dva gumba.

Stranica `cjenik-usluga.html` prikazuje kontakt i veliki gumb za preuzimanje —
cijene se vide tek u preuzetoj datoteci `cjenik-usluga.csv`.

CSV prati službeni format: interna šifra, naziv, jedinica mjere, aktualna cijena,
sidrena cijena na 10.09.2026., poseban oblik prodaje, najniža cijena u 30 dana i
napomena. Sidrena cijena namjerno je prazna jer su usluge uvedene nakon tog datuma.

Objavljene starije verzije cjenika treba arhivirati (npr.
`cjenik-usluga-2026-10-01.csv`) jer se prethodne verzije moraju čuvati
propisano vrijeme.

Pravne stranice su statični HTML u `public/`, sa zajedničkim stilom `pravno.css`:

| Datoteka | Stanje |
|---|---|
| `cjenik-usluga.html` | gotovo |
| `pisani-prigovor-potrosaca.html` | gotovo |
| `politika-privatnosti.html` | gotovo |
| `opci-uvjeti-poslovanja.html` | gotovo |

Adresa i OIB su upisani. Ako se službeni naziv u registru razlikuje od
„MoberHR Events", promijeni `legal.company` u `site.js` i naziv u pravnim
stranicama.

Stranica o kolačićima namjerno ne postoji jer web ne koristi kolačiće ni analitiku.
Dodaš li ikad Google Analytics, ugrađeni YouTube ili chat widget, to prestaje
vrijediti i trebat će i stranica i traka za privolu.

Tekstovi su pisani jednostavno i općenito. Nisu ih sastavili pravnici — ako
klijentica želi sigurnost, neka ih netko iz struke pregleda.

## Kontaktni obrazac

Obrazac u sekciji „Kontakt" **zasad je samo primjer izgleda**. Dok je u
`site.js` postavljeno `obrazac.povezan: false`, klik na gumb ne šalje ništa —
prikaže se poruka i uputa na telefon i e-mail, pa nijedan upit ne može tiho
nestati.

Kada obrazac treba proraditi:

1. u `src/data/site.js` postavi `obrazac.povezan: true`
2. u `src/components/ContactForm.jsx`, u funkciji `posalji`, otkomentiraj
   `fetch` i upiši stvarnu adresu
3. obriši `obrazac.napomenaDemo` (postavi `''`) da nestane napomena ispod
   obrasca

Tri načina slanja, od najjednostavnijeg:

- **Formspree ili Web3Forms** — besplatan plan, samo zamijeniš adresu u
  `fetch`. Bez vlastitog poslužitelja.
- **Cloudflare Pages Function** — datoteka `functions/api/upit.js` u projektu;
  prima podatke i prosljeđuje ih na e-mail preko servisa poput Resenda.
  Ostaje sve na Cloudflareu.
- **mailto** — otvara korisnikov e-mail program. Radi bez ičega, ali mnogi
  ga na mobitelu prekinu na pola, pa ga ne preporučam kao jedini put.

Ako se obrazac ne koristi, `obrazac.aktivan: false` ga u cijelosti uklanja.

## Objava na Cloudflare Pages

**Preko GitHuba:** push → Cloudflare Pages → Create a project → Connect to Git,
build command `npm run build`, output directory `dist`, framework preset Vite.

**Bez GitHuba:** `npm run build`, zatim Pages → Create a project →
Upload assets → povuci sadržaj mape `dist`.
