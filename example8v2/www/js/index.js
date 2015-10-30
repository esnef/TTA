/*
 * $Id: index.js Oct 9, 2015 9:37:48 AM tta1516$
 * 
 * Copyright (C) 2015 Maider Huarte Arrayago
 * 
 * This file is part of TTA1516_LS-EX_08v2_www.zip.
 * 
 * TTA1516_LS-EX_08v2_www.zip is based on templates by Eclipse.org - Thym and it is intended
 * for learning purposes only.
 * 
 * TTA1516_LS-EX_08v2_www.zip is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 * 
 * TTA1516_LS-EX_08v2_www.zip is distributed in the hope that it will be useful, but WITHOUT
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
    	$("#question").text("QUESTION: "+test.question);
    	
    	//A cada elemento label cuyo id comience por 'label-radio-choice' insertarle el texto correspondiente
    	$("label[id|='label-radio-choice']").each(
    			function(index/*marca con cual de los QUE MARCA EL SELECTOR SE ESTA USANDO EN CADA MOMENTO*/){
    				$(this).text(test.resp[index])
    				
    			}
    	);
    }
};

app.initialize();
