/**
 * Case Studies Content
 * 
 * Centralized content data for all case studies.
 */

export interface CaseStudy {
  slug: string
  title: string
  client: string
  industry: string
  engagementType: string
  duration: string
  status: 'published' | 'coming-soon'
  
  // For published case studies
  overview?: string
  challenge?: string
  constraints?: string
  approach?: string
  liveDemonstration?: string
  platformCapabilities?: string
  outcomes?: string[]
  intentionalNonDecisions?: string
  keyTakeaway?: string
  technologies?: string[]
  capabilitiesDemonstrated?: string[]
  
  // For coming-soon
  shortDescription?: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'conde-nast',
    title: 'Condé Nast',
    client: 'Condé Nast',
    industry: 'Media & Publishing',
    engagementType: 'Enterprise',
    duration: '12 month contract',
    status: 'published',
    overview: `Condé Nast operates one of the world's largest digital publishing platforms, supporting 74 publications including Vogue, GQ, The New Yorker, and Wired. This engagement focused on large-scale cloud and platform modernization across their global digital publishing ecosystem, with an emphasis on scaling platform capabilities while actively reducing operational complexity. The work enabled teams to ship faster with greater reliability and clearer ownership across a distributed, multi-brand environment.`,
    challenge: `Operating a globally distributed publishing platform at Condé Nast's scale presents unique challenges. The organization supports dozens of brands, each with distinct editorial workflows, content requirements, and audience expectations. Teams work across multiple time zones, and infrastructure decisions impact not just individual publications but shared platform services that power the entire ecosystem. The complexity of managing regionally distributed databases, coordinating deployments across teams, and maintaining consistency while allowing brand autonomy creates a constant tension between standardization and flexibility. Additionally, the platform must support both high-traffic editorial publishing workflows and sophisticated content discovery and personalization features, each with different performance and reliability requirements.`,
    constraints: `Enterprise-scale platform work operates under real-world constraints that shape every architectural decision. At Condé Nast, infrastructure is shared across multiple teams and brands, meaning changes must be carefully coordinated and backward-compatible. The organization maintains a risk-sensitive posture appropriate for a publicly-facing media platform with millions of daily readers. This requires incremental change rather than big-bang migrations, with each step validated before proceeding. Multi-team coordination means that platform improvements must be designed to benefit all stakeholders, not just individual teams. Additionally, the platform must maintain high availability during transitions, as editorial publishing schedules cannot accommodate extended downtime. These constraints require a pragmatic approach that balances technical excellence with operational reality.`,
    approach: `The modernization approach focused on intentionally right-sizing platform complexity rather than adding capabilities for their own sake. Where Kubernetes (EKS) provided necessary orchestration features, it remained. Where simpler container orchestration (ECS Fargate) could meet requirements with less operational overhead, we migrated selectively. This pragmatic evaluation reduced operational burden while maintaining the flexibility needed for complex workloads. Event-driven architectures using EventBridge, Step Functions, and Lambda replaced tightly-coupled synchronous systems, enabling better scalability and fault isolation. These pipelines supported ETL operations, content hydration workflows, and recommendation systems with clear ownership boundaries. Observability improvements centered on OpenTelemetry sidecar architectures, providing vendor-agnostic instrumentation that improved visibility across services and environments without locking teams into specific tooling. The MongoDB consolidation effort transformed dozens of regionally distributed instances into a single globally sharded, vector-enabled platform, improving editorial workflows while reducing operational overhead. This consolidation also enabled hybrid search capabilities, incorporating nearest-neighbor and HNSW-based semantic search alongside traditional keyword search, supporting both content discovery and personalization use cases. Throughout the engagement, we partnered with AWS Professional Services to translate CDK-based reference architectures into Terraform, improving long-term maintainability and enabling platform standardization across teams.`,
    outcomes: [
      'Improved operational predictability through reduced infrastructure complexity and clearer ownership models',
      'Enhanced developer experience with faster deployment cycles and more transparent infrastructure costs',
      'Better customer experience through improved content discovery and personalization capabilities',
      'Reduced operational and infrastructure costs through consolidation and right-sizing',
      'Increased platform reliability with better observability and fault isolation',
      'Improved cross-team coordination through standardized infrastructure patterns and clearer boundaries',
      'Enhanced content workflows through database consolidation and improved search capabilities'
    ],
    intentionalNonDecisions: `Not every system needed modernization, and not every modernization opportunity was worth pursuing. Some legacy systems remained unchanged because the cost and risk of migration outweighed the benefits. Certain architectural patterns that worked well for specific use cases were preserved rather than forced into a one-size-fits-all approach. We deliberately avoided over-engineering solutions that would have been technically impressive but operationally burdensome. The goal was sustainable improvement, not perfection. This meant accepting some technical debt where it served the broader goal of platform stability and team velocity.`,
    keyTakeaway: `At enterprise scale, reducing surprises is more valuable than eliminating all complexity—the goal is predictable operations, clear ownership, and sustainable platform evolution that enables teams rather than constraining them.`,
    technologies: [
      'ECS Fargate',
      'EKS',
      'MongoDB',
      'EventBridge',
      'Step Functions',
      'Lambda',
      'OpenTelemetry',
      'Terraform',
      'AWS Professional Services'
    ]
  },
  {
    slug: 'massdriver',
    title: 'Massdriver',
    client: 'Massdriver',
    industry: 'Technology',
    engagementType: 'Startup',
    duration: '3 month contract',
    status: 'published',
    overview: `Massdriver is a platform company focused on helping teams adopt self-service infrastructure safely through visual abstractions backed by real cloud-native primitives. This engagement was a short, focused startup contract centered on AI/ML platform design and self-service infrastructure enablement. The work aimed at making advanced cloud and AI systems approachable and repeatable for customers who needed production-grade patterns they could understand, deploy, and operate—not just read about. The engagement sat at the intersection of platform engineering, MLOps, developer experience, and go-to-market enablement.`,
    challenge: `The core challenge was that customers were interested in AI/ML capabilities but lacked safe, repeatable patterns for deploying and operating generative AI infrastructure. Generative AI systems are powerful but easy to misuse, and platform abstractions must hide complexity without removing understanding. Demos needed to reflect real production architecture, not toy examples. The fundamental problem was making advanced AI/ML systems usable and trustworthy in a self-service context where customers would be deploying and operating infrastructure themselves. This required patterns that were both sophisticated enough for production use and simple enough for teams with varying cloud maturity levels to adopt confidently.`,
    constraints: `Startup and customer realities shaped every decision. Customers came with varying levels of cloud maturity, from teams new to AWS to experienced platform engineers. The work needed to support rapid experimentation without runaway costs, as startups can't afford to burn budget on infrastructure that doesn't deliver value. Live demos had to work reliably, not just theoretically—when demonstrating to potential customers at events like AWS re:Invent, there's no second chance if something breaks. Infrastructure had to be deployable quickly and repeatably, as time-to-value matters in startup contexts. Patterns needed to translate cleanly into customer environments, meaning they couldn't rely on Massdriver-specific configurations that wouldn't work elsewhere. These constraints required solutions that balanced sophistication with simplicity, speed with reliability, and abstraction with transparency.`,
    approach: `The work focused on designing and building AI/ML platform bundles that enabled customers to deploy production-grade infrastructure for large language models and diffusion-based image generation models. We used AWS-native services exclusively to ensure realism and portability—customers needed patterns they could understand and adapt, not proprietary abstractions. The architecture centered on ephemeral, automation-first environments that supported experimentation while maintaining cost control through automated teardown and resource limits. We created reference architectures for LLM inference, Stable Diffusion and SDXL pipelines, and GPU-backed workloads, then abstracted these architectures behind Massdriver's visual, click-and-drag platform interface using OpenTofu modules. The result was that complex AI infrastructure could be deployed in minutes, not days, while maintaining the architectural integrity and operational practices needed for production use.`,
    liveDemonstration: `We built a live demonstration system using AWS SageMaker, a personally trained Mistral LLM, Stable Diffusion SDXL, Lambda, API Gateway, and S3 for artifact storage. The demo showcased the ability to deploy full AI infrastructure through visual platform interactions, invoke the API with a prompt, trigger inference, and receive generated output stored in S3—all in real-time. This demonstration was delivered live on YouTube to attract MLOps-focused customers and in-person at AWS re:Invent as part of Massdriver's booth presence. The credibility came from execution: the demo worked reliably under live conditions, used real AWS services in realistic configurations, and demonstrated patterns that customers could actually replicate in their own environments. This wasn't a proof of concept—it was production-grade thinking demonstrated live, showing that self-service AI infrastructure could be both powerful and approachable.`,
    outcomes: [
      'Expanded Massdriver\'s AI/ML platform offerings with production-ready reference architectures',
      'Made advanced AI infrastructure understandable and repeatable for customers with varying technical backgrounds',
      'Improved customer confidence in self-service adoption through demonstrable, working examples',
      'Enabled faster, safer experimentation for prospective users evaluating AI infrastructure platforms',
      'Strengthened alignment between platform capabilities and real-world usage patterns',
      'Demonstrated platform credibility through reliable live demonstrations at major industry events'
    ],
    intentionalNonDecisions: `We explicitly avoided several approaches that would have undermined credibility or customer trust. No black-box abstractions that hid critical tradeoffs—customers needed to understand what they were deploying and why. No unrealistic demo architectures that looked impressive but couldn't be replicated in production. No hardcoded or fragile demo setups that would break under real-world conditions. No platform features that customers couldn't reasonably operate themselves—if it required Massdriver support to run, it wasn't truly self-service. We also avoided over-engineering solutions that would have been technically impressive but operationally burdensome for startup customers. The goal was sustainable patterns that customers could own, not dependencies they couldn't escape.`,
    keyTakeaway: `Self-service only works when the platform teaches good decisions, not just enables fast ones—abstractions must preserve understanding while reducing complexity.`,
    technologies: [
      'MLOps',
      'AWS SageMaker',
      'Lambda',
      'API Gateway',
      'S3',
      'OpenTofu',
      'Mistral LLM',
      'Stable Diffusion SDXL',
      'GPU workloads'
    ],
    capabilitiesDemonstrated: [
      'AI/ML platform engineering',
      'MLOps reference architecture design',
      'AWS-native AI infrastructure',
      'Developer experience and enablement',
      'Live technical demos and go-to-market support',
      'Translating complex systems into safe self-service patterns'
    ]
  },
  {
    slug: 'navalnomad',
    title: 'NavalNomad',
    client: 'NavalNomad',
    industry: 'Platform',
    engagementType: 'Platform',
    duration: 'Ongoing',
    status: 'published',
    overview: `NavalNomad is a founder-led platform project designed and built from the ground up to support liveaboard boaters and remote workers. Built without venture funding, the platform is intentionally designed to operate safely at low traffic and low revenue, with a clear path to grow into a larger ecosystem over time. The project exists to solve real problems for a real community—route planning, marina discovery, connectivity planning, cost estimation, lifestyle logistics, and long-term nomadic living—not to chase scale prematurely. As both the platform architect and the first real user, this project represents dogfooding at its most direct: every architectural decision is tested against actual usage patterns and operational constraints.`,
    challenge: `The core challenge was building a non-trivial platform with real users while avoiding runaway infrastructure costs, operating without a dedicated ops team, and making decisions without knowing which features will ultimately matter most. The hardest problem wasn't technology—it was sequencing decisions correctly. Every feature addition needed to justify its operational footprint. Every architectural choice needed to support future pivots without requiring rewrites. The platform had to be understandable and operable by one person, yet capable of evolving as usage patterns became clearer. This required a different kind of discipline than scaling-focused architecture: the discipline to stay alive long enough to matter.`,
    constraints: `Founder-specific constraints shaped every architectural decision. There's no tolerance for always-on compute—infrastructure must be cheap while idle, which means serverless and event-driven patterns aren't just nice-to-have, they're essential. Features must justify their operational footprint, meaning every service, database, and integration needs a clear cost-benefit analysis. Architecture must support future pivots without rewrites, which means clear boundaries and intentional abstraction layers. The platform must be understandable and operable by one person, ruling out complex orchestration or systems that require specialized knowledge to maintain. These constraints aren't limitations—they're forcing functions that lead to better architecture. Cost discipline and operational simplicity aren't compromises; they're competitive advantages when building for the long term.`,
    approach: `The architectural philosophy centers on serverless-first design to minimize idle cost, event-driven workflows instead of long-running services, and clear separation between content, computation, user interaction, and future marketplace concerns. Managed services are used extensively to reduce operational burden—when AWS handles the undifferentiated heavy lifting, the founder can focus on features that matter. Infrastructure is designed to scale later, not immediately. Simplicity and optionality were prioritized over raw performance. The system uses Lambda for compute, S3 for storage, API Gateway for APIs, and DynamoDB for structured data—all services that cost nothing when idle and scale automatically when needed. Event-driven patterns mean workflows can be triggered by user actions, scheduled jobs, or external events without maintaining always-on services. The architecture explicitly supports long idle periods, bursty usage, incremental feature rollout, and a gradual transition from personal use to community to marketplace.`,
    platformCapabilities: `Current and near-term capabilities include route and travel planning with waypoint management, cost estimation for fuel consumption, distance calculations, and duration planning, marina and stop discovery with filtering and search, user-generated routes and notes for sharing experiences, and data modeling designed for future personalization and recommendations. The platform also includes foundations for AI-assisted planning and guidance, with data structures that support machine learning workflows without requiring immediate ML infrastructure. The system is intentionally built to support experimentation—new features can be added as Lambda functions or Step Functions workflows without destabilizing existing capabilities. The architecture separates concerns cleanly: content management, route computation, user interactions, and future marketplace features each have their own boundaries, making it possible to evolve one area without affecting others.`,
    outcomes: [
      'Near-zero idle infrastructure cost through serverless architecture and event-driven design',
      'Clear, maintainable system boundaries that support incremental feature development',
      'Ability to add or remove features without destabilizing the platform core',
      'Architecture that supports experimentation without lock-in to specific patterns',
      'A system the founder can confidently operate solo without specialized ops knowledge',
      'Infrastructure costs that scale with actual usage, not anticipated growth'
    ],
    intentionalNonDecisions: `Several common architectural patterns were explicitly avoided. No premature microservices—the system uses clear boundaries but doesn't split into services until there's a real operational reason. No always-on clusters—every compute resource is serverless or event-triggered. No speculative scaling architecture—the system is designed to handle current usage patterns efficiently, with clear paths to scale when needed, not before. No infrastructure chosen "just in case"—every service, database, and integration has a current use case. No features added without clear operational justification—if a feature can't explain its infrastructure cost, it doesn't get built. This isn't about being cheap; it's about being disciplined. Every architectural decision is tested against the question: "Does this help the platform survive long enough to matter?"`,
    keyTakeaway: `Good architecture isn't about scaling fast—it's about staying alive long enough to matter.`,
    technologies: [
      'Lambda',
      'API Gateway',
      'S3',
      'DynamoDB',
      'Step Functions',
      'EventBridge',
      'CloudFront',
      'Terraform',
      'React'
    ],
    capabilitiesDemonstrated: [
      'Founder-led platform architecture',
      'Cost-conscious system design',
      'Serverless and event-driven systems',
      'Designing for idle-heavy workloads',
      'Building platforms that evolve without rewrites',
      'Translating real-world constraints into technical decisions'
    ]
  }
]

/**
 * Get a case study by slug
 */
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(study => study.slug === slug)
}

/**
 * Get all published case studies
 */
export function getPublishedCaseStudies(): CaseStudy[] {
  return caseStudies.filter(study => study.status === 'published')
}

/**
 * Get all case studies (published and coming soon)
 */
export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies
}
