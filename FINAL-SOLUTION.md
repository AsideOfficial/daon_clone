# 🎯 스타일 깨짐 문제 완전 해결 가이드

GitHub Pages에서 디렉토리 구조 변경 후 스타일이 깨지는 문제를 완전히 해결하는 방법입니다.

## 🔍 문제 원인

```
기존: greeting.html에서 ./assets/css/main.css 참조 ✅
변경: greeting/index.html에서 ./assets/css/main.css 참조 ❌ (경로가 ../assets/css/main.css가 되어야 함)
해결: greeting/index.html에서 /assets/css/main.css 참조 ✅ (절대 경로 사용)
```

## 🚀 즉시 해결 방법

### 방법 1: 최종 스크립트 실행 (권장)

```bash
# 1. 최종 수정 스크립트 실행
chmod +x final-fix-script.sh
./final-fix-script.sh

# 2. Git 커밋 및 푸시
git add .
git commit -m "Fix all paths for GitHub Pages clean URLs"
git push origin main

# 3. 1-2분 후 확인
# https://kmid.co.kr
```

### 방법 2: 수동 수정 (확실한 방법)

만약 스크립트가 작동하지 않으면 수동으로 수정:

#### 1) 각 디렉토리의 index.html 수정

```bash
# greeting/index.html 예시
vi greeting/index.html

# 다음과 같이 수정:
# href="./jquery/css/main.css" → href="/jquery/css/main.css"
# src="./assets/js/main.js" → src="/assets/js/main.js"
# href="greeting.html" → href="/greeting"
```

#### 2) 정규표현식으로 일괄 수정

```bash
# 각 디렉토리에서 실행
find . -name "index.html" -path "*/index.html" -exec sed -i 's|href="\./|href="/|g' {} \;
find . -name "index.html" -path "*/index.html" -exec sed -i 's|src="\./|src="/|g' {} \;
find . -name "index.html" -path "*/index.html" -exec sed -i 's|href="assets/|href="/assets/|g' {} \;
find . -name "index.html" -path "*/index.html" -exec sed -i 's|src="assets/|src="/assets/|g' {} \;
```

## 🔧 수정 대상 경로들

### CSS 파일
```html
<!-- 기존 (깨짐) -->
<link rel="stylesheet" href="./assets/css/main.css" />
<link rel="stylesheet" href="./jquery/css/slick.css" />

<!-- 수정 후 (정상) -->
<link rel="stylesheet" href="/assets/css/main.css" />
<link rel="stylesheet" href="/jquery/css/slick.css" />
```

### JavaScript 파일
```html
<!-- 기존 (깨짐) -->
<script src="./jquery/js/jquery.min.js"></script>
<script src="./js/global.js"></script>

<!-- 수정 후 (정상) -->
<script src="/jquery/js/jquery.min.js"></script>
<script src="/js/global.js"></script>
```

### 이미지 파일
```html
<!-- 기존 (깨짐) -->
<img src="./assets/images/logo.png" alt="로고">
<img src="./kor/img/sub/visual.jpg" alt="비주얼">

<!-- 수정 후 (정상) -->
<img src="/assets/images/logo.png" alt="로고">
<img src="/kor/img/sub/visual.jpg" alt="비주얼">
```

### 내부 링크
```html
<!-- 기존 -->
<a href="greeting.html">회사소개</a>
<a href="research.html">연구현황</a>

<!-- 수정 후 -->
<a href="/greeting">회사소개</a>
<a href="/research">연구현황</a>
```

## 🧪 테스트 방법

### 로컬 테스트
```bash
# Python 서버로 테스트
python3 -m http.server 8000

# 브라우저에서 확인
http://localhost:8000/greeting
```

### 배포 후 확인 사항
- [ ] 메인 페이지: https://kmid.co.kr ✅
- [ ] 서브 페이지: https://kmid.co.kr/greeting ✅
- [ ] CSS 로딩: 스타일 정상 적용 ✅
- [ ] JS 기능: 메뉴, 슬라이더 작동 ✅ 
- [ ] 이미지: 로고, 배경 이미지 표시 ✅
- [ ] 내부 링크: 페이지 간 이동 ✅

## 🛠 문제 해결

### CSS가 로드되지 않는 경우
```bash
# 1. 브라우저 개발자 도구 (F12) → Network 탭
# 2. 빨간색으로 표시되는 파일 경로 확인
# 3. 해당 파일의 실제 경로와 비교

# 예시: /assets/css/main.css 404 에러
# → assets 폴더가 루트에 있는지 확인
ls -la assets/css/main.css
```

### JavaScript 오류 발생 시
```bash
# 1. 브라우저 개발자 도구 (F12) → Console 탭
# 2. 오류 메시지 확인
# 3. jQuery 같은 기본 라이브러리부터 확인

# 예시: $ is not defined
# → jQuery 경로 확인
curl -I https://kmid.co.kr/jquery/js/jquery-1.11.2.min.js
```

### 이미지가 표시되지 않는 경우
```bash
# 이미지 파일 경로 확인
ls -la assets/images/
ls -la kor/img/

# 이미지 URL 직접 확인
curl -I https://kmid.co.kr/assets/images/logo.png
```

## 📝 백업 및 복원

### 백업 파일 위치
```
index.html.backup                 # 메인 페이지 백업
greeting/index.html.backup        # 각 서브페이지 백업
organization/index.html.backup
about/index.html.backup
...
```

### 문제 발생 시 복원
```bash
# 특정 페이지 복원
cp greeting/index.html.backup greeting/index.html

# 전체 복원
for dir in greeting organization about business company history location medical-institutions research research-detail research-faq research-gallery research-materials 1 2 3 4 5 6 7 8; do
    if [ -f "$dir/index.html.backup" ]; then
        cp "$dir/index.html.backup" "$dir/index.html"
    fi
done
```

## 🎉 최종 확인

수정 완료 후 다음이 모두 작동하는지 확인:

1. **메인 페이지**: https://kmid.co.kr
2. **회사소개**: https://kmid.co.kr/greeting  
3. **조직도**: https://kmid.co.kr/organization
4. **연구영역**: https://kmid.co.kr/1 ~ https://kmid.co.kr/8
5. **연구현황**: https://kmid.co.kr/research

모든 페이지에서 CSS 스타일이 정상적으로 적용되고, 네비게이션 메뉴가 작동하며, 이미지가 표시되어야 합니다.

---

**💡 중요**: 변경사항이 GitHub Pages에 반영되는데 1-2분 소요됩니다. 즉시 반영되지 않아도 잠시 기다려보세요! 