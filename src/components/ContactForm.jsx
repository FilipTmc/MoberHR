import { useState } from 'react'
import { contact, obrazac, pravno } from '../data/site.js'

/* ───────────────────────────────────────────────────────────────
   OBRAZAC ZA UPIT — ZASAD SAMO PRIMJER IZGLEDA.

   Dok je `obrazac.povezan = false` u src/data/site.js, slanje NE
   šalje ništa: prikaže se poruka i uputa na telefon i e-mail.
   Tako nijedan upit ne može tiho nestati.

   Kada obrazac treba proraditi:
   1. postavi `povezan: true` u site.js
   2. u funkciju `posalji` niže upiši stvarni poziv (Cloudflare
      Pages Function, Formspree, Web3Forms — vidi README)
   ─────────────────────────────────────────────────────────────── */

const PRAZNO = {
  ime: '', email: '', telefon: '', vrsta: '',
  datum: '', lokacija: '', gosti: '', poruka: '',
}

export default function ContactForm() {
  const [polja, setPolja] = useState(PRAZNO)
  const [stanje, setStanje] = useState(null) // null | 'slanje' | 'poslano' | 'demo' | 'greska'

  if (!obrazac?.aktivan) return null

  const promjena = (e) => setPolja({ ...polja, [e.target.name]: e.target.value })

  async function posalji(e) {
    e.preventDefault()

    if (!obrazac.povezan) {
      setStanje('demo')
      return
    }

    setStanje('slanje')
    try {
      // TODO: ovdje ide stvarno slanje, npr.
      // const r = await fetch('/api/upit', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(polja),
      // })
      // if (!r.ok) throw new Error('slanje nije uspjelo')
      setStanje('poslano')
      setPolja(PRAZNO)
    } catch {
      setStanje('greska')
    }
  }

  const p = obrazac.polja

  return (
    <div className="obrazac">
      <h3 className="obrazac__naslov">{obrazac.naslov}</h3>
      <p className="obrazac__lead">{obrazac.lead}</p>

      <form onSubmit={posalji}>
        <div className="obrazac__red">
          <label className="polje">
            <span>{p.ime}</span>
            <input name="ime" value={polja.ime} onChange={promjena} required autoComplete="name" />
          </label>
          <label className="polje">
            <span>{p.email}</span>
            <input type="email" name="email" value={polja.email} onChange={promjena} required autoComplete="email" />
          </label>
        </div>

        <div className="obrazac__red">
          <label className="polje">
            <span>{p.telefon}</span>
            <input type="tel" name="telefon" value={polja.telefon} onChange={promjena} autoComplete="tel" />
          </label>
          <label className="polje">
            <span>{p.vrsta}</span>
            <select name="vrsta" value={polja.vrsta} onChange={promjena}>
              <option value="">—</option>
              {(obrazac.vrste || []).map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="obrazac__red">
          <label className="polje">
            <span>{p.datum}</span>
            <input type="date" name="datum" value={polja.datum} onChange={promjena} />
          </label>
          <label className="polje">
            <span>{p.gosti}</span>
            <input type="number" name="gosti" min="1" value={polja.gosti} onChange={promjena} />
          </label>
        </div>

        <label className="polje">
          <span>{p.lokacija}</span>
          <input name="lokacija" value={polja.lokacija} onChange={promjena} />
        </label>

        <label className="polje">
          <span>{p.poruka}</span>
          <textarea name="poruka" rows="4" value={polja.poruka} onChange={promjena} required />
        </label>

        <button className="btn btn--svijetli" type="submit" disabled={stanje === 'slanje'}>
          {stanje === 'slanje' ? 'Šaljem…' : obrazac.gumb}
        </button>

        <p className="obrazac__odgovor" role="status" aria-live="polite">
          {stanje === 'demo' && (
            <>
              {obrazac.nijePovezan}
              {contact.email && (
                <>
                  {' '}
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </>
              )}
            </>
          )}
          {stanje === 'poslano' && obrazac.poslano}
          {stanje === 'greska' && 'Slanje nije uspjelo. Pokušajte ponovno ili nam se javite telefonom.'}
        </p>

        {/* Obveza informiranja o obradi osobnih podataka */}
        {pravno?.obrazacPrivatnost && (
          <p className="obrazac__privatnost">
            {pravno.obrazacPrivatnost}{' '}
            <a href={pravno.obrazacPrivatnostLink}>Politika privatnosti</a>
          </p>
        )}
      </form>

      {!obrazac.povezan && obrazac.napomenaDemo && (
        <p className="obrazac__demo">{obrazac.napomenaDemo}</p>
      )}
    </div>
  )
}
