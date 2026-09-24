import Progress from '../components/Progress.jsx'
import HeaderEn from './HeaderEn.jsx'
import HeroEn from './HeroEn.jsx'
import CroatiaEn from './CroatiaEn.jsx'
import StripEn from './StripEn.jsx'
import AboutEn from './AboutEn.jsx'
import ContactEn from './ContactEn.jsx'
import FooterEn from './FooterEn.jsx'

export default function AppEn() {
  return (
    <>
      <a className="skip" href="#content">Skip to content</a>
      <Progress />
      <HeaderEn />
      <main id="content">
        <HeroEn />
        <CroatiaEn />
        <StripEn />
        <AboutEn />
        <ContactEn />
      </main>
      <FooterEn />
    </>
  )
}
