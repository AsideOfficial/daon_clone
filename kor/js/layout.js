/*-------------------------------------------------
title       : �덉씠�꾩썐
-------------------------------------------------*/

$(window).on('scroll load', function(){
    if ( $('html, body').scrollTop() > 110 )
    {
        $('#header').addClass('fixed');
    }
    else
    {
        $('#header').removeClass('fixed');
    }
});


$(function()
{	
    // �ъ씠�몃컮濡쒓�湲�
    $('.hnb1').classtoggle
    ({
        'button'            : '.label',     // �대깽�� 諛쏆쓣 ��寃� �좏깮
        'respond'           : true,         // 諛섏쓳�뺤씪 �� (true �� 諛섏쓳�뺤씪�� 媛�濡� �ъ씠利� �댄븯�먯꽌留� / click �쇰븣留�)
        'respondWidth'      : '1024',       // 諛섏쓳�� 媛�濡� �ъ씠利�
    });

    // �몄뼱
    $('.lang').classtoggle
    ({
        'button'            : '.active'  // �대깽�� 諛쏆쓣 ��寃� �좏깮
    });

    // 寃��됱뼱
    $('.search').classtoggle();

    // 二쇰찓��
    $('#gnb1').gnb1();

    // �꾩껜硫붾돱�댁옄 紐⑤컮�� 硫붾돱
    // $('#gnb2').gnb2(); // 기존 함수 비활성화, 새로운 mobileMenu 사용
    console.log('[layout.js] mobileMenu 함수 호출 시작');
    mobileMenu(); // 새로운 햄버거 메뉴 함수 호출
    console.log('[layout.js] mobileMenu 함수 호출 완료');

    // �듬찓��
    $('#quick').classtoggle();

    // 愿��⑥궗�댄듃
    $('.related .group').classtoggle
    ({
        'button'            : '.label'  // �대깽�� 諛쏆쓣 ��寃� �좏깮
    });
});

/*�듭빱�쒓렇*/
$(document).ready(function() {
	$("#footer .btn-top a").anchorAnimate();
});

jQuery.fn.anchorAnimate = function(settings) {

 	settings = jQuery.extend({
		speed : 1100
	}, settings);	
	
	return this.each(function(){
		var caller = this
		$(caller).click(function (event) {	
			event.preventDefault();
			var locationHref = window.location.href
			var elementClick = $(caller).attr("href");
			
			var destination = $(elementClick).offset().top;
			$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
				window.location.hash = elementClick
			});
		  	return false;
		});
	});
};

/*-------------------------------------------------
title       : 硫붾돱1
-------------------------------------------------*/

$.fn.gnb1 = function( options )
{
    var settings = $.extend
    ({
        'actionType'        : 'mouseenter focusin',     // 硫붾돱媛� �숈옉�섎뒗 �≪뀡 (mouseenter focusin, click)
        'target'            : '#gnb1',                // �쒖꽦�� �� �대옒�ㅺ� 異붽��섎뒗 �붿냼 (怨듬��� 寃쎌슦 �ㅻ쾭�섎뒗 a 留곹겕 遺�紐� li�먮쭔 �대옒�� 異붽���)        
        'class'             : 'active',                 // 異붽��� �대옒�ㅻ챸 (target�� 異붽���)
        'depth2'            : '.submenu',               // �쒕툕硫붾돱
        'closeBtn'          : '.close'                  // �リ린 踰꾪듉�� 蹂꾨룄濡� 議댁옱�섎뒗 寃쎌슦 (�リ린 踰꾪듉�� �대┃�쒖뿉留�)
    }, 
    options );

    return this.each(function()
    {
        var $selecter = $(this);

        $selecter.find('a').on(settings.actionType, function()
        {
            if ( $(this).parent('li').hasClass('active') == false )
            {
                $(this).parent('li').addClass('active');
                $(this).parent('li').siblings('li').removeClass('active');

                $(this).parents('li').addClass('active');
                $(this).parents('li').siblings('li').removeClass('active');

                if (settings.target != '')
                {
                    $(settings.target).addClass(settings.class);
                }
            }

            if ( settings.actionType == 'click' )
            {
                if ( $(this).next('*').length > 0 )
                {
                    return false;
                }
            }
        });
        			
        if ($selecter.find(settings.closeBtn).length == 1)
        {
            $selecter.find(settings.closeBtn).on('click', function()
            {
                $selecter.find('li').removeClass(settings.class);
                $(settings.target).removeClass(settings.class);

                return false;
            });
        }
        else
        {
            // 留덉슦�� �꾩썐
        	$('#gnb1').on('mouseleave',function(){
        		$('#gnb1').removeClass('active');
        		$('#gnb1 #head_menu').children().removeClass('active');
        	});
        }
        
    	

        // �� �꾩썐
        $selecter.find('a:last').keydown(function(e) 
        {
            if(e.keyCode === 9) 
            {
                $selecter.find('li').removeClass(settings.class);
                $(settings.target).removeClass(settings.class);
            }
        });

        // ��꺆 �꾩썐
        $selecter.find('a:first').keydown(function(e) 
        {
            if(e.keyCode === 9 && e.shiftKey) 
            {
                $selecter.find('li').removeClass(settings.class);
                $selecter.removeClass(settings.classname);
            }
        });
    });
};

/*-------------------------------------------------
title       : 硫붾돱2
-------------------------------------------------*/

$.fn.gnb2 = function( options )
{
    var settings = $.extend
    ({
        'btnOpen'           : '.open',      // 理쒖큹 硫붾돱瑜� �щ뒗 踰꾪듉
        'btnClose'          : '.close',     // �リ린 踰꾪듉�� 蹂꾨룄濡� 議댁옱�섎뒗 寃쎌슦
        'classAdd'          : '#gnb2',      // �쒖꽦�� �� �대옒�ㅺ� 異붽��섎뒗 �붿냼
        'classAdd2'         : '#gnb2 .mnfirst',      // 2李� 硫붾돱 珥덇린 �쒖꽦�붾릺�� �대옒�ㅻ챸
        'className'         : 'active',     // 異붽��� �대옒�ㅻ챸 (classAdd�� 異붽���)
        'siblings'			: true,		    // active �� �� �뺤젣�붿냼�� 諛섏쓳 �щ�
        'responsive'        : false,         // 諛섏쓳�뺤씪 �� (true �� 諛섏쓳�뺤씪�� 媛�濡� �ъ씠利� �댄븯�먯꽌留� / false �� 諛섏쓳�� �꾨땺 �뚮룄 �대┃ �숈옉��)
        'responsiveWidth'   : '1024',        // 諛섏쓳�� 媛�濡� �ъ씠利�
        'target'            : '#wrap',                // �쒖꽦�� �� �대옒�ㅺ� 異붽��섎뒗 �붿냼 (怨듬��� 寃쎌슦 �ㅻ쾭�섎뒗 a 留곹겕 遺�紐� li�먮쭔 �대옒�� 異붽���)        
        'class'             : 'sitemap',                 // 異붽��� �대옒�ㅻ챸 (target�� 異붽���)
        	
    }, 
    options );
    
    // gnb2 3李� 硫붾돱 媛�吏�怨� �덈뒗 li�� �대옒�� 異붽�
    $('#gnb2 .submenu > ul > li').each(function(i)
    {
        if ( $(this).find('div').length > 0 )
        {
            $(this).addClass('type1');
        }
    });
    
    // 紐⑤컮�� 硫붾돱�먯꽌 3�곸뒪 �덉쓣 ��
	$('#gnb2 .submenu > ul > li.type1 > a').on('click', function(){
		if($(this).parent().hasClass('active')){
			$(this).parent().removeClass('active');
		}else{
			$(this).parent().addClass('active').siblings().removeClass('active');
		}		
		return false;
	});
	    
    
    return this.each(function()
    {
        var $selecter = $(this);

        // �닿린
        $selecter.find(settings.btnOpen).on('click', function()
        {
            if ( $selecter.find(settings.btnClose).length > 0 )
            {            
                $(settings.classAdd).addClass(settings.className);
                $(settings.target).addClass(settings.class);
                $("html").css("overflow","hidden");
            }
            
            else
            {
                if ( $(settings.classAdd).hasClass(settings.className) == false )
                {
                    $(settings.classAdd).addClass(settings.className);
                }
                else
                {
                    $(settings.classAdd).removeClass(settings.className);
                }
            }

            return false;
        });
        
        // �リ린
        if ( $selecter.find(settings.btnClose).length > 0 )
        {
            $selecter.find(settings.btnClose).on('click', function()
            {
                $(settings.classAdd).removeClass(settings.className);
                $(settings.target).removeClass(settings.class);
                $("html").css("overflow","");

                return false;
            });
        };

        // 硫붾돱 �대┃ �대깽��
        function menuAction($this)
        {
        	 if ( $this.next('*').length > 0 && $this.next('*').css('display') != 'none' )
            {
                
                $this.parent('li').siblings('li').removeClass('active');
                $this.parent('li').addClass('active');

                event.preventDefault();
            }      
        }

        // 硫붾돱
        $selecter.find('li a').on('click', function(e)
        {
            if ( settings.responsive == true )
            {
                if ( $(window).width() <= settings.responsiveWidth )
                {
                    menuAction($(this));
                }
            }
            else
            {
                menuAction($(this));
            }
        });
        
		return false;
    });
};

/*-------------------------------------------------
title       : �대옒�ㅻ� �ｊ퀬 鍮쇨퀬
-------------------------------------------------*/

$.fn.classtoggle = function( options )
{
    var settings = $.extend
    ({
        'button'            : '.open',      // �대깽�� 諛쏆쓣 ��寃� �좏깮
        'action'            : 'click',      // �≪뀡 �좏깮 (click | over)
        'classname'         : 'active',     // 異붽��� �대옒�ㅻ챸
        'accordion'			: false,		// active �� �� �뺤젣�붿냼�� 諛섏쓳 �щ�
        'respond'           : false,        // 諛섏쓳�뺤씪 �� (true �� 諛섏쓳�뺤씪�� 媛�濡� �ъ씠利� �댄븯�먯꽌留� / click �쇰븣留�)
        'respondWidth'      : '768',        // 諛섏쓳�� 媛�濡� �ъ씠利�
        'close'             : '.close'      // �リ린 踰꾪듉�� 蹂꾨룄濡� 議댁옱�섎뒗 寃쎌슦 (�リ린 踰꾪듉�� �대┃�쒖뿉留�)
    }, 
    options );

    return this.each(function()
    {
        var $selecter = $(this);

        function clickActive()
        {
            if ( $selecter.hasClass(settings.classname) == false )
            {
                $selecter.addClass(settings.classname);

                if (settings.accordion == true)
                {
                    $selecter.siblings().removeClass(settings.classname);
                }
            }
            else
            {
                // �リ린 踰꾪듉 議댁옱�� 寃쎌슦 �좉��섏� �딆쓬
                if ( $selecter.find(settings.close).length == 0 )
                {
                    $selecter.removeClass(settings.classname);
                }
            }
        }

        if ( settings.action == 'click' )
        {
            $selecter.find(settings.button).on(settings.action, function()
            {
                if ( settings.respond == false )
                {
                    clickActive();

                    return false;
                }
                else
                {
                    if ( $(window).width() <= settings.respondWidth )
                    {
                        clickActive();

                        return false;
                    }
                    else
                    {
                        $selecter.find(settings.button).off();
                    }
                }
            });
        }
        else
        {
            $selecter.find(settings.button).on
            ({
                mouseenter  : function()
                {
                    $selecter.addClass(settings.classname);
                },
                focusin     : function()
                {
                    $selecter.addClass(settings.classname);
                },
                mouseleave  : function()
                {
                    $selecter.removeClass(settings.classname);
                },
                focusout    : function()
                {
                    $selecter.removeClass(settings.classname);
                }
            });
        }

        // �リ린 踰꾪듉�� 蹂꾨룄濡� 議댁옱�섎뒗 寃쎌슦
        if ( $selecter.find(settings.close).length > 0 )
        {
            $selecter.find(settings.close).on('click', function()
            {
                $selecter.removeClass(settings.classname);

                return false;
            });
        }
        else
        {
            // �� �꾩썐
            $selecter.find('a:last').keydown(function(e) 
            {
                if(e.keyCode === 9) 
                {
                    $selecter.removeClass(settings.classname);
                }
            });

            // ��꺆 �꾩썐
            $selecter.find('a:first').keydown(function(e) 
            {
                if(e.keyCode === 9 && e.shiftKey) 
                {
                    $selecter.removeClass(settings.classname);
                }
            });
        }
    });
};

/*�띿뒪�� 蹂듭궗*/
function copyToClipboard(elementId) 
{
	var aux = document.createElement("input");
	aux.setAttribute("value", document.getElementById(elementId).innerHTML);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);
	alert('二쇱냼媛� 蹂듭궗�섏뿀�듬땲��.');
}

/*-------------------------------------------------
title       : 메인 페이지와 동일한 햄버거 메뉴 기능
-------------------------------------------------*/

// 모바일 메뉴 - 메인 페이지와 완전히 동일한 기능
function mobileMenu() {
    console.log('[mobileMenu] 함수 시작');
    
    var $gnb2 = $('#gnb2');
    var $openBtn = $gnb2.find('.open');
    var $closeBtn = $gnb2.find('.close');
    var $menuAll = $('#head_menu_all');
    var $menuItems = $menuAll.find('> li > a');
    
    console.log('[mobileMenu] 요소 체크:');
    console.log('- $gnb2 길이:', $gnb2.length);
    console.log('- $openBtn 길이:', $openBtn.length);
    console.log('- $closeBtn 길이:', $closeBtn.length);
    console.log('- $menuAll 길이:', $menuAll.length);
    console.log('- $menuItems 길이:', $menuItems.length);
    
    if ($gnb2.length === 0) {
        console.log('[mobileMenu] 오류: #gnb2 요소를 찾을 수 없음');
        return;
    }
    if ($openBtn.length === 0) {
        console.log('[mobileMenu] 오류: .open 버튼을 찾을 수 없음');
        return;
    }
    
    // 열기 버튼 클릭 (중복 방지)
    console.log('[mobileMenu] 열기 버튼 이벤트 등록 시작');
    $openBtn.off('click.mobileMenu').on('click.mobileMenu', function(e) {
        console.log('[mobileMenu] 햄버거 버튼(열기) 클릭됨!!!');
        e.preventDefault();
        console.log('[mobileMenu] preventDefault 실행됨');
        $gnb2.addClass('active');
        $('body').addClass('menu-open');
        console.log('[mobileMenu] 메뉴 열림 - gnb2에 active 클래스 추가됨');
        console.log('[mobileMenu] gnb2 클래스:', $gnb2[0].className);
    });
    console.log('[mobileMenu] 열기 버튼 이벤트 등록 완료');
    
    // 닫기 버튼 클릭 (중복 방지)
    $closeBtn.off('click.mobileMenu').on('click.mobileMenu', function(e) {
        e.preventDefault();
        $gnb2.removeClass('active');
        $('body').removeClass('menu-open');
        // 모든 서브메뉴 닫기
        $menuAll.find('li').removeClass('active');
    });
    
    // 메뉴 아이템 클릭 (서브메뉴 토글, 중복 방지)
    $menuItems.off('click.mobileMenu').on('click.mobileMenu', function(e) {
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

// mobileMenu는 위의 $(function() {...}) 안에서 이미 초기화됨