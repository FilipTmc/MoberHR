import { contact, contactSection as cs } from '../data/site.js'
import Chapter from './Chapter.jsx'
import { mreze } from './Social.jsx'
import ContactForm from './ContactForm.jsx'

export default function Contact() {
  /* Izravni kontakt stoji odvojeno i istaknuto, uz obrazac — tako
     posjetitelj ne mora ispuniti obrazac da bi došao do broja. */
  const izravni = [
    contact.phone && {
      k: 'Telefon',
      v: contact.phone,
      href: contact.phoneHref || `tel:${contact.phone.replace(/\s/g, '')}`,
    },
    contact.email && { k: 'E-mail', v: contact.email, href: `mailto:${contact.email}` },
  ].filter(Boolean)

  const drustvene = mreze()

  return (
    <Chapter no="17" label="kontakt" className="chapter--zelena" id="kontakt">
      <div className="pin pin--desno">
        <div className="pin__media kontakt__media">
          <img src={cs.photo} alt={cs.photoAlt} loading="lazy" />
        </div>

        <div>
          <h2 className="t-xl">{cs.title}</h2>
          <p className="uvod">{cs.lead}</p>

          {izravni.length > 0 && (
            <ul className="izravni">
              {izravni.map((l) => (
                <li key={l.k}>
                  <a href={l.href}>
                    <span className="izravni__k">{l.k}</span>
                    <span className="izravni__v">{l.v}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}

          {drustvene.length > 0 && (
            <nav className="izravni__mreze" aria-label="Društvene mreže">
              {drustvene.map((m) => (
                <a key={m.label} href={m.href} target="_blank" rel="noopener noreferrer">
                  {m.label}
                </a>
              ))}
            </nav>
          )}

          <ContactForm />
        </div>
      </div>
    </Chapter>
  )
}
