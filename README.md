# DuckTapeDevOps

**Practical Cloud Architecture & DevOps**

A hands-on cloud architecture and DevOps consultancy focused on AWS-first platform design, pragmatic infrastructure-as-code (Terraform/OpenTofu), and enabling teams with senior-level technical leadership.

## Core Focus

DuckTapeDevOps specializes in:

- **AWS-first platform design** - Cloud architecture optimized for AWS services
- **Pragmatic infrastructure-as-code** - Terraform and OpenTofu for reliable, maintainable infrastructure
- **Container orchestration** - ECS/EKS deployment and management
- **Serverless architectures** - Event-driven, cost-effective solutions
- **CI/CD pipelines** - Automated deployment and testing workflows
- **Reliability & observability** - Monitoring, logging, and incident response
- **Cost-aware scaling** - Infrastructure that grows efficiently with your needs

## Philosophy

**Practical Engineering**: Real-world solutions over hype. We fix systems with duct tape when necessary—but we do it cleanly.

**Senior-Level Leadership**: Architectural decisions grounded in experience, not theory.

**Team Enablement**: We build systems and knowledge, not dependency. Your team learns and grows.

**Pragmatic Approach**: Technical, confident, and opinionated—but always grounded in what actually works.

## Project Structure

- `/landing` - React website built with Vite
- `/landing/infra` - OpenTofu/Terraform IaC for AWS (frontend hosting, CI/CD)

## Development

1. Install dependencies:
```bash
cd landing
npm install
```

2. Start development server:
```bash
npm run dev
```

## Deployment

The site is automatically deployed when changes are pushed to the main branch via GitHub Actions.

1. Build the application:
```bash
cd landing
npm run build
```

2. The GitHub Action automatically deploys to AWS S3 + CloudFront.

## Infrastructure

The project uses OpenTofu/Terraform to manage AWS:
- S3 bucket for static site (private) with CloudFront Origin Access
- CloudFront distribution and ACM certificate
- Route53 DNS for domain and aliases
- S3 backend state with DynamoDB table for state locking
- GitHub Actions (OIDC role) for CI/CD deployments

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
