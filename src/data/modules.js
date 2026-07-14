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

    frameworks: ["iso-iec-42001"],

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
          "ISO/IEC 42001 is the international standard for Artificial Intelligence Management Systems (AIMS).",
      },
      {
        question: "Who should use this module?",
        answer:
          "Organizations developing, deploying or governing Artificial Intelligence systems.",
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

    frameworks: ["cobit", "owasp", "togaf"],

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
      "Improve enterprise architecture maturity",
      "Strengthen IT governance",
      "Reduce technology risks",
      "Support secure digital transformation",
    ],

    reports: [
      "Architecture Assessment Report",
      "Maturity Assessment",
      "Gap Analysis",
      "Executive Summary",
    ],

    faqs: [
      {
        question: "Which frameworks are included?",
        answer: "This module supports COBIT, OWASP and TOGAF assessments.",
      },
      {
        question: "Who should use this module?",
        answer:
          "Enterprise architects, IT leaders, security architects and governance teams.",
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
      "Assess digital forensic readiness, evidence handling and incident investigation capabilities using internationally recognized forensic standards.",

    heroDescription:
      "Strengthen your organization's digital forensic readiness through structured assessments aligned with ISO/IEC forensic investigation standards.",

    banner: "/images/modules/forensics.webp",

    duration: "40-60 Minutes",

    assessmentType: "Self Assessment",

    controls: 140,

    frameworks: [
      "iso-iec-27037",
      "iso-iec-27041",
      "iso-iec-27042",
      "iso-iec-27043",
    ],

    features: [
      "Digital Evidence Collection",
      "Incident Investigation",
      "Chain of Custody",
      "Forensic Readiness Assessment",
    ],

    workflow: [
      "Define Investigation Scope",
      "Assess Evidence Handling",
      "Evaluate Investigation Process",
      "Generate Readiness Report",
    ],

    benefits: [
      "Improve forensic readiness",
      "Maintain evidence integrity",
      "Support legal investigations",
      "Strengthen incident response capability",
    ],

    reports: [
      "Forensic Readiness Report",
      "Evidence Handling Assessment",
      "Gap Analysis",
      "Executive Summary",
    ],

    faqs: [
      {
        question: "Which standards are covered?",
        answer:
          "The module covers ISO/IEC 27037, ISO/IEC 27041, ISO/IEC 27042 and ISO/IEC 27043.",
      },
      {
        question: "Who should use this module?",
        answer:
          "Incident response teams, digital forensic investigators, SOC teams and cybersecurity professionals.",
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
      "Assess governance, cybersecurity risks and regulatory compliance using globally recognized standards, frameworks and regulations.",

    heroDescription:
      "Evaluate your organization's governance maturity, cybersecurity posture and regulatory compliance through a unified GRC assessment platform.",

    banner: "/images/modules/grc.webp",

    duration: "60-90 Minutes",

    assessmentType: "Self Assessment",

    controls: 350,

    frameworks: [
      "australia-privacy-act-2014",

      "bangladesh-bank-cyber-security-framework",
      "bangladesh-bank-ict-guidelines-4-0",

      "cis-controls",

      "cmmc-level-2-0",

      "csa-v4-0-3",
      "ccm-v4-0-12",

      "gdpr",

      "hipaa",

      "iso-iec-27001",
      "iso-iec-27002",
      "iso-iec-27005",

      "nist-sp-800-53",
      "nist-sp-800-171",
      "nist-cybersecurity-framework",
      "nist-sp-800-61-rev-3",

      "pci-dss-3-2-1",
      "pci-dss-4-0",
    ],

    features: [
      "Governance Assessment",
      "Risk Assessment",
      "Compliance Monitoring",
      "Audit Readiness",
      "Gap Analysis",
      "Executive Dashboard",
    ],

    workflow: [
      "Choose Assessment Framework",
      "Complete Control Assessment",
      "Review Risk & Compliance Score",
      "Generate Executive Reports",
    ],

    benefits: [
      "Centralize governance and compliance",
      "Reduce regulatory risks",
      "Improve cybersecurity maturity",
      "Prepare for external audits",
      "Identify security gaps",
      "Support continuous compliance",
    ],

    reports: [
      "Compliance Report",
      "Risk Assessment Report",
      "Gap Analysis",
      "Executive Dashboard",
      "Audit Readiness Report",
      "Management Summary",
    ],

    faqs: [
      {
        question: "Which standards and frameworks are supported?",
        answer:
          "This module supports ISO/IEC 27001, ISO/IEC 27002, ISO/IEC 27005, NIST SP 800-53, NIST SP 800-171, NIST CSF, PCI DSS, CIS Controls, CMMC Level 2.0, CSA, CCM, GDPR, HIPAA, Bangladesh Bank ICT Guidelines, Bangladesh Bank Cyber Security Framework and Australia Privacy Act.",
      },
      {
        question: "Is this module suitable for audit preparation?",
        answer:
          "Yes. It helps organizations identify compliance gaps, assess risks and generate audit-ready reports.",
      },
      {
        question: "Who should use this module?",
        answer:
          "Security teams, compliance officers, auditors, risk managers and organizations preparing for regulatory or certification audits.",
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

    category: "Healthcare & Life Sciences",

    shortDescription:
      "Assess pharmaceutical cybersecurity, regulatory compliance and data integrity requirements aligned with FDA regulations.",

    heroDescription:
      "Help pharmaceutical organizations strengthen cybersecurity, ensure regulatory compliance and improve quality management through structured FDA-based assessments.",

    banner: "/images/modules/pharmaceutical.webp",

    duration: "45-60 Minutes",

    assessmentType: "Self Assessment",

    controls: 170,

    frameworks: ["fda"],

    features: [
      "FDA Compliance Assessment",
      "Data Integrity Assessment",
      "Security Controls Evaluation",
      "Audit Documentation",
    ],

    workflow: [
      "Select Assessment",
      "Evaluate Security Controls",
      "Identify Compliance Gaps",
      "Generate Assessment Report",
    ],

    benefits: [
      "Support FDA regulatory compliance",
      "Improve data integrity",
      "Reduce regulatory risks",
      "Prepare for regulatory inspections",
    ],

    reports: [
      "FDA Compliance Report",
      "Gap Analysis",
      "Risk Assessment",
      "Executive Summary",
    ],

    faqs: [
      {
        question: "Who should use this module?",
        answer:
          "Pharmaceutical manufacturers, healthcare organizations, biotechnology companies and regulated laboratories.",
      },
      {
        question: "Which regulatory standard is covered?",
        answer:
          "This module focuses on FDA regulatory compliance requirements for pharmaceutical organizations.",
      },
      {
        question: "Can this help with regulatory inspections?",
        answer:
          "Yes. It identifies compliance gaps, evaluates security controls and prepares organizations for regulatory assessments.",
      },
    ],
  },
];
