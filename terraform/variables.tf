variable "bucket_name" {
  description = "Унікальне ім'я бакета (тільки lowercase, цифри і дефіси). Приклад: lab6-vlad-dzemiuk-12345"
  type        = string
}

variable "aws_region" {
  description = "AWS region де створюємо ресурси (має збігатися з aws configure, або будь-який бажаний)."
  type        = string
  default     = "eu-central-1"
}