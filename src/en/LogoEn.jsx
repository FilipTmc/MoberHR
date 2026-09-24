import { brandEn } from '../data/site-en.js'

export default function LogoEn({ tamnaPodloga = false, znak = false, className = '', href = '#top', onClick }) {
  const par = znak
    ? [brandEn.logoZnak || brandEn.logo, brandEn.logoZnakTamni || brandEn.logoTamni]
    : [brandEn.logo, brandEn.logoTamni]
  const src = tamnaPodloga ? par[0] : par[1] || par[0]

  const sadrzaj = src ? (
    <img className="logo__img" src={src} alt={brandEn.logoAlt} />
  ) : (
    <>
      <span className="logo__name">{brandEn.name}</span>
      <span className="logo__sub">{brandEn.suffix}</span>
    </>
  )

  if (!href) return <span className={`logo ${className}`}>{sadrzaj}</span>

  return (
    <a className={`logo ${className}`} href={href} onClick={onClick} aria-label={`${brandEn.name} ${brandEn.suffix} — home`}>
      {sadrzaj}
    </a>
  )
}
