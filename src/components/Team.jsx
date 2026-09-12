import { team } from '../data/site.js'
import Chapter from './Chapter.jsx'
import Reveal from './Reveal.jsx'

export default function Team() {
  return (
    <Chapter no="04" label="naš tim" className="chapter--zelena">
      <div className="pin">
        <div>
          <p className="broj" aria-hidden="true">3</p>
          <h2 className="t-l" >{team.title}</h2>
          <ul className="triad">
            {team.triad.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="tekst" style={{ marginTop: 0 }}>
            <p>{team.lead}</p>
            <p>{team.sub}</p>
            <p>{team.body}</p>
          </div>
          <div className="pitanje">
            <p className="q">{team.question}</p>
            <p className="a">{team.answer}</p>
          </div>
          <Reveal>
            <video className="tim__video" src={team.video} poster={team.videoPoster}
                   autoPlay muted loop playsInline aria-label={team.videoAlt} />
          </Reveal>
        </div>
      </div>
    </Chapter>
  )
}
