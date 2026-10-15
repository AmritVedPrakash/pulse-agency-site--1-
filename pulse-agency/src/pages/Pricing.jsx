import useSEO from '../hooks/useSEO'
import PageHero from '../components/common/PageHero'
import PricingCards from '../components/pricing/PricingCards'
import Included from '../components/pricing/Included'
import Comparison from '../components/pricing/Comparison'
import Faq from '../components/pricing/Faq'
import Testimonials from '../components/common/Testimonials'
import CtaBlock from '../components/common/CtaBlock'

export default function Pricing() {
  useSEO('Pricing | Frame Theory Socials', 'Simple monthly social media marketing plans: Starter, Growth and Scale. Example pricing in INR.')
  return (
    <>
      <PageHero align="center" blob="bg-violet/20" title="Simple Plans. Serious Growth." text="Choose the right level of creative firepower for your brand." />
      <PricingCards />
      <Included />
      <Comparison />
      <Faq />
      <Testimonials />
      <CtaBlock title="Need Something Different? Let’s Talk." text="We build custom packages around your goals and budget." label="Request a custom package" to="/contact?plan=Custom" />
    </>
  )
}
