import { croatia } from '../data/site-en.js'
import Chapter from '../components/Chapter.jsx'

export default function CroatiaEn() {
  return (
    <Chapter no="01" label="croatia" id="croatia">
      <div className="pin pin--desno">
        <div className="pin__media">
          <img src={croatia.photo} alt={croatia.photoAlt} loading="lazy" />
        </div>

        <div>
          <h2 className="t-xl">{croatia.title}</h2>
          <p className="uvod">{croatia.lead}</p>

          <ul className="mjesta">
            {croatia.places.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>

          <p className="istaknuto">{croatia.turn}</p>
          <div className="tekst"><p>{croatia.body}</p></div>
          <p className="istaknuto">{croatia.close}</p>
        </div>
      </div>
    </Chapter>
  )
}
