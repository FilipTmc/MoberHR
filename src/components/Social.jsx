import { contact } from '../data/site.js'

export function mreze() {
  return [
    contact.instagram && { label: 'Instagram', handle: '@mober.hr', href: contact.instagram },
    contact.facebook && { label: 'Facebook', handle: 'MoberHR', href: contact.facebook },
    contact.tiktok && { label: 'TikTok', handle: '@mober.hr', href: contact.tiktok },
  ].filter(Boolean)
}

export default function Social({ className = '' }) {
  const lista = mreze()
  if (!lista.length) return null
  return (
    <nav className={`mreze ${className}`} aria-label="Društvene mreže">
      {lista.map((m) => (
        <a key={m.label} href={m.href} target="_blank" rel="noopener noreferrer">
          {m.label}
        </a>
      ))}
    </nav>
  )
}
