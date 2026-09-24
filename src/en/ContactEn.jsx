import { contact } from '../data/site.js'
import { contactEn, formEn, privacyEn } from '../data/site-en.js'
import Chapter from '../components/Chapter.jsx'
import ContactForm from '../components/ContactForm.jsx'

export default function ContactEn() {
  const izravni = [
    contact.phone && {
      k: contactEn.phoneLabel,
      v: contact.phone,
      href: contact.phoneHref || `tel:${contact.phone.replace(/\s/g, '')}`,
    },
    contact.email && { k: contactEn.emailLabel, v: contact.email, href: `mailto:${contact.email}` },
  ].filter(Boolean)

  return (
    <Chapter no="03" label="contact" className="chapter--zelena" id="contact">
      <div className="pin pin--desno">
        <div className="pin__media kontakt__media">
          <img src={contactEn.photo} alt={contactEn.photoAlt} loading="lazy" />
        </div>

        <div>
          <h2 className="t-xl">{contactEn.title}</h2>
          <p className="uvod">{contactEn.lead}</p>

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

          {contactEn.note && <p className="kontakt__jezici">{contactEn.note}</p>}

          <ContactForm data={formEn} privatnost={privacyEn} />
        </div>
      </div>
    </Chapter>
  )
}
