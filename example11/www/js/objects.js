/*
 * $Id: objects.js Oct 31, 2015 5:41:11 PM tta1516$
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

var appConstants = {
	localPermanentStorageFolder: "/sdcard/eus.ehu.INTEL901_504021.TTA1516_LS_EX_11/",
	localPermanentStorageFolderImg: function () {
		return this.localPermanentStorageFolder+"img/";
	},
	localPermanentStorageFolderAudio: function () {
		return this.localPermanentStorageFolder+"audio/";
	},
	localPermanentStorageFolderVideo: function () {
		return this.localPermanentStorageFolder+"video/";
	},
	persistentStorageFolder: function () {
		return cordova.file.externalDataDirectory;
	},
	persistentStorageSolutionsFile: "SOLUTIONS.txt",
	persistentStorageExercisesFile: "EXERCISES.txt",	
	serverURL: "http://158.227.64.57:8080/TTA1516_LS-EX_11S/",//EHU PUBLIC"	

	uploadFileURL: function() {
		return this.serverURL+"rest/School/uploadFile"; 
	},
	requestLessonsURL: function() {
		return this.serverURL+"rest/School/requestLessons";
	},
	requestInitialDataURL: function() {
		return this.serverURL+"rest/School/requestInitialData";
	},
	requestCalificationURL: function() {
		return this.serverURL+"rest/School/requestCalification";
	},
	addStudentURL: function() {
		return this.serverURL+"rest/School/addStudent";
	}
};

var exercises = {
	login: null,
	lessonCode: null,
	total: 1,
	exercise: [
	           {
	        	   exerciseCode: null,
	        	   exerciseContent: "",
	        	   exerciseType: ""
	           }
	          ]
};

var solutions= {
		login: null,
		lessonCode: null,
		total: 1,
		solution: [
		           {
		        	   exerciseSolution: "",
		        	   exerciseCalification: ""
		           }
		          ]		
};

var page = {
	create: function(i) {
//		alert("create1");
		var pageDiv=$('<div data-role="page" id="page-'+i+'"></div>');
		var headerDiv=
			'<div data-role="header" style="padding-bottom:1%" data-position="fixed" data-fullscreen="false">'+
				'<h1 style="margin-left:0;margin-right:0;white-space: nowrap;overflow: visible;">TTA1516_LS-EX_11: exercises5</h1>'+
			'</div>';
		
		var contentDiv=
			'<div data-role="content" id="pageContent-'+i+'" style="text-align:center;">'+
				'<h3 class="login" style="text-align:left;"></h3>'+
				'<div id="statementDiv-'+i+'" style="text-align:left;">'+
				'</div>'+
				'<div id="solutionDiv-'+i+'" class="ui-grid-solo">';
		switch(exercises.exercise[i].exerciseType){
			case "img":
				contentDiv+=
					'<div class="ui-block-a" style="vertical-align:middle;">'+
						'<a href="#" id="button-'+i+'-1" class="ui-btn ui-mini ui-btn-inline ui-corner-all" onclick="takePhoto('+i+')">TAKE PHOTO</a>'+
						'<label for="image-'+i+'-1" id="fileName-'+i+'-1" style="text-align:left;word-wrap:break-word;"></label>'+
						'<img id="image-'+i+'-1" alt="" src="" style="display:none;width:auto;height:auto;"/>'+
					'</div>'+
					'<div class="ui-block-a" style="vertical-align:middle;">'+
						'<a href="#" id="button-'+i+'-2" class="ui-btn ui-mini ui-btn-inline ui-corner-all" onclick="sendResult('+i+')">SEND PHOTO</a>'+
					'</div>';
				break;
			case "audio":
				contentDiv+=
					'<div class="ui-block-a" style="vertical-align:middle;">'+
						'<a href="#" id="button-'+i+'-1-1" class="ui-btn ui-mini ui-btn-inline ui-corner-all" onclick="startAudioRecord('+i+')">START RECORDING</a>'+
						'<a href="#" id="button-'+i+'-1-2" class="ui-btn ui-mini ui-btn-inline ui-corner-all" onclick="stopAudioRecord('+i+')">STOP RECORDING</a>'+
						'<label for="audio-'+i+'-1" id="fileName-'+i+'-1" style="text-align:left;word-wrap:break-word;"></label>'+
						'<audio id="audio-'+i+'-1" controls="controls" style="display:none">'+
							'<source id="audioSrc-'+i+'-1" src=""/>'+
						'</audio>'+
					'</div>'+
					'<div class="ui-block-a" style="vertical-align:middle;">'+
						'<a href="#" id="button-'+i+'-2" class="ui-btn ui-mini ui-btn-inline ui-corner-all" onclick="sendResult('+i+')">SEND AUDIO</a>'+
					'</div>';
				break;
			case "video":
				contentDiv+=
					'<div class="ui-block-a" style="vertical-align:middle;">'+
						'<a href="#" id="button-'+i+'-1" class="ui-btn ui-mini ui-btn-inline ui-corner-all" onclick="recordVideo('+i+')">RECORD</a>'+
						'<label for="video-'+i+'-1" id="fileName-'+i+'-1" style="text-align:left;word-wrap:break-word;"></label>'+
						'<video id="video-'+i+'-1" controls="controls" style="display:none" width="95%" height="auto">'+
							'<source id="videoSrc-'+i+'-1" src=""/>'+
						'</video>'+
					'</div>'+
					'<div class="ui-block-a" style="vertical-align:middle;">'+
						'<a href="#" id="button-'+i+'-2" class="ui-btn ui-mini ui-btn-inline ui-corner-all" onclick="sendResult('+i+')">SEND VIDEO</a>'+
					'</div>';						
				break;	
		}
		
		contentDiv+=						
					'<div class="ui-block-a" style="vertical-align:middle;">'+
						'<a href="#" id="button-'+i+'-3" class="ui-btn ui-mini ui-btn-inline ui-corner-all" onclick="queryCalification('+i+')">QUERY CALIFICATION</a>'+
						'<p id="calification-'+i+'">CALIFICATION: NONE</p>'+
					'</div>'+				
				'</div>'+
			'</div>';		
		
		var footerDiv=
		'<div data-role="footer" data-position="fixed" style="padding-top:1%;">'+
			'<div class="ui-grid-b">'+
				'<div class="ui-block-a" style="text-align:left;width:20%;"><a href="#page-'+(i-1)+'" id="prev-'+i+'" class="ui-btn ui-icon-arrow-l ui-btn-icon-left ui-mini ui-btn-inline ui-corner-all" data-transition="fade">Prev</a></div>'+
				'<div class="ui-block-b" style="text-align:center;width:60%;"><a class="ui-btn ui-mini ui-btn-inline ui-corner-all" onclick="saveWork()">SAVE</a></div>'+
				'<div class="ui-block-c" style="text-align:right;width:20%;"><a href="#page-'+(i+1)+'" id="next-'+i+'" class="ui-btn ui-icon-arrow-r ui-btn-icon-left ui-mini ui-btn-inline ui-corner-all" data-transition="fade">Next</a></div>'+
			'</div>'+
		'</div>';
		
		pageDiv.append(headerDiv,contentDiv,footerDiv);
		
//		alert("create2");
		return pageDiv;
	},
	load: function(i) {
//		alert("load1");
		
     	$("#statementDiv-"+i).html("<p>LESSON: "+exercises.lessonCode+"\tEXERCISE: "+exercises.exercise[i].exerciseCode+"</p>"+exercises.exercise[i].exerciseContent);
     	if(solutions.solution[i].exerciseSolution!="") {
     		switch(exercises.exercise[i].exerciseType){
     			case "img":
     				$("#image-"+i+"-1").attr("src",solutions.solution[i].exerciseSolution);
     				$("#fileName-"+i+"-1").text("Photo: "+solutions.solution[i].exerciseSolution);
     				$("#image-"+i+"-1").show();    				
     				break;
     			case "audio":
     				$("#audioSrc-"+i+"-1").attr("src",solutions.solution[i].exerciseSolution);
     				$("#fileName-"+i+"-1").text("Audio: "+solutions.solution[i].exerciseSolution);
     				$("#audio-"+i+"-1").trigger("load");
     				$("#audio-"+i+"-1").show();
     				break;
     			case "video":
     				$("#videoSrc-"+i+"-1").attr("src",solutions.solution[i].exerciseSolution);
     				$("#fileName-"+i+"-1").text("Video: "+solutions.solution[i].exerciseSolution);
     				$("#video-"+i+"-1").trigger("load");
     				$("#video-"+i+"-1").show();
     				break;     				
     		}
     		$("#calification-"+i).text("CALIFICATION: "+solutions.solution[i].exerciseCalification);
     	}

     	$("#prev-"+i).attr("href","#page-"+(i-1));
     	$("#next-"+i).attr("href","#page-"+(i+1));
//			alert("load7");
 	}
};

var fileUtilities = {
	contentRead: null,
	moveAsync: function (sourceFullPath,destFolder,destName,onSuccess){}//Método asíncrono para mover ficheros
	,
	uploadFileAsync: function(sourceFullPath,fileType,uploadFileServiceURL,onSuccess) {}//Método asíncrono para subir ficheros al servidor REST
	,
	writeContentToFileAsync: function(fileFolder,fileName,content,onSuccess) {}//Método asíncrono para escribir en fichero 
	,
	readTextFromFileAsync: function(fileFolder,fileName,onSuccess) {}//Método asíncrono para leer de fichero 
};

var photo = {
		fileFolder:null,
		fileName:null,
		takeAsync: function(fileFolder,fileName,onSuccess) {}//Método asíncrono para tomar foto
}


var audio = {
		media:null,
		fileFolder:null,
		fileName:null,
		create: function(fileFolder,fileName) {
			this.fileFolder=fileFolder;
			this.fileName=fileName;
			if(this.media)
				this.media.release();
			this.media = new Media(this.fileFolder+this.fileName);
		},
		doStartRecord: function() {}//Método para empezar grabación
		,
		doStopRecordAsync: function(fileFolder,fileName,onSuccess) {}//Método asíncrono para terminar grabación
				
};

var video = {
		fileFolder:null,
		fileName:null,
		recordAsync: function(fileFolder,fileName,onSuccess) {}//Método asíncrono para grabar video		
};

var student= {
	dni: null,
	login: null,
	name: null,
	surname: null
};
