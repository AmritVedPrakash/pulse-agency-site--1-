import useSEO from '../hooks/useSEO'
import Hero from '../components/home/Hero'
import Marquee from '../components/home/Marquee'
import Services from '../components/home/Services'
import Portfolio from '../components/home/Portfolio'
import Results from '../components/home/Results'
import Process from '../components/home/Process'
import Testimonials from '../components/common/Testimonials'
import CtaBlock from '../components/common/CtaBlock'

export default function Home() {
  useSEO('Pulse Studio | Social Media Marketing Agency', 'Social media management, ads, reels, branding and growth strategy for brands that want attention and measurable results.')
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Portfolio />
      <Results />
      <Process />
      <Testimonials />
      <CtaBlock title="Ready to Make Some Noise?" text="Let’s turn your next big idea into your brand’s next big win." />
    </>
  )
}
