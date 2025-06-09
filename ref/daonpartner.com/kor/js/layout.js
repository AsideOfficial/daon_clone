/*-------------------------------------------------
title       : 레이아웃
-------------------------------------------------*/

$(window).on("scroll load", function () {
  if ($("html, body").scrollTop() > 110) {
    $("#header").addClass("fixed");
  } else {
    $("#header").removeClass("fixed");
  }
});

$(function () {
  // 사이트바로가기
  $(".hnb1").classtoggle({
    button: ".label", // 이벤트 받을 타겟 선택
    respond: true, // 반응형일 때 (true 시 반응형일때 가로 사이즈 이하에서만 / click 일때만)
    respondWidth: "1024", // 반응형 가로 사이즈
  });

  // 언어
  $(".lang").classtoggle({
    button: ".active", // 이벤트 받을 타겟 선택
  });

  // 검색어
  $(".search").classtoggle();

  // 주메뉴
  $("#gnb1").gnb1();

  // 전체메뉴이자 모바일 메뉴
  $("#gnb2").gnb2();

  // 퀵메뉴
  $("#quick").classtoggle();

  // 관련사이트
  $(".related .group").classtoggle({
    button: ".label", // 이벤트 받을 타겟 선택
  });
});

/*앵커태그*/
$(document).ready(function () {
  $("#footer .btn-top a").anchorAnimate();
});

jQuery.fn.anchorAnimate = function (settings) {
  settings = jQuery.extend(
    {
      speed: 1100,
    },
    settings
  );

  return this.each(function () {
    var caller = this;
    $(caller).click(function (event) {
      event.preventDefault();
      var locationHref = window.location.href;
      var elementClick = $(caller).attr("href");

      var destination = $(elementClick).offset().top;
      $("html:not(:animated),body:not(:animated)").animate(
        { scrollTop: destination },
        settings.speed,
        function () {
          window.location.hash = elementClick;
        }
      );
      return false;
    });
  });
};

/*-------------------------------------------------
title       : 메뉴1
-------------------------------------------------*/

$.fn.gnb1 = function (options) {
  var settings = $.extend(
    {
      actionType: "mouseenter focusin", // 메뉴가 동작하는 액션 (mouseenter focusin, click)
      target: "#gnb1", // 활성화 시 클래스가 추가되는 요소 (공란일 경우 오버되는 a 링크 부모 li에만 클래스 추가됨)
      class: "active", // 추가할 클래스명 (target에 추가됨)
      depth2: ".submenu", // 서브메뉴
      closeBtn: ".close", // 닫기 버튼이 별도로 존재하는 경우 (닫기 버튼은 클릭시에만)
    },
    options
  );

  return this.each(function () {
    var $selecter = $(this);

    $selecter.find("a").on(settings.actionType, function () {
      if ($(this).parent("li").hasClass("active") == false) {
        $(this).parent("li").addClass("active");
        $(this).parent("li").siblings("li").removeClass("active");

        $(this).parents("li").addClass("active");
        $(this).parents("li").siblings("li").removeClass("active");

        if (settings.target != "") {
          $(settings.target).addClass(settings.class);
        }
      }

      if (settings.actionType == "click") {
        if ($(this).next("*").length > 0) {
          return false;
        }
      }
    });

    if ($selecter.find(settings.closeBtn).length == 1) {
      $selecter.find(settings.closeBtn).on("click", function () {
        $selecter.find("li").removeClass(settings.class);
        $(settings.target).removeClass(settings.class);

        return false;
      });
    } else {
      // 마우스 아웃
      $("#gnb1").on("mouseleave", function () {
        $("#gnb1").removeClass("active");
        $("#gnb1 #head_menu").children().removeClass("active");
      });
    }

    // 탭 아웃
    $selecter.find("a:last").keydown(function (e) {
      if (e.keyCode === 9) {
        $selecter.find("li").removeClass(settings.class);
        $(settings.target).removeClass(settings.class);
      }
    });

    // 역탭 아웃
    $selecter.find("a:first").keydown(function (e) {
      if (e.keyCode === 9 && e.shiftKey) {
        $selecter.find("li").removeClass(settings.class);
        $selecter.removeClass(settings.classname);
      }
    });
  });
};

/*-------------------------------------------------
title       : 메뉴2
-------------------------------------------------*/

$.fn.gnb2 = function (options) {
  var settings = $.extend(
    {
      btnOpen: ".open", // 최초 메뉴를 여는 버튼
      btnClose: ".close", // 닫기 버튼이 별도로 존재하는 경우
      classAdd: "#gnb2", // 활성화 시 클래스가 추가되는 요소
      classAdd2: "#gnb2 .mnfirst", // 2차 메뉴 초기 활성화되는 클래스명
      className: "active", // 추가할 클래스명 (classAdd에 추가됨)
      siblings: true, // active 될 때 형제요소의 반응 여부
      responsive: false, // 반응형일 때 (true 시 반응형일때 가로 사이즈 이하에서만 / false 시 반응형 아닐 때도 클릭 동작함)
      responsiveWidth: "1024", // 반응형 가로 사이즈
      target: "#wrap", // 활성화 시 클래스가 추가되는 요소 (공란일 경우 오버되는 a 링크 부모 li에만 클래스 추가됨)
      class: "sitemap", // 추가할 클래스명 (target에 추가됨)
    },
    options
  );

  // gnb2 3차 메뉴 가지고 있는 li에 클래스 추가
  $("#gnb2 .submenu > ul > li").each(function (i) {
    if ($(this).find("div").length > 0) {
      $(this).addClass("type1");
    }
  });

  // 모바일 메뉴에서 3뎁스 있을 때
  $("#gnb2 .submenu > ul > li.type1 > a").on("click", function () {
    if ($(this).parent().hasClass("active")) {
      $(this).parent().removeClass("active");
    } else {
      $(this).parent().addClass("active").siblings().removeClass("active");
    }
    return false;
  });

  return this.each(function () {
    var $selecter = $(this);

    // 열기
    $selecter.find(settings.btnOpen).on("click", function () {
      if ($selecter.find(settings.btnClose).length > 0) {
        $(settings.classAdd).addClass(settings.className);
        $(settings.target).addClass(settings.class);
        $("html").css("overflow", "hidden");
      } else {
        if ($(settings.classAdd).hasClass(settings.className) == false) {
          $(settings.classAdd).addClass(settings.className);
        } else {
          $(settings.classAdd).removeClass(settings.className);
        }
      }

      return false;
    });

    // 닫기
    if ($selecter.find(settings.btnClose).length > 0) {
      $selecter.find(settings.btnClose).on("click", function () {
        $(settings.classAdd).removeClass(settings.className);
        $(settings.target).removeClass(settings.class);
        $("html").css("overflow", "");

        return false;
      });
    }

    // 메뉴 클릭 이벤트
    function menuAction($this) {
      if (
        $this.next("*").length > 0 &&
        $this.next("*").css("display") != "none"
      ) {
        $this.parent("li").siblings("li").removeClass("active");
        $this.parent("li").addClass("active");

        event.preventDefault();
      }
    }

    // 메뉴
    $selecter.find("li a").on("click", function (e) {
      if (settings.responsive == true) {
        if ($(window).width() <= settings.responsiveWidth) {
          menuAction($(this));
        }
      } else {
        menuAction($(this));
      }
    });

    return false;
  });
};

/*-------------------------------------------------
title       : 클래스를 넣고 빼고
-------------------------------------------------*/

$.fn.classtoggle = function (options) {
  var settings = $.extend(
    {
      button: ".open", // 이벤트 받을 타겟 선택
      action: "click", // 액션 선택 (click | over)
      classname: "active", // 추가할 클래스명
      accordion: false, // active 될 때 형제요소의 반응 여부
      respond: false, // 반응형일 때 (true 시 반응형일때 가로 사이즈 이하에서만 / click 일때만)
      respondWidth: "768", // 반응형 가로 사이즈
      close: ".close", // 닫기 버튼이 별도로 존재하는 경우 (닫기 버튼은 클릭시에만)
    },
    options
  );

  return this.each(function () {
    var $selecter = $(this);

    function clickActive() {
      if ($selecter.hasClass(settings.classname) == false) {
        $selecter.addClass(settings.classname);

        if (settings.accordion == true) {
          $selecter.siblings().removeClass(settings.classname);
        }
      } else {
        // 닫기 버튼 존재할 경우 토글되지 않음
        if ($selecter.find(settings.close).length == 0) {
          $selecter.removeClass(settings.classname);
        }
      }
    }

    if (settings.action == "click") {
      $selecter.find(settings.button).on(settings.action, function () {
        if (settings.respond == false) {
          clickActive();

          return false;
        } else {
          if ($(window).width() <= settings.respondWidth) {
            clickActive();

            return false;
          } else {
            $selecter.find(settings.button).off();
          }
        }
      });
    } else {
      $selecter.find(settings.button).on({
        mouseenter: function () {
          $selecter.addClass(settings.classname);
        },
        focusin: function () {
          $selecter.addClass(settings.classname);
        },
        mouseleave: function () {
          $selecter.removeClass(settings.classname);
        },
        focusout: function () {
          $selecter.removeClass(settings.classname);
        },
      });
    }

    // 닫기 버튼이 별도로 존재하는 경우
    if ($selecter.find(settings.close).length > 0) {
      $selecter.find(settings.close).on("click", function () {
        $selecter.removeClass(settings.classname);

        return false;
      });
    } else {
      // 탭 아웃
      $selecter.find("a:last").keydown(function (e) {
        if (e.keyCode === 9) {
          $selecter.removeClass(settings.classname);
        }
      });

      // 역탭 아웃
      $selecter.find("a:first").keydown(function (e) {
        if (e.keyCode === 9 && e.shiftKey) {
          $selecter.removeClass(settings.classname);
        }
      });
    }
  });
};

/*텍스트 복사*/
function copyToClipboard(elementId) {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(elementId).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  alert("주소가 복사되었습니다.");
}
