import useSEO from '../hooks/useSEO'
import OurServicesSection from '../components/home/OurServices'

export default function OurServices() {
  useSEO('Our Services | Frame Theory Socials', 'Explore Frame Theory Socials services, from social media management and content production to performance marketing and web development.')
  return <OurServicesSection />
}
