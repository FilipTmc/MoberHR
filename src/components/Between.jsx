import { between } from '../data/site.js'
import Chapter from './Chapter.jsx'

export default function Between() {
  return (
    <Chapter no="12" label="između trenutaka" className="chapter--duboki">
      <h2 className="t-xl">{between.title}</h2>
      <p className="uvod">{between.lead}</p>

      <ul className="pitanja">
        {between.questions.map((q) => (
          <li key={q}>{q}</li>
        ))}
      </ul>

      <p className="odgovor">{between.answer}</p>

      <div className="izmedu__close">
        {between.close.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </div>
    </Chapter>
  )
}
