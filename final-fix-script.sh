#!/bin/bash

# 최종 수정 스크립트 - 실제로 작동하는 버전
# 사용법: ./final-fix-script.sh

echo "🚀 GitHub Pages 최종 경로 수정 시작..."

# 1단계: 메인 index.html 수정
if [ -f "index.html" ]; then
    echo "📝 메인 index.html 수정 중..."
    cp index.html index.html.backup
    
    # 내부 링크 수정
    perl -i -pe '
        s|href="greeting\.html"|href="/greeting"|g;
        s|href="organization\.html"|href="/organization"|g; 
        s|href="about\.html"|href="/about"|g;
        s|href="business\.html"|href="/business"|g;
        s|href="company\.html"|href="/company"|g;
        s|href="history\.html"|href="/history"|g;
        s|href="location\.html"|href="/location"|g;
        s|href="medical-institutions\.html"|href="/medical-institutions"|g;
        s|href="research\.html"|href="/research"|g;
        s|href="research-detail\.html"|href="/research-detail"|g;
        s|href="research-faq\.html"|href="/research-faq"|g;
        s|href="research-gallery\.html"|href="/research-gallery"|g;
        s|href="research-materials\.html"|href="/research-materials"|g;
        s|href="([1-8])\.html"|href="/$1"|g;
    ' index.html
    echo "✅ 메인 index.html 수정 완료"
fi

# 2단계: 디렉토리 내 파일들 수정
directories=(
    "greeting" "organization" "about" "business" "company" "history" "location"
    "medical-institutions" "research" "research-detail" "research-faq" 
    "research-gallery" "research-materials" "ai-diagnosis-system-register"
    "insurance-claim-system-register" "lab-test-system-register"
    "1" "2" "3" "4" "5" "6" "7" "8"
)

for dir in "${directories[@]}"; do
    if [ -f "${dir}/index.html" ]; then
        echo "📝 처리 중: ${dir}/index.html"
        
        # 백업 생성
        cp "${dir}/index.html" "${dir}/index.html.backup"
        
        # Perl을 사용한 정확한 치환
        perl -i -pe '
            # CSS/JS/이미지 절대 경로 변경
            s|href="\./([^"]+)"|href="/$1"|g;
            s|src="\./([^"]+)"|src="/$1"|g;
            s|href="assets/|href="/assets/|g;
            s|src="assets/|src="/assets/|g;
            
            # 내부 링크 수정
            s|href="index\.html"|href="/"|g;
            s|href="greeting\.html"|href="/greeting"|g;
            s|href="organization\.html"|href="/organization"|g;
            s|href="about\.html"|href="/about"|g;
            s|href="business\.html"|href="/business"|g;
            s|href="company\.html"|href="/company"|g;
            s|href="history\.html"|href="/history"|g;
            s|href="location\.html"|href="/location"|g;
            s|href="medical-institutions\.html"|href="/medical-institutions"|g;
            s|href="research\.html"|href="/research"|g;
            s|href="research-detail\.html"|href="/research-detail"|g;
            s|href="research-faq\.html"|href="/research-faq"|g;
            s|href="research-gallery\.html"|href="/research-gallery"|g;
            s|href="research-materials\.html"|href="/research-materials"|g;
            s|href="([1-8])\.html"|href="/$1"|g;
            
            # 외부 링크 복원
            s|href="/(https?://[^"]+)"|href="$1"|g;
            s|href="/(mailto:[^"]+)"|href="$1"|g;
            s|href="/(tel:[^"]+)"|href="$1"|g;
            s|href="/(#[^"]+)"|href="$1"|g;
            s|src="/(https?://[^"]+)"|src="$1"|g;
        ' "${dir}/index.html"
        
        echo "✅ 완료: ${dir}/index.html"
    else
        echo "❌ 파일 없음: ${dir}/index.html"
    fi
done

echo ""
echo "🎉 모든 파일 수정 완료!"
echo ""
echo "📋 수정 요약:"
echo "- CSS/JS/이미지 경로: 절대 경로로 변경 (/assets/, /jquery/, /kor/ 등)"
echo "- 내부 링크: .html 확장자 제거 (/greeting, /about 등)"
echo "- 외부 링크: 보호 (http, mailto, tel 등)"
echo "- 백업 파일: 각 디렉토리에 .backup으로 저장"
echo ""
echo "🚀 다음 단계:"
echo "git add ."
echo "git commit -m 'Fix all paths for GitHub Pages clean URLs'"
echo "git push origin main"
echo ""
echo "⏰ GitHub Pages 배포 완료까지 1-2분 대기 후 https://kmid.co.kr 확인" 