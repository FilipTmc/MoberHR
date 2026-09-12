import { mosaic } from '../data/site.js'

export default function Mosaic() {
  return (
    <section className="chapter chapter--zbijeno" aria-label="Detalji s vjenčanja">
      <div className="strip">
        {mosaic.items.map((item, i) => (
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
        <p className="strip__note">Povucite u stranu za više fotografija</p>
      </div>
    </section>
  )
}
