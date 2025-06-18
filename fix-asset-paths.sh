#!/bin/bash

# 디렉토리 구조 변경 후 asset 경로 수정 스크립트
# 사용법: ./fix-asset-paths.sh

echo "Asset 경로 수정 중..."

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
        
        # 백업 생성
        cp "${dir}/index.html" "${dir}/index.html.backup"
        
        # 상대 경로를 절대 경로로 변경
        sed -i.tmp 's|href="\./|href="/|g' "${dir}/index.html"
        sed -i.tmp 's|src="\./|src="/|g' "${dir}/index.html"
        
        # assets 폴더 경로 수정 (이미 절대 경로가 아닌 경우)
        sed -i.tmp 's|href="assets/|href="/assets/|g' "${dir}/index.html"
        sed -i.tmp 's|src="assets/|src="/assets/|g' "${dir}/index.html"
        
        # 링크 경로 수정 (상대 경로를 절대 경로로)
        sed -i.tmp 's|href="index\.html"|href="/"|g' "${dir}/index.html"
        sed -i.tmp 's|href="\([^"]*\)\.html"|href="/\1"|g' "${dir}/index.html"
        
        # 특수한 경우들 처리
        sed -i.tmp 's|href="/http|href="http|g' "${dir}/index.html"
        sed -i.tmp 's|href="/mailto|href="mailto|g' "${dir}/index.html"
        sed -i.tmp 's|href="/tel|href="tel|g' "${dir}/index.html"
        sed -i.tmp 's|href="/#|href="#|g' "${dir}/index.html"
        
        # 임시 파일 삭제
        rm "${dir}/index.html.tmp" 2>/dev/null || true
        
        echo "완료: ${dir}/index.html"
    else
        echo "파일 없음: ${dir}/index.html"
    fi
done

echo ""
echo "Asset 경로 수정 완료!"
echo "백업 파일들은 각 디렉토리의 index.html.backup으로 저장되었습니다."
echo ""
echo "변경사항을 Git에 커밋하고 푸시하세요:"
echo "git add ."
echo "git commit -m 'Fix asset paths for directory structure'"
echo "git push origin main" 