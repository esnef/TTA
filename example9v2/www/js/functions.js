/*
 * $Id: functions.js Oct 13, 2015 3:41:29 PM tta1516$
 * 
 * Copyright (C) 2015 Maider Huarte Arrayago
 * 
 * This file is part of TTA1516_LS-EX_09v2_www.zip.
 * 
 * TTA1516_LS-EX_09v2_www.zip is based on templates by Eclipse.org - Thym and it is intended
 * for learning purposes only.
 * 
 * TTA1516_LS-EX_09v2_www.zip is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 * 
 * TTA1516_LS-EX_09v2_www.zip is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details
 * <http://www.gnu.org/licenses/>.
 */

function login() {
	var loginVal=$("#login").val();
	
	$(".login").text("LOGIN: "+loginVal);
	exercises.login=loginVal;
	solutions.login=loginVal;
		
	loadContents();
	
	$("#loginDiv").hide();
	$("#statementDiv-0").show();
	$("#solutionDiv-0").show();	
}

function loadContents() {
	page.load(0);//The best way to avoid page-0 as background
	
	var pageDiv;
	for(var i=1;i<exercises.total;i++) {
		pageDiv=page.create(i);
		$("body").append(pageDiv);
		page.load(i);
	}

 	$("#next-"+(exercises.total-1)).attr("href","#page-0");
 	
	fitImg(); //Adjust img sizes

}

function takePhoto(i) {
	var fileFolder=appConstants.localPermanentStorageFolderImg();
	var fileName=exercises.lessonCode+exercises.exercise[i].exerciseCode+"_"+exercises.login+".jpg";	
	photo.takeAsync(
		fileFolder,
		fileName,
		function() {
			solutions.solution[i].exerciseSolution=photo.fileFolder+photo.fileName;
			$("#button-"+i+"-1").blur();
			$("#image-"+i+"-1").attr("src","file://"+solutions.solution[i].exerciseSolution+"?"+(new Date()).getTime());
			$("#fileName-"+i+"-1").text("Photo: "+solutions.solution[i].exerciseSolution);
			$("#image-"+i+"-1").show();
			alert("Photo in: "+solutions.solution[i].exerciseSolution);
		}
	);
}

function startAudioRecord(i) {
	$("#audio-"+i+"-1").hide();//Ocultar el elemento audio
	audio.doStartRecord();//Comenzar a grabar
}

function stopAudioRecord(i) {
	$("#button-"+i+"-1-1").blur();
	var fileFolder=appConstants.localPermanentStorageFolderAudio();
	var fileName=exercises.lessonCode+exercises.exercise[i].exerciseCode+"_"+exercises.login+".3gp";
	audio.doStopRecordAsync(
		fileFolder,
		fileName,
		//Se ejecuta si ha ido todo bien
		function () {
			solutions.solution[i].exerciseSolution=audio.fileFolder+audio.fileName;//Guardar la ubicación del fichero de solución donde corresponda, según el ejercicio
			$("#button-"+i+"-1-2").blur();    		
			$("#audioSrc-"+i+"-1").attr("src",solutions.solution[i].exerciseSolution);//Rellenar el atributo src del elemento de audio correspondiente
			$("#audio-"+i+"-1").trigger("load");//Realiza que se carge el fichero
			$("#fileName-"+i+"-1").text("Audio: "+solutions.solution[i].exerciseSolution);//Mostrar la ubicación del fichero de solución
			$("#audio-"+i+"-1").show();//Visualizar el elemento de audio
			alert("Audio in: "+solutions.solution[i].exerciseSolution);
		}
	);
}

function sendResult(i) {
	alert("Sorry, sendResult "+i+" TBD");
}

function queryCalification(i) {
	alert("Sorry, queryCalification "+i+" TBD");
}
