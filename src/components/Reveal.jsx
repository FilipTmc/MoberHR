import { useEffect, useRef, useState } from 'react'

/* Diskretan fade-in kad element uđe u vidno polje.
   Poštuje postavku "smanji animacije" u operativnom sustavu. */
export default function Reveal({ children, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${visible ? 'is-in' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
