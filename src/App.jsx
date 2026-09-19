import Progress from './components/Progress.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import OpeningQuote from './components/OpeningQuote.jsx'
import Why from './components/Why.jsx'
import About from './components/About.jsx'
import Idea from './components/Idea.jsx'
import Mosaic from './components/Mosaic.jsx'
import Team from './components/Team.jsx'
import Coordination from './components/Coordination.jsx'
import Organization from './components/Organization.jsx'
import Staff from './components/Staff.jsx'
import Corners from './components/Corners.jsx'
import More from './components/More.jsx'
import Locations from './components/Locations.jsx'
import Services from './components/Services.jsx'
import FirstDance from './components/FirstDance.jsx'
import Between from './components/Between.jsx'
import WhyMe from './components/WhyMe.jsx'
import Yours from './components/Yours.jsx'
import Contact from './components/Contact.jsx'
import ClosingQuote from './components/ClosingQuote.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip" href="#sadrzaj">Prijeđi na sadržaj</a>
      <Progress />
      <Header />
      <main id="sadrzaj">
        <Hero />
        <OpeningQuote />
        <Why />
        <About />
        <Idea />
        <Mosaic />
        <Team />
        <Coordination />
        <Organization />
        <Staff />
        <Corners />
        <More />
        <Locations />
        <Services />
        <FirstDance />
        <Between />
        <WhyMe />
        <Yours />
        <Contact />
        <ClosingQuote />
      </main>
      <Footer />
    </>
  )
}
