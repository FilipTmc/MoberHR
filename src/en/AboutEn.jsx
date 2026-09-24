import { aboutEn } from '../data/site-en.js'
import Chapter from '../components/Chapter.jsx'

export default function AboutEn() {
  return (
    <Chapter no="02" label="about" className="chapter--papir" id="about">
      <div className="pin">
        <div className="pin__media">
          <img src={aboutEn.photo} alt={aboutEn.photoAlt} loading="lazy" />
        </div>

        <div>
          <p className="omeni__pod" style={{ marginBottom: '0.8rem' }}>{aboutEn.eyebrow}</p>
          <h2 className="t-xl">{aboutEn.title}</h2>

          <div className="tekst">
            {aboutEn.intro.map((t, i) => (
              <p key={i}>{t}</p>
            ))}
          </div>

          <blockquote className="lekcija">{aboutEn.lesson}</blockquote>
          <p className="istaknuto">{aboutEn.emphasis}</p>

          <ul className="omeni__dane">
            {aboutEn.decisions.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </Chapter>
  )
}
