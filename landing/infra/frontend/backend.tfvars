bucket         = "ducktape-devops-terraform-state"
key            = "frontend/terraform.tfstate"
region         = "us-east-1"
dynamodb_table = "ducktape-devops-terraform-locks"
encrypt        = true 