# Infrastructure Deployment Guide

This directory contains OpenTofu/Terraform infrastructure as code for deploying the DuckTapeDevOps website to AWS.

## Architecture Overview

The infrastructure is split into two layers:

1. **Bootstrap** (`bootstrap/`) - Foundational resources needed for state management and CI/CD
2. **Frontend** (`frontend/`) - Application infrastructure (S3, CloudFront, Route53, etc.)

### Bootstrap Infrastructure Notes

**Important**: The bootstrap infrastructure is primarily account-level and reusable across multiple projects:

- **GitHub OIDC Provider**: Account-level resource (one per AWS account). Already exists if you've set up GitHub Actions OIDC before.
- **IAM Role**: Project-specific, but could be shared across multiple repositories with updated permissions.
- **State Bucket/Table**: Can be shared across projects or created per-project.

**For subsequent websites/projects**, you typically only need to:
- Deploy the **frontend** infrastructure for the new domain
- Optionally create a new IAM role (or update existing role with additional S3/CloudFront permissions)

**Long-term consideration**: The bootstrap infrastructure should ideally be extracted into a separate "shared infrastructure" or "account foundation" repository that manages account-level resources once, then reused by all projects.

## Prerequisites

- AWS CLI configured with appropriate credentials
- OpenTofu installed (`tofu` command available)
- Domain name registered and ready for DNS configuration
- ACM certificate for your domain (must be in `us-east-1` for CloudFront)

## Deployment Order

Due to dependencies between infrastructure layers, deployment must follow this specific order:

### Step 1: Create State Bucket and DynamoDB Table (One-Time Setup)

The state bucket must exist before initializing OpenTofu. Create it manually:

```bash
# Create S3 bucket for Terraform state
aws s3api create-bucket \
  --bucket dtdo-terraform-state \
  --region us-east-1

# Enable versioning
aws s3api put-bucket-versioning \
  --bucket dtdo-terraform-state \
  --versioning-configuration Status=Enabled

# Create DynamoDB table for state locking
aws dynamodb create-table \
  --table-name dtdo-terraform-locks \
  --attribute-definitions AttributeName=LockID,AttributeType=S \
  --key-schema AttributeName=LockID,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST \
  --region us-east-1
```

**Note**: Wait for the DynamoDB table to become `ACTIVE` before proceeding.

### Step 2: Configure Bootstrap Variables

1. Copy `bootstrap/terraform.tfvars.example` to `bootstrap/terraform.tfvars`
2. Update the following values:
   - `github_repo`: Your GitHub repository (e.g., `DuckTapeDevOps/DuckTapeDevOpsUI`)
   - `s3_bucket_name`: Your domain name (e.g., `ducktapedevops.com`)
   - `cloudfront_distribution_id`: Leave as empty string `""` initially
   - `domain_name`: Your domain name

**Important**: The `cloudfront_distribution_id` should be empty (`""`) for the initial bootstrap deployment. It will use a wildcard permission initially, then be updated after the frontend creates the CloudFront distribution.

### Step 3: Deploy Bootstrap Infrastructure

```bash
cd bootstrap
tofu init -backend-config=backend.tfvars
tofu plan
tofu apply
```

This creates:
- S3 bucket for Terraform state (if not already created)
- DynamoDB table for state locking (if not already created)
- GitHub OIDC provider
- IAM role for GitHub Actions (with wildcard CloudFront permission initially)

### Step 4: Configure Frontend Variables

1. Copy `frontend/terraform.tfvars.example` to `frontend/terraform.tfvars`
2. Update the following values:
   - `domain_name`: Your domain name (e.g., `ducktapedevops.com`)
   - `resource_name_prefix`: Resource naming prefix (e.g., `dtdo`)

### Step 5: Deploy Frontend Infrastructure

```bash
cd ../frontend
tofu init -backend-config=backend.tfvars
tofu plan
tofu apply
```

This creates:
- S3 bucket for website hosting
- CloudFront distribution
- Route53 DNS records
- ACM certificate (if not already created)
- Cognito resources (if used)

**After deployment completes**, get the CloudFront Distribution ID:

```bash
tofu output cloudfront_distribution_id
```

### Step 6: Update Bootstrap with CloudFront Distribution ID

1. Update `bootstrap/terraform.tfvars`:
   - Set `cloudfront_distribution_id` to the actual CloudFront Distribution ID from Step 5

2. Re-apply bootstrap to update IAM policy:

```bash
cd ../bootstrap
tofu apply
```

This updates the IAM role policy to use the specific CloudFront distribution instead of the wildcard permission.

## Configuration Files

### Bootstrap

- `backend.tfvars` - Backend configuration (S3 state bucket, DynamoDB table)
- `terraform.tfvars` - Variable values (GitHub repo, domain, CloudFront ID)
- `terraform.tfvars.example` - Example variable file

### Frontend

- `backend.tfvars` - Backend configuration (S3 state bucket, DynamoDB table)
- `terraform.tfvars` - Variable values (domain, resource prefix, etc.)
- `terraform.tfvars.example` - Example variable file

**Important**: Never commit `terraform.tfvars` files to version control. They contain sensitive values and should be kept local or in a secure secrets manager.

## Troubleshooting

### "S3 bucket does not exist" Error

If you get this error during `tofu init`, the state bucket hasn't been created yet. Follow Step 1 above to create it manually.

### "CloudFront Distribution ID not found" Error

This shouldn't occur with the current setup since CloudFront ID is optional in bootstrap. If you see this, ensure `cloudfront_distribution_id = ""` in `bootstrap/terraform.tfvars` for the initial deployment.

### ACM Certificate Not Found

The frontend infrastructure expects an ACM certificate to exist for your domain in `us-east-1`. Create it manually in AWS Certificate Manager before deploying the frontend, or modify the infrastructure to create it automatically.

## State Management

Both bootstrap and frontend use remote state stored in S3:
- Bootstrap state: `dtdo-terraform-state/bootstrap/terraform.tfstate`
- Frontend state: `dtdo-terraform-state/frontend/terraform.tfstate`

State locking is handled by the DynamoDB table `dtdo-terraform-locks`.

## CI/CD Integration

After bootstrap is deployed, the GitHub Actions workflow can use the IAM role `github-actions-deployer` to deploy the website. The role is configured via OIDC (no stored credentials needed).

Update `.github/workflows/deploy.yml` with:
- `AWS_ROLE_ARN`: From bootstrap output `github_actions_role_arn`
- `S3_BUCKET_NAME`: Your domain name (e.g., `ducktapedevops.com`)
- `CLOUDFRONT_DISTRIBUTION_ID`: From frontend output `cloudfront_distribution_id`

## Cleanup

To destroy infrastructure (in reverse order):

```bash
# 1. Destroy frontend
cd frontend
tofu destroy

# 2. Update bootstrap to remove CloudFront ID (set to "")
# Edit bootstrap/terraform.tfvars: cloudfront_distribution_id = ""

# 3. Destroy bootstrap
cd ../bootstrap
tofu destroy

# 4. Manually delete state bucket and DynamoDB table (if desired)
aws s3 rb s3://dtdo-terraform-state --force
aws dynamodb delete-table --table-name dtdo-terraform-locks
```
