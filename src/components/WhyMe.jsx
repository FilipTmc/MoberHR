import { whyMe } from '../data/site.js'
import Chapter from './Chapter.jsx'

export default function WhyMe() {
  return (
    <Chapter no="14" label="zašto Nataša">
      <h2 className="t-xl">{whyMe.title}</h2>
      <p className="uvod">{whyMe.lead}</p>

      <ul className="zastoja">
        {whyMe.body.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <div className="tekst"><p>{whyMe.after}</p></div>

      <div className="obecanje">
        {whyMe.promise.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </div>
    </Chapter>
  )
}
