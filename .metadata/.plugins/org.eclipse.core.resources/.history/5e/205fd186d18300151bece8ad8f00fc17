/*
 * $Id: index.js Oct 31, 2015 5:40:57 PM tta1516$
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

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
		//Establecer configuración para AJAX: no cache para GETs y contentType json
		loadInitalElements();
    	
    	$(window).bind('resize',fitImg); //Bind imgFit function to resize event
    }
};

app.initialize();

function fitImg() {
	var screenWidth=$(window).width()-16*2;
	var screenHeight=$(window).height()-16*2;
	$("img").each(
		function () {
			$(this).css({"max-width":screenWidth, "max-height":screenHeight});
		}
	);	
}

function loadInitalElements() {
//	alert("loadInitalElements 1");
	var proceed=true;	
	if(navigator.connection.type!=Connection.WIFI)
		proceed=confirm("Need to connect to remote URL. Proceed whitout WIFI connection?");	
	if(proceed==true) {
		(//Consultar en el Servidor las lecciones disponibles
			function(response,status) {//Función callback
				{//Si la HTTP-RESPONSE es OK
					var lessonsSelect=	'<label for="select-1" style="margin-top:15px;margin-bottom:5px;">Lessons:</label>'+
										'<select name="select-lesson" id="select-lesson" data-iconpos="right">';
					//Por cada lección recibida
						lessonsSelect+='<option value="'+response.lesson[i].lessonCode+'">'+response.lesson[i].lessonCode+': '+response.lesson[i].title+'</option>';
		
					lessonsSelect+='</select>';
					//Introducir el menú de lecciones en loginDiv, al principio
					$("body").enhanceWithin();			
				}
				else
					alert("NO RESPONSE FROM SERVER");					

				loadStoredData(response);
			}
		);
	}
//	alert("loadInitalElements 3");	
}

function loadStoredData(response) {/*
//	alert("loadStoredData 1");
	var savedExercises;
	var savedSolutions;
	
	fileUtilities.readTextFromFileAsync(appConstants.persistentStorageFolder(),appConstants.persistentStorageExercisesFile,
		function() {
			var content=fileUtilities.contentRead;
			savedExercises=JSON.parse(content);
	    	if(savedExercises!=undefined) {
	    		//Guardar en exercises el objeto leído del fichero de ejercicios
    	    	fileUtilities.readTextFromFileAsync(appConstants.persistentStorageFolder(),appConstants.persistentStorageSolutionsFile,
    	        	function() {
    	        		var content=fileUtilities.contentRead;
    	        		savedSolutions=JSON.parse(content);
    	        	   	if(savedSolutions!=undefined) {
    	        	   		//Guardar en solutions el objeto leído del fichero de soluciones
    	        	   		$("option[value='"+exercises.lessonCode+"']").attr("selected",true);
    	        	   		$("#select-lesson").selectmenu("refresh",true);
    	        			$("#login").val(solutions.login);
    	        			$("#button-1").text("NEW LOGIN");
    	        			$("#button-2").show();		
    	        	   	}
    	        	}
    	        );
	    	}
		}
	);*/
}
