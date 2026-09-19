import { corners, cornersTitle } from '../data/site.js'
import Chapter from './Chapter.jsx'
import Reveal from './Reveal.jsx'

/* Fotografija je pozadina, zatamnjena; tekst stoji u prvom planu. */
export default function Corners() {
  return (
    <Chapter no="08" label="posebni detalji" className="chapter--duboki">
      <h2 className="t-xl">{cornersTitle}</h2>

      <div className="corners">
        {corners.map((c) => (
          <Reveal as="article" className="corner" key={c.id} id={c.id}>
            {c.photo ? (
              <img className="corner__bg" src={c.photo} alt="" aria-hidden="true" loading="lazy" />
            ) : null}
            <div className="corner__zastor" aria-hidden="true" />

            <div className="corner__sadrzaj">
              <h3>{c.name}</h3>

              {c.intro && <p>{c.intro}</p>}
              {c.quote && <p className="corner__citat">{c.quote}</p>}
              {c.after && <p>{c.after}</p>}

              {c.lines && (
                <ul className="corner__linije">
                  {c.lines.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              )}

              {c.body.map((t, i) => (
                <p key={i}>{t}</p>
              ))}

              {c.close && <p className="corner__close">{c.close}</p>}
            </div>
          </Reveal>
        ))}
      </div>
    </Chapter>
  )
}
