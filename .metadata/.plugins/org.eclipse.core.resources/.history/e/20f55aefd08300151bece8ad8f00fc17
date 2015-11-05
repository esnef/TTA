/*
 * $Id: functions.js Oct 31, 2015 5:41:23 PM tta1516$
 * 
 * Copyright (C) 2015 Maider Huarte Arrayago
 * 
 * This file is part of TTA1516_LS-EX_11_www.zip.
 * 
 * TTA1516_LS-EX_11_www.zip is based on templates by Eclipse.org - Thym and it is intended
 * for learning purposes only.
 * 
 * TTA1516_LS-EX_11_www.zip is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 * 
 * TTA1516_LS-EX_11_www.zip is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details
 * <http://www.gnu.org/licenses/>.
 */

function login() {
	var loginVal=$("#login").val();
	var lessonVal=$("select[name='select-lesson']").val();

	requestInitialDataAsync(loginVal,lessonVal,loadContents);
}

function requestInitialDataAsync(login,lessonCode,onSuccess){/*
//	alert("requestInitialDataAsync 1");
	var proceed=true;	
	if(navigator.connection.type!=Connection.WIFI)
		proceed=confirm("Need to connect to remote URL. Proceed whitout WIFI connection?");	
	if(proceed==true)
		
		(,//Consultar en el Servidor los datos iniciales para usuario con login=login y lección=lessonCode
			function(response,status) {//Función callback
				{//Si la HTTP-RESPONSE es OK y trae un objeto exercises
					//Guardar el objeto exercises llegado en el exercises local
					//Guardar el objeto solutions llegado en el solutions local
					
					if(onSuccess!=false)
						onSuccess();					
				}
				else {
					alert("NO RESPONSE FROM SERVER");
				}
			}
		);
//	alert("requestInitialDataAsync 2");*/	
}

function loadContents() {
//	alert("loadContents1");

	var pageDiv;
	for(var i=0;i<exercises.total;i++) {
		pageDiv=page.create(i);
		$("body").append(pageDiv);
		page.load(i);
	}

 	$("#prev-0").attr("href","#page-"+(exercises.total-1));
 	$("#next-"+(exercises.total-1)).attr("href","#page-0");
 	
 	
	$(".login").text("LOGIN: "+exercises.login);
 	
	fitImg(); //Adjust img sizes
	$("body").enhanceWithin();//To apply styles

	$("#newStudentDiv").hide();
	$("#loginDiv").hide();
	$("#continue").show();
	$("#next-frontPage").show();
 	
//	alert("loadContents2");
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
	$("#audio-"+i+"-1").hide();
	audio.doStartRecord();
}

function stopAudioRecord(i) {
	$("#button-"+i+"-1-1").blur();
	var fileFolder=appConstants.localPermanentStorageFolderAudio();
	var fileName=exercises.lessonCode+exercises.exercise[i].exerciseCode+"_"+exercises.login+".3gp";
	audio.doStopRecordAsync(
		fileFolder,
		fileName,
		function () {
    		solutions.solution[i].exerciseSolution=audio.fileFolder+audio.fileName;
			$("#button-"+i+"-1-2").blur();    		
			$("#audioSrc-"+i+"-1").attr("src",solutions.solution[i].exerciseSolution);
			$("#audio-"+i+"-1").trigger("load");
			$("#fileName-"+i+"-1").text("Audio: "+solutions.solution[i].exerciseSolution);
			$("#audio-"+i+"-1").show();
			alert("Audio in: "+solutions.solution[i].exerciseSolution);
		}
	);
}

function recordVideo(i) {
	var fileFolder=appConstants.localPermanentStorageFolderVideo();
	var fileName=exercises.lessonCode+exercises.exercise[i].exerciseCode+"_"+exercises.login+".mp4";
	video.recordAsync(fileFolder,fileName,
		function() {
			solutions.solution[i].exerciseSolution=video.fileFolder+video.fileName;
			$("#button-"+i+"-1").blur();
			$("#videoSrc-"+i+"-1").attr("src","file://"+video.fileFolder+video.fileName);
			$("#fileName-"+i+"-1").text("Video: "+solutions.solution[i].exerciseSolution);
			$("#video-"+i+"-1").trigger("load");
			$("#video-"+i+"-1").show();
			alert("Video in: "+solutions.solution[i].exerciseSolution);
		}
	);
}

function sendResult(i) {
/*	var uploadFile=true;	
	//Si la conexión a red NO es por wifi
		//Indicar al usuario q se va a conectar a una URL remota, y recoger su respuesta en uploadFile
	if(uploadFile==true)
		//Subir el fichero de la solución correspondiente al servicio de subida de ficheros*/
}

function queryCalification(i) {/*
//	alert("queryCalification 1");
	var proceed=true;	
	if(navigator.connection.type!=Connection.WIFI)
		proceed=confirm("Need to connect to remote URL. Proceed whitout WIFI connection?");	
	if(proceed==true)
		(,//Consultar en el Servidor la calificación
			{solutionName:/*para el ejercicio de la page i},
			function(data,status) {//Función callback
				{//Si la HTTP-RESPONSE es OK
					//Visualizar la calificación en el elemento correspondiente
				}
				else {
					alert("NO RESPONSE FROM SERVER");
				}
			},
			"text"
		);
//	alert("queryCalification 2");	*/	
}

function saveWork() {
//	alert("saveWork1");
	fileUtilities.writeContentToFileAsync(appConstants.persistentStorageFolder(),appConstants.persistentStorageExercisesFile,exercises,false);
	fileUtilities.writeContentToFileAsync(appConstants.persistentStorageFolder(),appConstants.persistentStorageSolutionsFile,solutions,
		function() {
			alert("Work saved");
		}
	);
//	alert("saveWork2");
}

function addStudent() {
//	alert("addStudent 1");
	
	var dni=$("#newStudentDiv-text-1").val();
	var name=$("#newStudentDiv-text-2").val();
	var surname=$("#newStudentDiv-text-3").val();
	
	if((dni!=null&&dni!="")&&(name!=null&&name!="")&&(surname!=null&&surname!="")) {	
		student.dni=dni;
		student.name=name;
		student.surname=surname;
	
		var proceed=true;	
		if(navigator.connection.type!=Connection.WIFI)
			proceed=confirm("Need to connect to remote URL. Proceed whitout WIFI connection?");	
		if(proceed==true)	
			(,//Enviar al Servidor el objeto student
				function(data,status) {//Función callback
					{//Si la HTTP-RESPONSE es OK
						//Indicar al usuario q está dado de alta y cuál es su login
						$("#newStudentDiv").hide();
						//Poner como valor del input para login, el login de usuario recibio
						$("option:selected").attr("selected",false);
						$("#select-lesson").selectmenu("refresh",true);
						$("#button-2").hide();
					}
					else {
						alert("NO RESPONSE FROM SERVER");
					}			
				},
				//Conten-type esperado en HTTP-RESPONSE: text
			);
	}
	else
		alert("All fields are required");
	
//	alert("addStudent 2");
}

