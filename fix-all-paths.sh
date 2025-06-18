#!/bin/bash

# 모든 경로 문제를 해결하는 포괄적인 스크립트
# 사용법: ./fix-all-paths.sh

echo "모든 경로 문제 해결 중..."

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
        
        # 1. CSS 파일 경로 수정
        sed -i.tmp 's|href="\./jquery/|href="/jquery/|g' "${dir}/index.html"
        sed -i.tmp 's|href="\./kor/|href="/kor/|g' "${dir}/index.html"
        sed -i.tmp 's|href="\./js/|href="/js/|g' "${dir}/index.html"
        sed -i.tmp 's|href="\./css/|href="/css/|g' "${dir}/index.html"
        sed -i.tmp 's|href="\./assets/|href="/assets/|g' "${dir}/index.html"
        sed -i.tmp 's|href="assets/|href="/assets/|g' "${dir}/index.html"
        
        # 2. JavaScript 파일 경로 수정
        sed -i.tmp 's|src="\./jquery/|src="/jquery/|g' "${dir}/index.html"
        sed -i.tmp 's|src="\./js/|src="/js/|g' "${dir}/index.html"
        sed -i.tmp 's|src="\./ease_src/|src="/ease_src/|g' "${dir}/index.html"
        sed -i.tmp 's|src="\./assets/|src="/assets/|g' "${dir}/index.html"
        sed -i.tmp 's|src="assets/|src="/assets/|g' "${dir}/index.html"
        
        # 3. 이미지 파일 경로 수정
        sed -i.tmp 's|src="\./kor/img/|src="/kor/img/|g' "${dir}/index.html"
        sed -i.tmp 's|src="\./assets/img/|src="/assets/img/|g' "${dir}/index.html"
        sed -i.tmp 's|src="\./assets/images/|src="/assets/images/|g' "${dir}/index.html"
        sed -i.tmp 's|src="assets/img/|src="/assets/img/|g' "${dir}/index.html"
        sed -i.tmp 's|src="assets/images/|src="/assets/images/|g' "${dir}/index.html"
        
        # 4. 폰트 파일 경로 수정
        sed -i.tmp 's|href="\./assets/font/|href="/assets/font/|g' "${dir}/index.html"
        sed -i.tmp 's|href="assets/font/|href="/assets/font/|g' "${dir}/index.html"
        
        # 5. 내부 링크 수정
        sed -i.tmp 's|href="index\.html"|href="/"|g' "${dir}/index.html"
        sed -i.tmp 's|href="\([^"]*\)\.html"|href="/\1"|g' "${dir}/index.html"
        
        # 6. 특수한 경우들 복원
        sed -i.tmp 's|href="/http|href="http|g' "${dir}/index.html"
        sed -i.tmp 's|href="/https|href="https|g' "${dir}/index.html"
        sed -i.tmp 's|href="/mailto|href="mailto|g' "${dir}/index.html"
        sed -i.tmp 's|href="/tel|href="tel|g' "${dir}/index.html"
        sed -i.tmp 's|href="/#|href="#|g' "${dir}/index.html"
        sed -i.tmp 's|src="/http|src="http|g' "${dir}/index.html"
        sed -i.tmp 's|src="/https|src="https|g' "${dir}/index.html"
        
        # 7. 메타 태그의 URL 수정 (필요한 경우)
        sed -i.tmp "s|content=\"http://www\.kmid\.co\.kr/${dir}\.html\"|content=\"https://kmid.co.kr/${dir}\"|g" "${dir}/index.html"
        
        # 임시 파일 삭제
        rm "${dir}/index.html.tmp" 2>/dev/null || true
        
        echo "완료: ${dir}/index.html"
    else
        echo "파일 없음: ${dir}/index.html"
    fi
done

echo ""
echo "모든 경로 문제 해결 완료!"
echo "백업 파일들은 각 디렉토리의 index.html.backup으로 저장되었습니다."
echo ""
echo "테스트를 위해 로컬에서 확인해보세요:"
echo "python3 -m http.server 8000"
echo "또는 PHP 서버: php -S localhost:8000"
echo ""
echo "문제없으면 Git에 커밋하고 푸시하세요:"
echo "git add ."
echo "git commit -m 'Fix all asset and link paths for directory structure'"
echo "git push origin main" 