

// �붾㈃ �뺣� 異뺤냼
var zoomRate = 10;
var curRate = 100;
var minRate = 100;
var maxRate = 200;

function zoomInOut(value) {
	if (((value == "plus")&&(curRate >= maxRate))||((value == "minus") && (curRate <= minRate))) {
	    return;
	} 
	if (value == "plus") {
		curRate = parseInt(curRate) + parseInt(zoomRate);
	} else if (value == "minus") {
		curRate = parseInt(curRate) - parseInt(zoomRate);
	} else {
		curRate = 100;
	}
	document.body.style.zoom = curRate + '%';	
	try
	{
		var obj = document.getElementById('flash_visual').getElementsByTagName('object')[0];

		if (curRate==100)
		{
			obj.style.display	= 'block';
		}
		else
		{
			obj.style.display	= 'none';
		}
	}
	catch (e)
	{ console.log(""); 
	}
}

// �꾨┛��
function printAreaAction(){
	//window.onbeforeprint = beforePrint;
	//window.onafterprint  = afterPrint;
	window.print();
}
// �꾨┛�명븷 �댁슜
var initBody;
function beforePrint(){
//	initBody = document.body.innerHTML;
	document.body.innerHTML = contents.innerHTML;
	
}
function afterPrint(){
//	document.body.innerHTML = initBody;
	window.location.reload();
}


// 利먭꺼李얘린
function bookmarkSite(title, url){
	try{
		window.external.AddFavorite(url, title);
	}catch (e) {
		alert("Ctrl+D �ㅻ� �뚮윭�� 遺곷쭏�щ� 異붽��� �� �덉뒿�덈떎.");
	}
}

//�쒕툕硫붾돱 蹂닿린
var sMenu_launch = "";
function detailSubMenu(name)
{
	try{
		submenu = document.getElementById(name).style;
		if(sMenu_launch != submenu)
		{
			if(sMenu_launch != "")
			{
				sMenu_launch.display = "none";
			}
			submenu.display = "block";
			sMenu_launch = submenu;
			$(".question > a").addClass('open');
			$(".question > a").removeClass('close');
		}
		else
		{
			submenu.display = "none";
			$(".question > a").addClass('close');
			$(".question > a").removeClass('open');
			sMenu_launch = "";
		}
	}catch (e) { console.log(""); }
}

// �앹뾽李� openWin(�뚯씪寃쎈줈, ��寃�, �볦씠, �믪씠, �ㅽ겕濡ㅻ컮�щ�, );
function openWin (url, target, width, height, scrollbars, pos, resize)
{   
	var uri		= url.replace(/(&amp;)/gi, "&");
	var xy_pos	= "";
	
	if (pos)
	{
		xy_pos  = ",left=" + (Math.round(screen.width/2) - Math.round(width/2));
		xy_pos += ",top="  + (Math.round(screen.height/3) - Math.round(height/3));
	}

	var remote	= window.open(uri, target, "width=" + width
				+ ",height=" + height 
				+ ",scrollbars=" + scrollbars 
				+ ",resizable=" + resize
				+ xy_pos
				+ ",toolbar=no,location=no"
				+ ",directories=no,menubar=no,status=yes");
	
	remote.focus();
	return remote;
}


/* Initialize Top Menu */
function initTopMenu(select1, select2)
{
	var focus	= false;
	var root	= document.getElementById('head_menu');
	var delay	= 3000;
	var menu	= new Array();
	var item	= new Array();

	var src2menu	= new Array();
	var src2item	= new Array();

	var getSrc	= function (src)
	{
		var file	= src.split('/');
		var name	= file[(file.length-1)].split('.');
			name	= src.replace(file[(file.length-1)], name[0] + '_on.' + name[1]);

		return {on:name, off:src};
	};

	for (var i=0; i<root.childNodes.length; i++)
	{
		if (root.childNodes[i].nodeName!='LI') { continue; }

		for (var j=0; j<root.childNodes[i].childNodes.length; j++)
		{
			if (root.childNodes[i].childNodes[j].nodeType!=1) { continue; }
			if (root.childNodes[i].childNodes[j].nodeName=='A')
			{
				menu.push(root.childNodes[i].childNodes[j]);
				src2menu.push(getSrc(root.childNodes[i].childNodes[j].getElementsByTagName('img')[0].src));

				var sub_menu	= root.childNodes[i].getElementsByTagName('ul')[0];
				var src_item	= new Array();

				if (sub_menu)
				{
					sub_menu.style.display	= 'block';
					var offset	= 0;

					for (var k in sub_menu.childNodes)
					{
						if (sub_menu.childNodes[k].nodeName=='LI')
						{
							offset	+= 	parseInt(sub_menu.childNodes[k].offsetWidth, 10);
							src_item.push(getSrc(sub_menu.childNodes[k].getElementsByTagName('img')[0].src));
						}
					}
					
					sub_menu.style.width	= offset + "px";
					sub_menu.style.display	= "none";

					for (var l in sub_menu.childNodes)
					{
						if (typeof(sub_menu.childNodes[l])=='object' && sub_menu.childNodes[l].nodeType==3 && sub_menu.childNodes[l].nodeName=='#text')
						{
							sub_menu.removeChild(sub_menu.childNodes[l]);
						}
					}

					item.push(sub_menu);
				}
				else
				{
					item.push('');
				}

				src2item.push(src_item);
			}
		}
	}				

	var getIndex	= function (obj, self)
	{
		for (var i in obj) { if (obj[i]==self) { return i; } }
	}
	
	for (var i in menu)
	{
		menu[i].onfocus	= menu[i].onmouseover = function ()
		{
			root.className	= 'head-menu';
			focus	= true;

			var index	= getIndex(menu, this);
			this.getElementsByTagName('img')[0].setAttribute('src', src2menu[index].on);
			this.className	= 'on';

			for (var i in item)
			{
				if (item[i].nodeName!='UL') { continue; }

				if (i==index)
				{
					root.className	= 'head-menu-on';
					item[i].style.display	= 'block';
				}
				else
				{
					item[i].style.display	= 'none';
				}
			}
		};
	}

	for (var i in item)
	{
		if (item[i].nodeName!='UL') { continue; }

		var item_a	= item[i].getElementsByTagName('a');

		for (var j in item_a)
		{
			item_a[j].i	= i;

			item_a[j].onmouseover	= item_a[j].onfocus	= function ()
			{
				root.className	= 'head-menu-on';
				focus	= true;


				var j	= this.i;

				if (item[j].nodeName=='UL')
				{
					for (var k in item[j].childNodes)
					{
						if (!item[j].childNodes[k]) { continue; }
						if (item[j].childNodes[k].nodeName!='LI') { continue; }
						
						if (item[j].childNodes[k]==this.parentNode)
						{
							menu[j].getElementsByTagName('img')[0].setAttribute('src', src2menu[j].on);
							menu[j].className	= 'on';
							item[j].childNodes[k].getElementsByTagName('img')[0].setAttribute('src', src2item[j][k].on);
						}
						else
						{
							item[j].childNodes[k].getElementsByTagName('img')[0].setAttribute('src', src2item[j][k].off);
						}
					}
				}
			};
		}
	}


	// selected
	var selected	= function ()
	{
		var s1	= parseInt((select1-1), 10);
		var s2	= parseInt((select2-1), 10);

		for (var i in menu)
		{
			if (i==s1)
			{
				root.className	= 'head-menu-on';
				menu[i].getElementsByTagName('img')[0].setAttribute('src', src2menu[i].on);
				menu[i].className	= 'on';
				
				focus	= true;

				if (item[i])
				{
					item[i].style.display	= 'block';

					for (var j in item[i].childNodes)
					{
						if (!item[i].childNodes[j]) { continue; }
						if (item[i].childNodes[j].nodeName!='LI') { continue; }

						if (j==s2)
						{
							item[i].childNodes[j].getElementsByTagName('img')[0].setAttribute('src', src2item[i][j].on);
						}
						else
						{
							item[i].childNodes[j].getElementsByTagName('img')[0].setAttribute('src', src2item[i][j].off);
						}
					}
				}
			}
			else
			{
				menu[i].getElementsByTagName('img')[0].setAttribute('src', src2menu[i].off);
				menu[i].className	= '';
			}
		}
	};

	selected();

	var a = root.getElementsByTagName("a");
	
	for (var i in a)
	{
		a[i].onmouseout	= a[i].onblur	= function ()
		{
			for (var i in menu)
			{
				menu[i].getElementsByTagName('img')[0].setAttribute('src', src2menu[i].off);
				menu[i].className	= '';

				if (item[i])
				{
					for (var j in item[i].childNodes)
					{
						if (!item[i].childNodes[j]) {continue;} 
						if (item[i].childNodes[j].nodeName=='LI')
						{
							item[i].childNodes[j].getElementsByTagName('img')[0].setAttribute('src', src2item[i][j].off);
						}
					}
				}
				
			}
			
			focus	= false;

			setTimeout(function()
			{
				if (focus==false)
				{
					for (var i in item)
					{
						if (item[i].nodeName!='UL') { continue; }
						item[i].style.display	= 'none';
					}

					root.className	= 'head-menu';

					selected();
				}
			}
			, delay);
		}
	}
}

// 1李⑤찓�� �쒖꽦��
function initNavigation(seq) {		
	var nav = document.getElementById("head_menu");
	var allB = nav.getElementsByTagName("a");
	for(var k = 0; k < allB.length; k++) {
		var str = allB.item(k) + "";
		if(str.substr(str.length-10,2) == seq){
			allB.item(k).className = "active";
			return false;
		}
	}
}

// 1李⑤찓�� select �쒖꽦��
function init1DepthComboMenu(seq) {
	var nav = document.getElementById("head_menu_depth1");
	var allB = nav.getElementsByTagName("a");
	for(var k = 0; k < allB.length; k++) {
		var str = allB.item(k) + "";
		if(str.substr(str.length-10,2) == seq){
			var id = '#'+allB.item(k).parentNode.id;
			var obj = $(id).clone();
			$(id).after(obj);
			allB.item(k).parentNode.className = "active";
			return false;
		}
	}
}

// 2李⑤찓�� select �쒖꽦��
function init2DepthComboMenu(seq) {
	var nav = document.getElementById("head_menu_depth2");
	var allB = nav.getElementsByTagName("a");
	for(var k = 0; k < allB.length; k++) {
		var str = allB.item(k) + "";
		if(str.substr(str.length-10,4) == seq){
			var id = '#'+allB.item(k).parentNode.id;
			var obj = $(id).clone();
			$(id).after(obj);
			allB.item(k).parentNode.className = "active";
			return false;
		}
	}
}

// 3李⑤찓�� select �쒖꽦��
function init3DepthComboMenu(seq) {
	var nav = document.getElementById("head_menu_depth3");
	var allB = nav.getElementsByTagName("a");
	for(var k = 0; k < allB.length; k++) {
		var str = allB.item(k) + "";
		if(str.substr(str.length-10,6) == seq){
			var id = '#'+allB.item(k).parentNode.id;
			var obj = $(id).clone();
			$(id).after(obj);
			allB.item(k).parentNode.className = "active";
			return false;
		}
	}
}

// 4李⑤찓�� select �쒖꽦��
function init4DepthComboMenu(seq) {
	var nav = document.getElementById("head_menu_depth4");
	var allB = nav.getElementsByTagName("a");
	for(var k = 0; k < allB.length; k++) {
		var str = allB.item(k) + "";
		if(str.substr(str.length-10,8) == seq){
			var id = '#'+allB.item(k).parentNode.id;
			var obj = $(id).clone();
			$(id).after(obj);
			allB.item(k).parentNode.className = "active";
			return false;
		}
	}
}

// 5李⑤찓�� select �쒖꽦��
function init5DepthComboMenu(seq) {
	var nav = document.getElementById("head_menu_depth5");
	var allB = nav.getElementsByTagName("a");
	for(var k = 0; k < allB.length; k++) {
		var str = allB.item(k) + "";
		if(str.substr(str.length-10,10) == seq){
			var id = '#'+allB.item(k).parentNode.id;
			var obj = $(id).clone();
			$(id).after(obj);
			allB.item(k).parentNode.className = "active";
			return false;
		}
	}
}

// 紐⑤컮�� 1李⑤찓�� �쒖꽦��
function initNavigationMbl(seq) {		
	var nav = document.getElementById("head_menu_all");
	var allB = nav.getElementsByTagName("a");
	for(var k = 0; k < allB.length; k++) {
		var str = allB.item(k) + "";
		if(str.substr(str.length-10,2) == seq){
			allB.item(k).className = "active";
			$("div.submenu"+seq).attr("style","display:block");
			return false;
		}
	}
}

// 硫붾돱 �ㅻ퉬寃뚯씠��
function initNavigation2(seq, seq2) {		
	var nav = document.getElementById("head_menu");
	nav.menu = new Array();
	nav.current = null;
	nav.menuseq = 0;
	var navLen = nav.childNodes.length;
	var menuImg;
	
	var allA = nav.getElementsByTagName("a");
	for(var k = 0; k < allA.length; k++) {
		allA.item(k).onmouseover = allA.item(k).onfocus = function () {
			nav.isOver = true;
		}
		allA.item(k).onmouseout = allA.item(k).onblur = function () {
			nav.isOver = false;
			setTimeout(function () {
				if (nav.isOver == false) {
					if (nav.menu[seq]) {
						nav.menu[seq].onmouseover();
					} else if(nav.current) {
						menuImg = nav.current.childNodes.item(0);
						menuImg.src = menuImg.src.replace("_on.png", ".png");
						if (nav.current.submenu) {
							nav.current.submenu.style.display = "none";
						}
						nav.current = null;
					}
				}
			}, 3000);
		}
	}
	
	var allB = nav.getElementsByTagName("a");
	for(var k = 0; k < allB.length; k++) {
		var str = allB.item(k) + "";
		if(str.substr(str.length-12,4) == seq2){
			allB.item(k).className = "active";
		}
	}

	for (var i = 0; i < navLen; i++) {
		var navItem = nav.childNodes.item(i);
		if (navItem.tagName != "LI") {
			continue;
		}
		var navAnchor = navItem.getElementsByTagName("a").item(0);
		navAnchor.submenu = navItem.getElementsByTagName("ul").item(0);
	
		navAnchor.onmouseover = navAnchor.onfocus = function () {
			if (nav.current) {
				menuImg = nav.current.childNodes.item(0);
				menuImg.src = menuImg.src.replace("_on.gif", ".gif");
				if (nav.current.submenu) {
					nav.current.submenu.style.display = "none";
				}
				nav.current = null;
			}
			if (nav.current != this) {
				menuImg = this.childNodes.item(0);
				menuImg.src = menuImg.src.replace(".gif", "_on.gif");
				if (this.submenu) {
					this.submenu.style.display = "block";
				}
				nav.current = this;
			}
			nav.isOver = true;
		}
		nav.menuseq++;
		nav.menu[nav.menuseq] = navAnchor;
	}
	if (nav.menu[seq]) {
		nav.menu[seq].onmouseover();
	}
}

//��硫붾돱 active
function init1DepthComboMenu2(seq) {
	var nav = document.getElementById("head_menu_all");
	var allB = nav.getElementsByTagName("a");
	for(var k = 0; k < allB.length; k++) {
		var str = allB.item(k) + "";
		if(str.substr(str.length-10,2) == seq){
			allB.item(k).parentNode.className = allB.item(k).parentNode.className +" active";
			return false;
		}
	}
}

function init2DepthComboMenu2(seq) {
	$('#gnb2 .submenu > ul > li > a').each(function(i){
	 	var str = this.href;
	 	if(str.substr(str.length-10,4) == seq){
			this.parentNode.className = this.parentNode.className +" active";
			return false;
		}
    });
}

function init3DepthComboMenu2(seq) {
	$('#gnb2 .submenu > ul > li > div > ul > li > a').each(function(i){
	 	var str = this.href;
	 	if(str.substr(str.length-10,6) == seq){
			this.parentNode.className = this.parentNode.className +" active";
			return false;
		}
    });
}


/* Initialize Left Menu - li */
function initLeftMenuLI(select1, select2)
{	
	var nav = document.getElementById("left_menu_top");
	nav.menu = new Array();
	nav.current = null;
	nav.menuseq = 0;
	var navLen = nav.childNodes.length;
	var menuImg;
	
	var allB = nav.getElementsByTagName("li");
	for(var k = 0; k < allB.length; k++) {
		var str = allB.item(k).id + "";
		if(str.substr(str.length-10,6) == select2){
			allB.item(k).className += " active";
			try{ allB.item(k).childNodes.item(0).childNodes.item(0).src = allB.item(k).childNodes.item(0).childNodes.item(0).src.replace(".gif", "_on.gif"); }catch (e) { console.log(""); }
		}
	}
	
	var allAA = nav.getElementsByTagName("ul");
	for(var k = 0; k < allAA.length; k++) {
		var str = allAA.item(k).className + "";
		if(str.substr(2,4) == select1){
			allAA.item(k).style.display = "block";
		}
	}

	var allA = nav.getElementsByTagName("li");
	for(var k = 0; k < allA.length; k++) {
		var str = allA.item(k).id + "";
		if(str.substr(str.length-10,4) == select1){
			allA.item(k).className += " active";
			try{ allB.item(k).childNodes.item(0).childNodes.item(0).src = allB.item(k).childNodes.item(0).childNodes.item(0).src.replace(".gif", "_on.gif"); }catch (e) { console.log(""); }
			return;
		}
	}
}

/* Initialize Left Menu - a */
function initLeftMenu(select1, select2)
{	
	var nav = document.getElementById("left_menu_top");
	nav.menu = new Array();
	nav.current = null;
	nav.menuseq = 0;
	var navLen = nav.childNodes.length;
	var menuImg;

	var allAA = nav.getElementsByTagName("ul");
	for(var k = 0; k < allAA.length; k++) {
		var str = allAA.item(k).className + "";
		if(str.substr(0,4) == select1){
			allAA.item(k).style.display = "block";
		}
	}

	var allB = nav.getElementsByTagName("a");
	for(var k = 0; k < allB.length; k++) {
		var str = allB.item(k) + "";
		if(str.substr(str.length-10,6) == select2){
			allB.item(k).className = "active";
		}
	}

	var allA = nav.getElementsByTagName("a");
	for(var k = 0; k < allA.length; k++) {
		var str = allA.item(k) + "";
		if(str.substr(str.length-10,4) == select1){
			allA.item(k).className = "active";
			return;
		}
	}
}

/* 3Depth Left Menu */
function init3DepthMenu(select1)
{	
	var nav = document.getElementById("depth3_menu_div");
	nav.menu = new Array();
	nav.current = null;
	nav.menuseq = 0;
	var navLen = nav.childNodes.length;
	var menuImg;
	
	var allA = nav.getElementsByTagName("li");
	for(var k = 0; k < allA.length; k++) {
		var str = allA.item(k).id + "";
		if(str.substr(str.length-10,6) == select1){
			allA.item(k).className = "active";
			return;
		}
	}
}

/* 4Depth Left Menu */
function init4DepthMenu(select1)
{	
	var nav = document.getElementById("depth4_menu_div");
	nav.menu = new Array();
	nav.current = null;
	nav.menuseq = 0;
	var navLen = nav.childNodes.length;
	var menuImg;
	
	var allA = nav.getElementsByTagName("li");
	for(var k = 0; k < allA.length; k++) {
		var str = allA.item(k).id + "";
		if(str.substr(str.length-10,8) == select1){
			allA.item(k).className = "active";
			allA.item(k).getElementsByTagName("a").item(0).setAttribute("title","�좏깮��");
			return;
		}
	}
}

/* 5Depth Left Menu */
function init5DepthMenu(select1)
{	
	var nav = document.getElementById("depth5_menu_div");
	nav.menu = new Array();
	nav.current = null;
	nav.menuseq = 0;
	var navLen = nav.childNodes.length;
	var menuImg;
	
	var allA = nav.getElementsByTagName("li");
	for(var k = 0; k < allA.length; k++) {
		var str = allA.item(k).id + "";
		if(str.substr(str.length-10,10) == select1){
			allA.item(k).className = "active";
			allA.item(k).getElementsByTagName("a").item(0).setAttribute("title","�좏깮��");
			return;
		}
	}
}

// �대�吏� �ㅻ쾭
function initImgOver(as_ID) {
	var rollNav = document.getElementById(as_ID);	
	var rollLan = rollNav.childNodes.length;	
	var rollItem;	
	var rollAnchor;
	var rollImg;	
	
	for (var i=0; i < rollLan; i++) {
		rollItem = rollNav.childNodes.item(i);
		if (rollItem.tagName != "LI") {
			continue;
		}
		rollAnchor = rollItem.getElementsByTagName("a").item(0);
		if (rollAnchor.className != "over") {		
			rollAnchor.onmouseover = rollAnchor.onfocus = function () {
				if (rollNav.current) {
					rollImg = rollNav.current.childNodes.item(0);
					rollImg.src = rollImg.src.replace("_on.gif", ".gif");
					rollNav.current = null;				
				}
				if ((rollNav.current == null) || (rollNav.current != this)) {
					rollImg = this.childNodes.item(0);
					rollImg.src = rollImg.src.replace(".gif", "_on.gif");
					rollNav.current = this;
				}
				rollNav.isOver = true;			
			}
			rollAnchor.onmouseout = rollAnchor.onblur = function () {
				if (rollNav.current) {
					rollImg = rollNav.current.childNodes.item(0);
					rollImg.src = rollImg.src.replace("_on.gif", ".gif");
					rollNav.current = null;				
				}
			}
		}
	}	
}

function getCookie(name)
{
	var nameOfCookie = name + "=";
	var x = 0;
	while ( x <= document.cookie.length )
	{
		var y = ( x + nameOfCookie.length );
		if ( document.cookie.substring(x,y) == nameOfCookie )
		{
			if( (endOfCookie = document.cookie.indexOf(";", y)) == -1 )
				endOfCookie = document.cookie.length;
			return unescape(document.cookie.substring(y, endOfCookie)); 
		}
		x = document.cookie.indexOf( " ", x ) + 1;
		if ( x == 0 )
			break;
	}
	return "";		
}

// �덉씠�� �앹뾽 �닿린
function openLayer(arg)
{
	var pop = document.getElementById(arg);
	pop.style.display = "block";
}

// �덉씠�� �앹뾽 �リ린
function closeLayer(arg)
{
	var pop = document.getElementById(arg);
	pop.style.display = "none";
}

// iframe �몃줈��
function frameResize(obj){
	var obj_document = obj.contentWindow.document;
	if(obj_document.height){
		obj.style.height = obj_document.height+"px";
	}else{
		obj.style.height = obj_document.body.scrollHeight+"px";
	}
}

// 硫붿씤 理쒓렐寃뚯떆臾� ��
function initBoardArticle (container_id)
{
	var container	= document.getElementById(container_id);
	var h3			= container.getElementsByTagName("h3");

	for (var i=0; i<h3.length; i++)
	{
		if (h3.item(i).id=="article_setting")
		{
			h3.item(i).id			= "js_" + h3.item(i).id;

			var set	= h3.item(i).getElementsByTagName("a").item(0);
				set.container	= h3;
				set.targetElement	= document.getElementById(h3.item(i).getElementsByTagName("a").item(0).href.split("#")[1]);
				set.targetElement.style.position	= "absolute";
				set.targetElement.style.display		= "none";
				set.targetElement.style.padding	= "0";
				set.onclick	= function ()
				{
					this.targetElement.style.display	= "block";
					return false;
				}

				continue;
		}

		h3.item(i).className	= "js_" + h3.item(i).className;
		h3.item(i).id			= "js_" + h3.item(i).id;

		var article	= h3.item(i).getElementsByTagName("a").item(0);
			article.container		= h3;
			article.targetElement	= document.getElementById(h3.item(i).getElementsByTagName("a").item(0).href.split("#")[1]);
			article.targetElement.style.display	= "none";
			article.onclick	= article.onfocus	= function ()
			{
				var current	= this.container.current;

				if (current!=this)
				{
					if (current)
					{
						current.targetElement.style.display	= "none";
						current.className	= "";
					}

					this.targetElement.style.display	= "block";
					this.className	= "menu_on";
					this.container.current	= this;
				}
				return false;

			};
			
			article.className	= "";

			if (!article.container.first) { article.container.first	= article;}
	}
	
	h3.first.onclick();
}

// 硫붿씤 理쒓렐寃뚯떆臾� ��
function initBoardArticle_onoff (container_id)
{
	var container	= document.getElementById(container_id);
	var h3			= container.getElementsByTagName("h4");

	for (var i=0; i<h3.length; i++)
	{
		if (h3.item(i).id=="article_setting")
		{
			h3.item(i).id			= "js_" + h3.item(i).id;

			var set	= h3.item(i).getElementsByTagName("a").item(0);
				set.container	= h3;
				set.targetElement	= document.getElementById(h3.item(i).getElementsByTagName("a").item(0).href.split("#")[1]);
				set.targetElement.style.position	= "absolute";
				set.targetElement.style.display		= "none";
				set.targetElement.style.padding	= "0";
				set.onclick	= function ()
				{
					this.targetElement.style.display	= "block";
					return false;
				}

				continue;
		}

		h3.item(i).className	= "js_" + h3.item(i).className;
		h3.item(i).id			= "js_" + h3.item(i).id;

		var article	= h3.item(i).getElementsByTagName("a").item(0);
		article.container		= h3;
		article.targetElement	= document.getElementById(h3.item(i).getElementsByTagName("a").item(0).href.split("#")[1]);
		article.targetElement.style.display	= "none";
		article.onclick	= article.onfocus	= function ()
		{
			var current	= this.container.current;
			if (current!=this)
			{
				if (current)
				{
					current.targetElement.style.display	= "none";
					current.className	= "";
					//current.getElementsByTagName("img").item(0).src = (current.getElementsByTagName("img").item(0).src).replace("_on.gif", ".gif");
				}

				this.targetElement.style.display	= "block";
				this.className	= "active";
				this.container.current	= this;
				//this.getElementsByTagName("img").item(0).src = (this.getElementsByTagName("img").item(0).src).replace(".gif", "_on.gif");
			}
			return false;

		};
		
		article.className	= "";

		if (!article.container.first) { article.container.first	= article;}
	}
	
	h3.first.onclick();
}

// 硫붿씤 理쒓렐寃뚯떆臾� ��
function initBoardArticle_over (container_id)
{
	var container	= document.getElementById(container_id);
	var h3			= container.getElementsByTagName("h3");

	for (var i=0; i<h3.length; i++)
	{
		if (h3.item(i).id=="article_setting")
		{
			h3.item(i).id			= "js_" + h3.item(i).id;

			var set	= h3.item(i).getElementsByTagName("a").item(0);
				set.container	= h3;
				set.targetElement	= document.getElementById(h3.item(i).getElementsByTagName("a").item(0).href.split("#")[1]);
				set.targetElement.style.position	= "absolute";
				set.targetElement.style.display		= "none";
				set.targetElement.style.padding	= "0";
				set.onmouseover	= function ()
				{
					this.targetElement.style.display	= "block";
					return false;
				}

				continue;
		}

		h3.item(i).className	= "js_" + h3.item(i).className;
		h3.item(i).id			= "js_" + h3.item(i).id;

		var article	= h3.item(i).getElementsByTagName("a").item(0);
			article.container		= h3;
			article.targetElement	= document.getElementById(h3.item(i).getElementsByTagName("a").item(0).href.split("#")[1]);
			article.targetElement.style.display	= "none";
			article.onmouseover	= article.onfocus	= function ()
			{
				var current	= this.container.current;

				if (current!=this)
				{
					if (current)
					{
						current.targetElement.style.display	= "none";
						current.className	= "";
					}

					this.targetElement.style.display	= "block";
					this.className	= "menu_on";
					this.container.current	= this;
				}
				return false;

			};
			
			article.className	= "";

			if (!article.container.first) { article.container.first	= article;}
	}
	
	h3.first.onmouseover();
}

// �낅젰李� 湲��먯젣��
function insertMax(arg, id, obj, spanID, val) {
	if(arg.value.length > obj){
		document.getElementById(id).value = val.substr(0,obj);
	}
    document.getElementById(spanID).innerHTML = arg.value.length;
}

function copyURI(arg) {
	if(arg == "") {
		alert("蹂듭궗�� URL 二쇱냼媛� �놁뒿�덈떎.");
		return;
	}
	var IE = (window.clipboardData) ? true : false;
	if(IE) {
		window.clipboardData.setData("Text", arg);
		alert("URL 二쇱냼媛� 蹂듭궗�섏뿀�듬땲��.");
	} else {
		prompt("�꾩옱�섏씠吏��� URL 二쇱냼�낅땲��.\nCtrl+C瑜� �뚮윭 �대┰蹂대뱶�� 蹂듭궗�섏꽭��.", arg);
	}
}

function fncScrap(arg, arg2){
	var returnURL = "";
	if(confirm("留덉씠�섏씠吏� > �섏쓽 �ㅽ겕�⑹뿉 ���λ릺�덉뒿�덈떎.\n吏�湲� �뺤씤�섏떆寃좎뒿�덇퉴?")){
		returnURL = encodeURIComponent("http://www.gwangju.go.kr/ease/menu.es?S=a1&M=120500000000");
	}
	location.href = arg + encodeURIComponent(arg2) + "&returnURL=" + returnURL;
}

function fncScrapDelete(arg){
	if(confirm("�ㅽ겕�� 紐⑸줉�� ��젣 �섏떆寃좎뒿�덇퉴?")){
		location.href = arg;
	}
}

function urlMove(arg){
	var str = document.getElementById(arg).value;
	if(str == "" | str == "#"){
		alert("�좏깮�� ��ぉ�� �놁뒿�덈떎.");
		return false;
	}else{
		return true;
	}
}

/**
* 寃뚯떆�� SNS 怨듯넻 �묒뀡
* @param site_nm : �ъ씠�몃챸
* @param title : 湲��쒕ぉ
* @param url : 留곹겕
* @return
*/
function snsApi(sns)
{
	var fm = document.snsForm;
	fm.url.value = document.location.href;
	fm.target = "_blank";
	fm.action = "/api/sns.es?sns="+sns;
	fm.submit();
}
function twitter(site_nm, title, url){
	var str = site_nm + " | " + title + " " + url;
	var sitelink = "http://twitter.co.kr/home?status=" + encodeURIComponent(str);
	window.open(sitelink);
}
function me2day(site_nm, title, url){
	var str = site_nm + " | " + title + " " + url;
	var sitelink = "http://me2day.net/posts/new?new_post[body]=" + encodeURIComponent(str);
	window.open(sitelink);
}
function facebook(site_nm, title, url){
	var str = site_nm + " | " + title;
	var sitelink = "http://facebook.co.kr/sharer.php?u=" + encodeURIComponent(url) + "&t=" + encodeURIComponent(str);
	window.open(sitelink);
}


var xhr = null;
function getXMLHttpRequest() {
    if (window.ActiveXObject) {
        try {
            return new ActiveXObject("Msxml2.XMLHTTP");//IE �곸쐞 踰꾩졏
        } catch (e1) {
            try {
                return new ActiveXObject("Microsoft.XMLHTTP");//IE �섏쐞 踰꾩졏
            } catch (e2) {
                return null;
            }
        }
    } else if (window.XMLHttpRequest) {
        return new XMLHttpRequest();//IE �댁쇅�� 釉뚮씪�곗�(FireFox ��)
    } else {
        return null;
    }
}// XMLHttpRequest 媛앹껜 �산린
 
function requestHello(e,URL) {
	var ex_obj = document.getElementById("message");
    if(!e) e = window.Event;
    //param = f.name.value;
    //URL = URL + "?name=" + encodeURIComponent(param);//�쒓� 泥섎━
    xhr = getXMLHttpRequest();//XMLHttpRequest 媛앹껜 �산린
    xhr.onreadystatechange = responseHello;//肄쒕갚 �⑥닔  �깅줉
    xhr.open("GET", URL, true);//�곌껐
    xhr.send(null);//�꾩넚
}// �쒕쾭�� �붿껌
 
function responseHello() {
    if (xhr.readyState == 4) {//�꾨즺
        if (xhr.status == 200) {//�ㅻ쪟�놁씠 OK
            var str = xhr.responseText;//�쒕쾭�먯꽌 蹂대궦 �댁슜 諛쏄린
            document.getElementById("message").innerHTML = str;//蹂댁뿬二쇨린 
        } else {
            alert("Fail : " + xhr.status);
        }
    }
}// �묐떟

function displayTab(coId,num,curr) {
	for(var i=0;i<=num;i++){
		var obj = document.getElementById(coId+i);
		if(obj){ obj.style.display = "none"; }
	}
	var obj = document.getElementById(coId+curr);
	if(obj){ obj.style.display = "block"; }
}

//IE �몄�瑜� 諛섑솚(IE �쇰㈃ true �꾨땲硫� false)
function is_IE() {
	if (navigator.appName.charAt(0) == "M")
		return true ;
	else
		return false ;
}



var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
// �뺤씤 踰꾪듉 �좏깮�� �곸꽭紐⑸줉 議고쉶
function emailSubmit(){
	if(document.emailInsForm.email.value == ""){
		alert("�대찓�� 二쇱냼媛� �뺥솗�섏� �딆뒿�덈떎.");
		document.emailInsForm.email.focus();
	}else if( !regExp.test(document.emailInsForm.email.value) ){
		alert("�щ컮瑜� �대찓�� �뺤떇�� �꾨떃�덈떎.");
		document.emailInsForm.email.focus();
	}else{
		if(confirm("�댁뒪�덊꽣瑜� �좎껌�섏떆寃좎뒿�덇퉴?")){
			$.post("/mail.es",
			{
				act : "insMailer",
				email : document.emailInsForm.email.value
			},
			function(data,status){
				$("#emailMessage").html(data);
			});
		}
	}
}

//肄붾찘�� 湲��먯닔 理쒕��� �쒗븳
function insertContentsMax(spanID, max, formNm) {
	if(formNm.value.length > max){
		alert("�쒗븳 湲��먯닔 "+max+"�먮� 珥덇낵�섏��듬땲��.");
		formNm.value = formNm.value.substr(0,max);
	}
	document.getElementById(spanID).innerHTML = formNm.value.length;
	/*
	var word = formNm.value.replace(/(^\s*)|(\s*$)/g,"");
	if(word.length > max){
		formNm.value = formNm.value.substr(0,max);
	}
	document.getElementById(spanID).innerHTML = word.length;
	*/
}

//湲��� �고듃 �ъ씠利덈쭔 議곗젅 �섎뒗 �⑥닔
defsize = 0.83;
var fSize=14;
//window.onload = onInit;

function onInit(){
    var font = getCookieValue("font");
    var fontSize = getCookieValue("fontSize");
    if(font != ""){
        scaleFontType(font);
    }
    if(fontSize != ""){
        fontSize = Number(fontSize) - fSize;
        scaleFont(fontSize);
    }
}

///////////////////////////////////////////////////////////////////////
function getCookieValue(cookieName){
    var cookieValue = null;
    if(document.cookie.length > 0){
        var offset = document.cookie.indexOf(cookieName +"=");
        if(offset != -1) {
            offset += cookieName.length;
            end = document.cookie.indexOf(";", offset);
            if (end == -1)    end = document.cookie.length;
            cookieValue = unescape(document.cookie.substring(offset+1, end));
        }
    }
        
    if(cookieValue == null)
        return "";
        
    return cookieValue;
}

var expireDate = new Date();
function setCookieValue(cookieName,cookieValue){
    expireDate.setMonth(expireDate.getMonth()+6);    
    document.cookie = cookieName + "=" + escape(cookieValue) + "; expires=" + expireDate.toGMTString();    
}


function scaleFont(n){
    fSize = fSize + n;
    if(fSize < 10)return;
    var valueCheck = document.getElementById("wrap");
    if(valueCheck !=null){
     var objTXT = document.getElementById("wrap")
     var objTd = document.getElementById("wrap").getElementsByTagName( "td" );// <td>, <TD>�� �댁슜�� 紐⑤몢 �쎌뼱��
     var objDiv = document.getElementById("wrap").getElementsByTagName( "div" );
     var objSpan = document.getElementById("wrap").getElementsByTagName( "span" );
     var objA = document.getElementById("wrap").getElementsByTagName( "a" );
     var objs = document.getElementById("wrap").getElementsByTagName( "p" );
     var objli = document.getElementById("wrap").getElementsByTagName( "li" );
     objTXT.style.fontSize = fSize + "px";
     for( i=0; i < objDiv.length; i++ )    objDiv[i].style.fontSize = fSize + "px";
     for( i=0; i < objTd.length; i++ )    objTd[i].style.fontSize = fSize + "px";
     for( i=0; i < objSpan.length; i++ )    objSpan[i].style.fontSize = fSize + "px";
     for( i=0; i < objA.length; i++ )    objA[i].style.fontSize = fSize + "px";
     for( i=0; i < objs.length; i++ )    objs[i].style.fontSize = fSize + "px";
     for( i=0; i < objli.length; i++ )    objli[i].style.fontSize = fSize + "px";
     setCookieValue("fontSize",fSize);
    }
}

function scaleFontType(str){
    var valueCheck = document.getElementById("wrap");
    if(valueCheck !=null){
     var objTd = document.getElementById("wrap").getElementsByTagName( "td" );// <td>, <TD>�� �댁슜�� 紐⑤몢 �쎌뼱��
     var objDiv = document.getElementById("wrap").getElementsByTagName( "div" );
     var objSpan = document.getElementById("wrap").getElementsByTagName( "span" );
     var objA = document.getElementById("wrap").getElementsByTagName( "a" );
     var objs = document.getElementById("wrap").getElementsByTagName( "p" );
     var objli = document.getElementById("wrap").getElementsByTagName( "li" );
     for( i=0; i < objDiv.length; i++ )    objDiv[i].style.fontFamily = str;
     for( i=0; i < objTd.length; i++ )    objTd[i].style.fontFamily = str;
     for( i=0; i < objSpan.length; i++ )    objSpan[i].style.fontFamily = str;
     for( i=0; i < objA.length; i++ )    objA[i].style.fontFamily = str;
     for( i=0; i < objs.length; i++ )    objs[i].style.fontFamily = str;
     for( i=0; i < objli.length; i++ )    objli[i].style.fontFamily = str;
     setCookieValue("font",str);
     }  
}

var nowZoom = 100;
function zoomIn() {
	try{
		if(/Firefox/.test(navigator.userAgent)) {
			alert("�� 釉뚮씪�곗��먯꽌�� 湲곕뒫�� 吏��먰븯吏� �딆뒿�덈떎. \nCtrl�� + 留덉슦�� �좎쓣 �댁슜�섏뿬 �뺣� 異뺤냼�섏떎�� �덉뒿�덈떎.");
		} else {
			nowZoom = nowZoom - 10;
			if(nowZoom <= 70) nowZoom = 70;
			zooms();
		}
	}catch (e) {
		alert("�� 釉뚮씪�곗��먯꽌�� 湲곕뒫�� 吏��먰븯吏� �딆뒿�덈떎.");
	}
}

function zoomOut() {
	try{
		if(/Firefox/.test(navigator.userAgent)) {
			alert("�� 釉뚮씪�곗��먯꽌�� 湲곕뒫�� 吏��먰븯吏� �딆뒿�덈떎. \nCtrl�� + 留덉슦�� �좎쓣 �댁슜�섏뿬 �뺣� 異뺤냼�섏떎�� �덉뒿�덈떎.");
		} else {
			nowZoom = nowZoom + 20;
			if(nowZoom >= 500) nowZoom = 500;
			zooms();
		}
	}catch (e) {
		alert("�� 釉뚮씪�곗��먯꽌�� 湲곕뒫�� 吏��먰븯吏� �딆뒿�덈떎.");
	}
}

function zoomReset(){
	nowZoom = 100; 
	zooms();
}

function zooms(){
	try{
		document.body.style.zoom = nowZoom + '%';
		if(nowZoom==70){
			alert ("30%異뺤냼 �섏뿀�듬땲��. �� �댁긽 異뺤냼�� �� �놁뒿�덈떎.");
		}

		if(nowZoom==500){
			alert ("500%�뺣� �섏뿀�듬땲��. �� �댁긽 �뺣��� �� �놁뒿�덈떎.");
		}
	}catch (e) {
		alert("�� 釉뚮씪�곗��먯꽌�� 湲곕뒫�� 吏��먰븯吏� �딆뒿�덈떎.");
	}
	
}

// 
var lastPoint = "";
function goPoint02(point) {
	if(document.getElementById(point).style.display != "none"){
		document.getElementById(point).style.display = "none";
	} else {
		try	{
		document.getElementById(lastPoint).style.display = "none";
			} catch(e) { console.log(""); }
		document.getElementById(point).style.display = "block";
			lastPoint = point;			
		}
}

// �대┃�� arg �щ씪�대뵫
function slideToggleView(arg){
	$(arg).slideToggle("fast");
}



//Tab Content
function initTabMenu(tabContainerID) {
	var tabContainer = document.getElementById(tabContainerID);
	var tabAnchor = tabContainer.getElementsByTagName("a");
	var i = 0;

	for(i=0; i<tabAnchor.length; i++) {
		if (tabAnchor.item(i).className == "tab")
			thismenu = tabAnchor.item(i);
		else
			continue;

		thismenu.container = tabContainer;
		thismenu.targetEl = document.getElementById(tabAnchor.item(i).href.split("#")[1]);
		thismenu.targetEl.style.display = "none";
		thismenu.imgEl = thismenu.getElementsByTagName("img").item(0);
		if (thismenu.imgEl) {
			thismenu.onfocus = function () {
				//this.onfocus();
			}
		}
		thismenu.onclick = tabMenuOver;
		
		if (!thismenu.container.first)
			thismenu.container.first = thismenu;
	}
	tabContainer.first.onclick();
}
function tabMenuOver() {
	currentmenu = this.container.current;
	if (currentmenu != this) {
		if (currentmenu) {
			currentmenu.targetEl.style.display = "none";
			if (currentmenu.imgEl) {
				currentmenu.imgEl.src = currentmenu.imgEl.src.replace("_on.gif", ".gif");
				currentmenu.className = currentmenu.className.replace(" selectd", "");
			} else {
				currentmenu.className = currentmenu.className.replace(" selectd", "");
			}
		}

		this.targetEl.style.display = "block";
		if (this.imgEl) {
			this.imgEl.src = this.imgEl.src.replace(".gif", "_on.gif");
			this.className += " selectd";
		} else {
			this.className += " selectd";
		}
		this.container.current = this;
	}
	return false;
}


//BMI 泥댄겕 �꾨줈洹몃옩
function bmiCheck(){
	document.getElementById("bmi01").innerHTML = "-";
	document.getElementById("bmi02").innerHTML = "-";

	var result01 = "";
	var result02 = "";
	var ja = 2;
	result02 = document.getElementById("bmiWeight").value / (document.getElementById("bmiHeight").value/100 * document.getElementById("bmiHeight").value/100);
	result02 = result02.toFixed(1);
	if(result02 < 18.5){ result01 = "��泥댁쨷";
	}else if(result02 >= 18.5 && result02 <= 22.9){ result01 = "�뺤긽泥댁쨷";
	}else if(result02 >= 23 && result02 <= 24.9){ result01 = "怨쇱껜以�";
	}else if(result02 >= 25 && result02 <= 29.9){ result01 = "鍮꾨쭔 I";
	}else if(result02 >= 30 && result02 <= 39.9){ result01 = "鍮꾨쭔 II";
	}else if(result02 >= 40){ result01 = "�ш컖�� 鍮꾨쭔 III";
	}
	
	document.getElementById("bmi01").innerHTML = result01;
	document.getElementById("bmi02").innerHTML = result02;
	
	//寃뚯떆�� �덉씠�댁갹
	function boardPopLayer(divId, url){
		document.getElementById(divId).style.display = "block";
		$.post(url,
		function(data,status){
			$("#"+divId).html(data);
		});
	}
}

// 硫붿씪�좏깮��
function fnc_mailChange(arg, arg2){
	var sel_f = document.getElementById(arg2);
	if(arg == ""){
		sel_f.readOnly = false;
		sel_f.focus();
		sel_f.display = "block";
	}else{
		sel_f.readOnly = true;
		sel_f.display = "none";
	}
	sel_f.value = arg;
}

function findeepSearch2(type){
	if(type == "main"){
		if($("#search").val().trim().length >= 2){
			$("#searchForm").submit();
		}else{
			alert("寃��됱뼱瑜� 2湲��� �댁긽 �낅젰�섏꽭��.");
			$("#search").val($("#search").val().trim());
			event.preventDefault();
		}
	}else if(type == "menu"){
		if($("#search2").val().trim().length >= 2){
			$("#searchForm2").submit();
		}else{
			alert("寃��됱뼱瑜� 2湲��� �댁긽 �낅젰�섏꽭��.");
			$("#search2").val($("#search2").val().trim());
			event.preventDefault();
		}
	}
}
function XssCheck(str){
	str = str.replace("\<", "&lt;"); 
	str = str.replace("\>", "&gt;"); 
	str = str.replace("\"", "&quot;");
	str = str.replace("\#", "&#35;");
	str = str.replace(/\\/gi,"");
	str = str.replace(/\./gi,"");
	str = str.replace(new RegExp("alert","gi"), "");
	str = str.replace(new RegExp("prompt","gi"), "");
	str = str.replace(new RegExp("onmouseover","gi"), "");
	str = str.replace(new RegExp("onmouse","gi"), "");
	str = str.replace(new RegExp("script","gi"), "");
	str = str.replace(new RegExp("cookie","gi"), "");
	str = str.replace(new RegExp("document","gi"), "");
	str = str.replace(new RegExp("\[\\r\\n\]","gi"), "");
	
	return str;
}

//title 蹂�寃� 
function toggleTitle(id){
	if($(id).hasClass("active") === true) {
		$(id).attr("title","�ロ옒");
	}else{
		$(id).attr("title","�대┝");
	}
}