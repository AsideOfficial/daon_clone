// Google Analytics 공통 추적 스크립트
// 페이지별로 include해서 사용

// Google Analytics 초기화 (각 페이지 head에서 이미 로드됨)
function initializeAnalytics() {
    // 페이지 로드 완료 이벤트
    gtag('event', 'page_load_complete', {
        event_category: 'Performance',
        event_label: 'Page Load',
        page_title: document.title,
        page_location: window.location.href
    });
}

// 공통 이벤트 추적 함수들
var AnalyticsTracker = {
    // 페이지 진입 시간
    pageStartTime: new Date().getTime(),
    scrollDepth: 0,
    maxScrollDepth: 0,
    isScrollTracked: false,
    viewedSections: [],
    trackedIntervals: [],
    
    // 초기화
    init: function() {
        this.trackButtonClicks();
        this.trackScrollDepth();
        this.trackTimeSpent();
        this.trackSectionViews();
        this.trackPageExit();
        this.trackExternalLinks();
        this.trackFormSubmissions();
        console.log('Google Analytics 이벤트 추적 초기화 완료');
    },
    
    // 버튼 클릭 추적
    trackButtonClicks: function() {
        $(document).on('click', 'a[href], button', function(e) {
            var elementText = $(this).text().trim() || $(this).attr('alt') || $(this).attr('title') || 'Unknown';
            var elementType = this.tagName.toLowerCase();
            var elementClass = $(this).attr('class') || '';
            var elementHref = $(this).attr('href') || '';
            
            gtag('event', 'click', {
                event_category: 'Button',
                event_label: elementText,
                element_type: elementType,
                element_class: elementClass,
                element_href: elementHref,
                page_location: window.location.href
            });
            
            console.log('버튼 클릭 추적:', elementText);
        });
    },
    
    // 스크롤 깊이 추적
    trackScrollDepth: function() {
        var self = this;
        $(window).on('scroll', function() {
            var scrollTop = $(window).scrollTop();
            var docHeight = $(document).height();
            var winHeight = $(window).height();
            var scrollPercent = Math.round((scrollTop / (docHeight - winHeight)) * 100);
            
            self.maxScrollDepth = Math.max(self.maxScrollDepth, scrollPercent);
            
            // 25%, 50%, 75%, 90% 지점에서 이벤트 발생
            if (!self.isScrollTracked) {
                if (scrollPercent >= 25 && self.scrollDepth < 25) {
                    gtag('event', 'scroll', {
                        event_category: 'Scroll',
                        event_label: '25% 스크롤',
                        value: 25
                    });
                    self.scrollDepth = 25;
                } else if (scrollPercent >= 50 && self.scrollDepth < 50) {
                    gtag('event', 'scroll', {
                        event_category: 'Scroll',
                        event_label: '50% 스크롤',
                        value: 50
                    });
                    self.scrollDepth = 50;
                } else if (scrollPercent >= 75 && self.scrollDepth < 75) {
                    gtag('event', 'scroll', {
                        event_category: 'Scroll',
                        event_label: '75% 스크롤',
                        value: 75
                    });
                    self.scrollDepth = 75;
                } else if (scrollPercent >= 90 && self.scrollDepth < 90) {
                    gtag('event', 'scroll', {
                        event_category: 'Scroll',
                        event_label: '90% 스크롤',
                        value: 90
                    });
                    self.scrollDepth = 90;
                    self.isScrollTracked = true;
                }
            }
        });
    },
    
    // 페이지 체류 시간 추적
    trackTimeSpent: function() {
        var self = this;
        var timeIntervals = [30, 60, 120, 300]; // 30초, 1분, 2분, 5분
        
        timeIntervals.forEach(function(interval) {
            setTimeout(function() {
                if (!self.trackedIntervals.includes(interval)) {
                    gtag('event', 'timing', {
                        event_category: 'Engagement',
                        event_label: interval + '초 체류',
                        value: interval
                    });
                    self.trackedIntervals.push(interval);
                    console.log('체류 시간 추적:', interval + '초');
                }
            }, interval * 1000);
        });
    },
    
    // 섹션별 조회 추적
    trackSectionViews: function() {
        var self = this;
        var sections = ['#visual', '#business', '#research', '#hospital-business', '#main', '#contents', '.section'];
        
        $(window).on('scroll', function() {
            sections.forEach(function(section) {
                var $section = $(section);
                if ($section.length > 0 && !self.viewedSections.includes(section)) {
                    var sectionTop = $section.offset().top;
                    var sectionHeight = $section.outerHeight();
                    var scrollTop = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    
                    // 섹션이 50% 이상 보이면 조회로 인정
                    if (scrollTop + windowHeight > sectionTop + (sectionHeight * 0.5)) {
                        gtag('event', 'view_section', {
                            event_category: 'Section View',
                            event_label: section.replace('#', '').replace('.', ''),
                            section_name: section.replace('#', '').replace('.', '')
                        });
                        self.viewedSections.push(section);
                        console.log('섹션 조회 추적:', section);
                    }
                }
            });
        });
    },
    
    // 페이지 이탈 시 최종 데이터 전송
    trackPageExit: function() {
        var self = this;
        $(window).on('beforeunload', function() {
            var timeSpent = Math.round((new Date().getTime() - self.pageStartTime) / 1000);
            
            gtag('event', 'page_exit', {
                event_category: 'Engagement',
                event_label: '페이지 이탈',
                time_spent: timeSpent,
                max_scroll_depth: self.maxScrollDepth,
                sections_viewed: self.viewedSections.length
            });
        });
    },
    
    // 외부 링크, 이메일, 전화번호 추적
    trackExternalLinks: function() {
        $(document).on('click', 'a[href^="http"], a[href^="mailto:"], a[href^="tel:"]', function() {
            var href = $(this).attr('href');
            var linkType = '';
            
            if (href.startsWith('http')) {
                linkType = 'external_link';
            } else if (href.startsWith('mailto:')) {
                linkType = 'email';
            } else if (href.startsWith('tel:')) {
                linkType = 'phone';
            }
            
            gtag('event', 'click', {
                event_category: 'Link',
                event_label: linkType,
                link_url: href
            });
        });
    },
    
    // 폼 제출 추적
    trackFormSubmissions: function() {
        $(document).on('submit', 'form', function() {
            var formId = $(this).attr('id') || $(this).attr('class') || 'unknown_form';
            gtag('event', 'form_submit', {
                event_category: 'Form',
                event_label: formId,
                form_id: formId
            });
        });
    },
    
    // 사용자 정의 이벤트 추적
    trackCustomEvent: function(category, action, label, value) {
        gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value || 0
        });
    }
};

// 페이지 로드 시 자동 초기화
$(document).ready(function() {
    if (typeof gtag !== 'undefined') {
        AnalyticsTracker.init();
    } else {
        console.warn('Google Analytics가 로드되지 않았습니다.');
    }
}); 