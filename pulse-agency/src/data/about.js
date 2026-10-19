import { Target, Eye, Lightbulb, ShieldCheck, Users, BarChart3 } from 'lucide-react'
// All About page copy lives here.
export const about = {
  hero: { title: 'Creativity With a Purpose. Growth With a Plan.', text: 'A small team of strategists, designers and editors who care about both the craft and the numbers.' },
  story: ['Frame Theory Socials was founded by two friends with experience in the influencer marketing industry who recognised the need for better quality, stronger strategies, and more meaningful brand collaborations. Built on the philosophy of quality over quantity, we focus on creative storytelling, thoughtful execution, and building lasting relationships that help brands grow with purpose.'],
  mission: [
    { icon: Eye, title: 'Our vision', text: 'To redefine the standard of social media and influencer marketing by creating meaningful digital experiences where creativity meets strategy. We envision a future where every brand has a distinctive voice, a strong digital presence, and the opportunity to build genuine connections with its audience.', cls: 'bg-violet text-white' },
    { icon: Target, title: 'Our mission', text: 'Our mission is to help brands grow through strategic thinking, compelling content, and impactful influencer collaborations. By working with a select group of clients, we deliver personalised attention, creative excellence, and results-driven solutions that reflect each brand’s vision while maintaining the highest standards of quality.', cls: 'bg-ink text-cream' },
  ],
  values: [
    { icon: ShieldCheck, title: 'Quality over quantity', text: 'We focus on meaningful collaborations and work that meets the highest standards.' },
    { icon: Lightbulb, title: 'Creative storytelling', text: 'We help every brand share a distinctive voice through compelling content.' },
    { icon: BarChart3, title: 'Thoughtful execution', text: 'Strategy and careful execution shape every digital experience we create.' },
    { icon: Users, title: 'Lasting relationships', text: 'We build genuine connections that help brands grow with purpose.' },
  ],
  approach: { title: 'Where creativity meets data', text: 'We start with audience research, then make creative bets. Every post, reel and ad is tagged, tracked and reviewed so the next round is smarter than the last.', points: ['Research before concepts', 'Test small, scale what works', 'Report in plain language'] },
}
