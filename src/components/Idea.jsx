import { idea } from '../data/site.js'
import Chapter from './Chapter.jsx'

export default function Idea() {
  return (
    <Chapter no="03" label="od ideje do plesa" className="chapter--papir">
      <h2 className="t-xl">{idea.title}</h2>
      <p className="uvod">{idea.lead}</p>
      <div className="tekst"><p>{idea.sub}</p></div>

      <ul className="moods">
        {idea.moods.map((m) => (
          <li key={m}>{m}</li>
        ))}
        <li className="moods__last">{idea.moodLast}</li>
      </ul>

      <p className="istaknuto">{idea.close[0]}</p>
      <div className="tekst"><p>{idea.close[1]}</p></div>
    </Chapter>
  )
}
