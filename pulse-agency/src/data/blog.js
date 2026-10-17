import { IMG, img } from './site'

export const blogPosts = [
  {
    slug: 'social-content-that-earns-attention',
    title: 'Social content that earns attention (without chasing every trend)',
    category: 'Content Strategy',
    excerpt: 'A practical framework for creating content your audience actually wants to stop and spend time with.',
    date: 'October 14, 2026',
    readTime: '5 min read',
    image: img(IMG.phone, 1400, 900),
    imageAlt: 'A creator planning social media content on a phone',
    featured: true,
    paragraphs: [
      'The fastest way to make a social feed feel forgettable is to post just to keep it active. Strong content starts with a clearer question: what should someone take away after seeing this?',
      'Build each idea around one useful point, one specific audience, and one natural format. A quick demonstration might work best as a Reel; a step-by-step explanation could be a carousel. Let the message choose the format, not the other way around.',
      'Trends can help an idea travel, but they are not a strategy. Use one only when it makes your message easier to understand or more enjoyable to watch. If the connection feels forced, your audience will notice.',
      'Finally, review more than views. Saves, shares, thoughtful replies, profile visits, and enquiries tell you whether the content mattered. Keep the ideas that help people, learn from the ones that do not, and make the next post with that insight in mind.',
    ],
  },
  {
    slug: 'a-simple-content-calendar-that-works',
    title: 'A simple content calendar your team can actually keep up with',
    category: 'Social Media',
    excerpt: 'Plan with enough structure to stay consistent, while leaving room for timely ideas and real conversations.',
    date: 'October 8, 2026',
    readTime: '4 min read',
    image: img(IMG.desk, 1000, 750),
    imageAlt: 'A team planning upcoming social content together',
    paragraphs: [
      'A useful content calendar is not a list of posts that becomes stressful the moment plans change. It is a shared view of what your brand wants to say, who it is for, and what needs to happen before it goes live.',
      'Start with a few repeatable themes that reflect your audience’s questions and your brand’s strengths. Give each week a healthy mix: helpful ideas, proof of your work, a little personality, and a clear invitation to take the next step.',
      'Plan the essential details together: the goal, format, owner, draft date, and approval date. A simple workflow makes it easier to spot gaps early and gives everyone a clear next action.',
      'Keep a small space for unplanned moments. A calendar should help your team show up consistently, not prevent you from joining a conversation that genuinely fits your brand.',
    ],
  },
  {
    slug: 'make-your-ad-creative-work-harder',
    title: 'Make your ad creative work harder before you raise the budget',
    category: 'Paid Ads',
    excerpt: 'A grounded way to test hooks, formats, and messages before putting more spend behind a campaign.',
    date: 'September 30, 2026',
    readTime: '6 min read',
    image: img(IMG.data, 1000, 750),
    imageAlt: 'Campaign performance charts on a laptop screen',
    paragraphs: [
      'When an ad is underperforming, increasing the budget rarely fixes the reason people are scrolling past it. Start by checking whether the offer is clear, the first few seconds earn attention, and the destination page follows through on the promise.',
      'Test one meaningful creative difference at a time. Try a different opening, show the product in use, or explain the benefit in a more direct way. Clear tests make results easier to learn from than changing everything at once.',
      'Give each version enough time and a fair comparison. Look at the full journey too: a strong click-through rate is useful, but qualified enquiries and completed purchases are what make the campaign valuable.',
      'Once you know which message resonates, build on it with fresh variations. Better creative gives a campaign a stronger foundation before you decide whether more budget makes sense.',
    ],
  },
  {
    slug: 'brand-consistency-without-being-boring',
    title: 'Brand consistency does not mean posting the same thing forever',
    category: 'Brand Building',
    excerpt: 'Keep a recognisable point of view while giving your social presence enough variety to feel alive.',
    date: 'September 22, 2026',
    readTime: '4 min read',
    image: img(IMG.design, 1000, 750),
    imageAlt: 'Creative brand identity elements laid out on a desk',
    paragraphs: [
      'A recognisable brand is built from more than a repeating template. It comes from the way you speak, the ideas you return to, the promises you keep, and the experience people have whenever they meet your business.',
      'Create a few simple guardrails for your visual style and voice. These should help a team make good decisions quickly, not turn every post into an identical copy of the last one.',
      'Then give each content theme room to change shape. Customer stories, practical tips, behind-the-scenes moments, and product updates can all feel distinct while still sharing the same point of view.',
      'Consistency is the thread that connects those different moments. When your message and actions line up over time, people know what to expect—and they have a reason to remember you.',
    ],
  },
]

export const blogCategories = ['All', ...new Set(blogPosts.map((post) => post.category))]
