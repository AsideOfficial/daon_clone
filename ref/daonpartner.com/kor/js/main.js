/*-------------------------------------------------
title       : 메인
Create date : 2022-02-07
-------------------------------------------------*/

$(function () {
  // 비주얼
  visual();
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
    });

    $visualslider.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        $visual.find(".this").text(nextSlide + 1);
      }
    );

    $visualslider.not(".slick-initialized").slick({
      draggable: true,
      arrows: true,
      dots: true,
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
    });

    $visualslider_pause = $visual.find(".stop");
    $visualslider_play = $visual.find(".play");
    $visualslider_play.hide();
    $visualslider_pause.on("click", function () {
      $visualslider_pause.hide();
      $visualslider_play.show().focus();
      $visualslider.slick("slickPause").slick("slickSetOption", true);
    });
    $visualslider_play.on("click", function () {
      $visualslider_pause.show().focus();
      $visualslider_play.hide();
      $visualslider.slick("slickPlay").slick("slickSetOption", true);
    });
  }

  //identity
  $(".identity .list li").on("mouseenter focusin", function () {
    $(this).addClass("active").siblings().removeClass("active");
    return false;
  });
});
