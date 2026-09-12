import { hero } from '../data/site.js'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__media">
        <img src={hero.image} alt={hero.alt} fetchPriority="high" />
      </div>
      <div className="shell hero__inner">
        <h1 className="hero__fade">{hero.title}</h1>
        <div className="hero__dno hero__fade hero__fade--2">
          <p className="hero__sub">{hero.subtitle}</p>
          <a className="veza hero__cta" href="#kontakt">{hero.cta}</a>
        </div>
      </div>
    </section>
  )
}
