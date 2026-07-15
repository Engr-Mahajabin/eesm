export const frameworks = [
  // =========================================================
  // ISO
  // =========================================================
  {
    id: 1,
    slug: "iso",

    name: "ISO",

    fullName: "International Organization for Standardization",

    category: "International Standard",

    logo: "/images/frameworks/iso.svg",

    description:
      "ISO publishes globally recognized standards for information security, risk management, AI governance and digital forensics.",

    modules: [
      "ai-management",
      "forensic-analysis",
      "governance-risk-compliance",
    ],

    standards: [
      {
        code: "ISO/IEC 42001",
        title: "Artificial Intelligence Management System",
        version: "2023",
        modules: ["ai-management"],
      },

      {
        code: "ISO/IEC 27001",
        title: "Information Security Management System",
        version: "2022",
        modules: ["governance-risk-compliance"],
      },

      {
        code: "ISO/IEC 27002",
        title: "Information Security Controls",
        version: "2022",
        modules: ["governance-risk-compliance"],
      },

      {
        code: "ISO/IEC 27005",
        title: "Information Security Risk Management",
        version: "2022",
        modules: ["governance-risk-compliance"],
      },

      {
        code: "ISO/IEC 27037",
        title:
          "Identification, Collection and Preservation of Digital Evidence",
        version: "2012",
        modules: ["forensic-analysis"],
      },

      {
        code: "ISO/IEC 27041",
        title: "Investigation Assurance",
        version: "2015",
        modules: ["forensic-analysis"],
      },

      {
        code: "ISO/IEC 27042",
        title: "Analysis and Interpretation of Digital Evidence",
        version: "2015",
        modules: ["forensic-analysis"],
      },

      {
        code: "ISO/IEC 27043",
        title: "Incident Investigation Principles",
        version: "2015",
        modules: ["forensic-analysis"],
      },
    ],

    coverage: [
      "Governance",
      "Risk Management",
      "Asset Management",
      "Access Control",
      "Incident Response",
    ],

    bestFor: ["Financial Services", "Healthcare", "Government", "Technology"],

    industries: [
      "Banking",
      "Healthcare",
      "Telecommunications",
      "Manufacturing",
    ],

    implementation: {
      difficulty: "Medium",
      duration: "3-6 Months",
      certification: "Available",
    },

    relatedFrameworks: ["nist", "cobit", "pci-dss"],

    assessmentProcess: [
      "Select Framework",
      "Answer Assessment",
      "Calculate Risk Score",
      "Generate Report",
      "Continuous Improvement",
    ],

    faqs: [
      {
        question: "What is ISO?",
        answer:
          "ISO develops internationally recognized standards that help organizations improve quality, security, governance and operational excellence.",
      },
      {
        question: "Who should implement ISO standards?",
        answer:
          "Organizations of any size across public and private sectors can implement ISO standards to strengthen compliance and security.",
      },
      {
        question: "Does ISO provide certification?",
        answer:
          "Yes. Many ISO management system standards, such as ISO/IEC 27001 and ISO/IEC 42001, support third-party certification.",
      },
      {
        question: "How long does implementation take?",
        answer:
          "Implementation typically ranges from 3 to 6 months depending on the organization's size, maturity and scope.",
      },
    ],
  },

  {
    id: 2,

    slug: "cobit",

    name: "COBIT",

    fullName: "Control Objectives for Information and Related Technologies",

    category: "IT Governance",

    logo: "/images/frameworks/cobit.svg",

    description:
      "COBIT is a globally recognized framework for enterprise IT governance, risk management and performance management.",

    modules: ["architecture-framework", "governance-risk-compliance"],

    standards: [
      {
        code: "COBIT 2019",
        title: "Enterprise Governance of Information and Technology",
        version: "2019",
        modules: ["architecture-framework", "governance-risk-compliance"],
      },
    ],
  },

  {
    id: 3,

    slug: "owasp",

    name: "OWASP",

    fullName: "Open Worldwide Application Security Project",

    category: "Application Security",

    logo: "/images/frameworks/owasp.svg",

    description:
      "OWASP provides industry-leading guidance and best practices for secure software development and web application security.",

    modules: ["architecture-framework"],

    standards: [
      {
        code: "OWASP Top 10",
        title: "Top 10 Web Application Security Risks",
        version: "2021",
        modules: ["architecture-framework"],
      },
    ],
  },

  {
    id: 4,

    slug: "togaf",

    name: "TOGAF",

    fullName: "The Open Group Architecture Framework",

    category: "Enterprise Architecture",

    logo: "/images/frameworks/togaf.svg",

    description:
      "TOGAF provides a structured methodology for designing, planning and governing enterprise architecture.",

    modules: ["architecture-framework"],

    standards: [
      {
        code: "TOGAF Standard",
        title: "Enterprise Architecture Methodology",
        version: "10th Edition",
        modules: ["architecture-framework"],
      },
    ],
  },

  {
    id: 5,

    slug: "fda",

    name: "FDA",

    fullName: "U.S. Food and Drug Administration",

    category: "Healthcare Regulation",

    logo: "/images/frameworks/fda.svg",

    description:
      "FDA regulations help pharmaceutical and healthcare organizations maintain product quality, electronic records integrity and regulatory compliance.",

    modules: ["pharmaceutical"],

    standards: [
      {
        code: "21 CFR Part 11",
        title: "Electronic Records and Electronic Signatures",
        version: "Current",
        modules: ["pharmaceutical"],
      },
    ],
  },

  {
    id: 6,

    slug: "australia-privacy-act",

    name: "Australia Privacy Act",

    fullName: "Australia Privacy Act 2014",

    category: "Privacy Regulation",

    logo: "/images/frameworks/privacy.svg",

    description:
      "Australian privacy legislation governing the collection, storage and processing of personal information.",

    modules: ["governance-risk-compliance"],

    standards: [
      {
        code: "Privacy Act 2014",
        title: "Australian Privacy Principles",
        version: "2014",
        modules: ["governance-risk-compliance"],
      },
    ],
  },

  {
    id: 7,

    slug: "bangladesh-bank",

    name: "Bangladesh Bank",

    fullName: "Bangladesh Bank Cyber Security Regulations",

    category: "Financial Regulation",

    logo: "/images/frameworks/bb.svg",

    description:
      "Cybersecurity regulations and ICT governance guidelines for banks and financial institutions in Bangladesh.",

    modules: ["governance-risk-compliance"],

    standards: [
      {
        code: "Bangladesh Bank Cyber Security Framework",
        title: "Cyber Security Framework",

        version: "Current",

        modules: ["governance-risk-compliance"],
      },

      {
        code: "Bangladesh Bank ICT Guidelines",

        title: "ICT Guidelines 4.0",

        version: "4.0",

        modules: ["governance-risk-compliance"],
      },
    ],
  },

  {
    id: 8,

    slug: "cis",

    name: "CIS",

    fullName: "Center for Internet Security",

    category: "Cybersecurity Controls",

    logo: "/images/frameworks/cis.svg",

    description:
      "CIS Controls provide prioritized cybersecurity best practices for protecting organizations against common cyber threats.",

    modules: ["governance-risk-compliance"],

    standards: [
      {
        code: "CIS Controls",

        title: "Critical Security Controls",

        version: "v8",

        modules: ["governance-risk-compliance"],
      },
    ],
  },

  {
    id: 9,

    slug: "cmmc",

    name: "CMMC",

    fullName: "Cybersecurity Maturity Model Certification",

    category: "Defense Compliance",

    logo: "/images/frameworks/cmmc.svg",

    description:
      "CMMC provides cybersecurity maturity requirements for organizations working with the U.S. Department of Defense.",

    modules: ["governance-risk-compliance"],

    standards: [
      {
        code: "CMMC Level 2",

        title: "Cybersecurity Maturity Model Certification",

        version: "2.0",

        modules: ["governance-risk-compliance"],
      },
    ],
  },

  {
    id: 10,

    slug: "csa",

    name: "CSA",

    fullName: "Cloud Security Alliance",

    category: "Cloud Security",

    logo: "/images/frameworks/csa.svg",

    description:
      "CSA provides best practices, guidance and controls for securing cloud computing environments.",

    modules: ["governance-risk-compliance"],

    standards: [
      {
        code: "CSA v4.0.3",
        title: "Cloud Controls Matrix",
        version: "4.0.3",
        modules: ["governance-risk-compliance"],
      },

      {
        code: "CCM v4.0.12",
        title: "Cloud Controls Matrix",
        version: "4.0.12",
        modules: ["governance-risk-compliance"],
      },
    ],
  },

  {
    id: 11,

    slug: "gdpr",

    name: "GDPR",

    fullName: "General Data Protection Regulation",

    category: "Privacy Regulation",

    logo: "/images/frameworks/gdpr.svg",

    description:
      "GDPR establishes data privacy and protection requirements for organizations processing personal data within the European Union.",

    modules: ["governance-risk-compliance"],

    standards: [
      {
        code: "GDPR",
        title: "General Data Protection Regulation",
        version: "2018",
        modules: ["governance-risk-compliance"],
      },
    ],
  },

  {
    id: 12,

    slug: "hipaa",

    name: "HIPAA",

    fullName: "Health Insurance Portability and Accountability Act",

    category: "Healthcare Compliance",

    logo: "/images/frameworks/hipaa.svg",

    description:
      "HIPAA defines security and privacy requirements for protecting healthcare information and electronic protected health information (ePHI).",

    modules: ["governance-risk-compliance"],

    standards: [
      {
        code: "HIPAA Security Rule",
        title: "Health Information Security",
        version: "Current",
        modules: ["governance-risk-compliance"],
      },
    ],
  },

  {
    id: 13,

    slug: "nist",

    name: "NIST",

    fullName: "National Institute of Standards and Technology",

    category: "Cybersecurity Framework",

    logo: "/images/frameworks/nist.svg",

    description:
      "NIST publishes cybersecurity standards, risk management guidance and incident response frameworks used worldwide.",

    modules: ["governance-risk-compliance"],

    standards: [
      {
        code: "NIST SP 800-53",
        title: "Security and Privacy Controls",
        version: "Rev. 5",
        modules: ["governance-risk-compliance"],
      },

      {
        code: "NIST SP 800-171",
        title: "Protecting Controlled Unclassified Information",
        version: "Rev. 3",
        modules: ["governance-risk-compliance"],
      },

      {
        code: "NIST Cybersecurity Framework",
        title: "Cybersecurity Framework (CSF)",
        version: "2.0",
        modules: ["governance-risk-compliance"],
      },

      {
        code: "NIST SP 800-61 Rev.3",
        title: "Incident Response Guide",
        version: "Rev. 3",
        modules: ["governance-risk-compliance"],
      },
    ],
  },

  {
    id: 14,

    slug: "pci-dss",

    name: "PCI DSS",

    fullName: "Payment Card Industry Data Security Standard",

    category: "Payment Security",

    logo: "/images/frameworks/pci.svg",

    description:
      "PCI DSS defines security requirements for organizations that store, process or transmit payment card data.",

    modules: ["governance-risk-compliance"],

    standards: [
      {
        code: "PCI DSS 3.2.1",
        title: "Payment Card Security Standard",
        version: "3.2.1",
        modules: ["governance-risk-compliance"],
      },

      {
        code: "PCI DSS 4.0",
        title: "Payment Card Security Standard",
        version: "4.0",
        modules: ["governance-risk-compliance"],
      },
    ],
  },
];
