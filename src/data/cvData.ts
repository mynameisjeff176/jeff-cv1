import {
  Metric,
  ExperienceItem,
  SkillCategory,
  VolunteerItem,
  EducationItem,
  CertificationItem,
  AiProject,
} from '../types';

export const personalInfo = {
  name: 'Jeff Smith',
  headline: 'Strategic Leader & Customer Support Specialist',
  subheadline: 'Transforming Organisations Through Technical Excellence, Strategic Growth & Stakeholder Engagement',
  location: 'Whanganui, New Zealand',
  phone: '021 525279',
  formattedPhone: '+64 21 525279',
  email: 'projectwellington@gmail.com',
  summary:
    'Accomplished professional with over 20 years of experience spanning technical customer support, executive leadership, business development, and economic development. Proven track record of driving organisational growth, building high-performing teams, and delivering exceptional results across diverse sectors. Expert in transforming operational challenges into strategic opportunities, with demonstrated success in reducing customer churn, securing substantial funding, and achieving year-on-year revenue growth. Combines technical proficiency with strong business acumen, relationship-building skills, and a commitment to community development.',
  aboutNote:
    'From resolving high-stakes API and payment gateway bottlenecks for Shopify partners, to navigating M&A integrations and heading Chambers of Commerce, I bring a resilient, cross-disciplinary problem-solving approach to every mission.',
};

export const careerMetrics: Metric[] = [
  {
    value: '20+',
    label: 'Years of Leadership',
    detail: 'Cross-functional expertise in tech support, M&A, and business leadership',
  },
  {
    value: '75%',
    label: 'Survey Friction Reduced',
    detail: 'Turned neutral/negative merchant satisfaction around at Shopify',
  },
  {
    value: '30%',
    label: 'Faster Partner Onboarding',
    detail: 'Streamlined developer and agency integrations across Shopify ecosystem',
  },
  {
    value: '50% → 15%',
    label: 'Customer Churn Reduction',
    detail: 'Standardized workflows and saved technician hours at Electra Services',
  },
  {
    value: '35%',
    label: 'YoY Chamber Growth',
    detail: '3 consecutive years of double-digit expansion as Northland Chamber CEO',
  },
  {
    value: '57',
    label: 'SMEs Mentored',
    detail: 'Direct advisory through Business Mentors NZ / Spark over 20 years',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Technical & Operational Excellence',
    description:
      'Translating deep system architecture into actionable fixes, reliable workflows, and merchant satisfaction.',
    skills: [
      'Shopify Platform & Liquid',
      'Payment Gateways & Reconciliation',
      'API & Webhook Troubleshooting (GraphQL/REST)',
      'OAuth & Authentication Flows',
      'SLA & Incident Management',
      'Process Optimisation & Standardisation',
      'KYC Compliance & Fraud Mitigation',
      'Documentation & Knowledge Bases',
    ],
  },
  {
    title: 'Leadership & Strategic Management',
    description:
      'Executing organizational turnarounds, post-merger integrations, and community-wide alignment.',
    skills: [
      'Executive Leadership (CEO / Acting CEO)',
      'Organisational Restructuring',
      'Mergers & Acquisitions (M&A) Integration',
      'Strategic Planning & Implementation',
      'Change Management',
      'Team Building & Culture Development',
      'Board Governance & Reporting',
      'Policy Development & Advocacy',
    ],
  },
  {
    title: 'Business Development & Growth',
    description:
      'Commercializing services, scaling sponsorships, and driving sustainable regional economic initiatives.',
    skills: [
      'Revenue Growth Strategy',
      'Contract Negotiation & Enterprise Sales',
      'Government & Grant Funding Acquisition',
      'Regional Economic Development',
      'Sponsorship Acquisition & Naming Rights',
      'Client Retention Systems',
      'Business Mentoring & Diagnostics',
      'B2B Account Management',
    ],
  },
  {
    title: 'Customer & Community Engagement',
    description:
      'Engaging thousands of community members and fostering lasting stakeholder trust.',
    skills: [
      'Public Speaking & Keynotes (Toastmasters)',
      'High-Stakes Conflict Resolution',
      'Community Sports Directing (Parkrun)',
      'Rotary Project Directorship',
      'Stakeholder Mapping & Influence',
      'Event Risk Assessment & H&S Compliance',
      'Volunteer Team Mobilisation',
      'Crisis Communication',
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'ginza',
    role: 'Product Acquisition and Sales (Part-Time)',
    company: 'Ginza Bargains',
    location: 'New Zealand',
    period: '2025 – Present',
    category: 'tech-ops',
    summary:
      'Managing end-to-end logistics, inventory flow, customer relations, and hands-on technical problem resolution.',
    highlights: [
      'Optimised delivery routes, inventory handling, and warehouse organization for agile turnaround.',
      'Developed tailored customer acquisition and retention strategies, handling escalated inquiries with empathy.',
      'Diagnosed and resolved logistical hurdles, product discrepancies, and minor technical equipment issues.',
    ],
    skills: ['Operations Management', 'Inventory Quality Control', 'Customer Retention', 'Logistics'],
  },
  {
    id: 'shopify',
    role: 'Support Tech Advisor',
    company: 'Shopify',
    location: 'Ontario, Canada (Remote)',
    period: '2019 – 2025',
    category: 'tech-ops',
    summary:
      'Delivered priority technical and operational support to merchants and high-tier Shopify Partners globally, diagnosing complex platform, API, and checkout integrations.',
    highlights: [
      'Delivered prioritized 24/7 technical support to developers, designers, and agencies resolving complex technical, app, and theme issues.',
      'Streamlined partner onboarding, reducing onboarding duration by 30% and applying direct diagnostic routing in 50% of all incoming partner interactions.',
      'Reduced neutral/negative survey feedback by 75% through transparent, empathetic technical communication and predictable update timelines during payment gateway outages.',
      'Facilitated financial operations for Shopify Payments and 3rd-party gateways (Stripe, PayPal, Authorize.net), resolving routing errors, reconciliation discrepancies, and fee structures.',
      'Guided high-risk merchants through KYC compliance, risk-related fund holds, chargeback mitigation, and checkout funnel optimization.',
      'Managed priority Partner support resolving GraphQL / REST API troubleshooting, OAuth authentication failures, and theme Liquid customizations.',
      'Facilitated Shopify App & Theme Store review processes with actionable feedback on security, performance, and UI/UX compliance.',
      'Served as primary technical liaison between external agencies and internal core engineering teams to resolve platform-wide bugs affecting multi-million dollar merchant accounts.',
    ],
    skills: [
      'Shopify Platform',
      'Shopify Payments & Gateways',
      'GraphQL & REST APIs',
      'OAuth & Security Controls',
      'KYC Compliance & Risk',
      'Theme Customization & Liquid',
      'Developer Relations',
      'Escalation Engineering',
    ],
  },
  {
    id: 'electra',
    role: 'Technical Service Manager',
    company: 'Electra Services Limited',
    location: 'New Zealand',
    period: '2016 – 2019',
    category: 'leadership',
    summary:
      'Led nationwide technician teams across New Zealand’s North Island, consolidating services into a unified Service Delivery division to enhance customer success and operational alignment.',
    highlights: [
      'Drove aggressive business expansion through four successful strategic M&A acquisitions, including 2 distressed receiverships that fortified market positioning.',
      'Slashed customer churn from 50% down to 15% through standardized service workflows and translating complex technical details into clear customer value.',
      'Saved technicians approximately 1.5 hours per week per person by systematically standardizing operating procedures.',
      'Maintained a flawless 18-month incident-free safety record overseeing mobile field units and station staff.',
      'Secured high-value Bureau (Wholesale) security clients through strategic relationship-building and active pipeline development.',
      'Mastered Microsoft 365 workflow integration, Insightly CRM tracking, and security industry systems (Patriot and CAMS).',
    ],
    skills: [
      'M&A Integration',
      'Team Leadership',
      'Churn Reduction',
      'Health & Safety Compliance',
      'Workflow Automation',
      'Insightly CRM & M365',
      'Security Operations (Patriot/CAMS)',
    ],
  },
  {
    id: 'kapiti',
    role: 'Director & Co-Founder | Small Business Consultant',
    company: 'TheKapiticompany.com / Private Contracting',
    location: 'New Zealand',
    period: '2014 – 2016',
    category: 'consulting',
    summary:
      'Co-founded consulting ventures Boost Business and Biz Buddies, delivering strategic digital transformation, sales mentoring, and regional economic agency contracts.',
    highlights: [
      'Generated $234,988 in net new revenue by launching and directing consulting brands and mentoring regional SME owners.',
      'Created and launched New Zealand’s first private Economic Development and Destination Marketing Agency, delivering the Kapiti Coast District i-SITE contract profitably.',
      'Recognized as Official Consultant for the Electra Business Awards across three consecutive years (2010, 2011, 2012).',
      'Facilitated local government focus groups for the multi-million dollar Kapiti Expressway Transport working groups.',
      'Delivered a 60-day lapsed member recruitment campaign for Kapiti Chamber of Commerce, generating $30k recurring annual income.',
      'Consulted for Electra Limited building and launching the regional sales database for security startup Securely.',
    ],
    skills: [
      'Digital Strategy',
      'Economic Development',
      'SME Mentoring',
      'Destination Marketing',
      'Public Sector Stakeholder Facilitation',
      'Sales Pipeline Design',
    ],
  },
  {
    id: 'grow-wellington',
    role: 'Outbound Sales & Clean Technology Centre NZ Manager',
    company: 'Grow Wellington Limited (Split Role)',
    location: 'Greater Wellington, New Zealand',
    period: '2009 – 2014',
    category: 'consulting',
    summary:
      'Directed outbound commercialization, tenancy, and advisory programs for innovative green-tech SMEs across Greater Wellington under the Regional Business Partner (RBP) Network.',
    highlights: [
      'Delivered $460k in co-funded business support programmes to 319 businesses, mobilizing 48+ specialist consultants and educators.',
      'Salvaged a stalled $200k contract with Nature Coast Inc by renegotiating KPIs to align with strict government agency requirements, delivering $160k.',
      'Guided 67 businesses (2009/2010) and 115 businesses (2011) through Baldrige business excellence criteria and award applications.',
      'Embedded cluster commercialization models to drive Clean Tech revenue while decoupling the centre from non-revenue political distractions.',
      'Completed and delivered high-impact Labour Market Surveys for Kapiti Coast / Horowhenua in partnership with the Dept of Social Welfare and McDermott Miller economists.',
    ],
    skills: [
      'Clean Technology',
      'Regional Business Partner Network (RBP)',
      'Baldrige Excellence Model',
      'Government Co-funding',
      'B2B Tenancy Sales',
      'Labour Market Analytics',
    ],
  },
  {
    id: 'northland-chamber',
    role: 'Chief Executive Officer',
    company: 'Northland Chamber of Commerce',
    location: 'Northland, New Zealand',
    period: '2005 – 2009',
    category: 'leadership',
    summary:
      'Steered total strategic, operational, and public advocacy operations, reversing chronic membership decline and transforming the Chamber into an influential economic powerhouse.',
    highlights: [
      'Achieved 35% year-on-year revenue growth across three consecutive years, securing long-term financial viability.',
      'Reversed membership attrition, growing active paying members from 265 to 439 businesses.',
      'Expanded annual sponsorship revenue from $14,000 to $101,000, signing long-term tier-one naming partners including Westpac and Bayleys Real Estate.',
      'Founded 3 independent district chambers (Far North, Kaipara, and Whangarei Chambers of Commerce) providing localized playbooks and branding.',
      'Authored the Chamber Advocacy White Paper; successfully lobbied local district councils on commercial rating differentials and the regional Okara Stadium project.',
      'Secured ~$600k in co-funding across 36 months via the Enterprise Training Scheme, training 300+ businesses across 10 locations during the 2008/2009 global financial crisis.',
    ],
    skills: [
      'Executive Leadership',
      'Sponsorship Acquisition',
      'Public Advocacy & White Papers',
      'Board Governance',
      'Chamber Expansion',
      'Media Spokesperson',
    ],
  },
  {
    id: 'wanganui-chamber',
    role: 'Economic Development Manager & Acting CEO',
    company: 'Wanganui Chamber of Commerce / Enterprise Wanganui',
    location: 'Wanganui, New Zealand',
    period: '2001 – 2005',
    category: 'leadership',
    summary:
      'Directed regional development programmes, business education, and community advocacy, stepping into the Acting CEO role through organizational restructuring.',
    highlights: [
      'Maintained continuous productivity and team stability leading 7 direct reports during high-level structural transitions.',
      'Achieved a 90+% graduate success rate delivering quarterly practical business courses for Dept of Social Welfare grant applicants.',
      'Founded and produced the inaugural Wanganui Business Awards, securing corporate naming sponsors (Craigs Investment Partners, Genesis Energy, UCOL) and hosting celebrity talent.',
      'Increased annual sponsorship revenue by $45,000 through structured B2B community partnerships.',
    ],
    skills: [
      'Acting CEO',
      'Team Leadership',
      'Business Incubator Training',
      'Event Conception & Production',
      'Stakeholder Alignment',
    ],
  },
];

export const aiLearnings: AiProject[] = [
  {
    category: 'Hands-on Tools',
    title: 'CLI Automation & Code Prototyping',
    description:
      'Using Claude Code from the command line for fast iterative development and testing. Building custom scrapers via Google AI Studio to extract structured data for project pipelines.',
    tech: ['Claude Code CLI', 'Google AI Studio', 'Web Scraping', 'Terminal Tooling'],
  },
  {
    category: 'Local Models & Privacy',
    title: 'Offline Local LLM Deployment',
    description:
      'Downloaded LM Studio and ran Google Gemma locally on desktop hardware with zero external internet dependencies, connecting it to personal workflows and communication tools.',
    tech: ['LM Studio', 'Google Gemma', 'Local Inference', 'App Integrations'],
  },
  {
    category: 'Quality & Verification',
    title: 'Prompt Engineering & Document Grounding',
    description:
      'Carefully designing and testing structured prompts for accuracy. Verifying AI outputs against primary sources using Google NotebookLM to synthesize deep technical documentation.',
    tech: ['NotebookLM', 'Prompt Testing', 'Source Verification', 'Knowledge Synthesis'],
  },
  {
    category: 'Modern Engineering Workflows',
    title: 'Workflows, Containers & Debugging',
    description:
      'Exploring Kestra for orchestrating multi-step automation flows, using Docker to guarantee environment parity, and sharpening debugging workflows in VS Code.',
    tech: ['Docker', 'Kestra', 'VS Code', 'Roadmap.sh Standards'],
  },
  {
    category: 'Communication Philosophy',
    title: 'Feynman Technique for Technology',
    description:
      'Embracing Richard Feynman’s philosophy: deeply master complex systems so you can explain them simply and intuitively to anyone, ensuring non-technical stakeholders can make confident, high-stakes decisions.',
    tech: ['Feynman Technique', 'Plain-Language Translation', 'Stakeholder Empowerment'],
  },
];

export const volunteerLeadership: VolunteerItem[] = [
  {
    role: 'Event Director & Run Director',
    organization: 'Whanganui Riverbank Parkrun',
    period: '2020 – Present',
    description:
      'Directing weekly community running events for 100 to 250+ participants (and larger events up to 1,000+), holding ultimate responsibility for dynamic risk management, course safety, participant briefings, and volunteer coordination.',
    highlights: [
      'Lead and train a pool of 20+ volunteers across digital timing systems, finish-line management, and crowd control.',
      'Maintain regional land-use agreements and 100% compliance with local government bylaws and health & safety standards.',
      'Oversee critical safety gear including AED life-saving equipment maintenance and incident crisis protocols.',
    ],
  },
  {
    role: 'Member & Project Director (2026)',
    organization: 'Rotary Whanganui North',
    period: '2025 – Present',
    description:
      'Active contributor to community initiatives. Director responsible for the 2026 Carols by Candlelight and Annual Foodbank Drive.',
    highlights: [
      'Establishing structured SOPs and timelines to transition institutional knowledge from legacy memory into permanent constitutional records.',
      'Participated in district Rotary amalgamation discussions, drafting comprehensive project scopes for regional club collaboration.',
    ],
  },
  {
    role: 'Accredited Business Mentor',
    organization: 'Business Mentors NZ | Spark',
    period: '2001 – 2021 (20 Years)',
    description:
      'Mentored 57 small Kiwi businesses across Northland, Kapiti, and Whanganui, helping founders navigate growth hurdles, unlock export markets, and build resilient business models.',
  },
  {
    role: 'Trustee & Board Member',
    organization: 'Kapiti Community Centre Building Trust',
    period: '2015 – 2016',
    description:
      'Governed operational strategy and revenue generation for the physical community asset in Paraparaumu serving thousands of local residents.',
  },
];

export const educationAndCredentials = {
  degrees: [
    {
      degree: 'Diploma in Economic Development',
      institution: 'Auckland University of Technology (AUT) – School of Social Sciences and Public Policy',
      year: '2004',
      details: 'Faculty of Culture and Society (Te Ara Kete Aronui), Auckland, New Zealand',
    },
    {
      degree: 'Certificate in Economic Development',
      institution: 'Auckland University of Technology (AUT)',
      year: '2003',
      details: 'Auckland, New Zealand',
    },
  ] as EducationItem[],
  certifications: [
    {
      title: 'Inbound Marketing Certified',
      issuer: 'HubSpot Academy',
      period: '2026 – 2028',
      notes: 'Human-centered, flywheel-driven customer acquisition, buyer personas, and customer journey mapping.',
    },
    {
      title: 'Governance & Board Practice',
      issuer: 'NZ Institute of Directors',
      notes: 'Introductory governance, finance, and legal duties for commercial and not-for-profit entities.',
    },
    {
      title: 'Sales Performer & Negotiation',
      issuer: 'David Forman / Grow Wellington',
      notes: 'High-impact conversation engineering, buyer psychology diagnosis, and value-centric negotiation.',
    },
    {
      title: 'Powerful Proposal Writing',
      issuer: 'Shipley Associates',
      notes: 'Structured methodology for drafting winning commercial, government, and NGO proposals.',
    },
    {
      title: 'Breakthrough Conflict Workshop',
      issuer: 'Drs. P & S Glaser',
      notes: 'Advanced interpersonal conflict resolution and team communication under pressure.',
    },
    {
      title: 'Project Management Overview',
      issuer: 'APEX Project Management Limited (Wellington)',
      notes: 'Methodologies for planning, execution, risk mitigation, and milestone delivery.',
    },
  ] as CertificationItem[],
  publicSpeaking: {
    title: 'Toastmasters International Honours',
    achievements: [
      'Competent Communicator (2007) & Competent Leader (2008)',
      'Advanced Communicator Bronze (2010)',
      'Presentation Mastery Levels 1 & 2 (2019)',
      'President, Coastmasters (2010 – 2011)',
      'Keynote & event speaker addressing live audiences up to 1,000 attendees',
    ],
  },
};

export const personalInterests = {
  title: 'Ultra-Endurance Trail Running',
  description:
    'Passionate ultra-runner completing multiday distances of up to 100 miles across rugged mountain trails. This discipline demands extraordinary mental toughness, calibrated caloric and energy pacing, and real-time crisis management when exhaustion strikes.',
  takeaway:
    'I bring this exact "endurance mindset" to leadership and technical troubleshooting: staying composed, analyzing root issues calmly, and relentlessly seeing complex missions through to total resolution.',
};
