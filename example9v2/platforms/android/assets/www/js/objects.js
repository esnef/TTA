/*
 * $Id: objects.js Oct 13, 2015 3:40:47 PM tta1516$
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

var appConstants = {
	localPermanentStorageFolder: "/sdcard/eus.ehu.INTEL901_504021.TTA1516_LS_EX_09v2/",
	localPermanentStorageFolderImg: function () {
		return this.localPermanentStorageFolder+"img/";
	},
	localPermanentStorageFolderAudio: function () {
		return this.localPermanentStorageFolder+"audio/";
	}
};

var exercises = {
	login: null,
	lessonCode: "L1",
	total: 2,
	exercise: [
	           {
	        	   exerciseCode: "E1",
	        	   exerciseContent: "<p>Formulation: bla, bla, bla.</p><p>Solution requirements: </p>" +
	        		"			<ul>" +
	        		"			<li id='it1'>ITEM 1" +
	        		"				<ul>" +
	        		"				<li id='it1-1'>ITEM 1.1.</li>" +
	        		"				</ul>" +
	        		"			</li>" +
	        		"			<li id='it2'>LIST ITEM 2</li>" +
	        		"			<li id='it3'>Take a photo of your solution</li>" +
	        		"			</ul>",
	        		exerciseType: "photo"
	           },
	           {
	        	   exerciseCode: "E2",
	        	   exerciseContent: "<p>Formulation: ble, ble, ble.</p><p>Solution requirements: </p>" +
		        		"			<ul>" +
		        		"			<li id='it1'>ITEM 1" +
		        		"				<ul>" +
		        		"				<li id='it1-1'>ITEM 1.1.</li>" +
		        		"				</ul>" +
		        		"			</li>" +
		        		"			<li id='it2'>LIST ITEM 2</li>" +
		        		"			<li id='it3'>Record an audio of your solution</li>" +
		        		"			</ul>",
		        		exerciseType: "audio"
	           }
	           ]
};

var solutions= {
		login: null,
		lessonCode: "L1",
		total: 2,
		solution: [
		           {
		        	   exerciseSolution: "",
		        	   exerciseCalification: "NONE"
		           },
		           {
		        		exerciseSolution: "",
		        		exerciseCalification: "NONE"	        		
		           }
		          ]		
};

var page = {
	create: function(i) {
//		alert("create1");
		var pageDiv=$('<div data-role="page" id="page-'+i+'"></div>');
		var headerDiv=
			'<div data-role="header" style="padding-bottom:1%" data-position="fixed" data-fullscreen="false">'+
				'<h1 style="margin-left:0;margin-right:0;white-space: nowrap;overflow: visible;">TTA1516_LS-EX_09v2: exercises2</h1>'+
			'</div>';
		
		var contentDiv=
			'<div data-role="content" id="pageContent-'+i+'" style="text-align:center;">'+
			'<div id="statementDiv-'+i+'" style="text-align:left;">'+
			'</div>'+
			'<div id="solutionDiv-'+i+'" class="ui-grid-solo">';
		switch(exercises.exercise[i].exerciseType){
			case "photo":
				contentDiv+=
					'<div class="ui-block-a" style="text-align:center;vertical-align:middle;">'+
						'<a href="#" id="button-'+i+'-1" class="ui-btn ui-mini ui-btn-inline ui-corner-all" onclick="takePhoto('+i+')">TAKE PHOTO</a>'+
						'<label for="image-'+i+'-1" id="fileName-'+i+'-1" style="text-align:left;word-wrap:break-word;"></label>'+
						'<img id="image-'+i+'-1" alt="" src="" style="display:none;width:auto;height:auto;"/>'+
					'</div>'+
					'<div class="ui-block-a" style="text-align:center;vertical-align:middle;">'+
						'<a href="#" id="button-'+i+'-2" class="ui-btn ui-mini ui-btn-inline ui-corner-all" onclick="sendResult('+i+')">SEND PHOTO</a>'+
					'</div>';
				break;
			case "audio":
				contentDiv+=
					'<div class="ui-block-a" style="text-align:center;vertical-align:middle;">'+
						'<a href="#" id="button-'+i+'-1-1" class="ui-btn ui-mini ui-btn-inline ui-corner-all" onclick="startAudioRecord('+i+')">START RECORDING</a>'+
						'<a href="#" id="button-'+i+'-1-2" class="ui-btn ui-mini ui-btn-inline ui-corner-all" onclick="stopAudioRecord('+i+')">STOP RECORDING</a>'+
						'<label for="audio-'+i+'-1" id="fileName-'+i+'-1" style="text-align:left;word-wrap:break-word;"></label>'+
						'<audio id="audio-'+i+'-1" controls="controls" style="display:none">'+
							'<source id="audioSrc-'+i+'-1" src=""/>'+
						'</audio>'+
					'</div>'+
					'<div class="ui-block-a" style="text-align:center;vertical-align:middle;">'+
						'<a href="#" id="button-'+i+'-2" class="ui-btn ui-mini ui-btn-inline ui-corner-all" onclick="sendResult('+i+')">SEND AUDIO</a>'+
					'</div>';
				break;
		}
		
		contentDiv+=
					'<div class="ui-block-a" style="text-align:center;vertical-align:middle;">'+
						'<a href="#" id="button-'+i+'-3" class="ui-btn ui-mini ui-btn-inline ui-corner-all" onclick="queryCalification('+i+')">QUERY CALIFICATION</a>'+
						'<p id="calification-'+i+'">CALIFICATION: NONE</p>'+
					'</div>'+				
				'</div>'+
			'</div>';	
		
		var footerDiv=
			'<div data-role="footer" data-position="fixed" style="padding-top:1%;">'+
				'<div class="ui-grid-b">'+
					'<div class="ui-block-a" style="text-align:left;width:20%;"><a href="#page-'+i+'" id="prev-'+i+'" class="ui-btn ui-icon-arrow-l ui-btn-icon-left ui-mini ui-btn-inline ui-corner-all" data-transition="turn">Prev</a></div>'+
					'<div class="ui-block-b" style="text-align:center;width:60%;"><h4 style="margin-bottom:1%;">2015-2016 TTA</h4></div>'+
					'<div class="ui-block-c" style="text-align:right;width:20%;"><a href="#page-'+i+'" id="next-'+i+'" class="ui-btn ui-icon-arrow-r ui-btn-icon-left ui-mini ui-btn-inline ui-corner-all" data-transition="turn">Next</a></div>'+
				'</div>'+
			'</div>';
		
		pageDiv.append(headerDiv,contentDiv,footerDiv);
		
//		alert("create2");
		return pageDiv;
	},
	load: function(i) {
//		alert("load1");
     	$("#statementDiv-"+i).html("<p>LESSON: "+exercises.lessonCode+"\tEXERCISE: "+exercises.exercise[i].exerciseCode+"</p>"+exercises.exercise[i].exerciseContent);

     	if(solutions.solution[i].exerciseSolution!="")
     		switch(exercises.exercise[i].exerciseType){
     			case "photo":
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
     		}

     	$("#prev-"+i).attr("href","#page-"+(i-1));
     	$("#next-"+i).attr("href","#page-"+(i+1));
//		alert("load7");
 	}
};

var fileUtilities = {
		moveAsync: function (sourceFullPath,destFolder,destName,onSuccess){
			var url="file://"+sourceFullPath;
			var destFile=destFolder+destName;
			var ft=new FileTransfer();//Crear objeto FileTransfer
		    ft.download(//Copiar (descargar) el fichero indicado por URL en destFile
				url,
				destFile,
		    	function() {//función successCallback: si el fichero se descargó bien
					window.resolveLocalFileSystemURL(url,//Acceder al fichero original por su URL
		    				function(fileEntry) {//función successCallback: si se ha podido acceder al fichero original
								fileEntry.remove(onSuccess);//Borrar el fichero y seguir con onSuccess
		    				},
		    				function(error) {
		    					alert("Source file NOT accesible; not removed");
		    				}
		    		);			
				},
				function(error) {
					alert('File not copied. '+'error.code: '+error.code+'\nerror.source: '+error.source+'\nerror.target: '+error.target+'\nerror.http_status: '+error.http_status);
				}
			);
		}
};

var photo = {
		fileFolder:null,
		fileName:null,
		takeAsync: function(fileFolder,fileName,onSuccess) {
			navigator.device.capture.captureImage(//Capturar una imagen
				function(photoFiles) {//función successCallback: si se tomó la imagen
					var tempFullPath=photoFiles[0].fullPath;//Ubicación del fichero de la imagen tomada
					
					tempFullPath=tempFullPath.substring(tempFullPath.indexOf("/"));
					alert("New photo in: "+tempFullPath);
					
					fileUtilities.moveAsync(tempFullPath,fileFolder,fileName,//Mover el fichero de la imagen tomada a fileFolder+fileName
				        function() {//función successCallback: si se movió el fichero
							photo.fileFolder=fileFolder;//Guardar en el atributo fileFolder del objeto photo, la carpeta destino
							photo.fileName=fileName;//Guardar en el atributo fileName del objeto photo, el nuevo nombre del fichero
							if(onSuccess!=false)
								onSuccess();
		        		}							
					);
				},
				function(error) {
					var msgText = "Photo error: " + error.message + "(" + error.code + ")";
					alert(msgText);
				}
			);
		}
}

var audio = {
		media:null,
		fileFolder:null,
		fileName:null,
		//debemos crear un objeto medio sobre el que trabajar
		create: function(fileFolder,fileName) {
			this.fileFolder=fileFolder;
			this.fileName=fileName;
			if(this.media){
				//Liveramos si existe un objeto media usado
				this.media.release();
			}
				
			this.media=new Media(this.fileFolder+this.fileName);//Crear nuevo objeto media del fichero fileName de fileFolder y guardarlo en el atributo media
		},
		//metodo para empezar a grabar
		doStartRecord: function() {
			this.create("","tmprecording.3gp");//Crear nuevo objeto para el atributo media, del fichero "tmprecording.3gp" de la carpeta por defecto
			if(this.media) {
		        this.media.startRecord();//Comenzar a grabar con el objeto del atributo media
		    }
			else {
				alert("No media file to record");
			}		
		},
		//Se le pasa la carpeta donde queremos guardado, lo que queremos que se ejecute una vez grabado
		doStopRecordAsync: function(fileFolder,fileName,onSuccess) {
			if(this.media) {
		        this.media.stopRecord();//Dejar de grabar con el objeto del atributo media
				
				fileUtilities.moveAsync(
						"/sdcard/tmprecording.3gp",fileName,//Mover el fichero de grabación creado "/sdcard/tmprecording.3gp", a la carpeta fileFolder, con nombre fileName
		        	function() {//función successCallback: si el fichero se ha movido
			    		audio.media.release();//Liberar el objeto del atributo media
						audio.fileFolder=fileFolder;//Guardar en el atributo fileFolder del objeto audio, la carpeta destino
						audio.fileName=fileName;//Guardar en el atributo fileName del objeto audio, el nuevo nombre del fichero
						if(onSuccess!=false)
							onSuccess();
		        	}
		        );
		    }
			else {
				alert("No media file to stop");
			}		
		}		
};
