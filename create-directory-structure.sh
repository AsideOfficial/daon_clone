#!/bin/bash

# GitHub Pages용 디렉토리 구조 생성 스크립트
# 사용법: ./create-directory-structure.sh

echo "GitHub Pages용 디렉토리 구조 생성 중..."

# 처리할 HTML 파일 목록 (index.html 제외)
files=(
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

# 백업 디렉토리 생성
mkdir -p backup_html_files
echo "백업 디렉토리 생성: backup_html_files/"

# 각 HTML 파일을 디렉토리로 변경
for file in "${files[@]}"; do
    if [ -f "${file}.html" ]; then
        echo "처리 중: ${file}.html -> ${file}/index.html"
        
        # 백업 생성
        cp "${file}.html" "backup_html_files/"
        
        # 디렉토리 생성 및 파일 이동
        mkdir -p "${file}"
        mv "${file}.html" "${file}/index.html"
        
        echo "완료: ${file}/"
    else
        echo "파일 없음: ${file}.html"
    fi
done

echo ""
echo "디렉토리 구조 변경 완료!"
echo "이제 다음과 같이 접근할 수 있습니다:"
echo "- kmid.co.kr/greeting"
echo "- kmid.co.kr/organization"
echo "- kmid.co.kr/about"
echo ""
echo "백업 파일들은 backup_html_files/ 디렉토리에 저장되었습니다." 