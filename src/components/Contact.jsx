import { contact, contactSection as cs } from '../data/site.js'
import Chapter from './Chapter.jsx'
import { mreze } from './Social.jsx'

export default function Contact() {
  /* Prikazuju se samo kanali koji stvarno imaju podatak. */
  const linkovi = [
    contact.phone && {
      k: 'Telefon',
      v: contact.phone,
      href: contact.phoneHref || `tel:${contact.phone.replace(/\s/g, '')}`,
    },
    contact.email && { k: 'E-mail', v: contact.email, href: `mailto:${contact.email}` },
    ...mreze().map((m) => ({ k: m.label, v: m.handle, href: m.href })),
  ].filter(Boolean)

  return (
    <Chapter no="15" label="kontakt" className="chapter--zelena" id="kontakt">
      <div className="pin pin--desno">
        <div className="pin__media kontakt__media">
          <img src={cs.photo} alt={cs.photoAlt} loading="lazy" />
        </div>

        <div>
          <h2 className="t-xl">{cs.title}</h2>
          <p className="uvod">{cs.lead}</p>

          {linkovi.length > 0 && (
            <ul className="kontakt__veliki">
              {linkovi.map((l) => (
                <li key={l.k}>
                  <a href={l.href} {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                    <span className="k">{l.k}</span>
                    <span className="v">{l.v}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}

        </div>
      </div>
    </Chapter>
  )
}
