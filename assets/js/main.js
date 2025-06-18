/*-------------------------------------------------
title       : 메인
Create date : 2022-02-07
-------------------------------------------------*/

$(function () {
  // 비주얼
  visual();
  
  // 헤더 스크롤 효과
  headerScroll();
  
  // TOP 버튼
  topButton();
  
  // 모바일 메뉴
  mobileMenu();
  
  // 데스크톱 메뉴 드롭다운
  desktopMenu();
});

// 헤더 스크롤 효과
function headerScroll() {
    var $header = $('#header');
    
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $header.addClass('fixed');
        } else {
            $header.removeClass('fixed');
        }
    });
}

// 비주얼 슬라이드
function visual() {
    var sliderTimer = 5000;
    var beforeEnd = 500;
    var $visual = $(".visual");
    var $visualslider = $visual.find(".list");

    $visualslider.on("init", function (event, slick) {
      $visual
        .find(".paging")
        .find(".this")
        .text(slick.currentSlide + 1);
      $visual.find(".paging").find(".total").text(slick.slideCount);
      
      // 첫 번째 dots 버튼을 활성화
      $visual.find(".dots .item").removeClass("slick-active");
      $visual.find(".dots .item").eq(0).addClass("slick-active");
    });

    $visualslider.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        $visual.find(".this").text(nextSlide + 1);
        
        // dots 버튼 활성화 업데이트
        $visual.find(".dots .item").removeClass("slick-active");
        $visual.find(".dots .item").eq(nextSlide).addClass("slick-active");
      }
    );

    $visualslider.not(".slick-initialized").slick({
      draggable: true,
      arrows: true,
      dots: false,
      fade: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: sliderTimer,
      speed: 500,
      mobileFirst: true,
      pauseOnHover: true,
      prevArrow: $visual.find(".prev"),
      nextArrow: $visual.find(".next"),
      pauseOnDotsHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: true,
            fade: true
          }
        },
        {
          breakpoint: 820,
          settings: {
            arrows: true,
            fade: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            fade: true
          }
        }
      ]
    });

    // dots 클릭 이벤트
    $visual.find(".dots .item").on("click", function() {
      var index = $(this).index();
      $visualslider.slick("slickGoTo", index);
    });

    var $visualslider_pause = $visual.find(".stop");
    var $visualslider_play = $visual.find(".play");
    $visualslider_play.hide();
    $visualslider_pause.on("click", function () {
      $visualslider_pause.hide();
      $visualslider_play.show().focus();
      $visualslider.slick("slickPause");
    });
    $visualslider_play.on("click", function () {
      $visualslider_play.hide();
      $visualslider_pause.show().focus();
      $visualslider.slick("slickPlay");
    });
}

// TOP 버튼
function topButton() {
    var $topBtn = $('.btn-top');
    var $topLink = $('#top');
    
    if (!$topBtn.length) return;
    
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 300) {
            $topBtn.addClass('show');
        } else {
            $topBtn.removeClass('show');
        }
    });
    
    if ($topLink.length) {
        $topLink.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        });
    }
}

// 모바일 메뉴
function mobileMenu() {
    var $gnb2 = $('#gnb2');
    var $openBtn = $gnb2.find('.open');
    var $closeBtn = $gnb2.find('.close');
    var $menuAll = $('#head_menu_all');
    var $menuItems = $menuAll.find('> li > a');
    
    // 열기 버튼 클릭
    $openBtn.on('click', function(e) {
        e.preventDefault();
        $gnb2.addClass('active');
        $('body').addClass('menu-open');
    });
    
    // 닫기 버튼 클릭
    $closeBtn.on('click', function(e) {
        e.preventDefault();
        $gnb2.removeClass('active');
        $('body').removeClass('menu-open');
        // 모든 서브메뉴 닫기
        $menuAll.find('li').removeClass('active');
    });
    
    // 메뉴 아이템 클릭 (서브메뉴 토글)
    $menuItems.on('click', function(e) {
        var $parent = $(this).parent();
        var $submenu = $parent.find('.submenu');
        
        if ($submenu.length > 0) {
            e.preventDefault();
            
            if ($parent.hasClass('active')) {
                $parent.removeClass('active');
            } else {
                $menuAll.find('li').removeClass('active');
                $parent.addClass('active');
            }
        }
    });
    
    // 배경 클릭시 메뉴 닫기
    $menuAll.on('click', function(e) {
        if (e.target === this) {
            $gnb2.removeClass('active');
            $('body').removeClass('menu-open');
            $menuAll.find('li').removeClass('active');
        }
    });
    
    // ESC 키로 메뉴 닫기
    $(document).on('keydown', function(e) {
        if (e.keyCode === 27 && $gnb2.hasClass('active')) {
            $gnb2.removeClass('active');
            $('body').removeClass('menu-open');
            $menuAll.find('li').removeClass('active');
        }
    });
}

// 데스크톱 메뉴 드롭다운
function desktopMenu() {
    var $gnb1 = $('#gnb1');
    var $menuItems = $gnb1.find('#head_menu > li > a');
    
    // 메뉴 아이템에 마우스 오버/포커스 시
    $menuItems.on('mouseenter focusin', function() {
        var $parent = $(this).parent();
        var $submenu = $parent.find('.submenu');
        
        if ($submenu.length > 0) {
            // 다른 메뉴들의 active 클래스 제거
            $gnb1.find('li').removeClass('active');
            $gnb1.removeClass('active');
            
            // 현재 메뉴에 active 클래스 추가
            $parent.addClass('active');
            $gnb1.addClass('active');
        }
    });
    
    // GNB 영역에서 마우스 벗어날 때
    $gnb1.on('mouseleave', function() {
        $gnb1.removeClass('active');
        $gnb1.find('li').removeClass('active');
    });
    
    // 키보드 탭 네비게이션 처리
    $gnb1.find('a').on('keydown', function(e) {
        if (e.keyCode === 9) { // Tab 키
            setTimeout(function() {
                var $focused = $(':focus');
                if (!$focused.closest('#gnb1').length) {
                    $gnb1.removeClass('active');
                    $gnb1.find('li').removeClass('active');
                }
            }, 10);
        }
    });
}

// 페이지 로드 시 초기화
$(document).ready(function() {
    desktopMenu();
    mobileMenu();
    initScrollTop();
});

