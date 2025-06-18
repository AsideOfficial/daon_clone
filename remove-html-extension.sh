#!/bin/bash

# 모든 HTML 파일에서 내부 링크의 .html 확장자 제거
# 사용법: ./remove-html-extension.sh

echo "HTML 파일에서 .html 확장자 제거 중..."

# 현재 디렉토리의 모든 HTML 파일 처리
for file in *.html; do
    if [ -f "$file" ]; then
        echo "처리 중: $file"
        
        # 백업 파일 생성
        cp "$file" "$file.backup"
        
        # .html 확장자를 가진 내부 링크 찾아서 제거
        # href="파일명.html" -> href="파일명"으로 변경 (외부 링크는 제외)
        sed -i.tmp 's/href="\([^"]*\)\.html"/href="\1"/g' "$file"
        
        # 임시 파일 삭제
        rm "$file.tmp" 2>/dev/null || true
        
        echo "완료: $file"
    fi
done

echo "모든 HTML 파일 처리 완료!"
echo "백업 파일들은 .backup 확장자로 저장되었습니다."
echo ""
echo "변경 사항을 확인한 후 백업 파일을 삭제하려면:"
echo "rm *.backup" 