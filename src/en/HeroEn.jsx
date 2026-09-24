import { heroEn } from '../data/site-en.js'

export default function HeroEn() {
  return (
    <section className="hero hero--en" id="top">
      <div className="hero__media">
        <img src={heroEn.image} alt={heroEn.alt} fetchPriority="high" />
      </div>
      <div className="shell hero__inner">
        <h1 className="hero__fade">{heroEn.title}</h1>
        <p className="hero__tagline hero__fade hero__fade--2">{heroEn.tagline}</p>
        <div className="hero__dno hero__fade hero__fade--2">
          <p className="hero__sub">{heroEn.subtitle}</p>
          <a className="veza hero__cta" href="#contact">{heroEn.cta}</a>
        </div>
      </div>
    </section>
  )
}
