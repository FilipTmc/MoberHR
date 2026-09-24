import { contact } from '../data/site.js'
import { footerEn, brandEn, jezik } from '../data/site-en.js'
import LogoEn from './LogoEn.jsx'
import { mreze } from '../components/Social.jsx'

export default function FooterEn() {
  const drustvene = mreze()

  return (
    <footer className="footer" id="footer">
      <div className="shell footer__inner">
        <div className="footer__marka">
          <LogoEn tamnaPodloga />
          <div className="footer__legal">
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
            <p>
              <a href={jezik.naHrvatski.href}>Hrvatska verzija</a>
            </p>
          </div>
        </div>

        <nav className="footer__pravno" aria-label="Legal information">
          {footerEn.poveznice.map((l) => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="footer__desno">
          {drustvene.length > 0 && (
            <nav className="mreze mreze--podnozje" aria-label="Social media">
              {drustvene.map((m) => (
                <a key={m.label} href={m.href} target="_blank" rel="noopener noreferrer">
                  {m.label}
                </a>
              ))}
            </nav>
          )}
          {footerEn.napomena && <p className="footer__csv">{footerEn.napomena}</p>}
        </div>
      </div>

      <div className="shell footer__bottom">
        © {new Date().getFullYear()} {brandEn.name} {brandEn.suffix}. All rights reserved.
      </div>
    </footer>
  )
}
