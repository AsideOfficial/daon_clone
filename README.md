# 다온파트너즈 웹사이트 클론

다온파트너즈(http://daonpartner.com/kor/) 웹사이트를 클론한 프로젝트입니다.

## 📋 프로젝트 개요

- **원본 사이트**: http://daonpartner.com/kor/
- **구현 방식**: 순수 HTML, CSS, JavaScript (프레임워크 없음)
- **폰트**: Pretendard 대신 GmarketSans, Noto Sans KR 사용
- **구현 범위**: 메인페이지, 회사소개, 사업영역

## 🎯 구현 목표

원본 웹사이트의 디자인과 레이아웃을 **정확히 동일하게** 재현하되, 내용은 필요에 따라 수정

## 📁 프로젝트 구조

```
daon_clone/
├── index.html              # 메인페이지
├── company.html            # 회사소개
├── business.html           # 사업영역
├── assets/
│   ├── css/
│   │   ├── reset.css       # 리셋 CSS (원본 default.css 기반)
│   │   ├── layout.css      # 레이아웃 CSS (원본 layout.css 기반)
│   │   ├── main.css        # 메인 스타일 (원본 main.css 기반)
│   │   └── responsive.css  # 반응형 CSS
│   ├── js/
│   │   └── main.js         # 메인 JavaScript
│   └── images/             # 이미지 파일들
│       ├── logo.png
│       ├── symbol.png
│       ├── visual-bg.png
│       ├── icon-biz01~08.png
│       ├── seminar01~03.png
│       └── sns-*.png
└── ref/                    # 원본 사이트 다운로드 파일들
    └── daonpartner.com/
```

## 🔧 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, 반응형 디자인
- **JavaScript (ES6+)**: 바닐라 자바스크립트
- **폰트**: 
  - GmarketSans (메인 폰트)
  - Noto Sans KR (한글 폰트)
  - Roboto (영문 폰트)
- **아이콘**: Xeicon


## 📱 반응형 디자인

- **데스크톱**: 1024px 이상
- **태블릿**: 768px ~ 1023px
- **모바일**: 767px 이하

## 🎯 원본 재현도

### 정확히 구현된 부분
- ✅ 전체 레이아웃 구조
- ✅ 헤더 네비게이션 (고정 헤더, 서브메뉴)
- ✅ 비주얼 슬라이드 (컨트롤, 페이징)
- ✅ 사업영역 아이콘 및 레이아웃
- ✅ 푸터 정보 및 스타일
- ✅ 색상 팔레트 (#182346, #317bb5, #009ed7 등)
- ✅ 폰트 크기 및 간격
- ✅ 반응형 브레이크포인트

### 원본 기반 구현
- ✅ CSS 구조 (원본 default.css, layout.css, main.css 기반)
- ✅ JavaScript 기능 (원본 main.js 기반)
- ✅ HTML 구조 (원본 index.html 구조 참조)
- ✅ 이미지 파일들 (원본에서 복사)

