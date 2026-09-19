import { locations as l } from '../data/site.js'
import Chapter from './Chapter.jsx'
import Reveal from './Reveal.jsx'

export default function Locations() {
  return (
    <Chapter no="10" label="lokacije" id="lokacije">
      <h2 className="t-xl">{l.title}</h2>
      <p className="uvod">{l.lead}</p>

      <div className="places">
        {l.places.map((p) => (
          <Reveal as="article" className="place" key={p.name}>
            <div className="place__media">
              {p.photo ? (
                <img src={p.photo} alt={p.name} loading="lazy" />
              ) : (
                <div className="slot">
                  <span>{p.name}</span>
                  <small>Mjesto za fotografiju</small>
                </div>
              )}
            </div>
            <h3>{p.name}</h3>
            <p>{p.text}</p>
          </Reveal>
        ))}
      </div>
    </Chapter>
  )
}
