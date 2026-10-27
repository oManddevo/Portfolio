// All site copy lives here. Everything is taken from Tim's résumé — edit this file to update the site.

export const profile = {
  name: "Tim Stearns",
  firstName: "Tim",
  role: "Senior AI Full Stack Engineer",
  focus: "Healthcare & LLM-powered products",
  location: "Columbia, SC",
  email: "jamesstearns917@gmail.com",
  phone: "+1 (941) 417-0729",
  linkedin: "https://www.linkedin.com/in/james-s-760a10230/",
  github: "https://github.com/newsfriend",
  resumeFile: "Tim_Stearns_Resume.pdf", // drop the PDF into /public to show the résumé button
  years: 11,
};

export const stack = [
  "Python",
  "FastAPI",
  "TypeScript",
  "Node.js",
  "React",
  "Next.js",
  "PostgreSQL",
  "LangChain",
  "Claude",
  "Azure OpenAI",
  "HL7 FHIR",
  "AWS",
  "Kubernetes",
  "Terraform",
  "Claude Code",
];

export type Stat = { value: number; decimals?: number; suffix?: string; label: string };

export const stats: Stat[] = [
  { value: 11, suffix: "+", label: "years of professional software engineering" },
  { value: 20, suffix: "+", label: "hospitals on a HIPAA-compliant patient platform" },
  { value: 99.9, decimals: 1, suffix: "%", label: "uptime kept through on-call ownership" },
  { value: 25, suffix: "%", label: "less nurse documentation time with AI intake" },
  { value: 35, suffix: "%", label: "less manual handling with an AI triage agent" },
  { value: 40, suffix: "%", label: "faster delivery with AI-native development" },
];

export const principles = [
  {
    title: "Patient experience",
    body: "A HIPAA-compliant patient engagement platform used across 20+ hospitals, with passwordless WebAuthn login and an AI intake assistant.",
  },
  {
    title: "Secure by design",
    body: "PHI de-identification, SMART on FHIR OAuth and PCI-scoped tokenization, with HIPAA, SOC 2 and PCI DSS practices and audit logging.",
  },
  {
    title: "Reliable in production",
    body: "Architecture RFCs, 14 automated test suites and Docker/Terraform CI/CD, with on-call ownership that kept 99.9% uptime.",
  },
  {
    title: "Mentorship",
    body: "Mentored 6 engineers through 50+ code reviews and drove AI-native development with Claude Code and MCP across 3 pods.",
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
    place: "Remote",
    period: "Jan 2024 — Present",
    points: [
      "Tech lead for 4 multi-tenant identity and payment-tokenization services behind guest checkout — Python and Java microservices on AWS EKS with REST, gRPC and WebSocket APIs.",
      "Led the Checkout Tokenization Vault, moving card and identity data into PCI-scoped tokens across 5 storage tiers; 15 query optimizations lifted payment throughput by 30%.",
      "Built an AI refund and dispute triage agent with LangChain, Claude and a pgvector RAG index, plus a Next.js review console, cutting manual handling time by 35%.",
      "Drove AI-native development across 3 pods with Claude Code and MCP tooling (40% faster delivery) and mentored 6 engineers through 50+ code reviews.",
    ],
  },
  {
    company: "Trinity Health",
    title: "Senior Software Engineer",
    place: "Livonia, MI",
    period: "Jul 2019 — Dec 2023",
    points: [
      "Founding full-stack engineer on a 0-to-1 digital health team, building a HIPAA-compliant multi-tenant patient engagement platform used across 20+ hospitals.",
      "Built the Epic EHR integration layer on HL7 FHIR R4 and SMART on FHIR OAuth with passwordless WebAuthn patient login; tuned PostgreSQL sync jobs to cut PHI data latency by 30%.",
      "Launched an AI clinical intake assistant with Azure OpenAI GPT-4, LangChain and a PHI de-identification pipeline, reducing nurse documentation time by 25%.",
      "Authored architecture RFCs, built 14 automated test suites and Docker/Terraform CI/CD in GitHub Actions, and kept 99.9% uptime through on-call ownership.",
    ],
  },
  {
    company: "Amazon",
    title: "Software Engineer",
    place: "Seattle, WA",
    period: "Jun 2015 — Jun 2019",
    points: [
      "Shipped 25+ production features across e-commerce checkout, seller billing and identity verification for 5M+ active users — Java and Go services with React and Angular front ends.",
      "Built an event-driven seller identity verification pipeline on Lambda, SQS, Kinesis and DynamoDB, cutting onboarding from 3 days to under 24 hours.",
      "Integrated a SageMaker fraud-scoring model into checkout payment authorization, flagging high-risk orders in real time and reducing chargebacks by 18%.",
      "Optimized 12 slow SQL queries to cut peak-day database runtime by 25%, and built 6 shared React component libraries for real-time analytics dashboards.",
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
    title: "Epic EHR integration on HL7 FHIR",
    where: "Trinity Health · Senior Software Engineer",
    challenge: "A multi-tenant patient engagement platform, used across 20+ hospitals, had to exchange PHI with Epic securely.",
    built: "The Epic integration layer on HL7 FHIR R4 and SMART on FHIR OAuth, with passwordless WebAuthn patient login and tuned PostgreSQL sync jobs.",
    outcome: "PHI data latency cut by 30% on a HIPAA-compliant platform kept at 99.9% uptime.",
    metric: { value: "30%", label: "lower PHI latency" },
    tags: ["HL7 FHIR R4", "SMART on FHIR", "Epic", "WebAuthn", "PostgreSQL"],
  },
  {
    id: "02",
    title: "AI clinical intake assistant",
    where: "Trinity Health · Senior Software Engineer",
    challenge: "Patient-reported symptoms had to become structured clinical notes without exposing PHI.",
    built: "An intake assistant on Azure OpenAI GPT-4 and LangChain, fed by a PHI de-identification pipeline.",
    outcome: "Symptoms turned into structured notes automatically, reducing nurse documentation time by 25%.",
    metric: { value: "25%", label: "less documentation time" },
    tags: ["Azure OpenAI", "LangChain", "PHI de-identification", "Python"],
  },
  {
    id: "03",
    title: "Checkout Tokenization Vault",
    where: "Airbnb · Senior Software Engineer",
    challenge: "Card and identity data behind guest checkout had to move into PCI scope across 5 storage tiers.",
    built: "PCI-scoped tokens across PostgreSQL, DynamoDB and Redis, plus 15 query optimizations, on Python and Java microservices on AWS EKS.",
    outcome: "Payment throughput up 30%, with card and identity data held as PCI-scoped tokens.",
    metric: { value: "30%", label: "throughput gain" },
    tags: ["Python", "Java", "PostgreSQL", "DynamoDB", "Redis"],
  },
  {
    id: "04",
    title: "AI refund & dispute triage agent",
    where: "Airbnb · Senior Software Engineer",
    challenge: "Refund and dispute cases were handled manually against policies and booking history.",
    built: "A LangChain + Claude agent over a pgvector RAG index of policies and booking history, with a Next.js review console.",
    outcome: "Manual handling time cut by 35%.",
    metric: { value: "35%", label: "less manual handling" },
    tags: ["LangChain", "Claude", "pgvector", "RAG", "Next.js"],
  },
];

export const fit = [
  {
    need: "Full-stack product engineering",
    level: "Required",
    proof: "11+ years end to end — Python/FastAPI and TypeScript/Node.js services behind React/Next.js frontends.",
  },
  {
    need: "Modern backend framework",
    level: "Required",
    proof: "FastAPI, Django and Node.js/Express; Python and Java microservices with REST, gRPC and WebSocket APIs.",
  },
  {
    need: "AI development tools",
    level: "Required",
    proof: "Claude Code and MCP tooling daily; drove AI-native development across 3 pods (40% faster delivery).",
  },
  {
    need: "Relational databases",
    level: "Required",
    proof: "PostgreSQL sync jobs tuned to cut PHI latency 30%; 15 query optimizations lifted payment throughput 30%.",
  },
  {
    need: "Cloud environment",
    level: "Required",
    proof: "AWS (EKS, Lambda, SQS, Kinesis, DynamoDB) and Azure; Docker, Kubernetes, Terraform and GitHub Actions CI/CD.",
  },
  {
    need: "Collaborative, empowering approach",
    level: "Required",
    proof: "Mentored 6 engineers through 50+ code reviews; authored architecture RFCs.",
  },
  {
    need: "Sensitive data / regulated environments",
    level: "Nice to have",
    proof: "HIPAA PHI security and de-identification, SMART on FHIR, PCI-scoped tokenization and audit logging.",
  },
  {
    need: "AI product features",
    level: "Nice to have",
    proof: "An AI clinical intake assistant (25% less documentation time) and a RAG triage agent (35% less handling time).",
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "Java", "Go", "SQL", "C++", "Bash"] },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Angular", "Redux", "Tailwind CSS", "Responsive web UI", "Real-time dashboards", "HTML5", "CSS3"],
  },
  {
    group: "Backend",
    items: ["FastAPI", "Django", "Node.js", "Express", "REST & GraphQL APIs", "gRPC", "WebSockets", "Microservices", "Event-driven architecture"],
  },
  { group: "Data", items: ["PostgreSQL", "DynamoDB", "Redis", "pgvector", "Query optimization", "Kinesis", "SQS"] },
  {
    group: "Cloud & DevOps",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "CI/CD", "Prometheus", "Grafana", "Datadog", "Git"],
  },
  {
    group: "AI",
    items: ["LLM integration", "RAG", "AI agents", "MCP", "LangChain", "Claude", "Claude Code", "Azure OpenAI", "Prompt engineering", "Vector DBs", "AWS SageMaker", "PyTorch"],
  },
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
