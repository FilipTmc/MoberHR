import { about } from '../data/site.js'
import Chapter from './Chapter.jsx'

export default function About() {
  const a = about
  return (
    <Chapter no="02" label="Nataša" id="o-nama">
      <div className="pin">
        <div className="pin__media">
          {a.photo ? (
            <img src={a.photo} alt={a.photoAlt} loading="lazy" />
          ) : (
            <div className="slot">
              <span>Natašina fotografija</span>
              <small>Dodaj datoteku u /public/media/ i upiši putanju u src/data/site.js</small>
            </div>
          )}
        </div>

        <div className="omeni">
          <h2 className="t-xl">{a.eyebrow}</h2>

          <p className="uvod">{a.intro[0]}</p>
          <div className="tekst">
            {a.intro.slice(1).map((t, i) => (
              <p key={i}>{t}</p>
            ))}
          </div>

          {[a.pocetak, a.izvan, a.organizacija, a.dan].map((blok, i) => (
            <section className="omeni__blok" key={i}>
              <h3 className="omeni__naslov">{blok.naslov}</h3>
              {blok.podnaslov && <p className="omeni__pod">{blok.podnaslov}</p>}
              <div className="tekst">
                {blok.tekst.map((t, j) => (
                  <p key={j}>{t}</p>
                ))}
              </div>
              {blok.dane && (
                <ul className="omeni__dane">
                  {blok.dane.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="omeni__blok">
            <div className="tekst" style={{ marginTop: 0 }}>
              {a.zakljucak.tekst.map((t, i) => (
                <p key={i}>{t}</p>
              ))}
            </div>
            <p className="omeni__citat">{a.zakljucak.citat}</p>
            <div className="tekst">
              {a.zakljucak.poslije.map((t, i) => (
                <p key={i}>{t}</p>
              ))}
            </div>
            <p className="istaknuto">{a.zakljucak.finale}</p>
          </section>

          {a.krasopis && <p className="omeni__krasopis">{a.krasopis}</p>}
        </div>
      </div>
    </Chapter>
  )
}
