export const site = {
  name: "Elias Chen",
  handle: "abluefroggo",
  handleSpaced: "a b l u e f r o g g o",
  identity: {
    /** URL triggers: ?real, ?mode=real, ?name=elias, ?elias */
    urlKeys: ["elias"],
    /** Text-field matches (case-insensitive), plus full legal name */
    revealPhrases: ["elias chen", "elias"],
  },
  title: "Developer & builder",
  tagline:
    "Competitive programmer and creative.",
  bio: {
    flags: "🇨🇳 🇺🇸",
    headline: "USACO Platinum 2025–2026",
    tech:
      "Experience with PyTorch, Unreal Engine, and the MERN stack · C++ · Python · Java · JavaScript",
    beyond:
      "Interests include art, chess, film photography, violin, and swimming.",
  },
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#art", label: "Art" },
  { href: "#experience", label: "Experience" },
  { href: "#social", label: "Social" },
];

export const projects = [
  {
    title: "Mastermind Chess Camp",
    url: "https://mastermindchess.org",
    featured: true,
    description:
      "Marketing and registration site for a 5-day USCF-rated chess camp — daily themes, pricing tiers, early-bird countdown, and Jotform registration flows for campers and tournament players.",
    tags: ["React", "Responsive UI", "Registration", "Events"],
    year: "2026",
  },
];

export const experience = [
  {
    role: "Web Developer",
    org: "Mastermind Chess Camp",
    period: "2025 — Present",
    description:
      "Built and maintain mastermindchess.org — camp info, instructor bios, pricing, and registration links for the summer program.",
    link: "https://mastermindchess.org",
  },
  {
    role: "Competitive Programming",
    org: "USACO",
    period: "2025 — 2026",
    description:
      "Platinum division — algorithmic problem solving in C++ and Python.",
  },
  {
    role: "Student Developer",
    org: "Personal & school projects",
    period: "Ongoing",
    description:
      "Ship projects across the MERN stack, PyTorch experiments, and Unreal Engine — focusing on clear UX and solid engineering.",
  },
];

export const highlights = [
  {
    stat: "Platinum",
    label: "USACO 2025–26",
    detail: "Competitive programming at the highest division",
  },
  {
    stat: "4x Consecutive State Champions",
    label: "Member of Livingston High School Chess Team",
    detail: "Won 4 consecutive state championships and placed 2nd in the nation in 2024",
  },
  {
    stat: "MERN+",
    label: "Full stack",
    detail: "MongoDB, Express, React, Node — plus PyTorch & Unreal",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["C++", "Python", "Java", "JavaScript"],
  },
  {
    label: "Frameworks & tools",
    items: ["React", "Node.js", "PyTorch", "Unreal Engine", "MongoDB", "Express"],
  },
  {
    label: "Interests",
    items: ["Art", "Competitive Chess", "Swimming"],
  },
];

export const artPieces = [
  {
    title: "Digital studies",
    medium: "Digital · mixed media",
    description:
      "Explorations in color, composition, and character — part of how I balance engineering with visual creativity.",
    accent: "from-[#2a4a5c] to-[#143b34]",
  },
  {
    title: "Sketchbook work",
    medium: "Traditional · pencil & ink",
    description:
      "Figure drawing and scene studies — practice in line weight, shading, and storytelling through still images.",
    accent: "from-[#3d2e4a] to-[#1a2329]",
  },
  {
    title: "Personal projects",
    medium: "Ongoing",
    description:
      "Illustration and design pieces alongside CS — more work coming soon. Reach out if you’d like to collaborate.",
    accent: "from-[#2e4a3d] to-[#143b34]",
  },
];

export const socialLinks = [
  {
    platform: "GitHub",
    handle: "@abluefroggo",
    href: "https://github.com/abluefroggo",
    icon: "github",
  },
  {
    platform: "Instagram",
    handle: "@anotherbluefroggo",
    href: "https://www.instagram.com/anotherbluefroggo/",
    icon: "social",
    requiresReal: true,
  },

];

export const contact = {
  headline: "Let's build something.",
  body: "Interested in collaborating, art commissions, or a project? Connect via socials or explore my work below.",
  links: [
    {
      label: "Social links",
      href: "#social",
      external: false,
    },
    {
      label: "mastermindchess.org",
      href: "https://mastermindchess.org",
      external: true,
    },
  ],
};
