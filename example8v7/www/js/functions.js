/*
 * $Id: functions.js Oct 13, 2015 3:06:28 PM tta1516$
 * 
 * Copyright (C) 2015 Maider Huarte Arrayago
 * 
 * This file is part of TTA1516_LS-EX_08v7_www.zip.
 * 
 * TTA1516_LS-EX_08v7_www.zip is based on templates by Eclipse.org - Thym and it is intended
 * for learning purposes only.
 * 
 * TTA1516_LS-EX_08v7_www.zip is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 * 
 * TTA1516_LS-EX_08v7_www.zip is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details
 * <http://www.gnu.org/licenses/>.
 */

function login() {
	var loginVal=$("#login").val();
	
	$(".login").text("LOGIN: "+loginVal);
	tests.login=loginVal;
	results.login=loginVal;
		
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
			if(index!=tests.test[i].correct) { //This can be done because of appropriate "value" attributes and label-radio-choice id attributes
				$(this).css("color","red");
			}
			else
				$(this).css({"color":"white","background-color":"green","font-size":"24px"});
		}
	);

	$("#button-"+i+"-1").attr("onclick","");
//	alert("check 7");
}

function advice(pI,qI) {
	var adv=tests.test[pI].adv[qI];

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
						var fileName=adv.substring(adv.lastIndexOf("/")+1);///de todo lo que es el consejo solo conger lo que esta despues de la ultima barra
	
						if(adv.endsWith("pdf"))
							fileUtilities.downloadOpenPDf(adv,appConstants.localPermanentStorageFolder,fileName);//descargar y visualizar PDF en la carpeta de la app, con el nombre original
						else
							if(adv.endsWith("zip"))
								fileUtilities.downloadOpenZIP(adv,appConstants.localPermanentStorageFolder,fileName);//descargar y descomprimir ZIP en la carpeta de la app, con el nombre original
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
