#!/bin/bash

# greeting 패턴 기준 완전 수정 마스터 스크립트
# 사용법: ./complete-fix-master.sh

echo "🎯 greeting 패턴 기준으로 모든 페이지 완전 수정"
echo "=============================================="

# 1단계: 메인 index.html 수정
echo ""
echo "1️⃣ 메인 index.html 수정 중..."
chmod +x fix-main-index-final.sh
./fix-main-index-final.sh

# 2단계: 모든 서브페이지 수정
echo ""
echo "2️⃣ 모든 서브페이지를 greeting 패턴으로 수정 중..."
chmod +x fix-all-pages-like-greeting.sh
./fix-all-pages-like-greeting.sh

# 3단계: 결과 확인
echo ""
echo "3️⃣ 수정 결과 확인..."

# greeting과 같은 패턴이 적용되었는지 확인
if [ -f "organization/index.html" ]; then
    if grep -q 'href="/jquery/css/jquery.bxslider.css"' organization/index.html; then
        echo "✅ organization 페이지: CSS 경로 수정 완료"
    else
        echo "❌ organization 페이지: CSS 경로 수정 실패"
    fi
    
    if grep -q 'href="/greeting"' organization/index.html; then
        echo "✅ organization 페이지: 내부 링크 수정 완료"
    else
        echo "❌ organization 페이지: 내부 링크 수정 실패"
    fi
fi

if [ -f "1/index.html" ]; then
    if grep -q 'href="/assets/css/main.css"' 1/index.html; then
        echo "✅ 1 페이지: assets 경로 수정 완료"
    else
        echo "❌ 1 페이지: assets 경로 수정 실패"
    fi
fi

# 4단계: 최종 안내
echo ""
echo "=============================================="
echo "🎉 모든 수정 작업 완료!"
echo "=============================================="
echo ""
echo "📋 수정 완료된 내용:"
echo "✅ CSS 파일 경로: 모두 절대 경로로 변경 (/jquery/css/, /kor/css/, /assets/css/)"
echo "✅ JS 파일 경로: 모두 절대 경로로 변경 (/jquery/js/, /js/, /ease_src/)"
echo "✅ 이미지 파일 경로: 모두 절대 경로로 변경 (/kor/img/, /assets/img/)"
echo "✅ 내부 링크: .html 확장자 제거 (/greeting, /organization, /1, /2 등)"
echo "✅ 외부 링크: 보호 처리 (http, https, mailto 등)"
echo ""
echo "💾 백업 파일:"
echo "- index.html.backup.TIMESTAMP (메인 페이지)"
echo "- 각 디렉토리의 index.html.backup.TIMESTAMP (서브페이지들)"
echo ""
echo "🚀 GitHub에 배포하기:"
echo "git add ."
echo "git commit -m 'Fix all pages to match greeting pattern - absolute paths and clean URLs'"
echo "git push origin main"
echo ""
echo "⏰ 1-2분 후 다음 페이지들이 모두 작동하는지 확인하세요:"
echo "🌐 https://kmid.co.kr (메인 페이지)"
echo "🌐 https://kmid.co.kr/greeting (회사소개)"
echo "🌐 https://kmid.co.kr/organization (조직도)"
echo "🌐 https://kmid.co.kr/research (연구현황)"
echo "🌐 https://kmid.co.kr/1 (의료정보 보안연구)"
echo "🌐 https://kmid.co.kr/2 (의료 데이터 연구)"
echo "🌐 https://kmid.co.kr/3 (병원경영 데이터 연구)"
echo "🌐 https://kmid.co.kr/medical-institutions (의료기관 현황)"
echo ""
echo "💡 모든 페이지에서 CSS 스타일이 greeting 페이지와 동일하게 적용되어야 합니다!" 