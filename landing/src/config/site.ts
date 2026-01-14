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
    logo?: {
      src: string
      alt: string
      height?: string | number
    }
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
  seo: {
    baseUrl: string
    defaultDescription: string
    social: {
      linkedinCompany: string
      linkedinPersonal: string
      twitch: string
      github: string
    }
    organization: {
      name: string
      legalName: string
      url: string
      logo: string
      description: string
    }
    person: {
      name: string
      jobTitle: string
      email: string
    }
  }
}

export const siteConfig: SiteConfig = {
  brand: {
    name: "DuckTapeDevOps",
    tagline: "To The Ducking Moon!",
    description: "Veteran intelligence professional turned cloud architect. We plan like intel, execute like operators, and leave your team owning the product and capable of both strategic and tactical execution for the next project.",
    logo: {
      src: "/brand/logo.png",
      alt: "DuckTapeDevOps Logo",
      height: 40,
    },
  },
  metadata: {
    title: "DuckTapeDevOps - To The Ducking Moon!",
    description: "Veteran intelligence professional turned cloud architect. We plan like intel, execute like operators, and leave your team owning the product and capable of both strategic and tactical execution.",
  },
  navigation: [
    {
      label: "Services",
      path: "/services",
    },
    {
      label: "Case Studies",
      path: "/case-studies",
    },
    {
      label: "Process",
      path: "/process",
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
    description: "Ready to build your next project? Connect with us on LinkedIn or send us an email to discuss how we can help your team gain strategic and tactical capability.",
    linkedinUrl: "https://linkedin.com/company/ducktapedevops/",
    email: "nic@ducktapedevops.com",
  },
  hero: {
    title: "We Plan Like Intel, Execute Like Operators",
    subtitle: "Veteran intelligence professional turned cloud architect",
    description: "We plan like intel, execute like operators, and leave your team owning the product and capable of both strategic and tactical execution for the next project.",
    primaryButton: {
      text: "Contact Us",
      to: "/contact",
    },
    secondaryButton: {
      text: "Learn More",
      to: "/",
    },
    image: {
      src: "/brand/hero-image.jpeg",
      alt: "DuckTapeDevOps - Cloud architecture and DevOps consultancy",
    },
  },
  home: {
    hero: {
      title: "DuckTapeDevOps",
      subtitle: "To The Ducking Moon!",
      description: "Veteran intelligence professional turned cloud architect. We plan like intel, execute like operators, and leave your team owning the product and capable of both strategic and tactical execution for the next project.",
      primaryButton: {
        text: "Get Started",
        to: "/contact",
      },
      secondaryText: "AWS-first • Terraform/OpenTofu • ECS/EKS • Serverless • CI/CD",
    },
    coreFeatures: [
      {
        title: "Strategic Planning",
        description: "We plan like intel: thorough analysis, clear objectives, and comprehensive understanding before execution. Every architecture decision is grounded in intelligence.",
      },
      {
        title: "Tactical Execution",
        description: "We execute like operators: precise, efficient, and mission-focused. Your team gets production-ready infrastructure delivered with operational excellence.",
      },
      {
        title: "Team Ownership",
        description: "We leave your team owning the product and capable of both strategic and tactical execution for the next project. Full knowledge transfer and documentation.",
      },
    ],
    networkFeatures: [
      {
        title: "Strategic Capability",
        description: "Your team gains strategic capability: the ability to plan, analyze, and make architectural decisions independently for future projects.",
      },
      {
        title: "Tactical Capability",
        description: "Your team gains tactical capability: the hands-on skills to implement, deploy, and maintain infrastructure with confidence and precision.",
      },
      {
        title: "Product Ownership",
        description: "Your team owns the product completely. We ensure you have the knowledge, documentation, and confidence to extend and maintain independently.",
      },
    ],
    networkLevels: [
      {
        badge: "STRATEGIC",
        badgeColor: "orange",
        title: "Strategic Planning",
        description: "We plan like intel: thorough analysis and clear objectives before execution",
      },
      {
        badge: "TACTICAL",
        badgeColor: "orange",
        title: "Tactical Execution",
        description: "We execute like operators: precise, efficient, and mission-focused delivery",
      },
      {
        badge: "OWNERSHIP",
        badgeColor: "gray",
        title: "Team Ownership",
        description: "Your team owns the product and is capable of both strategic and tactical execution for the next project",
      },
    ],
    cta: {
      title: "Ready to Build Your Next Project?",
      description: "Let's discuss how we can help your team gain strategic and tactical capability:",
      buttons: [
        {
          text: "Contact Us",
          to: "/contact",
          variant: "solid",
          iconName: "FaMapMarkerAlt",
        },
        {
          text: "Learn More",
          to: "/services",
          variant: "outline",
          iconName: "FaShip",
        },
      ],
    },
  },
  howItWorks: {
    title: "How We Work",
    description: "We plan like intel, execute like operators, and leave your team owning the product and capable of both strategic and tactical execution for the next project.",
    steps: [
      {
        title: "Intelligence Planning",
        description: "We plan like intel: thorough analysis of your current infrastructure, clear objectives, and comprehensive understanding of constraints before execution.",
      },
      {
        title: "Operator Execution",
        description: "We execute like operators: precise, efficient, and mission-focused. Hands-on infrastructure-as-code development delivered with operational excellence.",
      },
      {
        title: "Knowledge Transfer",
        description: "We ensure your team gains both strategic and tactical capability through hands-on training, documentation, and code reviews throughout the engagement.",
      },
      {
        title: "Product Ownership",
        description: "Your team owns the product completely. We ensure you have the knowledge, documentation, and confidence to extend and maintain independently for the next project.",
      },
    ],
  },
  seo: {
    baseUrl: "https://ducktapedevops.com",
    defaultDescription: "DuckTapeDevOps provides cloud architecture, DevOps, and AI consulting services. AWS-first platform engineering with Terraform, ECS/EKS, and serverless solutions. Veteran intelligence professional turned cloud architect.",
    social: {
      linkedinCompany: "https://www.linkedin.com/company/ducktapedevops",
      linkedinPersonal: "https://www.linkedin.com/in/nic-benton",
      twitch: "https://www.twitch.tv/ducktapedevops",
      github: "https://github.com/DuckTapeDevOps",
    },
    organization: {
      name: "DuckTapeDevOps",
      legalName: "DuckTapeDevOps LLC",
      url: "https://ducktapedevops.com",
      logo: "https://ducktapedevops.com/brand/logo.png",
      description: "Cloud architecture and DevOps consulting. We plan like intel, execute like operators, and leave your team owning the product and capable of both strategic and tactical execution.",
    },
    person: {
      name: "Nick Benton",
      jobTitle: "Founder & Cloud Architect",
      email: "nic@ducktapedevops.com",
    },
  },
}

