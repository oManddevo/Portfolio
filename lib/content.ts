// All site copy lives here. Everything is taken from James's résumé — edit this file to update the site.

export const profile = {
  name: "James Stearns",
  firstName: "James",
  role: "Senior Software Engineer",
  focus: "Health tech & full-stack systems",
  location: "Columbia, SC",
  email: "jamesstearns917@gmail.com",
  linkedin: "https://www.linkedin.com/in/james-s-760a10230/",
  resumeFile: "James_Stearns_Resume.pdf", // drop the PDF into /public to show the résumé button
  years: 12,
};

export const stack = [
  "Python",
  "Flask",
  "Django",
  "React",
  "NextJS",
  "TypeScript",
  "PostgreSQL",
  "AWS Lambda",
  "API Gateway",
  "Amazon ECS",
  "Docker",
  "GitHub Actions",
  "Claude",
  "Cursor",
];

export type Stat = { value: number; decimals?: number; suffix?: string; label: string };

export const stats: Stat[] = [
  { value: 12, label: "years of professional software engineering" },
  { value: 99.9, decimals: 1, suffix: "%", label: "uptime baseline kept on healthcare systems" },
  { value: 95, suffix: "%", label: "test coverage across PHI data-routing paths" },
  { value: 40, suffix: "%", label: "faster feature delivery with an AI-forward workflow" },
  { value: 30, suffix: "%", label: "more multi-tenant transaction throughput" },
  { value: 6, label: "engineers mentored through pairing and code review" },
];

export const principles = [
  {
    title: "Patient experience",
    body: "Unified patient portals with modern online scheduling, paperless check-in and automated reminders.",
  },
  {
    title: "Secure by design",
    body: "High-stakes transactions under strict compliance mandates, with 95% test coverage around sensitive PHI.",
  },
  {
    title: "Reliable in production",
    body: "Full ownership of deployments, observability and incident management to preserve a 99.9% uptime baseline.",
  },
  {
    title: "Mentorship",
    body: "Coaching engineers through pairing sessions and rigorous code reviews, and authoring architectural guidelines.",
  },
];

export type Role = {
  company: string;
  title: string;
  place: string;
  period: string;
  points: string[];
};

export const experience: Role[] = [
  {
    company: "Airbnb",
    title: "Senior Software Engineer",
    place: "New York, NY",
    period: "Jan 2024 — Present",
    points: [
      "Hands-on technical lead for 4 multi-tenant platform services, end to end across Python backends and React/NextJS frontends.",
      "Database optimizations and complex SQL that lifted multi-tenant transaction throughput by 30%.",
      "Led an AI-forward workflow with Claude and Cursor across 3 engineering pods, delivering features 40% faster.",
      "Mentored 6 junior and mid-level engineers and authored the team’s architectural guidelines.",
    ],
  },
  {
    company: "HealthTap",
    title: "Applied AI Engineer",
    place: "San Francisco, CA",
    period: "Jul 2021 — Dec 2023",
    points: [
      "Built secure integration layers into legacy third-party systems, adding online scheduling, paperless check-in and automated reminders.",
      "Scaled serverless workflows on AWS Lambda, API Gateway, S3 and ECS to orchestrate 12 parallel autonomous agent workflows.",
      "Integrated 8 third-party data sources and payment providers under strict compliance mandates.",
      "Owned deployments, observability and incidents — a 99.9% uptime baseline and 95% test coverage around sensitive PHI.",
    ],
  },
  {
    company: "HealthTap",
    title: "Software Engineer",
    place: "San Francisco, CA",
    period: "Jul 2019 — Jun 2021",
    points: [
      "Decomposed 2 legacy monoliths into modular Python, Flask and TypeScript microservices.",
      "Profiled PostgreSQL and MySQL data access to remove integration blocks, improving endpoint throughput by 30%.",
      "Shipped consumer-facing screens and 5 internal React dashboards with real-time sync and accessibility compliance.",
    ],
  },
  {
    company: "Amazon",
    title: "Full Stack Engineer",
    place: "Seattle, WA",
    period: "Aug 2017 — Jun 2019",
    points: [
      "Shipped 25+ high-traffic features across billing, authentication and real-time transaction processing.",
      "Built event-driven processing and REST integrations in Java and Go; maintained 3 CI/CD pipelines.",
    ],
  },
  {
    company: "Amazon",
    title: "Backend Developer",
    place: "Seattle, WA",
    period: "Jun 2015 — Jun 2017",
    points: [
      "Built Java/Spring microservices and partner integrations compatible across 4 legacy networks.",
      "Index tuning, schema optimization and caching cut query bottlenecks by 30% on 15 production Linux servers.",
    ],
  },
];

export type CaseStudy = {
  id: string;
  title: string;
  where: string;
  challenge: string;
  built: string;
  outcome: string;
  metric: { value: string; label: string };
  tags: string[];
};

export const work: CaseStudy[] = [
  {
    id: "01",
    title: "Patient access on top of legacy systems",
    where: "HealthTap · Applied AI Engineer",
    challenge: "Key workflows ran on dated legacy third-party frameworks.",
    built: "Secure custom integration layers that plug into those frameworks, plus 8 third-party data-source and payment integrations.",
    outcome: "Modern online scheduling, paperless check-in and automated reminders, under strict compliance mandates.",
    metric: { value: "8", label: "integrations" },
    tags: ["Python", "Integrations", "PHI", "Payments"],
  },
  {
    id: "02",
    title: "Serverless agent orchestration on AWS",
    where: "HealthTap · Applied AI Engineer",
    challenge: "AI-powered feature sets built on secure automation servers and autonomous agent workflows.",
    built: "Production-grade serverless workflows on Lambda, API Gateway, S3 and ECS, with distributed monitoring.",
    outcome: "12 parallel autonomous agent workflows orchestrated, with a 99.9% uptime baseline preserved.",
    metric: { value: "12", label: "parallel agent workflows" },
    tags: ["AWS", "AI workflows", "Observability"],
  },
  {
    id: "03",
    title: "From monoliths to services",
    where: "HealthTap · Software Engineer",
    challenge: "A data-heavy healthcare application network built on 2 high-complexity legacy monoliths.",
    built: "Decoupled, modular Python, Flask and TypeScript microservices, profiled data access, and 5 internal React dashboards.",
    outcome: "Endpoint throughput up 30%, with every production incident tracked and tests running continuously in Git workflows.",
    metric: { value: "30%", label: "throughput gain" },
    tags: ["Flask", "TypeScript", "React", "PostgreSQL"],
  },
  {
    id: "04",
    title: "Multi-tenant platform, AI-forward team",
    where: "Airbnb · Senior Software Engineer",
    challenge: "A portfolio of 4 multi-tenant platform services, owned end to end as hands-on technical lead.",
    built: "Database optimizations, complex SQL and schema modeling across 5 storage tiers, plus a daily Claude + Cursor workflow across 3 pods.",
    outcome: "Transaction throughput up 30% and feature delivery 40% faster, with 6 engineers mentored.",
    metric: { value: "40%", label: "faster delivery" },
    tags: ["Python", "React / NextJS", "SQL", "Claude", "Cursor"],
  },
];

export const fit = [
  {
    need: "Full-stack product engineering",
    level: "Required",
    proof: "12 years end to end — Python/Flask services behind React/NextJS frontends.",
  },
  {
    need: "Modern backend framework",
    level: "Required",
    proof: "Deep Python; Flask and Django services; monoliths decomposed into Flask microservices.",
  },
  {
    need: "AI development tools",
    level: "Required",
    proof: "Claude and Cursor daily; led an AI-forward workflow across 3 pods (40% faster delivery).",
  },
  {
    need: "Relational databases",
    level: "Required",
    proof: "PostgreSQL schema modeling, stored procedures and query tuning (+30% throughput).",
  },
  {
    need: "Cloud environment",
    level: "Required",
    proof: "AWS Lambda, API Gateway, S3 and ECS in production; CI/CD with GitHub Actions.",
  },
  {
    need: "Collaborative, empowering approach",
    level: "Required",
    proof: "Mentored 6 engineers through pairing and reviews; authored architectural guidelines.",
  },
  {
    need: "Sensitive data / regulated environments",
    level: "Nice to have",
    proof: "PHI and payment data under strict compliance mandates, with 95% coverage on routing paths.",
  },
  {
    need: "AI product features",
    level: "Nice to have",
    proof: "AI-powered feature sets and 12 parallel autonomous agent workflows at HealthTap.",
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "SQL", "TypeScript", "JavaScript", "Go", "Java", "C#", "Bash"] },
  { group: "Frontend", items: ["React", "NextJS", "Responsive UI", "Accessibility", "HTML5", "CSS3"] },
  { group: "Backend", items: ["Flask", "Django", "Node.js", "REST APIs", "Microservices", "API contracts"] },
  { group: "Data", items: ["PostgreSQL", "MySQL", "Schema modeling", "Stored procedures", "Query tuning"] },
  { group: "Cloud & DevOps", items: ["AWS", "Docker", "Linux", "Git", "GitHub Actions", "CI/CD"] },
  { group: "AI", items: ["Claude", "Cursor", "ChatGPT", "Prompt engineering", "Agent workflows"] },
];

export const education = [
  {
    degree: "M.S. Computer Science",
    detail: "Artificial Intelligence & Software Engineering",
    school: "University of Southern California",
    period: "2013 — 2015",
  },
  {
    degree: "B.S. Computer Science",
    detail: "Artificial Intelligence & Full-Stack Development",
    school: "University of South Carolina",
    period: "2009 — 2013",
  },
];
