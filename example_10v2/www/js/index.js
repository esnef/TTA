/*
 * $Id: index.js Oct 29, 2015 9:14:13 AM tta1516$
 * 
 * Copyright (C) 2015 Maider Huarte Arrayago
 * 
 * This file is part of TTA1516_LS-EX_10v2_www.zip.
 * 
 * TTA1516_LS-EX_10v2_www.zip is based on templates by Eclipse.org - Thym and it is intended
 * for learning purposes only.
 * 
 * TTA1516_LS-EX_10v2_www.zip is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 * 
 * TTA1516_LS-EX_10v2_www.zip is distributed in the hope that it will be useful, but WITHOUT
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
    	
    	var savedSolutions;
    	fileUtilities.readTextFromFileAsync(//Leer el contenido del fichero de soluciones
			appConstants.persistentStorageFolder(),appConstants.persistentStorageSolutionsFile,
    		function() {//función successCallback: si se ha podido leer
    			var content=fileUtilities.contentRead;//Contenido leído del fichero
    			savedSolutions=JSON.parse(content);
    			//Cuando el parseo funciona mal no devuelve un null sino un undefined
    	    	if(savedSolutions!=undefined) {
    	    		solutions=savedSolutions;//Guardar en solutions las soluciones leídas
    	    		exercises.login=solutions.login;
    				$("#login").val(solutions.login);
    				$("#button-1").text("NEW LOGIN");
    				$("#button-2").show();  		
    	    	}   			
    		}
    	);
    	$(window).bind('resize',fitImg);
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
