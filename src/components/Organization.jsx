import { organizacija as o } from '../data/site.js'
import Chapter from './Chapter.jsx'
import Reveal from './Reveal.jsx'

export default function Organization() {
  return (
    <Chapter no="06" label="organizacija" className="chapter--zelena" id="organizacija">
      <h2 className="t-xl">{o.title}</h2>
      <p className="uvod">{o.lead}</p>
      <div className="tekst"><p>{o.sub}</p></div>

      <ol className="faze">
        {o.faze.map((f, i) => (
          <Reveal as="li" className="faza" key={f.naslov}>
            <span className="faza__no" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="faza__body">
              <h3>{f.naslov}</h3>
              <p>{f.tekst}</p>
            </div>
          </Reveal>
        ))}
      </ol>

      <p className="istaknuto">{o.close}</p>
    </Chapter>
  )
}
