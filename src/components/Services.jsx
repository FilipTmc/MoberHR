import { services as s } from '../data/site.js'
import Chapter from './Chapter.jsx'

export default function Services() {
  return (
    <Chapter no="11" label="dobavljači" className="chapter--papir">
      <h2 className="t-xl">{s.title}</h2>
      <p className="uvod">{s.lead}</p>
      <div className="tekst"><p>{s.sub}</p></div>

      <div className="usluge">
        {s.items.map((i) => (
          <div className="usluga" key={i.name}>
            <h3>{i.name}</h3>
            <p>{i.text}</p>
          </div>
        ))}
      </div>

      <p className="istaknuto">{s.close}</p>
    </Chapter>
  )
}
