#!/bin/bash

# 메인 index.html 파일 링크 수정 스크립트
# 사용법: ./fix-main-index.sh

echo "메인 index.html 파일 링크 수정 중..."

if [ -f "index.html" ]; then
    echo "처리 중: index.html"
    
    # 백업 생성
    cp "index.html" "index.html.backup"
    
    # .html 확장자 제거 (내부 링크만)
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
    
    # 숫자 페이지 처리
    for i in {1..8}; do
        sed -i.tmp "s|href=\"${i}\.html\"|href=\"/${i}\"|g" "index.html"
    done
    
    # 시스템 등록 페이지
    sed -i.tmp 's|href="ai-diagnosis-system-register\.html"|href="/ai-diagnosis-system-register"|g' "index.html"
    sed -i.tmp 's|href="insurance-claim-system-register\.html"|href="/insurance-claim-system-register"|g' "index.html"
    sed -i.tmp 's|href="lab-test-system-register\.html"|href="/lab-test-system-register"|g' "index.html"
    
    # 임시 파일 삭제
    rm "index.html.tmp" 2>/dev/null || true
    
    echo "완료: index.html"
else
    echo "index.html 파일을 찾을 수 없습니다."
fi

echo ""
echo "메인 index.html 파일 수정 완료!"
echo "백업 파일은 index.html.backup으로 저장되었습니다." 