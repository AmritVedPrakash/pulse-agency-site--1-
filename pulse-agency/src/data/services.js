import { Share2, Megaphone, Clapperboard, Palette, Users, TrendingUp } from 'lucide-react'
import { IMG } from './site'
export const services = [
  { title: 'Social Media Management', desc: 'Calendars, posting, community replies and monthly reporting, handled end to end.', icon: Share2, image: IMG.phone, span: 'lg:col-span-7' },
  { title: 'Instagram & Facebook Ads', desc: 'Paid campaigns built around creative that stops the scroll and a funnel that converts.', icon: Megaphone, image: IMG.data, span: 'lg:col-span-5' },
  { title: 'Content Creation & Reels', desc: 'Short-form video, carousels and photography shot for each platform.', icon: Clapperboard, image: IMG.phone2, span: 'lg:col-span-4' },
  { title: 'Brand Identity & Graphic Design', desc: 'Logos, colour, type and templates your team can reuse without losing consistency.', icon: Palette, image: IMG.design, span: 'lg:col-span-4' },
  { title: 'Influencer Marketing', desc: 'Creator sourcing, briefs, contracts and campaign tracking.', icon: Users, image: IMG.crew, span: 'lg:col-span-4' },
  { title: 'Digital Growth Strategy', desc: 'A clear plan covering channels, audience, budget and the numbers that matter.', icon: TrendingUp, image: IMG.laptop, span: 'lg:col-span-12' },
]
export const planOptions = ['Starter', 'Growth', 'Scale', 'Custom']
export const serviceOptions = services.map(s => s.title)
export const budgets = ['Under ₹10,000', '₹10,000 – ₹25,000', '₹25,000 – ₹50,000', '₹50,000+', 'Not sure yet']
export const portfolio = [
  { title: 'Festival launch reels', tag: 'Reels', image: IMG.phone, cls: 'sm:row-span-2', blurb: 'Sample project: a six-week short-video series for a fictional D2C brand.' },
  { title: 'Rebrand rollout', tag: 'Brand', image: IMG.design2, cls: '', blurb: 'Sample project: visual identity and social templates.' },
  { title: 'Lead-gen ad set', tag: 'Paid Ads', image: IMG.data, cls: '', blurb: 'Sample project: creative testing across Instagram and Facebook.' },
  { title: 'Creator collab', tag: 'Influencer', image: IMG.people, cls: 'sm:row-span-2', blurb: 'Sample project: ten micro-creators, one hero campaign.' },
  { title: 'Product drop carousel', tag: 'Content', image: IMG.brand, cls: '', blurb: 'Sample project: educational carousels for a launch.' },
  { title: 'Studio shoot day', tag: 'Content', image: IMG.space, cls: '', blurb: 'Sample project: a one-day shoot yielding a month of content.' },
]
export const process = [
  { t: 'Discover', d: 'Understand the brand and audience.' }, { t: 'Strategize', d: 'Build a tailored growth plan.' },
  { t: 'Create', d: 'Produce engaging campaigns and content.' }, { t: 'Optimize', d: 'Analyze performance and improve results.' },
]
export const brands = ['Northwind Co.', 'Lumen Labs', 'Orbit Foods', 'Bluepine', 'Kite & Co.', 'Fable Wear', 'Mosaic Home', 'Zenith Fit']
export const stats = [
  { n: 150, suffix: '+', label: 'Campaigns delivered' }, { n: 85, suffix: '+', label: 'Happy clients' },
  { n: 3.5, suffix: 'M+', label: 'Audience reach', dec: 1 }, { n: 4.8, suffix: '×', label: 'Average ROAS', dec: 1 },
]
