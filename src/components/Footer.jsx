import { contact, legal } from '../data/site.js'
import Logo from './Logo.jsx'
import Social from './Social.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
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

        <Social className="mreze--podnozje" />
      </div>

      <div className="shell footer__bottom">
        © {new Date().getFullYear()} MoberHR Weddings. Sva prava pridržana.
      </div>
    </footer>
  )
}
