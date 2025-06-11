/*-------------------------------------------------
title       : 硫붿씤
Create date : 2020-03-06
-------------------------------------------------*/

$(function()
{
	// 2�곸뒪媛� 5媛쒖씪 �� �щ씪�대뱶
	var li_cnt = $('#left_menu_top > li').size();
	if(li_cnt = 5){
		$('#snb').addClass('snb-type1');
	}
    
	// snb 3李� 硫붾돱 媛�吏�怨� �덈뒗 li�� �대옒�� 異붽�
    $('#snb .list > ul > li').each(function(i)
    {
        if ( $(this).find('ul').length > 0 )
        {
            $(this).addClass('type1');
        }
    });
    
    // snb 3李� 硫붾돱 媛�吏�怨� �덈뒗 li�� �대옒�� 異붽� - �щ씪�대뱶
    $('#snb .slick-slide > div > li').each(function(i)
    {
        if ( $(this).find('ul').length > 0 )
        {
            $(this).addClass('type1');
        }
    });
    
    // ��찓��(4李�) 諛섏쓳�뺤씪 ��
    $('.depth4_tab').classtoggle
    ({
        'button'            : '.active a',  // �대깽�� 諛쏆쓣 ��寃� �좏깮
        'respond'           : true          // 諛섏쓳�뺤씪 �� (true �� 諛섏쓳�뺤씪�� 媛�濡� �ъ씠利� �댄븯�먯꽌留� / click �쇰븣留�)
    });
    
    //location �꾩껜瑜� 硫붾돱濡� �ъ슜�� ��
    $('.path > li:nth-child(n+2) > a').on('click', function()
    {
        inx = $(this).parent('li').index();

        $(this).parent('li').addClass('active');

        if ( $('.location').find('.depth' + inx + '').length > 0 )
        {
            if ( $('.location').find('.depth' + inx + '').hasClass('active') == false )
            {
                $('.location').find('.depth' + inx + '').addClass('active');
            }
            else
            {
                $('.location').find('.depth' + inx + '').removeClass('active');
            }
            return false;
        }
    });

   // location 以� list留� 硫붾돱濡� �ъ슜
   $('.location .list').classtoggle
   ({
       'button'        : '.active a'   // �대깽�� 諛쏆쓣 ��寃� �좏깮
   });
   
   $('.company label').classtoggle
   ({
       'button'        : '.help'   // �대깽�� 諛쏆쓣 ��寃� �좏깮
   });
   
   /*紐⑤컮�� 留뚯”�� 議곗궗*/
	$('#satisfy .cont').classtoggle
	({
	    'button'        : '.select'   // �대깽�� 諛쏆쓣 ��寃� �좏깮
	});

   // 怨듭쑀�섍린
   $('.share').classtoggle();
   
   $('.qrcode').classtoggle
    ({
    	'button'            : 'a'  // �대깽�� 諛쏆쓣 ��寃� �좏깮
	});
    
    //�꾩퐫�붿뼵 ex.�ㅻ━寃쎌쁺, �뺢�, 媛쒖씤�뺣낫泥섎━諛⑹묠 ��
    $('.tt a').click(function(){
		var display =  $(this).parents('.group').children('.con').css("display");
		var el = $(this).parents('.group');
		if(display == "none"){
			$('.con').slideUp(100);
			$(this).parents('.group').children('.con').slideDown(100);
			setTimeout(function() {
				var offset = el.offset();
				$('html, body').animate({scrollTop : offset.top}, 100);
			}, 100);
		}else{
			$(this).parents('.group').children('.con').slideUp(0);
		}
	});
	
	$('.slidelist').find('.group:nth-child(n+2)').on('click', function()
	{	
		$('.slidelist').find('.group:first-child .con').slideUp();
	});
	
	// �ъ뾽�덈궡 > �쒖꽕
    $('.img-box .list').slick
	({
		autoplay		: true,
		infinite		: true,
		dots			: true,
		arrows			: true,
		fade			: false,
		pauseOnHover	: true,
		customPaging : function(slider, i) {
					   var thumb = jQuery(slider.$slides[i]).data();
					   return '<a><span class="now">'+('0'+(i+1)).slice(-2)+'</span> / <span class="dotmaxnum total"></span></a>'; // <-- new
		}
	});
	$('.dotmaxnum').html("0"+$(".slick-dots > li").size());
	
	// 怨듭궗�뚭컻 > 吏��띻��κ꼍�� > �ㅻ━寃쎌쁺 > ISO 37001
	 $('.process .flex-step li').classtoggle
    ({
    	'button'            : '.tt'  // �대깽�� 諛쏆쓣 ��寃� �좏깮
	});
	
	$(".process .flex-step li").each(function(){
		if($(this).hasClass("active") === true) {
			$(this).children('a').attr("title","�대┝");
		}else{
			$(this).children('a').attr("title","�ロ옒");
		}
	});
	$('.process .flex-step li .tt').on("click focusout",function(){
    	if($('.faqType .group .label').parent().hasClass('active')){
    		$('.faqType .group .label').parent().attr("title","�ロ옒");
    	}
		if(($(this).parent().hasClass('active'))){
			$(this).parent().attr("title","�대┝");
		}else{
			$(this).parent().attr("title","�ロ옒");
		}
	});
});

$('.gallery .list').bxSlider
({
	speed: 1000,
	easing: 'swing',
	pager:true,
	controls:true,
	auto: true,
	autoControls: false,
	infiniteLoop		: false
});

/*�몃꽕�쇱씠 �덈뒗 媛ㅻ윭由� �щ씪�대뱶*/
$(function(){
	$('.bxslider .list').bxSlider({
		adaptiveHeight: true, 
		pagerCustom: '#bx-pager',
		auto: true
	});
});

// 肄섑뀗痢� ��
$(function() {
	$('.con-tab a').first().addClass(' start');
	var sBox = $('.start').attr('href');
	var sck = 0;
	
	$('.start').focus(function(){
		$(".start").keydown(function(e){
			if((e.keyCode == 9 || e.which == 9) && sck == 0){
				$(this).first().removeClass('start');
					sck = 1;
				if($(sBox).find('a').length > 0){
					$('.con-tab a').last().focus();
				}
			}
		});
		
		$(sBox).find('li.group > a').last().keydown(function(e){
			var atCK = $(this).parent('li').attr('class');

			if(e.keyCode == 9 || e.which == 9){
			
				if(atCK.indexOf('active') > -1){
					$(cBox).find('a').first().focus();
				}else{
					$('.con-tab a').first().focus();
					$(sBox).find('li.group > a').attr('tabindex','-1'); //�� �ъ빱�� �섏� �딅룄濡� 鍮꾪솢�깊솕
					$(sBox).find('a').attr('tabindex','-1'); //�� �ъ빱�� �섏� �딅룄濡� 鍮꾪솢�깊솕
				}
				
			}else if(e.keyCode == 13 || e.which == 13){
				var cBox = $(this).attr('href');
			}		
		});

		$(sBox).find('a').last('a').keydown(function(e){
			if(e.keyCode == 9 || e.which == 9){
				$('.con-tab a').first().focus();
				$(sBox).find('li.group > a').attr('tabindex','-1'); //�� �ъ빱�� �섏� �딅룄濡� 鍮꾪솢�깊솕
				$(sBox).find('a').attr('tabindex','-1'); //�� �ъ빱�� �섏� �딅룄濡� 鍮꾪솢�깊솕
			}
		});
		
	});
	
	
	$('.con-tab a').on('click', function(){
		if(sBox != null){
			$(sBox).find('a').removeAttr('tabindex'); //�ㅽ��� �ъ빱�� �쒖꽦��
		}
		
		var aBox = $(this).attr('href');

		if(aBox != null){
			$(aBox).find('a').removeAttr('tabindex'); //�ы룷而ㅼ떛�� �꾪븳 �쒖꽦��
		}
		
		if($(aBox).find('a').length > 0){			
			$(this).parent('li').siblings('li').children('a').attr('tabindex','-1'); //肄섑뀗痢좊줈 �ㅼ뼱媛�硫� �ㅻⅨ �� 鍮꾪솢�깊솕
		}
		
		$('.con-tab a').keydown(function(e){
			if(e.keyCode == 16 || e.which == 16){
    			$('.con-tab a').parent('li').siblings('li').children('a').removeAttr('tabindex'); //肄섑뀗痢좎뿉 �우쑝硫� �ㅻⅨ �� �쒖꽦��
    		}
		});
		
		$('.con-tab a').focusout(function(){
    		$('.con-tab a').parent('li').siblings('li').children('a').removeAttr('tabindex'); //肄섑뀗痢좎뿉 �우쑝硫� �ㅻⅨ �� �쒖꽦��
		});
		
		$(aBox).find('li.group > a').last().keydown(function(e){
			var atCK = $(this).parent('li').attr('class');
			
			if(e.keyCode == 9 || e.which == 9){
				if(atCK.indexOf('active') > -1){
					if(cBox != null){
						$(cBox).find('a').first().focus();
					}
				}else{
					$('.con-tab li.active').find('a').first().focus();
					$(aBox).find('li.group > a').attr('tabindex','-1'); //�� �ъ빱�� �섏� �딅룄濡� 鍮꾪솢�깊솕
					$(aBox).find('a').attr('tabindex','-1'); //�� �ъ빱�� �섏� �딅룄濡� 鍮꾪솢�깊솕
				}
				
			}else if(e.keyCode == 13 || e.which == 13){
				var cBox = $(this).attr('href');
			}		
		});
		
		$(aBox).find('a').last('a').keydown(function(e){
			if(e.keyCode == 9 || e.which == 9){
				$('.con-tab li.active').find('a').first().focus();
				$(aBox).find('li.group > a').attr('tabindex','-1'); //�� �ъ빱�� �섏� �딅룄濡� 鍮꾪솢�깊솕
				$(aBox).find('a').attr('tabindex','-1'); //�� �ъ빱�� �섏� �딅룄濡� 鍮꾪솢�깊솕
				$(aBox).find('li.group').attr('title','�ロ옒'); //�� �ъ빱�� �섏� �딅룄濡� 鍮꾪솢�깊솕
			}
		});
	
		$(this).parent('li').siblings('li').removeClass('active');
		$(this).parent('li').addClass('active');

		$('.con-wrap .con-box').removeClass('active');
		$(this.hash).addClass('active');
		toggle_keyword_title();
		
		return false;
	});

	function toggle_keyword_title(){
		$(".con-tab li").each(function(){
			if($(this).hasClass("active") === true) {
				$(this).children('a').attr("title","�좏깮��");
			}else{
				$(this).children('a').attr("title","痍⑥냼");
			}
		});
	}
	toggle_keyword_title();
	
});

// 4�곸뒪 �� 紐⑤컮��
$(function() {
	var windowWidth = $(window).width();
	if(windowWidth < 768){
		function init4DepthMenu(select1)
		{	
			var nav = document.getElementById("depth4_menu_ul");
			nav.menu = new Array();
			nav.current = null;
			nav.menuseq = 0;
			var navLen = nav.childNodes.length;
			var menuImg;
			var allA = nav.getElementsByTagName("li");
			for(var k = 0; k < allA.length; k++) {
				var str = allA.item(k).id + "";
				if(str.substr(str.length-10,8) == select1){
					var id = '#'+allA.item(k).id;
					var obj = $(id).clone();
					$(id).after(obj);
					allA.item(k).className = "active";
					return;
				}
			}
		}
	}
});

//faq type
$(function() {
	$('.faqType .group').classtoggle
    ({
        'button'            : '.label',  // �대깽�� 諛쏆쓣 ��寃� �좏깮
        'accordion'			: true,		 // active �� �� �뺤젣�붿냼�� 諛섏쓳 �щ�
    });
        
	$('.faqType .group .label').parent().attr("title","�ロ옒");
	$(".faqType .group .label").each(function(){
		if($(this).parent().hasClass("active") === true) {
			$(this).parent().attr("title","�대┝");
		}
	});
	$('.faqType .group .label').on("click focusout focusin",function(){
    	if($('.faqType .group .label').parent().hasClass('active')){
    		$('.faqType .group .label').parent().attr("title","�ロ옒");
    	}
		if(($(this).parent().hasClass('active'))){
			$(this).parent().attr("title","�대┝");
		}else{
			$(this).parent().attr("title","�ロ옒");
		}
	});
});


/*�ㅽ겕濡ㅼ떆 header class 異붽�*/
$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	if (scroll >= 50) {
		$("#header").addClass("change");
		$(".btn-top").addClass("show");
	} else {
		$("#header").removeClass("change");
		$(".btn-top").removeClass("show");
	}
});

/*�ㅼ쨷 �덉씠�댄뙘�� photo*/
function fnShowPop(sGetName){
    var $layer = $("#"+ sGetName);
    $layer.addClass("on");
}
 
function fnHidePop(sGetName){
    $("#"+ sGetName).removeClass("on");
}

/* 議곗쭅�� - 遺��쒖꽑�앹떆 */
function fncOrgList(org_cd){
	$("#org_cd").val(org_cd);
	var formData = $("#listForm").serialize();
	$.ajax({
		type:'POST',
		async:true,
		url:"/organizationAjax.es",
		data :formData,
		success:function(result){
			var response = result.trim();
			$("#listView").html(response);
		},
		error:function(data,status,err){
			errorBox("�ㅻ쪟媛� 諛쒖깮�덉뒿�덈떎.");
		}
	});
}
