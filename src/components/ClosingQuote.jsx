import { brand, closingQuote as q } from '../data/site.js'
import Logo from './Logo.jsx'
import Social from './Social.jsx'

export default function ClosingQuote() {
  return (
    <section className="zavrsni">
      <video src={q.video} poster={q.poster} autoPlay muted loop playsInline aria-hidden="true" />
      <div className="shell zavrsni__inner">
        <div className="citat__crta" aria-hidden="true" />
        <blockquote className="citat__tekst">
          {q.text}
          {q.author && <cite className="citat__autor">{q.author}</cite>}
        </blockquote>

        <div className="zavrsni__marka">
          <Logo tamnaPodloga href={null} />
          <p className="zavrsni__linija">{brand.line}</p>
          <Social className="mreze--zavrsni" />
        </div>
      </div>
    </section>
  )
}
