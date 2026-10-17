import useSEO from '../hooks/useSEO'
import Hero from '../components/home/Hero'
import Marquee from '../components/home/Marquee'
import Services from '../components/home/Services'
import Portfolio from '../components/home/Portfolio'
import Results from '../components/home/Results'
import Process from '../components/home/Process'
import Testimonials from '../components/common/Testimonials'
import CtaBlock from '../components/common/CtaBlock'
import WhoWeAre from '../components/home/WhoWeAre'
import OurServices from '../components/home/OurServices'
import HeroSec from '../components/home/HeroSec'
import FrameTheoryScroll from '../components/home/Frametheoryscroll'
import OurWork from '../components/home/OurWork'

export default function Home() {
  useSEO('Frame Theory Socials | Social Media Marketing Agency', 'Social media management, ads, reels, branding and growth strategy for brands that want attention and measurable results.')
  return (
    <>
    
      <FrameTheoryScroll/>
      {/* <Hero /> */}
      <Marquee />
       <WhoWeAre/>
      {/* <Services /> */}
      <OurServices/>
      <OurWork/>
     
      {/* <Portfolio /> */}
      <Results />
      <Process />
      <Testimonials />
      <CtaBlock title="Ready to Make Some Noise?" text="Let’s turn your next big idea into your brand’s next big win." />
    </>
  )
}
