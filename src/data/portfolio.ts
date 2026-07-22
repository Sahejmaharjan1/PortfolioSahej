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
  { value: "3", label: "co-authored posts", color: "amber" },
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
    value:
      '["Agent latency is not one number", "The agent doesn\'t hold the data", "Access Control for AI Agents — DVx Blog"]',
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
    period: "Jan 2026 → present",
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
    period: "Oct 2024 → Sep 2025",
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
    period: "Aug 2022 → Oct 2024",
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

export const blogPosts = [
  {
    href: "https://blog.dvx.ventures/we-stopped-treating-agent-latency-as-one-number",
    tag: "Engineering · DVx Blog",
    date: "Jul 14, 2026 · 9 min",
    publishedDate: "2026-07-14",
    title: "We stopped treating agent latency as one number.",
    description:
      "How we sped up Tactix Co-Pilot across the data path, tool layer, and reasoning loop — then added phase timing so we know which system owns the wait.",
    coAuthors: "Sahej Maharjan & Amit Maraj",
    coAuthorInitials: "AM",
  },
  {
    href: "https://blog.dvx.ventures/the-agent-doesnt-hold-the-data",
    tag: "Engineering · DVx Blog",
    date: "Jun 18, 2026 · 11 min",
    publishedDate: "2026-06-18",
    title: "The agent doesn't hold the data. It decides where to go get it.",
    description:
      "How we built a conversational analyst that fetches from gold marts over MCP — routing live across tools instead of holding the warehouse in context.",
    coAuthors: "Sahej Maharjan & Amit Maraj",
    coAuthorInitials: "AM",
  },
  {
    href: "https://blog.dvx.ventures/access-control-for-ai-agents",
    tag: "Engineering · DVx Blog",
    date: "Jun 03, 2026 · 12 min",
    publishedDate: "2026-06-03",
    title: "Rebuilding our Access Control for AI Agents",
    description:
      "The data model that lets an AI agent pull naturally from your data without ever seeing a store it shouldn't. Covers hybrid RBAC/ACL design, single-function Postgres auth, and why BigQuery should never hold a grant.",
    coAuthors: "Sahej Maharjan & Amit Maraj",
    coAuthorInitials: "AM",
  },
] as const;

export const blogPost = blogPosts.find(
  (post) => post.href.includes("access-control-for-ai-agents"),
)!;

export function getDvxPostsByDate() {
  return [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime(),
  );
}

export const skillGroups = [
  {
    title: "Core — could teach it",
    skills: [
      { icon: "📘", name: "TypeScript", category: "Language" },
      { icon: "▲", name: "Next.js / React", category: "Frontend / SSR" },
      { icon: "📱", name: "React Native", category: "Mobile" },
      { icon: "🖥️", name: "Electron", category: "Desktop" },
    ],
  },
  {
    title: "Proficient — used in production",
    skills: [
      { icon: "🤖", name: "Google ADK", category: "Agent orchestration" },
      { icon: "🐍", name: "FastAPI", category: "Backend / APIs" },
      { icon: "🔄", name: "n8n", category: "Workflow automation" },
      { icon: "🔌", name: "MCP tools", category: "Agent integrations" },
      { icon: "🪺", name: "Node.js / NestJS", category: "Backend / JS" },
      { icon: "🐘", name: "Postgres", category: "Database" },
      { icon: "🍃", name: "MongoDB", category: "Database" },
      { icon: "🟢", name: "Supabase", category: "Auth + database" },
      { icon: "📦", name: "Docker", category: "Containerisation" },
      { icon: "⚡", name: "AWS Lambda", category: "AWS" },
      { icon: "📦", name: "ECS", category: "AWS" },
      { icon: "🗄️", name: "S3", category: "AWS" },
      { icon: "📊", name: "DynamoDB", category: "AWS" },
      { icon: "🔐", name: "Cognito", category: "AWS" },
      { icon: "🌐", name: "Route 53", category: "AWS" },
      { icon: "🔑", name: "Secrets Manager", category: "AWS" },
      { icon: "📨", name: "SQS / SNS", category: "AWS" },
      { icon: "⏱️", name: "EventBridge", category: "AWS" },
      { icon: "📡", name: "AppSync", category: "AWS" },
      { icon: "🚀", name: "Amplify", category: "AWS" },
      { icon: "📈", name: "CloudWatch", category: "AWS" },
      { icon: "🛡️", name: "IAM", category: "AWS" },
      { icon: "☁️", name: "GCP Cloud Run", category: "GCP" },
      { icon: "📊", name: "BigQuery", category: "GCP" },
    ],
  },
  {
    title: "Familiar — learning or light use",
    skills: [
      { icon: "🐛", name: "Sentry", category: "Observability" },
      { icon: "🚩", name: "LaunchDarkly", category: "Feature flags" },
      { icon: "🏗️", name: "Terraform", category: "Infrastructure as code" },
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
