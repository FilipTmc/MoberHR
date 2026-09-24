import { useEffect, useState } from 'react'
import { navEn, jezik } from '../data/site-en.js'
import LogoEn from './LogoEn.jsx'

export default function HeaderEn() {
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
          <LogoEn znak tamnaPodloga={!stuck && !open} />

          <nav className="nav" aria-label="Main navigation">
            {navEn.map((i) => (
              <a className="nav__link" key={i.href} href={i.href}>{i.label}</a>
            ))}
            <a className="nav__link jezik" href={jezik.naHrvatski.href} title={jezik.naHrvatski.title}>
              {jezik.naHrvatski.label}
            </a>
            <a className="btn" href="#contact">Send enquiry</a>
          </nav>

          <button
            className={`burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {open && (
        <div className="drawer" id="mobile-menu">
          {navEn.map((i) => (
            <a key={i.href} href={i.href} onClick={() => setOpen(false)}>{i.label}</a>
          ))}
          <a href={jezik.naHrvatski.href}>Hrvatski</a>
          <a className="btn" href="#contact" onClick={() => setOpen(false)}>Send enquiry</a>
        </div>
      )}
    </>
  )
}
