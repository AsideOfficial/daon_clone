# 캠페인 팝업 가이드

## 개요
메인 페이지에 캠페인 포스터를 팝업으로 띄우는 기능입니다. 페이지 로드 후 2초 후에 자동으로 나타나며, 사용자가 "오늘 하루 보지 않기"를 체크하면 해당 날짜에는 더 이상 표시되지 않습니다.

## 주요 기능

### 1. 자동 팝업 표시
- 페이지 로드 후 2초 후 자동 표시
- 부드러운 페이드인 애니메이션 효과

### 2. 오늘 하루 보지 않기
- 로컬 스토리지를 사용하여 날짜별 관리
- 체크 후 팝업 닫으면 당일 다시 표시되지 않음

### 3. 반응형 디자인
- 데스크톱, 태블릿, 모바일 모든 화면에 최적화
- 모바일에서는 세로 버튼 배치로 변경

### 4. 다양한 닫기 방법
- X 버튼 클릭
- 팝업 외부 오버레이 클릭
- ESC 키 누르기
- 캠페인 버튼 클릭 시 자동 닫기

### 5. Google Analytics 추적
- 팝업 노출 이벤트
- 팝업 닫기 이벤트
- 오늘 하루 보지 않기 이벤트
- 캠페인 버튼 클릭 이벤트

## 설정 및 커스터마이징

### 이미지 교체
캠페인 포스터 이미지를 교체하려면:
1. `assets/images/campaign-poster.png` 파일을 원하는 이미지로 교체
2. 권장 크기: 600x400 픽셀
3. 파일 형식: PNG 또는 JPG

### 텍스트 수정
`index.html` 파일에서 다음 부분을 수정:
```html
<h3 class="campaign-title">특별 캠페인 안내</h3>
<p class="campaign-description">
    의료정보화 연구를 위한 특별 이벤트가 진행중입니다.<br>
    더 나은 의료 서비스를 위한 여정에 함께해주세요.
</p>
```

### 버튼 링크 수정
캠페인 버튼의 링크를 수정하려면:
```html
<div class="campaign-buttons">
    <a href="/apply" class="campaign-btn campaign-btn-primary">자세히 보기</a>
    <a href="/greeting" class="campaign-btn campaign-btn-secondary">회사소개</a>
</div>
```

### 팝업 표시 시간 조절
기본 2초 후 표시되는 설정을 변경하려면:
```javascript
// 페이지 로드 완료 후 팝업 표시 (2초 후)
setTimeout(function() {
    if (shouldShowPopup()) {
        showCampaignPopup();
    }
}, 2000); // 이 값을 원하는 시간(밀리초)으로 변경
```

### 스타일 커스터마이징
CSS 스타일을 수정하여 색상, 크기, 애니메이션 등을 변경할 수 있습니다:
- `.campaign-popup-overlay`: 팝업 배경
- `.campaign-popup-content`: 팝업 컨테이너
- `.campaign-btn-primary`: 주요 버튼 스타일
- `.campaign-btn-secondary`: 보조 버튼 스타일

## 개발자 도구

개발 및 테스트를 위한 콘솔 명령어:

### 팝업 강제 표시
```javascript
showCampaignPopup();
```

### 팝업 강제 닫기
```javascript
hideCampaignPopup();
```

### 오늘 하루 보지 않기 설정 초기화
```javascript
resetCampaignPopup();
```

## 호환성
- jQuery 3.6.0 이상
- 모든 모던 브라우저 지원
- Internet Explorer 11 이상
- 모바일 브라우저 지원

## 성능 최적화
- 이미지 lazy loading 적용
- CSS 애니메이션으로 부드러운 효과
- 로컬 스토리지 사용으로 서버 부하 없음
- 가벼운 jQuery 기반으로 빠른 로딩

## 문제 해결

### 팝업이 표시되지 않을 때
1. 브라우저 콘솔에서 JavaScript 오류 확인
2. jQuery 라이브러리 로딩 확인
3. `shouldShowPopup()` 함수 반환값 확인

### 이미지가 표시되지 않을 때
1. 이미지 파일 경로 확인
2. 파일 권한 확인
3. 이미지 파일 형식 확인 (PNG, JPG)

### 모바일에서 레이아웃이 깨질 때
1. 뷰포트 메타 태그 확인
2. CSS 미디어 쿼리 확인
3. 브라우저 호환성 확인

## 보안 고려사항
- XSS 방지를 위한 텍스트 이스케이프 처리
- 로컬 스토리지 사용으로 개인정보 미수집
- HTTPS 환경에서 사용 권장 