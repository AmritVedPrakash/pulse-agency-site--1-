// Edit company details here.
export const site = {
  name: "Frame Theory Socials",
  tagline: "Creative minds. Measurable growth.",
  email: import.meta.env.VITE_CONTACT_EMAIL || "connect@frametheorysocials.in",
  careersEmail: "career@frametheorysocials.in",
  phone: "+91 9711376997",
  address: "B.K. Tower, H Block, Noida Sector 63, Uttar Pradesh - 201301",
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || "919711376997",
  socials: {
    instagram: "https://www.instagram.com/frame_theory_socials/",
    linkedin: "https://www.linkedin.com/company/frametheorysocials/?viewAsMember=true",
    facebook: "https://www.facebook.com/share/1C7reEgrAT/?mibextid=wwXIfr",
    youtube: "https://youtube.com/@frametheorysocials?si=rb3Bgy4FR9fb3N0n",
  },
};
export const img = (id, w = 900, h) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ""}&q=75`;
export const IMG = {
  team: "1522071820081-009f0129c71c",
  desk: "1553877522-43269d4ea984",
  data: "1460925895917-afdab827c52f",
  phone: "1611162617213-7d7a39e9b1d7",
  phone2: "1611162616305-c69b3fa7fbe0",
  meet: "1542744173-8e7e53415bb0",
  crew: "1517245386807-bb43f82c33c4",
  design: "1561070791-2526d30994b5",
  design2: "1558655146-9f40138edfeb",
  laptop: "1516321318423-f06f85e504b3",
  space: "1497366216548-37526070297c",
  brand: "1493612276216-ee3925520721",
  talk: "1556761175-5973dc0f32e7",
  people: "1552664730-d307ca884978",
  work: "1600880292203-757bb62b4baf",
  p1: "1494790108377-be9c29b29330",
  p2: "1507003211169-0a1dd7228f2d",
  p3: "1438761681033-6461ffad8d80",
  p4: "1500648767791-00dcc994a43e",
};
