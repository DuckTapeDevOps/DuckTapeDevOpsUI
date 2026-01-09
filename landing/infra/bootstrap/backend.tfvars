bucket         = "ducktape-devops-terraform-state"
key            = "bootstrap/terraform.tfstate"
region         = "us-east-1"
dynamodb_table = "ducktape-devops-terraform-locks"
encrypt        = true 