# HTML 확장자 제거 가이드

웹사이트에서 URL에 `.html` 확장자가 표시되지 않도록 하는 방법입니다.

## 방법 1: Lambda@Edge 사용 (권장)

### 1단계: IAM 역할 생성

```bash
# Lambda@Edge 실행을 위한 IAM 역할 생성
aws iam create-role \
  --role-name lambda-edge-role \
  --assume-role-policy-document '{
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Principal": {
          "Service": [
            "lambda.amazonaws.com",
            "edgelambda.amazonaws.com"
          ]
        },
        "Action": "sts:AssumeRole"
      }
    ]
  }'

# 기본 실행 권한 부여
aws iam attach-role-policy \
  --role-name lambda-edge-role \
  --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
```

### 2단계: HTML 링크 수정

```bash
# 모든 HTML 파일에서 .html 확장자 제거
chmod +x remove-html-extension.sh
./remove-html-extension.sh
```

### 3단계: Lambda@Edge와 함께 배포

```bash
# Lambda@Edge를 포함한 배포 실행
chmod +x deploy-aws-with-lambda-edge.sh
./deploy-aws-with-lambda-edge.sh your-bucket-name
```

## 방법 2: 간단한 CloudFront 설정

기본 CloudFront 설정만 사용하는 경우:

```bash
# 기본 배포 스크립트 사용
./deploy-aws.sh your-bucket-name
```

이 경우 사용자가 `/about`으로 접근하면 404 에러가 발생하지만, 
Custom Error Response로 인해 `index.html`로 리다이렉트됩니다.

## 방법 3: Apache 서버 (.htaccess)

Apache 서버를 사용하는 경우, `.htaccess` 파일 생성:

```apache
RewriteEngine On

# .html 확장자가 있는 URL을 확장자 없는 URL로 리다이렉트
RewriteCond %{THE_REQUEST} \s/+(.*)\.html[\s?] [NC]
RewriteRule ^ /%1 [R=301,L]

# 확장자 없는 URL에 .html을 내부적으로 추가
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ $1.html [L]
```

## 방법 4: Nginx 서버

Nginx 서버를 사용하는 경우:

```nginx
server {
    listen 80;
    server_name example.com;
    root /var/www/html;
    index index.html;

    # .html 확장자가 있는 URL을 확장자 없는 URL로 리다이렉트
    if ($request_uri ~ ^/(.*)\.html$) {
        return 301 /$1;
    }

    # 확장자 없는 URL에 .html을 내부적으로 추가
    try_files $uri $uri.html $uri/ =404;
}
```

## 테스트 방법

1. 배포 후 다음 URL들이 모두 작동하는지 확인:
   - `https://yourdomain.com/greeting`
   - `https://yourdomain.com/about`
   - `https://yourdomain.com/organization`

2. 브라우저 개발자 도구에서 네트워크 탭을 확인하여 올바른 파일이 로드되는지 확인

## 주의사항

1. **CloudFront 캐시**: 변경사항이 반영되는데 시간이 걸릴 수 있습니다.
2. **Lambda@Edge 제한**: us-east-1 리전에서만 생성 가능합니다.
3. **비용**: Lambda@Edge는 추가 비용이 발생합니다.
4. **SEO**: 기존 `.html` URL에서 새 URL로 301 리다이렉트 설정이 필요할 수 있습니다.

## 문제 해결

### CloudFront 캐시 무효화
```bash
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

### Lambda@Edge 로그 확인
```bash
aws logs describe-log-groups \
  --log-group-name-prefix "/aws/lambda/us-east-1.html-extension-handler"
``` 