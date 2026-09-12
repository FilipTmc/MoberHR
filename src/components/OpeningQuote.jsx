import { openingQuote as q } from '../data/site.js'
import Reveal from './Reveal.jsx'

export default function OpeningQuote() {
  return (
    <section className="chapter chapter--zbijeno">
      <Reveal className="shell citat">
        <div className="citat__crta" aria-hidden="true" />
        <blockquote className="citat__tekst">
          {q.text}
          {q.author && <cite className="citat__autor">{q.author}</cite>}
        </blockquote>
      </Reveal>
    </section>
  )
}
