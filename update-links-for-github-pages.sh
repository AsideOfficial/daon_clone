#!/bin/bash

# GitHub Pages용 링크 수정 스크립트
# 사용법: ./update-links-for-github-pages.sh

echo "GitHub Pages용 HTML 링크 수정 중..."

# 백업 디렉토리 생성
mkdir -p backup_original_files
echo "백업 디렉토리 생성: backup_original_files/"

# 현재 디렉토리의 모든 HTML 파일 처리
for file in *.html; do
    if [ -f "$file" ]; then
        echo "처리 중: $file"
        
        # 백업 파일 생성
        cp "$file" "backup_original_files/"
        
        # .html 확장자를 가진 내부 링크 찾아서 제거
        # href="파일명.html" -> href="파일명"으로 변경
        sed -i.tmp 's/href="\([^"]*\)\.html"/href="\/\1"/g' "$file"
        
        # 특별한 경우들 처리
        # index.html은 루트로 변경
        sed -i.tmp 's/href="\/index"/href="\/"/g' "$file"
        
        # 외부 링크나 앵커 링크는 원래대로 복원 (http, https, mailto, tel, #으로 시작하는 것들)
        sed -i.tmp 's/href="\/\(http[s]*:\/\/[^"]*\)"/href="\1"/g' "$file"
        sed -i.tmp 's/href="\/\(mailto:[^"]*\)"/href="\1"/g' "$file"
        sed -i.tmp 's/href="\/\(tel:[^"]*\)"/href="\1"/g' "$file"
        sed -i.tmp 's/href="\/\(#[^"]*\)"/href="\1"/g' "$file"
        
        # 임시 파일 삭제
        rm "$file.tmp" 2>/dev/null || true
        
        echo "완료: $file"
    fi
done

echo ""
echo "모든 HTML 파일 링크 수정 완료!"
echo "백업 파일들은 backup_original_files/ 디렉토리에 저장되었습니다."
echo ""
echo "이제 다음과 같은 링크들이 작동합니다:"
echo "- kmid.co.kr/greeting"
echo "- kmid.co.kr/organization"
echo "- kmid.co.kr/about"
echo ""
echo "변경사항을 Git에 커밋하고 푸시하세요:"
echo "git add ."
echo "git commit -m 'Remove .html extensions from URLs'"
echo "git push origin main" 