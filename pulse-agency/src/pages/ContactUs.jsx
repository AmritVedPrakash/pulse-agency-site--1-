import useSEO from '../hooks/useSEO'
import PageHero from '../components/common/PageHero'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import NextSteps from '../components/contact/NextSteps'
import Faq from '../components/pricing/Faq'
import { contactFaqs } from '../data/contact'

export default function ContactUs() {
  useSEO('Contact Us | Pulse Studio', 'Tell us about your brand and goals. Send a project inquiry to Pulse Studio.')
  return (
    <>
      <PageHero blob="bg-coral/25" title="Have a Big Idea? Let’s Make It Happen." text="Tell us about your brand, your goals, and what you want to achieve. We’ll help you figure out the next step." />
      <section className="pb-24 pt-8">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7"><ContactForm /></div>
          <div className="lg:col-span-5"><ContactInfo /></div>
        </div>
      </section>
      <NextSteps />
      <Faq items={contactFaqs} title="Before you write" />
    </>
  )
}
