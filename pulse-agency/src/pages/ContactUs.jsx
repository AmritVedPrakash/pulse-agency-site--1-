import useSEO from '../hooks/useSEO'
import PageHero from '../components/common/PageHero'
import ContactInfo from '../components/contact/ContactInfo'
import NextSteps from '../components/contact/NextSteps'
import Faq from '../components/pricing/Faq'
import { contactFaqs } from '../data/contact'

export default function ContactUs() {
  useSEO('Contact Us | Frame Theory Socials', 'Get in touch with Frame Theory Socials by email or WhatsApp to talk about your brand and goals.')
  return (
    <>
      <PageHero blob="bg-coral/25" title="Have a Big Idea? Let’s Make It Happen." text="Have a project in mind? Reach out by email or WhatsApp and tell us a little about your brand and goals. We’ll help you find the right next step." />
      <section className="pb-24 pt-8">
        <div className="container-x"><ContactInfo /></div>
      </section>
      <NextSteps />
      <Faq items={contactFaqs} title="Before you write" />
    </>
  )
}
