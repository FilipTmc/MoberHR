import { why } from '../data/site.js'
import Chapter from './Chapter.jsx'

export default function Why() {
  return (
    <Chapter no="01" label="zašto postojimo" className="chapter--duboki">
      <h2 className="t-xl">{why.title}</h2>
      <p className="uvod">{why.lead}</p>

      <ul className="netko">
        {why.someone.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>

      <p className="istaknuto">{why.close}</p>
    </Chapter>
  )
}
