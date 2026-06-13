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
          "Dublin, Ireland | sahejmaharjan@gmail.com | sahejmaharjan.com.np | linkedin.com/in/sahej-maharjan-433a34105 | github.com/Sahejmaharjan1 | stackoverflow.com/users/13797926/sahej-maharjan",
          { after: 80 }
        ),

        sectionHeading("Summary"),
        paragraph(
          "AI engineer building multi-agent systems and RAG pipelines on GCP at Tactix AI. 5+ years across frontend leadership, full-stack delivery, and production AI. Co-author on DVx engineering blog, merged OSS contributor, Indigo Product Hunt #2 (maker)."
        ),

        sectionHeading("Work Experience"),
        ...jobBlock(
          "AI Engineer",
          "Tactix AI (via DVx Ventures) | Remote | Jan 2025 - Present",
          [
            "Building multi-agent AI platform on GCP Cloud Run with Google ADK; RAG pipelines over BigQuery with dbt models.",
            "Designing access control scoping every agent call to authenticated user permissions.",
            "Co-authoring public engineering blog series on Tactix systems.",
          ]
        ),
        ...jobBlock(
          "Lead Frontend Engineer / Full Stack Engineer",
          "Indigo AI | Remote | Oct 2024 - Sep 2025",
          [
            "Continued as lead after Shopswap acquisition; owned React/Next.js architecture and production releases.",
            "Maker on Indigo Product Hunt launch, ranked #2 Product of the Day.",
          ]
        ),
        ...jobBlock(
          "Lead Frontend Engineer / Full Stack Engineer",
          "Shopswap | Remote | Aug 2022 - Oct 2024",
          [
            "Led frontend for brand partnership toolkit; owned architecture, coding standards, and production delivery.",
            "Full-stack feature delivery on React/Next.js until acquisition by Indigo AI.",
          ]
        ),
        ...jobBlock(
          "Full Stack Engineer / Frontend Team Lead",
          "Preparie Inc. | Remote | Sep 2021 - Aug 2022",
          ["Led frontend team operations, scheduling, documentation, and delivery across the Preparie platform."]
        ),
        ...jobBlock(
          "React / React Native / Next.js Developer",
          "Bottle Technology | Nepal | Sep 2020 - Dec 2021",
          [
            "Frontend and mobile development; wrote 200+ JavaScript components; mentored a new frontend developer.",
          ]
        ),

        sectionHeading("Education"),
        paragraph(
          "Griffith College Dublin - MSc Big Data Management and Analytics | Sep 2025 - 2026"
        ),
        paragraph(
          "Deerwalk Institute of Technology - BSc Computer Science and Technology | 2017 - 2021",
          { after: 80 }
        ),

        sectionHeading("Skills"),
        paragraph(
          "AI/Backend: Google ADK, RAG, MCP, n8n, Python, FastAPI, Node.js, NestJS, multi-agent systems"
        ),
        paragraph(
          "Frontend: JavaScript, TypeScript, React, React Native, Next.js, Electron, Tailwind CSS, Redux, React Query"
        ),
        paragraph(
          "Data/DevOps: Supabase, PostgreSQL, MongoDB, dbt, Docker, Serverless Framework"
        ),
        paragraph(
          "Cloud: GCP (Cloud Run, BigQuery, Firestore), AWS (Lambda, ECS, S3, DynamoDB, Cognito, AppSync, Amplify, CloudFront)",
          { after: 80 }
        ),

        sectionHeading("Publications and Open Source"),
        paragraph(
          "Rebuilding our Access Control for AI Agents - DVx Blog, Jun 2026 (co-authored with Amit Maraj)"
        ),
        paragraph(
          "Automating Gap-Night Revenue and Pool Heater Ops with n8n - Personal blog, Jun 2026"
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
