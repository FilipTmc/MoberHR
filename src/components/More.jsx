import { more } from '../data/site.js'
import Chapter from './Chapter.jsx'

export default function More() {
  return (
    <Chapter no="08" label="želite više" className="chapter--zelena">
      <h2 className="t-xl">{more.title}</h2>
      <p className="uvod">{more.lead}</p>
      <div className="tekst"><p>{more.sub}</p></div>

      <dl className="qa">
        {more.pairs.map((p) => (
          <div className="qa__row" key={p.q}>
            <dt className="qa__q">{p.q}</dt>
            <dd className="qa__a">{p.a}</dd>
          </div>
        ))}
      </dl>

      <div className="vise__close">
        {more.close.map((t, i) => (
          <p key={i}>{t}</p>
        ))}
      </div>
    </Chapter>
  )
}
