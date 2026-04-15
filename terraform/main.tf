resource "aws_s3_bucket" "website" {
  bucket = var.bucket_name
}

# Вмикаємо режим "static website hosting"
resource "aws_s3_bucket_website_configuration" "hosting" {
  bucket = aws_s3_bucket.website.id

  index_document {
    suffix = "index.html"
  }

  # Якщо у тебе SPA і треба fallback — можна буде додати error_document
  # error_document {
  #   key = "index.html"
  # }
}

# Дозволяємо публічний доступ (інакше сайт не відкриється)
resource "aws_s3_bucket_public_access_block" "public" {
  bucket = aws_s3_bucket.website.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# Політика: будь-хто може читати об'єкти
resource "aws_s3_bucket_policy" "allow_public_read" {
  bucket = aws_s3_bucket.website.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.website.arn}/*"
      }
    ]
  })

  depends_on = [aws_s3_bucket_public_access_block.public]
}