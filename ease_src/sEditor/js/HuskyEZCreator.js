if(typeof window.nhn=='undefined') window.nhn = {};
if (!nhn.husky) nhn.husky = {};

/**
 * @fileOverview This file contains application creation helper function, which would load up an HTML(Skin) file and then execute a specified create function.
 * @name HuskyEZCreator.js
 */
nhn.husky.EZCreator = new (function(){
	this.nBlockerCount = 0;

	this.createInIFrame = function(htOptions){
		if(arguments.length == 1){
			var oAppRef = htOptions.oAppRef;
			var elPlaceHolder = htOptions.elPlaceHolder;
			var sSkinURI = htOptions.sSkinURI;
			var fCreator = htOptions.fCreator;
			var fOnAppLoad = htOptions.fOnAppLoad;
			var bUseBlocker = htOptions.bUseBlocker;
			var htParams = htOptions.htParams;
		}else{
			// for backward compatibility only
			var oAppRef = arguments[0];
			var elPlaceHolder = arguments[1];
			var sSkinURI = arguments[2];
			var fCreator = arguments[3];
			var fOnAppLoad = arguments[4];
			var bUseBlocker = arguments[5];
			var htParams = arguments[6];
		}
		
		if(bUseBlocker) nhn.husky.EZCreator.showBlocker();

		var attachEvent = function(elNode, sEvent, fHandler){ 
			if(elNode.addEventListener){
				elNode.addEventListener(sEvent, fHandler, false);
			}else{
				elNode.attachEvent("on"+sEvent, fHandler);
			}
		} 

		if(!elPlaceHolder){
			alert("Placeholder is required!");
			return;
		}

		if(typeof(elPlaceHolder) != "object")
			elPlaceHolder = document.getElementById(elPlaceHolder);

		var elIFrame;
		try{
			elIFrame = document.createElement("<IFRAME frameborder=0 scrolling=no>");
		}catch(e){
			elIFrame = document.createElement("IFRAME");
			elIFrame.setAttribute("frameborder", "0");
			elIFrame.setAttribute("scrolling", "no");
		}
		elIFrame.style.width = "100%";
		elIFrame.style.height = "400px";

		elPlaceHolder.parentNode.insertBefore(elIFrame, elPlaceHolder.nextSibling);

		attachEvent(elIFrame, "load", function(){
			fCreator = elIFrame.contentWindow[fCreator] || elIFrame.contentWindow.createSEditorInIFrame;
			
			try{
				elIFrame.contentWindow.document.body.style.margin = "0";
				elIFrame.contentWindow.document.body.style.padding= "1";
			}catch(e){
				nhn.husky.EZCreator.hideBlocker(true);
				elIFrame.style.border = "5px solid red";
				elIFrame.style.width = "500px";
				elIFrame.style.height = "500px";
				alert("Failed to access "+sSkinURI);
				return;
			}

			var oApp = fCreator(elIFrame, elPlaceHolder, htParams);
			oApp.elPlaceHolder = elPlaceHolder;

			oAppRef[oAppRef.length] = oApp;
			if(!oAppRef.getById) oAppRef.getById = {};
			
			if(elPlaceHolder.id){
				oApp.sAppId = elPlaceHolder.id;
				oAppRef.getById[elPlaceHolder.id] = oApp;
			}
			oApp.run({fnOnAppReady:fOnAppLoad});

			nhn.husky.EZCreator.hideBlocker();
		});

		elIFrame.src = sSkinURI;
	};
	
	this.showBlocker = function(){
		if(this.nBlockerCount<1){
			var elBlocker = document.createElement("DIV");
			elBlocker.style.position = "absolute";
			elBlocker.style.top = 0;
			elBlocker.style.left = 0;
			elBlocker.style.backgroundColor = "#FFFFFF";
			elBlocker.style.width = "100%";

			document.body.appendChild(elBlocker);
			
			nhn.husky.EZCreator.elBlocker = elBlocker;
		}

		nhn.husky.EZCreator.elBlocker.style.height = Math.max(document.body.scrollHeight, document.body.clientHeight)+"px";
		
		this.nBlockerCount++;
	};
	
	this.hideBlocker = function(bForce){
		if(!bForce){
			if(--this.nBlockerCount > 0) return;
		}
		
		this.nBlockerCount = 0;
		
		if(nhn.husky.EZCreator.elBlocker) nhn.husky.EZCreator.elBlocker.style.display = "none";
	}
})();