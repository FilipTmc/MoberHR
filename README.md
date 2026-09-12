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
04 naš tim · 05 koordinacija · 06 operativni tim · 07 posebni detalji ·
08 želite više · 09 lokacije · 10 dobavljači · 11 prvi ples ·
12 između trenutaka · 13 zašto Nataša · 14 vaše je da volite · 15 kontakt ·
završni citat u krasopisu

## Boje i pisma

Pjenušac `#F4EFE4` kao podloga (uz `#FBF8F1` i `#E9E0CE` za izmjenu sekcija),
tamnozelena `#16291E` za sve detalje, linije i tamne sekcije. Zlatne nema —
klijent je tražio tamnozelene detalje, a bez zlatne izgleda modernije.

Naslovi **Syne**, tekst **Manrope**, citati **Pinyon Script**.

Fontovi su **ugrađeni u projekt** (`@fontsource/*`), ne dolaze s Googleovog
CDN-a. Stranica ne šalje nijedan zahtjev prema vanjskom poslužitelju.

## PODACI ZA DOPUNU PRIJE OBJAVE

U `src/data/site.js` traži `TODO`:

- [ ] `contact.phone` i `contact.phoneHref`
- [ ] `contact.email`
- [x] ~~`contact.instagram`, `contact.facebook`, `contact.tiktok`~~ — upisano
- [ ] `legal.company`, `legal.oib`, `legal.address`
- [x] ~~`about.photo` — Natašina fotografija~~ — upisano
- [x] ~~`brand.logo` — logotip~~ — upisano
- [x] ~~`corners[].photo` — tri fotografije cornera~~ — upisano
- [ ] `cornersTitle` — naslov te cjeline, ako želiš drugačiji
- [x] ~~`locations.places[].photo` — pet fotografija lokacija~~ — upisano
- [ ] `closingQuote.author` — ako završna misao ima poznatog autora
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

## Objava na Cloudflare Pages

**Preko GitHuba:** push → Cloudflare Pages → Create a project → Connect to Git,
build command `npm run build`, output directory `dist`, framework preset Vite.

**Bez GitHuba:** `npm run build`, zatim Pages → Create a project →
Upload assets → povuci sadržaj mape `dist`.
