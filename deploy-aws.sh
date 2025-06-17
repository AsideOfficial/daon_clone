#!/bin/bash

# AWS S3 배포 스크립트
# 사용법: ./deploy-aws.sh your-bucket-name

BUCKET_NAME=$1

if [ -z "$BUCKET_NAME" ]; then
    echo "사용법: ./deploy-aws.sh your-bucket-name"
    exit 1
fi

echo "S3 버킷 생성 중: $BUCKET_NAME"
aws s3 mb s3://$BUCKET_NAME

echo "정적 웹사이트 호스팅 설정 중..."
aws s3 website s3://$BUCKET_NAME --index-document index.html --error-document error.html

echo "파일 업로드 중..."
aws s3 sync . s3://$BUCKET_NAME --exclude "*.git/*" --exclude "*.sh" --exclude "README.md" --exclude ".DS_Store"

echo "버킷 정책 설정 중... (퍼블릭 읽기 권한)"
cat > bucket-policy.json << EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::$BUCKET_NAME/*"
    }
  ]
}
EOF

aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy file://bucket-policy.json
rm bucket-policy.json

echo "배포 완료!"
echo "웹사이트 URL: http://$BUCKET_NAME.s3-website-$(aws configure get region).amazonaws.com" 