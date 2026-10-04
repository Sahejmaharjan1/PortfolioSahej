import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
} from "docx";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, "../public/sahej-cv-ats.docx");

function sectionHeading(text) {
  return new Paragraph({
    text,
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 120, after: 60 },
  });
}

function paragraph(text, spacing = { after: 40 }) {
  return new Paragraph({ text, spacing });
}

function bullet(text) {
  return new Paragraph({
    text,
    bullet: { level: 0 },
    spacing: { after: 20 },
  });
}

function jobBlock(title, meta, bullets) {
  return [
    new Paragraph({
      children: [
        new TextRun({ text: title, bold: true }),
        new TextRun({ text: ` | ${meta}` }),
      ],
      spacing: { after: 20 },
    }),
    ...bullets.map(bullet),
    new Paragraph({ spacing: { after: 60 } }),
  ];
}

const doc = new Document({
  sections: [
    {
      properties: {
        page: {
          margin: { top: 504, right: 648, bottom: 504, left: 648 },
        },
      },
      children: [
        new Paragraph({
          children: [
            new TextRun({ text: "Sahej Maharjan", bold: true, size: 30 }),
            new TextRun({ text: "  |  AI Engineer | Full-Stack Engineer", bold: true, size: 22 }),
          ],
          spacing: { after: 40 },
        }),
        paragraph(
          "Dublin, Ireland | +353 89 949 0837 | sahejmaharjan@gmail.com | sahejmaharjan.com.np | linkedin.com/in/sahej-maharjan-433a34105 | github.com/Sahejmaharjan1 | stackoverflow.com/users/13797926/sahej-maharjan",
          { after: 80 }
        ),

        sectionHeading("Summary"),
        paragraph(
          "Full-stack engineer with 5+ years shipping production React/Next.js and TypeScript front ends and Node.js/AWS back ends. Led front-end architecture and production releases through one company acquisition, and now builds multi-agent AI systems and RAG pipelines on GCP. Shipped a #2 Product Hunt launch as a maker and merged contributions into an open-source codebase. Holds an MSc in Big Data Management and Analytics (First Class Honours). Co-author of 3 engineering posts on the DVx Ventures blog."
        ),

        sectionHeading("Work Experience"),
        ...jobBlock(
          "AI Engineer",
          "Tactix AI (via DVx Ventures) | Remote | Jan 2026 - Present",
          [
            "Building a multi-agent AI platform for restaurant operators, deploying containerised agents to GCP Cloud Run with Google ADK as the orchestration layer.",
            "Architecting RAG pipelines over BigQuery on dbt-transformed data models that feed agent tool calls.",
            "Designed a hybrid RBAC/ACL authorization system enforced through a single Postgres auth function, scoping every agent call to the authenticated user's permissions.",
          ]
        ),
        ...jobBlock(
          "Lead Front-End / Full-Stack Engineer",
          "Indigo AI | Remote | Oct 2024 - Sep 2025",
          [
            "Continued as lead front-end engineer after Shopswap's acquisition by Indigo AI; owned architecture decisions, full-stack feature delivery, and production releases for live React/Next.js applications.",
            "Shipped Indigo as a maker on Product Hunt, reaching #2 Product of the Day on launch day.",
            "Partnered with design and backend engineers to scope, unblock, and ship cross-functional features end to end.",
          ]
        ),
        ...jobBlock(
          "Lead Front-End / Full-Stack Engineer",
          "Shopswap | Remote | Aug 2022 - Oct 2024",
          [
            "Led front-end engineering for a brand-partnership, giveaway, and discount-sharing toolkit; set frontend architecture and coding standards.",
            "Delivered production features across React and Next.js applications through to acquisition by Indigo AI.",
          ]
        ),
        ...jobBlock(
          "Full-Stack Engineer",
          "Preparie Inc. | Canada, Remote | Sep 2021 - Aug 2022",
          [
            "Built full-stack features across the Preparie platform using React, Next.js, and Node.js.",
            "Served as front-end team lead, managing scheduling, coverage, documentation, and delivery.",
          ]
        ),
        ...jobBlock(
          "Frontend and Mobile Software Engineer",
          "Bottle Technology | Jhamsikhel, Nepal | Sep 2020 - Dec 2021",
          [
            "Built 200+ JavaScript components for client web and mobile projects; onboarded and mentored a junior front-end developer.",
          ]
        ),

        sectionHeading("Education"),
        paragraph(
          "Griffith College Dublin - MSc, Big Data Management and Analytics, First Class Honours | Dublin, Ireland | 2025 - 2026"
        ),
        paragraph(
          "Deerwalk Institute of Technology - BSc, Computer Science and Technology | Kathmandu, Nepal | 2017 - 2021",
          { after: 80 }
        ),

        sectionHeading("Skills"),
        paragraph(
          "Frontend: TypeScript, JavaScript, React, Next.js, React Native, Vite, Electron"
        ),
        paragraph(
          "Backend and APIs: Node.js, NestJS, Python (FastAPI), REST, GraphQL (AppSync), MCP tools"
        ),
        paragraph(
          "Cloud and DevOps: AWS (Lambda, ECS, S3, DynamoDB, Cognito, SQS/SNS, EventBridge, AppSync, Amplify, CloudWatch, IAM, Route 53, Secrets Manager), GCP (Cloud Run, BigQuery), Docker, Terraform, CI/CD"
        ),
        paragraph(
          "Databases and Data: SQL, PostgreSQL, MySQL, SQL Server, MongoDB, DynamoDB, Supabase (RLS), BigQuery, dbt"
        ),
        paragraph(
          "AI and Automation: LLMs, agentic AI, RAG pipelines, multi-agent systems, Google ADK, access control (RBAC/ACL), n8n"
        ),
        paragraph(
          "Tooling: Git, GitHub, Zod, Sentry, LaunchDarkly",
          { after: 80 }
        ),

        sectionHeading("Publications and Open Source"),
        paragraph(
          "We stopped treating agent latency as one number - DVx Blog, Jul 2026 (co-authored with Amit Maraj) - blog.dvx.ventures/we-stopped-treating-agent-latency-as-one-number"
        ),
        paragraph(
          "The agent doesn't hold the data. It decides where to go get it. - DVx Blog, Jun 2026 (co-authored with Amit Maraj) - blog.dvx.ventures/the-agent-doesnt-hold-the-data"
        ),
        paragraph(
          "Automating Gap-Night Revenue and Pool Heater Ops with n8n - Personal blog, Jun 2026"
        ),
        paragraph(
          "Rebuilding our Access Control for AI Agents - DVx Blog, Jun 2026 (co-authored with Amit Maraj) - blog.dvx.ventures/access-control-for-ai-agents"
        ),
        paragraph(
          "Company logo upload for job creation form - codu-code/codu PR #1283 merged, Oct 2025 (Next.js, React, AWS S3, Zod, TypeScript)"
        ),
      ],
    },
  ],
});

const buffer = await Packer.toBuffer(doc);
fs.writeFileSync(outputPath, buffer);
console.log(`Wrote ${outputPath}`);
