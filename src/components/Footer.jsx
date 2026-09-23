import { contact, legal, pravno } from '../data/site.js'
import Logo from './Logo.jsx'
import Social from './Social.jsx'

export default function Footer() {
  return (
    <footer className="footer" id="podnozje">
      <div className="shell footer__inner">
        <div className="footer__marka">
          <Logo tamnaPodloga />
          <div className="footer__legal">
            {legal.company && <p>{legal.company}</p>}
            {legal.address && <p>{legal.address}</p>}
            {legal.oib && <p>OIB: {legal.oib}</p>}
            {contact.phone && (
              <p>
                <a href={contact.phoneHref || `tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
              </p>
            )}
            {contact.email && (
              <p>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
            )}
          </div>
        </div>

        <nav className="footer__pravno" aria-label="Pravne informacije">
          {pravno.poveznice.map((l) => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="footer__desno">
          <Social className="mreze--podnozje" />
          {pravno.cjenikDatoteka && (
            <p className="footer__csv">
              <a href={pravno.cjenikDatoteka} download>
                Preuzmite cjenik
              </a>
              {pravno.cjenikNapomena && <span> — {pravno.cjenikNapomena}</span>}
            </p>
          )}
        </div>
      </div>

      <div className="shell footer__bottom">
        © {new Date().getFullYear()} MoberHR Events. Sva prava pridržana.
      </div>
    </footer>
  )
}
