import { useEffect, useState } from 'react'
import { nav } from '../data/site.js'
import Logo from './Logo.jsx'
import Social from './Social.jsx'

export default function Header() {
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header className={`header ${stuck ? 'is-stuck' : ''} ${!stuck && !open ? 'header--preko' : ''}`}>
        <div className="shell header__inner">
          <Logo znak tamnaPodloga={!stuck && !open} />

          <nav className="nav" aria-label="Glavna navigacija">
            {nav.map((i) => (
              <a className="nav__link" key={i.href} href={i.href}>
                {i.label}
              </a>
            ))}
            <a className="btn" href="#kontakt">Pošaljite upit</a>
          </nav>

          <button
            className={`burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobilni-izbornik"
            aria-label={open ? 'Zatvori izbornik' : 'Otvori izbornik'}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {open && (
        <div className="drawer" id="mobilni-izbornik">
          {nav.map((i) => (
            <a key={i.href} href={i.href} onClick={() => setOpen(false)}>{i.label}</a>
          ))}
          <a className="btn" href="#kontakt" onClick={() => setOpen(false)}>Pošaljite upit</a>
          <Social className="mreze--izbornik" />
        </div>
      )}
    </>
  )
}
