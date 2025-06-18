# 페이지 스타일 깨짐 문제 해결 가이드

GitHub Pages에서 디렉토리 구조로 변경한 후 스타일이 깨지는 문제를 해결하는 방법입니다.

## 🔍 문제 원인

디렉토리 구조 변경으로 인한 상대 경로 문제:
- **기존**: `greeting.html`에서 `assets/css/main.css` 참조
- **변경 후**: `greeting/index.html`에서 `assets/css/main.css` 참조 → ❌ 경로 없음
- **올바른 경로**: `greeting/index.html`에서 `/assets/css/main.css` 참조 → ✅

## 🚀 빠른 해결 방법

### 1단계: 마스터 스크립트 실행

```bash
# 모든 문제를 한번에 해결
chmod +x fix-github-pages-complete.sh
./fix-github-pages-complete.sh
```

### 2단계: Git 커밋 및 푸시

```bash
git add .
git commit -m "Fix all paths and links for GitHub Pages directory structure"
git push origin main
```

### 3단계: 배포 확인 (1-2분 후)

https://kmid.co.kr 에서 확인

## 🔧 개별 스크립트 사용법

문제가 지속되는 경우 개별 스크립트를 사용하세요:

### 메인 페이지 링크 수정
```bash
chmod +x fix-main-index.sh
./fix-main-index.sh
```

### 서브페이지 asset 경로 수정
```bash
chmod +x fix-all-paths.sh
./fix-all-paths.sh
```

## 📋 수정되는 내용

### CSS/JS/이미지 경로 수정
- `href="./assets/css/main.css"` → `href="/assets/css/main.css"`
- `src="./jquery/js/jquery.min.js"` → `src="/jquery/js/jquery.min.js"`
- `src="./assets/images/logo.png"` → `src="/assets/images/logo.png"`

### 내부 링크 수정
- `href="greeting.html"` → `href="/greeting"`
- `href="organization.html"` → `href="/organization"`
- `href="1.html"` → `href="/1"`

### 메타 태그 수정
- `content="http://www.kmid.co.kr/greeting.html"` → `content="https://kmid.co.kr/greeting"`

## 🧪 로컬 테스트 방법

배포 전 로컬에서 확인:

```bash
# Python 서버
python3 -m http.server 8000

# PHP 서버 (대안)
php -S localhost:8000

# 브라우저에서 확인
# http://localhost:8000
```

## 🛠 문제 해결

### CSS가 여전히 로드되지 않는 경우

1. **브라우저 캐시 삭제**
   - Chrome: Ctrl+Shift+Del (Windows) / Cmd+Shift+Del (Mac)
   - 또는 F12 → Network 탭 → "Disable cache" 체크

2. **경로 확인**
   ```bash
   # 실제 파일 존재 확인
   ls -la assets/css/
   ls -la jquery/css/
   ```

3. **404.html 확인**
   ```bash
   # 404.html 파일이 루트에 있는지 확인
   ls -la 404.html
   ```

### JavaScript 오류 발생 시

1. **브라우저 개발자 도구 확인**
   - F12 → Console 탭에서 오류 메시지 확인

2. **경로 수정 확인**
   ```bash
   # 페이지 소스에서 경로 확인
   grep -n "src=" greeting/index.html
   ```

### 링크가 작동하지 않는 경우

1. **GitHub Pages 빌드 확인**
   - Repository → Actions 탭에서 빌드 상태 확인

2. **_config.yml 확인**
   ```yaml
   # _config.yml 내용 확인
   permalink: pretty
   ```

## 📝 백업 파일

모든 변경사항은 백업됩니다:
- `index.html.backup` - 메인 페이지 백업
- `greeting/index.html.backup` - 각 서브페이지 백업
- `backup_html_files/` - 원본 HTML 파일들

### 백업에서 복원
```bash
# 문제 발생 시 원본으로 복원
cp index.html.backup index.html
cp greeting/index.html.backup greeting/index.html
# ... 기타 페이지들도 동일하게
```

## ✅ 최종 체크리스트

스크립트 실행 후 다음 사항들을 확인하세요:

- [ ] 메인 페이지 로드 확인: `https://kmid.co.kr`
- [ ] 서브페이지 접근 확인: `https://kmid.co.kr/greeting`
- [ ] CSS 스타일 적용 확인
- [ ] 네비게이션 메뉴 작동 확인
- [ ] 이미지 로드 확인
- [ ] JavaScript 기능 확인

## 🆘 추가 도움이 필요한 경우

1. **GitHub Issues 확인**: Repository의 Issues 탭 확인
2. **GitHub Pages 문서**: https://docs.github.com/en/pages
3. **Jekyll 문서**: https://jekyllrb.com/docs/

---

**💡 팁**: 변경사항이 GitHub Pages에 반영되는데 1-2분 정도 소요됩니다. 즉시 반영되지 않더라도 잠시 기다려보세요! 