/*
 * $Id: objects.js Oct 13, 2015 3:29:37 PM tta1516$
 * 
 * Copyright (C) 2015 Maider Huarte Arrayago
 * 
 * This file is part of TTA1516_LS-EX_09v1_www.zip.
 * 
 * TTA1516_LS-EX_09v1_www.zip is based on templates by Eclipse.org - Thym and it is intended
 * for learning purposes only.
 * 
 * TTA1516_LS-EX_09v1_www.zip is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 * 
 * TTA1516_LS-EX_09v1_www.zip is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details
 * <http://www.gnu.org/licenses/>.
 */

var appConstants = {
	localPermanentStorageFolder: "/sdcard/eus.ehu.INTEL901_504021.TTA1516_LS_EX_09v1/",
	localPermanentStorageFolderImg: function () {
		return this.localPermanentStorageFolder+"img/";
	}		
};

var exercises = {
	login: null,
	lessonCode: "L1",
	total: 1,
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
	        		exerciseType: "photo",
	           }
	          ]
};

var solutions= {
		login: null,
		lessonCode: "L1",
		total: 1,
		solution: [
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
				'<h1 style="margin-left:0;margin-right:0;white-space: nowrap;overflow: visible;">TTA1516_LS-EX_09v1: exercises1</h1>'+
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
						'<label id="fileName-'+i+'-1" style="text-align:left;word-wrap:break-word;"></label>'+
						'<img id="image-'+i+'-1" alt="" src="" style="display:none;width:auto;height:auto;"/>'+
					'</div>'+
					'<div class="ui-block-a" style="text-align:center;vertical-align:middle;">'+
						'<a href="#" id="button-'+i+'-2" class="ui-btn ui-mini ui-btn-inline ui-corner-all" onclick="sendResult('+i+')">SEND PHOTO</a>'+
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
     		}

     	$("#prev-"+i).attr("href","#page-"+(i-1));
     	$("#next-"+i).attr("href","#page-"+(i+1));
     	
//			alert("load7");
 	}
};

var fileUtilities = {
		moveAsync: function (sourceFullPath,destFolder,destName,onSuccess){
			var url="file://"+sourceFullPath;
			var destFile=destFolder+destName;
			var ft=new FileTransfer();//Crear objeto FileTransfer
		    ft.download(url,destFile,//Copiar (descargar) el fichero indicado por URL en destFile
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
			navegator.device.capture.captureImage(//Capturar una imagen
				function(photoFiles) {//función successCallback: si se tomó la imagen
					var tempFullPath=photoFiles[0].fullPath//Ubicación del fichero de la imagen tomada
					
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
};
