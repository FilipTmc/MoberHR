import { brand } from '../data/site.js'

/* Na tamnim podlogama ide zlatna inačica, na svijetlima tamnozelena.
   Ako logo nije upisan, pada natrag na tekstualni zapis. */
export default function Logo({ tamnaPodloga = false, znak = false, className = '', href = '#sadrzaj', onClick }) {
  const par = znak
    ? [brand.logoZnak || brand.logo, brand.logoZnakTamni || brand.logoTamni]
    : [brand.logo, brand.logoTamni]
  const src = tamnaPodloga ? par[0] : par[1] || par[0]
  const sadrzaj = src ? (
    <img className="logo__img" src={src} alt={brand.logoAlt || `${brand.name} ${brand.suffix}`} />
  ) : (
    <>
      <span className="logo__name">{brand.name}</span>
      <span className="logo__sub">{brand.suffix}</span>
    </>
  )

  if (!href) return <span className={`logo ${className}`}>{sadrzaj}</span>

  return (
    <a className={`logo ${className}`} href={href} onClick={onClick}
       aria-label={`${brand.name} ${brand.suffix} — početna`}>
      {sadrzaj}
    </a>
  )
}
