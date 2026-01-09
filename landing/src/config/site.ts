/**
 * Site Configuration
 * 
 * This file contains all brand-specific configuration values.
 * Child repositories should override these values to customize the site.
 */

export interface NavigationItem {
  label: string
  path: string
  badge?: {
    text: string
    colorScheme: string
  }
  disabled?: boolean
}

export interface SiteConfig {
  brand: {
    name: string
    tagline: string
    description: string
  }
  metadata: {
    title: string
    description: string
  }
  navigation: NavigationItem[]
  contact: {
    heading: string
    description: string
    linkedinUrl: string
    email: string
  }
  hero: {
    title: string
    subtitle: string
    description: string
    primaryButton: {
      text: string
      to: string
    }
    secondaryButton?: {
      text: string
      to: string
    }
    image: {
      src: string
      alt: string
    }
  }
  home: {
    hero: {
      title: string
      subtitle: string
      description: string
      primaryButton: {
        text: string
        to: string
      }
      secondaryText: string
    }
    coreFeatures: Array<{
      title: string
      description: string
    }>
    networkFeatures: Array<{
      title: string
      description: string
    }>
    networkLevels: Array<{
      badge: string
      badgeColor: string
      title: string
      description: string
    }>
    cta: {
      title: string
      description: string
      buttons: Array<{
        text: string
        to: string
        variant?: 'solid' | 'outline' | 'ghost' | 'link'
        iconName?: string
      }>
    }
  }
  howItWorks: {
    title: string
    description: string
    steps: Array<{
      title: string
      description: string
    }>
  }
}

export const siteConfig: SiteConfig = {
  brand: {
    name: "DuckTapeDevOps",
    tagline: "Practical Cloud Architecture & DevOps",
    description: "A hands-on cloud architecture and DevOps consultancy focused on AWS-first platform design, pragmatic infrastructure-as-code, and enabling teams with senior-level technical leadership.",
  },
  metadata: {
    title: "DuckTapeDevOps - Practical Cloud Architecture & DevOps",
    description: "AWS-first cloud architecture and DevOps consultancy. Terraform/OpenTofu, ECS/EKS, serverless, CI/CD, reliability, observability, and cost-aware scaling.",
  },
  navigation: [
    {
      label: "Services",
      path: "/community",
    },
    {
      label: "Case Studies",
      path: "/marina-explorer",
      badge: {
        text: "BETA",
        colorScheme: "orange",
      },
    },
    {
      label: "Process",
      path: "/routes",
      disabled: true,
      badge: {
        text: "SOON",
        colorScheme: "gray",
      },
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ],
  contact: {
    heading: "Get in Touch",
    description: "Ready to improve your cloud infrastructure? Connect with us on LinkedIn or send us an email to discuss your project.",
    linkedinUrl: "https://linkedin.com/company/ducktapedevops/",
    email: "nic@ducktapedevops.com",
  },
  hero: {
    title: "Cloud Architecture That Actually Works",
    subtitle: "",
    description: "Senior-level cloud architecture and DevOps expertise. AWS-first design, pragmatic infrastructure-as-code, and hands-on implementation that fixes real-world systems.",
    primaryButton: {
      text: "Contact Us",
      to: "/contact",
    },
    secondaryButton: {
      text: "Learn More",
      to: "/",
    },
    image: {
      src: "/brand/hero-image.svg",
      alt: "Cloud infrastructure and DevOps architecture",
    },
  },
  home: {
    hero: {
      title: "DuckTapeDevOps",
      subtitle: "Practical Cloud Architecture & DevOps",
      description: "Senior-level cloud architecture and DevOps expertise. AWS-first design, pragmatic infrastructure-as-code, and hands-on implementation that fixes real-world systems and enables your team.",
      primaryButton: {
        text: "Get Started",
        to: "/contact",
      },
      secondaryText: "AWS-first • Terraform/OpenTofu • ECS/EKS • Serverless • CI/CD",
    },
    coreFeatures: [
      {
        title: "Cloud Architecture",
        description: "AWS-first platform design with ECS/EKS, serverless, and event-driven architectures. Infrastructure that scales with your needs.",
      },
      {
        title: "Infrastructure as Code",
        description: "Pragmatic Terraform and OpenTofu implementations. Reliable, maintainable infrastructure that your team can own and extend.",
      },
      {
        title: "DevOps & Reliability",
        description: "CI/CD pipelines, observability, monitoring, and incident response. Systems that work when you need them.",
      },
    ],
    networkFeatures: [
      {
        title: "Technical Leadership",
        description: "Senior-level architectural decisions grounded in experience. We solve problems, not just implement solutions.",
      },
      {
        title: "Team Enablement",
        description: "We build systems and knowledge, not dependency. Your team learns, grows, and owns the infrastructure.",
      },
      {
        title: "Pragmatic Solutions",
        description: "Real-world engineering over hype. We fix systems cleanly, even when duct tape is required.",
      },
    ],
    networkLevels: [
      {
        badge: "CONSULTING",
        badgeColor: "blue",
        title: "Consulting",
        description: "Architectural guidance and technical leadership for your cloud infrastructure projects",
      },
      {
        badge: "IMPLEMENTATION",
        badgeColor: "green",
        title: "Implementation",
        description: "Hands-on infrastructure-as-code development and deployment of your cloud platform",
      },
      {
        badge: "ENABLEMENT",
        badgeColor: "purple",
        title: "Team Enablement",
        description: "Knowledge transfer and training to ensure your team can own and extend the infrastructure",
      },
    ],
    cta: {
      title: "Ready to Improve Your Cloud Infrastructure?",
      description: "Let's discuss your project and how we can help build reliable, scalable systems:",
      buttons: [
        {
          text: "Contact Us",
          to: "/contact",
          variant: "solid",
          iconName: "FaMapMarkerAlt",
        },
        {
          text: "Learn More",
          to: "/community",
          variant: "outline",
          iconName: "FaShip",
        },
      ],
    },
  },
  howItWorks: {
    title: "How We Work",
    description: "Our engagement process is straightforward: we understand your needs, design the solution, implement it with your team, and ensure you can own it.",
    steps: [
      {
        title: "Discovery & Planning",
        description: "We start by understanding your current infrastructure, challenges, and goals. Together, we design an architecture that fits your needs and constraints.",
      },
      {
        title: "Design & Architecture",
        description: "Senior-level architectural decisions grounded in AWS best practices. We design for reliability, scalability, and maintainability from day one.",
      },
      {
        title: "Implementation",
        description: "Hands-on infrastructure-as-code development. We build alongside your team, ensuring knowledge transfer and code quality throughout.",
      },
      {
        title: "Enablement & Handoff",
        description: "Your team owns the infrastructure. We ensure you have the documentation, training, and confidence to extend and maintain it independently.",
      },
    ],
  },
}

