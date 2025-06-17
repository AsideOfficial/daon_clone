# AWS 배포 가이드 - 한국의료정보데이터 웹사이트

## 사전 준비사항

1. **AWS 계정 생성**
   - https://aws.amazon.com 에서 계정 생성
   - 신용카드 등록 필요 (무료 티어 사용 가능)

2. **AWS CLI 설치 및 설정**
   ```bash
   # macOS
   brew install awscli
   
   # Windows
   # https://aws.amazon.com/cli/ 에서 다운로드
   
   # 설정
   aws configure
   # Access Key ID, Secret Access Key, Region 입력
   ```

## 배포 방법 비교

| 방법 | 난이도 | 비용 | 장점 | 단점 |
|------|--------|------|------|------|
| **AWS Amplify** | ⭐ | 💰 | 자동 CI/CD, SSL, CDN 포함 | 제한적 커스터마이징 |
| **S3 + CloudFront** | ⭐⭐⭐ | 💰💰 | 완전한 제어, 저렴 | 복잡한 설정 |
| **EC2** | ⭐⭐⭐⭐⭐ | 💰💰💰 | 완전한 제어 | 과도함, 비쌈 |

## 방법 1: AWS Amplify (권장)

### 장점
- 가장 간단한 배포
- 자동 SSL 인증서
- Git 연동 자동 배포
- CDN 포함
- 커스텀 도메인 지원

### 단계별 진행

1. **Git 저장소 준비**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/username/repo.git
   git push -u origin main
   ```

2. **AWS Amplify Console 배포**
   - AWS Console → Amplify
   - "New app" → "Host web app"
   - GitHub/GitLab 연결
   - 저장소 선택 → 배포

3. **예상 비용**
   - 월 트래픽 5GB 무료
   - 초과시 GB당 $0.15

## 방법 2: S3 + CloudFront

### 장점
- 매우 저렴한 비용
- 완전한 제어
- 고성능 CDN

### 단계별 진행

1. **S3 버킷 생성 및 배포**
   ```bash
   chmod +x deploy-aws.sh
   ./deploy-aws.sh your-unique-bucket-name
   ```

2. **CloudFront 설정 (선택사항)**
   ```bash
   # cloudfront-setup.json 파일에서 YOUR-BUCKET-NAME 수정 후
   aws cloudfront create-distribution --distribution-config file://cloudfront-setup.json
   ```

3. **예상 비용**
   - S3 저장공간: 월 $0.023/GB
   - CloudFront: 월 1TB 무료

## 방법 3: Amplify CLI

### CLI를 통한 자동 배포
```bash
chmod +x deploy-amplify.sh
./deploy-amplify.sh
```

## 도메인 연결

### Amplify의 경우
1. Amplify Console → Domain management
2. 도메인 추가
3. DNS 레코드 설정

### S3 + CloudFront의 경우
1. Route 53에서 호스팅 영역 생성
2. CloudFront 배포와 연결
3. DNS 레코드 설정

## 지속적 배포 (CI/CD)

### GitHub Actions를 통한 자동 배포
```yaml
# .github/workflows/deploy.yml
name: Deploy to AWS S3
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ap-northeast-2
      - name: Deploy to S3
        run: aws s3 sync . s3://your-bucket-name --delete
```

## 보안 설정

### HTTPS 강제 설정
- Amplify: 자동 설정됨
- CloudFront: ViewerProtocolPolicy를 "redirect-to-https"로 설정

### 환경변수 관리
- EmailJS 키 등 민감한 정보는 환경변수로 관리
- Amplify에서는 Environment variables에서 설정

## 모니터링

### CloudWatch를 통한 모니터링
- 트래픽 모니터링
- 오류 로그 확인
- 성능 메트릭 추적

## 비용 최적화

1. **CloudFront 캐싱 설정**
   - 정적 파일 장기 캐싱
   - 압축 활성화

2. **S3 스토리지 클래스**
   - 자주 접근하지 않는 파일은 IA 클래스 사용

3. **불필요한 리소스 정리**
   - 사용하지 않는 S3 객체 삭제
   - CloudFront 배포 최적화

## 문제 해결

### 일반적인 문제들

1. **403 Forbidden 오류**
   - S3 버킷 정책 확인
   - 퍼블릭 읽기 권한 설정

2. **404 Not Found**
   - 인덱스 문서 설정 확인
   - 파일 경로 확인

3. **SSL 인증서 문제**
   - CloudFront에서 인증서 상태 확인
   - 도메인 검증 완료 확인 