import { Brain, Network, Search, ShieldCheck, Pill } from "lucide-react";

export const modules = [
  // ==========================
  // AI MANAGEMENT
  // ==========================
  {
    id: 1,

    slug: "ai-management",

    title: "AI Management System",

    icon: Brain,

    color: "from-violet-500 to-blue-500",

    category: "Artificial Intelligence",

    shortDescription:
      "Manage AI governance, risk assessment and compliance aligned with ISO/IEC 42001.",

    heroDescription:
      "Build trustworthy AI by assessing governance, risk, compliance and lifecycle management using internationally recognized standards.",

    banner: "/images/modules/ai-management.webp",

    duration: "30-45 Minutes",

    assessmentType: "Self Assessment",

    controls: 120,

    standards: 1,

    frameworks: ["ISO/IEC 42001"],

    features: [
      "AI Governance",
      "Risk Assessment",
      "Policy Management",
      "Compliance Monitoring",
    ],

    workflow: [
      "Select Assessment",
      "Answer Security Controls",
      "Generate Risk Score",
      "Export Compliance Report",
    ],

    benefits: [
      "Improve AI governance",
      "Reduce operational risks",
      "Prepare for certification",
      "Continuous compliance monitoring",
    ],

    reports: [
      "Risk Report",
      "Gap Analysis",
      "Executive Summary",
      "Compliance Report",
    ],

    faqs: [
      {
        question: "What is ISO/IEC 42001?",
        answer:
          "ISO/IEC 42001 is the international management system standard for Artificial Intelligence governance.",
      },
      {
        question: "Who should use this module?",
        answer: "Organizations developing, deploying or managing AI systems.",
      },
    ],
  },

  // ==========================
  // ARCHITECTURE FRAMEWORK
  // ==========================
  {
    id: 2,

    slug: "architecture-framework",

    title: "Architecture Framework",

    icon: Network,

    color: "from-cyan-500 to-blue-500",

    category: "Enterprise Architecture",

    shortDescription:
      "Evaluate enterprise architecture, IT governance and secure technology practices using globally recognized frameworks.",

    heroDescription:
      "Assess enterprise architecture maturity, technology governance and secure design principles to align business objectives with cybersecurity best practices.",

    banner: "/images/modules/architecture.webp",

    duration: "45-60 Minutes",

    assessmentType: "Self Assessment",

    controls: 180,

    standards: 3,

    frameworks: ["COBIT", "TOGAF", "OWASP Top 10"],

    features: [
      "Enterprise Architecture",
      "IT Governance",
      "Technology Risk Assessment",
      "Secure Architecture Review",
    ],

    workflow: [
      "Select Framework",
      "Evaluate Architecture",
      "Review Maturity",
      "Generate Report",
    ],

    benefits: [
      "Improve IT governance",
      "Reduce architecture risks",
      "Support digital transformation",
      "Strengthen secure design",
    ],

    reports: [
      "Architecture Report",
      "Risk Analysis",
      "Gap Analysis",
      "Executive Summary",
    ],

    faqs: [
      {
        question: "Which frameworks are supported?",
        answer: "COBIT, TOGAF and OWASP Top 10 are supported.",
      },
      {
        question: "Does it measure architecture maturity?",
        answer:
          "Yes. The assessment provides maturity scoring and recommendations.",
      },
    ],
  },

  // ==========================
  // FORENSIC ANALYSIS
  // ==========================
  {
    id: 3,

    slug: "forensic-analysis",

    title: "Forensic Analysis",

    icon: Search,

    color: "from-amber-500 to-orange-500",

    category: "Digital Forensics",

    shortDescription:
      "Assess digital forensic readiness, evidence handling and incident investigation capabilities.",

    heroDescription:
      "Strengthen your organization's forensic readiness through structured assessments aligned with international investigation standards.",

    banner: "/images/modules/forensics.webp",

    duration: "40-60 Minutes",

    assessmentType: "Self Assessment",

    controls: 140,

    standards: 4,

    frameworks: ["ISO 27037", "ISO 27041", "ISO 27042", "ISO 27043"],

    features: [
      "Evidence Collection",
      "Incident Investigation",
      "Chain of Custody",
      "Forensic Readiness",
    ],

    workflow: [
      "Define Investigation Scope",
      "Assess Evidence Handling",
      "Review Investigation Process",
      "Generate Readiness Report",
    ],

    benefits: [
      "Improve incident response",
      "Maintain evidence integrity",
      "Support legal investigations",
      "Increase forensic readiness",
    ],

    reports: [
      "Investigation Report",
      "Readiness Score",
      "Evidence Checklist",
      "Recommendations",
    ],

    faqs: [
      {
        question: "Is this module for incident response teams?",
        answer:
          "Yes. It evaluates forensic readiness and investigation capability.",
      },
      {
        question: "Does it support ISO standards?",
        answer: "Yes. It follows ISO 27037, 27041, 27042 and 27043.",
      },
    ],
  },

  // ==========================
  // GRC
  // ==========================
  {
    id: 4,

    slug: "governance-risk-compliance",

    title: "Governance, Risk & Compliance",

    icon: ShieldCheck,

    color: "from-blue-600 to-indigo-600",

    category: "Cybersecurity Governance",

    shortDescription:
      "Assess governance, cybersecurity risks and regulatory compliance using international security frameworks.",

    heroDescription:
      "Evaluate organizational governance, risk posture and compliance maturity through a unified enterprise assessment platform.",

    banner: "/images/modules/grc.webp",

    duration: "60-90 Minutes",

    assessmentType: "Self Assessment",

    controls: 350,

    standards: 8,

    frameworks: [
      "ISO 27001",
      "NIST CSF",
      "PCI DSS v4.0",
      "GDPR",
      "CSA CCM",
      "CIS Controls",
      "CMMC",
      "Bangladesh Bank ICT Guidelines",
    ],

    features: [
      "Risk Assessment",
      "Gap Analysis",
      "Compliance Monitoring",
      "Audit Readiness",
    ],

    workflow: [
      "Choose Framework",
      "Complete Assessment",
      "Review Risk Score",
      "Generate Compliance Report",
    ],

    benefits: [
      "Reduce compliance gaps",
      "Improve security posture",
      "Prepare for external audits",
      "Centralize governance",
    ],

    reports: [
      "Compliance Report",
      "Executive Dashboard",
      "Risk Report",
      "Gap Analysis",
    ],

    faqs: [
      {
        question: "Which compliance standards are supported?",
        answer:
          "ISO 27001, NIST CSF, PCI DSS, GDPR, CSA CCM, CIS Controls, CMMC and Bangladesh Bank ICT Guidelines.",
      },
      {
        question: "Can this help with audit preparation?",
        answer:
          "Yes. The module identifies compliance gaps and generates audit-ready reports.",
      },
    ],
  },

  // ==========================
  // PHARMACEUTICAL
  // ==========================
  {
    id: 5,

    slug: "pharmaceutical",

    title: "Pharmaceutical Compliance",

    icon: Pill,

    color: "from-emerald-500 to-green-500",

    category: "Healthcare",

    shortDescription:
      "Assess pharmaceutical cybersecurity and regulatory compliance requirements across critical business operations.",

    heroDescription:
      "Support pharmaceutical organizations with security assessments, regulatory compliance and governance aligned with FDA requirements.",

    banner: "/images/modules/pharmaceutical.webp",

    duration: "45-60 Minutes",

    assessmentType: "Self Assessment",

    controls: 170,

    standards: 3,

    frameworks: ["FDA", "21 CFR Part 11", "GAMP 5"],

    features: [
      "FDA Compliance",
      "Electronic Records Assessment",
      "Security Controls",
      "Audit Documentation",
    ],

    workflow: [
      "Select Standard",
      "Evaluate Controls",
      "Identify Gaps",
      "Generate Compliance Report",
    ],

    benefits: [
      "Support FDA compliance",
      "Reduce regulatory risks",
      "Strengthen data integrity",
      "Improve audit preparedness",
    ],

    reports: [
      "FDA Compliance Report",
      "Gap Analysis",
      "Risk Assessment",
      "Audit Summary",
    ],

    faqs: [
      {
        question: "Who should use this module?",
        answer:
          "Pharmaceutical companies, healthcare organizations and regulated manufacturers.",
      },
      {
        question: "Does it support FDA requirements?",
        answer:
          "Yes. The assessment is aligned with FDA regulations including 21 CFR Part 11.",
      },
    ],
  },
];
