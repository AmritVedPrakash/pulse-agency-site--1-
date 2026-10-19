import { IMG } from './site'
import siplyClientImage from '../assets/testimonials/img1.jpeg'
// SAMPLE testimonials. Replace with real, permissioned reviews before launch.
export const testimonials = [
  {
    name: 'Client Name',
    role: 'Founder, Siply',
    imageSrc: siplyClientImage,
    quote: 'From building a stronger brand identity to creating content that connects, we help businesses turn their social media presence into real opportunities for growth.',
  },
  { name: 'Sample Client A', role: 'Founder, Demo Brand', image: IMG.p3, quote: 'Sample testimonial: they gave our feed a clear voice and our team finally has a plan to follow.' },
  { name: 'Sample Client B', role: 'Marketing Lead, Demo Co.', image: IMG.p4, quote: 'Sample testimonial: reports were clear, honest and tied to goals we actually care about.' },
  { name: 'Sample Client C', role: 'Owner, Demo Store', image: IMG.p1, quote: 'Sample testimonial: the reels brought in a younger audience without losing our brand feel.' },
]
export const team = [
  { name: 'Aarav Mehta', role: 'Creative Director', image: IMG.p2 }, { name: 'Isha Kapoor', role: 'Head of Strategy', image: IMG.p3 },
  { name: 'Kabir Rao', role: 'Performance Lead', image: IMG.p4 }, { name: 'Meera Nair', role: 'Content Producer', image: IMG.p1 },
]
