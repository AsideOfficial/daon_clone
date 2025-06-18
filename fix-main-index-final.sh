#!/bin/bash

# 메인 index.html 파일을 greeting 패턴과 일치하도록 수정
# 사용법: ./fix-main-index-final.sh

echo "📝 메인 index.html 수정 중..."

if [ -f "index.html" ]; then
    # 백업 생성
    cp index.html index.html.backup.$(date +%Y%m%d_%H%M%S)
    
    # 내부 링크 수정 (.html 제거)
    sed -i.tmp 's|href="greeting\.html"|href="/greeting"|g' "index.html"
    sed -i.tmp 's|href="organization\.html"|href="/organization"|g' "index.html"
    sed -i.tmp 's|href="about\.html"|href="/about"|g' "index.html"
    sed -i.tmp 's|href="business\.html"|href="/business"|g' "index.html"
    sed -i.tmp 's|href="company\.html"|href="/company"|g' "index.html"
    sed -i.tmp 's|href="history\.html"|href="/history"|g' "index.html"
    sed -i.tmp 's|href="location\.html"|href="/location"|g' "index.html"
    sed -i.tmp 's|href="medical-institutions\.html"|href="/medical-institutions"|g' "index.html"
    sed -i.tmp 's|href="research\.html"|href="/research"|g' "index.html"
    sed -i.tmp 's|href="research-detail\.html"|href="/research-detail"|g' "index.html"
    sed -i.tmp 's|href="research-faq\.html"|href="/research-faq"|g' "index.html"
    sed -i.tmp 's|href="research-gallery\.html"|href="/research-gallery"|g' "index.html"
    sed -i.tmp 's|href="research-materials\.html"|href="/research-materials"|g' "index.html"
    sed -i.tmp 's|href="ai-diagnosis-system-register\.html"|href="/ai-diagnosis-system-register"|g' "index.html"
    sed -i.tmp 's|href="insurance-claim-system-register\.html"|href="/insurance-claim-system-register"|g' "index.html"
    sed -i.tmp 's|href="lab-test-system-register\.html"|href="/lab-test-system-register"|g' "index.html"
    
    # 숫자 페이지 처리
    for i in {1..8}; do
        sed -i.tmp "s|href=\"${i}\.html\"|href=\"/${i}\"|g" "index.html"
    done
    
    # 임시 파일 삭제
    rm "index.html.tmp" 2>/dev/null || true
    
    echo "✅ 메인 index.html 수정 완료"
else
    echo "❌ index.html 파일을 찾을 수 없습니다."
fi

echo ""
echo "📋 수정된 내용:"
echo "- 모든 내부 링크에서 .html 확장자 제거"
echo "- /greeting, /organization, /research 등으로 변경"
echo "- 숫자 페이지도 /1, /2, /3 등으로 변경" 