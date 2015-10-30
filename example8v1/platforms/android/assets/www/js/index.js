/*
 * $Id: index.js Oct 9, 2015 9:33:11 AM tta1516$
 * 
 * Copyright (C) 2015 Maider Huarte Arrayago
 * 
 * This file is part of TTA1516_LS-EX_08v1_www.zip.
 * 
 * TTA1516_LS-EX_08v1_www.zip is based on templates by Eclipse.org - Thym and it is intended
 * for learning purpouses only.
 * 
 * TTA1516_LS-EX_08v1_www.zip is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 * 
 * TTA1516_LS-EX_08v1_www.zip is distributed in the hope that it will be useful, but WITHOUT
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
    // Bind any events that are questionuired on startup. Common events are:
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
//    	alert("receivedEvent1");
    	$("#question").text("QUESTION: "+test.question);
    	
    	$("#label-radio-choice-1-0").text(test.resp0);
    	
    	$("#label-radio-choice-1-1").text(test.resp1);
    	
     	$("#label-radio-choice-1-2").text(test.resp2);
    	
    	$("#label-radio-choice-1-3").text(test.resp3);
    	    	
//    	alert("receivedEvent2");
    	
    }
};

app.initialize();
