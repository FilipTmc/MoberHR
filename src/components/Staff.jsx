import { staff } from '../data/site.js'
import Chapter from './Chapter.jsx'

export default function Staff() {
  return (
    <Chapter no="06" label="operativni tim" className="chapter--papir">
      <div className="pin">
        <div className="pin__media">
          <img src={staff.photo} alt={staff.photoAlt} loading="lazy" />
        </div>

        <div>
          <h2 className="t-xl">{staff.title}</h2>
          <p className="uvod">{staff.lead}</p>
          <div className="tekst">
            <p>{staff.sub}</p>
            {staff.body.map((t, i) => (
              <p key={i}>{t}</p>
            ))}
          </div>

          <ul className="osobine">
            {staff.qualities.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>

          <p className="istaknuto">{staff.close}</p>
        </div>
      </div>
    </Chapter>
  )
}
