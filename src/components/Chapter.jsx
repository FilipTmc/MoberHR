/* Svaka cjelina nosi svoj broj u lijevoj margini.
   Sadržaj JEST slijed od 19 poglavlja, pa numeracija nešto znači. */
export default function Chapter({ no, label, children, className = '', id }) {
  return (
    <section className={`chapter ${className}`} id={id}>
      <div className="shell grid">
        <div className="mark">
          <span className="mark__no">
            {no} — {label}
          </span>
          <div className="mark__line" />
        </div>
        <div>{children}</div>
      </div>
    </section>
  )
}
