import { cjenik } from '../data/site.js'
import Chapter from './Chapter.jsx'

/* Cijene se ovdje namjerno NE prikazuju — odluka klijenta.
   Sam cjenik je javno dostupan preko podnožja (/cjenik-usluga.html + CSV),
   bez obrasca, prijave ili drugog ograničenja pristupa. */
export default function Pricing() {
  return (
    <Chapter no="16" label="cjenik" className="chapter--papir" id="cjenik">
      <h2 className="t-xl">{cjenik.naslov}</h2>
      <p className="uvod">{cjenik.lead}</p>
      <div className="tekst"><p>{cjenik.tekst}</p></div>

      <div className="cjenik__gumbi">
        <a className="btn btn--obris" href={cjenik.gumbCjenikHref}>
          {cjenik.gumbCjenik}
        </a>
        <a className="btn" href="#kontakt">
          {cjenik.gumbKontakt}
        </a>
      </div>
    </Chapter>
  )
}
