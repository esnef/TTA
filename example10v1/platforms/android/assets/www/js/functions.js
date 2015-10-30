/*
 * $Id: functions.js Oct 23, 2015 9:35:58 PM tta1516$
 * 
 * Copyright (C) 2015 Maider Huarte Arrayago
 * 
 * This file is part of TTA1516_LS-EX_10v1_www.zip.
 * 
 * TTA1516_LS-EX_10v1_www.zip is based on templates by Eclipse.org - Thym and it is intended
 * for learning purposes only.
 * 
 * TTA1516_LS-EX_10v1_www.zip is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 * 
 * TTA1516_LS-EX_10v1_www.zip is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details
 * <http://www.gnu.org/licenses/>.
 */

function login() {
	var loginVal=$("#login").val();
	
	tests.login=loginVal;
	results.login=loginVal;

	localStorage.set("results_login",loginVal);//Guardar loginVal de forma permanente en "results_login"
	localStorage.set("result_corrects",0);//Guardar valor 0 de forma permanente en "results_corrects"
	localStorage.set("result_answere",0);//Guardar valor 0 de forma permanente en "results_answered"
	
	loadContents();
}

function loadContents(){
	page.load(0);
	
	var pageDiv;
	for(var i=1;i<tests.total;i++) {
		pageDiv=page.create(i);
		$("body").append(pageDiv);
		page.load(i);
	}

 	$("#prev-0").remove();
 	$("#next-"+(tests.total-1)).attr("href","#page-0");
	
	results.login=localStorage.getItem("results_login");//Guardar en results.login el valor de guardado en "results_login"
	$(".login").text("LOGIN :"+results.login);//Rellenar todos los elementos de class .login con el texto "LOGIN: " y el valor results.login
	results.corrects=localStorage.getItem("result_corrects");//Guardar en results.corrects el valor de guardado en "results_corrects"
	results.answered=localStorage.getItem("result_answere");//Guardar en results.answered el valor de guardado en "results_answered"
	$(".res-1").text(""+results.corrects+"/"+results.answered);
	if(results.answered!=0)
		$(".res-2").text(""+(results.corrects*100/results.answered).toFixed(2)+"%");
	else
		$(".res-2").text("0%");

	fitImg();
 	
	$("body").enhanceWithin();
	
	$("#request").hide();
	$("#form-0").show();	
}

function check(i) {
//	alert("check 1");
	
	results.answered++;
	
	var answer=$("input[name='radio-choice-"+i+"']:checked").val();
	if(answer==tests.test[i].correct) {
		alert("CORRECT");
		results.corrects++;
	}
	else {
		alert("WRONG");
		$("#button-"+i+"-2").attr("onclick","advice("+i+","+answer+")");
		$("#button-"+i+"-2").css("display","block");
	}
	
	$(".res-1").text(""+results.corrects+"/"+results.answered);
	$(".res-2").text(""+(results.corrects*100/results.answered).toFixed(2)+"%");
	
	$("label[id|='label-radio-choice-"+i+"']").each(
		function(index) {
			if(index!=tests.test[i].correct) {
				$(this).css("color","red");
			}
			else
				$(this).css({"color":"white","background-color":"green","font-size":"24px"});
		}
	);

	$("#button-"+i+"-1").attr("onclick","");
	
	localStorage.setItem("result_corrects",results.corrects);//Guardar en results.corrects el valor de guardado en "results_corrects"
	localStorage.setItem("result_answere",results.answered);//Guardar en results.answered el valor de guardado en "results_answered"
//	alert("check 7");
}

function advice(pI,qI) {
	var adv=tests.test[pI].adv[qI];
//	alert("adv: "+adv);
	var getAdvice=true;	
	if(navigator.connection.type!=Connection.WIFI)
		getAdvice=confirm("Advice requires downloading or connecting to remote URL");	
	if(getAdvice==true) {
		
		if(adv.endsWith("ogg")||adv.endsWith("mp3")){
			$("#src-audio-"+pI).attr("src",adv);
			$("#audio-"+pI).trigger("load");
			$("#audioAdvice-"+pI).show();
			$("#audio-"+pI).trigger("play");
		}
		else{
			if(adv.endsWith("mp4")){
				$("#src-video-"+pI).attr("src",adv);
				$("#video-"+pI).trigger("load");
				$("#videoAdvice-"+pI).show();
				$("#video-"+pI).trigger("play");	
			}
			else{
				if(adv.endsWith("jpg")||adv.endsWith("png")){
					$("#image-"+pI).attr("src",adv);
					$("#imageAdvice-"+pI).show();
				}
				else{
					if(adv.startsWith("http://")){
						var fileName=adv.substring(adv.lastIndexOf("/")+1);
	
						if(adv.endsWith("pdf"))
							fileUtilities.downloadOpenPDf(adv,appConstants.localPermanentStorageFolder,fileName);
						else
							if(adv.endsWith("zip"))
								fileUtilities.downloadOpenZIP(adv,appConstants.localPermanentStorageFolder,fileName);
							else
								cordova.InAppBrowser.open(adv,"_system","location=yes");
					}
					else
						alert("ADVICE: "+adv);
				}
			}
		}
	}
}
