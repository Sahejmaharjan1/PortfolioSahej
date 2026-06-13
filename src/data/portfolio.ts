export const siteConfig = {
  name: "Sahej Maharjan",
  title: "Sahej Maharjan — AI Engineer",
  description:
    "AI engineer building production-grade multi-agent systems and RAG pipelines on GCP. Based in Dublin, Ireland.",
  url: "https://sahejmaharjan.com.np",
  cvUrl: "/sahej-cv.html",
  email: "sahejmaharjan@gmail.com",
  avatar: "/sahej-avatar.jpg",
  location: "Dublin, Ireland",
  company: "Tactix AI · DVx Ventures",
  techStack: "Python · React · GCP",
} as const;

export const navLinks = [
  { href: "#work", label: "work" },
  { href: "#writing", label: "writing" },
  { href: "/blog", label: "blog" },
  { href: "#opensource", label: "oss" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
] as const;

export const stats = [
  { value: "5+", label: "years eng", color: "accent3" },
  { value: "3", label: "AI systems live", color: "accent2" },
  { value: "#2", label: "Product Hunt", color: "amber" },
  { value: "∞", label: "agent calls/day", color: "green" },
  { value: "1", label: "co-authored posts", color: "amber" },
  { value: "1", label: "merged OSS PR", color: "green" },
] as const;

export const terminalProfile = [
  { key: "name", value: '"Sahej Maharjan"' },
  { key: "location", value: '"Dublin, Ireland 🇮🇪"' },
  { key: "company", value: '"Tactix AI (via DVx Ventures)"' },
  {
    key: "focus",
    value: '["multi-agent systems", "RAG", "data engineering"]',
  },
  {
    key: "infra",
    value:
      '["AWS Lambda", "ECS", "S3", "DynamoDB", "GCP Cloud Run", "BigQuery", "Supabase"]',
  },
  {
    key: "frameworks",
    value:
      '["Google ADK", "FastAPI", "React", "Next.js", "React Native", "NestJS", "Electron", "MCP", "n8n"]',
  },
  {
    key: "agent_tooling",
    value: '["MCP tools", "Cursor Skills", "n8n"]',
  },
  {
    key: "published",
    value: '["Access Control for AI Agents — DVx Blog"]',
  },
  {
    key: "opensource",
    value: '["Codú #1283 — company logo upload (merged)"]',
  },
  {
    key: "launches",
    value: '["Indigo — #2 Product of the Day on Product Hunt (maker)"]',
  },
  { key: "status", value: '"building · shipping · writing"' },
] as const;

export const workExperiences = [
  {
    title: "AI Engineer",
    company: "Tactix AI · DVx Ventures",
    period: "2025 → present",
    location: "Remote (Los Angeles, CA)",
    description:
      "Building a multi-agent AI platform for restaurant operators. Architecting RAG pipelines over BigQuery with dbt-transformed data models. Designing access control systems that scope every agent call to what the authenticated user is allowed to see. Deploying containerised agents to GCP Cloud Run with Google ADK as the orchestration layer. Co-authoring a public engineering blog series on the systems behind Tactix.",
    tags: [
      "Google ADK",
      "FastAPI",
      "GCP Cloud Run",
      "BigQuery",
      "dbt",
      "RAG",
      "Multi-agent",
      "Supabase RLS",
      "React",
    ],
    highlighted: true,
  },
  {
    title: "Lead Front-end Engineer / Full Stack Engineer",
    company: "Indigo AI",
    companyUrl:
      "https://www.linkedin.com/company/getindigoai/posts/?feedView=all",
    period: "Oct 29, 2024 → Sep 2025",
    location: "Remote",
    description:
      "Continued as lead front-end engineer after Shopswap was acquired by Indigo AI. Owned full-stack feature delivery, architecture decisions, and production releases for React and Next.js applications serving live users. Maker on Indigo's Product Hunt launch — ranked #2 Product of the Day on launch day.",
    tags: [
      "React",
      "Next.js",
      "React Native",
      "AWS",
      "Node.js",
      "Full Stack",
      "Product Hunt",
    ],
    highlighted: false,
    productHunt: {
      rank: "#2",
      title: "Indigo on Product Hunt",
      subtitle: "#2 Product of the Day · launch day",
      description:
        "Shipped Indigo as a maker while leading front-end engineering at Indigo AI. Hit #2 on Product Hunt on launch day — one of the strongest debuts in the company's history.",
      url: "https://www.producthunt.com/products/indigo",
      role: "Maker",
    },
  },
  {
    title: "Lead Front-end Engineer / Full Stack Engineer",
    company: "Shopswap",
    companyUrl: "https://www.linkedin.com/company/shopswap/about/",
    period: "Aug 2022 → Oct 29, 2024",
    location: "Remote",
    description:
      "Led front-end engineering for Shopswap, a toolkit for brand partnerships, giveaways, and discount sharing. Owned full-stack feature delivery, architecture decisions, and production releases for React and Next.js applications until Shopswap was acquired by Indigo AI.",
    tags: ["React", "Next.js", "React Native", "AWS", "Node.js", "Full Stack"],
    highlighted: false,
  },
  {
    title: "Full Stack Engineer",
    company: "Preparie Inc.",
    companyUrl: "https://www.eatpreparie.com/",
    period: "Sep 2021 → Aug 2022",
    location: "Canada · Remote",
    description:
      "Worked as front-end team lead. Oversaw day-to-day operations of the frontend development team — scheduling, coverage, documentation, and delivery across the Preparie platform.",
    tags: ["React", "Next.js", "Team Lead", "Node.js"],
    highlighted: false,
  },
  {
    title: "React / React Native / Next.js Developer",
    company: "Bottle Technology",
    period: "Sep 2020 → Dec 2021",
    location: "Jhamsikhel, Nepal",
    description:
      "Performed front-end and mobile development for all client projects. Wrote 200+ JavaScript components for client websites and mobile apps. On-boarded and mentored a new front-end developer through regular coaching sessions and work reviews.",
    tags: ["React", "React Native", "Next.js", "JavaScript", "Mobile"],
    highlighted: false,
  },
] as const;

export const openSourceContribution = {
  repo: {
    name: "codu-code/codu",
    url: "https://github.com/codu-code/codu",
    siteUrl: "https://codu.co",
    description:
      "Codú's open-source codebase — a community platform where web developers learn, share, and collaborate.",
    stars: 154,
    forks: 169,
  },
  pr: {
    number: 1283,
    url: "https://github.com/codu-code/codu/pull/1283",
    title: "Company logo upload for job creation form",
    date: "Oct 18, 2025",
    issue: "#1148",
    status: "merged" as const,
    label: "Hacktoberfest",
    description:
      "Shipped end-to-end company logo uploads on the job creation flow — from client-side validation through S3 storage to schema-backed form submission.",
    highlights: [
      "File upload with 1MB size validation",
      "S3 signed URL upload flow",
      "Zod schema extension for companyLogo field",
      "Sentry error logging and toast feedback",
    ],
    tags: ["Next.js", "React", "AWS S3", "Zod", "Sentry", "TypeScript"],
    reviewer: "NiallJoeMaher",
  },
} as const;

export const blogPost = {
  href: "https://blog.dvx.ventures/access-control-for-ai-agents",
  tag: "Engineering · DVx Blog",
  date: "Jun 03, 2026 · 12 min",
  title: "Rebuilding our Access Control for AI Agents",
  description:
    "The data model that lets an AI agent pull naturally from your data without ever seeing a store it shouldn't. Covers hybrid RBAC/ACL design, single-function Postgres auth, and why BigQuery should never hold a grant.",
  coAuthors: "Sahej Maharjan & Amit Maraj",
  coAuthorInitials: "AM",
} as const;

export const skillGroups = [
  {
    title: "AI & Backend",
    skills: [
      { icon: "🤖", name: "Google ADK", category: "Agent orchestration" },
      { icon: "🔗", name: "RAG pipelines", category: "AI engineering" },
      { icon: "🔌", name: "MCP tools", category: "Agent integrations" },
      { icon: "⚡", name: "Cursor Skills", category: "Agent workflows" },
      { icon: "🔄", name: "n8n", category: "Workflow automation" },
      { icon: "🐍", name: "FastAPI", category: "Backend / APIs" },
      { icon: "🪺", name: "NestJS", category: "Backend / APIs" },
      { icon: "🌐", name: "Node.js", category: "Backend / JS" },
    ],
  },
  {
    title: "Frontend & Mobile",
    skills: [
      { icon: "⚛️", name: "React", category: "Frontend" },
      { icon: "▲", name: "Next.js", category: "Frontend / SSR" },
      { icon: "📱", name: "React Native", category: "Mobile" },
      { icon: "🖥️", name: "Electron", category: "Desktop" },
    ],
  },
  {
    title: "Data & DevOps",
    skills: [
      { icon: "🍃", name: "MongoDB", category: "Database" },
      { icon: "🐘", name: "Supabase / Postgres", category: "Auth + database" },
      { icon: "🔧", name: "dbt", category: "Data transformation" },
      { icon: "📦", name: "Docker", category: "Containerisation" },
    ],
  },
] as const;

export const cloudPlatforms = [
  {
    name: "AWS",
    services: [
      "Lambda",
      "ECS",
      "Fargate",
      "S3",
      "DynamoDB",
      "CloudFront",
      "Route 53",
      "IAM",
      "Cognito",
      "Secrets Manager",
      "SQS",
      "SNS",
      "EventBridge",
      "AppSync",
      "Amplify",
      "CloudWatch",
      "Elastic Beanstalk",
    ],
  },
  {
    name: "GCP",
    services: [
      "Cloud Run",
      "Cloud Storage",
      "Firestore",
      "Secret Manager",
      "Artifact Registry",
      "BigQuery",
    ],
  },
] as const;

export const socialLinks = [
  {
    href: "mailto:sahejmaharjan@gmail.com",
    label: "sahejmaharjan@gmail.com",
    icon: "mail" as const,
  },
  {
    href: "https://github.com/Sahejmaharjan1",
    label: "GitHub",
    icon: "github" as const,
  },
  {
    href: "https://www.linkedin.com/in/sahej-maharjan-433a34105/",
    label: "LinkedIn",
    icon: "linkedin" as const,
  },
  {
    href: "https://blog.dvx.ventures/author/sahej-maharjan-ed67",
    label: "DVx Blog",
    icon: "pencil" as const,
  },
  {
    href: "https://stackoverflow.com/users/13797926/sahej-maharjan",
    label: "Stack Overflow",
    icon: "stackoverflow" as const,
  },
] as const;
