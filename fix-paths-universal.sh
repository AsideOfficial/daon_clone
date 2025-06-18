#!/bin/bash

# 범용 경로 수정 스크립트 - 모든 OS에서 작동
# 사용법: ./fix-paths-universal.sh

echo "범용 경로 수정 시작..."

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

# OS 판별
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    SED_CMD="sed -i ''"
else
    # Linux
    SED_CMD="sed -i"
fi

# 각 디렉토리의 index.html 파일 처리
for dir in "${directories[@]}"; do
    if [ -f "${dir}/index.html" ]; then
        echo "처리 중: ${dir}/index.html"
        
        # 백업 생성
        cp "${dir}/index.html" "${dir}/index.html.backup.$(date +%Y%m%d_%H%M%S)"
        
        # 임시 파일을 사용한 안전한 처리
        tmp_file="${dir}/index_temp.html"
        
        # 1. CSS 파일 경로 수정
        cat "${dir}/index.html" | \
        sed 's|href="\./jquery/|href="/jquery/|g' | \
        sed 's|href="\./kor/|href="/kor/|g' | \
        sed 's|href="\./js/|href="/js/|g' | \
        sed 's|href="\./css/|href="/css/|g' | \
        sed 's|href="\./assets/|href="/assets/|g' | \
        sed 's|href="assets/|href="/assets/|g' | \
        \
        sed 's|src="\./jquery/|src="/jquery/|g' | \
        sed 's|src="\./js/|src="/js/|g' | \
        sed 's|src="\./ease_src/|src="/ease_src/|g' | \
        sed 's|src="\./assets/|src="/assets/|g' | \
        sed 's|src="assets/|src="/assets/|g' | \
        \
        sed 's|src="\./kor/img/|src="/kor/img/|g' | \
        sed 's|src="\./assets/img/|src="/assets/img/|g' | \
        sed 's|src="\./assets/images/|src="/assets/images/|g' | \
        sed 's|src="assets/img/|src="/assets/img/|g' | \
        sed 's|src="assets/images/|src="/assets/images/|g' | \
        \
        sed 's|href="index\.html"|href="/"|g' | \
        sed 's|href="greeting\.html"|href="/greeting"|g' | \
        sed 's|href="organization\.html"|href="/organization"|g' | \
        sed 's|href="about\.html"|href="/about"|g' | \
        sed 's|href="business\.html"|href="/business"|g' | \
        sed 's|href="company\.html"|href="/company"|g' | \
        sed 's|href="history\.html"|href="/history"|g' | \
        sed 's|href="location\.html"|href="/location"|g' | \
        sed 's|href="medical-institutions\.html"|href="/medical-institutions"|g' | \
        sed 's|href="research\.html"|href="/research"|g' | \
        sed 's|href="research-detail\.html"|href="/research-detail"|g' | \
        sed 's|href="research-faq\.html"|href="/research-faq"|g' | \
        sed 's|href="research-gallery\.html"|href="/research-gallery"|g' | \
        sed 's|href="research-materials\.html"|href="/research-materials"|g' | \
        sed 's|href="1\.html"|href="/1"|g' | \
        sed 's|href="2\.html"|href="/2"|g' | \
        sed 's|href="3\.html"|href="/3"|g' | \
        sed 's|href="4\.html"|href="/4"|g' | \
        sed 's|href="5\.html"|href="/5"|g' | \
        sed 's|href="6\.html"|href="/6"|g' | \
        sed 's|href="7\.html"|href="/7"|g' | \
        sed 's|href="8\.html"|href="/8"|g' | \
        \
        sed 's|href="/http|href="http|g' | \
        sed 's|href="/https|href="https|g' | \
        sed 's|href="/mailto|href="mailto|g' | \
        sed 's|href="/tel|href="tel|g' | \
        sed 's|href="/#|href="#|g' | \
        sed 's|src="/http|src="http|g' | \
        sed 's|src="/https|src="https|g' > "$tmp_file"
        
        # 원본 파일 교체
        mv "$tmp_file" "${dir}/index.html"
        
        echo "완료: ${dir}/index.html"
    else
        echo "파일 없음: ${dir}/index.html"
    fi
done

echo ""
echo "범용 경로 수정 완료!"
echo "백업 파일들은 각 디렉토리에 타임스탬프와 함께 저장되었습니다."
echo ""
echo "이제 Git에 커밋하고 푸시하세요:"
echo "git add ."
echo "git commit -m 'Fix all asset paths for GitHub Pages'"
echo "git push origin main" 