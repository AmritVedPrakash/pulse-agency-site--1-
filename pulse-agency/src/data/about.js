import { Target, Eye, Lightbulb, ShieldCheck, Users, BarChart3 } from 'lucide-react'
// All About page copy lives here. Edit freely (placeholder text).
export const about = {
  hero: { title: 'Creativity With a Purpose. Growth With a Plan.', text: 'A small team of strategists, designers and editors who care about both the craft and the numbers.' },
  story: ['Frame Theory Socials started with a simple frustration: social media agencies that sent pretty posts and vague reports. We set out to build one where the creative work and the numbers sit at the same table.', 'Today we are a small team of strategists, designers, video editors and media buyers. (Placeholder story. Replace with your own.)'],
  mission: [
    { icon: Target, title: 'Our mission', text: 'Help ambitious brands build audiences that care, with creative work that earns attention and reporting that proves it.', cls: 'bg-violet text-white' },
    { icon: Eye, title: 'Our vision', text: 'A world where every small and mid-sized brand can compete for attention with the confidence of a global one.', cls: 'bg-ink text-cream' },
  ],
  values: [
    { icon: Lightbulb, title: 'Creativity', text: 'Ideas that look like nobody else’s.' },
    { icon: ShieldCheck, title: 'Transparency', text: 'You always know what we did and why.' },
    { icon: Users, title: 'Collaboration', text: 'Your team and ours, in one room.' },
    { icon: BarChart3, title: 'Measurable results', text: 'Every campaign has a number it answers to.' },
  ],
  approach: { title: 'Where creativity meets data', text: 'We start with audience research, then make creative bets. Every post, reel and ad is tagged, tracked and reviewed so the next round is smarter than the last.', points: ['Research before concepts', 'Test small, scale what works', 'Report in plain language'] },
}
