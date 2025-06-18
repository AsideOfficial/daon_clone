#!/bin/bash

# AWS S3 + CloudFront + Lambda@Edge 배포 스크립트
# 사용법: ./deploy-aws-with-lambda-edge.sh your-bucket-name

BUCKET_NAME=$1
FUNCTION_NAME="html-extension-handler"
REGION="us-east-1"  # Lambda@Edge는 us-east-1에서만 생성 가능

if [ -z "$BUCKET_NAME" ]; then
    echo "사용법: ./deploy-aws-with-lambda-edge.sh your-bucket-name"
    exit 1
fi

echo "S3 버킷 생성 중: $BUCKET_NAME"
aws s3 mb s3://$BUCKET_NAME --region $REGION

echo "정적 웹사이트 호스팅 설정 중..."
aws s3 website s3://$BUCKET_NAME --index-document index.html --error-document error.html

echo "파일 업로드 중..."
aws s3 sync . s3://$BUCKET_NAME --exclude "*.git/*" --exclude "*.sh" --exclude "README.md" --exclude ".DS_Store" --exclude "lambda-edge-function.js"

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

echo "Lambda@Edge 함수 생성 중..."
# Lambda 함수 패키징
zip lambda-function.zip lambda-edge-function.js

# Lambda 함수 생성
aws lambda create-function \
    --region $REGION \
    --function-name $FUNCTION_NAME \
    --runtime nodejs18.x \
    --role arn:aws:iam::$(aws sts get-caller-identity --query Account --output text):role/lambda-edge-role \
    --handler lambda-edge-function.handler \
    --zip-file fileb://lambda-function.zip \
    --description "HTML extension handler for CloudFront"

# Lambda 함수 버전 생성 (Lambda@Edge는 버전이 필요)
LAMBDA_VERSION=$(aws lambda publish-version \
    --region $REGION \
    --function-name $FUNCTION_NAME \
    --query Version --output text)

echo "Lambda@Edge 함수 버전: $LAMBDA_VERSION"

echo "CloudFront 배포 생성 중..."
# CloudFront 설정에서 Lambda@Edge 함수 ARN 사용
LAMBDA_ARN="arn:aws:lambda:$REGION:$(aws sts get-caller-identity --query Account --output text):function:$FUNCTION_NAME:$LAMBDA_VERSION"

# cloudfront-setup.json 파일 수정하여 Lambda@Edge 함수 추가
cat > cloudfront-config.json << EOF
{
  "CallerReference": "daon-clone-website-$(date +%s)",
  "Comment": "한국의료정보데이터 웹사이트 with Lambda@Edge",
  "DefaultCacheBehavior": {
    "TargetOriginId": "S3-daon-clone-origin",
    "ViewerProtocolPolicy": "redirect-to-https",
    "TrustedSigners": {
      "Enabled": false,
      "Quantity": 0
    },
    "ForwardedValues": {
      "QueryString": false,
      "Cookies": {
        "Forward": "none"
      }
    },
    "MinTTL": 0,
    "DefaultTTL": 86400,
    "MaxTTL": 31536000,
    "LambdaFunctionAssociations": {
      "Quantity": 1,
      "Items": [
        {
          "LambdaFunctionARN": "$LAMBDA_ARN",
          "EventType": "origin-request"
        }
      ]
    }
  },
  "Origins": {
    "Quantity": 1,
    "Items": [
      {
        "Id": "S3-daon-clone-origin",
        "DomainName": "$BUCKET_NAME.s3.amazonaws.com",
        "S3OriginConfig": {
          "OriginAccessIdentity": ""
        }
      }
    ]
  },
  "Enabled": true,
  "PriceClass": "PriceClass_100",
  "DefaultRootObject": "index.html"
}
EOF

# CloudFront 배포 생성
DISTRIBUTION_ID=$(aws cloudfront create-distribution \
    --distribution-config file://cloudfront-config.json \
    --query Distribution.Id --output text)

echo "CloudFront 배포 ID: $DISTRIBUTION_ID"

# 정리
rm bucket-policy.json lambda-function.zip cloudfront-config.json

echo "배포 완료!"
echo "CloudFront 배포가 완료되면 다음 URL에서 확인할 수 있습니다:"
echo "https://$(aws cloudfront get-distribution --id $DISTRIBUTION_ID --query Distribution.DomainName --output text)" 