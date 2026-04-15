output "bucket_name" {
  value       = aws_s3_bucket.website.bucket
  description = "Name of the S3 bucket for the website"
}

output "website_endpoint" {
  value       = aws_s3_bucket_website_configuration.hosting.website_endpoint
  description = "S3 website endpoint (use http://)"
}

output "website_domain" {
  value       = aws_s3_bucket_website_configuration.hosting.website_domain
  description = "S3 website domain"
}