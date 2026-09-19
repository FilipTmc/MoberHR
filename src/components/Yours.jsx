import { yours } from '../data/site.js'
import Chapter from './Chapter.jsx'

export default function Yours() {
  return (
    <Chapter no="15" label="vaše je da volite" className="chapter--papir">
      <div className="vase">
        <h2 className="t-xxl">{yours.title}</h2>
        <p className="uvod">{yours.lead}</p>

        <ul className="vase__lista">
          {yours.list.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <p className="istaknuto">{yours.close[0]}</p>
        <div className="tekst"><p>{yours.close[1]}</p></div>
      </div>
    </Chapter>
  )
}
