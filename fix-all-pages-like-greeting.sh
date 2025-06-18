#!/bin/bash

# greeting 페이지 패턴으로 모든 페이지 수정
# 사용법: ./fix-all-pages-like-greeting.sh

echo "🚀 greeting 패턴으로 모든 페이지 수정 시작..."

# 수정할 디렉토리 목록
directories=(
    "organization" "about" "business" "company" "history" "location"
    "medical-institutions" "research" "research-detail" "research-faq" 
    "research-gallery" "research-materials" "ai-diagnosis-system-register"
    "insurance-claim-system-register" "lab-test-system-register"
    "1" "2" "3" "4" "5" "6" "7" "8"
)

for dir in "${directories[@]}"; do
    if [ -f "${dir}/index.html" ]; then
        echo "📝 처리 중: ${dir}/index.html"
        
        # 백업 생성
        cp "${dir}/index.html" "${dir}/index.html.backup.$(date +%Y%m%d_%H%M%S)"
        
        # 1. CSS 파일 경로 수정 (greeting과 동일하게)
        sed -i.tmp 's|href="\./jquery/css/jquery.bxslider.css|href="/jquery/css/jquery.bxslider.css|g' "${dir}/index.html"
        sed -i.tmp 's|href="\./jquery/css/slick.css|href="/jquery/css/slick.css|g' "${dir}/index.html"
        sed -i.tmp 's|href="\./jquery/css/fullpage.css|href="/jquery/css/fullpage.css|g' "${dir}/index.html"
        sed -i.tmp 's|href="\./kor/css/default.css|href="/kor/css/default.css|g' "${dir}/index.html"
        sed -i.tmp 's|href="\./kor/css/layout.css|href="/kor/css/layout.css|g' "${dir}/index.html"
        sed -i.tmp 's|href="\./kor/css/layout_respond.css|href="/kor/css/layout_respond.css|g' "${dir}/index.html"
        sed -i.tmp 's|href="\./js/owl.carousel.css|href="/js/owl.carousel.css|g' "${dir}/index.html"
        sed -i.tmp 's|href="\./kor/css/sub.css|href="/kor/css/sub.css|g' "${dir}/index.html"
        sed -i.tmp 's|href="\./kor/css/sub_respond.css|href="/kor/css/sub_respond.css|g' "${dir}/index.html"
        sed -i.tmp 's|href="\./kor/css/sub_es.css|href="/kor/css/sub_es.css|g' "${dir}/index.html"
        sed -i.tmp 's|href="\./kor/css/sub01.css|href="/kor/css/sub01.css|g' "${dir}/index.html"
        
        # assets 폴더 경로 수정
        sed -i.tmp 's|href="assets/font/dingbat_xeicon.css|href="/assets/font/dingbat_xeicon.css|g' "${dir}/index.html"
        sed -i.tmp 's|href="assets/css/reset.css|href="/assets/css/reset.css|g' "${dir}/index.html"
        sed -i.tmp 's|href="assets/css/default.css|href="/assets/css/default.css|g' "${dir}/index.html"
        sed -i.tmp 's|href="assets/css/layout.css|href="/assets/css/layout.css|g' "${dir}/index.html"
        sed -i.tmp 's|href="assets/css/layout_respond.css|href="/assets/css/layout_respond.css|g' "${dir}/index.html"
        sed -i.tmp 's|href="assets/css/main.css|href="/assets/css/main.css|g' "${dir}/index.html"
        sed -i.tmp 's|href="assets/css/main_respond.css|href="/assets/css/main_respond.css|g' "${dir}/index.html"
        sed -i.tmp 's|href="assets/css/button.css|href="/assets/css/button.css|g' "${dir}/index.html"
        sed -i.tmp 's|href="assets/css/responsive.css|href="/assets/css/responsive.css|g' "${dir}/index.html"
        sed -i.tmp 's|href="assets/images/favicon.png|href="/assets/images/favicon.png|g' "${dir}/index.html"
        
        # 2. JavaScript 파일 경로 수정 (greeting과 동일하게)
        sed -i.tmp 's|src="\./jquery/js/jquery-1.11.2.min.js|src="/jquery/js/jquery-1.11.2.min.js|g' "${dir}/index.html"
        sed -i.tmp 's|src="\./js/global.js|src="/js/global.js|g' "${dir}/index.html"
        sed -i.tmp 's|src="\./jquery/js/jquery.bxslider.min.js|src="/jquery/js/jquery.bxslider.min.js|g' "${dir}/index.html"
        sed -i.tmp 's|src="\./jquery/js/slick.js|src="/jquery/js/slick.js|g' "${dir}/index.html"
        sed -i.tmp 's|src="\./jquery/js/jquery.fullPage.min.js|src="/jquery/js/jquery.fullPage.min.js|g' "${dir}/index.html"
        sed -i.tmp 's|src="\./ease_src/js/captchaboard.js|src="/ease_src/js/captchaboard.js|g' "${dir}/index.html"
        sed -i.tmp 's|src="\./ease_src/sEditor/js/HuskyEZCreator.js|src="/ease_src/sEditor/js/HuskyEZCreator.js|g' "${dir}/index.html"
        
        # 3. 이미지 파일 경로 수정 (greeting과 동일하게)
        sed -i.tmp 's|src="\./kor/img/sub/sub-visual01.jpg|src="/kor/img/sub/sub-visual01.jpg|g' "${dir}/index.html"
        sed -i.tmp 's|src="\./kor/img/|src="/kor/img/|g' "${dir}/index.html"
        sed -i.tmp 's|src="assets/img/|src="/assets/img/|g' "${dir}/index.html"
        sed -i.tmp 's|src="assets/images/|src="/assets/images/|g' "${dir}/index.html"
        
        # 4. 내부 링크 수정 (greeting과 동일하게)
        sed -i.tmp 's|href="index\.html"|href="/"|g' "${dir}/index.html"
        sed -i.tmp 's|href="greeting\.html"|href="/greeting"|g' "${dir}/index.html"
        sed -i.tmp 's|href="organization\.html"|href="/organization"|g' "${dir}/index.html"
        sed -i.tmp 's|href="about\.html"|href="/about"|g' "${dir}/index.html"
        sed -i.tmp 's|href="business\.html"|href="/business"|g' "${dir}/index.html"
        sed -i.tmp 's|href="company\.html"|href="/company"|g' "${dir}/index.html"
        sed -i.tmp 's|href="history\.html"|href="/history"|g' "${dir}/index.html"
        sed -i.tmp 's|href="location\.html"|href="/location"|g' "${dir}/index.html"
        sed -i.tmp 's|href="medical-institutions\.html"|href="/medical-institutions"|g' "${dir}/index.html"
        sed -i.tmp 's|href="research\.html"|href="/research"|g' "${dir}/index.html"
        sed -i.tmp 's|href="research-detail\.html"|href="/research-detail"|g' "${dir}/index.html"
        sed -i.tmp 's|href="research-faq\.html"|href="/research-faq"|g' "${dir}/index.html"
        sed -i.tmp 's|href="research-gallery\.html"|href="/research-gallery"|g' "${dir}/index.html"
        sed -i.tmp 's|href="research-materials\.html"|href="/research-materials"|g' "${dir}/index.html"
        
        # 숫자 페이지 처리
        for i in {1..8}; do
            sed -i.tmp "s|href=\"${i}\.html\"|href=\"/${i}\"|g" "${dir}/index.html"
        done
        
        # 5. 특수한 경우들 복원 (외부 링크, 앵커 등)
        sed -i.tmp 's|href="/http|href="http|g' "${dir}/index.html"
        sed -i.tmp 's|href="/https|href="https|g' "${dir}/index.html"
        sed -i.tmp 's|href="/mailto|href="mailto|g' "${dir}/index.html"
        sed -i.tmp 's|href="/tel|href="tel|g' "${dir}/index.html"
        sed -i.tmp 's|href="/#|href="#|g' "${dir}/index.html"
        sed -i.tmp 's|src="/http|src="http|g' "${dir}/index.html"
        sed -i.tmp 's|src="/https|src="https|g' "${dir}/index.html"
        
        # 임시 파일 삭제
        rm "${dir}/index.html.tmp" 2>/dev/null || true
        
        echo "✅ 완료: ${dir}/index.html"
    else
        echo "❌ 파일 없음: ${dir}/index.html"
    fi
done

echo ""
echo "🎉 모든 페이지 수정 완료!"
echo ""
echo "📋 수정된 내용:"
echo "- CSS 경로: /jquery/css/, /kor/css/, /assets/css/ 등으로 수정"
echo "- JS 경로: /jquery/js/, /js/, /ease_src/ 등으로 수정" 
echo "- 이미지 경로: /kor/img/, /assets/img/ 등으로 수정"
echo "- 내부 링크: .html 확장자 제거 (/greeting, /organization 등)"
echo "- 백업 파일: 각 디렉토리에 타임스탬프와 함께 저장"
echo ""
echo "🚀 다음 단계:"
echo "git add ."
echo "git commit -m 'Fix all pages to match greeting pattern - clean URLs and absolute paths'"
echo "git push origin main"
echo ""
echo "⏰ GitHub Pages 배포 완료까지 1-2분 대기 후 확인:"
echo "- https://kmid.co.kr/organization"
echo "- https://kmid.co.kr/research" 
echo "- https://kmid.co.kr/1"
echo "- https://kmid.co.kr/2" 