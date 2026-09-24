import { stripEn } from '../data/site-en.js'

export default function StripEn() {
  return (
    <section className="chapter chapter--zbijeno" aria-label="Wedding details">
      <div className="strip">
        {stripEn.items.map((item, i) => (
          <figure key={i}>
            {item.type === 'video' ? (
              <video src={item.src} poster={item.poster} autoPlay muted loop playsInline aria-label={item.alt} />
            ) : (
              <img src={item.src} alt={item.alt} loading="lazy" />
            )}
          </figure>
        ))}
      </div>
      <div className="shell">
        <p className="strip__note">{stripEn.note}</p>
      </div>
    </section>
  )
}
