# GitHub Pages에서 HTML 확장자 제거 가이드

GitHub Pages를 통해 `kmid.co.kr`로 배포하는 환경에서 URL에서 `.html` 확장자를 제거하는 방법입니다.

## 🎯 방법 1: Jekyll 사용 (가장 권장)

GitHub Pages는 Jekyll을 자동으로 지원하므로 가장 깔끔한 해결책입니다.

### 1단계: Jekyll 설정
```bash
# _config.yml 파일이 이미 생성되어 있습니다.
# permalink: pretty 설정으로 깔끔한 URL이 생성됩니다.
```

### 2단계: 페이지에 Front Matter 추가
각 HTML 파일 상단에 다음을 추가:

```yaml
---
layout: default
permalink: /greeting/
---
```

예시: `greeting.html` 파일 상단에 추가
```html
---
layout: default  
permalink: /greeting/
title: "KMID연구소개"
---
<!DOCTYPE html>
<html lang="ko">
<!-- 기존 HTML 내용 -->
```

## 🎯 방법 2: 디렉토리 구조 변경 (즉시 적용)

### 사용법:
```bash
# 디렉토리 구조 변경
chmod +x create-directory-structure.sh
./create-directory-structure.sh

# 링크 수정
chmod +x update-links-for-github-pages.sh  
./update-links-for-github-pages.sh

# Git에 커밋 및 푸시
git add .
git commit -m "Convert to directory structure for clean URLs"
git push origin main
```

### 결과:
- `greeting.html` → `greeting/index.html`
- `about.html` → `about/index.html`
- URL: `kmid.co.kr/greeting`, `kmid.co.kr/about`

## 🎯 방법 3: 404.html을 이용한 리다이렉트

### 이미 생성된 파일:
- `404.html`: 확장자 없는 URL을 `.html`로 자동 리다이렉트

### 작동 방식:
1. 사용자가 `kmid.co.kr/greeting` 접근
2. 파일이 없으므로 `404.html` 실행
3. JavaScript가 `/greeting.html`로 자동 리다이렉트

## 📋 단계별 실행 가이드

### 방법 2 선택 시 (권장):

```bash
# 1. 디렉토리 구조 생성
chmod +x create-directory-structure.sh
./create-directory-structure.sh

# 2. 모든 HTML 파일의 링크 수정
chmod +x update-links-for-github-pages.sh
./update-links-for-github-pages.sh

# 3. 변경사항 커밋
git add .
git commit -m "Remove .html extensions from URLs for GitHub Pages"
git push origin main

# 4. GitHub Pages 재배포 대기 (1-2분)
```

### 방법 1 선택 시 (Jekyll):

각 HTML 파일에 Front Matter 추가가 필요합니다:

**greeting.html 예시:**
```html
---
layout: default
permalink: /greeting/
title: "KMID연구소개"
---
<!DOCTYPE html>
<!-- 기존 HTML 내용 -->
```

## 🔍 테스트 방법

배포 후 다음 URL들이 작동하는지 확인:

- ✅ `https://kmid.co.kr/greeting`
- ✅ `https://kmid.co.kr/organization`  
- ✅ `https://kmid.co.kr/about`
- ✅ `https://kmid.co.kr/research`

## 📝 주의사항

1. **배포 시간**: GitHub Pages는 변경사항 반영에 1-2분 소요
2. **캐시**: 브라우저 캐시 때문에 이전 링크가 남아있을 수 있음 (Ctrl+F5로 새로고침)
3. **기존 링크**: 외부에서 `.html` 확장자로 링크한 경우 404 에러 발생 가능
4. **SEO**: 검색엔진이 새 URL 구조를 인덱싱하는데 시간 소요

## 🛠 문제 해결

### 링크가 작동하지 않는 경우:
```bash
# 1. GitHub Pages 빌드 상태 확인
# Repository → Actions 탭에서 확인

# 2. 브라우저 캐시 삭제
# Ctrl+Shift+Del (Windows) 또는 Cmd+Shift+Del (Mac)

# 3. 404.html 파일 확인
# 404.html 파일이 루트 디렉토리에 있는지 확인
```

### Jekyll 오류 발생 시:
```bash
# _config.yml 문법 확인
# YAML 문법 오류가 있으면 빌드 실패

# 로컬에서 테스트 (선택사항)
bundle install
bundle exec jekyll serve
```

## 🚀 권장 실행 순서

1. **방법 2 실행** (디렉토리 구조 변경)
2. **테스트 및 확인**
3. 문제 없으면 **완료**
4. 문제 있으면 **방법 1 추가 적용** (Jekyll Front Matter)

현재 환경에서는 **방법 2**가 가장 빠르고 확실한 해결책입니다! 