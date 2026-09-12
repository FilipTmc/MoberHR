import { useEffect, useState } from 'react'

/* Tanka linija na vrhu pokazuje dokle je čitatelj stigao — stranica je duga. */
export default function Progress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setPct(h > 0 ? (window.scrollY / h) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  return <div className="progress" style={{ width: `${pct}%` }} aria-hidden="true" />
}
