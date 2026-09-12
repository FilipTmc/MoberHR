import { coordination as c } from '../data/site.js'
import Chapter from './Chapter.jsx'

export default function Coordination() {
  return (
    <Chapter no="05" label="koordinacija" id="usluge">
      <div className="pin pin--desno">
        <div className="pin__media">
          <img src={c.photo} alt={c.photoAlt} loading="lazy" />
        </div>

        <div>
          <h2 className="t-xl">{c.title}</h2>
          <p className="uvod">{c.lead.join(' ')}</p>
          <div className="tekst"><p>{c.body}</p></div>

          <p className="istaknuto" style={{ marginTop: '2.4rem' }}>{c.listTitle}</p>
          <ul className="brine">
            {c.items.map((i) => (
              <li key={i}><span>{i}</span></li>
            ))}
          </ul>

          <p className="istaknuto">{c.close}</p>
        </div>
      </div>
    </Chapter>
  )
}
