import { firstDance as d } from '../data/site.js'

export default function FirstDance() {
  return (
    <section className="ples">
      <video src={d.video} poster={d.poster} autoPlay muted loop playsInline aria-label={d.videoAlt} />
      <div className="shell ples__inner">
        <span className="mark__no" style={{ color: 'rgba(251,248,241,.6)' }}>11 — prvi ples</span>
        <h2 className="t-xxl" style={{ marginTop: '1rem' }}>{d.title}</h2>

        <ul className="ples__linije">
          {d.lines.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>

        <div className="ples__dno">
          <div>
            <p className="ples__uvod">{d.lead}</p>
            <ul className="ples__stavke">
              {d.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="ples__uvod" style={{ marginBottom: '0.9rem' }}>{d.body}</p>
            <p className="ples__close">{d.close}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
