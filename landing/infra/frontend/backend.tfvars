bucket         = "dtdo-terraform-state"
key            = "frontend/terraform.tfstate"
region         = "us-east-1"
dynamodb_table = "dtdo-terraform-locks"
encrypt        = true 