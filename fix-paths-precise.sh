#!/bin/bash

# 정확한 경로 수정 스크립트 - 모든 상대 경로를 절대 경로로 변경
# 사용법: ./fix-paths-precise.sh

echo "정확한 경로 수정 시작..."

# 처리할 디렉토리 목록
directories=(
    "greeting"
    "organization" 
    "about"
    "business"
    "company"
    "history"
    "location"
    "medical-institutions"
    "research"
    "research-detail"
    "research-faq"
    "research-gallery"
    "research-materials"
    "ai-diagnosis-system-register"
    "insurance-claim-system-register"
    "lab-test-system-register"
    "1" "2" "3" "4" "5" "6" "7" "8"
)

# 각 디렉토리의 index.html 파일 처리
for dir in "${directories[@]}"; do
    if [ -f "${dir}/index.html" ]; then
        echo "처리 중: ${dir}/index.html"
        
        # 백업 생성 (이전 백업이 있으면 새로운 백업 생성)
        cp "${dir}/index.html" "${dir}/index.html.backup.$(date +%Y%m%d_%H%M%S)"
        
        # 1. 모든 상대 경로를 절대 경로로 변경
        # CSS 파일 경로
        sed -i '' 's|href="\./jquery/|href="/jquery/|g' "${dir}/index.html"
        sed -i '' 's|href="\./kor/|href="/kor/|g' "${dir}/index.html"
        sed -i '' 's|href="\./js/|href="/js/|g' "${dir}/index.html"
        sed -i '' 's|href="\./css/|href="/css/|g' "${dir}/index.html"
        sed -i '' 's|href="\./assets/|href="/assets/|g' "${dir}/index.html"
        sed -i '' 's|href="assets/|href="/assets/|g' "${dir}/index.html"
        
        # JavaScript 파일 경로
        sed -i '' 's|src="\./jquery/|src="/jquery/|g' "${dir}/index.html"
        sed -i '' 's|src="\./js/|src="/js/|g' "${dir}/index.html"
        sed -i '' 's|src="\./ease_src/|src="/ease_src/|g' "${dir}/index.html"
        sed -i '' 's|src="\./assets/|src="/assets/|g' "${dir}/index.html"
        sed -i '' 's|src="assets/|src="/assets/|g' "${dir}/index.html"
        
        # 이미지 파일 경로
        sed -i '' 's|src="\./kor/img/|src="/kor/img/|g' "${dir}/index.html"
        sed -i '' 's|src="\./assets/img/|src="/assets/img/|g' "${dir}/index.html"
        sed -i '' 's|src="\./assets/images/|src="/assets/images/|g' "${dir}/index.html"
        sed -i '' 's|src="assets/img/|src="/assets/img/|g' "${dir}/index.html"
        sed -i '' 's|src="assets/images/|src="/assets/images/|g' "${dir}/index.html"
        
        # 2. 내부 링크 수정 (HTML -> 디렉토리 구조)
        sed -i '' 's|href="index\.html"|href="/"|g' "${dir}/index.html"
        sed -i '' 's|href="greeting\.html"|href="/greeting"|g' "${dir}/index.html"
        sed -i '' 's|href="organization\.html"|href="/organization"|g' "${dir}/index.html"
        sed -i '' 's|href="about\.html"|href="/about"|g' "${dir}/index.html"
        sed -i '' 's|href="business\.html"|href="/business"|g' "${dir}/index.html"
        sed -i '' 's|href="company\.html"|href="/company"|g' "${dir}/index.html"
        sed -i '' 's|href="history\.html"|href="/history"|g' "${dir}/index.html"
        sed -i '' 's|href="location\.html"|href="/location"|g' "${dir}/index.html"
        sed -i '' 's|href="medical-institutions\.html"|href="/medical-institutions"|g' "${dir}/index.html"
        sed -i '' 's|href="research\.html"|href="/research"|g' "${dir}/index.html"
        sed -i '' 's|href="research-detail\.html"|href="/research-detail"|g' "${dir}/index.html"
        sed -i '' 's|href="research-faq\.html"|href="/research-faq"|g' "${dir}/index.html"
        sed -i '' 's|href="research-gallery\.html"|href="/research-gallery"|g' "${dir}/index.html"
        sed -i '' 's|href="research-materials\.html"|href="/research-materials"|g' "${dir}/index.html"
        
        # 숫자 페이지 처리
        for i in {1..8}; do
            sed -i '' "s|href=\"${i}\.html\"|href=\"/${i}\"|g" "${dir}/index.html"
        done
        
        # 3. 특수한 경우들 복원 (외부 링크, 앵커 등)
        sed -i '' 's|href="/http|href="http|g' "${dir}/index.html"
        sed -i '' 's|href="/https|href="https|g' "${dir}/index.html"
        sed -i '' 's|href="/mailto|href="mailto|g' "${dir}/index.html"
        sed -i '' 's|href="/tel|href="tel|g' "${dir}/index.html"
        sed -i '' 's|href="/#|href="#|g' "${dir}/index.html"
        sed -i '' 's|src="/http|src="http|g' "${dir}/index.html"
        sed -i '' 's|src="/https|src="https|g' "${dir}/index.html"
        
        echo "완료: ${dir}/index.html"
    else
        echo "파일 없음: ${dir}/index.html"
    fi
done

echo ""
echo "정확한 경로 수정 완료!"
echo "백업 파일들은 각 디렉토리에 타임스탬프와 함께 저장되었습니다." 