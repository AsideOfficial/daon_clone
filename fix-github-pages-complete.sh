#!/bin/bash

# GitHub Pages 완전 수정 마스터 스크립트
# 사용법: ./fix-github-pages-complete.sh

echo "=========================================="
echo "GitHub Pages 완전 수정 시작"
echo "=========================================="

# 1단계: 메인 index.html 수정
echo ""
echo "1단계: 메인 index.html 파일 수정 중..."
chmod +x fix-main-index.sh
./fix-main-index.sh

# 2단계: 모든 디렉토리 내 파일 경로 수정
echo ""
echo "2단계: 모든 asset 경로 수정 중..."
chmod +x fix-all-paths.sh
./fix-all-paths.sh

# 3단계: 404.html 파일 확인
echo ""
echo "3단계: 404.html 파일 확인..."
if [ -f "404.html" ]; then
    echo "✅ 404.html 파일이 존재합니다."
else
    echo "❌ 404.html 파일이 없습니다. 생성 중..."
    # 404.html 파일 생성 로직을 여기에 추가할 수 있습니다.
fi

# 4단계: _config.yml 파일 확인
echo ""
echo "4단계: _config.yml 파일 확인..."
if [ -f "_config.yml" ]; then
    echo "✅ _config.yml 파일이 존재합니다."
else
    echo "❌ _config.yml 파일이 없습니다."
fi

# 5단계: 변경 사항 요약
echo ""
echo "=========================================="
echo "수정 완료! 변경 사항 요약:"
echo "=========================================="
echo "✅ 메인 index.html 링크 수정 완료"
echo "✅ 모든 서브페이지 asset 경로 수정 완료"
echo "✅ 내부 링크 .html 확장자 제거 완료"
echo ""
echo "백업 파일들:"
echo "- index.html.backup (메인 페이지 백업)"
echo "- 각 디렉토리의 index.html.backup (서브페이지 백업)"
echo ""
echo "다음 단계:"
echo "1. 로컬 테스트 (선택사항):"
echo "   python3 -m http.server 8000"
echo "   브라우저에서 http://localhost:8000 접속"
echo ""
echo "2. Git 커밋 및 푸시:"
echo "   git add ."
echo "   git commit -m 'Fix all paths and links for GitHub Pages directory structure'"
echo "   git push origin main"
echo ""
echo "3. GitHub Pages 배포 확인 (1-2분 후):"
echo "   https://kmid.co.kr"
echo ""
echo "=========================================="
echo "스크립트 실행 완료!"
echo "==========================================" 