function getContextPath() {
    return window.location.pathname.substring(0, window.location.pathname.indexOf("/",2));
}

//�먮룞�낅젰諛⑹�臾몄옄 �덈줈怨좎묠
function captchaRefresh(){
	$("#captchaImg").removeAttr("src").attr("src",getContextPath()+"/simpleCaptcha.png"+'?number='+Math.random()*1000);
}
//�먮룞諛⑹�臾멸뎄 �뚯꽦�ｊ린
function audio(){
	var rand = Math.random();
	var uAgent = navigator.userAgent;
	var soundUrl = getContextPath()+'/captchaAudio.es?rand='+rand;
	if(uAgent.indexOf('Trident')>-1 || uAgent.indexOf('MISE')>-1) {
		/*IE 寃쎌슦 */
		audioPlayer(soundUrl);
	} else if(!!document.createElement('audio').canPlayType){
		/*Chrome 寃쎌슦 */
		try {
			new Audio(soundUrl).play();
		} catch (e) {
			audioPlayer(soundUrl);
		}
	} else {
		window.open(soundUrl,'','width=1,height=1');
	}
}

//�먮룞諛⑹�臾멸뎄 �덈줈怨좎묠
function getImage(){
	$("#captchaImg").removeAttr("src").attr("src",getContextPath()+"/captchaImg.es"+'?number='+Math.random()*1000);
}

//�먮룞諛⑹�臾멸뎄 �뚯꽦
function audioPlayer(objUrl){
	$('#ccaudio').html('<bgsound src="' +objUrl +'">');
}

//�먮룞諛⑹�臾멸뎄 媛� 泥댄겕
function chkAnswer(){
	$.ajax({
		url : getContextPath()+"/chkAnswer.es", 
		type : "GET",
		cache : false,
		dataType : "json",
		data : {
			answer : $('#captchaStr').val()
		},
		async : false,
		success : function(data){
			if(data == 200) {
				sw = true; 
			}else{
				getImage();
				$('#captchaStr').val('');
				sw = false; 
			}
		},
		error : function(request, status, error) {
			alert('�먮윭');
			getImage();
			$('#captchaStr').val('');
			sw = false; 
		}
	});
	return sw;
}